import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  mobiles=[
    {
      name:'NOKIA',
      price:10000,
      stock:50
    },
    {
      name:'MI',
      price:20000,
      stock:800
    },
    {
      name:'APPLE',
      price:100000,
      stock:20
    }
  ]

}
