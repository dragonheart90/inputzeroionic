function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"login-content\" padding>\n  <ion-row class=\"logo-row\">\n  <ion-segment [(ngModel)]=\"pet\" padding>\n          <ion-segment-button  value=\"puppies\" checked >\n           <span class=\"whit\"> Login </span>\n          </ion-segment-button>\n  </ion-segment>\n  </ion-row>\n   <div  [ngSwitch]=\"pet\" padding>\n   <br><br>\n          <ion-list *ngSwitchCase=\"'puppies'\" class=\"login-box\"  checked>\n         \n              <ion-row >\n            <ion-col >\n                 <h3 align=\"center\">Login</h3>\n                 <form #loginForm=\"ngForm\" novalidate>\n                <ion-list inset >\n  \n                <ion-item>\n                <ion-label color=\"primary\" position=\"floating\">Email ID</ion-label>\n                  <ion-input type=\"email\"  [(ngModel)]=\"data.email\" name=\"email\" required></ion-input>\n                </ion-item>\n               \n                <ion-item>\n                <ion-label color=\"primary\" position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\"  name=\"passwords\" [(ngModel)]=\"data.passwords\" required></ion-input>\n                </ion-item>\n               \n                <br>\n             <span class=\"inlines\"> \n              <ion-button color=\"primary\" [disabled]=\"loginForm.invalid\" class=\"pad\" (click)=\"login()\" >Enter My Business</ion-button>\n                </span>\n              </ion-list>\n              </form>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n        </div>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-content {\n  --background: url('back.jpg') repeat center center / cover;\n  background-size: cover;\n}\n\n.inl {\n  display: inline;\n}\n\n.logo-row {\n  padding-top: 40px;\n  padding-bottom: 15px;\n  margin: 0 auto;\n  display: block;\n}\n\n.heads {\n  color: #ffffff;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  font-style: italic;\n  font-weight: 500 !important;\n  font-size: 175%;\n}\n\n.inlines {\n  display: inline-block;\n  margin-bottom: 15px;\n}\n\nion-row {\n  align-items: center;\n  text-align: center;\n}\n\n.whit {\n  color: #ffffff;\n  -webkit-text-emphasis: bold;\n          text-emphasis: bold;\n  font-weight: bold;\n}\n\n.login-box {\n  background-color: rgba(255, 255, 255, 0.575);\n  padding: 10px 10px 10px 10px;\n  margin-top: 20px;\n  font-weight: bold;\n  color: #0313f3;\n}\n\n.box {\n  background-color: rgba(255, 255, 255, 0.575);\n  font-weight: bold;\n  color: #0313f3;\n}\n\n.pad {\n  padding: 0px 20px 0px 20px;\n}\n\nion-item {\n  border-radius: 30px !important;\n  padding-left: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #ffffff9c;\n  border-bottom: 0px !important;\n  box-shadow: none !important;\n}\n\nion-label {\n  display: block;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudG1hbmUvaW9uaWNzL3Rlc3Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLDBEQUFBO0VBSUYsc0JBQUE7QUNERjs7QURHRTtFQUVFLGVBQUE7QUNESjs7QURHSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FOOztBREVJO0VBQ0UsY0FBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURTSTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNOTjs7QURTRTtFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFFFO0VBQ0UsNENBQUE7RUFHQSxpQkFBQTtFQUNBLGNBQUE7QUNQSjs7QURTRTtFQUVJLDBCQUFBO0FDUE47O0FEVUU7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQ1BKOztBRFVBO0VBQ0MsY0FBQTtFQUFnQixZQUFBO0FDTmpCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9jYXIuanBlZykgdG9wIGxlZnQgbm8tcmVwZWF0O1xuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKSFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2suanBnKSByZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyOyBcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmlubFxuICB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gICAgLmxvZ28tcm93IHtcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZHMge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE3NSU7XG4gICAgfVxuICAgIC5pbmxpbmVze1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NnB4KSB7XG5cbiAgICAvLyAgICAgLmlubGluZXMge1xuICAgIC8vICAgICAgICAgd2lkdGg6IDExMCU7XG4gICAgLy8gICAgICAgICBtYXJnaW46IHB4O1xuICAgIC8vICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgLy8gICAgIH1cbiAgICAgICAgXG4gICAgLy8gfVxuICAgIGlvbi1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLndoaXQge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0ZXh0LWVtcGhhc2lzOiBib2xkO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubG9naW4tYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTc1KTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMzEzZjM7XG4gIH1cbiAgLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU3NSk7XG4gICAgLy8gcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDMxM2YzO1xuICB9XG4gIC5wYWRcbiAge1xuICAgICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG5cbiAgfVxuICBpb24taXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuIGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwcHg7IFxufVxuIiwiLmxvZ2luLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFjay5qcGcpIHJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW5sIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubG9nby1yb3cge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3NSU7XG59XG5cbi5pbmxpbmVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5pb24tcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2hpdCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWVtcGhhc2lzOiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NzUpO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMzEzZjM7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTc1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDMxM2YzO1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjljO1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(httpa, http, loadingController, rest, storage) {
        _classCallCheck(this, LoginPage);

        this.httpa = httpa;
        this.http = http;
        this.loadingController = loadingController;
        this.rest = rest;
        this.storage = storage;
        this.data2 = {};
        this.pet = 'puppies';
        this.data = {};
        this.baseurl = rest.apiURL;
        console.log(this.baseurl);
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: ' Please Wait we are checking your Credentials',
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.httpa.setDataSerializer('json'); // tslint:disable-next-line:max-line-length

                    this.httpa.post(this.baseurl + 'login', {
                      email: this.data.email,
                      password: this.data.passwords
                    }, {
                      'Content-Type': 'application/json'
                    }).then(function (response) {
                      console.log(response.data);
                      _this.data2 = JSON.parse(response.data);
                      console.log(_this.data2.token);

                      if (_this.data2) {
                        _this.storage.set('token', _this.data2.token); //  Swal.fire("Thank You for using FIMS");


                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Thank You', 'Thank You for using reqres!', 'success');
                      }
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map