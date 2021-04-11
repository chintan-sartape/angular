import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CUSTOMERS } from 'src/dt-data';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  customers = CUSTOMERS;

  name: string 
  location: string
  iconUrl: string
  orders: number
  category: string
  id: number

  constructor(private ActivatedRoute : ActivatedRoute) {

    console.log('customer profile')
    console.log(this.ActivatedRoute.snapshot.params.id)
    this.id = this.ActivatedRoute.snapshot.params.id;

    for ( let i in this.customers) {
      
      console.log("Block statement execution no." + i)

      if (this.customers[i].id == this.id){
        this.name = this.customers[i].name; 
        this.location = this.customers[i].location; 
        this.iconUrl = this.customers[i].iconUrl; 
        this.orders = this.customers[i].orders; 
        this.category = this.customers[i].category; 
        console.log(this.customers[i])
      }

    }
  }

  ngOnInit(): void {
    console.log('customer profile ngOnInit')
    console.log(this.customers)
    console.log(this.name)
  }

}
