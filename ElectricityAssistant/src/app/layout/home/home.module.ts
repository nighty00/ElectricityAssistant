import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PageHeaderModule } from './../../shared';
import { StatModule } from '../../shared';
import { SlidersComponent } from './components/sliders/sliders.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    HomeRoutingModule,
    Ng2Charts,
    PageHeaderModule,
    Ng2PageScrollModule,
    FormsModule
  ],
  declarations: [HomeComponent, SlidersComponent, ChartsComponent, ContactComponent, BlocksComponent]
})
export class HomeModule { }
