import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { seatRow, Movie } from 'src/app/sevices/Movies';
import { SeviceService } from 'src/app/sevices/sevice.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  Movies: Movie[];
  SEAT: seatRow[] = [];
  id
  constructor(
    private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
      this.id = this.activeRuute.snapshot.paramMap.get('id');

  }

  ngOnInit() {

    this.getseat()

  }

  status(seat) {
    if (seat.status=="BUSY"){
      return;
    }
    if (seat.status == "IDLE") {
      seat.status = "MARKING"
    }
    else {
      seat.status = "IDLE"
    }
         console.log("TCL: SeatComponent -> status -> seat", seat)
  }

  totalPrice(){

  }

  getseat() {
    this.SeviceService.getseat().subscribe(SEAT => this.SEAT = SEAT);
    this.SEAT.reverse();

  }

}
