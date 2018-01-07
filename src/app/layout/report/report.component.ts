import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  //total usage
  public heatTotalUsage: number;
  public coolTotalUsage: number;
  public entertainmentTotalUsage: number;
  public lightTotalUsage: number;
  public laundryTotalUsage: number;
  public kitchenTotalUsage: number;

  //report chart
  public totalSaving: number;
  public reportPieChartLabels: any[] = ['Heating', 'Cooling', 'Entertainment', 'Kitchen', "Laundry", "Lighting"];
  public reportPieChartData: any[];
  public reportPieChartType: string = "pie";
  public reportBarChartType: string = "horizontalBar";
  public reportBarChartData: any[];
  public reportBarChartLabels: any[] = [
    'Television',
    'Refrigerator',
    'Dishwasher',
    'Washing machine',
    'Clothes dryer',
    'Lights',
    'Air-conditioner for cooling',
    'Air-conditioner for heating',
    'Heater'
  ]

  public showComparison: boolean;
  public reportPieChart2Data: any[];
  public reportBarChart2Data: any[];
  public totalElectricitySaving: number;

  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

  public line_ChartOptions = {
    title: 'Company Performance',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.heatTotalUsage = this.dataService.heatTotalUsage;
    this.lightTotalUsage = this.dataService.lightTotalUsage;
    this.coolTotalUsage = this.dataService.coolTotalUsage;
    this.kitchenTotalUsage = this.dataService.kitchenTotalUsage;
    this.laundryTotalUsage = this.dataService.laundryTotalUsage;
    this.entertainmentTotalUsage = this.dataService.entertainmentTotalUsage;

    this.reportPieChartData = this.dataService.reportPieChartData;
    this.reportBarChartData = this.dataService.reportBarChartData;
    this.reportPieChart2Data = this.dataService.reportPieChart2Data;
    this.reportBarChart2Data = this.dataService.reportBarChart2Data;
    this.showComparison = this.dataService.showComparison;
    this.totalSaving = this.dataService.totalSaving;

    //initialize report
    this.generateReport();
    if (this.showComparison)
      this.totalElectricitySaving = this.dataService.totalElectricitySaving;
    this.generateNewReport();
  }

  public generateReport(): void {
    this.reportPieChartData = [
      Math.round(this.heatTotalUsage),
      Math.round(this.coolTotalUsage),
      Math.round(this.entertainmentTotalUsage),
      Math.round(this.kitchenTotalUsage),
      Math.round(this.laundryTotalUsage),
      Math.round(this.lightTotalUsage)
    ];
    this.reportBarChartData = [
      {
        data: [
          Math.round(this.dataService.entertainmentTotalUsage),
          Math.round(this.dataService.kitchenFridgeTotalUsage),
          Math.round(this.dataService.kitchenDishTotalUsage),
          Math.round(this.dataService.laundryWashingTotalUsage),
          Math.round(this.dataService.laundryDryTotalUsage),
          Math.round(this.dataService.lightTotalUsage),
          Math.round(this.dataService.coolTotalUsage),
          Math.round(this.dataService.heatType == "Air-conditioner" ? this.dataService.heatTotalUsage : 0),
          Math.round(this.dataService.heatType == "Portable electric heater" ? this.dataService.heatTotalUsage : 0)
        ],
        label: "annual usage (kWh)"
      }
    ]

    //   this.reportPieChartData = [1, 1, 1, 1, 1, 1];
    //   this.reportBarChartData = [
    //     {
    //       data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //       label: "annual usage (kWh)"
    //     }
    //   ]
    this.dataService.reportPieChartData = this.reportPieChartData;
    this.dataService.reportBarChartData = this.reportBarChartData;
  }

  public generateNewReport(): void {
    this.reportPieChart2Data = [
      Math.round(this.dataService.heatTotalUsageNew),
      Math.round(this.dataService.coolTotalUsageNew),
      Math.round(this.dataService.entertainmentTotalUsageNew),
      Math.round(this.dataService.kitchenTotalUsageNew),
      Math.round(this.dataService.laundryTotalUsageNew),
      Math.round(this.dataService.lightTotalUsageNew)
    ];
    this.reportBarChart2Data = [
      {
        data: [
          Math.round(this.dataService.entertainmentTotalUsageNew),
          Math.round(this.dataService.kitchenFridgeTotalUsageNew),
          Math.round(this.dataService.kitchenDishTotalUsageNew),
          Math.round(this.dataService.laundryWashingTotalUsageNew),
          Math.round(this.dataService.laundryDryTotalUsageNew),
          Math.round(this.dataService.lightTotalUsageNew),
          Math.round(this.dataService.coolTotalUsageNew),
          Math.round(this.dataService.heatType == "Air-conditioner" ? this.dataService.heatTotalUsageNew : 0),
          Math.round(this.dataService.heatType == "Portable electric heater" ? this.dataService.heatTotalUsageNew : 0)
        ],
        label: "annual usage (kWh)"
      }
    ]

    //   this.reportPieChartData = [1, 1, 1, 1, 1, 1];
    //   this.reportBarChartData = [
    //     {
    //       data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //       label: "annual usage (kWh)"
    //     }
    //   ]
    this.dataService.reportPieChart2Data = this.reportPieChart2Data;
    this.dataService.reportBarChart2Data = this.reportBarChart2Data;
  }

  changeGeneralTips1(event: any) {
    if (event.srcElement.checked) {
      this.totalSaving += 350;
    }
    else {
      this.totalSaving -= 350;
    }
  }

  changeWashingTips1(event: any) {
    var saving: number = this.dataService.laundryWashingTotalUsage * 0.25;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  changeDryerTips1(event: any) {
    var saving: number = (Number.parseFloat(this.dataService.laundryDryFrequency) - 1)
      / Number.parseFloat(this.dataService.laundryDryFrequency) * this.dataService.laundryDryTotalUsage;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  changeLightTips1(event: any) {
    var saving: number = this.dataService.lightNumberOfLights
      * Number.parseFloat(this.dataService.lightPowerOfLights) * 0.75 * 36 * 52;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  changeLightTips2(event: any) {
    var saving: number = 49 * 52 * 0.05;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  changeCoolTips1(event: any) {
    var daysOfUsing: number;
    switch (this.dataService.coolTemperature) {
      case "25":
        daysOfUsing = 90;
        break;
      case "28":
        daysOfUsing = 60;
        break;
    }
    var saving = (daysOfUsing - 35) / daysOfUsing * this.dataService.coolTotalUsage;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  changeHeatTips1(event: any) {
    var saving: number = this.dataService.heatTotalUsage * 0.667;
    if (event.srcElement.checked) {
      this.totalSaving += saving;
    }
    else {
      this.totalSaving -= saving;
    }
  }

  showWashingTips1(): boolean {
    if (this.dataService.laundryWashingKnow == "yes") {
      if (this.dataService.laundryWashingStarRating > 0 && this.dataService.laundryWashingStarRating < 4) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      if (Number.parseInt(this.dataService.laundryWashingRating) < 4)
        return true;
      else
        return false;
    }
  }

  showDryerTips1(): boolean {
    if (this.dataService.laundryDryKnow == "yes" || this.dataService.laundryDryKnow == "no") {
      if (Number.parseFloat(this.dataService.laundryDryFrequency) > 1)
        return true;
      else
        return false;
    }
    else {
      return false;
    }
  }

  showLightTips1(): boolean {
    if (this.dataService.lightHalogenLight == "Yes")
      return true;
    else
      return false;
  }

  showLightTips2(): boolean {
    if (this.dataService.lightSleepTime == "yes")
      return true;
    else
      return false;
  }

  showCoolTips1(): boolean {
    if (this.dataService.coolType != "portable fan") {
      if (Number.parseInt(this.dataService.coolTemperature) < 30)
        return true;
      else
        return false;
    }
    else {
      return false;
    }
  }

  showHeatTips1(): boolean {
    if (this.dataService.heatType == "Portable electric heater")
      return true;
    else
      return false;
  }

}
