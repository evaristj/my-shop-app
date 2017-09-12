import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { HttpModule } from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent, ItemListComponent, MySearchPipe, CartComponent, OrderComponent
  ],
  imports: [
    BrowserModule, FormsModule, Ng2FilterPipeModule, HttpModule
  ],
  providers: [ItemListService], bootstrap: [AppComponent]
})
export class AppModule { }
