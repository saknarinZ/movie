import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeviceService } from 'src/app/sevices/sevice.service';
import { Movie } from 'src/app/sevices/Movies';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  Numseats: any;
  total: number;
  id
  Movies: Movie[];
  priceS: number
  pricevip: number;
  constructor(private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
    this.id = this.activeRuute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getmoviebyid()
    this.total = this.SeviceService.gettotalPrice();
    this.Numseats = this.SeviceService.getnumseat();
    this.priceS = this.SeviceService.getpriceS();
    this.pricevip = this.SeviceService.getpricevip();
  }


  getmoviebyid() {
    this.SeviceService.getmoviebyid(this.id).subscribe((Movies: any) => { return this.Movies = Movies });
  }


}
