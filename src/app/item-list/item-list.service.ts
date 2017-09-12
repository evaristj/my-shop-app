import { Item } from './item-models';
// import { ITEMS } from './mocks';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

 // const URL = 'http://localhost:3000/item-list';

@Injectable()
export class ItemListService {

    constructor (private http: Http) {}

    getItemList(): Observable<Item[]> {
        return this.http.get('http://localhost:3000/item-list')
        .map((res: Response) => res.json())
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
    addItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3000/item-list', item, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`http://localhost:3000/item-list/${item['id']}`, item, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

