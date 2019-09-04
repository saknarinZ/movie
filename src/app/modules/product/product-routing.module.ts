import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { SeatComponent } from './seat/seat.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'seat/:id',
        component: SeatComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
