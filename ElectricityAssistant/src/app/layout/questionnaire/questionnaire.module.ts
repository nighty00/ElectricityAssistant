import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { LightingComponent } from './components/lighting/lighting.component';
import { CoolingComponent } from './components/cooling/cooling.component';
import { LaundryComponent } from './components/laundry/laundry.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { HeatingComponent } from './components/heating/heating.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule
  ],
  declarations: [
    QuestionnaireComponent,
    EntertainmentComponent,
    LightingComponent,
    CoolingComponent,
    LaundryComponent, 
    HeatingComponent, KitchenComponent
  ]
})
export class QuestionnaireModule { }
