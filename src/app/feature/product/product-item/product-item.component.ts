import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() Product : Product ; 
  // productService = new ProductService ();
 // @Output() itemAdded = new EventEmitter<Product>() ; 
  constructor(public productService : ProductService) { 
    // this.Product = {
    //   name : 'Photo Camera',
    //   price : 325 , 
    //   discount : 299,
    //   imgUrl : 'assets/images/products/product-grey-1.jpg'
    // }
  }
  getPrise() {
    return this.Product.discount ? this.Product.price - this.Product.discount : this.Product.price;
  }
  addItemToCart() {
   // this.itemAdded.next(this.Product);
   this.productService.productAdded.next(this.Product);
  }

}
