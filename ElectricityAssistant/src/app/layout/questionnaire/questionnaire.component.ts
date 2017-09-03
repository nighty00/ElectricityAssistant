import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [routerTransition()]
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
