import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.sass'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('5ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0}),
            style({opacity: .5}),
            style({opacity: 1,}),
          ]))]), {optional: true})
      ])
    ])

  ]
})


export class EntriesComponent implements OnInit {
  entries: any;
  preloaderVisible:boolean = false;
  constructor(private _http: HttpClient, private route: ActivatedRoute, private location: Location) {

    console.log("anan");
  }

  getEntries(id:string) {
    this.preloaderVisible = true;
    this.entries = [];
    this._http.get("https://eksisozluk.denizer.com/topic/" + id).subscribe(data => {
      this.preloaderVisible = false;
      this.entries = data["Entries"];
      
      window.scrollTo(0, 0);


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
    // console.log(id);

  }
}
