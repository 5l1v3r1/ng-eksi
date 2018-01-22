import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries:any;
  constructor(private _http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('title');
    console.log(id);
    this._http.get("http://80.209.224.120:5000/topic/" + id).subscribe(data => {
      this.entries = data["Entries"];
      console.log(this.entries);

    },
    err => {
      alert("Api Unavaible. /topic")
    })
  }

}
