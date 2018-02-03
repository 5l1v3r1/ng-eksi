import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  autoCompleteResults:any;

  onSearchChange(searchValue : string ) {  
    console.log(searchValue);
    if(searchValue != ''){
      this._http.get("http://80.209.224.120:5000/autocomplete/" + searchValue).
      subscribe(data => {
        this.autoCompleteResults = data['Titles'];
        
      },
      err => {
        console.log("hata");
      })

    }
    else{

    }

  
  }
    

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
