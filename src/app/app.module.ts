import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {DataService} from './services/data.service';
import { HandComponent } from './components/hand/hand.component';
import { TileComponent } from './components/tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HandComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
