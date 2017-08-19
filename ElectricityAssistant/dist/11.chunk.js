webpackJsonp([11],{

/***/ "../../../../../src/app/layout/charts/charts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_component__ = __webpack_require__("../../../../../src/app/layout/charts/charts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__charts_component__["a" /* ChartsComponent */] }
];
var ChartsRoutingModule = (function () {
    function ChartsRoutingModule() {
    }
    return ChartsRoutingModule;
}());
ChartsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ChartsRoutingModule);

//# sourceMappingURL=charts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Charts'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Bar Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">Update</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Doughnut Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"180px\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Radar Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"150px\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Pie Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"150px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Polar Area Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"130px\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\" [chartType]=\"polarAreaChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Line Chart\n                </div>\n                <div class=\"card-block\">\n                    <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/charts/charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = (function () {
    function ChartsComponent() {
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ChartsComponent.prototype.ngOnInit = function () {
    };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charts',
        template: __webpack_require__("../../../../../src/app/layout/charts/charts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/charts/charts.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], ChartsComponent);

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_routing_module__ = __webpack_require__("../../../../../src/app/layout/charts/charts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_component__ = __webpack_require__("../../../../../src/app/layout/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__charts_routing_module__["a" /* ChartsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__charts_component__["a" /* ChartsComponent */]]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map