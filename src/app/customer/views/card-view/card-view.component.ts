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

  constructor(private router: Router) { }

  viewProfile(myParam: any = ''): void {
    const navigationDetails: any[] = ['/customer/profile'];
    console.log(myParam)
    if(myParam.length) {
      navigationDetails.push(myParam);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

}
