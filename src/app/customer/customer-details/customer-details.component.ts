import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // @Input will bind porperty with the parent data
  @Input('customer')
  customer:any;

  // @Input('id')
  // customerId:number;

  // @Input('name')
  // customerName: string;

  constructor(private router: Router) {
    console.log('customer detail component')
  }

  ngOnInit(): void {
  }

}
