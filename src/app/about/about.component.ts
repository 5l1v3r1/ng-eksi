import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  last_commits:any;

  constructor(private _http: HttpClient) {
    
   }

  ngOnInit() {
    this._http.get("https://api.github.com/repos/denizyesilirmak/ng-eksi/commits?per_page=10").subscribe(data => {
      this.last_commits = data;
      console.log(this.last_commits);
    })
  }

}
