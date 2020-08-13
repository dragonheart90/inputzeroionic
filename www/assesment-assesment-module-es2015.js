(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assesment-assesment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assesment/assesment.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assesment/assesment.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getdata()\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\" ></ion-refresher-content>\n  </ion-refresher>\n  <ion-toolbar>\n    <ion-title>Assesment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let category of rows\">\n    <!-- <ion-card-header>\n      <img src=\"{{category.avatar}}\"/>\n    </ion-card-header> -->\n    <ion-card-content>\n    <ion-item> \n      <span style=\"float: right;\"><ion-label style=\"float: right;\">Name: {{category.name}}<br>Email id: {{category.email}}\n      <br>Phone: {{category.phone}}\n      <br>city: {{category.city}}\n      </ion-label></span>\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\n    </ion-item>\n    </ion-card-content>\n    </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addusers()\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"person-add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/assesment/assesment-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/assesment/assesment-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AssesmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssesmentPageRoutingModule", function() { return AssesmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assesment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assesment.page */ "./src/app/assesment/assesment.page.ts");




const routes = [
    {
        path: '',
        component: _assesment_page__WEBPACK_IMPORTED_MODULE_3__["AssesmentPage"]
    }
];
let AssesmentPageRoutingModule = class AssesmentPageRoutingModule {
};
AssesmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssesmentPageRoutingModule);



/***/ }),

/***/ "./src/app/assesment/assesment.module.ts":
/*!***********************************************!*\
  !*** ./src/app/assesment/assesment.module.ts ***!
  \***********************************************/
/*! exports provided: AssesmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssesmentPageModule", function() { return AssesmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assesment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assesment-routing.module */ "./src/app/assesment/assesment-routing.module.ts");
/* harmony import */ var _assesment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assesment.page */ "./src/app/assesment/assesment.page.ts");







let AssesmentPageModule = class AssesmentPageModule {
};
AssesmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assesment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssesmentPageRoutingModule"]
        ],
        declarations: [_assesment_page__WEBPACK_IMPORTED_MODULE_6__["AssesmentPage"]]
    })
], AssesmentPageModule);



/***/ }),

/***/ "./src/app/assesment/assesment.page.scss":
/*!***********************************************!*\
  !*** ./src/app/assesment/assesment.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2VzbWVudC9hc3Nlc21lbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/assesment/assesment.page.ts":
/*!*********************************************!*\
  !*** ./src/app/assesment/assesment.page.ts ***!
  \*********************************************/
/*! exports provided: AssesmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssesmentPage", function() { return AssesmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addusers_addusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addusers/addusers.page */ "./src/app/addusers/addusers.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let AssesmentPage = class AssesmentPage {
    constructor(modalController, httpa, http, loadingController, rest, storage) {
        this.modalController = modalController;
        this.httpa = httpa;
        this.http = http;
        this.loadingController = loadingController;
        this.rest = rest;
        this.storage = storage;
        this.data = {};
        this.baseurl = rest.apiURLs;
        console.log(this.baseurl);
        this.getdata();
        // Define the columns for the data table
        // (based off the names of the keys in the JSON file)   
    }
    ngOnInit() {
    }
    getdata() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ' Please Wait we are Loading Users Information',
                duration: 2000
            });
            yield loading.present();
            this.httpa.setDataSerializer('json');
            // tslint:disable-next-line:max-line-length
            this.httpa.get(this.baseurl + 'getusers.php', {}, { 'Content-Type': 'application/json' })
                .then(response => {
                console.log(response.data);
                this.data2 = JSON.parse(response.data);
                console.log(this.data2);
                this.rows = this.data2;
            });
        });
    }
    addusers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('addusers');
            const modal = yield this.modalController.create({
                component: _addusers_addusers_page__WEBPACK_IMPORTED_MODULE_3__["AddusersPage"]
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            this.getdata();
        });
    }
};
AssesmentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
AssesmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assesment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assesment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assesment/assesment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assesment.page.scss */ "./src/app/assesment/assesment.page.scss")).default]
    })
], AssesmentPage);



/***/ })

}]);
//# sourceMappingURL=assesment-assesment-module-es2015.js.map