import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'seat/:id',
        component: SeatComponent
      },
      {
        path: 'payment/:id',
        component: PaymentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
