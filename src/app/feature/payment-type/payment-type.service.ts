 import { PaymentType } from 'src/app/_model/payment-type'

 export class PaymentTypeService {
     paymentType : PaymentType[] = [
         { id:1 , name : 'Direct BankTransfere'},
         { id:2 , name : 'cheque payment'},
         { id:3 , name : 'Paypal'},
         { id:4 , name : 'visa'},
         { id:5 , name : 'Master card'},
         { id:6 , name : 'on deliver'},
         { id:6 , name : 'on fire'}
     ];

     getAll() : PaymentType[]
     {
         return this.paymentType.slice();
     }
     //and all other crad operations
 }