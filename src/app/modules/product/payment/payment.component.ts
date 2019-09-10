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
  constructor(private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
    this.id = this.activeRuute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getmoviebyid()
    this.total = this.SeviceService.gettotalPrice();
    console.log("TCL: PaymentComponent -> ngOnInit -> this.total", this.total)
    this.Numseats = this.SeviceService.getnumseat();
  }


  getmoviebyid() {
    this.SeviceService.getmoviebyid(this.id).subscribe((Movies: any) => { return this.Movies = Movies });
  }


}
