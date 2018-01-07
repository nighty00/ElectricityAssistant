import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { RestfulService } from '../../../../shared/services/restful.service';
import { Response } from '@angular/http';

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
export class HeatingComponent implements OnInit, OnDestroy {

  /**
   * ngModel
   */
  daysOfUsing: string;
  type: string;
  numberOfHeaters: string;
  powerOfHeater: string;
  hoursOfUsing: string;
  knowBrand: string;
  brand: string;
  model: string;
  brandList: string[];
  modelList: string[];
  power: number;
  rating: number;
  starsOfAC: string;
  sizeOfRoom: string;

  totalUsage: number;

  //energy consumption of AC
  private energyConsumptionOfAC: { room: string, rating: number, consumption: number }[] = [
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

  constructor(private dataService: DataService, private restfulService: RestfulService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.currentQuestionnairePage.next("heating");
    });
    
    this.daysOfUsing = this.dataService.heatDaysOfUsing;
    this.type = this.dataService.heatType;
    this.numberOfHeaters = this.dataService.heatNumberOfHeaters;
    this.powerOfHeater = this.dataService.heatPowerOfHeater;
    this.hoursOfUsing = this.dataService.heatHoursOfUsing;
    this.knowBrand = this.dataService.heatKnowBrand;
    this.brand = this.dataService.heatBrand;
    this.model = this.dataService.heatModel;
    this.brandList = this.dataService.heatBrandList;
    this.modelList = this.dataService.heatModelList;
    this.power = this.dataService.heatPower;
    this.rating = this.dataService.heatRating;
    this.sizeOfRoom = this.dataService.heatSizeOfRoom;
    this.starsOfAC = this.dataService.heatStarsOfAC;

    //load brand list
    this.loadBrandList();
  }

  ngOnDestroy() {
    this.submit();
  }

  /**
   * flag for showing questions
   */
  showQuestion4(): boolean {
    return this.type == "Portable electric heater";
  }

  showQuestion5(): boolean {
    return this.type == "Portable electric heater";
  }

  showQuestion6(): boolean {
    return this.type == "Air-conditioner";
  }

  showQuestion7(): boolean {
    return this.type == "Air-conditioner" && this.knowBrand == "yes";
  }

  showQuestion8(): boolean {
    return this.type == "Air-conditioner" && this.knowBrand == "no";
  }

  showQuestion9(): boolean {
    return this.type == "Air-conditioner" && this.knowBrand == "no";
  }

  /**
   * http request
   */
  loadBrandList() {
    this.restfulService.getACBrandList()
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const brands: string[] = (data.BrandName + "").split(",");
        brands.pop();
        this.brandList = brands;
        if (this.brand == null) {
          this.brand = this.brandList[0];
          this.loadModelList();
        }
      },
      (error) => console.log(error)
      );
  }

  loadModelList() {
    this.restfulService.getACModelList(this.brand)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const models: string[] = (data.ModelName + "").split(",");
        models.pop();
        this.modelList = models;
        this.model = this.modelList[0];
        this.getPowerRating();
      },
      (error) => console.log(error)
      );
  }

  getPowerRating() {
    this.restfulService.getACPowerRating(this.model)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        // const power: number = data.hpower;
        // const rating: number = data.hstar;
        const power: number = data.cpower;
        const rating: number = data.cstar;
        this.power = power;
        this.rating = rating;
      }
      );
  }

  /**
   * event listener
   */
  public onBrandSelected(event: any): void {
    this.brand = event.srcElement.value;
    this.loadModelList();
  }

  public onModelSelected(event: any): void {
    this.model = event.srcElement.value;
    this.getPowerRating();
  }

  public submit(): void {
    if (this.type == "Gas heater")
      this.totalUsage = 0;
    else if (this.type == "Portable electric heater") {
      this.totalUsage = Number.parseInt(this.numberOfHeaters) * Number.parseInt(this.powerOfHeater)
        * Number.parseInt(this.hoursOfUsing) * Number.parseInt(this.daysOfUsing);
    }
    else if (this.type == "Air-conditioner") {
      if (this.showQuestion7()) {
        this.totalUsage = this.power * Number.parseInt(this.hoursOfUsing) * Number.parseInt(this.daysOfUsing);
      }
      else {
        for (var i = 0; i < this.energyConsumptionOfAC.length; i++) {
          if (this.energyConsumptionOfAC[i].room == this.sizeOfRoom
            && this.energyConsumptionOfAC[i].rating == Number.parseInt(this.starsOfAC)) {
            this.totalUsage = this.energyConsumptionOfAC[i].consumption;
          }
        }
      }
    }
    //store data in dataService
    this.dataService.heatDaysOfUsing = this.daysOfUsing;
    this.dataService.heatType = this.type;
    this.dataService.heatNumberOfHeaters = this.numberOfHeaters;
    this.dataService.heatPowerOfHeater = this.powerOfHeater;
    this.dataService.heatHoursOfUsing = this.hoursOfUsing;
    this.dataService.heatKnowBrand = this.knowBrand;
    this.dataService.heatBrand = this.brand;
    this.dataService.heatModel = this.model;
    this.dataService.heatBrandList = this.brandList;
    this.dataService.heatModelList = this.modelList;
    this.dataService.heatPower = this.power;
    this.dataService.heatRating = this.rating;
    this.dataService.heatStarsOfAC = this.starsOfAC;
    this.dataService.heatSizeOfRoom = this.sizeOfRoom;
    this.dataService.heatTotalUsage = this.totalUsage;

    console.log(this.dataService.heatTotalUsage);

    //enable nav link
    this.dataService.showReportSubject.next(true);
    this.dataService.showReport = true;
  }
}
