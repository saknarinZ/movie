import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [ProductComponent, SeatComponent, PaymentComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ]
})
export class ProductModule { }
