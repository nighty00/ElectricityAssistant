import { Component, OnInit, OnChanges } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [routerTransition()]
})
export class QuestionnaireComponent implements OnInit, OnChanges {

  currentPage: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentQuestionnairePage
      .subscribe(
        (page: string) => {
          this.currentPage = page;
        }
      );
  }

  ngOnChanges() {
    // this.dataService.currentQuestionnairePage
    // .subscribe(
    //   (page: string) => {
    //     this.currentPage = page;
    //   }
    // );
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
