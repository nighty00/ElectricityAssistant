import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Washing } from './model/washing.model'
import { Dryer } from './model/dryer.model'

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  washingList: Washing[] = [
    {
      brand: 'SAMSUNG', model: 'WW11K8412OW', cap: 'L', power: '425', star: '4',
      image: 'https://thegoodguys.sirv.com/products/50038966/50038966_132286.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/samsung-11kg-front-load-washer-ww11k8412ow'
    },
    {
      brand: 'BOSCH', model: 'WAW32640AU', cap: 'L', power: '250', star: '4.5',
      image: 'https://thegoodguys.sirv.com/products/50033615/50033615_120426.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/bosch-85kg-front-load-washer-waw32640au'
    },
    {
      brand: 'ELECTROLUX', model: 'EWF14933', cap: 'L', power: '220', star: '5',
      image: 'https://thegoodguys.sirv.com/products/50046653/50046653_497171.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/electrolux-9kg-front-load-washer-ewf14933'
    },
    {
      brand: 'ASKO', model: 'W6564', cap: 'M', power: '180', star: '5',
      image: 'https://thegoodguys.sirv.com/products/50003992/50003992_506891.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/asko-7kg-front-load-washer-w6564'
    },
    {
      brand: 'MIELE', model: 'WDA110', cap: 'M', power: '242', star: '4',
      image: 'https://thegoodguys.sirv.com/products/50030131/50030131_113778.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/miele-7kg-front-load-washer-wda110'
    },
    {
      brand: 'HOOVER', model: 'DXA-175AH-1-AUS', cap: 'M', power: '248', star: '4',
      image: 'https://thegoodguys.sirv.com/products/50037480/50037480_129691.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
      buy: 'https://www.thegoodguys.com.au/hoover-75kg-front-load-washer-dxa-175ah1-aus'
    }
  ]
  dryerList: Dryer[] = [
    {
      brand: 'BEKO', model: 'DPE7400', cap: 'M', power: '145', star: '6',
      image: 'https://www.appliancesonline.com.au/public/images/product/dpe7400/external/Beko-DPE7400-7kg-Heat-Pump-Dryers-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/beko-dpe7400-7kg-heat-pump-dryers/'
    },
    {
      brand: 'SMEG', model: 'SAHP7', cap: 'M', power: '163', star: '6',
      image: 'https://www.appliancesonline.com.au/public/images/product/sahp7/external/Smeg-SAHP7-7kg-Heat-Pump-Dryer-Hero-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/7kg-smeg-heat-pump-dryer-sahp7_old'
    },
    {
      brand: 'ASKO', model: 'T754HP', cap: 'M', power: '164', star: '6',
      image: 'https://www.appliancesonline.com.au/public/images/product/t754chp/external/Asko-T754CHP-7kg-Heat-Pump-Dryer-Hero-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/7kg-asko-heat-pump-dryer-t754chp'
    },
    {
      brand: 'MIELE', model: ' TMR 840 WP', cap: 'L', power: '141', star: '8',
      image: 'http://www.arredatutto.com/en/images/icecat/33703403-81570.jpg',
      buy: 'http://www.arredatutto.com/en/home-appliances/tumble-dryers/dryer/miele-tmr-840-wp-sfinish-eco-xl-p-81570.html'
    },
    {
      brand: 'BOSCH', model: 'WTY877W0AU', cap: 'L', power: '150', star: '8',
      image: 'http://media3.bosch-home.com/Product_Shots/1800x1012/MCSA00848125_WTY877W0AU_def.png',
      buy: 'http://www.bosch-home.com.au/productlist/washers-dryers/tumble-dryers/heat-pump-dryers/WTY877W0AU'
    },
    {
      brand: 'SIEMENS', model: 'WT47Y7W0AU', cap: 'L', power: '150', star: '8',
      image: 'http://media3.bsh-group.com/Product_Shots/435x515/MCSA00848123_WT47Y7W0AU_def.png',
      buy: 'http://www.siemens-home.bsh-group.com/au/productlist/laundry/dryers/iq800-dryers/WT47Y7W0AU'
    }
  ]
  tvList: { brand: string, model: string, size: string, power: string, star: string, image: string, buy: string }[] = [
    {
      brand: 'HISENSE', model: ' 32M2160', size: 'S', power: '116', star: '5.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/2/32m2160-edited_1.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/hisense-32-hd-led-lcd-tv.html'
    },
    {
      brand: 'LG', model: '32LJ550D', size: 'S', power: '129', star: '5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/2/32lj550d.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/lg-32-lj550d-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'HISENSE', model: '32N4', size: 'S', power: '104', star: '6',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/2/32n4.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/hisense-32-n4-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'TCL', model: '55S6000FS', size: 'M', power: '235', star: '6',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/5/5/55s6000fs.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/tcl-55-s6000-full-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'LG', model: '55UJ752T', size: 'M', power: '292', star: '5.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/2/-/2-55uj752t-edited-again_1.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/lg-55-uj752-4k-super-ultra-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'HISENSE', model: '50N4', size: 'M', power: '254', star: '5.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/5/0/50n4_55n4_5.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/hisense-50-series-4-full-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'LG', model: '65UJ654T', size: 'L', power: '388', star: '5.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/u/j/uj654t_5.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/lg-65-uj654t-4k-ultra-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'PANASONIC', model: 'TH65EX780A', size: 'L', power: '345', star: '6',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/t/h/th65ex780a.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/panasonic-65-ex780-4k-ultra-hd-led-lcd-smart-tv.html'
    },
    {
      brand: 'HISENSE', model: '65N8', size: 'L', power: '416', star: '5.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/6/5/65n8.jpg',
      buy: 'https://www.harveynorman.com.au/tv-blu-ray-home-theatre/tvs/tvs/hisense-65-n8-4k-ultra-hd-uled-smart-tv.html'
    }
  ]
  fridgeList: { brand: string, model: string, size: string, power: string, star: string, image: string, buy: string }[] = [
    {
      brand: 'Westinghouse', model: 'WTB2300WG', size: 'S', power: '276', star: '3.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/wtb2300wg/undefined/Electrolux-WTB2300WG-230L-Top-Mount-Fridge-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/westinghouse-wtb2300wg-230l-top-mount-fridge/'
    },
    {
      brand: 'Liebherr', model: 'SIGN3576RH', size: 'M', power: '331', star: '3',
      image: 'https://homeclearance.com.au/wp-content/uploads/2016/11/SIGN3576RH2.jpg',
      buy: 'https://homeclearance.com.au/p/liebherr-sign3576rh-248l-integrated-freezer/?attribute_pa_condition=cosmetic-imperfection&pa_id=31204'
    },
    {
      brand: 'Samsung', model: 'SR270MLS', size: 'M', power: '330', star: '3',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/s/r/sr270mls-01.jpg',
      buy: 'http://www.harveynorman.com.au/samsung-270l-top-mount-fridge-stainless-steel.html'
    },
    {
      brand: 'LG', model: 'GB-450UPLX', size: 'M', power: '299', star: '4.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/gb-450uplx/external/LG-GB-450UPLX-450L-Bottom-Mount-Fridge-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/lg-gb-450uplx-450l-bottom-mount-fridge/'
    },
    {
      brand: 'Electrolux', model: 'ETE4607SA-R', size: 'M', power: '260', star: '5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/e/t/ete4607sa_1.jpg',
      buy: 'http://www.harveynorman.com.au/electrolux-fresh-plus-460l-right-hinge-top-mount-fridge-stainless-steel.html'
    },
    {
      brand: 'Haier', model: 'HBM450WH1', size: 'M', power: '335', star: '4',
      image: 'https://www.appliancesonline.com.au/public/images/product/hbm450wh1/external/Haier-HBM450WH1-450L-Bottom-Mount-Fridge-Hero-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/haier-hbm450wh1-450l-bottom-mount-fridge/'
    },
    {
      brand: 'Samsung', model: 'SR342WTC', size: 'M', power: '317', star: '3.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/sr342wtc/external/Samsung-SR342WTC-341L-Top-Mount-Fridge-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/samsung-sr342wtc-341l-top-mount-fridge/'
    },
    {
      brand: 'Electrolux', model: 'EBE5367SA-R', size: 'L', power: '323', star: '4.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/1/_/1_37_243_1_1718.jpg',
      buy: 'http://www.harveynorman.com.au/electrolux-freshplus-528l-right-hinge-bottom-mount-fridge-stainless-steel.html'
    },
    {
      brand: 'Samsung', model: 'SR625BLSTC', size: 'L', power: '375', star: '4',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/s/r/sr625blstc_01.jpg',
      buy: 'http://www.harveynorman.com.au/electrolux-freshplus-528l-right-hinge-bottom-mount-fridge-stainless-steel.html'
    },
    {
      brand: 'LG', model: 'GT-515BWL', size: 'L', power: '412', star: '3.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/gt-515bwl/external/LG-GT-515BWL-515L-Fridge-Hero-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/515l-lg-fridge-gt-515bwl/'
    },
    {
      brand: 'Fisher & Paykel', model: 'RF522ADW5', size: 'L', power: '412', star: '3.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/rf522adw5/external/Fisher-Paykel-RF522ADW5-519L-French-Door-Fridge-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/fisher-paykel-rf522adw5-519l-french-door-fridge/'
    },
    {
      brand: 'Westinghouse', model: 'WTB5400WALH', size: 'L', power: '418', star: '3.5',
      image: 'https://www.appliancesonline.com.au/public/images/product/wtb5400walh/external/Westinghouse-WTB5400WALH-540L-Fridge-Hero-Image-high.jpeg',
      buy: 'https://www.appliancesonline.com.au/westinghouse-wtb5400walh-540l-fridge/'
    },
    {
      brand: 'Electrolux', model: 'EBE5307SA-R', size: 'L', power: '323', star: '4.5',
      image: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/e/b/ebe5307sa-1_1.jpg',
      buy: 'http://www.harveynorman.com.au/electrolux-freshzone-530l-bottom-mount-fridge-stainless-steel.html'
    }
  ]

  washingFlag: boolean;
  dryerFlag: boolean;
  fridgeFlag: boolean;
  tvFlag: boolean;
  recommendWashingList: Washing[] = [];
  recommendDryerList: Dryer[] = [];
  recommendFridgeList: any[] = [];
  recommendTvList: any[] = [];

  totalElectricitySaving: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.washingFlag = this.recommendWashingOrNot();
    this.dryerFlag = this.recommendDryerOrNot();
    this.tvFlag = this.recommendTvOrNot();
    this.fridgeFlag = this.recommendFridgeOrNot();

    console.log(this.washingFlag + " " + this.dryerFlag + " " + this.tvFlag + " " + this.fridgeFlag);

    this.recommendWashing();
    this.recommendDryer();
    this.recommendTv();
    this.recommendFridge();

    //subscription
    this.dataService.laundryWashingTotalUsageNew = this.dataService.laundryWashingTotalUsage;
    this.dataService.laundryDryTotalUsageNew = this.dataService.laundryDryTotalUsage;
    this.dataService.entertainmentTotalUsageNew = this.dataService.entertainmentTotalUsage;
    this.dataService.kitchenFridgeTotalUsageNew = this.dataService.kitchenFridgeTotalUsage;

    this.dataService.washingChosen.subscribe(
      (index: number) => {
        this.dataService.laundryWashingTotalUsageNew = Number.parseFloat(this.recommendWashingList[index].power);
        this.dataService.laundryWashingTotalUsageNew = this.min(this.dataService.laundryWashingTotalUsage, this.dataService.laundryWashingTotalUsageNew)
        console.log("washing total usage" + this.dataService.laundryWashingTotalUsageNew);
      }
    );

    this.dataService.dryerChosen.subscribe(
      (index: number) => {
        this.dataService.laundryDryTotalUsageNew = Number.parseFloat(this.recommendDryerList[index].power);
        this.dataService.laundryDryTotalUsageNew = this.min(this.dataService.laundryDryTotalUsage, this.dataService.laundryDryTotalUsageNew)
        console.log("dryer total usage" + this.dataService.laundryDryTotalUsageNew);
      }
    );

    this.dataService.televisionChosen.subscribe(
      (index: number) => {
        this.dataService.entertainmentTotalUsageNew = Number.parseFloat(this.recommendTvList[index].power);
        this.dataService.entertainmentTotalUsageNew = this.min(this.dataService.entertainmentTotalUsage, this.dataService.entertainmentTotalUsageNew)
        console.log("television total usage" + this.dataService.entertainmentTotalUsageNew);
      }
    );

    this.dataService.fridgeChosen.subscribe(
      (index: number) => {
        this.dataService.kitchenFridgeTotalUsageNew = Number.parseFloat(this.recommendFridgeList[index].power);
        this.dataService.kitchenFridgeTotalUsageNew = this.min(this.dataService.kitchenFridgeTotalUsage, this.dataService.kitchenFridgeTotalUsageNew)
        console.log("kitchen total usage" + this.dataService.kitchenFridgeTotalUsageNew);
      }
    );
  }

  min(a: number, b: number): number {
    if (a < b)
      return a;
    else 
      return b;
  }

  checkReportAgain() {
    this.dataService.showComparison = true;

    this.dataService.kitchenDishTotalUsageNew = this.dataService.kitchenDishTotalUsage;
    this.dataService.kitchenTotalUsageNew = this.dataService.kitchenDishTotalUsageNew + this.dataService.kitchenFridgeTotalUsageNew;
    this.dataService.laundryTotalUsageNew = this.dataService.laundryDryTotalUsageNew + this.dataService.laundryWashingTotalUsageNew;
    this.dataService.lightTotalUsageNew = this.dataService.lightTotalUsage;
    this.dataService.coolTotalUsageNew = this.dataService.coolTotalUsage;
    this.dataService.heatTotalUsageNew = this.dataService.heatTotalUsage;

    this.dataService.totalElectricitySaving = this.dataService.laundryTotalUsage - this.dataService.laundryTotalUsageNew
      + this.dataService.entertainmentTotalUsage - this.dataService.entertainmentTotalUsageNew
      + this.dataService.kitchenTotalUsage - this.dataService.kitchenTotalUsageNew;
    
    this.dataService.totalElectricitySaving = Math.round(this.dataService.totalElectricitySaving);
  }

  /**
   * washing machine
   */
  recommendWashingOrNot(): boolean {
    if (this.dataService.laundryWashingKnow == "yes") {
      if (this.dataService.laundryWashingStarRating < 4 || this.dataService.laundryWashingStarRating == null)
        return true;
      else
        return false;
    }
    else {
      if (Number.parseInt(this.dataService.laundryWashingRating) < 3)
        return true;
      else
        return false;
    }
  }

  recommendWashing(): void {
    if (this.washingFlag) {
      for (let washing of this.washingList) {
        if ((this.dataService.laundryWashingCap < 8 && this.dataService.laundryWashingKnow == "yes")
          || (this.dataService.laundryWashingCapacity != "8.5kg" && this.dataService.laundryWashingKnow == "no")) {
          if (washing.cap == "M") {
            this.recommendWashingList.push(washing);
          }
        }
        else {
          if (washing.cap == "L") {
            this.recommendWashingList.push(washing);
          }
        }
      }
    }
  }

  /**
   * clothes dryer
   */
  recommendDryerOrNot(): boolean {
    if (this.dataService.laundryDryKnow == "yes") {
      if (this.dataService.laundryDryStarRating < 6 || this.dataService.laundryDryStarRating == null)
        return true;
      else
        return false;
    }
    else if (this.dataService.laundryDryKnow == "no") {
      if (this.dataService.laundryDryType == "standard electric")
        return true;
      else
        return false;
    }
    else
      return false;
  }

  recommendDryer(): void {
    if (this.dryerFlag) {
      for (let dryer of this.dryerList) {
        if ((this.dataService.laundryDryCap < 8 && this.dataService.laundryDryKnow == "yes")
          || (this.dataService.laundryDryCapacity != "8kg" && this.dataService.laundryDryKnow == "no")) {
          if (dryer.cap == "M") {
            this.recommendDryerList.push(dryer);
          }
        }
        else {
          if (dryer.cap == "L") {
            this.recommendDryerList.push(dryer);
          }
        }
      }
    }
  }

  /**
   * television
   */
  recommendTvOrNot(): boolean {
    if (this.dataService.entertainmentTvKnow == "yes") {
      if (this.dataService.entertainmentStar < 4 || this.dataService.entertainmentStar == null)
        return true;
      else
        return false;
    }
    else {
      if (Number.parseInt(this.dataService.entertainmentStarRating) < 4)
        return true;
      else
        return false;
    }
  }

  recommendTv(): void {
    if (this.tvFlag) {
      for (let tv of this.tvList) {
        if ((this.dataService.entertainmentSize < 55 && this.dataService.entertainmentTvKnow == "yes")
          || (this.dataService.entertainmentScreenSize != "60 inch" && this.dataService.entertainmentTvKnow == "no")) {
          if (tv.size == "M" || tv.size == "S") {
            this.recommendTvList.push(tv);
          }
        }
        else {
          if (tv.size == "L") {
            this.recommendTvList.push(tv);
          }
        }
      }
    }
  }

  /**
   * fridge
   */
  recommendFridgeOrNot(): boolean {
    if (this.dataService.kitchenKnowFridgeBrand == "yes") {
      if (this.dataService.kitchenFridgeRating < 3 || this.dataService.laundryDryStarRating == null)
        return true;
      else
        return false;
    }
    else if (this.dataService.kitchenKnowFridgeBrand == "no") {
      if (Number.parseInt(this.dataService.kitchenFridgeStars) < 3)
        return true;
      else
        return false;
    }
    else
      return false;
  }

  recommendFridge(): void {
    if (this.fridgeFlag) {
      for (let fridge of this.fridgeList) {
        if ((this.dataService.kitchenFridgeVol < 500 && this.dataService.kitchenKnowFridgeBrand == "yes")
          || (this.dataService.kitchenFridgeVolume != "large" && this.dataService.kitchenKnowFridgeBrand == "no")) {
          if (fridge.size == "M" || fridge.size == "S") {
            this.recommendFridgeList.push(fridge);
          }
        }
        else {
          if (fridge.size == "L") {
            this.recommendFridgeList.push(fridge);
          }
        }
      }
    }
  }

}
