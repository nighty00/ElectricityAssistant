import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {


  //user monthly electricity usage
  public averageUsage: number;
  public monthSelected: string;
  //input validation classes
  public inputFieldSetClasses: object;
  public inputNumberClasses: object;
  //sliders
  public sliders: Array<any> = [];
  //show charts
  public showCharts: boolean = false;
  //validation
  public isMonthSelected = true;

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

  /**
   * Constructor
   */
  constructor() {
    this.sliders.push(
      {
        imagePath: 'assets/images/img1.jpg',
        label: '',
        text: ''
      },
      {
        imagePath: 'assets/images/img2.jpg',
        label: '',
        text: ''
      },
      {
        imagePath: 'assets/images/img3.jpg',
        label: '',
        text: ''
      },
      {
        imagePath: 'assets/images/img4.jpg',
        label: '',
        text: ''
      },
    );
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
   * click start button
   */
  public startBtnClick(): void {

  }

  /**
   * Button event
   */
  public getAverageUsageInput(inputNumber: number, inputMonth: string): void {
    if (inputMonth == "--please select month--") {
      this.isMonthSelected = false;
    }
    else if (inputNumber != 0) {
      this.isMonthSelected = true;
      this.monthSelected = inputMonth;
      if (this.monthSelected == "December" || this.monthSelected == "January" || this.monthSelected == "February") {
        this.averageUsage = inputNumber * 12;
      }
      else if (this.monthSelected == "March" || this.monthSelected == "April" || this.monthSelected == "May") {
        this.averageUsage = inputNumber * 12.5;
      }
      else if (this.monthSelected == "June" || this.monthSelected == "July" || this.monthSelected == "August") {
        this.averageUsage = inputNumber * 10.345;
      }
      else {
        this.averageUsage = inputNumber * 13.636;
      }

      //bar chart
      this.barChartDataWorld = [
        { data: [this.averageUsage], label: 'Your usage' },
        { data: [0, 11879, 11698, 7227, 5513, 4648, 3512, 3471, 2419, 1349, 900, 570], label: 'World Average usage' }
      ];
      this.barChartDataAustralia = [
        { data: [this.averageUsage], label: 'Your usage' },
        { data: [0, 10056, 8550, 7639, 7626, 7227, 6873, 6790, 6198, 5000], label: 'Australia Average usage' }
      ];
      //doughnut Chart
      this.doughnutChartData = [this.averageUsage * this.energyPercentage.coal,
      this.averageUsage * this.energyPercentage.gas,
      this.averageUsage * this.energyPercentage.hydro,
      this.averageUsage * this.energyPercentage.wind,
      this.averageUsage * this.energyPercentage.oil,
      this.averageUsage * this.energyPercentage.solar,
      this.averageUsage * this.energyPercentage.biofuels
      ];
      this.totalCo2Emission = this.totalCo2EmissionPerKWH * this.averageUsage / 1000;

      this.showCharts = true;
    }
  }

  public checkValidation(event: any): void {
    if (event.target.value == 0) {
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
    else {
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
  }

  public showWorld(): void {
    this.worldOrAustralia = "world";
  }

  public showAustralia(): void {
    this.worldOrAustralia = "Australia";
  }

  ngOnInit() {
    //bar chart initiation
    this.worldOrAustralia = "world";
    this.barChartLabelsWorld = ['You', 'Cananda', 'USA', 'Australia', 'Japan', 'UK', 'Germany', 'World', 'Russia', 'China', 'India', 'Nigeria'];
    this.barChartLabelsAustralia = ['You', 'ACT', 'Tasmania', 'NSW', 'VIC', 'Australia', 'Queensland', 'NT', 'WA', 'SA'];
    this.barChartDataWorld = [
      { data: [0], label: 'Your usage' },
      { data: [0, 11879, 11698, 7227, 5513, 4648, 3512, 3471, 2419, 1349, 900, 570], label: 'World Average usage' }
    ];
    this.barChartDataAustralia = [
      { data: [0], label: 'Your usage' },
      { data: [0, 10056, 8550, 7639, 7626, 7227, 6873, 6790, 6198, 5000], label: 'Australia Average usage' }
    ];
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
}
