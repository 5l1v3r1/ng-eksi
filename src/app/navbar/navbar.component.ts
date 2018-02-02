import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  autoCompleteVisible:boolean = false;

  onFocus(){
    console.log("focus");
    this.autoCompleteVisible = true;
  }

  onBlur(){
    console.log("Blur");
    this.autoCompleteVisible = false;
  }

  ngOnInit() {
  }

}
