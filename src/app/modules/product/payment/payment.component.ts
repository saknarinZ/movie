import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  id
  constructor(private activeRuute: ActivatedRoute) {
    this.id = this.activeRuute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
