import { Component, Input, OnInit ,EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { fail } from 'assert';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent implements OnInit {
  constructor(private _http: HttpClient) { }

  autoCompleteResults: any;
  pickedItem:string;
  selectedTitle:string = "";
  searchBoxText:string;
  optionVisible:boolean = false;

  onSearchChange(searchValue: string) {
    this.searchBoxText = searchValue;
    if (searchValue != '') {
      this.autoCompleteVisible = true;
      this._http.get("https://eksisozluk.denizer.com/autocomplete/" + searchValue).
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
    if(this.searchBoxText == ""){
      this.autoCompleteVisible = true;
    }
    else{
      this.autoCompleteVisible= false;
    }
    
  }
  onBlur() {
    // this.autoCompleteVisible = false;
  }

  backgroundClick(){
    this.autoCompleteVisible = false;
  }
  
  autocompletePick(item:string){
    this.pickedItem = item;
    this.selectedTitle = item;
    this.autoCompleteVisible = false;
  }

  toggleOption(){
    if(this.optionVisible == false){
      this.optionVisible = true
    }
    else{
      this.optionVisible = false;
    }
  }

  ngOnInit() {

  }

}
