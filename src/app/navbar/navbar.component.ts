import { Component, Input, OnInit ,EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent implements OnInit {
  constructor(private _http: HttpClient) { }

  autoCompleteResults: any;
  query:string;
  selectedTitle:string = "";

  onSearchChange(searchValue: string) {
    
    console.log(searchValue);
    if (searchValue != '') {
      this.autoCompleteVisible = true;
      this._http.get("http://80.209.224.120:5000/autocomplete/" + searchValue).
        subscribe(data => {
          this.autoCompleteResults = data['Titles'];
        },
        err => {
          console.log("hata");
        })

    }
    else {
      this.autoCompleteVisible = false;
      this.autoCompleteResults = [];
    }


  }


  autoCompleteVisible: boolean = false;
  onFocus() {
    console.log("focus");
    this.autoCompleteVisible = true;
    
  }
  onBlur() {
    console.log("Blur");
    // this.autoCompleteVisible = false;
  }

  backgroundClick(){
    this.autoCompleteVisible = false;
  }
  
  autocompletePick(item:string){
    console.log(item)
    this.query = item;
    this.selectedTitle = item;

    
    
    
  }

  ngOnInit() {

  }

}
