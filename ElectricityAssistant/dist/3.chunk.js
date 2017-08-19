webpackJsonp([3],{

/***/ "../../../../../src/app/layout/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"row justify-content-center\">\n    <h2 class=\"text-muted\">Electricity Assistance <small>Global Chilling</small></h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ngb-carousel>\n        <ng-template ngbSlide *ngFor=\"let slider of sliders\">\n          <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\" />\n          <div class=\"carousel-caption\">\n            <a id=\"startPoint\" pageScroll href=\"#startPoint\" class=\"btn btn-lg btn-success\" style=\"margin: 20px\"\n            (click)=startBtnClick()>Start saving your bills!</a>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </div>\n  </div>\n  <br/>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-5\">\n      <fieldset #inputFieldSet [ngClass]=\"inputFieldSetClasses\">\n        <input #inputNumber [ngClass]=\"inputNumberClasses\" type=\"number\" (keyup.enter)=\"getAverageUsageInput(inputNumber.value)\"\n          (keyup)=\"checkValidation($event)\" placeholder=\"Input your electricity usage last month(kWh)\" />\n      </fieldset>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <select #monthSelector class=\"form-control\">\n                  <option>--please select month--</option>\n                  <option>January</option>\n                  <option>February</option>\n                  <option>March</option>\n                  <option>April</option>\n                  <option>May</option>\n                  <option>June</option>\n                  <option>July</option>\n                  <option>August</option>\n                  <option>Septemper</option>\n                  <option>October</option>\n                  <option>November</option>\n                  <option>December</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-1\">\n      <button class=\"btn btn-primary\" (click)=\"getAverageUsageInput(inputNumber.value, monthSelector.value)\">Confirm</button>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\" *ngIf=\"!isMonthSelected\">\n    <div class=\"alert alert-danger col-md-6\">\n      <strong>Invalid input</strong> Please select the month.\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"showCharts\">\n    <div class=\"col col-sm-6\">\n      <!-- World Bar Chart -->\n      <div #worldBarChart class=\"card mb-3\" *ngIf=\"worldOrAustralia == 'world'\">\n        <div class=\"card-header\">\n          Average electricity usage (kWh)\n        </div>\n        <div class=\"card-block\">\n          <canvas baseChart [datasets]=\"barChartDataWorld\" \n            [labels]=\"barChartLabelsWorld\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" \n            [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n          </canvas>\n        </div>\n        <div class=\"card-footer\">\n          <button class=\"btn btn-info btn-sm\" (click)=\"showWorld()\">World</button>\n          <button class=\"btn btn-info btn-sm\" (click)=\"showAustralia()\">Australia</button>\n        </div>\n      </div>\n\n      <!-- Australia Bar Chart -->\n      <div #australiaBarChart class=\"card mb-3\" *ngIf=\"worldOrAustralia == 'Australia'\">\n          <div class=\"card-header\">\n            Average electricity usage (kWh)\n          </div>\n          <div class=\"card-block\">\n            <canvas baseChart [datasets]=\"barChartDataAustralia\"\n              [labels]=\"barChartLabelsAustralia\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" \n              [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-info btn-sm\" (click)=\"showWorld()\">World</button>\n            <button class=\"btn btn-info btn-sm\" (click)=\"showAustralia()\">Australia</button>\n          </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          Your electricity comes from different sources (kWh)\n        </div>\n        <div class=\"card-block\">\n          <canvas baseChart height=\"180px\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"\n            (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n            <!--(chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"-->\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br/>\n\n  <h1 *ngIf=\"showCharts\">Total CO<sub>2</sub> emission: {{totalCo2Emission | number: '.1-2'}}kg/year</h1>\n\n\n\n\n\n\n\n\n\n\n\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    /**
     * Constructor
     */
    function HomeComponent() {
        //sliders
        this.sliders = [];
        //show charts
        this.showCharts = false;
        //validation
        this.isMonthSelected = true;
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.doughnutChartType = 'doughnut';
        this.energyPercentage = {
            coal: 0.612,
            gas: 0.219,
            hydro: 0.074,
            wind: 0.041,
            oil: 0.02,
            solar: 0.02,
            biofuels: 0.014
        };
        this.co2Emission = {
            coal: 1001,
            gas: 477,
            hydro: 86,
            wind: 12,
            oil: 652,
            solar: 54,
            biofuels: 549
        };
        this.sliders.push({
            imagePath: 'assets/images/img1.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/img2.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/img3.jpg',
            label: '',
            text: ''
        }, {
            imagePath: 'assets/images/img4.jpg',
            label: '',
            text: ''
        });
    }
    /**
     * Charts event
     */
    HomeComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    HomeComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    /**
     * click start button
     */
    HomeComponent.prototype.startBtnClick = function () {
    };
    /**
     * Button event
     */
    HomeComponent.prototype.getAverageUsageInput = function (inputNumber, inputMonth) {
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
    };
    HomeComponent.prototype.checkValidation = function (event) {
        if (event.target.value == 0) {
            this.inputFieldSetClasses = {
                "form-group": true,
                "has-success": false,
                "has-danger": true
            };
            this.inputNumberClasses = {
                "form-control": true,
                "form-control-success": false,
                "form-control-danger": true
            };
        }
        else {
            this.inputFieldSetClasses = {
                "form-group": true,
                "has-success": true,
                "has-danger": false
            };
            this.inputNumberClasses = {
                "form-control": true,
                "form-control-success": true,
                "form-control-danger": false
            };
        }
    };
    HomeComponent.prototype.showWorld = function () {
        this.worldOrAustralia = "world";
    };
    HomeComponent.prototype.showAustralia = function () {
        this.worldOrAustralia = "Australia";
    };
    HomeComponent.prototype.ngOnInit = function () {
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
        };
        this.inputNumberClasses = {
            "form-control": true,
            "form-control-success": false,
            "form-control-danger": false
        };
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/layout/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/home/home.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routing_module__ = __webpack_require__("../../../../../src/app/layout/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["a" /* Ng2PageScrollModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../ng2-page-scroll/ng2-page-scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ng2_page_scroll_directive__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.directive.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ng2_page_scroll_config__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-config.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ng2_page_scroll_instance__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-instance.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ng2_page_scroll_util_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-util.service.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ng2_page_scroll_module__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ng2_page_scroll_module__["a"]; });








/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EasingLogic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollConfig; });
var EasingLogic = (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());

var PageScrollConfig = (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: function () {
            return PageScrollConfig._easingLogic;
        },
        set: function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {number}
     * @private
     */
    PageScrollConfig._interval = 10;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     * @type {number}
     * @private
     */
    PageScrollConfig._minScrollDistance = 2;
    /**
     * Name of the default namespace.
     * @type {string}
     * @private
     */
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     * @type {boolean}
     */
    PageScrollConfig.defaultIsVerticalScrolling = true;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     * @type {boolean}
     * @private
     */
    PageScrollConfig._logLevel = 2;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {number}
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {number}
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     * @type {boolean}
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {string[]}
     * @private
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {number[]}
     * @private
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {boolean}
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: function (t, b, c, d) {
            // Linear easing
            return c * t / d + b;
        }
    };
    return PageScrollConfig;
}());



/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll-instance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-util.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollInstance; });
/**
 * Created by sebastianfuss on 29.08.16.
 */



/**
 * Represents a scrolling action
 */
var PageScrollInstance = (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     * @param namespace
     * @param document
     */
    function PageScrollInstance(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
         able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
     * Factory methods for instance creation
     */
    PageScrollInstance.simpleInstance = function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace
        });
    };
    PageScrollInstance.newInstance = function (options) {
        if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._defaultNamespace;
        }
        var pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollDuration) && !__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = options.pageScrollInterruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.pageScrollInterruptible) && __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation = options.advancedInlineOffsetCalculation ||
            (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    };
    PageScrollInstance.prototype.getScrollPropertyValue = function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @returns {HTMLElement}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = function () {
        var scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.querySelector(this._scrollTarget);
        }
        else {
            scrollTargetElement = this._scrollTarget;
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                var accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                var theWindow = scrollTargetElement.ownerDocument.defaultView;
                var parentFound = false;
                // Start parent is the immediate parent
                var parent_1 = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(parent_1)) {
                    if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent_1.offsetTop;
                        accumulatedParentsPos.left += parent_1.offsetLeft;
                    }
                    // Next iteration
                    parent_1 = parent_1.parentElement;
                    parentFound = parent_1 === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].extractElementPosition(this.document, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @returns {number}
     */
    PageScrollInstance.prototype.getCurrentOffset = function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = function (position) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce(function (oneAlreadyWorked, scrollingView) {
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(startScrollPropertyValue)) {
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                var isSmallMovement = scrollDistance < __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._minScrollDistance;
                if (!_this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    PageScrollInstance.prototype.fireEvent = function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    PageScrollInstance.prototype.attachInterruptListeners = function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    PageScrollInstance.prototype.detachInterruptListeners = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        get: function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        get: function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        get: function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        get: function () {
            return this._startScrollPosition;
        },
        set: function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        get: function () {
            return this._targetScrollPosition;
        },
        set: function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: function () {
            return this._distanceToScroll;
        },
        set: function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        get: function () {
            return this._executionDuration;
        },
        set: function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());



/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll-util.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollUtilService; });
/**
 * Created by sebastianfuss on 02.09.16.
 */
var PageScrollUtilService = (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
     * @returns {boolean} true the variable is undefined or null
     */
    PageScrollUtilService.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    PageScrollUtilService.extractElementPosition = function (document, scrollTargetElement) {
        var body = document.body;
        var docEl = document.documentElement;
        var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
        var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        var box = scrollTargetElement.getBoundingClientRect();
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());



/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng2_page_scroll_instance__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-instance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng2_page_scroll_util_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-util.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScroll; });






var PageScroll = (function () {
    function PageScroll(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollTarget = null;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.document = document;
    }
    PageScroll.prototype.ngOnChanges = function (changes) {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    PageScroll.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScroll.prototype.generatePageScrollInstance = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = __WEBPACK_IMPORTED_MODULE_4__ng2_page_scroll_instance__["a" /* PageScrollInstance */].newInstance({
                document: this.document,
                scrollTarget: this.pageScrollTarget || this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    PageScroll.prototype.pushRouterState = function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: this.pageScrollInstance.scrollTarget.substr(1),
                preserveQueryParams: true
            });
        }
    };
    PageScroll.prototype.scroll = function () {
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    PageScroll.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */] || routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationCancel */]) {
                        subscription_1.unsubscribe();
                    }
                });
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    PageScroll.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[pageScroll]',
                    host: {
                        '(click)': 'handleClick($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    PageScroll.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_service__["a" /* PageScrollService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* DOCUMENT */],] },] },
    ]; };
    PageScroll.propDecorators = {
        'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollTarget': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollHorizontal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollOffset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollSpeed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollEasing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollInterruptible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollAdjustHash': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageScrollFinish': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PageScroll;
}());



/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.directive.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2PageScrollModule; });
/**
 * Created by sebastianfuss on 03.09.16.
 */




var Ng2PageScrollModule = (function () {
    function Ng2PageScrollModule() {
    }
    /** @deprecated since v4.0.0-beta.10 (https://github.com/Nolanus/ng2-page-scroll/pull/190) */
    Ng2PageScrollModule.forRoot = function () {
        return {
            ngModule: Ng2PageScrollModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__["a" /* PageScrollService */], useClass: __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__["a" /* PageScrollService */] }
            ]
        };
    };
    Ng2PageScrollModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__["a" /* PageScroll */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__ng2_page_scroll_directive__["a" /* PageScroll */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_service__["b" /* NG2PAGESCROLL_SERVICE_PROVIDER */]]
                },] },
    ];
    /** @nocollapse */
    Ng2PageScrollModule.ctorParameters = function () { return []; };
    return Ng2PageScrollModule;
}());



/***/ }),

/***/ "../../../../ng2-page-scroll/src/ng2-page-scroll.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll-util.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScrollService; });
/* unused harmony export NG2PAGESCROLL_SERVICE_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NG2PAGESCROLL_SERVICE_PROVIDER; });



var PageScrollService = (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (__WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interruptKeys.indexOf(event.keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(function (scrollingView) { return scrollingView.contains(event.target); })) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    PageScrollService.prototype.stopInternal = function (interrupted, pageScrollInstance) {
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    PageScrollService.prototype.start = function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        var startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach(function (scrollingView) {
            if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.speed) && __WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration = Math.abs(pageScrollInstance.distanceToScroll) / pageScrollInstance.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        var tooShortInterval = pageScrollInstance.executionDuration <= __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                if (allReadyAtDestination) {
                    console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(pageScrollInstance.interruptible) && __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */].defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            var newScrollPosition;
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, __WEBPACK_IMPORTED_MODULE_1__ng2_page_scroll_config__["a" /* PageScrollConfig */]._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     * @returns {boolean}
     */
    PageScrollService.prototype.stopAll = function (namespace) {
        if (this.runningInstances.length > 0) {
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                var pageScrollInstance = this.runningInstances[i];
                if (__WEBPACK_IMPORTED_MODULE_2__ng2_page_scroll_util_service__["a" /* PageScrollUtilService */].isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    PageScrollService.prototype.stop = function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return []; };
    return PageScrollService;
}());

/* singleton pattern taken from https://github.com/angular/angular/issues/13854 */
function NG2PAGESCROLL_SERVICE_PROVIDER_FACTORY(parentDispatcher) {
    return parentDispatcher || new PageScrollService();
}
var NG2PAGESCROLL_SERVICE_PROVIDER = {
    provide: PageScrollService,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), PageScrollService]],
    useFactory: NG2PAGESCROLL_SERVICE_PROVIDER_FACTORY
};


/***/ })

});
//# sourceMappingURL=3.chunk.js.map