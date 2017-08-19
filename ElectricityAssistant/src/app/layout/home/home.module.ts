import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PageHeaderModule } from './../../shared';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    HomeRoutingModule,
    Ng2Charts,
    PageHeaderModule,
    Ng2PageScrollModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
