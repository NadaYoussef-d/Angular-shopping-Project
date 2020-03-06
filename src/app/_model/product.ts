import { ProductLang } from './product-lang';
import { PaymentType } from './payment-type';
import { ProductCategory } from './productCategory';
import { Tag } from './tags';

export interface Product {
    data? : ProductLang[];
    price? : number;
    discount? : number;
    imgsUrl? : string[];
    id? : number;
    paymentTypes?: PaymentType[];
    category? : ProductCategory; 
    tags ? : Tag[];
}