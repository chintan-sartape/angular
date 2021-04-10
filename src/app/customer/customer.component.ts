import { Component, Input, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/dt-data';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // Read the data from dt-data.ts
  customers = CUSTOMERS;

  // tab link highlight active class
  activeCardClass: boolean = true;
  activeListClass: boolean = false;
  activeAddCustomerClass: boolean = false;

  cardView () {
    this.activeCardClass = true
    this.activeListClass = false
    this.activeAddCustomerClass = false
  }
  listView () {
    this.activeListClass = true
    this.activeCardClass = false
    this.activeAddCustomerClass = false
  }
  addCustomer () {
    this.activeAddCustomerClass = true
    this.activeListClass = false
    this.activeCardClass = false
  }
  
  @Input('item') item: any;
  
  constructor() { 
    console.log('customer component')
  }

  ngOnInit(): void {
  }

}
