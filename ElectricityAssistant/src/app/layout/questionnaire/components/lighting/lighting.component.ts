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
    setTimeout(() => {
      this.dataService.currentQuestionnairePage.next("lighting");
    });
    this.halogenLight = this.dataService.lightHalogenLight;
    this.numberOfLights = this.dataService.lightNumberOfLights;
    this.powerOfLights = this.dataService.lightPowerOfLights;
    this.switchOff = this.dataService.lightSwitchOff;
    this.sleepTime = this.dataService.lightSleepTime;
  }

  public submit(): void {
    if (this.halogenLight == "Yes") {
      var usageOfHalogen = this.numberOfLights * Number.parseFloat(this.powerOfLights);
      var usageOfLED = (usageOfHalogen > 0.2) ? 0 : (0.2 - usageOfHalogen) / 4;
      this.totalUsage = (usageOfHalogen + usageOfLED) * 36 * 52 * Number.parseFloat(this.switchOff);
    }
    else {
      this.totalUsage = 0.05 * 36 * 52 * Number.parseFloat(this.switchOff);
    }
    if (this.sleepTime == "yes") {
      this.totalUsage += 50;
    }
    this.dataService.lightHalogenLight = this.halogenLight;
    this.dataService.lightNumberOfLights = this.numberOfLights;
    this.dataService.lightPowerOfLights = this.powerOfLights;
    this.dataService.lightSwitchOff = this.switchOff;
    this.dataService.lightSleepTime = this.sleepTime;
    this.dataService.lightTotalUsage = this.totalUsage;
    console.log(this.dataService.lightTotalUsage);
  }
}
