import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  entrylist:any;
  showpreloader: boolean = true;


  constructor(private _http:HttpClient) { }

  getToday(){
    this.showpreloader = true;
    this.entrylist = [];

    this._http.get("http://80.209.224.120:5000/today").subscribe(data => {
      this.entrylist = data["Topics"];
      this.showpreloader = false;
    },
    err => {
      alert("Api Unavaible. /today")
    })
    
  }
test
  // LİNKLERDEKİ BOŞLUKLAR TİREYE ÇEVRİLECEK

  getPopular(){
    this.showpreloader = true;
    this.entrylist = [];
    this._http.get("http://80.209.224.120:5000/popular").subscribe(data => {
      this.entrylist = data["Topics"];
      this.showpreloader = false;

    },
    err => {
      alert("Api Unavaible. /popular")
    })
  }

  ngOnInit() {
    this.getToday();
  }

}
