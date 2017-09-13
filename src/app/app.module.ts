import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { HttpModule } from '@angular/http';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

const appRoutes: Routes = [
  { path: 'item-list', component: ItemListComponent },
  { path: 'order-component', component: OrderComponent },
  { path: 'cart-component', component: CartComponent },
  { path: '',
    redirectTo: '/item-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, ItemListComponent, MySearchPipe, OrderComponent, CartComponent
  ],
  imports: [
    BrowserModule, FormsModule, Ng2FilterPipeModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
