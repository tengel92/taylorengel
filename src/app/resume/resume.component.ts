import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  displayWorkDetails1 = false;
  displayWorkDetails2 = false;
  displayWorkDetails3 = false;
  displayWorkDetails4 = false;

  constructor() { }

  ngOnInit() {
    this.displayWorkDetails1 = true;
  }
  showWorkDetails1() {
   this.displayWorkDetails1 = true;
   this.displayWorkDetails2 = false;
   this.displayWorkDetails3 = false;
   this.displayWorkDetails4 = false;
  }
  showWorkDetails2() {
   this.displayWorkDetails1 = false;
   this.displayWorkDetails2 = true;
   this.displayWorkDetails3 = false;
   this.displayWorkDetails4 = false;
  }
  showWorkDetails3() {
   this.displayWorkDetails1 = false;
   this.displayWorkDetails2 = false;
   this.displayWorkDetails3 = true;
   this.displayWorkDetails4 = false;
  }
  showWorkDetails4() {
   this.displayWorkDetails1 = false;
   this.displayWorkDetails2 = false;
   this.displayWorkDetails3 = false;
   this.displayWorkDetails4 = true;
  }
}
