import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remedies',
  templateUrl: 'remedies.page.html',
  styleUrls: ['remedies.page.scss'],
})
export class RemediesPage {
  filterTerm: string;

  constructor(private router: Router) {}

  filterData = []; //Store filtered data
  browselist = 1;
  regularList = [];

  filter(val) {
    if (val == '') {
      this.filterData = [];
      return;
    }
    this.filterData = this.regularList.filter((item) => {
      return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

  cancel() {
    this.filterData = [];
  }

  Browse() {
    this.filterData = this.regularList;
    this.browselist = 0;
  }

  show_topics() {
    this.filterData = [];
    this.browselist = 1;
  }

  showDetail(reg) {
    localStorage.setItem('remedy_id', JSON.stringify(reg.id));
    this.router.navigate(['/remedies_detail']);
  }
}
