import { Product } from 'src/app/_model/product';
import { EventEmitter } from '@angular/core';
import { ProductLang } from 'src/app/_model/product-lang';
// import { from } from 'rxjs';
export class ProductService
{
    products :Product[] = [ //reference type (the original array)
        {id : 1, data : [{ name :' Photo Camera' , description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], 
        price : 223 , discount : 38 , imgsUrl : [' /assets/images/products/product-grey-1.jpg']},
        {id : 2, data : [{name : 'MOB', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 250 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 3, data : [{name : 'PHONE', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 263 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 4, data : [{name : 'LABTOP', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 323 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 5, data : [{name : 'MAC', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 423 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 6, data : [{name : 'CAMERA', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 229 , imgsUrl :[ ' assets/images/products/product-grey-1.jpg']},
        {id : 7, data : [{name : 'TV 2', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 623 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 8, data : [{name : 'TV 3', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 823 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 9, data : [{name : 'TV 6', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 123 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 10,data : [{ name : 'TV', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 223 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 11,data : [{ name : 'MOB', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 250 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 12,data : [{ name : 'PHONE', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 263 , discount : 38 , imgsUrl : [' assets/images/products/product-grey-1.jpg']},
        {id : 13,data : [{ name : 'LABTOP', description : 'it is a good product',lang : {id : 1 , name : 'eng'}}], price : 323 , imgsUrl : [' assets/images/products/product-grey-1.jpg']}
      ];
    productAdded =  new EventEmitter <Product> (); 
    
    getAll() : Product[] { //fill the array products and return a copy of the original array
        return this.products.slice(); //slice cut the array from 0 to the end to give a clone of this array
    }
    getById( id :number) :Product 
    {
        return this.products.find( a => a.id === id);  // a is the product that its id(a.id) match our parameter (id) && filter return array while fild loop the array and return one item
    }
    add(product : Product)//no need to id as DB generate the id
    {
        const createId = this.products.length //we don't have DB so we give it the id (the next number of the last number in the array)
       const productItem : Product= {id :createId, data : product.data , price : product.price, 
        discount : product.discount , imgsUrl : product.imgsUrl, category : product.category ,
        paymentTypes : product.paymentTypes ,tags : product.tags};
        this.products.push(productItem);

    }
    save( product : Product){ //update
        const index = this.products.findIndex (a => a.id === product.id);
        this.products[index] = { id : product.id , data : product.data , price : product.price, 
            discount : product.discount , imgsUrl : product.imgsUrl, category : product.category ,
            paymentTypes : product.paymentTypes ,tags : product.tags };
    }
    delete(id : number){
       const index =  this.products.findIndex( a => a.id === id);
       this.products.splice(index,1);
    }
}