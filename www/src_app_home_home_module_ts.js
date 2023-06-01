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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "address", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "postal_id", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cities", void 0);
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
        _this3.address = localStorage.getItem("alamat");
        _this3.postal_id = localStorage.getItem("kode_pos");
        _this3.cities = localStorage.getItem("kota");
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
        _this3.messagePleaseWait = "false";
      }
      // console.log(this.globalID);
      _this3.senddata.gettrxhistoryall().subscribe(dataSell => {
        let trxhistoryall = dataSell;
        _this3.trxhistoryall = trxhistoryall;
        _this3.sessionTrxHistory = 0;
      }, error => {});
      _this3.getEggCount();
      // await loading.dismiss();
    })();
  }

  checknewfood() {
    var _this4 = this;
    this.fs.collection("Items/" + this.globalID + "/Foods").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFood) {
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
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  checknewbattery() {
    var _this5 = this;
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
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
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  checknotificationBid() {
    var _this6 = this;
    this.senddata.getNotificationBidmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
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
                  var _ref4 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    // console.log(dataRead, 'notifications readed');
                  });
                  return function (_x4) {
                    return _ref4.apply(this, arguments);
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
      return function (_x3) {
        return _ref3.apply(this, arguments);
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
            var _ref6 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
            return function (_x5) {
              return _ref6.apply(this, arguments);
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
  pay_cartStore(id_cart, user_uid, addressw) {
    var _this13 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this13.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        if (+(_this13.oragon_balance * 1).toFixed(0) > +(_this13.cartPrice * 1).toFixed(0) && _this13.bnb_balance * 1 > _this13.storeFee * 1) {
          let amountf = _this13.cartPrice * 1e9;
          console.log(amountf);
          yield _this13.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this13.wallet
          }).then( /*#__PURE__*/function () {
            var _ref7 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              console.log(res);
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
                      res.transactionHash,
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
              const alert = yield _this13.alertController.create({
                header: 'Success',
                message: 'Transaction Successfull, We have send this transaction receipt to your email',
                buttons: ['OK']
              });
              const loading = yield _this13.loadingController.create();
              yield loading.present();
              _this13.updatestorecart(_this13.cartID, _this13.globalID, _this13.wallets, 'res.transactionHash');
              yield alert.present();
              setTimeout(() => {
                window.location.reload();
              }, 5000);
              loading.dismiss();
            });
            return function (_x6) {
              return _ref7.apply(this, arguments);
            };
          }()).catch(err => {});
        } else {
          const alert = yield _this13.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
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
        const alert = yield _this13.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        const loading = yield _this13.loadingController.create();
        yield loading.present();
        _this13.updatestorecart(_this13.cartID, _this13.globalID, _this13.wallets, 'res.transactionHash');
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
    var _this14 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this14.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("lastseen");
      if (_this14.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        _this14.fs.collection("Players").doc(_this14.marketp2pdragonowner).valueChanges().subscribe(datas => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          console.log(data_user.WalletAddress);
          _this14.owner_address = data_user.WalletAddress;
          console.log(_this14.owner_address);
        });
        if (_this14.bnb_balance * 1 > _this14.price * 1 && _this14.bnb_balance * 1 > _this14.marketp2pdragonFee * 1) {
          _this14.web3js.eth.sendTransaction({
            from: _this14.wallet,
            to: _this14.owner_address,
            value: _this14.web3js.utils.toWei(_this14.price.toFixed(8).toString(), 'ether'),
            gas: 500000,
            gasPrice: 5000000000
          }, /*#__PURE__*/function () {
            var _ref8 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
              if (err) {
                _this14.openDialog("Transaction Error Please Try Again");
              } else {
                let kind = localStorage.getItem("kind");
                _this14.kind = "dragon";
                // Build Json String Dragon
                let crd = JSON.stringify({
                  Id: _this14.marketp2pdragonDocId,
                  ItemId: _this14.marketp2pdragonID,
                  Attributes: {
                    AttackPoint: Number(_this14.marketp2pdragonAttack),
                    DefensePoint: Number(_this14.marketp2pdragonDefense),
                    Exp: Number(_this14.marketp2pdragonExp),
                    HP: Number(_this14.marketp2pdragonHP),
                    Hunger: Number(_this14.marketp2pdragonHunger),
                    Level: Number(_this14.marketp2pdragonLevel),
                    MaxHP: Number(_this14.marketp2pdragonMaxHP),
                    MaxHunger: Number(_this14.marketp2pdragonMaxHunger)
                  },
                  price: Number(_this14.marketp2pdragonprice),
                  owner: _this14.marketp2pdragonowner
                });
                _this14.current_data = JSON.parse(crd);
                // console.log(JSON.stringify(this.current_data));
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this14.senddata.gettokenOwnermp(_this14.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
                      var _ref9 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
                        _this14.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        const loading = yield _this14.loadingController.create();
                        yield loading.present();
                        _this14.senddata.settrxhistory(_this14.marketp2pdragonDocId,
                        //id_product
                        _this14.globalID,
                        //userid
                        _this14.marketp2pdragonDocId + '-' + _this14.kind,
                        //itemid
                        _this14.marketp2pdragonprice,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-seller',
                        //type
                        _this14.marketp2pdragonDocId + '-' + _this14.kind,
                        //item
                        _this14.email,
                        //email
                        _this14.tokenNotif.tokenPushNotification //token
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
                yield _this14.checkitemscreated();
                // Transaction Data Firestore
                var sfDocRef = _this14.fs.firestore.collection('Sell/' + _this14.marketp2pdragonowner + '/Dragons').doc(_this14.marketp2pdragonDocId);
                var sfDocRef2 = _this14.fs.firestore.collection('Items/' + _this14.globalID + '/Dragons').doc(_this14.marketp2pdragonDocId);
                try {
                  _this14.fs.firestore.collection('Sell/' + _this14.marketp2pdragonowner + '/Dragons').doc(_this14.marketp2pdragonDocId).delete().then(() => {});
                  _this14.fs.collection('Items/' + _this14.globalID + '/Dragons').doc(_this14.marketp2pdragonDocId).set({
                    Id: _this14.marketp2pdragonDocId,
                    ItemId: _this14.marketp2pdragonID,
                    Attributes: {
                      AttackPoint: Number(_this14.marketp2pdragonAttack),
                      DefensePoint: Number(_this14.marketp2pdragonDefense),
                      Exp: Number(_this14.marketp2pdragonExp),
                      HP: Number(_this14.marketp2pdragonHP),
                      Hunger: Number(_this14.marketp2pdragonHunger),
                      Level: Number(_this14.marketp2pdragonLevel),
                      MaxHP: Number(_this14.marketp2pdragonMaxHP),
                      MaxHunger: Number(_this14.marketp2pdragonMaxHunger)
                    }
                  }).then(() => {
                    // console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  }).catch(error => {});
                  // console.log("Transaction successfully committed!");
                } catch (e) {
                  // console.log("Transaction failed: ", e);
                }
                _this14.senddata.selldragontoitemsmp(_this14.globalID, _this14.marketp2pdragonDocId).subscribe(dataE => {
                  // console.log(dataE);
                }, error => {});
                _this14.senddata.setitemhistory(_this14.marketp2pdragonDocId, _this14.globalID, transactionHash, JSON.stringify(_this14.current_data), '').subscribe(data => {}, error => {});
                _this14.senddata.addSellListmp(_this14.marketp2pdragonDocId, _this14.globalID, _this14.priceRoyalty_display).subscribe(dataE => {});
                loading.dismiss();
                const alert = yield _this14.alertController.create({
                  header: "Success",
                  message: "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
                  var _ref10 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
                    const loading = yield _this14.loadingController.create();
                    yield loading.present();
                    _this14.dragons = dataSell;
                    _this14.marketp2pdragonLength = dataSell.length;
                    loading.dismiss();
                  });
                  return function (_x10) {
                    return _ref10.apply(this, arguments);
                  };
                }(), error => {});
                _this14.state_buy = 3;
              }
            });
            return function (_x7, _x8) {
              return _ref8.apply(this, arguments);
            };
          }());
        } else {
          const alert = yield _this14.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        _this14.fs.collection("Players").doc(_this14.marketp2pdragonowner).valueChanges().subscribe(datas => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          console.log(data_user.WalletAddress);
          _this14.owner_address = data_user.WalletAddress;
          console.log(_this14.owner_address);
        });
        let kind = localStorage.getItem("kind");
        _this14.kind = "dragon";
        // Build Json String Dragon
        let crd = JSON.stringify({
          Id: _this14.marketp2pdragonDocId,
          ItemId: _this14.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this14.marketp2pdragonAttack),
            DefensePoint: Number(_this14.marketp2pdragonDefense),
            Exp: Number(_this14.marketp2pdragonExp),
            HP: Number(_this14.marketp2pdragonHP),
            Hunger: Number(_this14.marketp2pdragonHunger),
            Level: Number(_this14.marketp2pdragonLevel),
            MaxHP: Number(_this14.marketp2pdragonMaxHP),
            MaxHunger: Number(_this14.marketp2pdragonMaxHunger)
          },
          price: Number(_this14.marketp2pdragonprice),
          owner: _this14.marketp2pdragonowner
        });
        _this14.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this14.senddata.gettokenOwnermp(_this14.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
              var _ref11 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
                _this14.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                const loading = yield _this14.loadingController.create();
                yield loading.present();
                _this14.senddata.settrxhistory(_this14.marketp2pdragonDocId,
                //id_product
                _this14.globalID,
                //userid
                _this14.marketp2pdragonDocId + '-' + _this14.kind,
                //itemid
                _this14.marketp2pdragonprice,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-seller',
                //type
                _this14.marketp2pdragonDocId + '-' + _this14.kind,
                //item
                _this14.email,
                //email
                _this14.tokenNotif.tokenPushNotification //token
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
        yield _this14.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this14.fs.firestore.collection('Sell/' + _this14.marketp2pdragonowner + '/Dragons').doc(_this14.marketp2pdragonDocId);
        var sfDocRef2 = _this14.fs.firestore.collection('Items/' + _this14.globalID + '/Dragons').doc(_this14.marketp2pdragonDocId);
        try {
          _this14.fs.firestore.collection('Sell/' + _this14.marketp2pdragonowner + '/Dragons').doc(_this14.marketp2pdragonDocId).delete().then(() => {});
          _this14.fs.collection('Items/' + _this14.globalID + '/Dragons').doc(_this14.marketp2pdragonDocId).set({
            Id: _this14.marketp2pdragonDocId,
            ItemId: _this14.marketp2pdragonID,
            Attributes: {
              AttackPoint: Number(_this14.marketp2pdragonAttack),
              DefensePoint: Number(_this14.marketp2pdragonDefense),
              Exp: Number(_this14.marketp2pdragonExp),
              HP: Number(_this14.marketp2pdragonHP),
              Hunger: Number(_this14.marketp2pdragonHunger),
              Level: Number(_this14.marketp2pdragonLevel),
              MaxHP: Number(_this14.marketp2pdragonMaxHP),
              MaxHunger: Number(_this14.marketp2pdragonMaxHunger)
            }
          }).then(() => {
            // console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        _this14.senddata.selldragontoitemsmp(_this14.globalID, _this14.marketp2pdragonDocId).subscribe(dataE => {
          // console.log(dataE);
        }, error => {});
        _this14.senddata.addSellListmp(_this14.marketp2pdragonDocId, _this14.globalID, _this14.priceRoyalty_display).subscribe(dataE => {});
        loading.dismiss();
        const alert = yield _this14.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        _this14.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
          var _ref12 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            const loading = yield _this14.loadingController.create();
            yield loading.present();
            _this14.dragons = dataSell;
            _this14.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          });
          return function (_x12) {
            return _ref12.apply(this, arguments);
          };
        }(), error => {});
        _this14.state_buy = 3;
      }
      localStorage.removeItem("lastpay");
      localStorage.removeItem("lastdragon");
    })();
  }
  pay_secondMarketp2p() {
    var _this15 = this;
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
            _this15.openDialog("Transaction Error Please Try Again");
          } else {
            let kind = localStorage.getItem("lastseen");
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
              price: _this15.marketp2pdragonprice,
              owner: _this15.marketp2pdragonowner
            });
            _this15.current_data = JSON.parse(crd);
            // console.log(JSON.stringify(this.current_data));
            // Create Royalty pos 1
            if (_this15.marketp2pdragonBG == "exists") {
              if (_this15.positionRoyalty == 1) {
                _this15.senddata.setdgfirstroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {}, error => {});
                // Create Royalty pos 2
              } else if (_this15.positionRoyalty == 2) {
                _this15.senddata.setdgsecondroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_1,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_2a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 3
              } else if (_this15.positionRoyalty == 3) {
                _this15.senddata.setdgthirdroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_1,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_3a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_2,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_3b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 4
              } else if (_this15.positionRoyalty == 4) {
                _this15.senddata.setdgfourthroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_1,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_4a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_2,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_4b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_3,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_4c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 5
              } else if (_this15.positionRoyalty == 5) {
                _this15.senddata.setdgfifthroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_1,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_2,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_3,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_4,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5d,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              } else if (_this15.positionRoyalty == 6) {
                _this15.senddata.setdgsixthroyaltymp(_this15.globalID,
                //userid
                _this15.marketp2pdragonowner,
                //owner
                _this15.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_1,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5a,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_2,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5b,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_3,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5c,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_4,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5d,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this15.senddata.setroyaltytrxhistory(_this15.globalID,
                  //userid
                  _this15.pos_5,
                  //userid
                  _this15.marketp2pdragonDocId + "-" + _this15.kind,
                  //itemid
                  _this15.totaroyalty_5e,
                  //amount
                  "transactionHash",
                  //tx_hash
                  "Royalty Seller 5",
                  //type
                  JSON.stringify(_this15.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              }
            }
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_10__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this15.senddata.gettokenOwnermp(_this15.marketp2pdragonowner).subscribe( /*#__PURE__*/function () {
                  var _ref14 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataToken) {
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
                    _this15.fee_royalty,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
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
            _this15.state_buy = 3;
            _this15.status_1 = "1";
            localStorage.setItem("lastpay", _this15.marketp2pdragonDocId);
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
              _this15.fee_royalty,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-oragon',
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
    var _this16 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this16.loadingController.create();
      yield loading.present();
      _this16.senddata.favoritedmp(_this16.globalID, DocId).subscribe( /*#__PURE__*/function () {
        var _ref16 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this16.senddata.getselldglimitmp().subscribe(dataSell => {
            _this16.dragons = JSON.parse(dataSell);
            // this.marketp2pdragonLength = dataSell.length;
            for (let i in _this16.dragons) {
              if (_this16.dragons[i].imgbackground == 'exists') {
                _this16.senddata.getallbackgroundsellmp(_this16.dragons[i].DocId).subscribe(dataBackground => {
                  _this16.dragonsownedbg = JSON.parse(dataBackground);
                  _this16.marketp2pdragonBG = _this16.dragonsownedbg.imgbackground;
                  console.log(_this16.dragonsownedbg);
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
    let harga = 0;
    this.senddata.getstorecart(this.globalID).subscribe(data => {
      this.storecart = JSON.parse(data);
      this.cartCount = this.storecart.length;
      this.cartPrice = this.storecart.reduce((sum, product) => sum + Number(product.harga), 0);
      this.cartPriceTemp = this.cartPrice;
    }, error => {});
  }
  setActive(id_cart) {
    var _this17 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this17.loadingController.create();
      yield loading.present();
      _this17.senddata.setActiveCart(id_cart).subscribe(data => {
        let harga = 0;
        _this17.senddata.getstorecart(_this17.globalID).subscribe(data => {
          _this17.storecart = JSON.parse(data);
          if (_this17.storecart.active == 1) {
            _this17.senddata.setactiveidcart(id_cart).subscribe(cartactive => {
              const cartPrice = _this17.storecart.reduce((difference, product) => difference - Number(product.harga), 0);
              console.log("cart aktif", JSON.parse(cartactive));
              _this17.cartPriceTemp = cartPrice;
            });
          } else {
            _this17.senddata.setnoactiveidcart(id_cart).subscribe(cartnoactive => {
              const cartPrice = _this17.storecart.reduce((sum, product) => sum + Number(product.harga), 0);
              console.log("cart tidak aktif", JSON.parse(cartnoactive));
              _this17.cartPriceTemp = cartPrice;
            });
          }
        }, error => {});
      });
      loading.dismiss();
    })();
  }
  setstorecart(id_product, user_uid, addressw) {
    var _this18 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.isLogin == '!') {
        const alert = yield _this18.alertController.create({
          header: 'Failed !',
          message: 'Please login for add to cart',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        const loading = yield _this18.loadingController.create();
        yield loading.present();
        _this18.senddata.setstorecart(id_product, user_uid, addressw).subscribe(data => {
          let setstorecart = data;
          _this18.senddata.getstorecart(_this18.globalID).subscribe(data => {
            _this18.storecart = JSON.parse(data);
            for (let i in _this18.storecart) {
              console.log(_this18.storecart[i].addressw);
              if (_this18.storecart.length == 0) {
                _this18.cartCount = 0;
              } else {
                _this18.cartCount = _this18.storecart.length;
              }
              _this18.cartUID = _this18.globalID;
              _this18.carts = _this18.storecart;
              _this18.cartID = _this18.storecart[i].id_cart;
              _this18.storeID = _this18.storecart[i].product_id;
              // this.cartName = this.storecart[i].nama
              _this18.cartDeskripsi = _this18.storecart[i].deskripsi;
              _this18.cartPrice = _this18.storecart[i].harga;
              _this18.cartQty = _this18.storecart[i].qty_cart;
              let cartPriceBNB = _this18.current_bnb * _this18.cartPrice * _this18.cartQty;
              _this18.cartPriceBNB = cartPriceBNB.toFixed(4);
              _this18.cartImg = _this18.storecart[i].gambar;
            }
          }, error => {});
        }, error => {});
        loading.dismiss();
        const alert = yield _this18.alertController.create({
          header: 'Success',
          message: 'Items already added to your cart',
          buttons: ['OK']
        });
        yield alert.present();
        _this18.stateHash = true;
        _this18.state_buy = 2;
      }
    })();
  }
  updatestorecart(id_cart, user_uid, addressw, transactionHash) {
    var _this19 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this19.loadingController.create();
      yield loading.present();
      _this19.senddata.updatestorecartHome(id_cart, user_uid, addressw, transactionHash).subscribe(data => {
        let updatestorecartHome = data;
        console.log(updatestorecartHome);
      }, error => {});
      loading.dismiss();
    })();
  }
  pay_progressStore(event, id_orders, user_uid, product_id, addressw) {
    var _this20 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this20.loadingController.create();
      yield loading.present();
      // console.log(event, DocId, ItemId)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        _this20.updatestoreprogress(_this20.ordersID, _this20.globalID, _this20.wallets, event.target.files[0]);
        _this20.addJaketsMetalicana(_this20.ordersID, user_uid, product_id);
        loading.dismiss();
        console.log(event.target.files[0]);
        reader.onload = event => {
          _this20.url = event.target.result;
        };
      }
      _this20.alertWaiting();
      _this20.updateProgressCount();
    })();
  }
  updateProgressCount() {
    var _this21 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this21.progressCount);
      const pc = _this21.progressCount;
      _this21.progressCount = pc - 1;
      const updateProgressCount = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const loading = yield _this21.loadingController.create();
        yield loading.present();
        _this21.senddata.getstoreprogress(_this21.globalID).subscribe(data => {
          _this21.storeprogress = JSON.parse(data);
          for (let i in _this21.storeprogress) {
            // console.log(this.storeprogress[i].addressw)
            _this21.progressCount = _this21.storeprogress.length;
          }
        }, error => {});
        loading.dismiss();
      }), 5000);
      setTimeout( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        window.location.reload();
      }), 5000);
    })();
  }
  updatestoreprogress(id_orders, user_uid, addressw, file_orders) {
    var _this22 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this22.loadingController.create();
      yield loading.present();
      _this22.senddata.updatestoreprogressHome(id_orders, user_uid, addressw, file_orders).subscribe(data => {
        let updatestoreprogressHome = data;
        console.log(updatestoreprogressHome);
      }, error => {});
      loading.dismiss();
    })();
  }
  getstoreprogress() {
    this.senddata.getstoreprogress(this.globalID).subscribe(data => {
      this.storeprogress = JSON.parse(data);
      for (let i in this.storeprogress) {
        // console.log(this.storeprogress[i].addressw)
        this.progressCount = this.storeprogress.length;
        this.cartUID = this.globalID;
        this.carts = this.storeprogress;
        this.ordersID = this.storeprogress[i].id_orders;
        this.product_id = this.storeprogress[i].product_id;
        // this.cartDeskripsi = this.storeprogress[i].deskripsi
        this.cartPrice = this.storeprogress[i].harga;
        this.cartQty = this.storeprogress[i].qty_cart;
        let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
        this.cartPriceBNB = cartPriceBNB.toFixed(4);
        this.cartImg = this.storeprogress[i].gambar;
      }
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
    var _this23 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this23.alertController.create({
        header: 'Congratulation !',
        message: 'Now you can Withdraw, check your profile.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  alertWaiting() {
    var _this24 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this24.alertController.create({
        header: 'File has uploaded !',
        message: 'Thank you.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  showAlert(header, message) {
    var _this25 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this25.alertController.create({
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
  inputAddress(event) {
    const query = event.target.value;
    this.address = localStorage.setItem("alamat", query);
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
  chooseKurir(service, cost) {
    const kurir = localStorage.setItem(service, cost);
    this.kurir = localStorage.getItem(service);
    const parsedKurir = Number(this.kurir);
    const parsedCartPrice = Number(this.cartPrice); // Assuming this.cartPrice is a string, parse it as a number
    this.actualcartPrice = parsedKurir + parsedCartPrice;
    console.log(this.actualcartPrice);
    this.cartStatus = 1;
  }
  addJaketsMetalicana(ordersID, globalID, product_id) {
    var DocIdJakets = this.newTime();
    var updateJakets = 1;
    this.address = localStorage.getItem("alamat");
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
          Address: this.address,
          PostalID: this.postal_id,
          City: this.cities,
          Id: this.codeHoodie + DocIdJakets
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
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\n  <!-- Header -->\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\n      <!-- Logo -->\n      <a color=\"dark\" href=\"/tabs/home\">\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a>\n      <!-- Desktop Menu Actions -->\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\n          <!-- Mobile Logo / Menu Close -->\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\n            <!-- Mobile Logo -->\n            <a color=\"dark\" href=\"/tabs/home\">\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n            </a>\n          </div>\n          <!-- Primary Nav -->\n          <nav class=\"navbar w-full\">\n            <ul class=\"flex flex-col lg:flex-row\">\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/home\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\n                  <li>\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\n                    </a>\n                  </li>\n                  <!-- <li>\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\n                    </a>\n                  </li> -->\n                </ul>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- Mobile Connect Wallet / Socials -->\n          <!-- Actions -->\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\n            <!-- hatching -->\n            <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\n            </button> -->\n\n            <!-- progress -->\n            <button *ngIf=\"progressCount > 0\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"progress\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\n                <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\n              </svg>\n              <span style=\"padding-left: 1px;\">{{progressCount}}</span>\n            </button>\n\n            <!-- cart -->\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh;\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <g>\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n                </g>\n              </svg>\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n            </button>\n            \n            <!-- Profile -->\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n                <ion-icon name=\"log-in-outline\"></ion-icon>\n              </button>\n            </div>\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n                </svg>\n              </button>\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                  </svg>\n                </button>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                  <div class=\"flex items-center mb-3\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                  </div>\n                </div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                  <div>\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                    <div class=\"flex items-center mt-2\">\n                      <!-- Default Progressbar with 50 percent -->\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                    </div>\n                  </div>\n                </div>\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n                </a>\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Mobile Menu Actions -->\n        <div class=\"ml-auto flex lg:hidden\">\n          <!-- hatching -->\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\n          </button> -->\n\n          <!-- progress -->\n          <button *ngIf=\"progressCount > 0\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\n              <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\n            </svg>\n            <span style=\"padding-left: 1px;\">{{progressCount}}</span>\n          </button>\n\n          <!-- cart -->\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <g>\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n              </g>\n            </svg>\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n          </button>\n          \n          <!-- Profile -->            \n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </button>\n          </div>\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n              </svg>\n            </button>\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                </svg>\n              </button>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                <div class=\"flex items-center mb-3\">\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f0b90b\">\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                </div>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                <div>\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                  <div class=\"flex items-center mt-2\">\n                    <!-- Default Progressbar with 50 percent -->\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                  </div>\n                </div>\n              </div>\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n              </a>\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n              </a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </header>\n\n  <!-- Main -->\n    <!-- Hero -->\n    <section class=\"relative pt-20 md:pt-32 lg:h-[88vh]\">\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden\">\n        <img src=\"assets/img/gradient.jpg\" alt=\"gradient\" />\n      </picture>\n      <picture class=\"pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block\">\n        <img src=\"assets/img/gradient_dark.jpg\" alt=\"gradient dark\" />\n      </picture>\n      <div class=\"container h-full\">\n        <div class=\"grid h-full items-center gap-4 md:grid-cols-12\">\n          <div class=\"col-span-8 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4\">\n            <h1 class=\"text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl\">OragonX Marketplace. </h1>\n            <p class=\"dark:text-jacarta-200 mb-8 text-center text-lg md:text-left\"> Now you can buy or sell and make it bundle every items in oragonx here. Let's Explore...</p>\n            <div class=\"flex space-x-4 pb-12\">\n              <a [routerLink]=\"['/tabs/p2pmarket']\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-7 text-center font-semibold text-white transition-all\"> P2P Market </a>\n              <a class=\"text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-7 text-center font-semibold transition-all hover:text-white\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\"> Gatcha </a>\n            </div>\n          </div>\n          <!-- Hero image -->\n          <div class=\"col-span-4 xl:col-span-8\">\n            <div class=\"relative text-center md:pl-8 md:text-right\">\n              <svg x=\"0\" y=\"0\" viewBox=\"0 0 250 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]\">\n                <defs>\n                  <clipPath id=\"clipping\" clipPathUnits=\"userSpaceOnUse\">\n                    <path d=\"M 0, 100 C 0, 17.000000000000004 17.000000000000004, 0 100, 0 S 200, 17.000000000000004 200, 100 183, 200 100, 200 0, 183 0, 100\" fill=\"#9446ED\"></path>\n                  </clipPath>\n                </defs>\n                <g clip-path=\"url(#clipping)\">\n                  <!-- Bg image -->\n                  <image href=\"assets/img/hero/hero.jpg\" width=\"200\" height=\"200\" clip-path=\"url(#clipping)\" />\n                </g>\n              </svg>\n              <img src=\"assets/img/hero/3D_elements.png\" alt=\"\" class=\"animate-fly absolute top-0 md:-right-[10%]\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- end hero -->\n\n    <!-- Available Eggs -->\n    <section class=\"relative\" style=\"margin-top: 5rem;\">\n      <div class=\"container\">\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\n          Eggs Available\n        </h2>\n        <div class=\"flex\">\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/MERU_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Meru</div>\n          </a>\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/RITRA_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Ritra</div>\n          </a>\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/AKH_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Akh</div>\n          </a>\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/FENG_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Feng</div>\n          </a>\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/METALICANA_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Metalicana</div>\n          </a>\n          <a class=\"dark:border-jacarta-600 border-jacarta-100 py-4 hover:shadow-md sm:w-32 border-l\" style=\"width: 12rem;\">\n            <div class=\"text-jacarta-700 mb-1 flex items-center justify-center text-base font-medium dark:text-white\">\n              <span class=\"-mt-px inline-block\" data-tippy-content=\"ETH\">\n                <img src=\"assets/img/eggs/DORCH_EGG.gif\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </span>\n              <span class=\"font-bold\">0</span>\n            </div>\n            <div class=\"text-center text-2xs dark:text-jacarta-400 font-medium tracking-tight\">Dorch</div>\n          </a>\n        </div>\n      </div>\n    </section>\n    <!-- End Available Eggs -->\n\n    <!-- Store -->\n    <section class=\"relative pt-20\">\n      <div class=\"container\">\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\n          Official Store\n        </h2>\n        <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n          <div *ngFor=\"let s of storedata\">\n            <article>\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                  <a (click)=\"getstoredetail(s.id_product)\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\">\n                    <img src=\"assets/img/store/{{s.gambar}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                  </a>\n                </figure>\n                <div class=\"mt-7 flex items-center justify-between\">\n                  <a (click)=\"getstoredetail(s.id_product)\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\">\n                    <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.nama}}</span>\n                  </a>\n                </div>\n                <div class=\"mt-2 text-sm\">\n                  <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.deskripsi}}</span>\n                </div>\n                <div class=\"mt-2 text-sm\">\n                  <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Rp {{s.harga | number}}</h4>\n                </div>\n                <div class=\"mt-2 text-sm\">\n                  <h4 class=\"text-green mr-1\">QTY 30</h4>\n                </div>\n                <div class=\"mt-8 flex items-center justify-between\">\n                  <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowModal\"> Buy</a> -->\n                  <a (click)=\"setstorecart(s.id_product, globalID, wallets)\" class=\"group flex items-center\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                      <g>\n                        <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                        <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                        <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n                      </g>\n                    </svg>\n                  </a>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- End Store -->\n\n    <!-- P2P Market -->\n    <section class=\"relative pt-20 md:pt-32\">\n      <div class=\"container\">\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\n          P2P Market\n        </h2>\n        <!-- Grid -->\n        <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n          <div *ngFor=\"let datas of dragons\">\n            <article>\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                  <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                    <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                    <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                    <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                    <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                    <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                    <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                    <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                      <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    </span>\n                    <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </div>\n                </figure>\n                <div class=\"mt-7 flex items-center justify-between\">\n                  <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,8)}}</span>\n                  <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,8)}}</span>\n                  <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,8)}}</span>\n                  <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,8)}}</span>\n                  <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,8)}}</span>\n                  <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId.substr(0,8)}}</span>\n                  <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                    <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                      <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                      <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                      <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                        </div>\n                      </div>\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                        </div>\n                      </div>\n                      <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"mt-2 text-sm\">\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span data-tippy-content=\"ETH\">\n                      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                        <g fill=\"#f3ba2f\">\n                          <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                        </g>\n                      </svg>\n                    </span>\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\n                  </span>\n                </div>\n                <div class=\"mt-8 flex items-center justify-between\">\n                  <button (click)=\"getdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowDirectDragonModal\"> Buy </button>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n        <!-- end grid -->\n      </div>\n    </section>\n    <!-- End P2P Market -->\n\n    <!-- Chart Point -->\n    <section class=\"relative pt-20 md:pt-32\">\n      <div class=\"container\">\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\n          Chart Point\n        </h2>\n        <!-- Grid -->\n        <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1\" style=\"gap: 1.2rem\">\n          <div class=\"col-md-6\">\n            <!-- <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h3>Line Series</h3>\n              </div>\n              <div style=\"width:100%;\">\n                <canvas id=\"myChart\" width=\"700\" height=\"250\" #mychart></canvas>\n              </div>\n            </div> -->\n          </div>\n        </div>\n        <!-- end grid -->\n      </div>\n    </section>\n    <!-- End chart point -->\n\n    <!-- Recently Sold -->\n    <section class=\"relative pt-20 md:pt-32\">\n      <div class=\"container\">\n        <h2 class=\"font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white\">\n          Recently Sold\n        </h2>        \n        <div class=\"scrollbar-custom overflow-x-auto\">\n          <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\n            <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\n              <div class=\"w-[28%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Collection</span>\n              </div>\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Prices</span>\n              </div>\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Item ID</span>\n              </div>\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Hash</span>\n              </div>\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Owners</span>\n              </div>\n              <div class=\"w-[17%] py-3 px-4\" role=\"columnheader\">\n                <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Dates</span>\n              </div>\n            </div>\n            <a *ngFor=\"let r of trxhistoryall;let i = index\" (click)=\"trxhistoryid(r.id)\" data-bs-toggle=\"modal\" data-bs-target=\"#recentlySoldModal\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[28%] items-center border-t py-4 px-4\" role=\"cell\">\n                <span class=\"mr-2 lg:mr-4\">{{i+1}}</span>\n                <figure *ngIf=\"r.item == 'Package-Official-Store'\" class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\n                  <img src=\"https://marketplace.oragon.network/assets/img/store/rare4.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                  <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                      <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\n                    </svg>\n                  </div>\n                </figure>\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\n                  {{r.item}}\n                  <small *ngIf=\"r.id_product == '16'\" class=\"dark:text-jacarta-400 text-sm\">DORCH EGG</small>\n                  <small *ngIf=\"r.id_product == '15'\" class=\"dark:text-jacarta-400 text-sm\">METALICANA EGG</small>\n                  <small *ngIf=\"r.id_product == '14'\" class=\"dark:text-jacarta-400 text-sm\">FOODS</small>\n                  <small *ngIf=\"r.id_product == '13'\" class=\"dark:text-jacarta-400 text-sm\">GREEN BATTERY</small>\n                  <small *ngIf=\"r.id_product == '12'\" class=\"dark:text-jacarta-400 text-sm\">BLUE BATTERY</small>\n                  <small *ngIf=\"r.id_product == '11'\" class=\"dark:text-jacarta-400 text-sm\">RED BATTERY</small>\n                  <small *ngIf=\"r.id_product == '10'\" class=\"dark:text-jacarta-400 text-sm\">AKH + MERU + RITRA</small>\n                  <small *ngIf=\"r.id_product == '9'\" class=\"dark:text-jacarta-400 text-sm\">AKH + FENG + MERU</small>\n                  <small *ngIf=\"r.id_product == '8'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG + MERU</small>\n                  <small *ngIf=\"r.id_product == '7'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG + AKH</small>\n                  <small *ngIf=\"r.id_product == '6'\" class=\"dark:text-jacarta-400 text-sm\">AKH + MERU</small>\n                  <small *ngIf=\"r.id_product == '5'\" class=\"dark:text-jacarta-400 text-sm\">RITRA + FENG</small>\n                  <small *ngIf=\"r.id_product == '4'\" class=\"dark:text-jacarta-400 text-sm\">FENG</small>\n                  <small *ngIf=\"r.id_product == '3'\" class=\"dark:text-jacarta-400 text-sm\">RITRA</small>\n                  <small *ngIf=\"r.id_product == '2'\" class=\"dark:text-jacarta-400 text-sm\">MERU</small>\n                  <small *ngIf=\"r.id_product == '1'\" class=\"dark:text-jacarta-400 text-sm\">AKH</small>\n                </span>\n              </div>\n              <div *ngIf=\"r.type == 'ORGN'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\n                <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\n              </div>\n              <div *ngIf=\"r.type == 'BNB'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\n                <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\n              </div>\n              <div *ngIf=\"r.type == 'BUSD'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\n                <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f0b90b\">\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                <span class=\"text-sm font-medium tracking-tight\">{{r.itemid}}</span>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                <a href=\"https://bscscan.com/tx/{{r.tx_hash}}\" target=\"_blank\">\n                  <span class=\"text-green\">{{r.tx_hash.substr(0,20)}}...</span>\n                </a>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                <span>{{r.userid.substr(0,20)}}...</span>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                <span>{{r.date}}</span>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- End recently sold -->\n    \n    <!-- Gatcha Modal-->\n    <div class=\"modal fade\" id=\"gatchaModal\" tabindex=\"-1\" aria-labelledby=\"gatchaModalLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\n      <div class=\"modal-dialog max-w-lg\">\n        <div class=\"modal-content\" style=\"padding-bottom: 1.5rem\">\n          <div class=\"modal-header\">\n            <!-- <h5 class=\"modal-title\" id=\"gatchaModalLabel\">Get Gatcha Package</h5> -->\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <section class=\"gatcha\">\n            <div class=\"container\">\n              <h2 class=\"font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white txt-head-modal-gatcha\"> Get Gatcha Package </h2>\n              <div class=\"article-content mx-auto max-w-[48.125rem]\">\n                <section>\n                  <!-- Grid -->\n                  <div class=\"grid grid-cols-2 gap-[0rem] md:grid-cols-2 lg:grid-cols-2\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[0rem] transition-shadow hover:shadow-lg text-center\">\n                        <figure>\n                          <a href=\"#\">\n                            <img src=\"assets/img/treasure_box10x.png\" alt=\"item 1\" loading=\"lazy\" id=\"trs-img\" />\n                          </a>\n                        </figure>\n                        <div class=\"items-center justify-between text-center\">\n                          <a href=\"#\">\n                            <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">$100</span>\n                          </a>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <span class=\"dark:text-jacarta-100 text-jacarta-700\">10x Items</span>\n                          <br>\n                          <br>\n                          <span class=\"dark:text-jacarta-300\">{{latesttenOragon}} Orgn</span>\n                        </div>\n                        <div class=\"mt-8 items-center justify-between text-center\">\n                          <button type=\"button\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyGatchaTenModal\"> Buy Now </button>\n                        </div>\n                      </div>\n                    </article>\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[0rem] transition-shadow hover:shadow-lg text-center\">\n                        <figure>\n                          <a href=\"#\">\n                            <img src=\"assets/img/treasure_box.png\" alt=\"item 1\" loading=\"lazy\" id=\"trs-img\" />\n                          </a>\n                        </figure>\n                        <div class=\"items-center justify-between text-center\">\n                          <a href=\"#\">\n                            <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">$12</span>\n                          </a>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <span class=\"dark:text-jacarta-100 text-jacarta-700\">1x Item</span>\n                          <br>\n                          <br>\n                          <span class=\"dark:text-jacarta-300\">{{latestoneOragon}} Orgn</span>\n                        </div>\n                        <div class=\"mt-8 items-center justify-between text-center\">\n                          <button type=\"button\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyGatchaOneModal\"> Buy Now </button>\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </section>\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n\n    <!-- Buy Gatcha 10X Modal -->\n    <div class=\"modal fade\" id=\"buyGatchaTenModal\" tabindex=\"-1\" aria-labelledby=\"buyGatchaTenLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content bid\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"buyGatchaTenLabel\">Gatcha 10X</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Price</span>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border\">\n              <div class=\"border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2\">\n                <span>\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 h-5 w-5\">\n                    <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\n                    <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\n                    <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\n                    <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\n                    <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\n                  </svg>\n                </span>\n                <span class=\"font-display text-jacarta-700 text-sm\">ORGN</span>\n              </div>\n              <input type=\"text\" class=\"focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset\" placeholder=\"Amount\" disabled value=\"{{latesttenOragon}}\" style=\"color: #212121;\" />\n              <div class=\"bg-jacarta-700 border-jacarta-100 flex flex-1 justify-end self-stretch border-l\">\n                <span class=\"self-center px-2 text-sm\">$100</span>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <span class=\"dark:text-jacarta-400 text-sm\">Balance: {{balanceORGNPlayers}} ORGN</span>\n            </div>\n            <!-- Terms -->\n            <div class=\"mt-4 flex items-center space-x-2\">\n              <input type=\"checkbox\" id=\"terms\" class=\"checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0\" />\n              <label for=\"terms\" class=\"dark:text-jacarta-200 text-sm\">By checking this box, I agree to OragonX <a href=\"#\" class=\"text-accent\">Terms of Service</a>\n              </label>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\n              <button (click)=\"pay_first()\" *ngIf=\"connect == true && state_buy == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay 1 of 2 </button>\n              <button (click)=\"pay_second(10)\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay 2 of 2 </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Buy Gatcha 1X Modal -->\n    <div class=\"modal fade\" id=\"buyGatchaOneModal\" tabindex=\"-1\" aria-labelledby=\"buyGatchaOneLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content bid\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"buyGatchaOneLabel\">Gatcha 1X</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-toggle=\"modal\" data-bs-target=\"#gatchaModal\" aria-label=\"gatcha\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Price</span>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border\">\n              <div class=\"border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2\">\n                <span>\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"mr-1 h-5 w-5\">\n                    <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\n                    <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\n                    <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\n                    <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\n                    <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\n                  </svg>\n                </span>\n                <span class=\"font-display text-jacarta-700 text-sm\">ORGN</span>\n              </div>\n              <input type=\"text\" class=\"focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset\" placeholder=\"Amount\" disabled value=\"{{latestoneOragon}}\" style=\"color: #212121;\" />\n              <div class=\"bg-jacarta-700 border-jacarta-100 flex flex-1 justify-end self-stretch border-l\">\n                <span class=\"self-center px-2 text-sm\">$12</span>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <span class=\"dark:text-jacarta-400 text-sm\">Balance: {{balanceORGNPlayers}} ORGN</span>\n            </div>\n            <!-- Terms -->\n            <div class=\"mt-4 flex items-center space-x-2\">\n              <input type=\"checkbox\" id=\"terms\" class=\"checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0\" />\n              <label for=\"terms\" class=\"dark:text-jacarta-200 text-sm\">By checking this box, I agree to OragonX <a href=\"#\" class=\"text-accent\">Terms of Service</a>\n              </label>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\n              <button (click)=\"pay_first()\" *ngIf=\"connect == true && state_buy == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay 1 of 2 </button>\n              <button (click)=\"pay_second(1)\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay 2 of 2 </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Open Gatcha Modal -->\n    <div class=\"modal fade\" id=\"openGatchaModal\" tabindex=\"-1\" aria-labelledby=\"openGatchaLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content bid\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"openGatchaLabel\">Open Your Gatcha</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Total Gatcha {{count_roulette}}</span>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"rolling()\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Open Gatcha </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Buy Now Modal -->\n    <div class=\"modal fade\" id=\"buyNowModal\" tabindex=\"-1\" aria-labelledby=\"buyNowModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"buyNowModalLabel\">Complete checkout</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img src=\"assets/img/store/{{storeImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\n              </figure>\n              <div>\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{storeDeskripsi}}</h3>\n              </div>\n              <div class=\"ml-auto\">\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{storePrice}}</div>\n              </div>\n            </div>\n            <!-- Total -->\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"selectedCrypto == 'ORGN'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceORGN}} ORGN</span>\n                </span>\n                <span *ngIf=\"selectedCrypto == 'BNB'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBNB}} BNB</span>\n                </span>\n                <span *ngIf=\"selectedCrypto == 'BUSD'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBUSD}} BUSD</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right\">${{storePrice}}</div>\n              </div>\n            </div>\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Select payment currency</span>\n            </div>\n            <div (click)=\"selectedCurrency(storeID, 1)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n              </figure>\n              <div>\n                <span *ngIf=\"selectedCrypto == 'ORGN';else unselectedORGN\">\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">OragonX</h3>\n                </span>\n                <ng-template #unselectedORGN>\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">OragonX</h3>\n                </ng-template>\n              </div>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"selectedCrypto == 'ORGN';else unselectedORGN2\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span class=\"text-green\">{{storePriceORGN}} ORGN</span>\n                </span>\n                <ng-template #unselectedORGN2>\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceORGN}} ORGN</span>\n                  </span>\n                </ng-template>\n              </div>\n            </div>\n            <div (click)=\"selectedCurrency(storeID, 2)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\n              <figure class=\"mr-5 self-start\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <g fill=\"#f3ba2f\">\n                    <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                  </g>\n                </svg>\n              </figure>\n              <div>\n                <span *ngIf=\"selectedCrypto == 'BNB';else unselectedBNB\">\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">Binance Smart Chain</h3>\n                </span>\n                <ng-template #unselectedBNB>\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">Binance Smart Chain</h3>\n                </ng-template>\n              </div>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"selectedCrypto == 'BNB';else unselectedBNB2\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span class=\"text-green\">{{storePriceBNB}} BNB</span>\n                </span>\n                <ng-template #unselectedBNB2>\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBNB}} BNB</span>\n                  </span>\n                </ng-template>\n              </div>\n            </div>\n            <div (click)=\"selectedCurrency(storeID, 3)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center py-4\">\n              <figure class=\"mr-5 self-start\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <g fill=\"#f0b90b\">\n                    <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                  </g>\n                </svg>\n              </figure>\n              <div>\n                <span *ngIf=\"selectedCrypto == 'BUSD';else unselectedBUSD\">\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold text-green\">Binance USD</h3>\n                </span>\n                <ng-template #unselectedBUSD>\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">Binance USD</h3>\n                </ng-template>\n              </div>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"selectedCrypto == 'BUSD';else unselectedBUSD2\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span class=\"text-green\">{{storePriceBUSD}} BUSD</span>\n                </span>\n                <ng-template #unselectedBUSD2>\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{storePriceBUSD}} BUSD</span>\n                  </span>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\n              <button (click)=\"pay_directStoreORGN()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'ORGN'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with ORGN</button>\n              <button (click)=\"pay_directStoreBNB()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'BNB'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with Binance Smart Chain</button>\n              <button (click)=\"pay_directStoreBUSD()\" *ngIf=\"state_buy == 2 && status_direct_buy == 2 && stateHash == true && isLogin == '' && selectedCrypto == 'BUSD'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay with Binance USD</button>\n            </div>\n          </div>\n          <p class=\"text-green text-sm p-6 text-center\">Don't close this view before finishing payment !</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Cart Modal -->\n    <div *ngIf=\"cartCount > 0\" class=\"modal fade\" id=\"cartModal\" tabindex=\"-1\" aria-labelledby=\"cartModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"cartModalLabel\">Cart</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n            </div>\n            <div *ngFor=\"let c of storecart\">\n              <div *ngIf=\"c.active == '0';else activecart\" (click)=\"setActive(c.id_cart)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\" style=\"opacity: 0.5;\">\n                <figure class=\"mr-5 self-start\">\n                  <img src=\"assets/img/store/{{c.gambar}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\n                </figure>\n                <div>\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{c.deskripsi}}</h3>\n                  <div class=\"flex flex-wrap items-center\">\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{c.nama}}</span>\n                  </div>\n                </div>\n                <div class=\"ml-auto\">\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{c.harga | number}}.00</span>\n                  </span>\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{c.harga | number}}.00</div>\n                </div>\n              </div>\n              <ng-template #activecart>\n                <div (click)=\"setActive(c.id_cart)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n                  <figure class=\"mr-5 self-start\">\n                    <img src=\"assets/img/store/{{c.gambar}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\n                  </figure>\n                  <div>\n                    <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{c.deskripsi}}</h3>\n                    <div class=\"flex flex-wrap items-center\">\n                      <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{c.nama}}</span>\n                    </div>\n                  </div>\n                  <div class=\"ml-auto\">\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                      <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{c.harga | number}}.00</span>\n                    </span>\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{c.harga | number}}.00</div>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n            <!-- Total -->\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\n              <div class=\"ml-auto\">\n                <span class=\"flex items-center whitespace-nowrap\">\n                  <span class=\"text-green font-medium tracking-tight\">Rp {{cartPriceTemp | number}}.00</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPriceTemp | number}}.00</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-3\" style=\"width: 100%;\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Alamat Lengkap</span>\n            </div>\n            <input type=\"text\" (keyup)=\"inputAddress($event)\" id=\"input_addres\" value=\"{{address}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required />\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kode Pos</span>\n            </div>\n            <input type=\"text\" (keyup)=\"inputPostalCode($event)\" id=\"input_posta_code\" value=\"{{postal_id}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your postal code\" required />\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kota</span>\n            </div>\n            <input type=\"text\" (keyup)=\"searchAddress($event)\" id=\"search_addres\" value=\"{{cities}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your city\" required />\n            <div class=\"modal-body p-6\">\n              <div class=\"mb-2 flex items-center justify-between\">\n                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Pilihan Kurir</span>\n              </div>\n              <div *ngFor=\"let result of resultCost\">\n                <div (click)=\"chooseKurir(result.service, result.cost[0].value)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n                  <div>\n                    <h3 *ngIf=\"kurir == result.cost[0].value; else nokurir\" class=\"text-green font-medium tracking-tight\">{{result.service}}</h3>\n                    <ng-template #nokurir>\n                      <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{result.service}}</h3>\n                    </ng-template>\n                    <div class=\"flex flex-wrap items-center\">\n                      <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{result.description}}</span>\n                    </div>\n                  </div>\n                  <div *ngIf=\"kurir == result.cost[0].value; else slowservie\" class=\"ml-auto\">\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                      <span class=\"text-green font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\n                    </span>\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\n                  </div>\n                  <ng-template #slowservie>\n                    <div class=\"ml-auto\">\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\n                      </span>\n                      <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{result.cost[0].value | number }}</div>\n                      <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\n                    </div>\n                  </ng-template>\n                </div>\n              </div>\n              <div class=\"mt-7 flex items-center justify-between\">\n                <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">Transfer Bank</span>\n              </div>\n              <div class=\"mt-2 text-sm\">\n                <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Bank BCA</span>\n              </div>\n              <div class=\"mt-2 text-sm\">\n                <h4 class=\"text-green mr-1\">4972990519</h4>\n              </div>\n              <div class=\"mt-2 text-sm\">\n                <h4 class=\"text-white mr-1\">PT Oragon Teknologi Indonesia</h4>\n              </div>\n            </div>\n            <!-- </span> -->\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\n              <button (click)=\"pay_cartStore(cartID, globalID, wallets)\" *ngIf=\"state_buy == 2 && isLogin == '' && cartStatus == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Items Rp {{actualcartPrice | number}}.00</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Progress Modal -->\n    <div *ngIf=\"progressCount > 0\" class=\"modal fade\" id=\"progressModal\" tabindex=\"-1\" aria-labelledby=\"progressModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"progressModalLabel\">Progress</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n            </div>\n            <div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n                <figure class=\"mr-5 self-start\">\n                  <img src=\"assets/img/store/{{cartImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\n                </figure>\n                <div>\n                  <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{cartDeskripsi}}</h3>\n                  <div class=\"flex flex-wrap items-center\">\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{cartName}}</span>\n                  </div>\n                </div>\n                <div class=\"ml-auto\">\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                    <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\n                  </span>\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{cartPrice | number}}.00</div>\n                </div>\n              </div>\n            </div>\n            <!-- Total -->\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\n              <div class=\"ml-auto\">\n                <span class=\"flex items-center whitespace-nowrap\">\n                  <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-3\" style=\"width: 100%;\">\n            <input type=\"file\" (change)=\"pay_progressStore($event, ordersID, globalID, product_id, wallets)\" id=\"file-upload\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required />\n          </div>\n          <!-- end body -->\n          <!-- <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <button (click)=\"pay_progressStore(ordersID, globalID, wallets)\" *ngIf=\"state_buy == 2 && isLogin == ''\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Confirm Now</button>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n\n    <!-- Buy Now Dragon Modal -->\n    <div class=\"modal fade\" id=\"buyNowDirectDragonModal\" tabindex=\"-1\" aria-labelledby=\"buyNowDirectDragonModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"buyNowDragonModalLabel\">Complete checkout</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n              <figure class=\"relative py-4\">\n                <div *ngIf=\"marketp2pdragonID == 'ITM1'\">\n                  <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n                <div *ngIf=\"marketp2pdragonID == 'ITM9'\">\n                  <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n                <div *ngIf=\"marketp2pdragonID == 'ITM10'\">\n                  <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n                <div *ngIf=\"marketp2pdragonID == 'ITM11'\">\n                  <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n                <div *ngIf=\"marketp2pdragonID == 'ITM12'\">\n                  <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n                <div *ngIf=\"marketp2pdragonID == 'ITM13'\">\n                  <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                  <span>\n                    <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                    <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                      <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                          <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                          <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                        </svg>\n                      </span>\n                      <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                      <ng-template #favorited>\n                        <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\n                      </ng-template>\n                    </div>\n                  </span>\n                </div>\n              </figure>\n              <div class=\"w-full ml-12\">\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\n                <h3 *ngIf=\"marketp2pdragonID == 'null'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">NULL</h3>\n                <span *ngIf=\"marketp2pdragonBG == 'exists'\">\n                  <div class=\"flex flex-wrap items-center\">\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Price : {{priceRoyalty_display}} BNB</span>\n                  </div>\n                  <div class=\"flex flex-wrap items-center\">\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Dev Fee : {{fee_display}} BNB</span>\n                  </div>\n                  <div class=\"flex flex-wrap items-center\">\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Royalty : {{marketp2pdragonRoyalty}} BNB</span>\n                  </div>\n                  \n                </span>\n              </div>\n              <div class=\"ml-auto\">\n                <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{marketp2pdragonpriceUSD}}</div>\n              </div>\n            </div>\n            <!-- Total -->\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n              <div class=\"ml-auto\">\n                <span class=\"flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"text-green font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\n              </div>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\n              <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\n              <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee & Royalty {{fee_royalty}} BNB </button>\n              <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{priceRoyalty_display}} BNB </button>\n            </div>\n            <!-- Rankings -->\n            <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\n              <!-- Table -->\n              <div class=\"scrollbar-custom overflow-hidden\">\n                <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Owner History</span>\n                    </div>\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Price</span>\n                    </div>\n                    <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date</span>\n                    </div>\n                  </div>\n                  <!-- <a *ngFor=\"let r of dragonDetail;let i = index\" href=\"#\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\n                      <span class=\"mr-2 lg:mr-4\">{{i}}</span>\n                      <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\n                        <img *ngIf=\"r.ItemId == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngFor=\"let p of profile\">\n                            <img *ngIf=\"p.ItemId == r.itemid.substr(0,41)\" [src]=\"p.url\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                        <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                            <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\n                          </svg>\n                        </div>\n                      </figure>\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\n                        {{username}}\n                      </span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                          <g fill=\"#f3ba2f\">\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                          </g>\n                        </svg>\n                      </span>\n                      <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-white\">{{r.date | date}}</span>\n                    </div>\n                  </a> -->\n                </div>\n              </div>\n            </div>\n            <!-- end rankings -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Recently Sold Modal -->\n    <div class=\"modal fade\" id=\"recentlySoldModal\" tabindex=\"-1\" aria-labelledby=\"recentlySoldModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog max-w-2xl\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"buyNowModalLabel\">Detail</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n              </svg>\n            </button>\n          </div>\n          <!-- Body -->\n          <div class=\"modal-body p-6\">\n            <div class=\"mb-2 flex items-center justify-between\">\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img src=\"assets/img/user/1user_avatar.gif\" alt=\"collection avatar\" class=\"dark:border-jacarta-600 rounded-xl border-[5px] border-white w-10\" />\n              </figure>\n              <div>\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{historyItem}}</h3>\n                <div class=\"flex flex-wrap items-center\">\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{historyItemId}}</span>\n                </div>\n              </div>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"historyType == 'ORGN'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} ORGN</span>\n                </span>\n                <span *ngIf=\"historyType == 'BNB'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} BNB</span>\n                </span>\n                <span *ngIf=\"historyType == 'BUSD'\" class=\"mb-1 flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{historyAmount}} BNB</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{historyAmountUSD}}</div>\n              </div>\n            </div>\n            <!-- Total -->\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n              <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n              <div class=\"ml-auto\">\n                <span *ngIf=\"historyType == 'ORGN'\" class=\"flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  </span>\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} ORGN</span>\n                </span>\n                <span *ngIf=\"historyType == 'BNB'\" class=\"flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} BNB</span>\n                </span>\n                <span *ngIf=\"historyType == 'BUSD'\" class=\"flex items-center whitespace-nowrap\">\n                  <span data-tippy-content=\"ETH\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                  </span>\n                  <span class=\"text-green font-medium tracking-tight\">{{historyAmount}} BUSD</span>\n                </span>\n                <div class=\"dark:text-jacarta-300 text-right\">${{historyAmountUSD}}</div>\n              </div>\n            </div>\n          </div>\n          <!-- end body -->\n          <div class=\"modal-footer\">\n            <div class=\"flex items-center justify-center space-x-4\">\n              <a class=\"text-accent font-display text-sm font-semibold mb-2\">{{historyDate | date}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  <!-- end main -->\n\n  <!-- Footer -->\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\n    <div class=\"container\">\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\n        <div class=\"col-span-3 md:col-span-4\">\n          <!-- Logo -->\n          <a href=\"#\" class=\"mb-6 inline-block\">\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n          </a>\n          <p class=\"dark:text-jacarta-300 mb-12\">\n            Create, sell and collect truly rare digital artworks. Powered by blockchain technology.\n          </p>\n          <!-- Socials -->\n          <div class=\"flex space-x-5\">\n            <!-- <a href=\"#\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"facebook\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\n                ></path>\n              </svg>\n            </a> -->\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"twitter\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"discord\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 640 512\"\n              >\n                <path\n                  d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"instagram\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 448 512\"\n              >\n                <path\n                  d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"youtube\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 20 20\"\n              >\n                <path\n                  d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"\n                ></path>\n              </svg>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\n        <span class=\"dark:text-jacarta-400 text-sm\"\n          >&copy;\n          <script>\n            document.write(new Date().getFullYear())\n          </script>\n          Copyright OragonX All Rights Reserved By\n          <a href=\"https://oragonbsc.io\" class=\"hover:text-accent\">OragonX</a></span\n        >\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\n          <li>\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\n          </li>\n          <li><a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n  <!-- end footer -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map