import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationComponent } from './recommendation.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    RecommendationRoutingModule
  ],
  declarations: [RecommendationComponent, ThumbnailComponent]
})
export class RecommendationModule { }
