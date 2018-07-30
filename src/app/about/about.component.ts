import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  birthDate;
  currentDate;
  age;

  constructor() { }

  ngOnInit() {
    this.birthDate = moment('1992-04-09');
    this.currentDate = moment();
    this.age = this.currentDate.diff(this.birthDate, 'years'); 
  }

}
