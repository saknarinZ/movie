import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, MOVIES, SEAT } from './Movies';




@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor() { }

  getMovie():Observable<Movie[]>{
    return of (MOVIES);
  }

  getseat(){
    return of (SEAT);
  }


}
