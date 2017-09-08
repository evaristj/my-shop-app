import { Component, OnInit } from '@angular/core';
import { Item } from './item-models';
import { ITEMS } from './mocks';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  fin = 'Give Feedback';
  link = 'pincha estos links, amigo';

  constructor() { }

  ngOnInit() {
    this.myItems = ITEMS;
  }
  totalItems() {
  /* otra forma de recorrer un elemento de un array y sumarlo
    let sum = 0;
    for (let item of this.myItems){
      sum += item.stock;
    }
    return sum;
    */
    /*
    totalItems(){
    return this.myItems.reduce(function (prev, current) { return prev + current.stock; }, 0);
    }
    totalItems(){
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
    }
    */
    let total = 0;
    this.myItems.forEach(item => {
      total += item.stock;
    });
    return total;
  }
  upQuantity(item: Item) {
    if (item.stock > 0) {
      item.quantity++;
      item.stock--;
    }else {
      console.log();
    }
  }
  downQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }
  }
  showKey(event) {
    alert(event.keyCode);
  }
  getCoord(event) {
    console.log(event.clientX + ', ' + event.clientY);
  }

}
