import { Injectable } from '@angular/core';
import { Cart } from './cart-models';
import { Item } from '../item-list/item-models';

@Injectable()
export class CartService {
  cart: Cart;
  constructor() {
    this.cart = new Cart();
    this.cart.myItems = new Array<Item>();
   }

  addItems(item: Item) {
    const i = this.cart.myItems.indexOf(item);
    if (i !== -1) {
      this.cart.myItems[i].quantity += item.quantity;
      console.log(this.cart.myItems[i]);
    }else {
      this.cart.myItems.push(item);
      console.log(this.cart.myItems);
    }
  }
  getTotalCart(): number {
    return this.cart.myItems ? this.cart.myItems.reduce((prev, current) => prev + current.price, 0) : 0;
  }
  getSingleItem(item: Item): number {
    return item.price * item.quantity;
  }
}
