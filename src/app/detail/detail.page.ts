import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as tips from './tips_all.json';
import * as content from './content_all.json';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class Detailpage {
  phrase: string;
  obj: JSON;
  backobj: JSON;
  origobj: JSON;
  depth: number;
  objtraverse: JSON;
  message_toast: string;
  question_phrase: string;
  history: number[];
  topicid: number;
  tipsid: number;

  constructor(public toastController: ToastController, private router: Router) {
    if (localStorage.getItem('tips_id') === null) {
      var topic_id = localStorage.getItem('topic_id');
      this.topicid = parseInt(topic_id);
      this.obj = content[topic_id];
      this.backobj = content[topic_id];
      this.origobj = content[topic_id];
    } else {
      var tipsid = localStorage.getItem('tips_id');
      this.tipsid = parseInt(tipsid);
      this.obj = tips[tipsid];
      this.backobj = tips[tipsid];
      this.origobj = tips[tipsid];
    }
    this.question_phrase = '';
    if (typeof this.obj === 'object') {
      this.updatephrase(Object.keys(this.obj)[0]);
    } else {
      this.updatephrase(this.obj);
    }
    this.depth = 0;
    this.message_toast = 'No more information. Press back or start over.';
    this.history = [];
  }

  updatephrase(new_phrase) {
    this.question_phrase = '';
    var temp_phrase = new_phrase;
    try {
      let pattern_yes = /((P|p)ress.*?\'Yes\'.*?\.)/gim;
      let yes_result = temp_phrase.match(pattern_yes)[0];
      temp_phrase = temp_phrase.replace(pattern_yes, '');
      this.question_phrase += yes_result;
      console.log(yes_result);
    } catch (e) {}
    try {
      let pattern_no = /((P|p)ress.*?\'No\'.*?\.)/gim;
      let no_result = temp_phrase.match(pattern_no)[0];
      temp_phrase = temp_phrase.replace(pattern_no, '');
      console.log(no_result);
      this.question_phrase += ' ' + no_result;
    } catch (e) {}

    var rg = /\s[^a-z]*\:/gm;

    temp_phrase = temp_phrase.replace(rg, function (match) {
      return '<br><br>' + match + '<br>';
    });

    this.phrase = temp_phrase;
  }

  traverse(val, objtraverse) {
    console.log(objtraverse);
    if (typeof objtraverse !== 'object') {
      this.updatephrase(objtraverse);
      this.presentToast();
      return;
    }

    this.history.push(val);
    console.log(this.history);
    objtraverse = objtraverse[Object.keys(objtraverse)[0]];

    if (val == 1) {
      if (typeof objtraverse['Yes'] !== 'object') {
        this.updatephrase(objtraverse['Yes']);
      } else {
        this.updatephrase(Object.keys(objtraverse['Yes'])[0]);
      }
      this.setObj(objtraverse['Yes']);
    } else {
      if (typeof objtraverse['No'] !== 'object') {
        this.updatephrase(objtraverse['No']);
      } else {
        this.updatephrase(Object.keys(objtraverse['No'])[0]);
      }

      this.setObj(objtraverse['No']);
    }
  }

  traverse_internal_last(val, objtraverse) {
    // console.log(objtraverse);

    objtraverse = objtraverse[Object.keys(objtraverse)[0]];

    if (val == 1) {
      if (typeof objtraverse['Yes'] !== 'object') {
        this.updatephrase(objtraverse['Yes']);
      } else {
        this.updatephrase(Object.keys(objtraverse['Yes'])[0]);
      }
      this.setObj(objtraverse['Yes']);
    } else {
      if (typeof objtraverse['No'] !== 'object') {
        this.updatephrase(objtraverse['No']);
      } else {
        this.updatephrase(Object.keys(objtraverse['No'])[0]);
      }

      this.setObj(objtraverse['No']);
    }
  }

  traverse_internal(val, objtraverse) {
    //console.log(objtraverse);
    objtraverse = objtraverse[Object.keys(objtraverse)[0]];

    if (val == 1) {
      if (typeof objtraverse['Yes'] !== 'object') {
      } else {
      }
      this.backobj = objtraverse['Yes'];
    } else {
      if (typeof objtraverse['No'] !== 'object') {
      } else {
      }
      this.backobj = objtraverse['No'];
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

  back() {
    if (this.history.length == 0) {
      this.message_toast =
        'You are at the beginning of this topic. No prior data.';
      this.presentToast();
      //reset default message
      this.message_toast = 'No more information. Press back or start over.';
    }
    var i = 0;
    this.backobj = this.origobj;

    var e = this.history.length - 1;
    if (e < 0) {
      e = 0;
    }

    while (i < e - 1) {
      //  console.log(i);
      console.log('internal');
      this.traverse_internal(this.history[i], this.backobj);
      i++;
    }
    if (e > 0) {
      console.log('last');
      this.traverse_internal_last(this.history[i], this.backobj);
      this.history.pop();
    } else {
      //start main again
      console.log('main');

      this.history.pop();
      this.setObj(this.origobj);
      this.updatephrase(Object.keys(this.backobj)[0]);
    }
  }

  show_tips() {
    localStorage.setItem('filterTerm_tip', 'test');
    this.router.navigate(['/tabs/tab2']);
  }
}
