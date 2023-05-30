(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_resetpassword_resetpassword_module_ts"],{

/***/ 80552:
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageRoutingModule": () => (/* binding */ ResetpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword.page */ 80071);




const routes = [{
  path: '',
  component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
}];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {};
ResetpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ResetpasswordPageRoutingModule);


/***/ }),

/***/ 81869:
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageModule": () => (/* binding */ ResetpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword-routing.module */ 80552);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page */ 80071);







let ResetpasswordPageModule = class ResetpasswordPageModule {};
ResetpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
})], ResetpasswordPageModule);


/***/ }),

/***/ 80071:
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPage": () => (/* binding */ ResetpasswordPage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resetpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.page.html?ngResource */ 17716);
/* harmony import */ var _resetpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword.page.scss?ngResource */ 68462);
/* harmony import */ var _resetpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resetpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 37556);


var _class;







// Services

let ResetpasswordPage = (_class = class ResetpasswordPage {
  constructor(fb, loadingController, alertController, authService, routes) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fb", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "routes", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "credentialsresetPassword", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oob_code", void 0);
    this.fb = fb;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.authService = authService;
    this.routes = routes;
  }
  get password() {
    return this.credentialsresetPassword.get('password');
  }
  ngOnInit() {
    this.oob_code = this.routes.snapshot.queryParamMap.get('oobCode');
    console.log(this.oob_code);
    this.credentialsresetPassword = this.fb.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
      oob_code: [this.oob_code]
    });
  }
  confirmPassowrd() {
    var _this = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create();
      yield loading.present();
      const user = yield _this.authService.confirmPasswordReset(_this.credentialsresetPassword.value);
      // setTimeout(function() {
      //  window.location.replace('/tabs/login');
      // }, 2000);
      loading.dismiss();
    })();
  }
  showAlert(header, message) {
    var _this2 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}]), _class);
ResetpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-resetpassword',
  template: _resetpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_resetpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], ResetpasswordPage);


/***/ }),

/***/ 68462:
/*!******************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss?ngResource ***!
  \******************************************************************/
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

/***/ 17716:
/*!******************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"relative h-screen\">\n  <div class=\"lg:flex lg:h-full\">\n    <!-- Left -->\n    <div class=\"relative text-center lg:w-1/2\">\n      <img src=\"assets/img/login.jpg\" alt=\"login\" class=\"absolute h-full w-full object-cover\" />\n      <!-- Logo -->\n      <!-- <a href=\"index.html\" class=\"relative inline-block py-36\">\n        <img src=\"img/logo_white.png\" class=\"inline-block max-h-7\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a> -->\n    </div> \n    <!-- Right -->\n    <div class=\"relative flex items-center justify-center p-[10%] lg:w-1/2\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"w-full max-w-[25.625rem] text-center\">\n        <h1 class=\"text-jacarta-700 font-display mb-6 text-4xl dark:text-white\">Reset Password</h1>\n        <!-- Tabs Nav -->\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"torus-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#torus\" type=\"button\" role=\"tab\" aria-controls=\"torus\" aria-selected=\"true\">\n              <span class=\"font-display text-base font-medium\">Change new password</span>\n            </button>\n          </li>\n        </ul>\n        <!-- Tab Content -->\n        <div class=\"tab-content\">\n          <!-- Torus -->\n          <div class=\"tab-pane fade show active\" id=\"torus\" role=\"tabpanel\" aria-labelledby=\"torus-tab\">\n            <form (ngSubmit)=\"confirmPassowrd()\" [formGroup]=\"credentialsresetPassword\">\n              <div class=\"mb-12 md:w-1 md:pr-8\">\n                <div class=\"mb-6\">\n                  <label for=\"password\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Password <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter password\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Password needs to be 8 characters</ion-note>\n                </div>\n                <div class=\"mb-6\">\n                  <label for=\"password\" style=\"text-align: left;\" class=\"font-display text-jacarta-700 mb-1 block text-sm dark:text-white\">Confirm Password <span class=\"text-red\">*</span>\n                  </label>\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter confirm password\" required />\n                  <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Password needs to be 8 characters</ion-note>\n                </div>\n                <button class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" type=\"submit\" [disabled]=\"!credentialsresetPassword.valid\">Enter new password</button>\n              </div>\n            </form>\n          </div>\n          <!-- end torus -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";

/***/ })

}]);
//# sourceMappingURL=src_app_resetpassword_resetpassword_module_ts.js.map