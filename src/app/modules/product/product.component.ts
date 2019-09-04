import { Component, OnInit } from '@angular/core';
import { SeviceService } from 'src/app/sevices/sevice.service';
import { Movie } from 'src/app/sevices/Movies';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Movies: Movie[];
  constructor(private SeviceService: SeviceService ) { }


  ngOnInit() {this.getmovie();
  }


 getmovie(){
   this.SeviceService.getMovie().subscribe(Movies => this.Movies = Movies);
   console.log("TCL: ProductComponent -> getmovie -> this.Movies", this.Movies)
 }

 seat(){

 }

}
