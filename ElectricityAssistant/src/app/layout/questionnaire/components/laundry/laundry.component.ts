import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-laundry',
  templateUrl: './laundry.component.html',
  styleUrls: ['./laundry.component.scss'],
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
export class LaundryComponent implements OnInit {

  totalUsage: number;
  washingRating: string;
  washingCapacity: string;
  washingFT: string;
  washingEnergyConsumptionArray: { capacity: string, loading: string, rating: string, consumption: number }[];
  dryType: string;
  dryCapacity: string;
  dryTimes: string;
  dryEnergyConsumptionArrar: { capacity: string, times: string, consumption: number }[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.washingCapacity = this.dataService.laundryWashingCapacity;
    this.washingFT = this.dataService.laundryWashingFT;
    this.washingRating = this.dataService.laundryWashingRating;
    this.dryType = this.dataService.laundryDryType;
    this.dryCapacity = this.dataService.laundryDryCapacity;
    this.dryTimes = this.dataService.laundryDryTimes;
    this.washingEnergyConsumptionArray = [
      { capacity: "5kg", loading: "Top", rating: "1", consumption: 40 },
      { capacity: "5kg", loading: "Top", rating: "2", consumption: 40 },
      { capacity: "5kg", loading: "Top", rating: "3", consumption: 40 },
      { capacity: "5kg", loading: "Front", rating: "1", consumption: 80 },
      { capacity: "5kg", loading: "Front", rating: "2", consumption: 75 },
      { capacity: "5kg", loading: "Front", rating: "3", consumption: 70 },
      { capacity: "7kg", loading: "Top", rating: "1", consumption: 40 },
      { capacity: "7kg", loading: "Top", rating: "2", consumption: 40 },
      { capacity: "7kg", loading: "Top", rating: "3", consumption: 40 },
      { capacity: "7kg", loading: "Front", rating: "1", consumption: 120 },
      { capacity: "7kg", loading: "Front", rating: "2", consumption: 100 },
      { capacity: "7kg", loading: "Front", rating: "3", consumption: 75 },
      { capacity: "8.5kg", loading: "Top", rating: "1", consumption: 40 },
      { capacity: "8.5kg", loading: "Top", rating: "2", consumption: 40 },
      { capacity: "8.5kg", loading: "Top", rating: "3", consumption: 40 },
      { capacity: "8.5kg", loading: "Front", rating: "1", consumption: 150 },
      { capacity: "8.5kg", loading: "Front", rating: "2", consumption: 125 },
      { capacity: "8.5kg", loading: "Front", rating: "3", consumption: 100 }
    ]
    this.dryEnergyConsumptionArrar = [
      { capacity: "4kg", times: "1", consumption: 200 },
      { capacity: "4kg", times: "1.5", consumption: 300 },
      { capacity: "4kg", times: "3", consumption: 600 },
      { capacity: "4kg", times: "5", consumption: 1000 },
      { capacity: "6kg", times: "1", consumption: 250 },
      { capacity: "6kg", times: "1.5", consumption: 375 },
      { capacity: "6kg", times: "3", consumption: 750 },
      { capacity: "6kg", times: "5", consumption: 1250 },
      { capacity: "8kg", times: "1", consumption: 300 },
      { capacity: "8kg", times: "1.5", consumption: 300 },
      { capacity: "8kg", times: "3", consumption: 900 },
      { capacity: "8kg", times: "5", consumption: 1500 },
    ]
  }

  //state for display questions
  public question5State: string;
  public question6State: string;

  public onQ41Click(): void {
    this.question5State = "";
    this.question6State = "";
  }

  public onQ42Click(): void {
    this.question5State = "show";
    this.question6State = "show";
  }

  public onQ43Click(): void {
    this.question5State = "";
    this.question6State = "";
  }

  public submit(): void {
    for (var i = 0; i < this.washingEnergyConsumptionArray.length; i++) {
      if (this.washingEnergyConsumptionArray[i].capacity == this.washingCapacity
        && this.washingEnergyConsumptionArray[i].loading == this.washingFT
        && this.washingEnergyConsumptionArray[i].rating == this.washingRating) {
          this.totalUsage = this.washingEnergyConsumptionArray[i].consumption;
      }
    }
    for (var i = 0; i < this.dryEnergyConsumptionArrar.length; i++) {
      if (this.dryEnergyConsumptionArrar[i].capacity == this.dryCapacity
        && this.dryEnergyConsumptionArrar[i].times == this.dryTimes) {
          this.totalUsage += this.dryEnergyConsumptionArrar[i].consumption;
      }
    }
    this.dataService.laundryWashingCapacity = this.washingCapacity;
    this.dataService.laundryWashingFT = this.washingFT;
    this.dataService.laundryWashingRating = this.washingRating;
    this.dataService.laundryDryType = this.dryType;
    this.dataService.laundryDryCapacity = this.dryCapacity;
    this.dataService.laundryDryTimes = this.dryTimes;
    this.dataService.laundryTotalUsage = this.totalUsage;
    console.log(this.dataService.laundryTotalUsage);
  }
}
