import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart-models';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Cart;
  total = 0;
  ordered: boolean;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
    this.ordered = false;
  }
  updateTotal(total) {
    this.total = total;
  }

}
