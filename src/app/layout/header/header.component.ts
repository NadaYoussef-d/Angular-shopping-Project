import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/feature/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() shoppingListProducts : Product[] =[];
  constructor(public productService : ProductService) { } //inject productService

  ngOnInit() {
    // const productService = new ProductService();
    // debugger;
    this.productService.productAdded.subscribe( //this as productService became a member variable
     // (product) => { alert('header?');},
     (product) => {this.shoppingListProducts.push(product)}
    
    )
  }
}
