import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  @Input() products : Product[];
  // @Output() oneItemAdded = new EventEmitter <Product> ();
  pages : number[] = [];
  currentPage = 0;
  // @Input() pageSize : number;
  pageSize : number = 7;
  // productService = new productService();

  constructor(public productService : ProductService) {}
  // test(prd : Product){
  //     alert (prd.name);
  // }

  ngOnInit() {
    if (this.products == null)
    this.products = this.productService.getAll();
    for ( let i = 0 ; i < this.products.length/ this.pageSize ; i++){
      this.pages.push(i + 1);
    }
  }
  // onItemAdded(prd : Product){
  //   this.oneItemAdded.next (prd);
  // }
  pageContent(){
    const start = this.currentPage * this.pageSize ;
   return this.products.slice (start, start+ this.pageSize);
  }
}
