import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.sass']
})
export class EntriesComponent implements OnInit {
  entries: any;
  constructor(private _http: HttpClient, private route: ActivatedRoute, private location: Location) {

    console.log("anan");
  }

  getEntries(id:string) {
    this._http.get("https://eksi-sozluk.herokuapp.com/topic/" + id).subscribe(data => {
      this.entries = data["Entries"];
      console.log(this.entries);

    },
      err => {
        alert("Api Unavaible. /topic")
      })
  }


  ngOnInit() {
    this.route.params.forEach(params => {
      let userId = params["title"];
      this.getEntries(userId);
    })
    const id = this.route.snapshot.paramMap.get('title');
    console.log(id);

  }
}
