import { Component } from '@angular/core';

import * as content from './content_all.json';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class Detailpage {
  phrase: string;
  obj: JSON;
  depth: number;
  objtraverse: JSON;

  constructor() {
    var topic_id = localStorage.getItem('topic_id');
    console.log(topic_id);
    this.obj = content[topic_id];
    this.phrase = Object.keys(this.obj)[0];
    this.depth = 0;
  }

  traverse(val, objtraverse) {
    console.log(objtraverse);
    if (typeof objtraverse !== 'object') {
      this.phrase = objtraverse;
      return;
    }

    objtraverse = objtraverse[Object.keys(objtraverse)[0]];

    if (val == 1) {
      if (typeof objtraverse['Yes'] !== 'object') {
        this.phrase = objtraverse['Yes'];
      } else {
        this.phrase = Object.keys(objtraverse['Yes'])[0];
      }
      
      this.setObj(objtraverse['Yes']);
    } else {
      if (typeof objtraverse['No'] !== 'object') {
        this.phrase = objtraverse['No'];
      } else {
        this.phrase = Object.keys(objtraverse['No'])[0];
      }
      
    }
  }

  setObj(json_new) {
    this.obj = json_new;
    this.depth++;
  }
}
