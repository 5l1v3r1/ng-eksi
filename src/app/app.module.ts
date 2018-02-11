import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntriesComponent } from './entries/entries.component';

import {BakinizPipe, CharacterEscapePipe} from './bakiniz.pipe';

const appRoutes: Routes = [
  { path: 'entry/:title/:pageNo', component: EntriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntriesComponent,
    BakinizPipe,
    CharacterEscapePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
