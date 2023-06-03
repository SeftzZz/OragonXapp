(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 91720);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 37556);


var _class;







// Services

let LoginPage = (_class = class LoginPage {
  constructor(fb, loadingController, alertController, authService, router) {
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fb", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "credentials", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "credentialsregist", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "credentialsreset", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    this.fb = fb;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.authService = authService;
    this.router = router;
  }
  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  get emailreset() {
    return this.credentials.get('emailreset');
  }
  get password() {
    return this.credentials.get('password');
  }
  get username() {
    return this.credentialsregist.get('username');
  }
  get wallet_address() {
    return this.credentialsregist.get('wallet_address');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]]
    });
    this.credentialsregist = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
      wallet_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]]
    });
    this.credentialsreset = this.fb.group({
      emailreset: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]]
    });
  }
  register() {
    var _this = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this.authService.register(_this.credentialsregist.value);
      _this.showAlert('Register Success, Check your email address for activation!', 'Complete');
      setTimeout(function () {
        window.location.replace('/tabs/profile');
      }, 5000);
    })();
  }
  login() {
    var _this2 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create();
      yield loading.present();
      const user = yield _this2.authService.login(_this2.credentials.value);
      if (user) {
        console.log(user.user.uid);
        setTimeout(function () {
          window.location.replace('/tabs/home');
        }, 5000);
        // this.router.navigateByUrl('/tabs/home/', { replaceUrl: true });
      } else {
        _this2.showAlert('Login failed', 'Please try again!');
        loading.dismiss();
      }
    })();
  }
  resetpassword() {
    var _this3 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create();
      yield loading.present();
      const user = yield _this3.authService.resetpassword(_this3.credentialsreset.value);
      setTimeout(function () {
        window.location.replace('/tabs/login');
      }, 2000);
      loading.dismiss();
    })();
  }
  showAlert(header, message) {
    var _this4 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}, (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}]), _class);
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], LoginPage);


/***/ }),

/***/ 91720:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Login -->\n<section class=\"relative h-screen\" style=\"overflow: auto;\">\n  <div class=\"lg:flex lg:h-full\">\n    <!-- Left -->\n    <div class=\"relative text-center lg:w-1/2\">\n      <img src=\"assets/img/login.jpg\" alt=\"login\" class=\"absolute h-full w-full object-cover\" />\n      <!-- Logo -->\n      <!-- <a href=\"index.html\" class=\"relative inline-block py-36\">\n        <img src=\"img/logo_white.png\" class=\"inline-block max-h-7\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a> -->\n    </div> \n    <!-- Right -->\n    <div class=\"relative flex items-center justify-center p-[10%] lg:w-1/2\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"w-full max-w-[25.625rem] text-center\">\n        <h1 class=\"text-jacarta-700 font-display mb-6 text-4xl dark:text-white\">Sign in</h1>\n        <!-- Tabs Nav -->\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-hidden overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"ethereum-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#ethereum\" type=\"button\" role=\"tab\" aria-controls=\"ethereum\" aria-selected=\"true\">\n              <!-- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 mb-[2px] h-4 w-4 fill-current\">\n                <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\n                <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\n                <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\n                <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\n                <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\n              </svg> -->\n              <span class=\"font-display text-base font-medium\">Login</span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"torus-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#torus\" type=\"button\" role=\"tab\" aria-controls=\"torus\" aria-selected=\"false\">\n              <!-- <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mr-1 mb-[2px] h-4 w-4 fill-current\">\n                <path d=\"M9.35098 3H4V5.93692H9.35098V3Z\" fill=\"#0364FF\" />\n                <path d=\"M9.35028 3.00403H6.44531V12.74H9.35028V3.00403Z\" fill=\"#0364FF\" />\n                <path d=\"M11.5221 5.93554C12.3239 5.93554 12.9739 5.27842 12.9739 4.46777C12.9739 3.65715 12.3239 3 11.5221 3C10.7203 3 10.0703 3.65715 10.0703 4.46777C10.0703 5.27842 10.7203 5.93554 11.5221 5.93554Z\" fill=\"#0364FF\" />\n              </svg> -->\n              <span class=\"font-display text-base font-medium\">Register</span>\n            </button>\n          </li>  \n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"bnb-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bnb\" type=\"button\" role=\"tab\" aria-controls=\"bnb\" aria-selected=\"false\">\n              <!-- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 mb-[2px] h-4 w-4 fill-current\">\n                <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\n                <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\n                <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\n                <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\n                <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\n              </svg> -->\n              <span class=\"font-display text-base font-medium\">Reset Password</span>\n            </button>\n          </li>        \n        </ul>\n        <!-- Tab Content -->\n        <div class=\"tab-content\">\n          <!-- Ethereum -->\n          <div class=\"tab-pane fade show active\" id=\"ethereum\" role=\"tabpanel\" aria-labelledby=\"ethereum-tab\">\n            <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\n              <div class=\"mb-12 md:w-1 md:pr-8\">\n                <div class=\"mb-6\">\n                  <label for=\"email\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Email address <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"text\" id=\"email\" formControlName=\"email\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter email address\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">Email is invalid</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"password\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Password <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter password\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Password needs to be 8 characters</ion-note>\n                </div>\n                <button class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" type=\"submit\" [disabled]=\"!credentials.valid\"> Login </button>\n              </div>\n            </form>\n          </div>\n          <!-- end ethereum -->\n          <!-- Torus -->\n          <div class=\"tab-pane fade\" id=\"torus\" role=\"tabpanel\" aria-labelledby=\"torus-tab\">\n            <form (ngSubmit)=\"register()\" [formGroup]=\"credentialsregist\">\n              <div class=\"mb-12 md:w-1 md:pr-8\">\n                <div class=\"mb-6\">\n                  <label for=\"text\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Username <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter username\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(username.dirty || username.touched) && username.errors\">Username is invalid</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"email\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Email address <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"text\" id=\"email\" formControlName=\"email\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter email address\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">Email is invalid</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"text\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Binance Wallet <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"text\" id=\"wallet_address\" formControlName=\"wallet_address\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter wallet_address address\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(wallet_address.dirty || wallet_address.touched) && wallet_address.errors\">Wallet is invalid</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"password\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Password <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter password\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Password needs to be 8 characters</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"password\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Confirm Password <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter confirm password\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Password needs to be 8 characters</ion-note>\n                </div>\n                <button class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" type=\"submit\" [disabled]=\"!credentialsregist.valid\">Register</button>\n              </div>\n            </form>\n          </div>\n          <!-- end torus -->\n          <!-- Bnb -->\n          <div class=\"tab-pane fade\" id=\"bnb\" role=\"tabpanel\" aria-labelledby=\"bnb-tab\">\n            <form (ngSubmit)=\"resetpassword()\" [formGroup]=\"credentialsreset\">\n              <div class=\"mb-12 md:w-1 md:pr-8\">\n                <div class=\"mb-6\">\n                  <label for=\"emailreset\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Email address <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"text\" id=\"emailreset\" formControlName=\"emailreset\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter email address\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">Email is invalid</ion-note>\n                </div>\n                <button class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" type=\"submit\" [disabled]=\"!credentialsreset.valid\"> Reset Password </button>\n              </div>\n            </form>\n          </div>\n          <!-- end bnb -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- end login -->";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map