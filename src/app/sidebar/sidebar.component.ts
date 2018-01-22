import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  entrylist:any;


  constructor(private _http:HttpClient) { }

  getToday(){
    this.entrylist = [];

    this._http.get("http://80.209.224.120:5000/today").subscribe(data => {
      this.entrylist = data["Topics"];
      this.entrylist.forEach(element => {
        element["link"] = element.Title.replace(/ /g,"-");
      });
    },
    err => {
      alert("Api Unavaible. /today")
    })

  }
test
  // LİNKLERDEKİ BOŞLUKLAR TİREYE ÇEVRİLECEK

  getPopular(){
    this.entrylist = [];
    this._http.get("http://80.209.224.120:5000/popular").subscribe(data => {
      this.entrylist = data["Topics"];
      this.entrylist.forEach(element => {
        element["link"] = element.Title.replace(/ /g,"-");
      });
    },
    err => {
      alert("Api Unavaible. /popular")
    })
  }

  ngOnInit() {
    this.getToday();
  }

}
