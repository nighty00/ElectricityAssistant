import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-cooling',
  templateUrl: './cooling.component.html',
  styleUrls: ['./cooling.component.scss'],
  animations: [
    trigger("questionShowUp", [
      state("show", style({
        transform: "translateX(0px)",
        opacity: 1
      })),
      transition("void => *", [
        style({
          transform: "translateX(-100px)",
          opacity: 0
        }),
        animate(300)
      ]),
      transition("* => void", [
        animate(300, style({
          transform: "translateX(100px)",
          opacity: 0
        }))
      ])
    ])
  ]
})
export class CoolingComponent implements OnInit {

  //ngModel
  totalUsage: number;
  type: string;
  energyRating: string;
  spaceSize: string;
  energyConsumptionArray: { type: string, size: string, rating: string, consumption: number }[];

  //state for display questions
  public question2State: string;
  public question3State: string;
  public question4State: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.type = this.dataService.coolType;
    this.energyRating = this.dataService.coolEnergyRating;
    this.spaceSize = this.dataService.coolSpaceSize;
    this.energyConsumptionArray = [
      { type: "portable fan", size: "small", rating: "2", consumption: 15 },
      { type: "portable fan", size: "medium", rating: "2", consumption: 50 },
      { type: "portable fan", size: "large", rating: "2", consumption: 75 },
      { type: "split system air conditioner", size: "small", rating: "2", consumption: 175 },
      { type: "split system air conditioner", size: "small", rating: "6", consumption: 50 },
      { type: "split system air conditioner", size: "medium", rating: "2", consumption: 250 },
      { type: "split system air conditioner", size: "medium", rating: "6", consumption: 100 },
      { type: "split system air conditioner", size: "large", rating: "2", consumption: 375 },
      { type: "split system air conditioner", size: "large", rating: "6", consumption: 200 },
      { type: "ducted refrigerative air conditioner", size: "small", rating: "2", consumption: 900 },
      { type: "ducted refrigerative air conditioner", size: "small", rating: "6", consumption: 375 },
      { type: "ducted refrigerative air conditioner", size: "medium", rating: "2", consumption: 1250 },
      { type: "ducted refrigerative air conditioner", size: "medium", rating: "6", consumption: 600 },
      { type: "ducted refrigerative air conditioner", size: "large", rating: "2", consumption: 1500 },
      { type: "ducted refrigerative air conditioner", size: "large", rating: "6", consumption: 800 },
      { type: "ducted evaporative cooling", size: "small", rating: "2", consumption: 200 },
      { type: "ducted evaporative cooling", size: "medium", rating: "2", consumption: 300 },
      { type: "ducted evaporative cooling", size: "large", rating: "2", consumption: 400 }
    ]
  }

  public onQ11Click() {
    this.question2State = "show";
    this.question3State = "";
    this.question4State = "";
  }

  public onQ12Click() {
    this.question2State = "show";
    this.question3State = "";
    this.question4State = "show";
  }

  public onQ13Click() {
    this.question2State = "";
    this.question3State = "show";
    this.question4State = "show";
  }

  public onQ14Click() {
    this.question2State = "";
    this.question3State = "show";
    this.question4State = "";
  }

  public submit(): void {
    for (var i = 0; i < this.energyConsumptionArray.length; i++) {
      if (this.type == this.energyConsumptionArray[i].type 
          && this.spaceSize == this.energyConsumptionArray[i].size
          && this.energyRating == this.energyConsumptionArray[i].rating) {
            this.totalUsage = this.energyConsumptionArray[i].consumption;
      }
    }
    this.dataService.coolType = this.type;
    this.dataService.coolEnergyRating = this.energyRating;
    this.dataService.coolSpaceSize = this.spaceSize;
    this.dataService.coolTotalUsage = this.totalUsage;
  }
}
