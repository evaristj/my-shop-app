import { Item } from './item-models';
import { ITEMS } from './mocks';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemListService {

    constructor (private http: Http) {}

    getItemList(): Observable<Item[]> {
        return this.http.get('http://localhost:3000/item-list')
        .map((res: Response) => res.json())
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
}
