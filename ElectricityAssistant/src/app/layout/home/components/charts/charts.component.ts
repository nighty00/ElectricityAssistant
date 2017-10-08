import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations: [
    routerTransition(),
    trigger('blockAnimation', [
      state('normal', style({
        'background-color': '#03EFFF'
      })),
      state('mouseEnter', style({
        'background-color': '#1C829E'
      })),
      transition('normal <=> mouseEnter', animate(300))
    ])
  ]
})
export class ChartsComponent implements OnInit {

  //user monthly electricity usage
  public averageUsage: number;
  public monthSelected: string;
  public inputUsage: number;
  //input validation classes
  public inputFieldSetClasses: object;
  public inputNumberClasses: object;

  //show charts
  public showCharts: boolean;

  //validation
  public isMonthSelected: boolean = true;
  public validInput: boolean = false;

  // bar chart
  public worldOrAustralia: string;
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabelsWorld: string[];
  public barChartLabelsAustralia: string[];
  public barChartDataWorld: any[];
  public barChartDataAustralia: any[];

  // Doughnut
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';

  public totalCo2Emission: number;
  public totalCo2EmissionPerKWH: number;
  public energyPercentage: any = {
    coal: 0.612,
    gas: 0.219,
    hydro: 0.074,
    wind: 0.041,
    oil: 0.02,
    solar: 0.02,
    biofuels: 0.014
  }
  public co2Emission: any = {
    coal: 1001,
    gas: 477,
    hydro: 86,
    wind: 12,
    oil: 652,
    solar: 54,
    biofuels: 549
  }

  // **********************************blocks************************************
  //animations
  public tvState: string = "normal";
  public ovenState: string = "normal";
  public washingState: string = "normal";
  public lightbulbState: string = "normal";
  public airconditionerState: string = "normal";
  public heaterState: string = "normal";
  // **********************************blocks************************************

  //total usage
  public heatTotalUsage: number;
  public coolTotalUsage: number;
  public entertainmentTotalUsage: number;
  public lightTotalUsage: number;
  public laundryTotalUsage: number;
  public kitchenTotalUsage: number;

  //report
  public showReport: boolean;
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
  public totalSaving: number;

  constructor(private dataService: DataService) { }

  // **********************************help icon************************************
  showHelpBlock: boolean = false;
  helpBlockTop: number = 0;
  helpBlockLeft: number = 0;

  onEnterHelpIcon(event: any) {
    console.log(event);
    if(this.helpBlockTop == 0) {
      this.helpBlockTop = event.pageY - 200;
      this.helpBlockLeft = event.pageX - 280;
    }
    this.showHelpBlock = true;
  }

  onLeaveHelpIcon(event: any) {
    this.showHelpBlock = false;
  }


  // **********************************help icon************************************



  // **********************************blocks************************************
  // public onMouseEnter(event: Event): void {
  //   switch (event.srcElement.id) {
  //     case "tvBlock":
  //       this.tvState = "mouseEnter";
  //       break;
  //     case "ovenBlock":
  //       this.ovenState = "mouseEnter";
  //       break;
  //     case "washingBlock":
  //       this.washingState = "mouseEnter";
  //       break;
  //     case "lightBulbBlock":
  //       this.lightbulbState = "mouseEnter";
  //       break;
  //     case "airConditionerBlock":
  //       this.airconditionerState = "mouseEnter";
  //       break;
  //     case "heaterBlock":
  //       this.heaterState = "mouseEnter";
  //       break;
  //   }
  // }

  // public onMouseLeave(event: Event): void {
  //   switch (event.srcElement.id) {
  //     case "tvBlock":
  //       this.tvState = "normal";
  //       break;
  //     case "ovenBlock":
  //       this.ovenState = "normal";
  //       break;
  //     case "washingBlock":
  //       this.washingState = "normal";
  //       break;
  //     case "lightBulbBlock":
  //       this.lightbulbState = "normal";
  //       break;
  //     case "airConditionerBlock":
  //       this.airconditionerState = "normal";
  //       break;
  //     case "heaterBlock":
  //       this.heaterState = "normal";
  //       break;
  //   }
  // }
  // **********************************blocks************************************
  /**
   * Init method
   */
  ngOnInit() {
    //DataService injection
    this.showReport = this.dataService.showReport;
    this.showCharts = this.dataService.showCharts;
    this.monthSelected = this.dataService.monthSelected;
    this.inputUsage = this.dataService.inputUsage;
    this.averageUsage = this.dataService.averageUsage;
    this.totalCo2Emission = this.dataService.totalCo2Emission;
    this.barChartDataWorld = this.dataService.barChartDataWorld;
    this.barChartDataAustralia = this.dataService.barChartDataAustralia;
    this.heatTotalUsage = this.dataService.heatTotalUsage;
    this.lightTotalUsage = this.dataService.lightTotalUsage;
    this.coolTotalUsage = this.dataService.coolTotalUsage;
    this.kitchenTotalUsage = this.dataService.kitchenTotalUsage;
    this.laundryTotalUsage = this.dataService.laundryTotalUsage;
    this.entertainmentTotalUsage = this.dataService.entertainmentTotalUsage;

    this.reportPieChartData = this.dataService.reportPieChartData;
    this.reportBarChartData = this.dataService.reportBarChartData;
    this.totalSaving = this.dataService.totalSaving;

    //bar chart initiation
    this.worldOrAustralia = "world";
    this.barChartLabelsWorld = ['You', 'Cananda', 'USA', 'Australia', 'Japan', 'UK', 'Germany', 'World', 'Russia', 'China', 'India', 'Nigeria'];
    this.barChartLabelsAustralia = ['You', 'ACT', 'Tasmania', 'NSW', 'VIC', 'Australia', 'Queensland', 'NT', 'WA', 'SA'];
    this.doughnutChartLabels = ['Coal', 'Gas', 'Hydro', 'Wind', "Oil", "Solar", "Biofuels"];
    this.doughnutChartData = [1, 1, 1, 1, 1, 1, 1];
    this.totalCo2EmissionPerKWH = this.energyPercentage.coal * this.co2Emission.coal
      + this.energyPercentage.gas * this.co2Emission.gas
      + this.energyPercentage.hydro * this.co2Emission.hydro
      + this.energyPercentage.wind * this.co2Emission.wind
      + this.energyPercentage.oil * this.co2Emission.oil
      + this.energyPercentage.solar * this.co2Emission.solar
      + this.energyPercentage.biofuels * this.co2Emission.biofuels;

    //inputClasses initiation
    this.inputFieldSetClasses = {
      "form-group": true,
      "has-success": false,
      "has-danger": false
    }
    this.inputNumberClasses = {
      "form-control": true,
      "form-control-success": false,
      "form-control-danger": false
    }
  }

  /**
   * Charts event
   */
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  /**
   * Button event
   */
  public getAverageUsageInput(): void {
    this.dataService.setInputUsage(this.inputUsage);
    this.dataService.setMonthSelected(this.monthSelected);
    if (this.monthSelected == "--please select month--") {
      this.isMonthSelected = false;
    }
    else if (this.inputUsage > 0) {
      this.isMonthSelected = true;
      if (this.monthSelected == "December" || this.monthSelected == "January" || this.monthSelected == "February") {
        this.averageUsage = this.inputUsage * 12;
      }
      else if (this.monthSelected == "March" || this.monthSelected == "April" || this.monthSelected == "May") {
        this.averageUsage = this.inputUsage * 12.5;
      }
      else if (this.monthSelected == "June" || this.monthSelected == "July" || this.monthSelected == "August") {
        this.averageUsage = this.inputUsage * 10.345;
      }
      else {
        this.averageUsage = this.inputUsage * 13.636;
      }
      this.dataService.setAverageUsage(this.averageUsage);

      //bar chart
      this.barChartDataWorld = [
        { data: [this.averageUsage, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Your usage' },
        { data: [0, 11879, 11698, 7227, 5513, 4648, 3512, 3471, 2419, 1349, 900, 570], label: 'World Average usage' }
      ];
      this.barChartDataAustralia = [
        { data: [this.averageUsage, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Your usage' },
        { data: [0, 10056, 8550, 7639, 7626, 7227, 6873, 6790, 6198, 5000], label: 'Australia Average usage' }
      ];
      this.dataService.setBarChartDataWorld(this.barChartDataWorld);
      this.dataService.setBarChartDataAustralia(this.barChartDataAustralia);

      //doughnut Chart
      this.doughnutChartData = [Math.round(this.averageUsage * this.energyPercentage.coal),
      Math.round(this.averageUsage * this.energyPercentage.gas),
      Math.round(this.averageUsage * this.energyPercentage.hydro),
      Math.round(this.averageUsage * this.energyPercentage.wind),
      Math.round(this.averageUsage * this.energyPercentage.oil),
      Math.round(this.averageUsage * this.energyPercentage.solar),
      Math.round(this.averageUsage * this.energyPercentage.biofuels)
      ];

      this.totalCo2Emission = this.totalCo2EmissionPerKWH * this.averageUsage / 1000;
      this.dataService.setTotalCo2Emission(this.totalCo2Emission);
      this.showCharts = true;
      this.dataService.setShowCharts(this.showCharts);
      this.dataService.showChartsSubject.next(true);
    }
  }

  public checkValidation(event: any): void {
    if (event.target.value.match(/^[0-9]+\.?[0-9]*$/) != null) {
      this.validInput = true;
      this.inputFieldSetClasses = {
        "form-group": true,
        "has-success": true,
        "has-danger": false
      }
      this.inputNumberClasses = {
        "form-control": true,
        "form-control-success": true,
        "form-control-danger": false
      }
    }
    else {
      this.validInput = false;
      this.inputFieldSetClasses = {
        "form-group": true,
        "has-success": false,
        "has-danger": true
      }
      this.inputNumberClasses = {
        "form-control": true,
        "form-control-success": false,
        "form-control-danger": true
      }
    }
  }

  public showWorld(): void {
    this.worldOrAustralia = "world";
  }

  public showAustralia(): void {
    this.worldOrAustralia = "Australia";
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
    this.showReport = true;
    this.dataService.showReport = this.showReport;
  }

  // changeGeneralTips1(event: any) {
  //   if(event.srcElement.checked) {
  //     this.totalSaving += 350;
  //   }
  //   else {
  //     this.totalSaving -= 350;
  //   }
  // }

  // changeWashingTips1(event: any) {
  //   var saving: number = this.dataService.laundryWashingTotalUsage * 0.25;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // changeDryerTips1(event: any) {
  //   var saving: number = (Number.parseFloat(this.dataService.laundryDryFrequency) - 1) 
  //     / Number.parseFloat(this.dataService.laundryDryFrequency) * this.dataService.laundryDryTotalUsage;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // changeLightTips1(event: any) {
  //   var saving: number = this.dataService.lightNumberOfLights 
  //     * Number.parseFloat(this.dataService.lightPowerOfLights) * 0.75 * 36 * 52;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // changeLightTips2(event: any) {
  //   var saving: number = 49 * 52 * 0.05;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // changeCoolTips1(event: any) {
  //   var daysOfUsing: number;
  //   switch (this.dataService.coolTemperature) {
  //     case "25":
  //       daysOfUsing = 90;
  //       break;
  //     case "28":
  //       daysOfUsing = 60;
  //       break;
  //   }
  //   var saving = (daysOfUsing - 35) / daysOfUsing * this.dataService.coolTotalUsage;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // changeHeatTips1(event: any) {
  //   var saving: number = this.dataService.heatTotalUsage * 0.667;
  //   if(event.srcElement.checked) {
  //     this.totalSaving += saving;
  //   }
  //   else {
  //     this.totalSaving -= saving;
  //   }
  // }

  // showWashingTips1(): boolean {
  //   if(this.dataService.laundryWashingKnow == "yes") {
  //     if(this.dataService.laundryWashingStarRating > 0 && this.dataService.laundryWashingStarRating < 4) {
  //       return true;
  //     }
  //     else { 
  //       return false;
  //     }
  //   }
  //   else {
  //     if(Number.parseInt(this.dataService.laundryWashingRating) < 4)
  //       return true;
  //     else
  //       return false;
  //   }
  // }

  // showDryerTips1(): boolean {
  //   if(this.dataService.laundryDryKnow == "yes" || this.dataService.laundryDryKnow == "no") {
  //     if(Number.parseFloat(this.dataService.laundryDryFrequency) > 1)
  //       return true;
  //     else
  //       return false;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  // showLightTips1(): boolean {
  //   if(this.dataService.lightHalogenLight == "Yes")
  //     return true;
  //   else
  //     return false;
  // }

  // showLightTips2(): boolean {
  //   if(this.dataService.lightSleepTime == "yes")
  //     return true;
  //   else
  //     return false;
  // }

  // showCoolTips1(): boolean {
  //   if(this.dataService.coolType != "portable fan") {
  //     if(Number.parseInt(this.dataService.coolTemperature) < 30)
  //       return true;
  //     else
  //       return false;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  // showHeatTips1(): boolean {
  //   if(this.dataService.heatType == "Portable electric heater")
  //     return true;
  //   else 
  //     return false;
  // }
}
