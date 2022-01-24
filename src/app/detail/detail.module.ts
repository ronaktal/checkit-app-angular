import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Detailpage } from './detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DetailpageRoutingModule } from './detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DetailpageRoutingModule
  ],
  declarations: [Detailpage],
})
export class DetailpageModule {}
