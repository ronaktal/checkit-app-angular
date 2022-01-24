import { Component } from '@angular/core';

import * as content from './content_all.json';



@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class Detailpage {

  
  phrase: string;

  constructor() {
    var topic_id = localStorage.getItem('topic_id');
    console.log(topic_id);
    var a = content[topic_id];
    this.phrase = Object.keys(a)[0];

  }
}
