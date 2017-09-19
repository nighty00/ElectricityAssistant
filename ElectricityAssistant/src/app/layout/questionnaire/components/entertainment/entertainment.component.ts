import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { RestfulService } from '../../../../shared/services/restful.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
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
export class EntertainmentComponent implements OnInit {

  public totalUsage: number;
  public tvKnow: string;
  public brand: string;
  public model: string;
  public power: number;
  public star: number;
  public size: number;
  public brandList: string[];
  public modelList: string[];
  public screenSize: string;
  public starRating: string;
  public usingTime: string;
  public energyConsumptionArray: { size: string, rating: string, hours: string, consumption: number }[];

  constructor(private dataService: DataService, private restfulService: RestfulService) { }

  ngOnInit() {
    this.tvKnow = this.dataService.entertainmentTvKnow;
    this.brand = this.dataService.entertainmentBrand;
    this.model = this.dataService.entertainmentModel;
    this.power = this.dataService.entertainmentPower;
    this.star = this.dataService.entertainmentStar;
    this.size = this.dataService.entertainmentSize;
    this.brandList = this.dataService.entertainmentBrandList;
    this.modelList = this.dataService.entertainmentModelList;
    this.screenSize = this.dataService.entertainmentScreenSize;
    this.starRating = this.dataService.entertainmentStarRating;
    this.usingTime = this.dataService.entertainmentUsingTime;
    this.energyConsumptionArray = [
      { size: "26 inch", rating: "2", hours: "2 hours", consumption: 55 },
      { size: "26 inch", rating: "2", hours: "4 hours", consumption: 110 },
      { size: "26 inch", rating: "2", hours: "8 hours", consumption: 220 },
      { size: "26 inch", rating: "4", hours: "2 hours", consumption: 40 },
      { size: "26 inch", rating: "4", hours: "4 hours", consumption: 70 },
      { size: "26 inch", rating: "4", hours: "8 hours", consumption: 135 },
      { size: "26 inch", rating: "6", hours: "2 hours", consumption: 25 },
      { size: "26 inch", rating: "6", hours: "4 hours", consumption: 45 },
      { size: "26 inch", rating: "6", hours: "8 hours", consumption: 85 },
      { size: "32 inch", rating: "2", hours: "2 hours", consumption: 75 },
      { size: "32 inch", rating: "2", hours: "4 hours", consumption: 150 },
      { size: "32 inch", rating: "2", hours: "8 hours", consumption: 300 },
      { size: "32 inch", rating: "4", hours: "2 hours", consumption: 50 },
      { size: "32 inch", rating: "4", hours: "4 hours", consumption: 100 },
      { size: "32 inch", rating: "4", hours: "8 hours", consumption: 185 },
      { size: "32 inch", rating: "6", hours: "2 hours", consumption: 35 },
      { size: "32 inch", rating: "6", hours: "4 hours", consumption: 65 },
      { size: "32 inch", rating: "6", hours: "8 hours", consumption: 120 },
      { size: "42 inch", rating: "2", hours: "2 hours", consumption: 120 },
      { size: "42 inch", rating: "2", hours: "4 hours", consumption: 230 },
      { size: "42 inch", rating: "2", hours: "8 hours", consumption: 450 },
      { size: "42 inch", rating: "4", hours: "2 hours", consumption: 75 },
      { size: "42 inch", rating: "4", hours: "4 hours", consumption: 150 },
      { size: "42 inch", rating: "4", hours: "8 hours", consumption: 300 },
      { size: "42 inch", rating: "6", hours: "2 hours", consumption: 50 },
      { size: "42 inch", rating: "6", hours: "4 hours", consumption: 100 },
      { size: "42 inch", rating: "6", hours: "8 hours", consumption: 200 },
      { size: "47 inch", rating: "2", hours: "2 hours", consumption: 150 },
      { size: "47 inch", rating: "2", hours: "4 hours", consumption: 300 },
      { size: "47 inch", rating: "2", hours: "8 hours", consumption: 600 },
      { size: "47 inch", rating: "4", hours: "2 hours", consumption: 100 },
      { size: "47 inch", rating: "4", hours: "4 hours", consumption: 200 },
      { size: "47 inch", rating: "4", hours: "8 hours", consumption: 400 },
      { size: "47 inch", rating: "6", hours: "2 hours", consumption: 60 },
      { size: "47 inch", rating: "6", hours: "4 hours", consumption: 120 },
      { size: "47 inch", rating: "6", hours: "8 hours", consumption: 240 },
      { size: "55 inch", rating: "2", hours: "2 hours", consumption: 185 },
      { size: "55 inch", rating: "2", hours: "4 hours", consumption: 375 },
      { size: "55 inch", rating: "2", hours: "8 hours", consumption: 750 },
      { size: "55 inch", rating: "4", hours: "2 hours", consumption: 125 },
      { size: "55 inch", rating: "4", hours: "4 hours", consumption: 250 },
      { size: "55 inch", rating: "4", hours: "8 hours", consumption: 500 },
      { size: "55 inch", rating: "6", hours: "2 hours", consumption: 90 },
      { size: "55 inch", rating: "6", hours: "4 hours", consumption: 180 },
      { size: "55 inch", rating: "6", hours: "8 hours", consumption: 360 },
      { size: "60 inch", rating: "2", hours: "2 hours", consumption: 220 },
      { size: "60 inch", rating: "2", hours: "4 hours", consumption: 440 },
      { size: "60 inch", rating: "2", hours: "8 hours", consumption: 880 },
      { size: "60 inch", rating: "4", hours: "2 hours", consumption: 150 },
      { size: "60 inch", rating: "4", hours: "4 hours", consumption: 300 },
      { size: "60 inch", rating: "4", hours: "8 hours", consumption: 600 },
      { size: "60 inch", rating: "6", hours: "2 hours", consumption: 100 },
      { size: "60 inch", rating: "6", hours: "4 hours", consumption: 180 },
      { size: "60 inch", rating: "6", hours: "8 hours", consumption: 350 }
    ]
    //load brand list
    this.loadBrandList();
  }

  showQuestion2(): boolean {
    return this.tvKnow == "yes";
  }

  showQuestion3(): boolean {
    return this.tvKnow == "no";
  }

  showQuestion4(): boolean {
    return this.tvKnow == "no";
  }

  showQuestion5(): boolean {
    return this.tvKnow == "no";
  }

  /**
   * http request
   */
  loadBrandList() {
    this.restfulService.getTvBrandList()
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const brands: string[] = (data.BrandName + "").split(",");
        brands.pop();
        this.brandList = brands;
        if(this.brand == null) {
          this.brand = this.brandList[0];
          this.loadModelList();
        }
      },
      (error) => console.log(error)
      );
  }

  loadModelList() {
    this.restfulService.getTvModelList(this.brand)
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
    this.restfulService.getTvPowerRating(this.model)
      .subscribe(
      (response: Response) => {
        const data: any = response.json();
        const power: number = data.power;
        const rating: number = data.star;
        const size: number = data.screensize;
        this.power = power;
        this.star = rating;
        this.size = size;
        console.log(this, power + "  " + this.star + "  " + this.size);
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
    if (this.showQuestion2()) {
      this.totalUsage = this.power;
    }
    else {
      for (var i = 0; i < this.energyConsumptionArray.length; i++) {
        if (this.energyConsumptionArray[i].size == this.screenSize
          && this.energyConsumptionArray[i].rating == this.starRating
          && this.energyConsumptionArray[i].hours == this.usingTime) {
          this.totalUsage = this.energyConsumptionArray[i].consumption;
        }
      }
    }
    this.dataService.entertainmentTvKnow = this.tvKnow;
    this.dataService.entertainmentBrand = this.brand;
    this.dataService.entertainmentModel = this.model;
    this.dataService.entertainmentPower = this.power;
    this.dataService.entertainmentStar = this.star;
    this.dataService.entertainmentSize = this.size;
    this.dataService.entertainmentBrandList = this.brandList;
    this.dataService.entertainmentModelList = this.modelList;
    this.dataService.entertainmentScreenSize = this.screenSize;
    this.dataService.entertainmentStarRating = this.starRating;
    this.dataService.entertainmentUsingTime = this.usingTime;
    this.dataService.entertainmentTotalUsage = this.totalUsage;
    console.log(this.dataService.entertainmentTotalUsage);
  }
}
