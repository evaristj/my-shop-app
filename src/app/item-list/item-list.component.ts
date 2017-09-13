import { Component, OnInit } from '@angular/core';
import { Item } from './item-models';
import { ItemListService } from './item-list.service';
import { CartService } from "../cart/cart.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  itemFilter: any = {};

  constructor(private itemListService: ItemListService, private cartService: CartService) { }

  ngOnInit() {
    this.itemListService.getItemList().subscribe(myItems => this.myItems = myItems);
  }
  totalItems() {
   return this.myItems ? this.myItems.reduce((prev, current) => prev + current.stock, 0) : 0;
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
  // actualizar items
  updateItem(item: Item) {
    item.isSelected = false;
    this.itemListService.updateItem(item).subscribe();
  }
  editable(item: Item) {
    item.isSelected = true;
  }

  addToCart(item: Item) {
    this.cartService.cart.myItems.push(item);
    console.log(this.cartService.cart);
  }

}
