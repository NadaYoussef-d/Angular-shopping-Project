import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ProductListingComponent } from './feature/product/product-listing/product-listing.component';
import { ProductAddingComponent } from './feature/product/product-adding/product-adding.component';
import { ProductItemComponent } from './feature/product/product-item/product-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LogInComponent } from './feature/log-in/log-in.component';
import { SliderComponent } from './shared/slider/slider.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './feature/product/product.service';
import { PaymentTypeService } from './feature/payment-type/payment-type.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListingComponent,
    ProductAddingComponent,
    ProductItemComponent,
    FooterComponent,
    HeaderComponent,
    LogInComponent,
    SliderComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path : '' , component : ProductListingComponent},
      // {path : ' ', redirectTo: 'Home' , pathMatch : 'full'},
      {path : 'Home' ,redirectTo : '', pathMatch : 'full'},
      {path : 'product-listing' , component : ProductListingComponent},
      {path : 'product-add' , component : ProductAddingComponent},
      {path : 'log-in' , component : LogInComponent}
       //{path : '**' , component : Error}
    ])
  ],
  providers: [ProductService
  ,PaymentTypeService
], // this is a general obj in the whole app , creating new one in a specific component will override this general one 
  bootstrap: [AppComponent]
})
export class AppModule { }
