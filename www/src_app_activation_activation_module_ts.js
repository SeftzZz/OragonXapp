(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_activation_activation_module_ts"],{

/***/ 3646:
/*!*********************************************************!*\
  !*** ./src/app/activation/activation-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivationPageRoutingModule": () => (/* binding */ ActivationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _activation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation.page */ 3279);




const routes = [{
  path: '',
  component: _activation_page__WEBPACK_IMPORTED_MODULE_0__.ActivationPage
}];
let ActivationPageRoutingModule = class ActivationPageRoutingModule {};
ActivationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ActivationPageRoutingModule);


/***/ }),

/***/ 11820:
/*!*************************************************!*\
  !*** ./src/app/activation/activation.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivationPageModule": () => (/* binding */ ActivationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _activation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-routing.module */ 3646);
/* harmony import */ var _activation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activation.page */ 3279);







let ActivationPageModule = class ActivationPageModule {};
ActivationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _activation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivationPageRoutingModule],
  declarations: [_activation_page__WEBPACK_IMPORTED_MODULE_1__.ActivationPage]
})], ActivationPageModule);


/***/ }),

/***/ 3279:
/*!***********************************************!*\
  !*** ./src/app/activation/activation.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivationPage": () => (/* binding */ ActivationPage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activation.page.html?ngResource */ 56232);
/* harmony import */ var _activation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activation.page.scss?ngResource */ 87354);
/* harmony import */ var _activation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_activation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider.service */ 3223);


var _class;








// AngularFire

// AngularFire

// Services


let ActivationPage = (_class = class ActivationPage {
  constructor(authService, routes, loadingController, alertController, toastCtrl, fs, http, global, senddata, auth) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "routes", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "auth", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "email", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "password", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "result", {});
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "username", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallet_address", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "id", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sub", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "activation", void 0);
    this.authService = authService;
    this.routes = routes;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.toastCtrl = toastCtrl;
    this.fs = fs;
    this.http = http;
    this.global = global;
    this.senddata = senddata;
    this.auth = auth;
  }
  ngOnInit() {
    var _this = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let kodeaktifasi = _this.routes.snapshot.paramMap.get('kodeaktifasi');
      if (kodeaktifasi) {
        const loading = yield _this.loadingController.create();
        yield loading.present();
        _this.senddata.activationmp(kodeaktifasi).subscribe( /*#__PURE__*/function () {
          var _ref = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this.result = JSON.parse(data);
            console.log(_this.result[0]);
            if (!_this.result[0].email) {
              console.log('Email tidak tersedia atau Sudah Teraktifasi');
            } else {
              try {
                const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.createUserWithEmailAndPassword)(_this.auth, _this.result[0].email, _this.result.pwdecode);
                _this.senddata.insertNoUidmp(user.user.uid, _this.result[0].email).subscribe(data => {
                  console.log("uid", data);
                });
                _this.fs.collection('Players').doc(user.user.uid).set({
                  CreatedAt: _this.newTime(),
                  ProfileData: JSON.stringify({
                    CreatedAt: _this.newTime(),
                    Email: _this.result[0].email,
                    WalletAddress: _this.result[0].wallet_address,
                    PlayerName: _this.result[0].username
                  })
                });
                _this.fs.collection('Items').doc(user.user.uid).set({
                  CreatedAt: _this.newTime()
                });
                var DocIdEggs = _this.newTime() - 100;
                var DocIdBatteries24 = _this.newTime() - 100;
                var DocIdBatteries12 = _this.newTime() - 100;
                var DocIdBatteries8 = _this.newTime() - 100;
                var DocIdFoods = _this.newTime() - 100;
                _this.activation = true;
                console.log(user.user.uid);
                loading.dismiss();
                return user;
              } catch (e) {
                _this.activation = 'exists';
                console.log(e);
                loading.dismiss();
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), error => {});
      } else {
        console.log('kodeaktifasi parameter Not Found');
      }
    })();
  }
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_6__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_4__.SendData
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.Auth
}]), _class);
ActivationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-activation',
  template: _activation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_activation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], ActivationPage);


/***/ }),

/***/ 87354:
/*!************************************************************!*\
  !*** ./src/app/activation/activation.page.scss?ngResource ***!
  \************************************************************/
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

/***/ 56232:
/*!************************************************************!*\
  !*** ./src/app/activation/activation.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\n  <!-- Header -->\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\n      <!-- Logo -->\n      <a color=\"dark\" href=\"/tabs/home\">\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a>\n      <!-- Desktop Menu Actions -->\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\n          <!-- Mobile Logo / Menu Close -->\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\n            <!-- Mobile Logo -->\n            <a color=\"dark\" href=\"/tabs/home\">\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n            </a>\n          </div>\n        </div>\n    </div>\n  </header>\n\n  <!-- Main -->\n    <!-- Hero -->\n    <section class=\"relative pt-20 md:pt-32 lg:h-[88vh]\">\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden\">\n        <img src=\"assets/img/gradient.jpg\" alt=\"gradient\" />\n      </picture>\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block\">\n        <img src=\"assets/img/gradient_dark.jpg\" alt=\"gradient dark\" />\n      </picture>\n      <div class=\"container h-full\">\n        <div class=\"grid h-full items-center gap-4 md:grid-cols-12\">\n          <div *ngIf=\"activation == true;else loading\" class=\"col-span-8 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4\">\n            <h1 class=\"text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl\">OragonX Marketplace. </h1>\n            <p class=\"mb-8 text-center text-lg md:text-left text-green\"> Your account has been activated !</p>\n            <div class=\"flex space-x-4 pb-12\">\n              <a href=\"/tabs/home\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-7 text-center font-semibold text-white transition-all\"> Homepage </a>\n            </div>\n          </div>\n          <ng-template #loading>\n            <div class=\"col-span-8 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4\">\n              <h1 class=\"text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl\">Activating... </h1>\n              <p class=\"mb-8 text-center text-lg md:text-left text-green\"> We are activating your account, don't close this page</p>\n              <div class=\"flex space-x-4 pb-12\">\n                <a class=\"bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-7 text-center font-semibold text-white transition-all\">Please wait</a>\n              </div>\n            </div>\n          </ng-template>\n          <div *ngIf=\"activation == 'exists'\" class=\"col-span-8 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4\">\n            <p class=\"mb-8 text-center text-lg md:text-left text-green\"> Your account already activated !</p>\n          </div>\n          <!-- Hero image -->\n          <div class=\"col-span-4 xl:col-span-8 overflow-hidden\">\n            <div class=\"relative text-center md:pl-8 md:text-right\">\n              <svg x=\"0\" y=\"0\" viewBox=\"0 0 250 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]\">\n                <defs>\n                  <clipPath id=\"clipping\" clipPathUnits=\"userSpaceOnUse\">\n                    <path d=\"M 0, 100 C 0, 17.000000000000004 17.000000000000004, 0 100, 0 S 200, 17.000000000000004 200, 100 183, 200 100, 200 0, 183 0, 100\" fill=\"#9446ED\"></path>\n                  </clipPath>\n                </defs>\n                <g clip-path=\"url(#clipping)\">\n                  <!-- Bg image -->\n                  <image href=\"assets/img/hero/hero.jpg\" width=\"200\" height=\"200\" clip-path=\"url(#clipping)\" />\n                </g>\n              </svg>\n              <img src=\"assets/img/hero/3D_elements.png\" alt=\"\" class=\"animate-fly absolute top-0 md:-right-[10%]\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- end hero -->\n  <!-- main -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_activation_activation_module_ts.js.map