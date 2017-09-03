import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss'],
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
export class LightingComponent implements OnInit {

  //state for display questions
  public question2State: string;
  public question3State: string;

  //ngModel
  public totalUsage: number;
  public halogenLight: string;
  public numberOfLights: number;
  public powerOfLights: string;
  public switchOff: string;
  public sleepTime: string;

  //public 
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.halogenLight = this.dataService.lightHalogenLight;
    this.numberOfLights = this.dataService.lightNumberOfLights;
    this.powerOfLights = this.dataService.lightPowerOfLights;
    this.switchOff = this.dataService.lightSwitchOff;
    this.sleepTime = this.dataService.lightSleepTime;
  }

  public onQ1YesClick(): void {
    this.question2State = "show";
    this.question3State = "show";
  }

  public onQ1NoClick(): void {
    this.question2State = "";
    this.question3State = "";
  }

  public submit(): void {
    if (this.halogenLight == "Yes") {
      this.totalUsage = (this.numberOfLights * Number.parseFloat(this.powerOfLights) * 36 * 52
        + 0.1 * 36 * 52) * Number.parseFloat(this.switchOff) + 0.05 * 49 * 52;
    }
    else {
      this.totalUsage = 0.1 * 36 * 52 * Number.parseFloat(this.switchOff) + 0.05 * 49 * 52;
    }
    this.dataService.lightHalogenLight = this.halogenLight;
    this.dataService.lightNumberOfLights = this.numberOfLights;
    this.dataService.lightPowerOfLights = this.powerOfLights;
    this.dataService.lightSwitchOff = this.switchOff;
    this.dataService.lightSleepTime = this.sleepTime;
    this.dataService.lightTotalUsage = this.totalUsage;
  }
}
