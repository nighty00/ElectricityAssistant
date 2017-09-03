import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireComponent } from './questionnaire.component';
import { CoolingComponent } from './components/cooling/cooling.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HeatingComponent } from './components/heating/heating.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LaundryComponent } from './components/laundry/laundry.component';
import { LightingComponent } from './components/lighting/lighting.component';

const routes: Routes = [
  { path: 'cooling', component: CoolingComponent },
  { path: 'heating', component: HeatingComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'laundry', component: LaundryComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'lighting', component: LightingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuestionnaireRoutingModule { }
