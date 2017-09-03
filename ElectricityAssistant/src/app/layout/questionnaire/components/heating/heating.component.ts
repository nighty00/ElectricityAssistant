import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { Consumption } from './consumption.model';

@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['./heating.component.scss'],
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
export class HeatingComponent implements OnInit {

  //state for display questions
  public question2State: string;
  public question3State: string;
  public question4State: string;
  public question5State: string;
  public question6State: string;

  //model
  public type: string;
  public powerOfHeater: string;
  public sizeOfRoom: string;
  public hoursOfUsing: string;
  public numberOfHeaters: number;
  public starsOfAC: string;
  public totalUsage: number;

  //energy consumption of AC
  private energyConsumptionOfAC: Consumption[] = [
    { room: "small", rating: 2, consumption: 600 },
    { room: "small", rating: 3, consumption: 550 },
    { room: "small", rating: 4, consumption: 450 },
    { room: "small", rating: 5, consumption: 350 },
    { room: "middle", rating: 2, consumption: 1325 },
    { room: "middle", rating: 3, consumption: 1150 },
    { room: "middle", rating: 4, consumption: 1000 },
    { room: "middle", rating: 5, consumption: 850 },
    { room: "large", rating: 2, consumption: 2550 },
    { room: "large", rating: 3, consumption: 2275 },
    { room: "large", rating: 4, consumption: 2000 },
    { room: "large", rating: 5, consumption: 1700 }
  ]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.type = this.dataService.heatType;
    this.numberOfHeaters = this.dataService.heatNumberOfHeaters;
    this.powerOfHeater = this.dataService.heatPowerOfHeater;
    this.sizeOfRoom = this.dataService.heatSizeOfRoom;
    this.starsOfAC = this.dataService.heatStarsOfAC;
    this.hoursOfUsing = this.dataService.heatHoursOfUsing;
  }

  public onQ1GHClick(): void {
    this.question2State = "";
    this.question3State = "";
    this.question4State = "";
    this.question5State = "";
    this.question6State = "";
  }

  public onQ1PEHClick(): void {
    this.question2State = "show";
    this.question3State = "show";
    this.question4State = "";
    this.question5State = "";
    this.question6State = "show";
  }

  public onQ1ACClick(): void {
    this.question2State = "";
    this.question3State = "";
    this.question4State = "show";
    this.question5State = "show";
    this.question6State = "";
  }

  public submit(): void {
    if (this.type == "Gas heater")
      this.totalUsage = 0;
    else if (this.type == "Portable electric heater") {
      this.totalUsage = this.numberOfHeaters * Number.parseInt(this.powerOfHeater) 
        * Number.parseInt(this.hoursOfUsing) * 120;
    }
    else if (this.type == "Air-conditioner") {
      for (var i = 0; i < this.energyConsumptionOfAC.length; i++) {
        if (this.energyConsumptionOfAC[i].room == this.sizeOfRoom 
          && this.energyConsumptionOfAC[i].rating == Number.parseInt(this.starsOfAC)) {
            this.totalUsage = this.energyConsumptionOfAC[i].consumption;
        }
      }
    }
    this.dataService.heatType = this.type;
    this.dataService.heatHoursOfUsing = this.hoursOfUsing;
    this.dataService.heatNumberOfHeaters = this.numberOfHeaters;
    this.dataService.heatPowerOfHeater = this.powerOfHeater;
    this.dataService.heatStarsOfAC = this.starsOfAC;
    this.dataService.heatSizeOfRoom = this.sizeOfRoom;
    this.dataService.heatTotalUsage = this.totalUsage;
  }
}
