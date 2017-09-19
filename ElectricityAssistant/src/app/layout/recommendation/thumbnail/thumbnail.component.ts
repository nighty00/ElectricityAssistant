import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() index: number;
  @Input() type: string;
  @Input() brand: string;
  @Input() model: string;
  @Input() star: string;
  @Input() power: string;
  @Input() buy: string;
  @Input() image: string;
  @Input() capacity: string;
  @Input() volume: string;
  @Input() screenSize: string;

  starClassList: string[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const maxStar: number = this.getMaxStars();
    for(var i = 0; i < Number.parseInt(this.star); i++) {
      this.starClassList.push("fa fa-star checked");
    }
    for(var i = Number.parseInt(this.star) ; i < maxStar; i++) {
      this.starClassList.push("fa fa-star");
    }
    for(var i = maxStar ; i < 8; i++) {
      this.starClassList.push("");
    }
  }

  getMaxStars(): number {
    if (this.type == "washing machine")
      return 6;
    if (this.type == "clothes dryer")
      return 8;
    if (this.type == "fridge")
      return 5;
    if (this.type == "television")
      return 6;
  }

  choose() {
    if (this.type == "washing machine") {
      this.dataService.washingChosen = this.index;
    }
    else if (this.type == "clothes dryer") {
      this.dataService.dryerChosen = this.index;
    }
    else if (this.type == "fridge") {
      this.dataService.fridgeChosen = this.index;
    }
    else if (this.type == "television") {
      this.dataService.televisionChosen = this.index;
    }
  }
}
