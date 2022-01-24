import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detailpage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: Detailpage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailpageRoutingModule {}
