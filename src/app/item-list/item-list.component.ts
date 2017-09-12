import { Component, OnInit } from '@angular/core';
import { Item } from './item-models';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  itemFilter: any = {};

  constructor(private itemListService: ItemListService) { }

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
    this.itemListService.updateItem(item).subscribe();
  }

}
