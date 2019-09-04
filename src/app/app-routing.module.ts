import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SeatComponent } from './modules/product/seat/seat.component';

const routes: Routes = [

  {

    path: 'product',
    component: LayoutComponent,
    loadChildren: './modules/product/product.module#ProductModule'
  },
  // {
  //   path: 'seat/:id',
  //   component: LayoutComponent,
  //   loadChildren: './modules/product/product.module#ProductModule'
  // },
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: '**', redirectTo: 'product'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
