import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, AfterViewChecked } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { RestfulService } from '../../../../shared/services/restful.service';
import { Response } from '@angular/http';

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
export class LaundryComponent implements OnInit, OnDestroy {

  //ngModel
  washingKnow: string;
  washingBrand: string;
  washingModel: string;
  washingCapacity: string;
  washingLoadingType: string;
  washingRating: string;
  washingFrequency: string;
  washingBrandList: string[];
  washingModelList: string[];
  washingPower: number;
  washingStarRating: number;
  washingCap: number;
  washingEnergyConsumptionArray: { capacity: string, loading: string, rating: string, consumption: number }[];

  dryKnow: string;
  dryBrand: string;
  dryModel: string;
  dryBrandList: string[];
  dryModelList: string[];
  dryType: string;
  dryCapacity: string;
  dryFrequency: string;
  dryPower: number;
  dryStarRating: number;
  dryCap: number;
  dryEnergyConsumptionArrar: { type: string, capacity: string, times: string, consumption: number }[];

  washingTotalUsage: number;
  dryTotalUsage: number;
  totalUsage: number;

  constructor(private dataService: DataService, private restfulService: RestfulService) { }

  ngOnInit() {

    setTimeout(() => {
      this.dataService.currentQuestionnairePage.next("laundry");
    });
    //initialize data
    this.washingKnow = this.dataService.laundryWashingKnow;
    this.washingBrand = this.dataService.laundryWashingBrand;
    this.washingModel = this.dataService.laundryWashingModel;
    this.washingBrandList = this.dataService.laundryWashingBrandList;
    this.washingModelList = this.dataService.laundryWashingModelList;
    this.washingCapacity = this.dataService.laundryWashingCapacity;
    this.washingLoadingType = this.dataService.laundryWashingLoadingType;
    this.washingRating = this.dataService.laundryWashingRating;
    this.washingFrequency = this.dataService.laundryWashingFrequency;
    this.washingPower = this.dataService.laundryWashingPower;
    this.washingStarRating = this.dataService.laundryWashingStarRating;
    this.washingCap = this.dataService.laundryWashingCap;
    this.dryKnow = this.dataService.laundryDryKnow;
    this.dryBrand = this.dataService.laundryDryBrand;
    this.dryModel = this.dataService.laundryDryModel;
    this.dryBrandList = this.dataService.laundryDryBrandList;
    this.dryModelList = this.dataService.laundryDryModelList;
    this.dryType = this.dataService.laundryDryType;
    this.dryCapacity = this.dataService.laundryDryCapacity;
    this.dryFrequency = this.dataService.laundryDryFrequency;
    this.dryPower = this.dataService.laundryDryPower;
    this.dryStarRating = this.dataService.laundryDryStarRating;
    this.dryCap = this.dataService.laundryDryCap;
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
      { type: "standard electric", capacity: "4kg", times: "1", consumption: 200 },
      { type: "standard electric", capacity: "4kg", times: "1.5", consumption: 300 },
      { type: "standard electric", capacity: "4kg", times: "3", consumption: 600 },
      { type: "standard electric", capacity: "4kg", times: "5", consumption: 1000 },
      { type: "standard electric", capacity: "6kg", times: "1", consumption: 250 },
      { type: "standard electric", capacity: "6kg", times: "1.5", consumption: 375 },
      { type: "standard electric", capacity: "6kg", times: "3", consumption: 750 },
      { type: "standard electric", capacity: "6kg", times: "5", consumption: 1250 },
      { type: "standard electric", capacity: "8kg", times: "1", consumption: 300 },
      { type: "standard electric", capacity: "8kg", times: "1.5", consumption: 300 },
      { type: "standard electric", capacity: "8kg", times: "3", consumption: 900 },
      { type: "standard electric", capacity: "8kg", times: "5", consumption: 1500 },
      { type: "heat pump", capacity: "4kg", times: "1", consumption: 90 },
      { type: "heat pump", capacity: "4kg", times: "1.5", consumption: 130 },
      { type: "heat pump", capacity: "4kg", times: "3", consumption: 250 },
      { type: "heat pump", capacity: "4kg", times: "5", consumption: 415 },
      { type: "heat pump", capacity: "6kg", times: "1", consumption: 110 },
      { type: "heat pump", capacity: "6kg", times: "1.5", consumption: 160 },
      { type: "heat pump", capacity: "6kg", times: "3", consumption: 310 },
      { type: "heat pump", capacity: "6kg", times: "5", consumption: 515 },
      { type: "heat pump", capacity: "8kg", times: "1", consumption: 125 },
      { type: "heat pump", capacity: "8kg", times: "1.5", consumption: 200 },
      { type: "heat pump", capacity: "8kg", times: "3", consumption: 375 },
      { type: "heat pump", capacity: "8kg", times: "5", consumption: 610 },
    ]

    //load brand list
    this.loadWashingBrandList();
    this.loadDryerBrandList();
  }

  ngOnDestroy() {
    this.submit();
  }
  
  /**
   * states for showing questions
   */
  showQuestion2(): boolean {
    return this.washingKnow == "yes";
  }

  showQuestion3(): boolean {
    return this.washingKnow == "no";
  }

  showQuestion4(): boolean {
    return this.washingKnow == "no";
  }

  showQuestion5(): boolean {
    return this.washingKnow == "no";
  }

  showQuestion6(): boolean {
    return this.washingKnow == "yes";
  }

  showQuestion8(): boolean {
    return this.dryKnow == "yes";
  }

  showQuestion9(): boolean {
    return this.dryKnow == "no";
  }

  showQuestion10(): boolean {
    return this.dryKnow == "no";
  }

  showQuestion11(): boolean {
    return this.dryKnow == "yes" || this.dryKnow == "no";
  }

  /**
   * http request
   */
  loadWashingBrandList(): void {
    this.restfulService.getWashingBrandList()
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const brands: string[] = (data.BrandName + "").split(",");
        brands.pop();
        this.washingBrandList = brands;
        if (this.washingBrand == null) {
          this.washingBrand = this.washingBrandList[0];
          this.loadWashingModelList();
        }
      },
      (error) => console.log(error)
      );
  }

  loadWashingModelList(): void {
    this.restfulService.getWashingModelList(this.washingBrand)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const models: string[] = (data.ModelName + "").split(",");
        models.pop();
        this.washingModelList = models;
        this.washingModel = this.washingModelList[0];
        this.getWashingPowerRating();
      },
      (error) => console.log(error)
      );
  }

  getWashingPowerRating(): void {
    this.restfulService.getWashingPowerRating(this.washingModel)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const power: number = data.power;
        const rating: number = data.star;
        const cap: number = data.capacity;
        this.washingPower = power;
        this.washingStarRating = rating;
        this.washingCap = cap;
        // console.log("washing  " + cap);
      }
      );
  }

  loadDryerBrandList(): void {
    this.restfulService.getDryerBrandList()
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const brands: string[] = (data.BrandName + "").split(",");
        brands.pop();
        this.dryBrandList = brands;
        if (this.dryBrand == null) {
          this.dryBrand = this.dryBrandList[0];
          this.loadDryerModelList();
        }
      },
      (error) => console.log(error)
      );
  }

  loadDryerModelList(): void {
    this.restfulService.getDryerModelList(this.dryBrand)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const models: string[] = (data.ModelName + "").split(",");
        models.pop();
        this.dryModelList = models;
        this.dryModel = this.dryModelList[0];
        this.getDryerPowerRating();
      },
      (error) => console.log(error)
      );
  }

  getDryerPowerRating(): void {
    this.restfulService.getDryerPowerRating(this.dryModel)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const power: number = data.power;
        const rating: number = data.star;
        const cap: number = data.capacity;
        this.dryPower = power;
        this.dryStarRating = rating;
        this.dryCap = cap;
        // console.log("dry  " + cap);
      }
      );
  }

  /**
   * event listener
   */
  public onWashingBrandSelected(event: any): void {
    this.washingBrand = event.srcElement.value;
    this.loadWashingModelList();
  }

  public onWashingModelSelected(event: any): void {
    this.washingModel = event.srcElement.value;
    this.getWashingPowerRating();
  }

  public onDryBrandSelected(event: any): void {
    this.dryBrand = event.srcElement.value;
    this.loadDryerModelList();
  }

  public onDryModelSelected(event: any): void {
    this.dryModel = event.srcElement.value;
    this.getDryerPowerRating();
  }

  public submit(): void {
    //total usage of washing machine
    if (this.showQuestion2()) {
      this.washingTotalUsage = this.washingPower * Number.parseFloat(this.washingFrequency) / 7.0;
    }
    else {
      for (var i = 0; i < this.washingEnergyConsumptionArray.length; i++) {
        if (this.washingEnergyConsumptionArray[i].capacity == this.washingCapacity
          && this.washingEnergyConsumptionArray[i].loading == this.washingLoadingType
          && this.washingEnergyConsumptionArray[i].rating == this.washingRating) {
          this.washingTotalUsage = this.washingEnergyConsumptionArray[i].consumption;
        }
      }
    }

    //total usage of clothes dryer
    if (this.showQuestion11()) {
      if (this.showQuestion8()) {
        this.dryTotalUsage = this.dryPower * Number.parseFloat(this.dryFrequency);
      }
      else {
        for (var i = 0; i < this.dryEnergyConsumptionArrar.length; i++) {
          if (this.dryEnergyConsumptionArrar[i].capacity == this.dryCapacity
            && this.dryEnergyConsumptionArrar[i].times == this.dryFrequency
            && this.dryEnergyConsumptionArrar[i].type == this.dryType) {
            this.dryTotalUsage = this.dryEnergyConsumptionArrar[i].consumption;
          }
        }
      }
    }
    else {
      this.dryTotalUsage = 0;
    }
    this.totalUsage = this.washingTotalUsage + this.dryTotalUsage;

    //store data in dataService
    this.dataService.laundryWashingKnow = this.washingKnow;
    this.dataService.laundryWashingBrand = this.washingBrand;
    this.dataService.laundryWashingModel = this.washingModel;
    this.dataService.laundryWashingBrandList = this.washingBrandList;
    this.dataService.laundryWashingModelList = this.washingModelList;
    this.dataService.laundryWashingCapacity = this.washingCapacity;
    this.dataService.laundryWashingLoadingType = this.washingLoadingType;
    this.dataService.laundryWashingRating = this.washingRating;
    this.dataService.laundryWashingFrequency = this.washingFrequency;
    this.dataService.laundryWashingPower = this.washingPower;
    this.dataService.laundryWashingStarRating = this.washingStarRating;
    this.dataService.laundryWashingCap = this.washingCap;
    this.dataService.laundryDryKnow = this.dryKnow;
    this.dataService.laundryDryBrand = this.dryBrand;
    this.dataService.laundryDryModel = this.dryModel;
    this.dataService.laundryDryBrandList = this.dryBrandList;
    this.dataService.laundryDryModelList = this.dryModelList;
    this.dataService.laundryDryType = this.dryType;
    this.dataService.laundryDryCapacity = this.dryCapacity;
    this.dataService.laundryDryFrequency = this.dryFrequency;
    this.dataService.laundryDryPower = this.dryPower;
    this.dataService.laundryDryStarRating = this.dryStarRating;
    this.dataService.laundryDryCap = this.dryCap;

    this.dataService.laundryWashingTotalUsage = this.washingTotalUsage;
    this.dataService.laundryDryTotalUsage = this.dryTotalUsage;
    this.dataService.laundryTotalUsage = this.totalUsage;

    console.log(this.dataService.laundryWashingTotalUsage);
    console.log(this.dataService.laundryDryTotalUsage);
    console.log(this.dataService.laundryTotalUsage);
  }
}
