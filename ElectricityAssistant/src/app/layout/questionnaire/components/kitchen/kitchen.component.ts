import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { RestfulService } from '../../../../shared/services/restful.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
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
export class KitchenComponent implements OnInit {

  /**
   * ngModel
   */
  knowFridgeBrand: string;
  fridgeBrand: string;
  fridgeModel: string;
  fridgeBrandList: string[];
  fridgeModelList: string[];
  fridgePower: number;
  fridgeRating: number;
  fridgeStars: string;
  fridgeType: string;
  fridgeVolume: string;
  fridgeTemperature: string;
  isUsingDish: string;
  dishCapacity: string;
  dishFrequency: string;
  dishRating: string;

  fridgeTotalUsage: number;
  dishTotalUsage: number;
  totalUsage: number;

  fridgeEnergyConsumptionArray: { type: string, volume: string, rating: string, consumption: number }[];
  dishEnergyConsumptionArray: { capacity: string, rating: string, consumption: number }[];

  constructor(private dataService: DataService, private restfulService: RestfulService) { }

  ngOnInit() {
    this.knowFridgeBrand = this.dataService.kitchenKnowFridgeBrand;
    this.fridgeBrand = this.dataService.kitchenFridgeBrand;
    this.fridgeModel = this.dataService.kitchenFridgeModel;
    this.fridgeBrandList = this.dataService.kitchenFridgeBrandList;
    this.fridgeModelList = this.dataService.kitchenFridgeModelList;
    this.fridgePower = this.dataService.kitchenFridgePower;
    this.fridgeRating = this.dataService.kitchenFridgeRating;
    this.fridgeStars = this.dataService.kitchenFridgeStars;
    this.fridgeType = this.dataService.kitchenFridgeType;
    this.fridgeVolume = this.dataService.kitchenFridgeVolume;
    this.fridgeTemperature = this.dataService.kitchenFridgeTemperature;
    this.isUsingDish = this.dataService.kitchenIsUsingDish;
    this.dishCapacity = this.dataService.kitchenDishCapacity;
    this.dishFrequency = this.dataService.kitchenDishFrequency;
    this.dishRating = this.dataService.kitchenDishRating;
    this.fridgeTotalUsage = this.dataService.kitchenFridgeTotalUsage;
    this.dishTotalUsage = this.dataService.kitchenDishTotalUsage;
    this.totalUsage = this.dataService.kitchenTotalUsage;

    this.fridgeEnergyConsumptionArray = [
      { type: "2-door", volume: "small", rating: "1.5", consumption: 500 },
      { type: "2-door", volume: "small", rating: "3.5", consumption: 300 },
      { type: "2-door", volume: "small", rating: "5.5", consumption: 180 },
      { type: "2-door", volume: "medium", rating: "1.5", consumption: 650 },
      { type: "2-door", volume: "medium", rating: "3.5", consumption: 400 },
      { type: "2-door", volume: "medium", rating: "5.5", consumption: 240 },
      { type: "2-door", volume: "large", rating: "1.5", consumption: 800 },
      { type: "2-door", volume: "large", rating: "3.5", consumption: 500 },
      { type: "2-door", volume: "large", rating: "5.5", consumption: 300 },
      { type: "side-by-side", volume: "small", rating: "1.5", consumption: 900 },
      { type: "side-by-side", volume: "small", rating: "3.5", consumption: 500 },
      { type: "side-by-side", volume: "small", rating: "5.5", consumption: 300 },
      { type: "side-by-side", volume: "large", rating: "1.5", consumption: 1000 },
      { type: "side-by-side", volume: "large", rating: "3.5", consumption: 600 },
      { type: "side-by-side", volume: "large", rating: "5.5", consumption: 350 },
      { type: "chest freezer", volume: "small", rating: "1.5", consumption: 375 },
      { type: "chest freezer", volume: "small", rating: "3.5", consumption: 330 },
      { type: "chest freezer", volume: "small", rating: "5.5", consumption: 300 },
      { type: "chest freezer", volume: "large", rating: "1.5", consumption: 575 },
      { type: "chest freezer", volume: "large", rating: "3.5", consumption: 500 },
      { type: "chest freezer", volume: "large", rating: "5.5", consumption: 425 },
      { type: "upright freezer", volume: "small", rating: "1.5", consumption: 620 },
      { type: "upright freezer", volume: "small", rating: "3.5", consumption: 375 },
      { type: "upright freezer", volume: "small", rating: "5.5", consumption: 200 },
      { type: "upright freezer", volume: "large", rating: "1.5", consumption: 750 },
      { type: "upright freezer", volume: "large", rating: "3.5", consumption: 450 },
      { type: "upright freezer", volume: "large", rating: "5.5", consumption: 250 }
    ]
    this.dishEnergyConsumptionArray = [
      { capacity: "14", rating: "2", consumption: 90 },
      { capacity: "14", rating: "4", consumption: 50 },
      { capacity: "12", rating: "2", consumption: 75 },
      { capacity: "12", rating: "4", consumption: 40 },
      { capacity: "10", rating: "2", consumption: 60 },
      { capacity: "10", rating: "4", consumption: 30 },
      { capacity: "7", rating: "2", consumption: 50 },
      { capacity: "7", rating: "4", consumption: 25 }
    ]

    //load brand list
    this.loadFridgeBrandList();
  }

  /**
   * states for showing questions
   */
  showQuestion2(): boolean {
    return this.knowFridgeBrand == "yes";
  }

  showQuestion3(): boolean {
    return this.knowFridgeBrand == "no";
  }

  showQuestion4(): boolean {
    return this.knowFridgeBrand == "no";
  }

  showQuestion5(): boolean {
    return this.knowFridgeBrand == "no" && this.fridgeType == "2-door";
  }

  showQuestion6(): boolean {
    return this.knowFridgeBrand == "no" && this.fridgeType == "side-by-side";
  }

  showQuestion7(): boolean {
    return this.knowFridgeBrand == "no" && this.fridgeType == "chest freezer";
  }

  showQuestion8(): boolean {
    return this.knowFridgeBrand == "no" && this.fridgeType == "upright freezer";
  }

  showQuestion11(): boolean {
    return this.isUsingDish == "yes";
  }

  showQuestion12(): boolean {
    return this.isUsingDish == "yes";
  }

  showQuestion13(): boolean {
    return this.isUsingDish == "yes";
  }

  /**
   * http request
   */
  loadFridgeBrandList() {
    this.restfulService.getFridgeBrandList()
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const brands: string[] = (data.BrandName + "").split(",");
        brands.pop();
        this.fridgeBrandList = brands;
      },
      (error) => console.log(error)
      );
  }

  loadFridgeModelList() {
    this.restfulService.getFridgeModelList(this.fridgeBrand)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const models: string[] = (data.ModelName + "").split(",");
        models.pop();
        this.fridgeModelList = models;
        this.fridgeModel = this.fridgeModelList[0];
        this.getFridgePowerRating();
      },
      (error) => console.log(error)
      );
  }

  getFridgePowerRating() {
    this.restfulService.getFridgePowerRating(this.fridgeModel)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const power: number = data.power;
        const rating: number = data.star;
        this.fridgePower = power;
        this.fridgeRating = rating;
      }
      );
  }

  /**
   * event listener
   */
  public onFridgeBrandSelected(event: any) {
    this.fridgeBrand = event.srcElement.value;
    this.loadFridgeModelList();
  }

  public onFridgeModelSelected(event: any) {
    this.fridgeModel = event.srcElement.value;
    this.getFridgePowerRating();
  }

  public submit() {
    var ratio: number = 1;
    switch (this.fridgeTemperature) {
      case "3":
        ratio = 1.05;
        break;
      case "4":
        ratio = 1;
        break;
      case "5":
        ratio = 0.95;
        break;
      case "6":
        ratio = 0.9;
        break;
    }
    if (this.showQuestion2()) {
      this.fridgeTotalUsage = this.fridgePower * ratio;
    }
    else {
      for (var i = 0; i < this.fridgeEnergyConsumptionArray.length; i++) {
        if (this.fridgeType == this.fridgeEnergyConsumptionArray[i].type
          && this.fridgeVolume == this.fridgeEnergyConsumptionArray[i].volume
          && this.fridgeStars == this.fridgeEnergyConsumptionArray[i].rating) {
          this.fridgeTotalUsage = this.fridgeEnergyConsumptionArray[i].consumption;
        }
      }
    }
    if (this.isUsingDish == "yes") {
      for (var i = 0; i < this.dishEnergyConsumptionArray.length; i++) {
        if (this.dishCapacity == this.dishEnergyConsumptionArray[i].capacity
          && this.dishRating == this.dishEnergyConsumptionArray[i].rating) {
          this.dishTotalUsage = this.dishEnergyConsumptionArray[i].consumption * Number.parseInt(this.dishFrequency);
        }
      }
    }
    else {
      this.dishTotalUsage = 0;
    }
    this.totalUsage = this.fridgeTotalUsage + this.dishTotalUsage;

    //store data in dataService
    this.dataService.kitchenKnowFridgeBrand = this.knowFridgeBrand;
    this.dataService.kitchenFridgeBrand = this.fridgeBrand;
    this.dataService.kitchenFridgeModel = this.fridgeModel;
    this.dataService.kitchenFridgeBrandList = this.fridgeBrandList;
    this.dataService.kitchenFridgeModelList = this.fridgeModelList;
    this.dataService.kitchenFridgePower = this.fridgePower;
    this.dataService.kitchenFridgeRating = this.fridgeRating;
    this.dataService.kitchenFridgeStars = this.fridgeStars;
    this.dataService.kitchenFridgeType = this.fridgeType;
    this.dataService.kitchenFridgeVolume = this.fridgeVolume;
    this.dataService.kitchenFridgeTemperature = this.fridgeTemperature;
    this.dataService.kitchenIsUsingDish = this.isUsingDish;
    this.dataService.kitchenDishCapacity = this.dishCapacity;
    this.dataService.kitchenDishFrequency = this.dishFrequency;
    this.dataService.kitchenDishRating = this.dishRating;
    this.dataService.kitchenFridgeTotalUsage = this.fridgeTotalUsage;
    this.dataService.kitchenDishTotalUsage = this.dishTotalUsage;
    this.dataService.kitchenTotalUsage = this.totalUsage;
    this.dataService.kitchenFridgeTotalUsage = this.fridgeTotalUsage;
    this.dataService.kitchenDishTotalUsage = this.dishTotalUsage;
    this.dataService.kitchenTotalUsage = this.totalUsage;

    console.log("fridge  " + this.fridgeTotalUsage);
    console.log("dish  " + this.dishTotalUsage);
    console.log("total  " + this.totalUsage);
  }

}
