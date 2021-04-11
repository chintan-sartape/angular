import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input('customer')
  customer:any;

  constructor(private router: Router) { 
    console.log('customer card view component')
  }

  // viewProfile(myParam: any = '', cust): void {
  //   const navigationDetails: any[] = ['/customer/profile'];
  //   console.log(cust)
  //   if(cust.length) {
  //     navigationDetails.push(cust);
  //   }
  //   this.router.navigate(navigationDetails);
  // }

  ngOnInit(): void {
  }

}
