import { Component, OnInit } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  //sliders
  public sliders: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

  // ngOnInit() {
  //   this.sliders.push(
  //     {
  //       imagePath: 'assets/images/img1.jpg',
  //       label: '',
  //       text: ''
  //     },
  //     {
  //       imagePath: 'assets/images/img2.jpg',
  //       label: '',
  //       text: ''
  //     },
  //     {
  //       imagePath: 'assets/images/img3.jpg',
  //       label: '',
  //       text: ''
  //     },
  //     {
  //       imagePath: 'assets/images/img4.jpg',
  //       label: '',
  //       text: ''
  //     },
  //   );
  // }

}
