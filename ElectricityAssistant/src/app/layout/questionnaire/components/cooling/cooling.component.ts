import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { RestfulService } from '../../../../shared/services/restful.service';
import { Response } from '@angular/http';

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
  type: string;
  knowBrand: string;
  energyRating: string;
  spaceSize: string;
  temperature: string;
  brand: string;
  model: string;
  brandList: string[];
  modelList: string[];
  acPower: number;
  acRating: number;

  totalUsage: number;
  energyConsumptionArray: { type: string, size: string, rating: string, consumption: number }[];

  constructor(private dataService: DataService, private restfulService: RestfulService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataService.currentQuestionnairePage.next("cooling");
    });
    
    //data binding
    this.type = this.dataService.coolType;
    this.knowBrand = this.dataService.coolKnowBrand;
    this.energyRating = this.dataService.coolEnergyRating;
    this.spaceSize = this.dataService.coolSpaceSize;
    this.temperature = this.dataService.coolTemperature;
    this.brand = this.dataService.coolBrand;
    this.model = this.dataService.coolModel;
    this.brandList = this.dataService.coolBrandList;
    this.modelList = this.dataService.coolModelList;
    this.acPower = this.dataService.coolACPower;
    this.acRating = this.dataService.coolACRating;

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
    //load brand list
    this.loadBrandList();
  }

  /**
   * states for showing questions
   */
  public showQuestion2(): boolean {
    return this.type == 'split system air conditioner' || this.type == 'ducted refrigerative air conditioner';
  }

  public showQuestion3(): boolean {
    return (this.type == 'split system air conditioner' || this.type == 'ducted refrigerative air conditioner')
      && this.knowBrand == 'yes';
  }

  public showQuestion4(): boolean {
    return this.type == 'portable fan'
      || (this.type == 'split system air conditioner' && this.knowBrand == 'no');
  }

  public showQuestion5(): boolean {
    return this.type == 'ducted evaporative cooling'
      || (this.type == 'ducted refrigerative air conditioner' && this.knowBrand == 'no');
  }

  public showQuestion6(): boolean {
    return ((this.type == 'split system air conditioner' || this.type == 'ducted refrigerative air conditioner')
      && this.knowBrand == 'no') || this.type == 'ducted evaporative cooling';
  }

  public showQuestion7(): boolean {
    return this.type == 'split system air conditioner'
      || this.type == 'ducted refrigerative air conditioner'
      || this.type == 'ducted evaporative cooling';
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
        const power: number = data.cpower;
        const rating: number = data.cstar;
        this.acPower = power;
        this.acRating = rating;
      }
      );
  }

  /**
   * event listener
   */
  public onBrandSelected(event: any) {
    this.brand = event.srcElement.value;
    this.loadModelList();
  }

  public onModelSelected(event: any) {
    this.model = event.srcElement.value;
    this.getPowerRating();
  }

  public submit(): void {
    if (this.showQuestion3()) {
      var daysOfUsing: number;
      switch (this.temperature) {
        case "25":
          daysOfUsing = 90;
          break;
        case "28":
          daysOfUsing = 60;
          break;
        case "30":
          daysOfUsing = 35;
          break;
        case "32":
          daysOfUsing = 20;
          break;
      }
      this.totalUsage = daysOfUsing * this.acPower * 3.5;
    }
    else {
      for (var i = 0; i < this.energyConsumptionArray.length; i++) {
        if (this.type == this.energyConsumptionArray[i].type
          && this.spaceSize == this.energyConsumptionArray[i].size
          && this.energyRating == this.energyConsumptionArray[i].rating) {
          this.totalUsage = this.energyConsumptionArray[i].consumption;
        }
      }
    }
    //store data in dataService
    this.dataService.coolType = this.type;
    this.dataService.coolKnowBrand = this.knowBrand;
    this.dataService.coolEnergyRating = this.energyRating;
    this.dataService.coolSpaceSize = this.spaceSize;
    this.dataService.coolTemperature = this.temperature;
    this.dataService.coolTotalUsage = this.totalUsage;
    this.dataService.coolBrand = this.brand;
    this.dataService.coolModel = this.model;
    this.dataService.coolBrandList = this.brandList;
    this.dataService.coolModelList = this.modelList;
    this.dataService.coolACPower = this.acPower;
    this.dataService.coolACRating = this.acRating;

    console.log(this.dataService.coolTotalUsage);
  }
}
