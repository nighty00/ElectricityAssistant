import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { routerTransition } from '../../router.animations';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [routerTransition()]
})
export class QuestionnaireComponent implements OnInit, OnDestroy {

  currentPage: string;
  mySubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mySubscription = this.dataService.currentQuestionnairePage
      .subscribe(
        (page: string) => {
          this.currentPage = page;
        }
      );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  // onEntertainmentTagClick() {
  //   this.currentPage = "entertainment";
  // }

  // onKitchenTagClick() {
  //   this.currentPage = "kitchen";
  // }

  // onLaundryTagClick() {
  //   this.currentPage = "laundry";
  // }

  // onLightingTagClick() {
  //   this.currentPage = "lighting";
  // }

  // onCoolingTagClick() {
  //   this.currentPage = "cooling";
  // }

  // onHeatingTagClick() {
  //   this.currentPage = "heating";
  // }
  

}
