import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { seatRow } from 'src/app/sevices/Movies';
import { SeviceService } from 'src/app/sevices/sevice.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  SEAT: seatRow[];
  constructor(
    private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
    const id = this.activeRuute.snapshot.paramMap.get('id');
    this.getProductByID(id);
  }

  ngOnInit() {
    this.getseat()

  }

  getProductByID(id) {

  }

  getseat() {
    this.SeviceService.getseat().subscribe(SEAT => this.SEAT = SEAT);
    console.log("TCL: ProductComponent -> getmovie -> this.Movies", this.SEAT)
  }
}
