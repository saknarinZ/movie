import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { seatRow, Movie } from 'src/app/sevices/Movies';
import { SeviceService } from 'src/app/sevices/sevice.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  Numseats: any;
  Movies: Movie[];
  SEAT: seatRow[] = [];
  id
  price: number;
  constructor(
    private activeRuute: ActivatedRoute,
    private SeviceService: SeviceService) {
    this.id = this.activeRuute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.getseat()

  }

  getseat() {
    this.SeviceService.getseat().subscribe(SEAT => this.SEAT = SEAT);


  }
  status(seat) {


    if (seat.status == "BUSY") {
      return;
    }
    if (seat.status == "IDLE") {
      seat.status = "MARKING"
    }
    else {
      seat.status = "IDLE"
    }

  }

  totalPrice() {
    this.Numseats = this.SeviceService.getseatmarking().length
    this.price = 0;
    this.SeviceService.getseatmarking().forEach((seatmarking) => {
      this.SEAT.map((seatrow) => {
        seatrow.seats.map((seat) => {
          if (seat.id == seatmarking.id) {
            this.price += seat.price
            seat.status = "BUSY"
            this.SeviceService.settotalPrice(this.price,this.Numseats);
          }
        })
      })
    })

  }


}
