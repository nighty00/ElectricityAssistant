import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  public totalUsage: number;
  public screenSize: string;
  public starRating: string;
  public usingTime: string;
  public energyConsumptionArray: {size: string, rating: string, hours: string, consumption: number}[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
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
  }

  public submit(): void {
    for (var i = 0; i < this.energyConsumptionArray.length; i++) {
      if (this.energyConsumptionArray[i].size == this.screenSize
        && this.energyConsumptionArray[i].rating == this.starRating
        && this.energyConsumptionArray[i].hours == this.usingTime) {
          this.totalUsage = this.energyConsumptionArray[i].consumption;
      }
    }
    this.dataService.entertainmentScreenSize = this.screenSize;
    this.dataService.entertainmentStarRating = this.starRating;
    this.dataService.entertainmentUsingTime = this.usingTime;
    this.dataService.entertainmentTotalUsage = this.totalUsage;
    console.log(this.dataService.entertainmentTotalUsage);
  }
}
