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
  fin = 'Give Feedback';
  link = 'pincha estos links, amigo';
  itemFilter: any = {};

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.itemListService.getItemList().subscribe(myItems => this.myItems = myItems);
  }
  totalItems() {
     let total = 0;
     this.myItems.forEach(item => {
      total += item.stock;
     });
     return total;
   // return this.myItems ? this.myItems.length : 0;
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
