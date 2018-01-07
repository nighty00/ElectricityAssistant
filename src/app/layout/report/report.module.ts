import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    Ng2Charts
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
