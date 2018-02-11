import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
  preloaderVisible:boolean = false;
  constructor(private _http: HttpClient, private route: ActivatedRoute, private location: Location) {

    console.log("anan");
  }

  getEntries(id:string, page:number) {
    this.preloaderVisible = true;
    this.entries = [];
    this._http.get("https://eksisozluk.denizer.com/topic/" + id + "/" + page).subscribe(data => {
      this.preloaderVisible = false;
      this.entries = data;
      
      window.scrollTo(0, 0);


    },
      err => {
        alert("Api Unavaible. /topic")
      })
  }


  ngOnInit() {
    this.route.params.forEach(params => {
      let userId = params["title"];
      let pageNo = params["pageNo"];
      this.getEntries(userId,pageNo);
    })
    const id = this.route.snapshot.paramMap.get('title');
    // console.log(id);

  }
}
