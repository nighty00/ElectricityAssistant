import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

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

  public totalUsage: number;
  public ovenHours: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ovenHours = this.dataService.kitchenOvenHours;
  }

  public submit() {
    this.totalUsage = Number.parseInt(this.ovenHours) * 2 * 52;
    this.dataService.kitchenTotalUsage = this.totalUsage;
    this.dataService.kitchenOvenHours = this.ovenHours;
    console.log(this.dataService.kitchenTotalUsage);
  }

}
