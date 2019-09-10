import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, MOVIES, SEAT } from './Movies';




@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor() { }

  getMovie(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getmoviebyid(id) {
    return of(MOVIES.find(res => id == res.id));
  }

  getseat() {
    return of(SEAT);
  }

  getseatmarking() {
    let marking = []
    SEAT.forEach((seatrow) => {
      seatrow.seats.forEach((seat)=>{
       if ( seat.status == 'MARKING'){
        marking.push(seat)
       }
      })
    })
    return marking;

  }
}
