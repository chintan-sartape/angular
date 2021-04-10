import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  constructor() { }
  @Input('customer')
  customer:any;

  ngOnInit(): void {
  }

}
