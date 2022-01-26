import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  message_toast: string;
  history: number[];

  constructor(public toastController: ToastController) {
    var topic_id = localStorage.getItem('topic_id');
    console.log(JSON.parse(topic_id));
    this.obj = content[topic_id];
    this.phrase = Object.keys(this.obj)[0];
    this.depth = 0;
    this.message_toast = 'No more information. Press back or start over.';
    this.history = [];
  }

  traverse(val, objtraverse) {
    console.log(objtraverse);
    if (typeof objtraverse !== 'object') {
      this.phrase = objtraverse;
      this.presentToast();
      return;
    }
    this.history.push(val);

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

      this.setObj(objtraverse['No']);
    }
  }

  setObj(json_new) {
    this.obj = json_new;
    this.depth++;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message_toast,
      duration: 2000,
      showCloseButton: true,
      position: 'top',
    });

    toast.present();
  }

  source() {
    this.message_toast = JSON.parse(localStorage.getItem('source'));
    this.presentToast();
    this.message_toast = 'No more information. Press back or start over.';
  }
}
