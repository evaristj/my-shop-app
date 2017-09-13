import { Injectable } from '@angular/core';
import { Cart } from './cart-models';
import { Item } from '../item-list/item-models';

@Injectable()
export class CartService {
  cart: Cart;
  constructor() {
    this.cart = new Cart();
    this.cart.myItems = [];
   }

  addItems(item: Item) {
    this.cart.myItems.push(item);
  }
}
