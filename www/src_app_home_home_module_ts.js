(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 28775);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 64413);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);








 // import SwPush
 // import SwUpdate


let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
  })],
  providers: [_angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.SwPush, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.SwUpdate, {
    provide: 'Window',
    useValue: window
  }],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 31821);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ 64413);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qrcode */ 35646);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/messaging */ 6157);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_5__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade]);

const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);



// AngularFire




// Services


// Web3



const providerOptions = {
  walletconnect: {
    package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_15__["default"],
    options: {
      network: 'binance',
      infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',
      rpc: {
        56: "https://bsc-dataseed4.ninicoin.io"
      }
    }
  }
};
const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_14___default())({
  network: "mainnet",
  cacheProvider: true,
  providerOptions // required
});

let HomePage = (_class = class HomePage {
  constructor(authService, router, loadingController, alertController, toastCtrl, fs, http, global, senddata, auth, swPush) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "auth", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "swPush", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "slides", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscription", void 0);
    // Root Object
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", '');
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "percentRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "valueRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isLogin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ritra", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "akh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "meru", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "feng", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "metalicana", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dorch", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyUID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyItemId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyItem", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyAmount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyAmountUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyHash", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyType", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesowned", void 0);
    // AGM
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latitude", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "longitude", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "zoom", void 0);
    // WEB3
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "walletconnect", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "parsewalletconnect", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "states", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallet", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallets", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "username", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "email", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "price", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "item_name", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state_buy", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "connect", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "kind", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bnb_balance", "...");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance_display", "...");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance2", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_dollar", "...");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "price_display", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_display", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_1", "0");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_2", "0");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "count_roulette", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "used", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon_100c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon_12c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon10", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon1", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon102", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon12", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon12c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon102c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latesttenOragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latestoneOragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceORGNPlayers", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBNBPlayers", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBUSDPlayers", void 0);
    // WALLET PARAM
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3js", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "accounts", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "address_to", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "amount_to", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "provider", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance1", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3Modal", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenInst", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenInst2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3provider", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "check", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datas_oragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_oragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_bnb", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_busd", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "payment_count", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenABI", [{
      constant: true,
      inputs: [{
        name: "_owner",
        type: "address"
      }],
      name: "balanceOf",
      outputs: [{
        name: "balance",
        type: "uint256"
      }],
      type: "function"
    }, {
      constant: false,
      inputs: [{
        name: "_to",
        type: "address"
      }, {
        name: "_value",
        type: "uint256"
      }],
      name: "transfer",
      outputs: [{
        name: "",
        type: "bool"
      }],
      type: "function"
    }]);
    // Store 
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_direct_buy", "1");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateHash", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "parse_localStorage", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storedata", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storedetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeUID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeName", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeDeskripsi", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePrice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePriceORGN", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePriceORGN2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePriceBNB", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePriceBUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectedCrypto", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storecart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "carts", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartUID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartNull", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartNotNull", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartName", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartDeskripsi", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartQty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPrice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPriceBNB", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidegg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidbattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidfood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "messagePleaseWait", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPriceTemp", void 0);
    // P2P Market
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaLowest", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atoz", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sorteggs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonOID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodHVP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodQty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodOID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonOID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontype", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonbidder", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragontimeCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonpriceNow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBIDfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hours", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutes", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "seconds", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price_actual", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bid_now", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidlist", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdown", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartBidcount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_royalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceRoyalty_display", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "positionRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty3", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty4", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty5", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty6", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_1", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_3", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_4", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_5", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5a", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5b", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5d", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5e", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4a", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4b", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4c", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_3a", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_3b", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_2a", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_1a", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "title", 'af-notification');
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "message", null);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "VAPID_PUBLIC_KEY", "BH6Pwg4y3wc38Ia1gQnr3mnhAU_StteRTEEIUAFoK14Ux_ci9ALK6RX76kSAUxQzC4FUJ0f6b9Ts-96xpK_I2NE");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistoryall", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataNotif", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notificationBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemtrx", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "idtrxhistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistorybyid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sessionTrxHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemid2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenNotif", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jakets", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "commonjakets", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashionjaketsLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashioncommonjaketsLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentfashion", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfashion", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jaketsDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jaketsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsOID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsHVP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsQty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketsprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketfashionJaketspriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "apiKey", 'API_KEY');
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeprogress", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "progressCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ordersID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "url", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "searchResults", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "resultCost", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "kurir", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "product_id", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "codeHoodie", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ItemIdJaket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "actualcartPrice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartStatus", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getaddress", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "postal_id", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cities", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "color", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "saveCarts", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "descSession", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lengthValueSession", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaValueSession", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "deskripsiValueSession", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "namaValueSession", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getdescription", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "warna", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ukuran", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "chooseUkuran", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getnama", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_alamat", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alamat", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "activeAlamat", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cost", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "description", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "etd", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getphone", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getnationality", void 0);
    this.authService = authService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.toastCtrl = toastCtrl;
    this.fs = fs;
    this.http = http;
    this.global = global;
    this.senddata = senddata;
    this.auth = auth;
    this.swPush = swPush;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
  }
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      // console.log(sub)
    });
  }
  logout() {
    var _this = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.logout();
      window.location.replace('/tabs/home');
    })();
  }
  login() {
    var _this2 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this2.router.navigateByUrl('/tabs/login', {
        replaceUrl: true
      });
    })();
  }
  ngOnInit() {
    var _this3 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const loading = await this.loadingController.create();
      // await loading.present();
      _this3.listen();
      _this3.setCurrentLocation();
      _this3.getstoredata();
      _this3.currentp2p = 0;
      _this3.color = localStorage.getItem("color");
      _this3.chooseUkuran = localStorage.getItem("chooseUkuran");
      _this3.senddata.getstorecartwarna().subscribe(data => {
        _this3.warna = data;
        console.log(_this3.warna);
      }, error => {});
      _this3.senddata.getstorecartukuran().subscribe(data => {
        _this3.ukuran = data;
        console.log(_this3.ukuran);
      }, error => {});
      _this3.senddata.getselldglimitmp().subscribe(dataSell => {
        _this3.dragons = JSON.parse(dataSell);
        // console.log(this.dragons);
        for (let i in _this3.dragons) {
          if (_this3.dragons[i].imgbackground == 'exists') {
            _this3.senddata.getallbackgroundsellmp(_this3.dragons[i].DocId).subscribe(dataBackground => {
              _this3.dragonsownedbg = JSON.parse(dataBackground);
              _this3.marketp2pdragonBG = _this3.dragonsownedbg.imgbackground;
              // console.log(this.dragonsownedbg)
            }, error => {});
          }
        }
      }, error => {});
      _this3.senddata.getcurrentoragon2().subscribe(data => {
        _this3.current_oragon = data.data.price;
        var Web3 = __webpack_require__(/*! web3 */ 30143);
        // Gatcha 10X
        let currTen = (100 / _this3.current_oragon).toFixed();
        _this3.latesttenOragon = (Web3.utils.fromWei(currTen, 'wei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // Gatcha 1X
        let currOne = (12 / _this3.current_oragon).toFixed();
        _this3.latestoneOragon = (Web3.utils.fromWei(currOne, 'wei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.latestoneOragon);
      }, error => {});
      _this3.senddata.getcurrentbusd().subscribe(data => {
        _this3.current_busd = data.data.price;
        _this3.current_bnb = data.data.price_BNB;
        // console.log("current_busd", this.current_busd);
      }, error => {});
      _this3.isLogin = localStorage.getItem('isLogin');
      _this3.localStorage = localStorage.getItem('ProfileData');
      _this3.parse_localStorage = JSON.parse(_this3.localStorage);
      if (_this3.localStorage == undefined) {
        _this3.isLogin = '!';
      } else {
        _this3.walletconnect = localStorage.getItem('walletconnect');
        _this3.isLogin = '';
        _this3.wallets = _this3.parse_localStorage.WalletAddress;
        _this3.username = _this3.parse_localStorage.PlayerName;
        _this3.globalID = _this3.parse_localStorage.Uid;
        _this3.email = _this3.parse_localStorage.Email;
        if (_this3.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this3.connect = false;
          _this3.stateHash = false;
          _this3.state_buy = 1;
          _this3.status_direct_buy = 1;
        } else {
          _this3.connect = true;
          _this3.stateHash = true;
          _this3.state_buy = 2;
          _this3.status_direct_buy = 2;
        }
        console.log("walletconnect", _this3.connect);
        console.log("stateHash", _this3.stateHash);
        console.log("state_buy", _this3.state_buy);
        console.log("status_direct_buy", _this3.status_direct_buy);
        _this3.color = localStorage.setItem('color', '1');
        _this3.senddata.getaddressmp(_this3.globalID).subscribe( /*#__PURE__*/function () {
          var _ref = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (getaddress) {
            var viewaddress = JSON.parse(getaddress);
            _this3.getaddress = viewaddress[0].nmAddress;
            console.log(_this3.getaddress);
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        _this3.postal_id = localStorage.getItem("kode_pos");
        _this3.cities = localStorage.getItem("kota");
        _this3.getnama = localStorage.getItem("nama");
        _this3.senddata.balancePlayers(_this3.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this3.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceORGNPlayers", this.balanceORGNPlayers);
        }, error => {});
        _this3.senddata.balanceBNBPlayers(_this3.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this3.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBNBPlayers", this.balanceBNBPlayers);
          _this3.valueRoyalty = _this3.balanceBNBPlayers / 100 * 100;
          _this3.percentRoyalty = _this3.balanceBNBPlayers * 100;
          if (_this3.valueRoyalty == 1) {
            localStorage.setItem('wd', '1');
            let wd = localStorage.getItem('wd');
            if (wd == '1') {
              _this3.alertWithdraw();
              return wd;
            }
            return _this3.valueRoyalty;
          }
        }, error => {});
        _this3.senddata.balanceBUSDPlayers(_this3.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this3.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBUSDPlayers", this.balanceBUSDPlayers);
        }, error => {});
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this3.senddata.postNotificationBidmp(_this3.globalID, tokenPushNotification).subscribe(data => {
              localStorage.setItem("token", tokenPushNotification);
              // console.log("save token", tokenPushNotification);
            });
            // console.log("Hurraaa!!! we got the token.....");
            // console.log(tokenPushNotification);
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        _this3.getstorecart();
        _this3.getstoreprogress();
        _this3.getcountRolling();
        _this3.checknewfood();
        _this3.checknewbattery();
        _this3.getNewAddressmp();
        _this3.messagePleaseWait = "false";
      }
      // console.log(this.globalID);
      _this3.senddata.gettrxhistoryall().subscribe(dataSell => {
        let trxhistoryall = dataSell;
        _this3.trxhistoryall = trxhistoryall;
        _this3.sessionTrxHistory = 0;
      }, error => {});
      _this3.getEggCount();
      console.log("activeAlamat", _this3.activeAlamat);
      // await loading.dismiss();
    })();
  }

  checknewfood() {
    var _this4 = this;
    this.fs.collection("Items/" + this.globalID + "/Foods").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFood) {
        // console.log("datanewFood", datanewFood);
        for (let i in datanewFood) {
          // console.log("datanewFood", datanewFood[i].Id, datanewFood[i].Attributes.AttackPoint);
          _this4.senddata.getsellfoodUsermp(_this4.globalID).subscribe(dataSell => {
            _this4.foodsHigh = JSON.parse(dataSell);
            _this4.marketp2pfoodLength = _this4.foodsHigh.lengthFood;
            if (_this4.foodsHigh.lengthFood != datanewFood[i].Amount) {
              // console.log("data s not match from f");
              _this4.senddata.insertNewFoodmp(_this4.globalID, datanewFood[i].Id, datanewFood[i].ItemId, datanewFood[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  checknewbattery() {
    var _this5 = this;
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
        // console.log("datanewBattery", datanewBattery);
        for (let i in datanewBattery) {
          // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
          _this5.senddata.getsellbatteryUserallmp(_this5.globalID).subscribe(dataSell => {
            _this5.sortbatteriesowned = JSON.parse(dataSell);
            if (_this5.sortbatteriesowned[0].lengthBattery != datanewBattery[i].Amount) {
              // console.log("data s not match from f");
              _this5.senddata.insertNewBatterymp(_this5.globalID, datanewBattery[i].Id, datanewBattery[i].ItemId, datanewBattery[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  checknotificationBid() {
    var _this6 = this;
    this.senddata.getNotificationBidmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this6.dataNotif = JSON.parse(dataNotif);
        for (let i in _this6.dataNotif) {
          // console.log("dataNotif", this.dataNotif[i].idBid);
          const toast2 = yield _this6.toastCtrl.create({
            header: 'You have notifications',
            message: _this6.dataNotif[i].username + ' has place bid in ' + _this6.dataNotif[i].priceBid + ' BNB',
            icon: 'information-circle',
            position: 'top',
            color: 'success',
            buttons: [{
              text: 'Close',
              role: 'cancel',
              handler: () => {
                _this6.senddata.readNotificationBidmp(_this6.dataNotif[i].idBid).subscribe( /*#__PURE__*/function () {
                  var _ref5 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    // console.log(dataRead, 'notifications readed');
                  });
                  return function (_x5) {
                    return _ref5.apply(this, arguments);
                  };
                }());
              }
            }]
          });
          yield toast2.present();
          _this6.senddata.getNotificationBidmp(_this6.globalID);
          const {
            role
          } = yield toast2.onDidDismiss();
        }
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  listen() {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.onMessage)(messaging, payload => {
      // console.log('Message received. ', payload);
      this.message = payload;
    });
  }
  getEggCount() {
    this.fs.collection("Roulette").doc("Oragon").valueChanges().subscribe(datas => {
      // console.log(datas.Count);
      this.ritra = datas.Ritra;
      this.feng = datas.Feng;
      this.meru = datas.Meru;
      this.metalicana = datas.Metalicana;
      this.akh = datas.Akh;
      this.dorch = datas.Dorch;
      //this.slot_roulette = test
      // console.log(this.slot_roulette);
    });
  }

  getcountRolling() {
    this.fs.collection("Roulette").doc(this.globalID).valueChanges().subscribe(datas => {
      if (datas == undefined) {
        this.fs.collection('Roulette').doc(this.globalID).set({
          Count: 0,
          Used: 0
        }).then(() => {});
      } else {
        let test = datas.Count;
        this.count_roulette = datas.Count;
        this.used = datas.Used;
        // console.log("this.count_roulette", this.count_roulette);
      }
    });
  }

  probability() {
    let prob = Math.random();
    if (this.used % 20 == 0 && this.used > 0 && this.used % 90 !== 0) {
      //EXCEPT METALICANA
      if (prob <= 90 / 100 && this.ritra > 0) {
        //NAGA 1 RITRA
        var DocIdRitra = this.newTime() + 1;
        this.addRitra();
        this.senddata.setitemhistory('EGG' + DocIdRitra, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdRitra,
          ItemId: "ITM6"
        }), 'ITM6').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF RITRA");
        this.fs.collection('Roulette').doc('Oragon').update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 90 / 100 && prob <= 100 / 100 && this.meru > 0) {
        //NAGA 2 MERU
        var DocIdMeru = this.newTime() + 1;
        this.addMeru();
        this.senddata.setitemhistory('EGG' + DocIdMeru, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdMeru,
          ItemId: "ITM2"
        }), 'ITM2').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF MERU");
        this.fs.collection('Roulette').doc('Oragon').update({
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 90 / 100 && prob <= 100 / 100 && this.feng > 0) {
        //NAGA 3 FENG
        var DocIdFeng = this.newTime() + 1;
        this.addFeng();
        this.senddata.setitemhistory('EGG' + DocIdFeng, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdFeng,
          ItemId: "ITM5"
        }), 'ITM5').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF FENG");
        this.fs.collection('Roulette').doc('Oragon').update({
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 90 / 100 && prob <= 100 / 100 && this.akh > 0) {
        //NAGA 5 AKH
        var DocIdAkh = this.newTime() + 1;
        this.addAkh();
        this.senddata.setitemhistory('EGG' + DocIdAkh, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdAkh,
          ItemId: "ITM4"
        }), 'ITM4').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF AKH");
        this.fs.collection('Roulette').doc('Oragon').update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      }
      // }else if(this.used % 100 == 0 && this.used > 0 && this.metalicana > 0) {
      //   //METALICANA
      //   //NAGA 6 METALICANA
      //   var DocIdMetalicana = this.newTime() + 1;
      //   this.addMetalicana();
      //   this.senddata.setitemhistory('EGG' + DocIdMetalicana, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMetalicana, ItemId:"ITM8"}), 'ITM8').subscribe((data:any) => {},(error:any) => {})
      //   this.showAlert("success", "GOT 1 EGG OF METALICANA");
      //   this.fs.collection('Roulette').doc('Oragon').update({Metalicana : firebase.firestore.FieldValue.increment(-1)});
      // }else if(this.used % 100 == 0 && this.used > 0 && this.dorch > 0) {
      //   //NAGA 4 DORCH
      //   var DocIdDorch = this.newTime() + 1;
      //   this.addDorch();
      //   this.senddata.setitemhistory('EGG' + DocIdDorch, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdDorch, ItemId:"ITM7"}), 'ITM7').subscribe((data:any) => {},(error:any) => {})
      //   this.showAlert("success", "GOT 1 EGG OF DORCH");
      //   this.fs.collection('Roulette').doc('Oragon').update({Dorch : firebase.firestore.FieldValue.increment(-1)});
    } else {
      if (prob <= 30 / 96.2) {
        var DocIdFoods10 = this.newTime() + 1;
        this.addFood10();
        this.senddata.setitemhistory('FOOD' + DocIdFoods10, this.globalID, 'Box', JSON.stringify({
          Id: 'FOOD' + DocIdFoods10,
          ItemId: "ITM14",
          HVP: 24
        }), 'ITM14').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 10X FOOD");
      } else if (prob > 30 / 96.2 && prob <= 60 / 96.2) {
        //8H Battery
        var DocIdBattery8 = this.newTime() + 1;
        this.addBattery8();
        this.senddata.setitemhistory('BTR' + DocIdBattery8, this.globalID, 'Box', JSON.stringify({
          Id: 'BTR' + DocIdBattery8,
          ItemId: "ITM15",
          Duration: 8
        }), 'ITM15').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 8 HOURS BATTERY");
      } else if (prob > 60 / 96.2 && prob <= 80 / 96.2) {
        //12H Battery
        var DocIdBattery12 = this.newTime() + 1;
        this.addBattery12();
        this.senddata.setitemhistory('BTR' + DocIdBattery12, this.globalID, 'Box', JSON.stringify({
          Id: 'BTR' + DocIdBattery12,
          ItemId: "ITM32",
          Duration: 12
        }), 'ITM32').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 12 HOURS BATTERY");
      } else if (prob > 80 / 96.2 && prob <= 90 / 96.2) {
        //24H Battery
        var DocIdBattery24 = this.newTime() + 1;
        this.addBattery24();
        this.senddata.setitemhistory('BTR' + DocIdBattery24, this.globalID, 'Box', JSON.stringify({
          Id: 'BTR' + DocIdBattery24,
          ItemId: "ITM3",
          Duration: 24
        }), 'ITM3').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 24 HOURS BATTERY");
      } else if (prob > 90 / 96.2 && prob <= 91.2 / 96.2 && this.ritra > 0) {
        //NAGA 1 RITRA
        var DocIdRitra = this.newTime() + 1;
        this.addRitra();
        this.senddata.setitemhistory('EGG' + DocIdRitra, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdRitra,
          ItemId: "ITM6"
        }), 'ITM6').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF RITRA");
        this.fs.collection('Roulette').doc('Oragon').update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 91.2 / 96.2 && prob <= 92.4 / 96.2 && this.meru > 0) {
        //NAGA 2 MERU
        var DocIdMeru = this.newTime() + 1;
        this.addMeru();
        this.senddata.setitemhistory('EGG' + DocIdMeru, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdMeru,
          ItemId: "ITM2"
        }), 'ITM2').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF MERU");
        this.fs.collection('Roulette').doc('Oragon').update({
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 92.4 / 96.2 && prob <= 93.6 / 96.2 && this.feng > 0) {
        //NAGA 3 FENG
        var DocIdFeng = this.newTime() + 1;
        this.addFeng();
        this.senddata.setitemhistory('EGG' + DocIdFeng, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdFeng,
          ItemId: "ITM5"
        }), 'ITM5').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF FENG");
        this.fs.collection('Roulette').doc('Oragon').update({
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
      } else if (prob > 94.8 / 96.2 && prob <= 96.1 / 96.2 && this.akh != 0) {
        //NAGA 5 AKH
        var DocIdAkh = this.newTime() + 1;
        this.addAkh();
        this.senddata.setitemhistory('EGG' + DocIdAkh, this.globalID, 'Box', JSON.stringify({
          Id: 'EGG' + DocIdAkh,
          ItemId: "ITM4"
        }), 'ITM4').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 1 EGG OF AKH");
        this.fs.collection('Roulette').doc('Oragon').update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // }else if(prob > 96.1/96.2 && prob <= 96.2/96.2 && this.metalicana > 0) {
        //   //METALICANA
        //   //NAGA 6 METALICANA
        //   var DocIdMetalicana = this.newTime() + 1;
        //   this.addMetalicana();
        //   this.senddata.setitemhistory('EGG' + DocIdMetalicana, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMetalicana, ItemId:"ITM8"}), 'ITM8').subscribe((data:any) => {},(error:any) => {})
        //   this.showAlert("success", "GOT 1 EGG OF METALICANA");
        //   this.fs.collection('Roulette').doc('Oragon').update({Metalicana : firebase.firestore.FieldValue.increment(-1)});
        // }else if(prob > 96.1/96.2 && prob <= 96.2/96.2 && this.dorch > 0) {
        //   //NAGA 4 DORCH
        //   var DocIdDorch = this.newTime() + 1;
        //   this.addDorch();
        //   this.senddata.setitemhistory('EGG' + DocIdDorch, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdDorch, ItemId:"ITM7"}), 'ITM7').subscribe((data:any) => {},(error:any) => {})
        //   this.showAlert("success", "GOT 1 EGG OF DORCH");
        //   this.fs.collection('Roulette').doc('Oragon').update({Dorch : firebase.firestore.FieldValue.increment(-1)});
      } else {
        //10x Food
        this.addFood10();
        this.senddata.setitemhistory('FOOD' + DocIdFoods10, this.globalID, 'Box', JSON.stringify({
          Id: 'FOOD' + DocIdFoods10,
          ItemId: "ITM14",
          HVP: 24
        }), 'ITM14').subscribe(data => {}, error => {});
        this.showAlert("success", "GOT 10X FOOD");
      }
    }
  }
  rolling() {
    if (this.count_roulette > 0 && this.count_roulette > 0) {
      this.fs.collection('Roulette').doc(this.globalID).update({
        Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
      });
      this.probability();
      this.fs.collection('Roulette').doc(this.globalID).update({
        Used: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+1)
      });
    } else {
      this.fs.collection('Roulette').doc(this.globalID).update({
        Count: 0
      });
      this.showAlert("Sorry", "Run Out of Roulette Slot Please Buy Slot at Marketplace");
    }
  }
  pay_first() {
    // 
  }
  pay_second(kind) {
    if (kind == '10') {
      this.fs.collection('Roulette').doc(this.globalID).update({
        LastUpdated: this.newTime()
      });
      this.fs.collection('Roulette').doc(this.globalID).update({
        Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(10)
      });
      this.showAlert("success", "10 Gatcha Added");
    } else if (kind == '1') {
      this.fs.collection('Roulette').doc(this.globalID).update({
        LastUpdated: this.newTime()
      });
      this.fs.collection('Roulette').doc(this.globalID).update({
        Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(1)
      });
      this.showAlert("success", "1 Gatcha Added");
    }
  }
  trxhistoryid(id) {
    var _this7 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this7.loadingController.create();
      yield loading.present();
      _this7.senddata.gettrxhistoryid(id).subscribe(dataSell => {
        _this7.trxhistorybyid = dataSell;
        _this7.historyUID = _this7.trxhistorybyid[0].uid;
        _this7.historyItemId = _this7.trxhistorybyid[0].itemid;
        _this7.historyItem = _this7.trxhistorybyid[0].item;
        _this7.historyAmount = _this7.trxhistorybyid[0].amount;
        _this7.historyHash = _this7.trxhistorybyid[0].tx_hash;
        _this7.historyType = _this7.trxhistorybyid[0].type;
        _this7.historyDate = _this7.trxhistorybyid[0].date;
        let historyAmountUSD = _this7.historyAmount / _this7.current_bnb;
        _this7.historyAmountUSD = historyAmountUSD.toFixed(2);
        console.log(_this7.trxhistorybyid);
        loading.dismiss();
      });
    })();
  }
  // AGM Get Current Location Coordinates
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 19;
        var Latitude = 'Latitude';
        var Longtitude = 'Longitude';
        var js = JSON.stringify({
          Latitude: this.latitude,
          Longtitude: this.longitude
        });
        localStorage.setItem('Latitude', this.latitude.toString());
        localStorage.setItem('Longtitude', this.longitude.toString());
        // console.log('https://www.google.co.id/maps/@'+this.latitude+','+this.longitude+','+this.zoom+'z?hl=en&authuser=0');
        this.http.get("http://api.ipify.org/?format=json").subscribe(res => {
          this.ipAddress = res.ip;
          this.senddata.setkycuser(this.globalID, this.ipAddress, js).subscribe(data => {});
        });
        if (this.latitude == this.latitude && this.longitude == this.longitude) {
          this.notificationBid = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            // console.log('koordinat tetap');
          }), 5000);
        } else {
          // console.log('menyimpan koordinat baru');
          this.setCurrentLocation();
        }
      });
    }
  }
  // WEB3
  connectAccount() {
    var _this8 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.isLogin == '!') {
        const alert = yield _this8.alertController.create({
          header: 'Caution',
          message: 'Please login to buy packages or items',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        _this8.provider = yield web3Modal.connect();
        _this8.getcurrentoragon();
        _this8.web3js = new (web3__WEBPACK_IMPORTED_MODULE_13___default())(_this8.provider); // create web3 instance
        // console.log(this.web3js);
        _this8.accounts = yield _this8.web3js.eth.getAccounts();
        // console.log("accounts", this.accounts);
        _this8.wallet = _this8.accounts[0];
        if (_this8.wallet == _this8.wallets) {
          _this8.tokenInst = new _this8.web3js.eth.Contract(_this8.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
          _this8.tokenInst2 = new _this8.web3js.eth.Contract(_this8.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
          _this8.balance1 = yield _this8.tokenInst.methods.balanceOf(_this8.accounts[0]).call();
          _this8.oragon_balance_display = (_this8.web3js.utils.fromWei(_this8.balance1, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          _this8.oragon_balance = _this8.web3js.utils.fromWei(_this8.balance1, 'gwei');
          _this8.in_dollar = _this8.oragon_balance * _this8.current_oragon;
          _this8.oragon_balance2 = _this8.balance1;
          _this8.balance2 = yield _this8.web3js.eth.getBalance(_this8.accounts[0]);
          _this8.bnb_balance = _this8.web3js.utils.fromWei(_this8.balance2, 'ether');
          // console.log(this.tokenInst);
          //if connect
          _this8.connect = true;
          _this8.stateHash = true;
          _this8.state_buy = 1;
          _this8.status_direct_buy = 1;
          console.log("walletconnect", _this8.connect);
          console.log("stateHash", _this8.stateHash);
          console.log("state_buy", _this8.state_buy);
          console.log("status_direct_buy", _this8.status_direct_buy);
          _this8.fee = (11 / 100 * 100 * 0.0027).toString();
          _this8.marketp2pdragonFee = 11 / 100 * _this8.marketp2pdragonprice;
          let marketp2pdragonprice_actual = _this8.marketp2pdragonprice - _this8.marketp2pdragonFee;
          _this8.fee_display = _this8.marketp2pdragonFee;
          _this8.price_display = marketp2pdragonprice_actual;
          _this8.storeFee = 11 / 100 * _this8.cartPrice;
          const alert = yield _this8.alertController.create({
            header: 'Success',
            message: 'Connected to Registered Wallet',
            buttons: ['OK']
          });
          yield alert.present();
          //if connect
        } else {
          yield _this8.provider.close();
          _this8.provider = null;
          _this8.connect = false;
          const alert = yield _this8.alertController.create({
            header: 'Failed!',
            message: 'Please Use Registered Wallet',
            buttons: ['OK']
          });
          yield alert.present();
        }
      }
    })();
  }
  // Payment Store & Advertise
  pay_directStoreORGN() {
    var _this9 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        // REAL VERSION
        if (+(_this9.oragon_balance * 1).toFixed(0) > +(_this9.storePrice * 1).toFixed(0) && _this9.bnb_balance * 1 > _this9.storeFee * 1) {
          let amountf = _this9.storePriceORGN2;
          console.log(amountf);
          yield _this9.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this9.wallet,
            gas: 250000,
            gasPrice: 5000000000
          }).then( /*#__PURE__*/function () {
            var _ref7 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              console.log("respons1", res);
              const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
              (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
                vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
              }).then(tokenPushNotification => {
                if (tokenPushNotification) {
                  _this9.senddata.gettokenOwnermp(_this9.globalID).subscribe(dataToken => {
                    _this9.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    _this9.senddata.settrxhistory(_this9.storeID,
                    //storeid
                    _this9.globalID,
                    //userid
                    'S-ORGN' + _this9.newTime(),
                    //itemid
                    _this9.storePriceORGN,
                    //amount ORGN
                    res.transactionHash,
                    //tx_hash
                    'ORGN',
                    //type
                    'Package-Official-Store',
                    //item
                    _this9.email,
                    //email
                    _this9.tokenNotif.tokenPushNotification //token
                    ).subscribe(data => {}, error => {});
                  });
                } else {
                  // console.log('No registration token available. Request permission to generate one.');
                }
              }).catch(err => {
                // console.log('An error occurred while retrieving token. ', err);
              });
              // packages-official-store
              if (_this9.storeID == 16) {
                // BATTERY
                _this9.addDorch();
              } else if (_this9.storeID == 15) {
                // BATTERY
                _this9.addMetalicana();
              } else if (_this9.storeID == 14) {
                // BATTERY
                _this9.addFood1();
              } else if (_this9.storeID == 13) {
                // BATTERY
                _this9.addBattery8();
              } else if (_this9.storeID == 12) {
                // BATTERY
                _this9.addBattery12();
              } else if (_this9.storeID == 11) {
                // BATTERY
                _this9.addBattery24();
              } else if (_this9.storeID == 10) {
                // EGGS
                _this9.addAkh();
                _this9.addMeru();
                _this9.addRitra();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                _this9.addBattery24();
                // FOODS
                _this9.addFood();
              } else if (_this9.storeID == 9) {
                // EGGS
                _this9.addAkh();
                _this9.addFeng();
                _this9.addMeru();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                _this9.addBattery24();
                // FOODS
                _this9.addFood();
              } else if (_this9.storeID == 8) {
                // EGGS
                _this9.addRitra();
                _this9.addFeng();
                _this9.addMeru();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                _this9.addBattery24();
                // FOODS
                _this9.addFood();
              } else if (_this9.storeID == 7) {
                // EGGS
                _this9.addRitra();
                _this9.addFeng();
                _this9.addAkh();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                _this9.addBattery24();
                // FOODS
                _this9.addFood();
              } else if (_this9.storeID == 6) {
                // EGGS
                _this9.addAkh();
                _this9.addMeru();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                // FOODS
                _this9.addFood20();
              } else if (_this9.storeID == 5) {
                // EGGS
                _this9.addRitra();
                _this9.addFeng();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                  Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                _this9.addBattery12();
                // FOODS
                _this9.addFood20();
              } else if (_this9.storeID == 4) {
                // EGGS
                _this9.addFeng();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                // FOODS
                _this9.addFood10();
              } else if (_this9.storeID == 3) {
                // EGGS
                _this9.addRitra();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                // FOODS
                _this9.addFood10();
              } else if (_this9.storeID == 2) {
                // EGGS
                _this9.addMeru();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                // FOODS
                _this9.addFood10();
              } else if (_this9.storeID == 1) {
                // EGGS
                _this9.addAkh();
                _this9.fs.collection("Roulette").doc("Oragon").update({
                  Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
                });
                // BATTERY
                _this9.addBattery8();
                // FOODS
                _this9.addFood10();
              }
              //if success
              _this9.state_buy = 3;
              _this9.status_direct_buy = 1;
              _this9.stateHash = true;
              _this9.connect = true;
            });
            return function (_x6) {
              return _ref7.apply(this, arguments);
            };
          }()).catch(err => {
            console.log(err);
          });
          const alert = yield _this9.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK']
          });
          yield alert.present();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          _this9.senddata.gettrxhistoryall().subscribe(dataSell => {
            let trxhistoryall = dataSell;
            _this9.trxhistoryall = trxhistoryall;
            _this9.sessionTrxHistory = 0;
          }, error => {});
        } else {
          const alert = yield _this9.alertController.create({
            header: 'Failed!',
            message: 'ORGN Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        // DEMO VERSION
        const loading = yield _this9.loadingController.create();
        yield loading.present();
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this9.senddata.gettokenOwnermp(_this9.globalID).subscribe(dataToken => {
              _this9.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this9.senddata.settrxhistory(_this9.storeID,
              //storeid
              _this9.globalID,
              //userid
              'S-ORGN' + _this9.newTime(),
              //itemid
              _this9.storePriceORGN,
              //amount ORGN
              'res.transactionHash',
              //tx_hash
              'ORGN',
              //type
              'Package-Official-Store',
              //item
              _this9.email,
              //email
              _this9.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        // packages-official-store
        if (_this9.storeID == 16) {
          // BATTERY
          _this9.addDorch();
          loading.dismiss();
        } else if (_this9.storeID == 15) {
          // BATTERY
          _this9.addMetalicana();
          loading.dismiss();
        } else if (_this9.storeID == 14) {
          // BATTERY
          _this9.addFood1();
          loading.dismiss();
        } else if (_this9.storeID == 13) {
          // BATTERY
          _this9.addBattery8();
          loading.dismiss();
        } else if (_this9.storeID == 12) {
          // BATTERY
          _this9.addBattery12();
          loading.dismiss();
        } else if (_this9.storeID == 11) {
          // BATTERY
          _this9.addBattery24();
          loading.dismiss();
        } else if (_this9.storeID == 10) {
          // EGGS
          _this9.addAkh();
          _this9.addMeru();
          _this9.addRitra();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          _this9.addBattery24();
          // FOODS
          _this9.addFood();
          loading.dismiss();
        } else if (_this9.storeID == 9) {
          // EGGS
          _this9.addAkh();
          _this9.addFeng();
          _this9.addMeru();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          _this9.addBattery24();
          // FOODS
          _this9.addFood();
          loading.dismiss();
        } else if (_this9.storeID == 8) {
          // EGGS
          _this9.addRitra();
          _this9.addFeng();
          _this9.addMeru();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          _this9.addBattery24();
          // FOODS
          _this9.addFood();
          loading.dismiss();
        } else if (_this9.storeID == 7) {
          // EGGS
          _this9.addRitra();
          _this9.addFeng();
          _this9.addAkh();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          _this9.addBattery24();
          // FOODS
          _this9.addFood();
          loading.dismiss();
        } else if (_this9.storeID == 6) {
          // EGGS
          _this9.addAkh();
          _this9.addMeru();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          // FOODS
          _this9.addFood20();
          loading.dismiss();
        } else if (_this9.storeID == 5) {
          // EGGS
          _this9.addRitra();
          _this9.addFeng();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          _this9.addBattery12();
          // FOODS
          _this9.addFood20();
          loading.dismiss();
        } else if (_this9.storeID == 4) {
          // EGGS
          _this9.addFeng();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          // FOODS
          _this9.addFood10();
          loading.dismiss();
        } else if (_this9.storeID == 3) {
          // EGGS
          _this9.addRitra();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          // FOODS
          _this9.addFood10();
          loading.dismiss();
        } else if (_this9.storeID == 2) {
          // EGGS
          _this9.addMeru();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          // FOODS
          _this9.addFood10();
          loading.dismiss();
        } else if (_this9.storeID == 1) {
          // EGGS
          _this9.addAkh();
          _this9.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this9.addBattery8();
          // FOODS
          _this9.addFood10();
          loading.dismiss();
        }
        //if success
        _this9.state_buy = 2;
        _this9.status_direct_buy = 2;
        _this9.stateHash = true;
        _this9.isLogin = '';
        const alert = yield _this9.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        yield alert.present();
        _this9.senddata.gettrxhistoryall().subscribe(dataSell => {
          let trxhistoryall = dataSell;
          _this9.trxhistoryall = trxhistoryall;
          _this9.sessionTrxHistory = 0;
        }, error => {});
      }
    })();
  }
  pay_directStoreBNB() {
    var _this10 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        // REAL VERSION
        if (+(_this10.oragon_balance * 1).toFixed(0) > +(_this10.storePrice * 1).toFixed(0) && _this10.bnb_balance * 1 > _this10.storeFee * 1) {
          let amountf = _this10.storePrice * 1e9;
          // console.log(amountf)
          yield _this10.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this10.wallet
          }).then(res => {
            // console.log(res);
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this10.senddata.gettokenOwnermp(_this10.globalID).subscribe(dataToken => {
                  _this10.tokenNotif = JSON.parse(dataToken);
                  // Create Transaction History
                  _this10.senddata.settrxhistory(_this10.storeID,
                  //storeid
                  _this10.globalID,
                  //userid
                  'S-BNB' + _this10.newTime(),
                  //itemid
                  _this10.storePriceBNB,
                  //amount BNB
                  res.transactionHash,
                  //tx_hash
                  'BNB',
                  //type
                  'Package-Official-Store',
                  //item
                  _this10.email,
                  //email
                  _this10.tokenNotif.tokenPushNotification //token
                  ).subscribe(data => {}, error => {});
                });
              } else {
                // console.log('No registration token available. Request permission to generate one.');
              }
            }).catch(err => {
              // console.log('An error occurred while retrieving token. ', err);
            });
            // packages-official-store
            if (_this10.storeID == 16) {
              // BATTERY
              _this10.addDorch();
            } else if (_this10.storeID == 15) {
              // BATTERY
              _this10.addMetalicana();
            } else if (_this10.storeID == 14) {
              // BATTERY
              _this10.addFood1();
            } else if (_this10.storeID == 13) {
              // BATTERY
              _this10.addBattery8();
            } else if (_this10.storeID == 12) {
              // BATTERY
              _this10.addBattery12();
            } else if (_this10.storeID == 11) {
              // BATTERY
              _this10.addBattery24();
            } else if (_this10.storeID == 10) {
              // EGGS
              _this10.addAkh();
              _this10.addMeru();
              _this10.addRitra();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              _this10.addBattery24();
              // FOODS
              _this10.addFood();
            } else if (_this10.storeID == 9) {
              // EGGS
              _this10.addAkh();
              _this10.addFeng();
              _this10.addMeru();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              _this10.addBattery24();
              // FOODS
              _this10.addFood();
            } else if (_this10.storeID == 8) {
              // EGGS
              _this10.addRitra();
              _this10.addFeng();
              _this10.addMeru();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              _this10.addBattery24();
              // FOODS
              _this10.addFood();
            } else if (_this10.storeID == 7) {
              // EGGS
              _this10.addRitra();
              _this10.addFeng();
              _this10.addAkh();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              _this10.addBattery24();
              // FOODS
              _this10.addFood();
            } else if (_this10.storeID == 6) {
              // EGGS
              _this10.addAkh();
              _this10.addMeru();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              // FOODS
              _this10.addFood20();
            } else if (_this10.storeID == 5) {
              // EGGS
              _this10.addRitra();
              _this10.addFeng();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              _this10.addBattery12();
              // FOODS
              _this10.addFood20();
            } else if (_this10.storeID == 4) {
              // EGGS
              _this10.addFeng();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              // FOODS
              _this10.addFood10();
            } else if (_this10.storeID == 3) {
              // EGGS
              _this10.addRitra();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              // FOODS
              _this10.addFood10();
            } else if (_this10.storeID == 2) {
              // EGGS
              _this10.addMeru();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              // FOODS
              _this10.addFood10();
            } else if (_this10.storeID == 1) {
              // EGGS
              _this10.addAkh();
              _this10.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this10.addBattery8();
              // FOODS
              _this10.addFood10();
            }
            //if success
            _this10.state_buy = 3;
            _this10.status_direct_buy = 1;
            _this10.stateHash = true;
            _this10.connect = true;
          }).catch(err => {});
          const alert = yield _this10.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK']
          });
          yield alert.present();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          _this10.senddata.gettrxhistoryall().subscribe(dataSell => {
            let trxhistoryall = dataSell;
            _this10.trxhistoryall = trxhistoryall;
            _this10.sessionTrxHistory = 0;
          }, error => {});
        } else {
          const alert = yield _this10.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        // DEMO VERSION
        const loading = yield _this10.loadingController.create();
        yield loading.present();
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this10.senddata.gettokenOwnermp(_this10.globalID).subscribe(dataToken => {
              _this10.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this10.senddata.settrxhistory(_this10.storeID,
              //storeid
              _this10.globalID,
              //userid
              'S-BNB' + _this10.newTime(),
              //itemid
              _this10.storePriceBNB,
              //amount BNB
              'res.transactionHash',
              //tx_hash
              'BNB',
              //type
              'Package-Official-Store',
              //item
              _this10.email,
              //email
              _this10.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        // packages-official-store
        if (_this10.storeID == 16) {
          // BATTERY
          _this10.addDorch();
          loading.dismiss();
        } else if (_this10.storeID == 15) {
          // BATTERY
          _this10.addMetalicana();
          loading.dismiss();
        } else if (_this10.storeID == 14) {
          // BATTERY
          _this10.addFood1();
          loading.dismiss();
        } else if (_this10.storeID == 13) {
          // BATTERY
          _this10.addBattery8();
          loading.dismiss();
        } else if (_this10.storeID == 12) {
          // BATTERY
          _this10.addBattery12();
          loading.dismiss();
        } else if (_this10.storeID == 11) {
          // BATTERY
          _this10.addBattery24();
          loading.dismiss();
        } else if (_this10.storeID == 10) {
          // EGGS
          _this10.addAkh();
          _this10.addMeru();
          _this10.addRitra();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          _this10.addBattery24();
          // FOODS
          _this10.addFood();
          loading.dismiss();
        } else if (_this10.storeID == 9) {
          // EGGS
          _this10.addAkh();
          _this10.addFeng();
          _this10.addMeru();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          _this10.addBattery24();
          // FOODS
          _this10.addFood();
          loading.dismiss();
        } else if (_this10.storeID == 8) {
          // EGGS
          _this10.addRitra();
          _this10.addFeng();
          _this10.addMeru();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          _this10.addBattery24();
          // FOODS
          _this10.addFood();
          loading.dismiss();
        } else if (_this10.storeID == 7) {
          // EGGS
          _this10.addRitra();
          _this10.addFeng();
          _this10.addAkh();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          _this10.addBattery24();
          // FOODS
          _this10.addFood();
          loading.dismiss();
        } else if (_this10.storeID == 6) {
          // EGGS
          _this10.addAkh();
          _this10.addMeru();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          // FOODS
          _this10.addFood20();
          loading.dismiss();
        } else if (_this10.storeID == 5) {
          // EGGS
          _this10.addRitra();
          _this10.addFeng();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          _this10.addBattery12();
          // FOODS
          _this10.addFood20();
          loading.dismiss();
        } else if (_this10.storeID == 4) {
          // EGGS
          _this10.addFeng();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          // FOODS
          _this10.addFood10();
          loading.dismiss();
        } else if (_this10.storeID == 3) {
          // EGGS
          _this10.addRitra();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          // FOODS
          _this10.addFood10();
          loading.dismiss();
        } else if (_this10.storeID == 2) {
          // EGGS
          _this10.addMeru();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          // FOODS
          _this10.addFood10();
          loading.dismiss();
        } else if (_this10.storeID == 1) {
          // EGGS
          _this10.addAkh();
          _this10.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this10.addBattery8();
          // FOODS
          _this10.addFood10();
          loading.dismiss();
        }
        //if success
        _this10.state_buy = 2;
        _this10.status_direct_buy = 2;
        _this10.stateHash = true;
        _this10.isLogin = '';
        const alert = yield _this10.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        yield alert.present();
        _this10.senddata.gettrxhistoryall().subscribe(dataSell => {
          let trxhistoryall = dataSell;
          _this10.trxhistoryall = trxhistoryall;
          _this10.sessionTrxHistory = 0;
        }, error => {});
      }
    })();
  }
  pay_directStoreBUSD() {
    var _this11 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this11.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        // REAL VERSION
        if (+(_this11.oragon_balance * 1).toFixed(0) > +(_this11.storePrice * 1).toFixed(0) && _this11.bnb_balance * 1 > _this11.storeFee * 1) {
          let amountf = _this11.storePrice * 1e9;
          // console.log(amountf)
          yield _this11.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this11.wallet
          }).then(res => {
            // console.log(res);
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this11.senddata.gettokenOwnermp(_this11.globalID).subscribe(dataToken => {
                  _this11.tokenNotif = JSON.parse(dataToken);
                  // Create Transaction History
                  _this11.senddata.settrxhistory(_this11.storeID,
                  //storeid
                  _this11.globalID,
                  //userid
                  'S-BUSD' + _this11.newTime(),
                  //itemid
                  _this11.storePriceBUSD,
                  //amount BNB
                  res.transactionHash,
                  //tx_hash
                  'BUSD',
                  //type
                  'Package-Official-Store',
                  //item
                  _this11.email,
                  //email
                  _this11.tokenNotif.tokenPushNotification //token
                  ).subscribe(data => {}, error => {});
                });
              } else {
                // console.log('No registration token available. Request permission to generate one.');
              }
            }).catch(err => {
              // console.log('An error occurred while retrieving token. ', err);
            });
            // packages-official-store
            if (_this11.storeID == 16) {
              // BATTERY
              _this11.addDorch();
            } else if (_this11.storeID == 15) {
              // BATTERY
              _this11.addMetalicana();
            } else if (_this11.storeID == 14) {
              // BATTERY
              _this11.addFood1();
            } else if (_this11.storeID == 13) {
              // BATTERY
              _this11.addBattery8();
            } else if (_this11.storeID == 12) {
              // BATTERY
              _this11.addBattery12();
            } else if (_this11.storeID == 11) {
              // BATTERY
              _this11.addBattery24();
            } else if (_this11.storeID == 10) {
              // EGGS
              _this11.addAkh();
              _this11.addMeru();
              _this11.addRitra();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              _this11.addBattery24();
              // FOODS
              _this11.addFood();
            } else if (_this11.storeID == 9) {
              // EGGS
              _this11.addAkh();
              _this11.addFeng();
              _this11.addMeru();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              _this11.addBattery24();
              // FOODS
              _this11.addFood();
            } else if (_this11.storeID == 8) {
              // EGGS
              _this11.addRitra();
              _this11.addFeng();
              _this11.addMeru();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              _this11.addBattery24();
              // FOODS
              _this11.addFood();
            } else if (_this11.storeID == 7) {
              // EGGS
              _this11.addRitra();
              _this11.addFeng();
              _this11.addAkh();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              _this11.addBattery24();
              // FOODS
              _this11.addFood();
            } else if (_this11.storeID == 6) {
              // EGGS
              _this11.addAkh();
              _this11.addMeru();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              // FOODS
              _this11.addFood20();
            } else if (_this11.storeID == 5) {
              // EGGS
              _this11.addRitra();
              _this11.addFeng();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              _this11.addBattery12();
              // FOODS
              _this11.addFood20();
            } else if (_this11.storeID == 4) {
              // EGGS
              _this11.addFeng();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              // FOODS
              _this11.addFood10();
            } else if (_this11.storeID == 3) {
              // EGGS
              _this11.addRitra();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              // FOODS
              _this11.addFood10();
            } else if (_this11.storeID == 2) {
              // EGGS
              _this11.addMeru();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              // FOODS
              _this11.addFood10();
            } else if (_this11.storeID == 1) {
              // EGGS
              _this11.addAkh();
              _this11.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this11.addBattery8();
              // FOODS
              _this11.addFood10();
            }
            //if success
            _this11.state_buy = 3;
            _this11.status_direct_buy = 1;
            _this11.stateHash = true;
            _this11.connect = true;
          }).catch(err => {});
          const alert = yield _this11.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK']
          });
          yield alert.present();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          _this11.senddata.gettrxhistoryall().subscribe(dataSell => {
            let trxhistoryall = dataSell;
            _this11.trxhistoryall = trxhistoryall;
            _this11.sessionTrxHistory = 0;
          }, error => {});
        } else {
          const alert = yield _this11.alertController.create({
            header: 'Failed!',
            message: 'BUSD Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        // DEMO VERSION
        const loading = yield _this11.loadingController.create();
        yield loading.present();
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this11.senddata.gettokenOwnermp(_this11.globalID).subscribe(dataToken => {
              _this11.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this11.senddata.settrxhistory(_this11.storeID,
              //storeid
              _this11.globalID,
              //userid
              'S-BUSD' + _this11.newTime(),
              //itemid
              _this11.storePriceBUSD,
              //amount BNB
              'res.transactionHash',
              //tx_hash
              'BUSD',
              //type
              'Package-Official-Store',
              //item
              _this11.email,
              //email
              _this11.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        // packages-official-store
        if (_this11.storeID == 16) {
          // BATTERY
          _this11.addDorch();
          loading.dismiss();
        } else if (_this11.storeID == 15) {
          // BATTERY
          _this11.addMetalicana();
          loading.dismiss();
        } else if (_this11.storeID == 14) {
          // BATTERY
          _this11.addFood1();
          loading.dismiss();
        } else if (_this11.storeID == 13) {
          // BATTERY
          _this11.addBattery8();
          loading.dismiss();
        } else if (_this11.storeID == 12) {
          // BATTERY
          _this11.addBattery12();
          loading.dismiss();
        } else if (_this11.storeID == 11) {
          // BATTERY
          _this11.addBattery24();
          loading.dismiss();
        } else if (_this11.storeID == 10) {
          // EGGS
          _this11.addAkh();
          _this11.addMeru();
          _this11.addRitra();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          _this11.addBattery24();
          // FOODS
          _this11.addFood();
          loading.dismiss();
        } else if (_this11.storeID == 9) {
          // EGGS
          _this11.addAkh();
          _this11.addFeng();
          _this11.addMeru();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          _this11.addBattery24();
          // FOODS
          _this11.addFood();
          loading.dismiss();
        } else if (_this11.storeID == 8) {
          // EGGS
          _this11.addRitra();
          _this11.addFeng();
          _this11.addMeru();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          _this11.addBattery24();
          // FOODS
          _this11.addFood();
          loading.dismiss();
        } else if (_this11.storeID == 7) {
          // EGGS
          _this11.addRitra();
          _this11.addFeng();
          _this11.addAkh();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          _this11.addBattery24();
          // FOODS
          _this11.addFood();
          loading.dismiss();
        } else if (_this11.storeID == 6) {
          // EGGS
          _this11.addAkh();
          _this11.addMeru();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          // FOODS
          _this11.addFood20();
          loading.dismiss();
        } else if (_this11.storeID == 5) {
          // EGGS
          _this11.addRitra();
          _this11.addFeng();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          _this11.addBattery12();
          // FOODS
          _this11.addFood20();
          loading.dismiss();
        } else if (_this11.storeID == 4) {
          // EGGS
          _this11.addFeng();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          // FOODS
          _this11.addFood10();
          loading.dismiss();
        } else if (_this11.storeID == 3) {
          // EGGS
          _this11.addRitra();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          // FOODS
          _this11.addFood10();
          loading.dismiss();
        } else if (_this11.storeID == 2) {
          // EGGS
          _this11.addMeru();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          // FOODS
          _this11.addFood10();
          loading.dismiss();
        } else if (_this11.storeID == 1) {
          // EGGS
          _this11.addAkh();
          _this11.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this11.addBattery8();
          // FOODS
          _this11.addFood10();
          loading.dismiss();
        }
        //if success
        _this11.state_buy = 2;
        _this11.status_direct_buy = 2;
        _this11.stateHash = true;
        _this11.isLogin = '';
        const alert = yield _this11.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        yield alert.present();
        _this11.senddata.gettrxhistoryall().subscribe(dataSell => {
          let trxhistoryall = dataSell;
          _this11.trxhistoryall = trxhistoryall;
          _this11.sessionTrxHistory = 0;
        }, error => {});
      }
    })();
  }
  pay_firstStore() {
    var _this12 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this12.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        // REAL VERSION
        if (+(_this12.oragon_balance * 1).toFixed(0) > +(_this12.cartPrice * 1).toFixed(0) && _this12.bnb_balance * 1 > _this12.storeFee * 1) {
          let amountf = _this12.cartPrice * 1e9;
          console.log(amountf);
          yield _this12.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this12.wallet
          }).then(res => {
            // console.log(res);
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this12.senddata.gettokenOwnermp(_this12.globalID).subscribe(dataToken => {
                  _this12.tokenNotif = JSON.parse(dataToken);
                  // Create Transaction History
                  _this12.senddata.settrxhistory(_this12.storeID,
                  //storeid
                  _this12.globalID,
                  //userid
                  'S-BNB' + _this12.newTime(),
                  //itemid
                  _this12.storePriceBNB,
                  //amount BNB
                  res.transactionHash,
                  //tx_hash
                  'BNB',
                  //type
                  'Package-Official-Store',
                  //item
                  _this12.email,
                  //email
                  _this12.tokenNotif.tokenPushNotification //token
                  ).subscribe(data => {}, error => {});
                });
              } else {
                // console.log('No registration token available. Request permission to generate one.');
              }
            }).catch(err => {
              // console.log('An error occurred while retrieving token. ', err);
            });
            // packages-official-store
            if (_this12.storeID == 16) {
              // BATTERY
              _this12.addDorch();
            } else if (_this12.storeID == 15) {
              // BATTERY
              _this12.addMetalicana();
            } else if (_this12.storeID == 14) {
              // BATTERY
              _this12.addFood1();
            } else if (_this12.storeID == 13) {
              // BATTERY
              _this12.addBattery8();
            } else if (_this12.storeID == 12) {
              // BATTERY
              _this12.addBattery12();
            } else if (_this12.storeID == 11) {
              // BATTERY
              _this12.addBattery24();
            } else if (_this12.storeID == 10) {
              // EGGS
              _this12.addAkh();
              _this12.addMeru();
              _this12.addRitra();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              _this12.addBattery24();
              // FOODS
              _this12.addFood();
            } else if (_this12.storeID == 9) {
              // EGGS
              _this12.addAkh();
              _this12.addFeng();
              _this12.addMeru();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              _this12.addBattery24();
              // FOODS
              _this12.addFood();
            } else if (_this12.storeID == 8) {
              // EGGS
              _this12.addRitra();
              _this12.addFeng();
              _this12.addMeru();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              _this12.addBattery24();
              // FOODS
              _this12.addFood();
            } else if (_this12.storeID == 7) {
              // EGGS
              _this12.addRitra();
              _this12.addFeng();
              _this12.addAkh();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              _this12.addBattery24();
              // FOODS
              _this12.addFood();
            } else if (_this12.storeID == 6) {
              // EGGS
              _this12.addAkh();
              _this12.addMeru();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              // FOODS
              _this12.addFood20();
            } else if (_this12.storeID == 5) {
              // EGGS
              _this12.addRitra();
              _this12.addFeng();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              _this12.addBattery12();
              // FOODS
              _this12.addFood20();
            } else if (_this12.storeID == 4) {
              // EGGS
              _this12.addFeng();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              // FOODS
              _this12.addFood10();
            } else if (_this12.storeID == 3) {
              // EGGS
              _this12.addRitra();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              // FOODS
              _this12.addFood10();
            } else if (_this12.storeID == 2) {
              // EGGS
              _this12.addMeru();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              // FOODS
              _this12.addFood10();
            } else if (_this12.storeID == 1) {
              // EGGS
              _this12.addAkh();
              _this12.fs.collection("Roulette").doc("Oragon").update({
                Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
              });
              // BATTERY
              _this12.addBattery8();
              // FOODS
              _this12.addFood10();
            }
            //if success
            _this12.state_buy = 2;
            _this12.status_direct_buy = 2;
            _this12.stateHash = true;
            _this12.isLogin = '';
          }).catch(err => {});
          const alert = yield _this12.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK']
          });
          yield alert.present();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          const alert = yield _this12.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        // DEMO VERSION
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this12.senddata.gettokenOwnermp(_this12.globalID).subscribe(dataToken => {
              _this12.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this12.senddata.settrxhistory(_this12.storeID,
              //storeid
              _this12.globalID,
              //userid
              'S-ORGN' + _this12.newTime(),
              //itemid
              _this12.storePriceBNB,
              //amount BNB
              'res.transactionHash',
              //tx_hash
              'bnb-to-oragon',
              //type
              'Package-Official-Store',
              //item
              _this12.email,
              //email
              _this12.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        // packages-official-store
        if (_this12.storeID == 16) {
          // BATTERY
          _this12.addDorch();
        } else if (_this12.storeID == 15) {
          // BATTERY
          _this12.addMetalicana();
        } else if (_this12.storeID == 14) {
          // BATTERY
          _this12.addFood1();
        } else if (_this12.storeID == 13) {
          // BATTERY
          _this12.addBattery8();
        } else if (_this12.storeID == 12) {
          // BATTERY
          _this12.addBattery12();
        } else if (_this12.storeID == 11) {
          // BATTERY
          _this12.addBattery24();
        } else if (_this12.storeID == 10) {
          // EGGS
          _this12.addAkh();
          _this12.addMeru();
          _this12.addRitra();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          _this12.addBattery24();
          // FOODS
          _this12.addFood();
        } else if (_this12.storeID == 9) {
          // EGGS
          _this12.addAkh();
          _this12.addFeng();
          _this12.addMeru();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          _this12.addBattery24();
          // FOODS
          _this12.addFood();
        } else if (_this12.storeID == 8) {
          // EGGS
          _this12.addRitra();
          _this12.addFeng();
          _this12.addMeru();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          _this12.addBattery24();
          // FOODS
          _this12.addFood();
        } else if (_this12.storeID == 7) {
          // EGGS
          _this12.addRitra();
          _this12.addFeng();
          _this12.addAkh();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          _this12.addBattery24();
          // FOODS
          _this12.addFood();
        } else if (_this12.storeID == 6) {
          // EGGS
          _this12.addAkh();
          _this12.addMeru();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          // FOODS
          _this12.addFood20();
        } else if (_this12.storeID == 5) {
          // EGGS
          _this12.addRitra();
          _this12.addFeng();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          _this12.addBattery12();
          // FOODS
          _this12.addFood20();
        } else if (_this12.storeID == 4) {
          // EGGS
          _this12.addFeng();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          // FOODS
          _this12.addFood10();
        } else if (_this12.storeID == 3) {
          // EGGS
          _this12.addRitra();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          // FOODS
          _this12.addFood10();
        } else if (_this12.storeID == 2) {
          // EGGS
          _this12.addMeru();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          // FOODS
          _this12.addFood10();
        } else if (_this12.storeID == 1) {
          // EGGS
          _this12.addAkh();
          _this12.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this12.addBattery8();
          // FOODS
          _this12.addFood10();
        }
        //if success
        _this12.state_buy = 2;
        _this12.status_direct_buy = 2;
        _this12.stateHash = true;
        _this12.isLogin = '';
        const alert = yield _this12.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }
  pay_cartStore(user_uid, addressw, getaddress, color) {
    var _this13 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.senddata.getstoredetail(_this13.storeID).subscribe(data => {
        _this13.storedetail = JSON.parse(data);
        _this13.storeDeskripsi = _this13.storedetail.deskripsi;
        // set transaction history
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this13.senddata.gettokenOwnermp(_this13.globalID).subscribe(dataToken => {
              _this13.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this13.senddata.settrxhistory(_this13.storeID,
              //storeid
              _this13.globalID,
              //userid
              'S-BNB' + _this13.newTime(),
              //itemid
              _this13.cartPriceBNB,
              //amount BNB
              'res.transactionHash',
              //tx_hash
              'BNB',
              //type
              'Package-Official-Store',
              //item
              _this13.email,
              //email
              _this13.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
      }, error => {});
      // packages-official-store
      if (_this13.storeID == 16) {
        // BATTERY
        _this13.addDorch();
      } else if (_this13.storeID == 15) {
        // BATTERY
        _this13.addMetalicana();
      } else if (_this13.storeID == 14) {
        // BATTERY
        _this13.addFood1();
      } else if (_this13.storeID == 13) {
        // BATTERY
        _this13.addBattery8();
      } else if (_this13.storeID == 12) {
        // BATTERY
        _this13.addBattery12();
      } else if (_this13.storeID == 11) {
        // BATTERY
        _this13.addBattery24();
      } else if (_this13.storeID == 10) {
        // EGGS
        _this13.addAkh();
        _this13.addMeru();
        _this13.addRitra();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        _this13.addBattery24();
        // FOODS
        _this13.addFood();
      } else if (_this13.storeID == 9) {
        // EGGS
        _this13.addAkh();
        _this13.addFeng();
        _this13.addMeru();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        _this13.addBattery24();
        // FOODS
        _this13.addFood();
      } else if (_this13.storeID == 8) {
        // EGGS
        _this13.addRitra();
        _this13.addFeng();
        _this13.addMeru();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        _this13.addBattery24();
        // FOODS
        _this13.addFood();
      } else if (_this13.storeID == 7) {
        // EGGS
        _this13.addRitra();
        _this13.addFeng();
        _this13.addAkh();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        _this13.addBattery24();
        // FOODS
        _this13.addFood();
      } else if (_this13.storeID == 6) {
        // EGGS
        _this13.addAkh();
        _this13.addMeru();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        // FOODS
        _this13.addFood20();
      } else if (_this13.storeID == 5) {
        // EGGS
        _this13.addRitra();
        _this13.addFeng();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        _this13.addBattery12();
        // FOODS
        _this13.addFood20();
      } else if (_this13.storeID == 4) {
        // EGGS
        _this13.addFeng();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        // FOODS
        _this13.addFood10();
      } else if (_this13.storeID == 3) {
        // EGGS
        _this13.addRitra();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        // FOODS
        _this13.addFood10();
      } else if (_this13.storeID == 2) {
        // EGGS
        _this13.addMeru();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        // FOODS
        _this13.addFood10();
      } else if (_this13.storeID == 1) {
        // EGGS
        _this13.addAkh();
        _this13.fs.collection("Roulette").doc("Oragon").update({
          Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
        });
        // BATTERY
        _this13.addBattery8();
        // FOODS
        _this13.addFood10();
      }
      //if success
      _this13.state_buy = 3;
      _this13.status_direct_buy = 1;
      _this13.stateHash = true;
      _this13.connect = true;
      const loading = yield _this13.loadingController.create();
      yield loading.present();
      const getsaveCart = localStorage.getItem("carts");
      console.log(getsaveCart);
      // this.updatestorecart(this.cartID, this.globalID, this.wallets, 'res.transactionHash', this.color, this.email);
      // this.senddata.setaddressmp(this.globalID, this.getaddress).subscribe(
      //   async(viewdata:any)=>{
      //     const alert = await this.alertController.create({
      //       header: 'Thankyou !',
      //       message: 'Your cart is ready on the OragonX Marketplace.',
      //       buttons: ['OK'],
      //     });
      //     await alert.present();
      // });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      loading.dismiss();
    })();
  }
  pay_cartmultiStore(user_uid, addressw, getaddress, color) {
    var _this14 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this14.activeAlamat == undefined) {
        const alert = yield _this14.alertController.create({
          header: 'Failed !',
          message: 'Please submit your address.',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        _this14.senddata.getstoredetail(_this14.storeID).subscribe(data => {
          _this14.storedetail = JSON.parse(data);
          _this14.storeDeskripsi = _this14.storedetail.deskripsi;
          // set transaction history
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this14.senddata.gettokenOwnermp(_this14.globalID).subscribe(dataToken => {
                _this14.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this14.senddata.settrxhistory(_this14.storeID,
                //storeid
                _this14.globalID,
                //userid
                'S-BNB' + _this14.newTime(),
                //itemid
                _this14.cartPriceBNB,
                //amount BNB
                'res.transactionHash',
                //tx_hash
                'BNB',
                //type
                'Package-Official-Store',
                //item
                _this14.email,
                //email
                _this14.tokenNotif.tokenPushNotification //token
                ).subscribe(data => {}, error => {});
              });
            } else {
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
        }, error => {});
        // packages-official-store
        if (_this14.storeID == 16) {
          // BATTERY
          _this14.addDorch();
        } else if (_this14.storeID == 15) {
          // BATTERY
          _this14.addMetalicana();
        } else if (_this14.storeID == 14) {
          // BATTERY
          _this14.addFood1();
        } else if (_this14.storeID == 13) {
          // BATTERY
          _this14.addBattery8();
        } else if (_this14.storeID == 12) {
          // BATTERY
          _this14.addBattery12();
        } else if (_this14.storeID == 11) {
          // BATTERY
          _this14.addBattery24();
        } else if (_this14.storeID == 10) {
          // EGGS
          _this14.addAkh();
          _this14.addMeru();
          _this14.addRitra();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          _this14.addBattery24();
          // FOODS
          _this14.addFood();
        } else if (_this14.storeID == 9) {
          // EGGS
          _this14.addAkh();
          _this14.addFeng();
          _this14.addMeru();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          _this14.addBattery24();
          // FOODS
          _this14.addFood();
        } else if (_this14.storeID == 8) {
          // EGGS
          _this14.addRitra();
          _this14.addFeng();
          _this14.addMeru();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          _this14.addBattery24();
          // FOODS
          _this14.addFood();
        } else if (_this14.storeID == 7) {
          // EGGS
          _this14.addRitra();
          _this14.addFeng();
          _this14.addAkh();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          _this14.addBattery24();
          // FOODS
          _this14.addFood();
        } else if (_this14.storeID == 6) {
          // EGGS
          _this14.addAkh();
          _this14.addMeru();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          // FOODS
          _this14.addFood20();
        } else if (_this14.storeID == 5) {
          // EGGS
          _this14.addRitra();
          _this14.addFeng();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1),
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          _this14.addBattery12();
          // FOODS
          _this14.addFood20();
        } else if (_this14.storeID == 4) {
          // EGGS
          _this14.addFeng();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Feng: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          // FOODS
          _this14.addFood10();
        } else if (_this14.storeID == 3) {
          // EGGS
          _this14.addRitra();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Ritra: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          // FOODS
          _this14.addFood10();
        } else if (_this14.storeID == 2) {
          // EGGS
          _this14.addMeru();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Meru: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          // FOODS
          _this14.addFood10();
        } else if (_this14.storeID == 1) {
          // EGGS
          _this14.addAkh();
          _this14.fs.collection("Roulette").doc("Oragon").update({
            Akh: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(-1)
          });
          // BATTERY
          _this14.addBattery8();
          // FOODS
          _this14.addFood10();
        }
        //if success
        _this14.state_buy = 3;
        _this14.status_direct_buy = 1;
        _this14.stateHash = true;
        _this14.connect = true;
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        const getsaveCart = localStorage.getItem("carts");
        console.log(JSON.parse(getsaveCart));
        const descsaveCart = JSON.parse(getsaveCart);
        for (let c in descsaveCart) {
          _this14.updatestorecart(descsaveCart[c].id_cart, _this14.globalID, _this14.wallets, 'res.transactionHash', _this14.color, _this14.email);
        }
        _this14.senddata.setaddressmp(_this14.globalID, _this14.getaddress);
        const alert = yield _this14.alertController.create({
          header: 'Thankyou !',
          message: 'Your cart is ready on the OragonX Marketplace.',
          buttons: ['OK']
        });
        yield alert.present();
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        loading.dismiss();
      }
    })();
  }
  // Payment Market P2P
  pay_firstMarketp2p() {
    var _this15 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this15.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("lastseen");
      if (_this15.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        _this15.fs.collection("Players").doc(_this15.marketp2pdragonowner).valueChanges().subscribe(datas => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          console.log(data_user.WalletAddress);
          _this15.owner_address = data_user.WalletAddress;
          console.log(_this15.owner_address);
        });
        if (_this15.bnb_balance * 1 > _this15.price * 1 && _this15.bnb_balance * 1 > _this15.marketp2pdragonFee * 1) {
          _this15.web3js.eth.sendTransaction({
            from: _this15.wallet,
            to: _this15.owner_address,
            value: _this15.web3js.utils.toWei(_this15.price.toFixed(8).toString(), 'ether'),
            gas: 500000,
            gasPrice: 5000000000
          }, /*#__PURE__*/function () {
            var _ref8 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
              if (err) {
                _this15.openDialog("Transaction Error Please Try Again");
              } else {
                let kind = localStorage.getItem("kind");
                _this15.kind = "dragon";
                // Build Json String Dragon
                let crd = JSON.stringify({
                  Id: _this15.marketp2pdragonDocId,
                  ItemId: _this15.marketp2pdragonID,
                  Attributes: {
                    AttackPoint: Number(_this15.marketp2pdragonAttack),
                    DefensePoint: Number(_this15.marketp2pdragonDefense),
                    Exp: Number(_this15.marketp2pdragonExp),
                    HP: Number(_this15.marketp2pdragonHP),
                    Hunger: Number(_this15.marketp2pdragonHunger),
                    Level: Number(_this15.marketp2pdragonLevel),
                    MaxHP: Number(_this15.marketp2pdragonMaxHP),
                    MaxHunger: Number(_this15.marketp2pdragonMaxHunger)
                  },
                  price: Number(_this15.marketp2pdragonprice),
                  owner: _this15.marketp2pdragonowner
                });
                _this15.current_data = JSON.parse(crd);
                // console.log(JSON.stringify(this.current_data));
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this15.senddata.gettokenOwnermp(_this15.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
                      var _ref9 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
                        _this15.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        const loading = yield _this15.loadingController.create();
                        yield loading.present();
                        _this15.senddata.settrxhistory(_this15.marketp2pdragonDocId,
                        //id_product
                        _this15.globalID,
                        //userid
                        _this15.marketp2pdragonDocId + '-' + _this15.kind,
                        //itemid
                        _this15.marketp2pdragonprice,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-seller',
                        //type
                        _this15.marketp2pdragonDocId + '-' + _this15.kind,
                        //item
                        _this15.email,
                        //email
                        _this15.tokenNotif.tokenPushNotification //token
                        ).subscribe(data => {
                          loading.dismiss();
                        });
                      });
                      return function (_x9) {
                        return _ref9.apply(this, arguments);
                      };
                    }());
                  } else {
                    // console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                // Check Cart
                yield _this15.checkitemscreated();
                // Transaction Data Firestore
                var sfDocRef = _this15.fs.firestore.collection('Sell/' + _this15.marketp2pdragonowner + '/Dragons').doc(_this15.marketp2pdragonDocId);
                var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pdragonDocId);
                try {
                  _this15.fs.firestore.collection('Sell/' + _this15.marketp2pdragonowner + '/Dragons').doc(_this15.marketp2pdragonDocId).delete().then(() => {});
                  _this15.fs.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pdragonDocId).set({
                    Id: _this15.marketp2pdragonDocId,
                    ItemId: _this15.marketp2pdragonID,
                    Attributes: {
                      AttackPoint: Number(_this15.marketp2pdragonAttack),
                      DefensePoint: Number(_this15.marketp2pdragonDefense),
                      Exp: Number(_this15.marketp2pdragonExp),
                      HP: Number(_this15.marketp2pdragonHP),
                      Hunger: Number(_this15.marketp2pdragonHunger),
                      Level: Number(_this15.marketp2pdragonLevel),
                      MaxHP: Number(_this15.marketp2pdragonMaxHP),
                      MaxHunger: Number(_this15.marketp2pdragonMaxHunger)
                    }
                  }).then(() => {
                    // console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  }).catch(error => {});
                  // console.log("Transaction successfully committed!");
                } catch (e) {
                  // console.log("Transaction failed: ", e);
                }
                _this15.senddata.selldragontoitemsmp(_this15.globalID, _this15.marketp2pdragonDocId).subscribe(dataE => {
                  // console.log(dataE);
                }, error => {});
                _this15.senddata.setitemhistory(_this15.marketp2pdragonDocId, _this15.globalID, transactionHash, JSON.stringify(_this15.current_data), '').subscribe(data => {}, error => {});
                _this15.senddata.addSellListmp(_this15.marketp2pdragonDocId, _this15.globalID, _this15.priceRoyalty_display).subscribe(dataE => {});
                loading.dismiss();
                const alert = yield _this15.alertController.create({
                  header: "Success",
                  message: "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this15.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
                  var _ref10 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
                    const loading = yield _this15.loadingController.create();
                    yield loading.present();
                    _this15.dragons = dataSell;
                    _this15.marketp2pdragonLength = dataSell.length;
                    loading.dismiss();
                  });
                  return function (_x10) {
                    return _ref10.apply(this, arguments);
                  };
                }(), error => {});
                _this15.state_buy = 3;
              }
            });
            return function (_x7, _x8) {
              return _ref8.apply(this, arguments);
            };
          }());
        } else {
          const alert = yield _this15.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        _this15.fs.collection("Players").doc(_this15.marketp2pdragonowner).valueChanges().subscribe(datas => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          console.log(data_user.WalletAddress);
          _this15.owner_address = data_user.WalletAddress;
          console.log(_this15.owner_address);
        });
        let kind = localStorage.getItem("kind");
        _this15.kind = "dragon";
        // Build Json String Dragon
        let crd = JSON.stringify({
          Id: _this15.marketp2pdragonDocId,
          ItemId: _this15.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this15.marketp2pdragonAttack),
            DefensePoint: Number(_this15.marketp2pdragonDefense),
            Exp: Number(_this15.marketp2pdragonExp),
            HP: Number(_this15.marketp2pdragonHP),
            Hunger: Number(_this15.marketp2pdragonHunger),
            Level: Number(_this15.marketp2pdragonLevel),
            MaxHP: Number(_this15.marketp2pdragonMaxHP),
            MaxHunger: Number(_this15.marketp2pdragonMaxHunger)
          },
          price: Number(_this15.marketp2pdragonprice),
          owner: _this15.marketp2pdragonowner
        });
        _this15.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this15.senddata.gettokenOwnermp(_this15.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
              var _ref11 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
                _this15.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                const loading = yield _this15.loadingController.create();
                yield loading.present();
                _this15.senddata.settrxhistory(_this15.marketp2pdragonDocId,
                //id_product
                _this15.globalID,
                //userid
                _this15.marketp2pdragonDocId + '-' + _this15.kind,
                //itemid
                _this15.marketp2pdragonprice,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-seller',
                //type
                _this15.marketp2pdragonDocId + '-' + _this15.kind,
                //item
                _this15.email,
                //email
                _this15.tokenNotif.tokenPushNotification //token
                ).subscribe(data => {
                  loading.dismiss();
                });
              });
              return function (_x11) {
                return _ref11.apply(this, arguments);
              };
            }());
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this15.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this15.fs.firestore.collection('Sell/' + _this15.marketp2pdragonowner + '/Dragons').doc(_this15.marketp2pdragonDocId);
        var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pdragonDocId);
        try {
          _this15.fs.firestore.collection('Sell/' + _this15.marketp2pdragonowner + '/Dragons').doc(_this15.marketp2pdragonDocId).delete().then(() => {});
          _this15.fs.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pdragonDocId).set({
            Id: _this15.marketp2pdragonDocId,
            ItemId: _this15.marketp2pdragonID,
            Attributes: {
              AttackPoint: Number(_this15.marketp2pdragonAttack),
              DefensePoint: Number(_this15.marketp2pdragonDefense),
              Exp: Number(_this15.marketp2pdragonExp),
              HP: Number(_this15.marketp2pdragonHP),
              Hunger: Number(_this15.marketp2pdragonHunger),
              Level: Number(_this15.marketp2pdragonLevel),
              MaxHP: Number(_this15.marketp2pdragonMaxHP),
              MaxHunger: Number(_this15.marketp2pdragonMaxHunger)
            }
          }).then(() => {
            // console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        _this15.senddata.selldragontoitemsmp(_this15.globalID, _this15.marketp2pdragonDocId).subscribe(dataE => {
          // console.log(dataE);
        }, error => {});
        _this15.senddata.addSellListmp(_this15.marketp2pdragonDocId, _this15.globalID, _this15.priceRoyalty_display).subscribe(dataE => {});
        loading.dismiss();
        const alert = yield _this15.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        _this15.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
          var _ref12 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            const loading = yield _this15.loadingController.create();
            yield loading.present();
            _this15.dragons = dataSell;
            _this15.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          });
          return function (_x12) {
            return _ref12.apply(this, arguments);
          };
        }(), error => {});
        _this15.state_buy = 3;
      }
      localStorage.removeItem("lastpay");
      localStorage.removeItem("lastdragon");
    })();
  }
  pay_secondMarketp2p() {
    var _this16 = this;
    if (this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      this.web3js.eth.sendTransaction({
        from: this.wallet,
        to: '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
        value: this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
        gas: 500000,
        gasPrice: 5000000000
      }, /*#__PURE__*/function () {
        var _ref13 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
          if (err) {
            _this16.openDialog("Transaction Error Please Try Again");
          } else {
            let kind = localStorage.getItem("lastseen");
            _this16.kind = "dragon";
            // Build Json String Dragon
            let crd = JSON.stringify({
              Id: _this16.marketp2pdragonDocId,
              ItemId: _this16.marketp2pdragonID,
              Attributes: {
                AttackPoint: Number(_this16.marketp2pdragonAttack),
                DefensePoint: Number(_this16.marketp2pdragonDefense),
                Exp: Number(_this16.marketp2pdragonExp),
                HP: Number(_this16.marketp2pdragonHP),
                Hunger: Number(_this16.marketp2pdragonHunger),
                Level: Number(_this16.marketp2pdragonLevel),
                MaxHP: Number(_this16.marketp2pdragonMaxHP),
                MaxHunger: Number(_this16.marketp2pdragonMaxHunger)
              },
              price: _this16.marketp2pdragonprice,
              owner: _this16.marketp2pdragonowner
            });
            _this16.current_data = JSON.parse(crd);
            // console.log(JSON.stringify(this.current_data));
            // Create Royalty pos 1
            if (_this16.marketp2pdragonBG == "exists") {
              if (_this16.positionRoyalty == 1) {
                _this16.senddata.setdgfirstroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {}, error => {});
                // Create Royalty pos 2
              } else if (_this16.positionRoyalty == 2) {
                _this16.senddata.setdgsecondroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_1,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_2a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 3
              } else if (_this16.positionRoyalty == 3) {
                _this16.senddata.setdgthirdroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_1,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_3a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_2,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_3b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 4
              } else if (_this16.positionRoyalty == 4) {
                _this16.senddata.setdgfourthroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_1,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_4a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_2,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_4b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_3,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_4c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 5
              } else if (_this16.positionRoyalty == 5) {
                _this16.senddata.setdgfifthroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_1,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_2,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_3,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_4,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5d,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              } else if (_this16.positionRoyalty == 6) {
                _this16.senddata.setdgsixthroyaltymp(_this16.globalID,
                //userid
                _this16.marketp2pdragonowner,
                //owner
                _this16.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_1,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_2,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_3,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_4,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5d,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this16.senddata.setroyaltytrxhistory(_this16.globalID,
                  //userid
                  _this16.pos_5,
                  //userid
                  _this16.marketp2pdragonDocId + "-" + _this16.kind,
                  //itemid
                  _this16.totaroyalty_5e,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 5",
                  //type
                  JSON.stringify(_this16.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              }
            }
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this16.senddata.gettokenOwnermp(_this16.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
                  var _ref14 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
                    _this16.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    const loading = yield _this16.loadingController.create();
                    yield loading.present();
                    _this16.senddata.settrxhistory(_this16.marketp2pdragonDocId,
                    //id_product
                    _this16.globalID,
                    //userid
                    _this16.marketp2pdragonDocId + '-' + _this16.kind,
                    //itemid
                    _this16.fee_royalty,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
                    //type
                    _this16.marketp2pdragonDocId + '-' + _this16.kind,
                    //item
                    _this16.email,
                    //email
                    _this16.tokenNotif.tokenPushNotification //token
                    ).subscribe(data => {
                      loading.dismiss();
                    });
                  });
                  return function (_x15) {
                    return _ref14.apply(this, arguments);
                  };
                }());
              } else {
                // console.log('No registration token available. Request permission to generate one.');
              }
            }).catch(err => {
              // console.log('An error occurred while retrieving token. ', err);
            });
            _this16.state_buy = 3;
            _this16.status_1 = "1";
            localStorage.setItem("lastpay", _this16.marketp2pdragonDocId);
          }
        });
        return function (_x13, _x14) {
          return _ref13.apply(this, arguments);
        };
      }());
    } else {
      let kind = localStorage.getItem("lastseen");
      this.kind = "dragon";
      // Build Json String Dragon
      let crd = JSON.stringify({
        Id: this.marketp2pdragonDocId,
        ItemId: this.marketp2pdragonID,
        Attributes: {
          AttackPoint: Number(this.marketp2pdragonAttack),
          DefensePoint: Number(this.marketp2pdragonDefense),
          Exp: Number(this.marketp2pdragonExp),
          HP: Number(this.marketp2pdragonHP),
          Hunger: Number(this.marketp2pdragonHunger),
          Level: Number(this.marketp2pdragonLevel),
          MaxHP: Number(this.marketp2pdragonMaxHP),
          MaxHunger: Number(this.marketp2pdragonMaxHunger)
        },
        price: this.marketp2pdragonprice,
        owner: this.marketp2pdragonowner
      });
      this.current_data = JSON.parse(crd);
      // console.log(JSON.stringify(this.current_data));
      // Create Royalty pos 1
      if (this.marketp2pdragonBG == "exists") {
        if (this.positionRoyalty == 1) {
          this.senddata.setdgfirstroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {}, error => {});
          // Create Royalty pos 2
        } else if (this.positionRoyalty == 2) {
          this.senddata.setdgsecondroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {
            // Create Transaction History
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_1,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_2a,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 1",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
          }, error => {});
          // Create Royalty pos 3
        } else if (this.positionRoyalty == 3) {
          this.senddata.setdgthirdroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {
            // Create Transaction History
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_1,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_3a,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 1",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_2,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_3b,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 2",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
          }, error => {});
          // Create Royalty pos 4
        } else if (this.positionRoyalty == 4) {
          this.senddata.setdgfourthroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {
            // Create Transaction History
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_1,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_4a,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 1",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_2,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_4b,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 2",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_3,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_4c,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 3",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
          }, error => {});
          // Create Royalty pos 5
        } else if (this.positionRoyalty == 5) {
          this.senddata.setdgfifthroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {
            // Create Transaction History
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_1,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5a,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 1",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_2,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5b,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 2",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_3,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5c,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 3",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_4,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5d,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 4",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
          }, error => {});
        } else if (this.positionRoyalty == 6) {
          this.senddata.setdgsixthroyaltymp(this.globalID,
          //userid
          this.marketp2pdragonowner,
          //owner
          this.marketp2pdragonDocId //itemid
          ).subscribe(data => {
            // Create Transaction History
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_1,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5a,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 1",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_2,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5b,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 2",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_3,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5c,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 3",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_4,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5d,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 4",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
            this.senddata.setroyaltytrxhistory(this.globalID,
            //userid
            this.pos_5,
            //userid
            this.marketp2pdragonDocId + "-" + this.kind,
            //itemid
            this.totaroyalty_5e,
            //amount
            "transactionHash",
            //tx_hash
            "Royalty Seller 5",
            //type
            JSON.stringify(this.current_data) //item
            ).subscribe(data => {}, error => {});
          }, error => {});
        }
      }
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
        vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
      }).then(tokenPushNotification => {
        if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
            var _ref15 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
              _this16.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              const loading = yield _this16.loadingController.create();
              yield loading.present();
              _this16.senddata.settrxhistory(_this16.marketp2pdragonDocId,
              //id_product
              _this16.globalID,
              //userid
              _this16.marketp2pdragonDocId + '-' + _this16.kind,
              //itemid
              _this16.fee_royalty,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-oragon',
              //type
              _this16.marketp2pdragonDocId + '-' + _this16.kind,
              //item
              _this16.email,
              //email
              _this16.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {
                loading.dismiss();
              });
            });
            return function (_x16) {
              return _ref15.apply(this, arguments);
            };
          }());
        } else {
          // console.log('No registration token available. Request permission to generate one.');
        }
      }).catch(err => {
        // console.log('An error occurred while retrieving token. ', err);
      });
      this.state_buy = 3;
      this.status_1 = "1";
      localStorage.setItem("lastpay", this.marketp2pdragonDocId);
    }
  }
  // Market P2P
  getcurrentoragon() {
    this.senddata.getcurrentoragon2().subscribe(data => {
      this.current_oragon = data.data.price;
      this.in_oragon_100c = (100 / this.current_oragon).toFixed(14);
      this.in_oragon_12c = (12 / this.current_oragon).toFixed(14);
      // console.log(this.current_oragon)
    }, error => {});
  }
  click_dragon() {
    this.currentp2p = 1;
  }
  getdgbuydetail(ItemId) {
    let kind = localStorage.setItem('kind', 'dragon');
    this.checkkind(ItemId);
  }
  checkkind(ItemId) {
    this.senddata.getselldgidmp(ItemId).subscribe(dataDetail => {
      this.dragonDetail = JSON.parse(dataDetail);
      this.marketp2pdragonDocId = this.dragonDetail.DocId;
      this.marketp2pdragonID = this.dragonDetail.ItemId;
      this.marketp2pdragonImg = this.dragonDetail.Id;
      this.marketp2pdragonAttack = this.dragonDetail.Attack;
      this.marketp2pdragonDefense = this.dragonDetail.Defense;
      this.marketp2pdragonLevel = this.dragonDetail.Level;
      this.marketp2pdragonHP = this.dragonDetail.HP;
      this.marketp2pdragonHunger = this.dragonDetail.Hunger;
      this.marketp2pdragonMaxHP = this.dragonDetail.MaxHP;
      this.marketp2pdragonMaxHunger = this.dragonDetail.MaxHunger;
      this.marketp2pdragonRarity = this.dragonDetail.Rarity;
      this.marketp2pdragonExp = this.dragonDetail.Exp;
      this.marketp2pdragonowner = this.dragonDetail.uid;
      this.marketp2pdragonprice = this.dragonDetail.price;
      let marketp2pdragonpriceUSD = this.dragonDetail.price / this.current_bnb;
      this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
      this.marketp2pdragonBG = this.dragonDetail.imgbackground;
      this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
      this.marketp2pdragonfavorited = this.dragonDetail.favorited;
      // console.log(this.marketp2pdragonpriceUSD);
      if (this.marketp2pdragonBG == "exists") {
        this.senddata.getdgroyaltymp(this.marketp2pdragonDocId).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          this.marketp2pdragonFee = 12 / 100 * this.marketp2pdragonprice;
          let marketp2pdragonprice_actual = this.marketp2pdragonprice - this.marketp2pdragonFee;
          this.fee_display = this.marketp2pdragonFee;
          this.price_display = marketp2pdragonprice_actual;
          this.marketp2pdragonRoyalty = 10 / 100 * this.marketp2pdragonprice;
          let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
          this.priceRoyalty_display = priceRoyalty_display.toFixed(2);
          this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty2 = 10 / 100 * this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty3 = 10 / 100 * this.marketp2pdragonRoyalty2;
          this.marketp2pdragonRoyalty4 = 10 / 100 * this.marketp2pdragonRoyalty3;
          this.marketp2pdragonRoyalty5 = 10 / 100 * this.marketp2pdragonRoyalty4;
          this.marketp2pdragonRoyalty6 = 10 / 100 * this.marketp2pdragonRoyalty5;
          let totaroyalty_5a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5c = this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5d = this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5e = this.marketp2pdragonRoyalty5 - this.marketp2pdragonRoyalty6;
          this.totaroyalty_5a = totaroyalty_5a;
          this.totaroyalty_5b = totaroyalty_5b;
          this.totaroyalty_5c = totaroyalty_5c;
          this.totaroyalty_5d = totaroyalty_5d;
          this.totaroyalty_5e = totaroyalty_5e;
          let totaroyalty_4a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          let totaroyalty_4b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          let totaroyalty_4c = this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          this.totaroyalty_4a = totaroyalty_4a;
          this.totaroyalty_4b = totaroyalty_4b;
          this.totaroyalty_4c = totaroyalty_4c;
          let totaroyalty_3a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3;
          let totaroyalty_3b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3;
          this.totaroyalty_3a = totaroyalty_3a;
          this.totaroyalty_3b = totaroyalty_3b;
          let totaroyalty_2a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2;
          this.totaroyalty_2a = totaroyalty_2a;
          let totaroyalty_1a = this.marketp2pdragonRoyalty;
          this.totaroyalty_1a = totaroyalty_1a;
          if (dr == 1) {
            this.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
          } else if (dr == 2) {
            this.positionRoyalty = 2;
            // console.log("second position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
          } else if (dr == 3) {
            this.positionRoyalty = 3;
            // console.log("third position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
          } else if (dr == 4) {
            this.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
          } else if (dr == 5) {
            this.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
          } else if (dr == 6) {
            this.positionRoyalty = 6;
            // console.log("fifth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
          } else {
            // console.log("unknown position");
          }
          // console.log("royalti pos 1", this.marketp2pdragonRoyalty)
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
        });
      } else {
        this.senddata.getdgroyaltymp(this.marketp2pdragonDocId).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          this.marketp2pdragonFee = 12 / 100 * this.marketp2pdragonprice;
          let marketp2pdragonprice_actual = this.marketp2pdragonprice - this.marketp2pdragonFee;
          this.fee_display = this.marketp2pdragonFee;
          this.price_display = marketp2pdragonprice_actual;
          this.marketp2pdragonRoyalty = 10 / 100 * this.marketp2pdragonprice;
          let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
          this.priceRoyalty_display = priceRoyalty_display.toFixed(2);
          this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty2 = 10 / 100 * this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty3 = 10 / 100 * this.marketp2pdragonRoyalty2;
          this.marketp2pdragonRoyalty4 = 10 / 100 * this.marketp2pdragonRoyalty3;
          this.marketp2pdragonRoyalty5 = 10 / 100 * this.marketp2pdragonRoyalty4;
          this.marketp2pdragonRoyalty6 = 10 / 100 * this.marketp2pdragonRoyalty5;
          let totaroyalty_5a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5c = this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5d = this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5;
          let totaroyalty_5e = this.marketp2pdragonRoyalty5 - this.marketp2pdragonRoyalty6;
          this.totaroyalty_5a = totaroyalty_5a;
          this.totaroyalty_5b = totaroyalty_5b;
          this.totaroyalty_5c = totaroyalty_5c;
          this.totaroyalty_5d = totaroyalty_5d;
          this.totaroyalty_5e = totaroyalty_5e;
          let totaroyalty_4a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          let totaroyalty_4b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          let totaroyalty_4c = this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4;
          this.totaroyalty_4a = totaroyalty_4a;
          this.totaroyalty_4b = totaroyalty_4b;
          this.totaroyalty_4c = totaroyalty_4c;
          let totaroyalty_3a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3;
          let totaroyalty_3b = this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3;
          this.totaroyalty_3a = totaroyalty_3a;
          this.totaroyalty_3b = totaroyalty_3b;
          let totaroyalty_2a = this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2;
          this.totaroyalty_2a = totaroyalty_2a;
          let totaroyalty_1a = this.marketp2pdragonRoyalty;
          this.totaroyalty_1a = totaroyalty_1a;
          if (dr == 1) {
            this.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
          } else if (dr == 2) {
            this.positionRoyalty = 2;
            // console.log("second position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
          } else if (dr == 3) {
            this.positionRoyalty = 3;
            // console.log("third position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
          } else if (dr == 4) {
            this.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
          } else if (dr == 5) {
            this.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
          } else if (dr == 6) {
            this.positionRoyalty = 6;
            // console.log("fifth position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
          } else {
            // console.log("unknown position");
          }
          // console.log("royalti pos 1", this.marketp2pdragonRoyalty)
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
        });
      }

      this.senddata.getposroyaltymp(this.marketp2pdragonID).subscribe(datapos => {
        let position = JSON.parse(datapos);
        this.pos_1 = position.pos_1;
        this.pos_2 = position.pos_2;
        this.pos_3 = position.pos_3;
        this.pos_4 = position.pos_4;
        this.pos_5 = position.pos_5;
      });
    }, error => {});
  }
  checkitemscreated() {
    this.fs.collection('Items').doc(this.globalID).valueChanges().subscribe(datas => {
      console.log(datas.Count);
      if (datas == undefined) {
        this.fs.collection('Items').doc(this.globalID).set({
          LastUpdated: this.newTime(),
          Dragon: [],
          Egg: [],
          Battery: [],
          Food: []
        });
      }
    });
  }
  favorite_item(DocId) {
    var _this17 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this17.loadingController.create();
      yield loading.present();
      _this17.senddata.favoritedmp(_this17.globalID, DocId).subscribe( /*#__PURE__*/function () {
        var _ref16 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this17.senddata.getselldglimitmp().subscribe(dataSell => {
            _this17.dragons = JSON.parse(dataSell);
            // this.marketp2pdragonLength = dataSell.length;
            for (let i in _this17.dragons) {
              if (_this17.dragons[i].imgbackground == 'exists') {
                _this17.senddata.getallbackgroundsellmp(_this17.dragons[i].DocId).subscribe(dataBackground => {
                  _this17.dragonsownedbg = JSON.parse(dataBackground);
                  _this17.marketp2pdragonBG = _this17.dragonsownedbg.imgbackground;
                  console.log(_this17.dragonsownedbg);
                }, error => {});
              }
            }
          }, error => {});
          loading.dismiss();
        });
        return function (_x17) {
          return _ref16.apply(this, arguments);
        };
      }(), error => {});
    })();
  }
  // Store & Advertise
  getstoredata() {
    this.senddata.getstoredata().subscribe(data => {
      this.storedata = JSON.parse(data);
      this.color = localStorage.getItem('color');
    }, error => {});
  }
  getstoredetail(id_product) {
    this.senddata.getstoredetail(id_product).subscribe(data => {
      this.storedetail = JSON.parse(data);
      this.storeID = this.storedetail.id_product;
      this.storeUID = this.globalID;
      this.storeName = this.storedetail.nama;
      this.storeDeskripsi = this.storedetail.deskripsi;
      this.storePrice = this.storedetail.harga;
      let storePriceORGN = this.storePrice / this.current_oragon;
      this.storePriceORGN = storePriceORGN.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      this.storePriceORGN2 = storePriceORGN.toFixed(0);
      let storePriceBNB = this.current_bnb * this.storePrice;
      this.storePriceBNB = storePriceBNB.toFixed(4);
      let storePriceBUSD = this.current_busd * this.storePrice;
      this.storePriceBUSD = storePriceBUSD.toFixed(4);
      this.storeImg = this.storedetail.gambar;
    }, error => {});
    this.stateHash = true;
  }
  selectedCurrency(id_product, currency) {
    if (currency == 1) {
      this.selectedCrypto = "ORGN";
    } else if (currency == 2) {
      this.selectedCrypto = "BNB";
    } else if (currency == 3) {
      this.selectedCrypto = "BUSD";
    }
  }
  getstorecart() {
    this.senddata.getstorecart(this.globalID).subscribe(data => {
      this.storecart = JSON.parse(data);
      let sumCartPrice = 0; // Variable to store the sum of cart prices
      for (let i in this.storecart) {
        const tempStatus = this.storecart[i].active;
        if (tempStatus == '0' || tempStatus == '1') {
          sumCartPrice += parseFloat(this.storecart[i].harga); // Accumulate cart prices when status is '1'
        }

        if (this.storecart.length == 0) {
          this.cartCount = 0;
        } else {
          this.cartCount = this.storecart.length;
        }
        this.cartUID = this.globalID;
        this.carts = this.storecart;
        this.cartID = this.storecart[i].id_cart;
        this.storeID = this.storecart[i].product_id;
        this.cartName = this.storecart[i].nama;
        this.cartDeskripsi = this.storecart[i].deskripsi;
        this.cartQty = this.storecart[i].qty_cart;
        let cartPriceBNB = this.current_bnb * parseFloat(this.storecart[i].harga);
        this.cartPriceBNB = cartPriceBNB.toFixed(4);
        this.cartImg = this.storecart[i].gambar;
      }
      this.cartPrice = sumCartPrice.toFixed(2); // Assign the sum of cart prices to this.cartPrice
      console.log(this.cartPrice);
    }, error => {});
  }
  getstoremulticart() {
    let harga = 0;
    this.senddata.getstorecart(this.globalID).subscribe(data => {
      this.storecart = JSON.parse(data);
      this.cartCount = this.storecart.length;
      this.cartPrice = this.storecart.harga;
      console.log(this.cartPrice);
      // this.cartPriceTemp = this.cartPrice;
    }, error => {});
  }
  setActive(id_cart) {
    var _this18 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this18.loadingController.create();
      yield loading.present();
      _this18.senddata.setActiveCart(id_cart).subscribe(data => {
        _this18.senddata.getstorecart(_this18.globalID).subscribe(data => {
          _this18.storecart = JSON.parse(data);
          let sumCartPrice = 0; // Variable to store the sum of cart prices
          if (_this18.storecart.active == 1) {
            _this18.senddata.setactiveidcart(id_cart).subscribe(cartactive => {
              const cartPrice = _this18.storecart.reduce((difference, product) => difference - Number(product.harga), 0);
              console.log("cart aktif", JSON.parse(cartactive));
              let sumCartPrice = 0; // Variable to store the sum of cart prices
              for (let i in _this18.storecart) {
                const tempStatus = _this18.storecart[i].active;
                if (tempStatus == '1') {
                  sumCartPrice += parseFloat(_this18.storecart[i].harga); // Accumulate cart prices when status is '1'
                }
              }

              _this18.cartPrice = sumCartPrice.toFixed(2); // Assign the sum of cart prices to this.cartPrice
              console.log(_this18.cartPrice);
            });
          } else {
            _this18.senddata.setnoactiveidcart(id_cart).subscribe(cartnoactive => {
              const cartPrice = _this18.storecart.reduce((sum, product) => sum + Number(product.harga), 0);
              console.log("cart tidak aktif", JSON.parse(cartnoactive));
              let sumCartPrice = 0; // Variable to store the sum of cart prices
              for (let i in _this18.storecart) {
                const tempStatus = _this18.storecart[i].active;
                if (tempStatus == '1') {
                  sumCartPrice += parseFloat(_this18.storecart[i].harga); // Accumulate cart prices when status is '1'
                }
              }

              _this18.cartPrice = sumCartPrice.toFixed(2); // Assign the sum of cart prices to this.cartPrice
              console.log(_this18.cartPrice);
            });
          }
          _this18.cartPrice = sumCartPrice.toFixed(2); // Assign the sum of cart prices to this.cartPrice
          console.log(_this18.cartPrice);
        }, error => {});
        _this18.senddata.getstorecart(_this18.globalID).subscribe(data => {
          _this18.storecart = JSON.parse(data);
        }, error => {});
      });
      loading.dismiss();
    })();
  }
  setstorecart(id_product, user_uid, addressw) {
    var _this19 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this19.isLogin == '!') {
        const alert = yield _this19.alertController.create({
          header: 'Failed !',
          message: 'Please login for add to cart',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        const loading = yield _this19.loadingController.create();
        yield loading.present();
        _this19.senddata.setstorecart(id_product, user_uid, addressw).subscribe(data => {
          let setstorecart = data;
          _this19.senddata.getstorecart(_this19.globalID).subscribe(data => {
            _this19.storecart = JSON.parse(data);
            const saveCarts = localStorage.setItem("carts", data);
            _this19.saveCarts = localStorage.getItem("carts");
            console.log(_this19.saveCarts);
            _this19.senddata.createSessionmp(_this19.globalID, _this19.saveCarts).subscribe(session => {
              const descSession = JSON.parse(session);
              _this19.descSession = JSON.parse(descSession.valueSession);
              console.log(_this19.descSession);
            });
            for (let i in _this19.storecart) {
              console.log(_this19.storecart[i].addressw);
              if (_this19.storecart.length == 0) {
                _this19.cartCount = 0;
              } else {
                _this19.cartCount = _this19.storecart.length;
              }
              _this19.cartUID = _this19.globalID;
              _this19.carts = _this19.storecart;
              _this19.cartID = _this19.storecart[i].id_cart;
              _this19.storeID = _this19.storecart[i].product_id;
              // this.cartName = this.storecart[i].nama
              _this19.cartDeskripsi = _this19.storecart[i].deskripsi;
              _this19.cartPrice = _this19.storecart[i].harga;
              _this19.cartQty = _this19.storecart[i].qty_cart;
              let cartPriceBNB = _this19.current_bnb * _this19.cartPrice * _this19.cartQty;
              _this19.cartPriceBNB = cartPriceBNB.toFixed(4);
              _this19.cartImg = _this19.storecart[i].gambar;
            }
          }, error => {});
        }, error => {});
        loading.dismiss();
        const alert = yield _this19.alertController.create({
          header: 'Success',
          message: 'Items already added to your cart',
          buttons: ['OK']
        });
        yield alert.present();
        _this19.stateHash = true;
        _this19.state_buy = 2;
      }
    })();
  }
  updatestorecart(id_cart, user_uid, addressw, transactionHash, color, email) {
    var _this20 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this20.loadingController.create();
      yield loading.present();
      _this20.senddata.updatestorecartHome(id_cart, user_uid, addressw, transactionHash, _this20.color, email, _this20.actualcartPrice, _this20.getaddress).subscribe(data => {
        let updatestorecartHome = data;
        console.log(updatestorecartHome);
      }, error => {});
      loading.dismiss();
    })();
  }
  pay_progressStore(event, id_orders, user_uid, id_product, addressw) {
    var _this21 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this21.loadingController.create();
      yield loading.present();
      // console.log(event, DocId, ItemId)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        const getsaveCart = localStorage.getItem("carts");
        console.log(JSON.parse(getsaveCart));
        const descsaveCart = JSON.parse(getsaveCart);
        for (let c in descsaveCart) {
          _this21.updatestoreprogress(descsaveCart[c].id_orders, _this21.globalID, _this21.wallets, descsaveCart[c].product_id, event.target.files[0]);
          _this21.addJaketsMetalicana(descsaveCart[c].id_orders, user_uid, descsaveCart[c].product_id);
        }
        loading.dismiss();
        console.log(event.target.files[0]);
        reader.onload = event => {
          _this21.url = event.target.result;
        };
      }
      _this21.alertWaiting();
      _this21.updateProgressCount();
    })();
  }
  updateProgressCount() {
    var _this22 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this22.progressCount);
      const pc = _this22.progressCount;
      _this22.progressCount = pc - 1;
      const updateProgressCount = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const loading = yield _this22.loadingController.create();
        yield loading.present();
        _this22.senddata.getstoreprogress(_this22.globalID).subscribe(data => {
          _this22.storeprogress = JSON.parse(data);
          for (let i in _this22.storeprogress) {
            // console.log(this.storeprogress[i].addressw)
            _this22.progressCount = _this22.storeprogress.length;
          }
        }, error => {});
        loading.dismiss();
      }), 5000);
      setTimeout( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        window.location.reload();
      }), 5000);
    })();
  }
  updatestoreprogress(id_orders, user_uid, addressw, product_id, file_orders) {
    var _this23 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this23.loadingController.create();
      yield loading.present();
      _this23.senddata.updatestoreprogressHome(id_orders, user_uid, addressw, product_id, file_orders).subscribe(data => {
        let updatestoreprogressHome = data;
        console.log(updatestoreprogressHome);
        localStorage.removeItem("carts");
      }, error => {});
      loading.dismiss();
    })();
  }
  getstoreprogress() {
    this.senddata.getstoreprogress(this.globalID).subscribe(data => {
      this.storeprogress = JSON.parse(data);
      this.saveCarts = localStorage.getItem("carts");
      console.log(this.saveCarts);
      this.senddata.createSessionmp(this.globalID, this.saveCarts).subscribe(session => {
        const descSession = JSON.parse(session);
        this.descSession = JSON.parse(descSession.valueSession);
        this.lengthValueSession = this.descSession.length;
        let sumCartPrice = 0; // Variable to store the sum of cart prices
        for (let i in this.descSession) {
          console.log(this.descSession[i].harga);
          this.ordersID = this.descSession[i].id_orders;
          this.product_id = this.descSession[i].product_id;
          // this.cartDeskripsi = this.descSession[i].deskripsi
          this.cartPrice = this.descSession[i].harga;
          this.cartQty = this.descSession[i].qty_cart;
          let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
          this.cartPriceBNB = cartPriceBNB.toFixed(4);
          this.cartImg = this.descSession[i].gambar;
          const tempStatus = this.descSession[i].active;
          sumCartPrice += parseFloat(this.descSession[i].harga); // Accumulate cart prices when status is '1'
        }

        this.cartPrice = sumCartPrice.toFixed(2); // Assign the sum of cart prices to this.cartPrice
        console.log(this.cartPrice);
      });
    }, error => {});
  }
  addMetalicana() {
    var DocIdMetalicana = this.newTime() + 1;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMetalicana, 'ITM8', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Metalicana", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdMetalicana).set({
      ItemId: "ITM8",
      Id: 'EGG' + DocIdMetalicana
    }).then(() => {});
  }
  addDorch() {
    var DocIdDorch = this.newTime() + 1;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdDorch, 'ITM7', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Dorch", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdDorch).set({
      ItemId: "ITM7",
      Id: 'EGG' + DocIdDorch
    }).then(() => {});
  }
  addAkh() {
    var DocIdAkh = this.newTime() + 1;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdAkh, 'ITM4', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Akh", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdAkh).set({
      ItemId: "ITM4",
      Id: 'EGG' + DocIdAkh
    }).then(() => {});
  }
  addMeru() {
    var DocIdMeru = this.newTime() + 2;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMeru, 'ITM2', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Meru", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdMeru).set({
      ItemId: "ITM2",
      Id: 'EGG' + DocIdMeru
    }).then(() => {});
  }
  addRitra() {
    var DocIdRitra = this.newTime() + 3;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdRitra, 'ITM6', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Ritra", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdRitra).set({
      ItemId: "ITM6",
      Id: 'EGG' + DocIdRitra
    }).then(() => {});
  }
  addFeng() {
    var DocIdFeng = this.newTime() + 4;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdFeng, 'ITM5', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      // console.log("add Feng", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdFeng).set({
      ItemId: "ITM5",
      Id: 'EGG' + DocIdFeng
    }).then(() => {});
  }
  addBattery8() {
    var DocIdBattery8 = this.newTime() + 4;
    var update1Battery = 1;
    this.senddata.getsellbattery8Usermp(this.globalID).subscribe(dataSell => {
      this.batteriesHigh = JSON.parse(dataSell);
      if (this.batteriesHigh.length > 0) {
        // for(let i in this.batteriesHigh) {
        this.senddata.insertNewBattery8mp(this.globalID, this.batteriesHigh[0].DocId, 'ITM15', update1Battery.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 1 data green battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+1)
        }).then(() => {});
        // }
      } else {
        this.senddata.insertNewBattery8mp(this.globalID, 'BTR' + DocIdBattery8, 'ITM15', '1', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 1 data green battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery8).set({
          ItemId: "ITM15",
          Amount: 1,
          Id: 'BTR' + DocIdBattery8
        }).then(() => {});
      }
    }, error => {});
  }
  addBattery12() {
    var DocIdBattery12 = this.newTime() + 5;
    var update1Battery = 1;
    this.senddata.getsellbattery12Usermp(this.globalID).subscribe(dataSell => {
      this.batteriesHigh = JSON.parse(dataSell);
      if (this.batteriesHigh.length > 0) {
        // for(let i in this.batteriesHigh) {
        this.senddata.insertNewBattery12mp(this.globalID, this.batteriesHigh[0].DocId, 'ITM32', update1Battery.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 1 data blue battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+1)
        }).then(() => {});
        // }
      } else {
        this.senddata.insertNewBattery12mp(this.globalID, 'BTR' + DocIdBattery12, 'ITM32', '1', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 1 data blue battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery12).set({
          ItemId: "ITM32",
          Amount: 1,
          Id: 'BTR' + DocIdBattery12
        }).then(() => {});
      }
    }, error => {});
  }
  addBattery24() {
    var DocIdBattery24 = this.newTime() + 6;
    var update1Battery = 1;
    this.senddata.getsellbattery24Usermp(this.globalID).subscribe(dataSell => {
      this.batteriesHigh = JSON.parse(dataSell);
      if (this.batteriesHigh.length > 0) {
        // for(let i in this.batteriesHigh) {
        this.senddata.insertNewBatterymp(this.globalID, this.batteriesHigh[0].DocId, 'ITM3', update1Battery.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 1 data red battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+1)
        }).then(() => {});
        // }
      } else {
        this.senddata.insertNewBatterymp(this.globalID, 'BTR' + DocIdBattery24, 'ITM3', '1', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 1 data red battery...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery24).set({
          ItemId: "ITM3",
          Amount: 1,
          Id: 'BTR' + DocIdBattery24
        }).then(() => {});
      }
    }, error => {});
  }
  addFood() {
    var DocIdFoods30 = this.newTime() + 1;
    var update30Food = 30;
    this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(dataSell => {
      this.foodsHigh = JSON.parse(dataSell);
      if (this.foodsHigh.length > 0) {
        this.senddata.insertNewFoodmp(this.globalID, this.foodsHigh[0].DocId, 'ITM14', update30Food.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 30 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+30)
        }).then(() => {});
      } else {
        this.senddata.insertNewFoodmp(this.globalID, 'FOOD' + DocIdFoods30, 'ITM14', '30', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 30 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods30).set({
          ItemId: "ITM14",
          Amount: 30,
          Used: 0,
          Id: 'FOOD' + DocIdFoods30
        }).then(() => {});
      }
      // console.log(this.foodsHigh);
    }, error => {});
  }
  addFood20() {
    var DocIdFoods20 = this.newTime() + 1;
    var update20Food = 20;
    this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(dataSell => {
      this.foodsHigh = JSON.parse(dataSell);
      if (this.foodsHigh.length > 0) {
        this.senddata.insertNewFoodmp(this.globalID, this.foodsHigh[0].DocId, 'ITM14', update20Food.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 20 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+20)
        }).then(() => {});
      } else {
        this.senddata.insertNewFoodmp(this.globalID, 'FOOD' + DocIdFoods20, 'ITM14', '20', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 20 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods20).set({
          ItemId: "ITM14",
          Amount: 20,
          Used: 0,
          Id: 'FOOD' + DocIdFoods20
        }).then(() => {});
      }
      // console.log(this.foodsHigh);
    }, error => {});
  }
  addFood10() {
    var DocIdFoods10 = this.newTime() + 1;
    var update10Food = 10;
    this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(dataSell => {
      this.foodsHigh = JSON.parse(dataSell);
      if (this.foodsHigh.length > 0) {
        this.senddata.insertNewFoodmp(this.globalID, this.foodsHigh[0].DocId, 'ITM14', update10Food.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 10 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+10)
        }).then(() => {});
      } else {
        this.senddata.insertNewFoodmp(this.globalID, 'FOOD' + DocIdFoods10, 'ITM14', '10', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 10 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods10).set({
          ItemId: "ITM14",
          Amount: 10,
          Used: 0,
          Id: 'FOOD' + DocIdFoods10
        }).then(() => {});
      }
      // console.log(this.foodsHigh);
    }, error => {});
  }
  addFood1() {
    var DocIdFoods1 = this.newTime() + 1;
    var update1Food = 1;
    this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(dataSell => {
      this.foodsHigh = JSON.parse(dataSell);
      if (this.foodsHigh.length > 0) {
        this.senddata.insertNewFoodmp(this.globalID, this.foodsHigh[0].DocId, 'ITM14', update1Food.toString(), JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("updating 1 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldValue.increment(+1)
        }).then(() => {});
      } else {
        this.senddata.insertNewFoodmp(this.globalID, 'FOOD' + DocIdFoods1, 'ITM14', '1', JSON.stringify({
          uid: this.globalID
        })).subscribe(resp => {
          // console.log("inserting 1 data food...", resp);
        });
        this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods1).set({
          ItemId: "ITM14",
          Amount: 1,
          Used: 0,
          Id: 'FOOD' + DocIdFoods1
        }).then(() => {});
      }
      // console.log(this.foodsHigh);
    }, error => {});
  }
  openDialog(msg) {}
  alertWithdraw() {
    var _this24 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this24.alertController.create({
        header: 'Congratulation !',
        message: 'Now you can Withdraw, check your profile.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  alertWaiting() {
    var _this25 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this25.alertController.create({
        header: 'File has uploaded !',
        message: 'Thank you.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  showAlert(header, message) {
    var _this26 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this26.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
  getNewAddressmp() {
    this.senddata.getNewAddressmp(this.globalID).subscribe(owner_alamat => {
      this.owner_alamat = JSON.parse(owner_alamat);
      console.log(this.owner_alamat);
    });
  }
  inputDescription(event) {
    const query = event.target.value;
    localStorage.setItem("description", query);
    const setdescription = localStorage.getItem("description");
    this.getdescription = setdescription;
  }
  inputAddress(event) {
    const query = event.target.value;
    localStorage.setItem("alamat", query);
    const setaddress = localStorage.getItem("alamat");
    this.getaddress = setaddress;
  }
  addAddress(event) {
    const query = event.target.value;
    localStorage.setItem("alamat", query);
    const setaddress = localStorage.getItem("alamat");
    this.getaddress = setaddress;
  }
  addName(event) {
    const query = event.target.value;
    localStorage.setItem("nama", query);
    const setnama = localStorage.getItem("nama");
    this.getnama = setnama;
  }
  addPhone(event) {
    const query = event.target.value;
    localStorage.setItem("phone", query);
    const setphone = localStorage.getItem("phone");
    this.getphone = setphone;
  }
  addNationality(event) {
    const query = event.target.value;
    localStorage.setItem("nationality", query);
    const setnationality = localStorage.getItem("nationality");
    this.getnationality = setnationality;
  }
  addNewAddressmp() {
    var _this27 = this;
    this.senddata.setNewAddressmp(this.globalID, this.getnama, this.getaddress, this.getphone, this.getnationality).subscribe( /*#__PURE__*/function () {
      var _ref19 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const loading = yield _this27.loadingController.create();
        yield loading.present();
        _this27.getNewAddressmp();
        loading.dismiss();
      });
      return function (_x18) {
        return _ref19.apply(this, arguments);
      };
    }());
  }
  setNewAddress(nm_alamat, owner_alamat) {
    var _this28 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const activeAlamat = localStorage.setItem("activeAlamat", nm_alamat);
      localStorage.setItem("nama", owner_alamat);
      const loading = yield _this28.loadingController.create();
      yield loading.present();
      _this28.activeAlamat = localStorage.getItem("activeAlamat");
      const setnama = localStorage.getItem("nama");
      _this28.getnama = setnama;
      console.log("activeAlamat", _this28.activeAlamat);
      loading.dismiss();
    })();
  }
  setColor(query) {
    var _this29 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const color = localStorage.setItem("color", query);
      const loading = yield _this29.loadingController.create();
      yield loading.present();
      _this29.color = localStorage.getItem("color");
      loading.dismiss();
    })();
  }
  setSize(query) {
    var _this30 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const chooseUkuran = localStorage.setItem("chooseUkuran", query);
      const loading = yield _this30.loadingController.create();
      yield loading.present();
      _this30.chooseUkuran = localStorage.getItem("chooseUkuran");
      loading.dismiss();
    })();
  }
  setAlamat(query) {
    var _this31 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alamat = localStorage.setItem("alamat", query);
      const loading = yield _this31.loadingController.create();
      yield loading.present();
      _this31.alamat = localStorage.getItem("alamat");
      loading.dismiss();
    })();
  }
  inputPostalCode(event) {
    const query = event.target.value;
    this.postal_id = localStorage.setItem("kode_pos", query);
  }
  searchAddress(event) {
    const query = event.target.value;
    this.senddata.getOngkirmp(query).subscribe(data => {
      if (data) {
        this.searchResults = JSON.parse(data);
        const rajaongkir = this.searchResults.rajaongkir;
        const results = rajaongkir.results;
        const cost = results[0];
        const resultCost = cost.costs;
        this.resultCost = resultCost;
        console.log(this.resultCost);
        for (let i in this.resultCost) {
          const viewCost = this.resultCost[i].cost;
          const actualCost = viewCost[0].value;
          console.log(actualCost);
          this.cities = localStorage.setItem("kota", query);
        }
      } else {
        this.searchResults = [];
        console.log(this.searchResults);
      }
    });
  }
  chooseKurir(service, cost, description, etd) {
    const kurir = localStorage.setItem(service, cost);
    localStorage.setItem("chooseKurir", JSON.stringify({
      "service": service,
      "cost": cost,
      "description": description,
      "etd": etd
    }));
    this.kurir = localStorage.getItem(service);
    const parsedKurir = Number(this.kurir);
    const parsedCartPrice = Number(this.cartPrice); // Assuming this.cartPrice is a string, parse it as a number
    this.actualcartPrice = parsedKurir + parsedCartPrice;
    console.log(this.actualcartPrice);
    const chooseKurirData = localStorage.getItem("chooseKurir");
    if (chooseKurirData) {
      const chooseKurir = JSON.parse(chooseKurirData);
      // Now you can access the properties of chooseKurir object
      this.service = chooseKurir.service;
      this.cost = chooseKurir.cost;
      this.description = chooseKurir.description;
      this.etd = chooseKurir.etd;
      console.log("activeAlamat", this.activeAlamat);
      // Do something with the retrieved data
    } else {
      // "chooseKurir" data is not available in localStorage
    }
    this.cartStatus = 1;
  }
  addJaketsMetalicana(ordersID, globalID, product_id) {
    var DocIdJakets = this.newTime();
    var updateJakets = 1;
    this.getdescription = localStorage.getItem("description");
    this.getaddress = localStorage.getItem("alamat");
    this.postal_id = localStorage.getItem("kode_pos");
    this.cities = localStorage.getItem("kota");
    if (product_id == 17) {
      this.codeHoodie = "HMTL";
      this.ItemIdJaket = "ITM13";
    } else if (product_id == 18) {
      this.codeHoodie = "HMER";
      this.ItemIdJaket = "ITM1";
    } else if (product_id == 19) {
      this.codeHoodie = "HRTR";
      this.ItemIdJaket = "ITM11";
    }
    this.senddata.getselljaketsUserownedmp(globalID).subscribe(dataSell => {
      this.jaketsHigh = JSON.parse(dataSell);
      const qrCodeData = {
        ItemId: this.ItemIdJaket,
        QrCodeData: {
          UID: globalID,
          Claimmed: false,
          CreatedAt: this.newTime()
        },
        Id: this.codeHoodie + DocIdJakets
      };
      const qrCodeDataString = JSON.stringify(qrCodeData);
      qrcode__WEBPACK_IMPORTED_MODULE_8__.toDataURL(qrCodeDataString, (err, qrCodeUrl) => {
        if (err) {
          console.error(err);
          return;
        }
        // The `qrCodeUrl` variable now contains the data URL of the generated QR code image
        // console.log(qrCodeUrl);
        this.senddata.insertNewJaketMetalicanamp(ordersID, globalID, this.codeHoodie + DocIdJakets, this.ItemIdJaket, updateJakets.toString(), JSON.stringify({
          uid: globalID
        }), qrCodeUrl.toString()).subscribe(resp => {
          // console.log("updating 1 data food...", resp);
        });
        this.fs.collection('Items/' + globalID + '/Fashions').doc(this.codeHoodie + DocIdJakets).set({
          ItemId: this.ItemIdJaket,
          QrCodeData: {
            UID: globalID,
            Claimmed: false,
            CreatedAt: this.newTime()
          },
          QrCodeUrl: qrCodeUrl,
          Size: this.chooseUkuran,
          Color: this.color,
          Description: this.getdescription,
          Address: this.getaddress,
          PostalID: this.postal_id,
          City: this.cities,
          Id: this.codeHoodie + DocIdJakets,
          Price: this.actualcartPrice
        }).then(() => {});
        // console.log(this.jaketsHigh);
      });
    }, error => {});
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ToastController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_12__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_7__.SendData
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__.Auth
}, {
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.SwPush
}]), _class);
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewEncapsulation.None,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], HomePage);


/***/ }),

/***/ 31821:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
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

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\r\n  <!-- Header -->\r\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\r\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\r\n      <!-- Logo -->\r\n      <a color=\"dark\" href=\"/tabs/home\">\r\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n      </a>\r\n      <!-- Desktop Menu Actions -->\r\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\r\n          <!-- Mobile Logo / Menu Close -->\r\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\r\n            <!-- Mobile Logo -->\r\n            <a color=\"dark\" href=\"/tabs/home\">\r\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n            </a>\r\n          </div>\r\n          <!-- Primary Nav -->\r\n          <nav class=\"navbar w-full\">\r\n            <ul class=\"flex flex-col lg:flex-row\">\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/home\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\r\n                  <li>\r\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- <li>\r\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\r\n                    </a>\r\n                  </li> -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <!-- Mobile Connect Wallet / Socials -->\r\n          <!-- Actions -->\r\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\r\n            <!-- hatching -->\r\n            <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n            </button> -->\r\n\r\n            <!-- progress -->\r\n            <button *ngIf=\"descSession != ''\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"progress\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\r\n                <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\r\n              </svg>\r\n            </button>\r\n\r\n            <!-- cart -->\r\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <g>\r\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                </g>\r\n              </svg>\r\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n            </button>\r\n            \r\n            <!-- Profile -->\r\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n                <ion-icon name=\"log-in-outline\"></ion-icon>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                  </svg>\r\n                </button>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                  <div>\r\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                    <div class=\"flex items-center mt-2\">\r\n                      <!-- Default Progressbar with 50 percent -->\r\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n                </a>\r\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Mobile Menu Actions -->\r\n        <div class=\"ml-auto flex lg:hidden\">\r\n          <!-- hatching -->\r\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n          </button> -->\r\n\r\n          <!-- progress -->\r\n          <button *ngIf=\"descSession != ''\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\r\n              <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\r\n            </svg>\r\n          </button>\r\n\r\n          <!-- cart -->\r\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n              <g>\r\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n              </g>\r\n            </svg>\r\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n          </button>\r\n          \r\n          <!-- Profile -->            \r\n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n              <ion-icon name=\"log-in-outline\"></ion-icon>\r\n            </button>\r\n          </div>\r\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n              </svg>\r\n            </button>\r\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f0b90b\">\r\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                <div>\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                  <div class=\"flex items-center mt-2\">\r\n                    <!-- Default Progressbar with 50 percent -->\r\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n              </a>\r\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Main -->\r\n    <!-- Hero -->\r\n    <section class=\"relative pt-20 md:pt-32 lg:h-[88vh]\">\r\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden\">\r\n        <img src=\"assets/img/gradient.jpg\" alt=\"gradient\" />\r\n      </picture>\r\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block\">\r\n        <img src=\"assets/img/gradient_dark.jpg\" alt=\"gradient dark\" />\r\n      </picture>\r\n      <div class=\"container h-full\">\r\n        <div class=\"grid h-full items-center gap-4 md:grid-cols-12\">\r\n          <div class=\"col-span-8 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4\">\r\n            <h1 class=\"text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl\">OragonX Marketplace. </h1>\r\n            <p class=\"dark:text-jacarta-200 mb-8 text-center text-lg md:text-left\"> Now you can buy or sell and make it bundle every items in oragonx here. Let's Explore...</p>\r\n            <div class=\"flex space-x-4 pb-12\">\r\n              <!-- <a [routerLink]=\"['/tabs/p2pmarket']\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-7 text-center font-semibold text-white transition-all\"> P2P Market </a> -->\r\n              <a class=\"bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-7 text-center font-semibold text-white transition-all\"> P2P Market </a>\r\n              <!-- <a class=\"text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-7 text-center font-semibold transition-all hover:text-white\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\"> Gatcha </a> -->\r\n              <a class=\"text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-7 text-center font-semibold transition-all hover:text-white\" aria-label=\"gatcha\"> Gatcha </a>\r\n            </div>\r\n          </div>\r\n          <!-- Hero image -->\r\n          <div class=\"col-span-4 xl:col-span-8\">\r\n            <div class=\"relative text-center md:pl-8 md:text-right\">\r\n              <svg x=\"0\" y=\"0\" viewBox=\"0 0 250 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]\">\r\n                <defs>\r\n                  <clipPath id=\"clipping\" clipPathUnits=\"userSpaceOnUse\">\r\n                    <path d=\"M 0, 100 C 0, 17.000000000000004 17.000000000000004, 0 100, 0 S 200, 17.000000000000004 200, 100 183, 200 100, 200 0, 183 0, 100\" fill=\"#9446ED\"></path>\r\n                  </clipPath>\r\n                </defs>\r\n                <g clip-path=\"url(#clipping)\">\r\n                  <!-- Bg image -->\r\n                  <image href=\"assets/img/hero/hero.jpg\" width=\"200\" height=\"200\" clip-path=\"url(#clipping)\" />\r\n                </g>\r\n              </svg>\r\n              <img src=\"assets/img/hero/3D_elements.png\" alt=\"\" class=\"animate-fly absolute top-0 md:-right-[10%]\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- end hero -->\r\n\r\n    <!-- Available Eggs -->\r\n    <section class=\"relative\" style=\"margin-top: 5rem;\">\r\n      <div class=\"container\">\r\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\r\n          Eggs Available\r\n        </h2>\r\n        <div class=\"flex\">\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/MERU_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Meru</div>\r\n          </a>\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/RITRA_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Ritra</div>\r\n          </a>\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/AKH_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Akh</div>\r\n          </a>\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/FENG_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Feng</div>\r\n          </a>\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/METALICANA_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Metalicana</div>\r\n          </a>\r\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\r\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\r\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\r\n                <img src=\"assets/img/eggs/DORCH_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </span>\r\n              <span class=\"font-bold\">0</span>\r\n            </div>\r\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Dorch</div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- End Available Eggs -->\r\n\r\n    <!-- Store -->\r\n    <section class=\"relative pt-20\">\r\n      <div class=\"container\">\r\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\r\n          Official Store\r\n        </h2>\r\n        <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n          <div *ngFor=\"let s of storedata\">\r\n            <article>\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                  <a *ngIf=\"s.id_product == '17' || s.id_product == '18' || s.id_product == '19';else items\" (click)=\"getstoredetail(s.id_product)\" data-bs-toggle=\"modal\" data-bs-target=\"#detailModal\">\r\n                    <img src=\"assets/img/store/{{s.gambar}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  </a>\r\n                  <ng-template>\r\n                    <a (click)=\"getstoredetail(s.id_product)\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\">\r\n                      <img src=\"assets/img/store/{{s.gambar}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                    </a>\r\n                  </ng-template>\r\n                </figure>\r\n                <div class=\"mt-7 flex items-center justify-between\">\r\n                  <a (click)=\"getstoredetail(s.id_product)\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\">\r\n                    <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.nama}}</span>\r\n                  </a>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.deskripsi}}</span>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Rp {{s.harga | number}}</h4>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">QTY {{s.stock}}</h4>\r\n                </div>\r\n                <div class=\"mt-8 flex items-center justify-between\">\r\n                  <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\"> Buy</a> -->\r\n                  <a (click)=\"setstorecart(s.id_product, globalID, wallets)\" class=\"group flex items-center\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                      <g>\r\n                        <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                        <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                        <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- End Store -->\r\n\r\n    <!-- P2P Market -->\r\n    <section class=\"relative pt-20 md:pt-32\">\r\n      <div class=\"container\">\r\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\r\n          P2P Market\r\n        </h2>\r\n        <p class=\"font-display block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white text-center\">(Coming Soon)</p>\r\n        <!-- Grid -->\r\n        <div *ngIf=\"connect == 'true'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n          <div *ngFor=\"let datas of dragons\">\r\n            <article>\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                  <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                    <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                    <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                    <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                    <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                    <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                    <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    </span>\r\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                </figure>\r\n                <div class=\"mt-7 flex items-center justify-between\">\r\n                  <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,8)}}</span>\r\n                  <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,8)}}</span>\r\n                  <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,8)}}</span>\r\n                  <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,8)}}</span>\r\n                  <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,8)}}</span>\r\n                  <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId.substr(0,8)}}</span>\r\n                  <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                    <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                      <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                      <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                      <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                        <div class=\"mb-2 flex items-center justify-between\">\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                        <div class=\"mb-2 flex items-center justify-between\">\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                        <div class=\"mb-2 flex items-center justify-between\">\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\r\n                  </span>\r\n                </div>\r\n                <div class=\"mt-8 flex items-center justify-between\">\r\n                  <button (click)=\"getdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowDirectDragonModal\"> Buy </button>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <!-- end grid -->\r\n      </div>\r\n    </section>\r\n    <!-- End P2P Market -->\r\n\r\n    <!-- Chart Point -->\r\n    <section class=\"relative pt-20 md:pt-32\">\r\n      <div class=\"container\">\r\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\r\n          Chart Point\r\n        </h2>\r\n        <p class=\"font-display block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white text-center\">(Coming Soon)</p>\r\n        <!-- Grid -->\r\n        <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1\" style=\"gap: 1.2rem\">\r\n          <div class=\"col-md-6\">\r\n            <!-- <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h3>Line Series</h3>\r\n              </div>\r\n              <div style=\"width:100%;\">\r\n                <canvas id=\"myChart\" width=\"700\" height=\"250\" #mychart></canvas>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <!-- end grid -->\r\n      </div>\r\n    </section>\r\n    <!-- End chart point -->\r\n\r\n    <!-- Recently Sold -->\r\n    <section class=\"relative pt-20 md:pt-32\">\r\n      <div class=\"container\">\r\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\r\n          Recently Sold\r\n        </h2>\r\n        <p class=\"font-display block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white text-center\">(Coming Soon)</p>     \r\n        <div class=\"scrollbar-custom overflow-x-auto\">\r\n          <div *ngIf=\"connect == 'true'\" role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n            <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n              <div class=\"w-[28%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Collection</span>\r\n              </div>\r\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Prices</span>\r\n              </div>\r\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Item ID</span>\r\n              </div>\r\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Hash</span>\r\n              </div>\r\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Owners</span>\r\n              </div>\r\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\r\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Dates</span>\r\n              </div>\r\n            </div>\r\n            <a *ngFor=\"let r of trxhistoryall;let i = index\" (click)=\"trxhistoryid(r.id)\" data-bs-toggle=\"modal\" data-bs-target=\"#recentlySoldModal\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[28%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                <span class=\"mr-2 lg:mr-4\">{{i+1}}</span>\r\n                <figure *ngIf=\"r.item == 'Package-Official-Store'\" class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                  <img src=\"https://marketplace.oragon.network/assets/img/store/rare4.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                      <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                    </svg>\r\n                  </div>\r\n                </figure>\r\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                  {{r.item}}\r\n                  <small *ngIf=\"r.id_product == '16'\" class=\"dark:text-jacarta-400 text-sm\">DORCH EGG</small>\r\n                  <small *ngIf=\"r.id_product == '15'\" class=\"dark:text-jacarta-400 text-sm\">METALICANA EGG</small>\r\n                  <small *ngIf=\"r.id_product == '14'\" class=\"dark:text-jacarta-400 text-sm\">FOODS</small>\r\n                  <small *ngIf=\"r.id_product == '13'\" class=\"dark:text-jacarta-400 text-sm\">GREEN BATTERY</small>\r\n                  <small *ngIf=\"r.id_product == '12'\" class=\"dark:text-jacarta-400 text-sm\">BLUE BATTERY</small>\r\n                  <small *ngIf=\"r.id_product == '11'\" class=\"dark:text-jacarta-400 text-sm\">RED BATTERY</small>\r\n                  <small *ngIf=\"r.id_product == '10'\" class=\"dark:text-jacarta-400 text-sm\">AKH + MERU + RITRA</small>\r\n                  <small *ngIf=\"r.id_product == '9'\" class=\"dark:text-jacarta-400 text-sm\">AKH + FENG + MERU</small>\r\n                  <small *ngIf=\"r.id_product == '8'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG + MERU</small>\r\n                  <small *ngIf=\"r.id_product == '7'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG + AKH</small>\r\n                  <small *ngIf=\"r.id_product == '6'\" class=\"dark:text-jacarta-400 text-sm\">AKH + MERU</small>\r\n                  <small *ngIf=\"r.id_product == '5'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG</small>\r\n                  <small *ngIf=\"r.id_product == '4'\" class=\"dark:text-jacarta-400 text-sm\">FENG</small>\r\n                  <small *ngIf=\"r.id_product == '3'\" class=\"dark:text-jacarta-400 text-sm\">RITRA</small>\r\n                  <small *ngIf=\"r.id_product == '2'\" class=\"dark:text-jacarta-400 text-sm\">MERU</small>\r\n                  <small *ngIf=\"r.id_product == '1'\" class=\"dark:text-jacarta-400 text-sm\">AKH</small>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"r.type == 'ORGN'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n              </div>\r\n              <div *ngIf=\"r.type == 'BNB'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n              </div>\r\n              <div *ngIf=\"r.type == 'BUSD'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f0b90b\">\r\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                <span class=\"text-sm font-medium tracking-tight\">{{r.itemid}}</span>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                <a href=\"https://bscscan.com/tx/{{r.tx_hash}}\" target=\"_blank\">\r\n                  <span class=\"text-green\">{{r.tx_hash.substr(0,20)}}...</span>\r\n                </a>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                <span>{{r.userid.substr(0,20)}}...</span>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                <span>{{r.date}}</span>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- End recently sold -->\r\n    \r\n    <!-- Gatcha Modal-->\r\n    <div class=\"modal fade\" id=\"gatchaModal\" tabindex=\"-1\" aria-labelledby=\"gatchaModalLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\r\n      <div class=\"modal-dialog max-w-lg\">\r\n        <div class=\"modal-content\" style=\"padding-bottom: 1.5rem\">\r\n          <div class=\"modal-header\">\r\n            <!-- <h5 class=\"modal-title\" id=\"gatchaModalLabel\">Get Gatcha Package</h5> -->\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <section class=\"gatcha\">\r\n            <div class=\"container\">\r\n              <h2 class=\"font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white txt-head-modal-gatcha\"> Get Gatcha Package </h2>\r\n              <div class=\"article-content mx-auto max-w-[48.125rem]\">\r\n                <section>\r\n                  <!-- Grid -->\r\n                  <div class=\"grid grid-cols-2 gap-[0rem] md:grid-cols-2 lg:grid-cols-2\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[0rem] transition-shadow hover:shadow-lg text-center\">\r\n                        <figure>\r\n                          <a href=\"#\">\r\n                            <img src=\"assets/img/treasure_box10x.png\" alt=\"item 1\" loading=\"lazy\" id=\"trs-img\" />\r\n                          </a>\r\n                        </figure>\r\n                        <div class=\"items-center justify-between text-center\">\r\n                          <a href=\"#\">\r\n                            <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">$100</span>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <span class=\"dark:text-jacarta-100 text-jacarta-700\">10x Items</span>\r\n                          <br>\r\n                          <br>\r\n                          <span class=\"dark:text-jacarta-300\">{{latesttenOragon}} Orgn</span>\r\n                        </div>\r\n                        <div class=\"mt-8 items-center justify-between text-center\">\r\n                          <button type=\"button\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyGatchaTenModal\"> Buy Now </button>\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[0rem] transition-shadow hover:shadow-lg text-center\">\r\n                        <figure>\r\n                          <a href=\"#\">\r\n                            <img src=\"assets/img/treasure_box.png\" alt=\"item 1\" loading=\"lazy\" id=\"trs-img\" />\r\n                          </a>\r\n                        </figure>\r\n                        <div class=\"items-center justify-between text-center\">\r\n                          <a href=\"#\">\r\n                            <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">$12</span>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <span class=\"dark:text-jacarta-100 text-jacarta-700\">1x Item</span>\r\n                          <br>\r\n                          <br>\r\n                          <span class=\"dark:text-jacarta-300\">{{latestoneOragon}} Orgn</span>\r\n                        </div>\r\n                        <div class=\"mt-8 items-center justify-between text-center\">\r\n                          <button type=\"button\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyGatchaOneModal\"> Buy Now </button>\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </section>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Buy Gatcha 10X Modal -->\r\n    <div class=\"modal fade\" id=\"buyGatchaTenModal\" tabindex=\"-1\" aria-labelledby=\"buyGatchaTenLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content bid\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"buyGatchaTenLabel\">Gatcha 10X</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Price</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border\">\r\n              <div class=\"border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2\">\r\n                <span>\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 h-5 w-5\">\r\n                    <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\r\n                    <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\r\n                    <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"font-display text-jacarta-700 text-sm\">ORGN</span>\r\n              </div>\r\n              <input type=\"text\" class=\"focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset\" placeholder=\"Amount\" disabled value=\"{{latesttenOragon}}\" style=\"color: #212121;\" />\r\n              <div class=\"bg-jacarta-700 border-jacarta-100 flex flex-1 justify-end self-stretch border-l\">\r\n                <span class=\"self-center px-2 text-sm\">$100</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-right\">\r\n              <span class=\"dark:text-jacarta-400 text-sm\">Balance: {{balanceORGNPlayers}} ORGN</span>\r\n            </div>\r\n            <!-- Terms -->\r\n            <div class=\"mt-4 flex items-center space-x-2\">\r\n              <input type=\"checkbox\" id=\"terms\" class=\"checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0\" />\r\n              <label for=\"terms\" class=\"dark:text-jacarta-200 text-sm\">By checking this box, I agree to OragonX <a href=\"#\" class=\"text-accent\">Terms of Service</a>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_first()\" *ngIf=\"connect == true && state_buy == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay 1 of 2 </button>\r\n              <button (click)=\"pay_second(10)\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay 2 of 2 </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Buy Gatcha 1X Modal -->\r\n    <div class=\"modal fade\" id=\"buyGatchaOneModal\" tabindex=\"-1\" aria-labelledby=\"buyGatchaOneLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content bid\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"buyGatchaOneLabel\">Gatcha 1X</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Price</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border\">\r\n              <div class=\"border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2\">\r\n                <span>\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 h-5 w-5\">\r\n                    <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\r\n                    <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\r\n                    <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"font-display text-jacarta-700 text-sm\">ORGN</span>\r\n              </div>\r\n              <input type=\"text\" class=\"focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset\" placeholder=\"Amount\" disabled value=\"{{latestoneOragon}}\" style=\"color: #212121;\" />\r\n              <div class=\"bg-jacarta-700 border-jacarta-100 flex flex-1 justify-end self-stretch border-l\">\r\n                <span class=\"self-center px-2 text-sm\">$12</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-right\">\r\n              <span class=\"dark:text-jacarta-400 text-sm\">Balance: {{balanceORGNPlayers}} ORGN</span>\r\n            </div>\r\n            <!-- Terms -->\r\n            <div class=\"mt-4 flex items-center space-x-2\">\r\n              <input type=\"checkbox\" id=\"terms\" class=\"checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0\" />\r\n              <label for=\"terms\" class=\"dark:text-jacarta-200 text-sm\">By checking this box, I agree to OragonX <a href=\"#\" class=\"text-accent\">Terms of Service</a>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_first()\" *ngIf=\"connect == true && state_buy == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay 1 of 2 </button>\r\n              <button (click)=\"pay_second(1)\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay 2 of 2 </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Open Gatcha Modal -->\r\n    <div class=\"modal fade\" id=\"openGatchaModal\" tabindex=\"-1\" aria-labelledby=\"openGatchaLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content bid\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"openGatchaLabel\">Open Your Gatcha</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Total Gatcha {{count_roulette}}</span>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"rolling()\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Open Gatcha </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Buy Now Modal -->\r\n    <div class=\"modal fade\" id=\"buyNowModal\" tabindex=\"-1\" aria-labelledby=\"buyNowModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"buyNowModalLabel\">Complete checkout</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/store/{{storeImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{storeDeskripsi}}</h3>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{storePrice}}</div>\r\n              </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"selectedCrypto == 'ORGN'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceORGN}} ORGN</span>\r\n                </span>\r\n                <span *ngIf=\"selectedCrypto == 'BNB'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBNB}} BNB</span>\r\n                </span>\r\n                <span *ngIf=\"selectedCrypto == 'BUSD'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBUSD}} BUSD</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">${{storePrice}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Select payment currency</span>\r\n            </div>\r\n            <div (click)=\"selectedCurrency(storeID, 1)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n              </figure>\r\n              <div>\r\n                <span *ngIf=\"selectedCrypto == 'ORGN';else unselectedORGN\">\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">OragonX</h3>\r\n                </span>\r\n                <ng-template #unselectedORGN>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">OragonX</h3>\r\n                </ng-template>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"selectedCrypto == 'ORGN';else unselectedORGN2\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green\">{{storePriceORGN}} ORGN</span>\r\n                </span>\r\n                <ng-template #unselectedORGN2>\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceORGN}} ORGN</span>\r\n                  </span>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n            <div (click)=\"selectedCurrency(storeID, 2)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  <g fill=\"#f3ba2f\">\r\n                    <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                  </g>\r\n                </svg>\r\n              </figure>\r\n              <div>\r\n                <span *ngIf=\"selectedCrypto == 'BNB';else unselectedBNB\">\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">Binance Smart Chain</h3>\r\n                </span>\r\n                <ng-template #unselectedBNB>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">Binance Smart Chain</h3>\r\n                </ng-template>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"selectedCrypto == 'BNB';else unselectedBNB2\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green\">{{storePriceBNB}} BNB</span>\r\n                </span>\r\n                <ng-template #unselectedBNB2>\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBNB}} BNB</span>\r\n                  </span>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n            <div (click)=\"selectedCurrency(storeID, 3)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  <g fill=\"#f0b90b\">\r\n                    <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                  </g>\r\n                </svg>\r\n              </figure>\r\n              <div>\r\n                <span *ngIf=\"selectedCrypto == 'BUSD';else unselectedBUSD\">\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">Binance USD</h3>\r\n                </span>\r\n                <ng-template #unselectedBUSD>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">Binance USD</h3>\r\n                </ng-template>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"selectedCrypto == 'BUSD';else unselectedBUSD2\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green\">{{storePriceBUSD}} BUSD</span>\r\n                </span>\r\n                <ng-template #unselectedBUSD2>\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBUSD}} BUSD</span>\r\n                  </span>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_directStoreORGN()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'ORGN'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with ORGN</button>\r\n              <button (click)=\"pay_directStoreBNB()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'BNB'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with Binance Smart Chain</button>\r\n              <button (click)=\"pay_directStoreBUSD()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'BUSD'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with Binance USD</button>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-green text-sm p-6 text-center\">Don't close this view before finishing payment !</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cart Multi Modal -->\r\n    <div *ngIf=\"cartCount > 0\" class=\"modal fade\" id=\"cartmultiModal\" tabindex=\"-1\" aria-labelledby=\"cartmultiModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"cartmultiModalLabel\">Cart</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div *ngFor=\"let c of storecart\">\r\n              <div *ngIf=\"c.active == '0';else activecart\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\" style=\"opacity: 0.5;\">\r\n                <div class=\"ml-auto\">\r\n                  <input type=\"checkbox\" class=\"p-3 rounded-2lg\" (click)=\"setActive(c.id_cart)\" style=\"margin: 1rem;\">\r\n                </div>\r\n                <figure class=\"mr-5 self-start\" style=\"width: 40%;\">\r\n                  <img *ngIf=\"color == '1'\" src=\"assets/img/store/{{c.gambar}}\" alt=\"color 1\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '2'\" src=\"assets/img/store/hoodie-meru-depan.jpg\" alt=\"color 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '3'\" src=\"assets/img/store/hoodie-metalicana-depan.jpg\" alt=\"color 3\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <div class=\"pt-5 items-center\">\r\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                      <button (click)=\"setColor(1)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-auto\" style=\"background-color: #fff;border-radius: 3px;\"></button>\r\n                      <button (click)=\"setColor(2)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"background-color: #119b75;border-radius: 3px;\"></button>\r\n                      <button (click)=\"setColor(3)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"border-radius: 3px;\"></button>\r\n                    </span>\r\n                  </div>\r\n                </figure>\r\n                <div>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{c.deskripsi}}</h3>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{c.nama}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{c.harga | number}}.00</div>\r\n                </div>\r\n              </div>\r\n              <ng-template #activecart>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                  <div class=\"ml-auto\">\r\n                    <input type=\"checkbox\" checked class=\"p-3 rounded-2lg\" (click)=\"setActive(c.id_cart)\" style=\"margin: 1rem;\">\r\n                  </div>\r\n                  <figure class=\"mr-5 self-start\" style=\"width: 40%;\">\r\n                    <img *ngIf=\"color == '1'\" src=\"assets/img/store/{{c.gambar}}\" alt=\"color 1\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                    <img *ngIf=\"color == '2'\" src=\"assets/img/store/hoodie-meru-depan.jpg\" alt=\"color 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                    <img *ngIf=\"color == '3'\" src=\"assets/img/store/hoodie-metalicana-depan.jpg\" alt=\"color 3\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                    <div class=\"pt-5 items-center\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <button (click)=\"setColor(1)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-auto\" style=\"background-color: #fff;border-radius: 3px;\"></button>\r\n                        <button (click)=\"setColor(2)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"background-color: #119b75;border-radius: 3px;\"></button>\r\n                        <button (click)=\"setColor(3)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"border-radius: 3px;\"></button>\r\n                      </span>\r\n                    </div>\r\n                  </figure>\r\n                  <div>\r\n                    <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{c.deskripsi}}</h3>\r\n                    <div class=\"flex flex-wrap items-center\">\r\n                      <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{c.nama}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ml-auto\">\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{c.harga | number}}.00</div>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <div class=\"pt-5 items-center\">\r\n              <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                <p class=\"hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all\" style=\"border-radius: 3px;\">Pilih opsi warna dan ukuran</p>\r\n                <button *ngIf=\"color == '1' || chooseUkuran == '1';else sizecolor\" data-bs-toggle=\"modal\" data-bs-target=\"#cartOptionModal\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-auto\" style=\"border-radius: 3px;\">Hitam, L</button>\r\n                <ng-template #sizecolor>\r\n                  <button data-bs-toggle=\"modal\" data-bs-target=\"#cartOptionModal\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-auto\" style=\"border-radius: 3px;\">\r\n                    <span *ngIf=\"color == '1'\">Hitam, </span>\r\n                    <span *ngIf=\"color == '2'\">Merah, </span>\r\n                    <span *ngIf=\"chooseUkuran == '1'\">L</span>\r\n                    <span *ngIf=\"chooseUkuran == '2'\">XL</span>\r\n                  </button>\r\n                </ng-template>\r\n              </span>\r\n            </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-3\" style=\"width: 100%;\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Keterangan</span>\r\n            </div>\r\n            <textarea type=\"text\" (keyup)=\"inputDescription($event)\" id=\"input_description\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter description\" required></textarea>\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Alamat Lengkap</span>\r\n            </div>\r\n            <div *ngFor=\"let oa of owner_alamat\">\r\n              <div *ngIf=\"activeAlamat == oa.nm_alamat;else noactiveAlamat\" class=\"rounded-2.5xl py-3 px-3 mb-2\">\r\n                <div class=\"mt-2 text-sm\">\r\n                  <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1 text-green\">{{oa.owner_alamat}}</span>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.nm_alamat}}</h4>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.phone_alamat}}</h4>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.national_alamat}}</h4>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\"></span>\r\n              <div class=\"ml-auto\">\r\n                <button class=\"text-green transition-all ml-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#addAddressModal\" aria-label=\"addAddress\">Ganti alamat utama</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Ongkos kirim</span>\r\n            </div>\r\n            <div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-b py-4\">\r\n                <div>\r\n                  <h3 class=\"text-green font-medium tracking-tight\">{{service}}</h3>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{description}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"text-green font-medium tracking-tight\">Rp {{cost | number}}</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">{{etd}} hari</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"mt-7 flex items-center justify-between\">\r\n                <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">Transfer Bank</span>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Bank BCA</span>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <h4 class=\"text-green mr-1\">4972990519</h4>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <h4 class=\"text-white mr-1\">PT Oragon Teknologi Indonesia</h4>\r\n              </div>\r\n            </div>\r\n            <!-- </span> -->\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer pt-5\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_cartmultiStore(cartID, globalID, wallets, color)\" *ngIf=\"state_buy == 2 && isLogin == '' && cartStatus == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Items Rp {{actualcartPrice | number}}.00</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Option Modal -->\r\n    <div class=\"modal fade\" id=\"cartOptionModal\" tabindex=\"-1\" aria-labelledby=\"cartOptionModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"cartOptionModalLabel\">Option</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                <figure class=\"mr-5 self-start\">\r\n                  <img *ngIf=\"color == '1'\" src=\"assets/img/store/{{cartImg}}\" alt=\"color 1\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '2'\" src=\"assets/img/store/hoodie-meru-depan.jpg\" alt=\"color 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '3'\" src=\"assets/img/store/hoodie-metalicana-depan.jpg\" alt=\"color 3\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                </figure>\r\n                <div>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{cartDeskripsi}}</h3>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{cartName}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{cartPrice | number}}.00</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 100%;\">\r\n            <div class=\"modal-body p-6\">\r\n              <div class=\"mb-2 flex items-center justify-between\">\r\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Pilihan warna</span>\r\n                <span *ngIf=\"color == '1'\" class=\"ml-auto\">Hitam</span>\r\n                <span *ngIf=\"color == '2'\" class=\"ml-auto\">Merah</span>\r\n              </div>\r\n              <div class=\"grid\" style=\"grid-template-columns: repeat(3, minmax(0, 1fr));\">\r\n                <div *ngFor=\"let w of warna\">\r\n                  <article>\r\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                        <a (click)=\"setColor(w.id_warna)\">\r\n                          <img src=\"assets/img/store/{{w.img_warna}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        </a>\r\n                      </figure>\r\n                      <div class=\"items-center\">\r\n                        <div class=\"items-center pt-5\">\r\n                          <span class=\"text-center dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{w.nm_warna}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </article>\r\n                </div>\r\n              </div>\r\n              <div class=\"mb-2 flex items-center justify-between\">\r\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Pilihan ukuran</span>\r\n                <span *ngIf=\"chooseUkuran == '1'\" class=\"ml-auto\">L</span>\r\n                <span *ngIf=\"chooseUkuran == '2'\" class=\"ml-auto\">XL</span>\r\n              </div>\r\n              <div class=\"grid\" style=\"grid-template-columns: repeat(3, minmax(0, 1fr));\">\r\n                <div *ngFor=\"let u of ukuran\">\r\n                  <article>\r\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white transition-shadow hover:shadow-lg\">\r\n                      <div class=\"flex items-center justify-between\">\r\n                        <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                          <a (click)=\"setSize(u.id_ukuran)\" class=\"group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white my-1 mr-2.5\">\r\n                            <span>{{u.nm_ukuran}}</span>\r\n                          </a>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </article>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- </span> -->\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Kembali </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cart Modal -->\r\n    <div *ngIf=\"cartCount > 0\" class=\"modal fade\" id=\"cartModal\" tabindex=\"-1\" aria-labelledby=\"cartModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"cartModalLabel\">Cart</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                <figure class=\"mr-5 self-start\">\r\n                  <img *ngIf=\"color == '1'\" src=\"assets/img/store/{{cartImg}}\" alt=\"color 1\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '2'\" src=\"assets/img/store/hoodie-meru-depan.jpg\" alt=\"color 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <img *ngIf=\"color == '3'\" src=\"assets/img/store/hoodie-metalicana-depan.jpg\" alt=\"color 3\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                  <div class=\"pt-5 items-center\">\r\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                      <button (click)=\"setColor(1)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-auto\" style=\"background-color: #fff;border-radius: 3px;\"></button>\r\n                      <button (click)=\"setColor(2)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"background-color: #119b75;border-radius: 3px;\"></button>\r\n                      <button (click)=\"setColor(3)\" class=\"bg-accent hover:bg-accent-dark py-3 px-3 text-center font-semibold text-white transition-all ml-2\" style=\"border-radius: 3px;\"></button>\r\n                    </span>\r\n                  </div>\r\n                </figure>\r\n                <div>\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{cartDeskripsi}}</h3>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{cartName}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{cartPrice | number}}.00</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-3\" style=\"width: 100%;\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Alamat Lengkap</span>\r\n            </div>\r\n            <textarea *ngIf=\"getaddress != '';else inputaddress\" type=\"text\" (keyup)=\"inputAddress($event)\" id=\"input_addres\" value=\"{{getaddress}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required></textarea>\r\n            <ng-template #inputaddress>\r\n              <textarea type=\"text\" (keyup)=\"inputAddress($event)\" id=\"input_addres\" value=\"{{getaddress}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required></textarea>\r\n            </ng-template>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\"></span>\r\n              <div class=\"ml-auto\">\r\n                <button class=\"text-green transition-all ml-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#addAddressModal\" aria-label=\"addAddress\">Ganti alamat utama</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kode Pos</span>\r\n            </div>\r\n            <input type=\"text\" (keyup)=\"inputPostalCode($event)\" id=\"input_posta_code\" value=\"{{postal_id}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your postal code\" required />\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kota</span>\r\n            </div>\r\n            <input type=\"text\" (keyup)=\"searchAddress($event)\" id=\"search_addres\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your city\" required />\r\n            <div class=\"modal-body p-6\">\r\n              <div class=\"mb-2 flex items-center justify-between\">\r\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Pilihan Kurir</span>\r\n              </div>\r\n              <div *ngFor=\"let result of resultCost\">\r\n                <div (click)=\"chooseKurir(result.service, result.cost[0].value)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                  <div>\r\n                    <h3 *ngIf=\"kurir == result.cost[0].value; else nokurir\" class=\"text-green font-medium tracking-tight\">{{result.service}}</h3>\r\n                    <ng-template #nokurir>\r\n                      <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{result.service}}</h3>\r\n                    </ng-template>\r\n                    <div class=\"flex flex-wrap items-center\">\r\n                      <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{result.description}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"kurir == result.cost[0].value; else slowservie\" class=\"ml-auto\">\r\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                      <span class=\"text-green font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                    </span>\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                  </div>\r\n                  <ng-template #slowservie>\r\n                    <div class=\"ml-auto\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                      </span>\r\n                      <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{result.cost[0].value | number }}</div>\r\n                      <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                    </div>\r\n                  </ng-template>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-7 flex items-center justify-between\">\r\n                <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">Transfer Bank</span>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Bank BCA</span>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <h4 class=\"text-green mr-1\">4972990519</h4>\r\n              </div>\r\n              <div class=\"mt-2 text-sm\">\r\n                <h4 class=\"text-white mr-1\">PT Oragon Teknologi Indonesia</h4>\r\n              </div>\r\n            </div>\r\n            <!-- </span> -->\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_cartStore(cartID, globalID, wallets, color)\" *ngIf=\"state_buy == 2 && isLogin == '' && cartStatus == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Items Rp {{actualcartPrice | number}}.00</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Progress Modal -->\r\n    <div *ngIf=\"descSession != ''\" class=\"modal fade\" id=\"progressModal\" tabindex=\"-1\" aria-labelledby=\"progressModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"progressModalLabel\">Progress</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div *ngFor=\"let session of descSession\">\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                <figure class=\"mr-5 self-start\">\r\n                  <img src=\"assets/img/store/{{session.gambar}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n                </figure>\r\n                <div class=\"ml-auto\">\r\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{session.deskripsi}}</h3>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{session.nama}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{session.harga | number}}.00</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{session.harga | number}}.00</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{lengthValueSession}} Items</span>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"flex items-center whitespace-nowrap\">\r\n                  <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-3\" style=\"width: 100%;\">\r\n            <input *ngIf=\"cartPrice > 0;else emptycart\" type=\"file\" (change)=\"pay_progressStore($event, ordersID, globalID, product_id, wallets)\" id=\"file-upload\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required />\r\n            <ng-template #emptycart>\r\n              <h4 class=\"text-center text-green mr-1\">Tidak ada progress saat ini.</h4>\r\n            </ng-template>\r\n          </div>\r\n          <!-- end body -->\r\n          <!-- <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"pay_progressStore(ordersID, globalID, wallets)\" *ngIf=\"state_buy == 2 && isLogin == ''\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Confirm Now</button>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Buy Now Dragon Modal -->\r\n    <div class=\"modal fade\" id=\"buyNowDirectDragonModal\" tabindex=\"-1\" aria-labelledby=\"buyNowDirectDragonModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"buyNowDragonModalLabel\">Complete checkout</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"relative py-4\">\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM1'\">\r\n                  <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM9'\">\r\n                  <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM10'\">\r\n                  <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM11'\">\r\n                  <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM12'\">\r\n                  <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"marketp2pdragonID == 'ITM13'\">\r\n                  <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                  <span>\r\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                        </svg>\r\n                      </span>\r\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                      <ng-template #favorited>\r\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                      </ng-template>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n              </figure>\r\n              <div class=\"w-full ml-12\">\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\r\n                <h3 *ngIf=\"marketp2pdragonID == 'null'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">NULL</h3>\r\n                <span *ngIf=\"marketp2pdragonBG == 'exists'\">\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Price : {{priceRoyalty_display}} BNB</span>\r\n                  </div>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Dev Fee : {{fee_display}} BNB</span>\r\n                  </div>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Royalty : {{marketp2pdragonRoyalty}} BNB</span>\r\n                  </div>\r\n                  \r\n                </span>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{marketp2pdragonpriceUSD}}</div>\r\n              </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n              <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n              <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee & Royalty {{fee_royalty}} BNB </button>\r\n              <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{priceRoyalty_display}} BNB </button>\r\n            </div>\r\n            <!-- Rankings -->\r\n            <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\r\n              <!-- Table -->\r\n              <div class=\"scrollbar-custom overflow-hidden\">\r\n                <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Owner History</span>\r\n                    </div>\r\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Price</span>\r\n                    </div>\r\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date</span>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <a *ngFor=\"let r of dragonDetail;let i = index\" href=\"#\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                      <span class=\"mr-2 lg:mr-4\">{{i}}</span>\r\n                      <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                        <img *ngIf=\"r.ItemId == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngFor=\"let p of profile\">\r\n                            <img *ngIf=\"p.ItemId == r.itemid.substr(0,41)\" [src]=\"p.url\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                        <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                            <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                          </svg>\r\n                        </div>\r\n                      </figure>\r\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                        {{username}}\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                          <g fill=\"#f3ba2f\">\r\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </span>\r\n                      <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-white\">{{r.date | date}}</span>\r\n                    </div>\r\n                  </a> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end rankings -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Recently Sold Modal -->\r\n    <div class=\"modal fade\" id=\"recentlySoldModal\" tabindex=\"-1\" aria-labelledby=\"recentlySoldModalLabel\" aria-hidden=\"true\" style=\"overflow-x: hidden;\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"buyNowModalLabel\">Detail</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/user/1user_avatar.gif\" alt=\"collection avatar\" class=\"dark:border-jacarta-600 rounded-xl border-[5px] border-white w-10\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{historyItem}}</h3>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{historyItemId}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"historyType == 'ORGN'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} ORGN</span>\r\n                </span>\r\n                <span *ngIf=\"historyType == 'BNB'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} BNB</span>\r\n                </span>\r\n                <span *ngIf=\"historyType == 'BUSD'\" class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} BNB</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{historyAmountUSD}}</div>\r\n              </div>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n              <div class=\"ml-auto\">\r\n                <span *ngIf=\"historyType == 'ORGN'\" class=\"flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  </span>\r\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} ORGN</span>\r\n                </span>\r\n                <span *ngIf=\"historyType == 'BNB'\" class=\"flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} BNB</span>\r\n                </span>\r\n                <span *ngIf=\"historyType == 'BUSD'\" class=\"flex items-center whitespace-nowrap\">\r\n                  <span data-tippy-content=\"ETH\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} BUSD</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right\">${{historyAmountUSD}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end body -->\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <a class=\"text-accent font-display text-sm font-semibold mb-2\">{{historyDate | date}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Add Address Modal -->\r\n    <div class=\"modal fade\" id=\"addAddressModal\" tabindex=\"-1\" aria-labelledby=\"addAddressModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"addAddressModalLabel\">Tambahkan alamat baru</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"flex flex-wrap items-center\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"padding-top: 0.5vh;padding-bottom: 0.5vh;\">Pilih alamat tersedia</span>\r\n            </div>\r\n            <div *ngFor=\"let oa of owner_alamat\">\r\n              <div *ngIf=\"activeAlamat == oa.nm_alamat;else noactiveAlamat\" (click)=\"setNewAddress(oa.nm_alamat, oa.owner_alamat)\" class=\"rounded-2.5xl border border-jacarta-100 py-3 px-3 mb-2\">\r\n                <div class=\"mt-2 text-sm\">\r\n                  <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1 text-green\">{{oa.owner_alamat}}</span>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.phone_alamat}}</h4>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.national_alamat}}</h4>\r\n                </div>\r\n                <div class=\"mt-2 text-sm\">\r\n                  <h4 class=\"text-green mr-1\">{{oa.nm_alamat}}</h4>\r\n                </div>\r\n              </div>\r\n              <ng-template #noactiveAlamat>\r\n                <div (click)=\"setNewAddress(oa.nm_alamat, oa.owner_alamat)\" style=\"opacity: 0.3;\" class=\"rounded-2.5xl border border-jacarta-100 py-3 px-3 mb-2\">\r\n                  <div class=\"mt-2 text-sm\">\r\n                    <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{oa.owner_alamat}}</span>\r\n                  </div>\r\n                  <div class=\"mt-2 text-sm\">\r\n                    <h4 class=\"text-white mr-1\">{{oa.phone_alamat}}</h4>\r\n                  </div>\r\n                  <div class=\"mt-2 text-sm\">\r\n                    <h4 class=\"text-white mr-1\">{{oa.national_alamat}}</h4>\r\n                  </div>\r\n                  <div class=\"mt-2 text-sm\">\r\n                    <h4 class=\"text-white mr-1\">{{oa.nm_alamat}}</h4>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n            \r\n            <div class=\"items-center\">\r\n              <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm mt-4 text-white text-center\" style=\"padding-top: 0.5vh;padding-bottom: 0.5vh;\">ATAU</span>\r\n            </div>\r\n            <div class=\"flex flex-wrap items-center\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"padding-top: 0.5vh;padding-bottom: 0.5vh;\">Kontak baru</span>\r\n            </div>\r\n            <input type=\"text\" id=\"input_contact\" (keyup)=\"addName($event)\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Masukan nama\" required>\r\n            <div class=\"flex flex-wrap items-center\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"padding-top: 1vh;padding-bottom: 0.5vh;\">Alamat baru</span>\r\n            </div>\r\n            <textarea type=\"text\" (keyup)=\"addAddress($event)\" id=\"input_addres\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Masukan detail lainnya (lantai, blok, informasi penunjuk arah lainnya)\" required></textarea>\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"padding-top: 0.5vh;padding-bottom: 0.5vh;\">Telepon</span>\r\n            </div>\r\n            <input type=\"number\" (keyup)=\"addPhone($event)\" id=\"input_phone\" value=\"{{phone}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your phone\" required />\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"padding-top: 1vh;padding-bottom: 0.5vh;\">Nasionality</span>\r\n            </div>\r\n            <input type=\"text\" (keyup)=\"addNationality($event)\" id=\"input_nationality\" value=\"{{nationality}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your nationality\" required />\r\n\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-b py-4\"></div>\r\n\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kode Pos</span>\r\n            </div>\r\n            <input type=\"text\" (keyup)=\"inputPostalCode($event)\" id=\"input_posta_code\" value=\"{{postal_id}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your postal code\" required />\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kota</span>\r\n            </div>\r\n            <input type=\"text\" (keyup)=\"searchAddress($event)\" id=\"search_addres\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your city\" required />\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Pilihan Ongkir</span>\r\n            </div>\r\n            <div *ngFor=\"let result of resultCost\">\r\n              <div (click)=\"chooseKurir(result.service, result.cost[0].value, result.description, result.cost[0].etd)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                <div>\r\n                  <h3 *ngIf=\"kurir == result.cost[0].value; else nokurir\" class=\"text-green font-medium tracking-tight\">{{result.service}}</h3>\r\n                  <ng-template #nokurir>\r\n                    <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{result.service}}</h3>\r\n                  </ng-template>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{result.description}}</span>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"kurir == result.cost[0].value; else slowservie\" class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"text-green font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                </div>\r\n                <ng-template #slowservie>\r\n                  <div class=\"ml-auto\">\r\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                      <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                    </span>\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{result.cost[0].value | number }}</div>\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button (click)=\"addNewAddressmp()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Simpan </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Detail Modal -->\r\n    <div *ngIf=\"progressCount > 0\" class=\"modal fade\" id=\"detailModal\" tabindex=\"-1\" aria-labelledby=\"detailModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog max-w-2xl\">\r\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"detailModalLabel\">Alamat Lengkap</h5>\r\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n              </svg>\r\n            </button>\r\n          </div>\r\n          <!-- Body -->\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/store/{{storeImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n              </figure>\r\n            </div>\r\n            <!-- Total -->\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n              <div class=\"ml-auto\">\r\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{storePrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <div class=\"flex items-center justify-center space-x-4\">\r\n              <button data-bs-toggle=\"modal\" data-bs-target=\"#cartmultiModal\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Kembali </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <!-- end main -->\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\r\n    <div class=\"container\">\r\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\r\n        <div class=\"col-span-3 md:col-span-4\">\r\n          <!-- Logo -->\r\n          <a href=\"#\" class=\"mb-6 inline-block\">\r\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n          </a>\r\n          <p class=\"dark:text-jacarta-300 mb-12\">\r\n            Create, sell and collect truly rare digital artworks. Powered by blockchain technology.\r\n          </p>\r\n          <!-- Socials -->\r\n          <div class=\"flex space-x-5\">\r\n            <!-- <a href=\"#\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"facebook\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\r\n                ></path>\r\n              </svg>\r\n            </a> -->\r\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"twitter\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"discord\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 640 512\"\r\n              >\r\n                <path\r\n                  d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"instagram\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 448 512\"\r\n              >\r\n                <path\r\n                  d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"youtube\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 20 20\"\r\n              >\r\n                <path\r\n                  d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\r\n        <span class=\"dark:text-jacarta-400 text-sm\"\r\n          >&copy;\r\n          <script>\r\n            document.write(new Date().getFullYear())\r\n          </script>\r\n          Copyright OragonX All Rights Reserved By\r\n          <a href=\"https://oragonbsc.io\" class=\"hover:text-accent\">OragonX</a></span\r\n        >\r\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\r\n          <li>\r\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\r\n          </li>\r\n          <li><a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!-- end footer -->\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map