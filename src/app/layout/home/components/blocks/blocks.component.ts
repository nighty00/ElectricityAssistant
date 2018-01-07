import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
  animations: [
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
export class BlocksComponent implements OnInit {

  //animations
  public tvState: string = "normal";
  public ovenState: string = "normal";
  public washingState: string = "normal";
  public lightbulbState: string = "normal";
  public airconditionerState: string = "normal";
  public heaterState: string = "normal";

  //flag of completed
  public tvCompleted: boolean = false;
  public ovenCompleted: boolean = true;
  public airConditionerCompleted: boolean = false;
  public heaterCompleted: boolean = true;
  public washingCompleted: boolean = false;
  public lightBulbCompleted: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public onMouseEnter(event: Event): void {
    switch (event.srcElement.id) {
      case "tvBlock":
        this.tvState = "mouseEnter";
        break;
      case "ovenBlock":
        this.ovenState = "mouseEnter";
        break;
      case "washingBlock":
        this.washingState = "mouseEnter";
        break;
      case "lightBulbBlock":
        this.lightbulbState = "mouseEnter";
        break;
      case "airConditionerBlock":
        this.airconditionerState = "mouseEnter";
        break;
      case "heaterBlock":
        this.heaterState = "mouseEnter";
        break;
    }
  }

  public onMouseLeave(event: Event): void {
    switch (event.srcElement.id) {
      case "tvBlock":
        this.tvState = "normal";
        break;
      case "ovenBlock":
        this.ovenState = "normal";
        break;
      case "washingBlock":
        this.washingState = "normal";
        break;
      case "lightBulbBlock":
        this.lightbulbState = "normal";
        break;
      case "airConditionerBlock":
        this.airconditionerState = "normal";
        break;
      case "heaterBlock":
        this.heaterState = "normal";
        break;
    }
  }
}
