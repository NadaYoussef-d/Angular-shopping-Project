import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/_model/product';
import { NgForm } from '@angular/forms';
import { PaymentType } from 'src/app/_model/payment-type';
import { PaymentTypeService } from '../../payment-type/payment-type.service';

@Component({
  selector: 'app-product-adding',
  templateUrl: './product-adding.component.html',
  styleUrls: ['./product-adding.component.scss']
})
export class ProductAddingComponent implements OnInit {
  product : Product = {data :[{name : 'hello from js'}]};
  paymentTypes : PaymentType[];
  constructor( private productService : ProductService ,private paymentTypeService : PaymentTypeService) { }

  ngOnInit() {
    this.paymentTypes = this.paymentTypeService.getAll(); // fill the array from service / DB
  }
  onSubmit(myForm : NgForm){
     console.log(myForm)
   //const product : Product = { // this is the js obj which will be filled with the data from the template && then send this data to DB
    // data : [{name : txtName , description : txtDescription , lang : {id :1  }}]
    //};
    console.log(this.product)
   this.productService.add(this.product);
  }

}
