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
  id
  Movies: Movie[];
  constructor(private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
    this.id = this.activeRuute.snapshot.paramMap.get('id');
    console.log("TCL: PaymentComponent -> constructor -> id", this.id)
  }

  ngOnInit() {
    this.getmoviebyid()
  }


  getmoviebyid() {
    this.SeviceService.getmoviebyid(this.id).subscribe((Movies: any) =>
    { return this.Movies = Movies });
  }

}
