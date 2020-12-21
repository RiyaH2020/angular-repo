import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url:string='assets/animal.jpg';
  url1:string='assets/insect.jpg';
  data:string="Panda";
  data1:string="HoneyBee";

  constructor() { }

  ngOnInit() {
  }

}
