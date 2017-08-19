webpackJsonp([2],{

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\" pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-block\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .chat-panel .chat .left img {\n    margin-right: 15px; }\n  .chat-panel .chat .right img {\n    margin-left: 15px; }\n  .chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timeline_timeline_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__notification_notification_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                    <hr>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a>\n                            </li>\n                            <li><a href=\"#\">Another action</a>\n                            </li>\n                            <li><a href=\"#\">Something else here</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/components/timeline/timeline.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <ngb-carousel>\n                <ng-template ngbSlide *ngFor=\"let slider of sliders\">\n                    <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\n                    <div class=\"carousel-caption\">\n                        <h3>{{slider.label}}</h3>\n                        <p>{{slider.text}}</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'card-primary'\" [icon]=\"'fa-comments'\" [count]=\"26\" [label]=\"'New Comments!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'card-info'\" [icon]=\"'fa-tasks'\" [count]=\"12\" [label]=\"'New task!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'card-success'\" [icon]=\"'fa-shopping-cart'\" [count]=\"124\" [label]=\"'New Orders!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'card-danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\n        </div>\n    </div>\n    <hr />\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div class=\"card card-default\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                </div>\n                <!-- /.card-header -->\n                <app-timeline></app-timeline>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n        </div>\n        <!-- /.col-lg-8 -->\n        <div class=\"col-lg-4\">\n            <div class=\"card card-default\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                </div>\n                <!-- /.card-header -->\n                <app-notification></app-notification>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n\n            <app-chat></app-chat>\n            <!-- /.card .chat-card -->\n        </div>\n        <!-- /.col-lg-4 -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/layout/dashboard/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* StatModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* ChatComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map