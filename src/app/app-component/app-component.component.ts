import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss'],
})
export class AppComponentComponent implements OnInit {
title = "bob"
isExplanded=false;
  constructor() { }
  expand(){
      this.isExplanded= !this.isExplanded;
      console.log(this.isExplanded);
  }
  ngOnInit() {}

}


