import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  films: Observable<any>;

  online = true;

  constructor(public httpClient: HttpClient, private iab: InAppBrowser) {
    this.films = this.httpClient.get('https://httpbin.org/');
    this.films.subscribe(
      (data) => {
        this.online = true;
      },
      (error) => {
        this.online = true; //make this false in production
      }
    );
  }
  open_chat() {
    var ref = this.iab.create(
      'https://checkitup.live',
      '_system',
      'location=yes'
    );
    //    window.open('https://checkitup.live');
  }
}
