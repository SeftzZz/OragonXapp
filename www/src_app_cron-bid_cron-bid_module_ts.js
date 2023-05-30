(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cron-bid_cron-bid_module_ts"],{

/***/ 28202:
/*!*****************************************************!*\
  !*** ./src/app/cron-bid/cron-bid-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronBidPageRoutingModule": () => (/* binding */ CronBidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _cron_bid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cron-bid.page */ 27598);




const routes = [{
  path: '',
  component: _cron_bid_page__WEBPACK_IMPORTED_MODULE_0__.CronBidPage
}];
let CronBidPageRoutingModule = class CronBidPageRoutingModule {};
CronBidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CronBidPageRoutingModule);


/***/ }),

/***/ 54217:
/*!*********************************************!*\
  !*** ./src/app/cron-bid/cron-bid.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronBidPageModule": () => (/* binding */ CronBidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cron_bid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cron-bid-routing.module */ 28202);
/* harmony import */ var _cron_bid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cron-bid.page */ 27598);







let CronBidPageModule = class CronBidPageModule {};
CronBidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cron_bid_routing_module__WEBPACK_IMPORTED_MODULE_0__.CronBidPageRoutingModule],
  declarations: [_cron_bid_page__WEBPACK_IMPORTED_MODULE_1__.CronBidPage]
})], CronBidPageModule);


/***/ }),

/***/ 27598:
/*!*******************************************!*\
  !*** ./src/app/cron-bid/cron-bid.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronBidPage": () => (/* binding */ CronBidPage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cron_bid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cron-bid.page.html?ngResource */ 72401);
/* harmony import */ var _cron_bid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cron-bid.page.scss?ngResource */ 68059);
/* harmony import */ var _cron_bid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cron_bid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _awesome_cordova_plugins_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/push/ngx */ 12359);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/messaging */ 6157);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/messaging.service */ 64271);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;









const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);





// AngularFire



// Services



// Web3



const providerOptions = {
  walletconnect: {
    package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_14__["default"],
    options: {
      network: "binance",
      infuraId: "46a670cff8894b729ea30027244e4641",
      rpc: {
        56: "https://oragonbsc.io/binance/"
      }
    }
  }
};
const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_13___default())({
  network: "mainnet",
  cacheProvider: true,
  providerOptions // required
});

let CronBidPage = (_class = class CronBidPage {
  constructor(authService, router, loadingController, alertController, toastCtrl, fs, http, global, senddata, datepipe, push, messagingService, platform) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datepipe", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "push", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "messagingService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "platform", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "infiniteScroll", void 0);
    // Root Object
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isLogin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "percentRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "valueRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscription", void 0);
    // AGM
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latitude", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "longitude", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "zoom", void 0);
    // WEB3
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
    //WALLET PARAM
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3js", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "accounts", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "address_to", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "amount_to", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "provider", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance1", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3Modal", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenInst", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3provider", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "check", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datas_oragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_oragon", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_bnb", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "payment_count", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenABI", [
    // balanceOf
    {
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
    },
    // transfer
    {
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storecart", void 0);
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
    // P2P Market
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lastseen", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lastcategory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bgLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsdate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceBNB", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragontime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceRoyalty_display", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_royalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortdragons", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortp2pmarket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsLow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsAtoZ", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "btnclickcategory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsLow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsHAtoZ", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggpriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sorteggs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesLow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesHAtoZ", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatterypriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodLow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodHAtoZ", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodOID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodpriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodpriceBNB", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodQty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodHVP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfoodsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_qty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_stock", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonMaxHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonMaxHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHunger", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontype", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonpriceBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragontimeCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonpriceNow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBIDfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragoncreatedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonBidHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonBidHistoryWin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonBidHistoryWinuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonBidHistorycartwinBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latest_date", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggtype", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDegguidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggpriceBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggtime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggLastUpdate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggbidTime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggtimeCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggpriceNow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggBIDfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggcreatedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggBidHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggBidHistoryWin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggBidHistoryWinuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggBidHistorycartwinBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDeggLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggBIDLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatterytype", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatterypriceBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatterytime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatterytimeCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatterypriceNow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryBIDfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatterycreatedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryBidHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryBidHistoryWin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryBidHistoryWinuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryBidHistorycartwinBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDbatteryLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batterysBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryBIDLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodDocId", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodImg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodAttack", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodDefense", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodLevel", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodHP", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodRarity", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodExp", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodprice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodtype", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfooduidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodpriceBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodtime", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodtimeCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodpriceNow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodBIDfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodcreatedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodBidHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodBidHistoryWin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodBidHistoryWinuidBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodBidHistorycartwinBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDfoodLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodsBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodBIDLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "days", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hours", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutes", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "seconds", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "daysEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursEg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesEg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsEg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "daysBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "daysFood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursFood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesFood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsFood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "daysSell", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursSell", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesSell", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsSell", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price_actual", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bid_now", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidlist", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdown", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdownCart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartBidcount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidCount", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidcart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hourscart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutescart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondscart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidPrice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidPriceUSD", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state_BID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "price_display_StepBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenPushNotification", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenNotif", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "carttimeleft", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sesicart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "executeTimeCart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "counttimeCart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdownWinner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdownBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadWinBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateCollectionBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "switchToWinner", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateExecuteBid", false);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "message", null);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "VAPID_PUBLIC_KEY", "BH6Pwg4y3wc38Ia1gQnr3mnhAU_StteRTEEIUAFoK14Ux_ci9ALK6RX76kSAUxQzC4FUJ0f6b9Ts-96xpK_I2NE");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingtext", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notifications", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countNotifBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sesion1", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sessioncountdownCart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataNotif", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notificationBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdowncheckdragonbidall", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdowncheckeggbidall", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdowncheckbatterybidall", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fulltimeServer", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fulltimeServerEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hs", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ms", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ss", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isRunning", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timerId", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidTime", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hms", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdownSecond", void 0);
    this.authService = authService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.toastCtrl = toastCtrl;
    this.fs = fs;
    this.http = http;
    this.global = global;
    this.senddata = senddata;
    this.datepipe = datepipe;
    this.push = push;
    this.messagingService = messagingService;
    this.platform = platform;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.platform = platform;
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
      _this2.router.navigateByUrl("/tabs/login", {
        replaceUrl: true
      });
    })();
  }
  alertWithdraw() {
    var _this3 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: "Congratulation !",
        message: "Now you can Withdraw, check your profile.",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  ngOnInit() {
    var _this4 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.connect = false;
      _this4.setCurrentLocation();
      _this4.status_direct_buy = 1;
      _this4.senddata.getcurrentoragon2().subscribe(data => {
        _this4.current_oragon = data.data.price;
        var Web3 = __webpack_require__(/*! web3 */ 30143);
        // Gatcha 10X
        let currTen = (100 / _this4.current_oragon).toFixed();
        _this4.latesttenOragon = (Web3.utils.fromWei(currTen, "wei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // Gatcha 1X
        let currOne = (12 / _this4.current_oragon).toFixed();
        _this4.latestoneOragon = (Web3.utils.fromWei(currOne, "wei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // console.log(this.latestoneOragon);
      }, error => {});
      _this4.senddata.getcurrentbnb().subscribe(data => {
        _this4.current_bnb = data.data.price_BNB;
        // console.log(this.current_bnb)
      }, error => {});
      _this4.isLogin = localStorage.getItem("isLogin");
      _this4.localStorage = localStorage.getItem("ProfileData");
      _this4.parse_localStorage = JSON.parse(_this4.localStorage);
      if (_this4.localStorage == undefined) {
        _this4.isLogin = "!";
      } else {
        _this4.isLogin = "";
        _this4.wallets = _this4.parse_localStorage.WalletAddress;
        _this4.username = _this4.parse_localStorage.PlayerName;
        _this4.globalID = _this4.parse_localStorage.Uid;
        _this4.email = _this4.parse_localStorage.Email;
        _this4.senddata.balancePlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, "gwei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
          // console.log(this.balanceORGNPlayers);
        }, error => {});
        _this4.senddata.balanceBNBPlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, "gwei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
          // console.log(this.balanceBNBPlayers);
          _this4.valueRoyalty = _this4.balanceBNBPlayers / 100 * 100;
          _this4.percentRoyalty = _this4.balanceBNBPlayers * 100;
          if (_this4.valueRoyalty == 1) {
            localStorage.setItem("wd", "1");
            let wd = localStorage.getItem("wd");
            if (wd == "1") {
              _this4.alertWithdraw();
              return wd;
            }
            return _this4.valueRoyalty;
          }
        }, error => {});
        _this4.senddata.balanceBUSDPlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, "gwei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
          // console.log(this.balanceBUSDPlayers);
        }, error => {});
        _this4.notificationBid = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // this.checknotificationBid();
          // this.checknotificationSellDragon();
          // this.checknotificationSellEgg();
          // this.checkeggBIDall();
        }), 3000);
        const loading = yield _this4.loadingController.create();
        yield loading.present();
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.dragons = dataSell;
          _this4.marketp2pdragonLength = dataSell.length;
          for (let i in _this4.dragons) {
            if (_this4.dragons[i].imgbackground == 'exists') {
              _this4.senddata.getallbackgroundsellmp(_this4.dragons[i].ItemId).subscribe(dataBackground => {
                _this4.dragonsownedbg = JSON.parse(dataBackground);
                _this4.marketp2pdragonBG = _this4.dragonsownedbg.imgBg;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        loading.dismiss();
      }
      _this4.stateHash = true;
      _this4.state_buy = 2;
      _this4.currentp2p = 0;
      _this4.sortp2pmarket = 4;
      console.log("category p2p", _this4.currentp2p);
      console.log("sort p2p", _this4.sortp2pmarket);
      let lastitems = localStorage.getItem("lastseen");
      if (lastitems == "dragon") {
        _this4.lastseen = "dragon";
        const loading = yield _this4.loadingController.create();
        yield loading.present();
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.dragons = dataSell;
          _this4.marketp2pdragonLength = dataSell.length;
          for (let i in _this4.dragons) {
            if (_this4.dragons[i].imgbackground == 'exists') {
              _this4.senddata.getallbackgroundsellmp(_this4.dragons[i].ItemId).subscribe(dataBackground => {
                _this4.dragonsownedbg = JSON.parse(dataBackground);
                _this4.marketp2pdragonBG = _this4.dragonsownedbg.imgBg;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        loading.dismiss();
      } else if (lastitems == "egg") {
        _this4.lastseen = "egg";
        const loading = yield _this4.loadingController.create();
        yield loading.present();
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.eggsHigh = dataSell;
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.marketp2pdragonLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        loading.dismiss();
      } else if (lastitems == "battery") {
        _this4.lastseen = "battery";
        const loading = yield _this4.loadingController.create();
        yield loading.present();
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.batteriesHigh = dataSell;
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.marketp2pdragonLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        loading.dismiss();
      } else if (lastitems == "food") {
        _this4.lastseen = "food";
        const loading = yield _this4.loadingController.create();
        yield loading.present();
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.foodsHigh = dataSell;
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.marketp2pdragonLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.sessionCart();
        loading.dismiss();
      }
      _this4.senddata.getselleggBIDmp().subscribe(dataSell => {
        _this4.eggsBID = dataSell;
        for (let i in _this4.eggsBID) {
          if (_this4.isRunning == false) {
            _this4.countdown = setInterval(() => {
              _this4.senddata.getselleggBIDmp().subscribe(dataSell => {
                _this4.eggsBID = dataSell;
              });
              _this4.marketp2pBIDeggDocId = _this4.eggsBID[i].DocId;
              _this4.hoursEgg = _this4.eggsBID[i].hours;
              _this4.minutesEgg = _this4.eggsBID[i].minutes;
              _this4.secondsEgg = _this4.eggsBID[i].seconds;
              _this4.secondsEgg++;
              if (_this4.secondsEgg >= 60) {
                _this4.minutesEgg++;
                _this4.secondsEgg = 0;
              }
              if (_this4.minutesEgg >= 60) {
                _this4.hoursEgg++;
                _this4.minutesEgg = 0;
              }
              _this4.senddata.hmsBIDmp(_this4.marketp2pBIDeggDocId, _this4.hoursEgg, _this4.minutesEgg, _this4.secondsEgg).subscribe(res => {
                _this4.isRunning = true;
                _this4.bidTime = true;
              });
              if (_this4.hoursEgg >= _this4.eggsBID[i].bidTime) {
                // this.hoursEgg = this.eggsBID[i].bidTime;
                // this.minutesEgg = 0;
                // this.secondsEgg = 0;
                _this4.isRunning = true;
                // clearInterval(this.countdown);
                _this4.senddata.hmsBIDmp(_this4.marketp2pBIDeggDocId, _this4.hoursEgg, _this4.minutesEgg, _this4.secondsEgg).subscribe(res => {
                  _this4.isRunning = true;
                  _this4.bidTime = true;
                });
                _this4.countdownSecond = setInterval(() => {
                  _this4.senddata.getselleggBIDmp().subscribe(dataSell => {
                    _this4.eggsBID = dataSell;
                  });
                }, 1000);
              }
            }, 1000);
          }
        }
      });
      localStorage.setItem("tabs", "bid");
    })();
  }
  checknotificationSellDragon() {
    var _this5 = this;
    this.senddata.getNotificationSellDragonmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this5.dataNotif = JSON.parse(dataNotif);
        for (let i in _this5.dataNotif) {
          console.log("dataNotif", _this5.dataNotif[i].idSell);
          const toast2 = yield _this5.toastCtrl.create({
            header: 'You have notifications',
            message: 'Your Dragon has been sold in ' + _this5.dataNotif[i].priceSell + ' BNB',
            icon: 'information-circle',
            position: 'top',
            color: 'success',
            buttons: [{
              text: 'Close',
              role: 'cancel',
              handler: () => {
                _this5.senddata.readNotificationSellmp(_this5.dataNotif[i].idSell).subscribe( /*#__PURE__*/function () {
                  var _ref3 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    console.log(dataRead, 'notifications readed');
                  });
                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }
            }]
          });
          yield toast2.present();
          _this5.senddata.getNotificationSellDragonmp(_this5.globalID);
          const {
            role
          } = yield toast2.onDidDismiss();
        }
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  checknotificationSellEgg() {
    var _this6 = this;
    this.senddata.getNotificationSellEggmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this6.dataNotif = JSON.parse(dataNotif);
        for (let i in _this6.dataNotif) {
          console.log("dataNotif", _this6.dataNotif[i].idSell);
          const toast2 = yield _this6.toastCtrl.create({
            header: 'You have notifications',
            message: 'Your Egg has been sold in ' + _this6.dataNotif[i].priceSell + ' BNB',
            icon: 'information-circle',
            position: 'top',
            color: 'success',
            buttons: [{
              text: 'Close',
              role: 'cancel',
              handler: () => {
                _this6.senddata.readNotificationSellmp(_this6.dataNotif[i].idSell).subscribe( /*#__PURE__*/function () {
                  var _ref5 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    console.log(dataRead, 'notifications readed');
                  });
                  return function (_x4) {
                    return _ref5.apply(this, arguments);
                  };
                }());
              }
            }]
          });
          yield toast2.present();
          _this6.senddata.getNotificationSellEggmp(_this6.globalID);
          const {
            role
          } = yield toast2.onDidDismiss();
        }
      });
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  checknotificationBid() {
    var _this7 = this;
    this.senddata.getNotificationBidmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this7.dataNotif = JSON.parse(dataNotif);
        for (let i in _this7.dataNotif) {
          console.log("dataNotif", _this7.dataNotif[i].idBid);
          const toast2 = yield _this7.toastCtrl.create({
            header: 'You have notifications',
            message: _this7.dataNotif[i].username + ' has place bid in ' + _this7.dataNotif[i].priceBid + ' BNB',
            icon: 'information-circle',
            position: 'top',
            color: 'success',
            buttons: [{
              text: 'Close',
              role: 'cancel',
              handler: () => {
                _this7.senddata.readNotificationBidmp(_this7.dataNotif[i].idBid).subscribe( /*#__PURE__*/function () {
                  var _ref7 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    console.log(dataRead, 'notifications readed');
                  });
                  return function (_x6) {
                    return _ref7.apply(this, arguments);
                  };
                }());
              }
            }]
          });
          yield toast2.present();
          _this7.senddata.getNotificationBidmp(_this7.globalID);
          const {
            role
          } = yield toast2.onDidDismiss();
        }
      });
      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  checknotificationLosesBid(uidBid, idBid) {
    // this.senddata.getNotificationLosesBidmp(uidBid, idBid).subscribe(async (dataNotif: any) => {
    //   this.dataNotif = JSON.parse(dataNotif);
    //   for(let i in this.dataNotif) {
    //     if(this.globalID == uidBid) {
    //       const toast2 = await this.toastCtrl.create({
    //         header: 'You have notifications',
    //         message: 'Your Bid is lose, higest bid has switch to another players',
    //         icon: 'information-circle',
    //         position: 'top',
    //         color: 'warning',
    //         buttons: [
    //           {
    //             text: 'Close',
    //             role: 'cancel',
    //             handler: () => {
    //               this.senddata.readNotificationBidmp(this.dataNotif[i].idBid).subscribe(async (dataRead: any) => {
    //                 console.log(dataRead, 'notifications readed');
    //               });
    //             }
    //           }
    //         ]                    
    //       });
    //       await toast2.present();
    //       this.senddata.getNotificationBidmp(this.globalID);
    //       const { role } = await toast2.onDidDismiss();
    //     } else {
    //       const toast2 = await this.toastCtrl.create({
    //         header: 'You have notifications',
    //         message: 'Your Bid is lose, higest bid has switch to another players',
    //         icon: 'information-circle',
    //         position: 'top',
    //         color: 'warning',
    //         buttons: [
    //           {
    //             text: 'Close',
    //             role: 'cancel',
    //             handler: () => {
    //               this.senddata.readNotificationBidmp(this.dataNotif[i].idBid).subscribe(async (dataRead: any) => {
    //                 console.log(dataRead, 'notifications readed');
    //               });
    //             }
    //           }
    //         ]                    
    //       });
    //       await toast2.present();
    //       this.senddata.getNotificationBidmp(this.globalID);
    //       const { role } = await toast2.onDidDismiss();
    //     }
    //   }
    // });
  }
  requestPermission() {
    var _this8 = this;
    this.messagingService.requestPermission().subscribe( /*#__PURE__*/function () {
      var _ref8 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (token) {
        _this8.tokenPushNotification = token;
        const toast = yield _this8.toastCtrl.create({
          message: 'Got your token',
          duration: 2000
        });
        toast.present();
      });
      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref9 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        const alert = yield _this8.alertController.create({
          header: 'Error',
          message: err,
          buttons: ['OK']
        });
        yield alert.present();
      });
      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
  // AGM Get Current Location Coordinates
  setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 19;
        var Latitude = "Latitude";
        var Longtitude = "Longitude";
        var js = JSON.stringify({
          Latitude: this.latitude,
          Longtitude: this.longitude
        });
        localStorage.setItem("geoLocation", js);
        this.http.get("http://api.ipify.org/?format=json").subscribe(res => {
          this.ipAddress = res.ip;
          this.senddata.setkycuser(this.globalID, this.ipAddress, js).subscribe(data => {}, error => {});
        });
      });
    }
  }
  // WEB3
  connectAccount() {
    var _this9 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.provider = yield web3Modal.connect();
      _this9.getcurrentoragon();
      yield _this9.getPaymentCount();
      _this9.web3js = new (web3__WEBPACK_IMPORTED_MODULE_12___default())(_this9.provider); // create web3 instance
      //console.log(this.web3js);
      _this9.accounts = yield _this9.web3js.eth.getAccounts(console.log);
      _this9.wallet = _this9.accounts[0];
      if (_this9.wallet == _this9.wallets) {
        _this9.tokenInst = new _this9.web3js.eth.Contract(_this9.tokenABI, "0x88c676fc777c225b69869aeef5d10535de1e4f5d");
        _this9.balance1 = yield _this9.tokenInst.methods.balanceOf(_this9.accounts[0]).call(console.log);
        _this9.oragon_balance_display = (_this9.web3js.utils.fromWei(_this9.balance1, "gwei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        _this9.oragon_balance = _this9.web3js.utils.fromWei(_this9.balance1, "gwei");
        _this9.in_dollar = _this9.oragon_balance * _this9.current_oragon;
        _this9.oragon_balance2 = _this9.balance1;
        _this9.balance2 = yield _this9.web3js.eth.getBalance(_this9.accounts[0]);
        _this9.bnb_balance = _this9.web3js.utils.fromWei(_this9.balance2, "ether");
        //console.log(this.bnb_balance);
        //if connect
        _this9.connect = true;
        if (_this9.payment_count <= 0) {
          _this9.state_buy = "2";
        } else if (_this9.payment_count > 0) {
          _this9.state_buy = "2";
        }
        _this9.stateHash = true;
        // fee gatcha
        _this9.fee = (11 / 100 * 100 * 0.0027).toString(); //10X
        let kind = localStorage.getItem("kind");
        if (kind == "dragon") {
          // fee p2p market dragon
          _this9.marketp2pdragonFee = 12 / 100 * _this9.marketp2pdragonprice;
          let marketp2pdragonprice_actual = _this9.marketp2pdragonprice - _this9.marketp2pdragonFee;
          _this9.fee_display = _this9.marketp2pdragonFee;
          _this9.price_display = marketp2pdragonprice_actual;
          _this9.marketp2pdragonRoyalty = 10 / 100 * _this9.marketp2pdragonprice;
        } else if (kind == "egg") {
          // fee p2p market egg
          _this9.marketp2peggFee = 12 / 100 * _this9.marketp2peggprice;
          let marketp2peggprice_actual = _this9.marketp2peggprice - _this9.marketp2peggFee;
          _this9.fee_display = _this9.marketp2peggFee;
          _this9.price_display = marketp2peggprice_actual;
        } else if (kind == "battery") {
          // fee p2p market battery
          _this9.marketp2pbatteryFee = 12 / 100 * _this9.marketp2pbatteryprice;
          let marketp2pbatteryprice_actual = _this9.marketp2pbatteryprice - _this9.marketp2pbatteryFee;
          _this9.fee_display = _this9.marketp2pbatteryFee;
          _this9.price_display = marketp2pbatteryprice_actual;
        } else if (kind == "food") {
          // fee p2p market food
          _this9.marketp2pfoodFee = 12 / 100 * _this9.marketp2pfoodprice;
          let marketp2pfoodprice_actual = _this9.marketp2pfoodprice - _this9.marketp2pfoodFee;
          _this9.fee_display = _this9.marketp2pfoodFee;
          _this9.price_display = marketp2pfoodprice_actual;
        }
        const alert = yield _this9.alertController.create({
          header: "Success",
          message: "Connected to Registered Wallet",
          buttons: ["OK"]
        });
        yield alert.present();
        //if connect
      } else {
        yield _this9.provider.close();
        _this9.provider = null;
        _this9.connect = false;
        const alert = yield _this9.alertController.create({
          header: "Failed!",
          message: "Please Use Registered Wallet",
          buttons: ["OK"]
        });
        yield alert.present();
      }
    })();
  }
  // Payment Market P2P
  pay_firstMarketp2p() {
    var _this10 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this10.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("lastseen");
      if (kind == "dragon") {
        _this10.fs.collection("Players").doc(_this10.marketp2pdragonowner).valueChanges().subscribe(datas => {
          //console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          _this10.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this10.kind = "dragon";
        // Build Json String Dragon
        let crd = JSON.stringify({
          ObjectId: Number(_this10.marketp2pdragonDocId),
          ItemId: _this10.marketp2pdragonID,
          Id: _this10.marketp2pdragonImg,
          HP: Number(_this10.marketp2pdragonHP),
          Attack: Number(_this10.marketp2pdragonAttack),
          Defense: Number(_this10.marketp2pdragonDefense),
          Exp: Number(_this10.marketp2pdragonExp),
          Level: Number(_this10.marketp2pdragonLevel),
          Rarity: _this10.marketp2pdragonRarity,
          price: Number(_this10.marketp2pdragonprice),
          owner: _this10.marketp2pdragonowner
        });
        _this10.current_data = JSON.parse(crd);
        console.log(JSON.stringify(_this10.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this10.senddata.gettokenOwnermp(_this10.marketp2pdragonowner).subscribe(dataToken => {
              _this10.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this10.senddata.settrxhistory(_this10.globalID,
              //userid
              _this10.marketp2pdragonDocId + '-' + _this10.kind,
              //itemid
              _this10.marketp2pdragonprice,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this10.current_data),
              //item
              _this10.email,
              //email
              _this10.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this10.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2pdragonowner + '/Dragons').doc(_this10.marketp2pdragonDocId);
        var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Dragons').doc(_this10.marketp2pdragonDocId);
        try {
          _this10.fs.firestore.collection('Sell/' + _this10.marketp2pdragonowner + '/Dragons').doc(_this10.marketp2pdragonDocId).delete().then(() => {});
          _this10.fs.collection('Items/' + _this10.globalID + '/Dragons').doc(_this10.marketp2pdragonDocId).set({
            Id: _this10.marketp2pdragonDocId,
            ItemId: _this10.marketp2pdragonID,
            Attributes: {
              AttackPoint: Number(_this10.marketp2pdragonAttack),
              DefensePoint: Number(_this10.marketp2pdragonDefense),
              Exp: Number(_this10.marketp2pdragonExp),
              HP: Number(_this10.marketp2pdragonHP),
              Hunger: Number(_this10.marketp2pdragonHunger),
              Level: Number(_this10.marketp2pdragonLevel),
              MaxHP: Number(_this10.marketp2pdragonMaxHP),
              MaxHunger: Number(_this10.marketp2pdragonMaxHunger)
            }
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this10.senddata.selldragontoitemsmp(_this10.globalID, _this10.marketp2pdragonDocId).subscribe(dataE => {
          console.log(dataE);
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2peggID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this10.senddata.addSellListmp(_this10.marketp2pdragonDocId, _this10.globalID, _this10.priceRoyalty_display).subscribe(dataE => {});
        loading.dismiss();
        const alert = yield _this10.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        _this10.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
          var _ref10 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            const loading = yield _this10.loadingController.create();
            yield loading.present();
            _this10.dragons = dataSell;
            _this10.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          });
          return function (_x9) {
            return _ref10.apply(this, arguments);
          };
        }(), error => {});
        _this10.state_buy = 4;
        // this.senddata.setitemhistory(this.marketp2pdragonDocId,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "egg") {
        // this.fs
        //   .collection("Players")
        //   .doc(this.marketp2peggowner)
        //   .valueChanges()
        //   .subscribe((datas: any) => {
        //     //console.log(datas.ProfileData);
        //     let data_user = JSON.parse(datas.ProfileData);
        //     // console.log(data_user.WalletAddress)
        //     this.owner_address = data_user.WalletAddress;
        //     // console.log(this.owner_address)
        //   });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this10.kind = "egg";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: _this10.marketp2peggDocId,
          ItemId: _this10.marketp2peggID,
          price: _this10.price_display
        });
        _this10.current_data = JSON.parse(crd);
        console.log(_this10.current_data);
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this10.senddata.gettokenOwnermp(_this10.marketp2peggowner).subscribe(dataToken => {
              _this10.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this10.senddata.settrxhistory(_this10.globalID,
              //userid
              _this10.marketp2peggDocId + '-' + _this10.kind,
              //itemid
              _this10.price_display,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this10.current_data),
              //item
              _this10.email,
              //email
              _this10.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this10.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2peggowner + '/Eggs').doc(_this10.marketp2peggDocId);
        var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Eggs').doc(_this10.marketp2peggDocId);
        try {
          _this10.fs.firestore.collection('Sell/' + _this10.marketp2peggowner + '/Eggs').doc(_this10.marketp2peggDocId).delete().then(() => {});
          _this10.fs.collection('Items/' + _this10.globalID + '/Eggs').doc(_this10.marketp2peggDocId).set({
            Id: _this10.marketp2peggDocId,
            ItemId: _this10.marketp2peggID
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this10.senddata.selleggtoitemsmp(_this10.globalID, _this10.marketp2peggDocId).subscribe(dataE => {
          console.log(dataE);
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2peggID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this10.senddata.addSellListmp(_this10.marketp2peggDocId, _this10.globalID, _this10.price_display).subscribe(dataE => {});
        loading.dismiss();
        const alert = yield _this10.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        //if success
        _this10.state_buy = "3";
        _this10.status_2 = "1";
        _this10.cartBidcount = 0;
        _this10.senddata.getselleggmp().subscribe(dataSell => {
          _this10.sorteggs = dataSell;
          _this10.marketp2peggLength = dataSell.length;
          // console.log(this.sorteggs)
          let marketp2pdragonDate = _this10.sorteggs;
          for (let i in marketp2pdragonDate) {
            _this10.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
          }
        }, error => {});
        _this10.senddata.getselleggBIDmp().subscribe( /*#__PURE__*/function () {
          var _ref11 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            const loading = yield _this10.loadingController.create();
            yield loading.present();
            _this10.eggsBID = dataSell;
            _this10.marketp2peggLength = dataSell.length;
            loading.dismiss();
            // console.log(this.eggsBID)
            let marketp2pdragonDate = _this10.eggsBID;
          });
          return function (_x10) {
            return _ref11.apply(this, arguments);
          };
        }(), error => {});
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "battery") {
        // this.fs
        //   .collection("Players")
        //   .doc(this.marketp2peggowner)
        //   .valueChanges()
        //   .subscribe((datas: any) => {
        //     //console.log(datas.ProfileData);
        //     let data_user = JSON.parse(datas.ProfileData);
        //     // console.log(data_user.WalletAddress)
        //     this.owner_address = data_user.WalletAddress;
        //     // console.log(this.owner_address)
        //   });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this10.kind = "battery";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: _this10.marketp2pbatteryDocId,
          ItemId: _this10.marketp2pbatteryID,
          price: _this10.price_display
        });
        _this10.current_data = JSON.parse(crd);
        console.log(_this10.current_data);
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this10.senddata.gettokenOwnermp(_this10.marketp2pbatteryowner).subscribe(dataToken => {
              _this10.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this10.senddata.settrxhistory(_this10.globalID,
              //userid
              _this10.marketp2pbatteryDocId + '-' + _this10.kind,
              //itemid
              _this10.price_display,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this10.current_data),
              //item
              _this10.email,
              //email
              _this10.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this10.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2pbatteryowner + '/Batteries').doc(_this10.marketp2pbatteryDocId);
        var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Batteries').doc(_this10.marketp2pbatteryDocId);
        try {
          _this10.fs.firestore.collection('Sell/' + _this10.marketp2pbatteryowner + '/Batteries').doc(_this10.marketp2pbatteryDocId).delete().then(() => {});
          _this10.fs.collection('Items/' + _this10.globalID + '/Batteries').doc(_this10.marketp2pbatteryDocId).set({
            Id: _this10.marketp2pbatteryDocId,
            ItemId: _this10.marketp2pbatteryID
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this10.senddata.sellbatterytoitemsmp(_this10.globalID, _this10.marketp2pbatteryDocId).subscribe(dataE => {
          console.log(dataE);
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2pbatteryID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this10.senddata.addSellListmp(_this10.marketp2pbatteryDocId, _this10.globalID, _this10.price_display).subscribe(dataE => {});
        loading.dismiss();
        const alert = yield _this10.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        //if success
        _this10.state_buy = "3";
        _this10.status_2 = "1";
        _this10.senddata.getsellbatterymp().subscribe(dataSell => {
          _this10.batteriesHigh = dataSell;
          _this10.marketp2pbatteryLength = dataSell.length;
          // console.log(this.batteriesHigh)
        }, error => {});
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "food") {
        _this10.fs.collection("Players").doc(_this10.marketp2pfoodowner).valueChanges().subscribe(datas => {
          //console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          _this10.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this10.kind = "food";
        // Build Json String Battery
        let crd = JSON.stringify({
          ItemId: _this10.marketp2pfoodID,
          Id: _this10.marketp2pfoodImg,
          HVP: Number(_this10.marketp2pfoodHVP),
          Count: Number(_this10.marketp2pfoodQty),
          price: _this10.marketp2pfoodprice,
          owner: _this10.marketp2pfoodowner
        });
        _this10.current_data = JSON.parse(crd);
        console.log(JSON.stringify(_this10.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this10.senddata.gettokenOwnermp(_this10.marketp2pfoodowner).subscribe(dataToken => {
              _this10.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this10.senddata.settrxhistory(_this10.globalID,
              //userid
              _this10.marketp2pfoodOID + '-' + _this10.kind,
              //itemid
              _this10.marketp2pfoodprice,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this10.current_data),
              //item
              _this10.email,
              //email
              _this10.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this10.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this10.fs.firestore.collection("Sell").doc(_this10.marketp2pfoodowner);
        var sfDocRef2 = _this10.fs.firestore.collection("Items").doc(_this10.globalID);
        try {
          _this10.fs.firestore.runTransaction( /*#__PURE__*/function () {
            var _ref12 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (transaction) {
              const sfDoc = yield transaction.get(sfDocRef);
              let kind = localStorage.getItem("kind");
              if (sfDoc.data()["FoodGroup"].indexOf(JSON.stringify(_this10.current_data)) > -1) {
                // console.log(sfDoc)
                // console.log(sfDoc.data()["FoodGroup"])
                //DELETE
                const datax = _this10.current_data;
                yield transaction.update(sfDocRef, {
                  FoodGroup: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayRemove(JSON.stringify(datax))
                });
                //ADD
                delete datax.price;
                delete datax.owner;
                delete datax.IsNew;
                delete datax.ObjectId;
                delete datax.AddAt;
                delete datax.Qty;
                yield transaction.update(sfDocRef2, {
                  Food: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify(datax)),
                  FoodLength: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(_this10.marketp2pfoodQty)
                });
                loading.dismiss();
                const alert = yield _this10.alertController.create({
                  header: "Success",
                  message: "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"]
                });
                yield alert.present();
              } else {
                throw "Document FoodGroup does not exist!";
              }
            });
            return function (_x11) {
              return _ref12.apply(this, arguments);
            };
          }());
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        // this.senddata.setitemhistory(this.marketp2pfoodID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {});
        _this10.senddata.addSellListmp(_this10.marketp2pfoodID, _this10.globalID, _this10.marketp2pfoodprice).subscribe(dataE => {});
        _this10.senddata.updatesellfoodUserqtymp(_this10.globalID, _this10.marketp2pfoodID, _this10.marketp2pfoodQty).subscribe(data => {});
        _this10.senddata.updatesellfoodUsermp(_this10.globalID, _this10.marketp2pfoodID, "transactionHash").subscribe(data => {}, error => {});
        _this10.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
          var _ref13 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            _this10.foodsHigh = dataSell;
          });
          return function (_x12) {
            return _ref13.apply(this, arguments);
          };
        }(), error => {});
        //if success
        _this10.stateHash = true;
        _this10.state_buy = 2;
        _this10.status_2 = "1";
        loading.dismiss();
        //if success
        //         }
        //       }
        //     )
        //     localStorage.removeItem('walletconnect');
        //   }else{
        //     const alert = await this.alertController.create({
        //       header: 'Failed!',
        //       message: 'BNB Balance is not Enough',
        //       buttons: ['OK'],
        //     });
        //     await alert.present();
        //   }
      }

      localStorage.removeItem("lastpay");
      localStorage.removeItem("lastdragon");
    })();
  }
  pay_secondMarketp2p() {
    // this.web3js.eth.sendTransaction({
    //   from : this.wallet,
    //   to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
    //   value : this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
    //   gas : 500000,
    //   gasPrice : 5000000000
    //   }, async (err : any, transactionHash : any) => {
    //     if(err){
    //       this.openDialog("Transaction Error Please Try Again");
    //     }else{
    let kind = localStorage.getItem("lastseen");
    if (kind == "dragon") {
      this.kind = "dragon";
      // Build Json String Dragon
      let crd = JSON.stringify({
        ObjectId: Number(this.marketp2pdragonDocId),
        ItemId: this.marketp2pdragonID,
        Id: this.marketp2pdragonImg,
        HP: Number(this.marketp2pdragonHP),
        Attack: Number(this.marketp2pdragonAttack),
        Defense: Number(this.marketp2pdragonDefense),
        Exp: Number(this.marketp2pdragonExp),
        Level: Number(this.marketp2pdragonLevel),
        Rarity: this.marketp2pdragonRarity,
        price: this.marketp2pdragonprice,
        owner: this.marketp2pdragonowner
      });
      this.current_data = JSON.parse(crd);
      console.log(JSON.stringify(this.current_data));
      // Create Royalty pos 1
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
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
        vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
      }).then(tokenPushNotification => {
        if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe(dataToken => {
            this.tokenNotif = JSON.parse(dataToken);
            // Create Transaction History
            this.senddata.settrxhistory(this.globalID,
            //userid
            this.marketp2pdragonDocId + '-' + this.kind,
            //itemid
            this.fee_royalty,
            //amount
            'transactionHash',
            //tx_hash
            'bnb-to-oragon',
            //type
            JSON.stringify(this.current_data),
            //item
            this.email,
            //email
            this.tokenNotif.tokenPushNotification //token
            ).subscribe(data => {}, error => {});
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });
      this.state_buy = 3;
      this.status_1 = "1";
      localStorage.setItem("lastpay", this.marketp2pdragonDocId);
    } else if (kind == "egg") {
      this.kind = "egg";
      // Build Json String Egg
      let crd = JSON.stringify({
        ItemId: this.marketp2peggID,
        Id: this.marketp2peggImg,
        owner: this.marketp2peggowner,
        price: this.marketp2peggprice
      });
      this.current_data = JSON.parse(crd);
      console.log(JSON.stringify(this.current_data));
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
        vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
      }).then(tokenPushNotification => {
        if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe(dataToken => {
            this.tokenNotif = JSON.parse(dataToken);
            // Create Transaction History
            this.senddata.settrxhistory(this.globalID,
            //userid
            this.marketp2peggDocId + '-' + this.kind,
            //itemid
            this.marketp2peggprice,
            //amount
            'transactionHash',
            //tx_hash
            'bnb-to-oragon',
            //type
            JSON.stringify(this.current_data),
            //item
            this.email,
            //email
            this.tokenNotif.tokenPushNotification //token
            ).subscribe(data => {}, error => {});
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });
      this.state_buy = "3";
      this.status_1 = "1";
    } else if (kind == "battery") {
      this.kind = "battery";
      // Build Json String Battery
      let crd = JSON.stringify({
        ItemId: this.marketp2pbatteryID,
        Id: this.marketp2pbatteryImg,
        price: this.marketp2pbatteryprice,
        owner: this.marketp2pbatteryowner
      });
      this.current_data = JSON.parse(crd);
      console.log(JSON.stringify(this.current_data));
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
        vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
      }).then(tokenPushNotification => {
        if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe(dataToken => {
            this.tokenNotif = JSON.parse(dataToken);
            // Create Transaction History
            this.senddata.settrxhistory(this.globalID,
            //userid
            this.marketp2pbatteryDocId + '-' + this.kind,
            //itemid
            this.marketp2pbatteryprice,
            //amount
            'transactionHash',
            //tx_hash
            'bnb-to-oragon',
            //type
            JSON.stringify(this.current_data),
            //item
            this.email,
            //email
            this.tokenNotif.tokenPushNotification //token
            ).subscribe(data => {}, error => {});
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });
      this.state_buy = "3";
      this.status_1 = "1";
    } else if (kind == "food") {
      this.kind = "food";
      // Build Json String Food
      let crd = JSON.stringify({
        ItemId: this.marketp2pfoodID,
        Id: this.marketp2pfoodImg,
        HVP: Number(this.marketp2pfoodHVP),
        Qty: Number(this.marketp2pfoodQty),
        price: Number(this.marketp2pfoodprice),
        owner: this.marketp2pfoodowner
      });
      this.current_data = JSON.parse(crd);
      console.log(JSON.stringify(this.current_data));
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
        vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
      }).then(tokenPushNotification => {
        if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe(dataToken => {
            this.tokenNotif = JSON.parse(dataToken);
            // Create Transaction History
            this.senddata.settrxhistory(this.globalID,
            //userid
            this.marketp2pfoodOID + '-' + this.kind,
            //itemid
            this.marketp2pfoodprice,
            //amount
            'transactionHash',
            //tx_hash
            'bnb-to-oragon',
            //type
            JSON.stringify(this.current_data),
            //item
            this.email,
            //email
            this.tokenNotif.tokenPushNotification //token
            ).subscribe(data => {}, error => {});
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });
      this.state_buy = "3";
      this.status_1 = "1";
    }
    //     }
    //   }
    // )
  }

  pay_firstMarketp2pBID() {
    var _this11 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
      //   this.web3js.eth.sendTransaction({
      //     from : this.wallet,
      //     to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
      //     value : this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
      //     gas : 500000,
      //     gasPrice : 5000000000
      //     }, async (err : any, transactionHash : any) => {
      //       if(err){
      //         this.openDialog("Transaction Error Please Try Again");
      //       }else{
      let lastseen = localStorage.getItem("lastseen");
      if (lastseen == "dragon") {
        // Create Transaction History
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this11.senddata.gettokenOwnermp(_this11.marketp2pBIDdragonowner).subscribe(dataToken => {
              _this11.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this11.senddata.settrxhistory(_this11.globalID,
              //userid
              _this11.marketp2pBIDdragonDocId,
              //itemid
              _this11.fee_display,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-oragon',
              //type
              'fee-auction',
              //item
              _this11.email,
              //email
              _this11.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        let type = _this11.marketp2pBIDdragontype;
        if (type == "Free") {
          console.log("Detail Free BID");
          _this11.state_BID = "Free";
          _this11.state_buy = 3;
          _this11.stateHash = true;
        } else {
          console.log("Detail Step BID");
          _this11.state_BID = "Step";
          _this11.state_buy = 3;
          _this11.stateHash = true;
          let percentBID = _this11.marketp2pBIDdragonpriceNow / 100 * 10;
          console.log(percentBID + Number(_this11.marketp2pBIDdragonpriceNow));
          _this11.price_display_StepBID = percentBID + Number(_this11.marketp2pBIDdragonpriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "egg") {
        // Create Transaction History
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this11.senddata.gettokenOwnermp(_this11.marketp2pBIDeggowner).subscribe(dataToken => {
              _this11.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this11.senddata.settrxhistory(_this11.globalID,
              //userid
              _this11.marketp2pBIDeggDocId,
              //itemid
              _this11.fee_display,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-oragon',
              //type
              'fee-auction',
              //item
              _this11.email,
              //email
              _this11.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        let type = _this11.marketp2pBIDeggtype;
        if (type == "Free") {
          console.log("Detail Free BID");
          _this11.state_BID = "Free";
          _this11.state_buy = 3;
          _this11.stateHash = true;
        } else {
          console.log("Detail Step BID");
          _this11.state_BID = "Step";
          _this11.state_buy = 3;
          _this11.stateHash = true;
          let percentBID = _this11.marketp2pBIDeggpriceNow / 100 * 10;
          console.log(percentBID + Number(_this11.marketp2pBIDeggpriceNow));
          _this11.price_display_StepBID = percentBID + Number(_this11.marketp2pBIDeggpriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "battery") {
        // Create Transaction History
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this11.senddata.gettokenOwnermp(_this11.marketp2pBIDbatteryowner).subscribe(dataToken => {
              _this11.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this11.senddata.settrxhistory(_this11.globalID,
              //userid
              _this11.marketp2pBIDbatteryDocId,
              //itemid
              _this11.fee_display,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-oragon',
              //type
              'fee-auction',
              //item
              _this11.email,
              //email
              _this11.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        let type = _this11.marketp2pBIDbatterytype;
        if (type == "Free") {
          console.log("Detail Free BID");
          _this11.state_BID = "Free";
          _this11.state_buy = 3;
          _this11.stateHash = true;
        } else {
          console.log("Detail Step BID");
          _this11.state_BID = "Step";
          _this11.state_buy = 3;
          _this11.stateHash = true;
          let percentBID = _this11.marketp2pBIDbatterypriceNow / 100 * 10;
          console.log(percentBID + Number(_this11.marketp2pBIDbatterypriceNow));
          _this11.price_display_StepBID = percentBID + Number(_this11.marketp2pBIDbatterypriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "food") {
        // Create Transaction History
        // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
        let type = _this11.marketp2pBIDfoodtype;
        if (type == "Free") {
          console.log("Detail Free BID");
          _this11.state_BID = "Free";
          _this11.state_buy = 3;
          _this11.stateHash = true;
        } else {
          console.log("Detail Step BID");
          _this11.state_BID = "Step";
          _this11.state_buy = 3;
          _this11.stateHash = true;
          let percentBID = _this11.marketp2pBIDfoodpriceNow / 100 * 10;
          console.log(percentBID + Number(_this11.marketp2pBIDfoodpriceNow));
          _this11.price_display_StepBID = percentBID + Number(_this11.marketp2pBIDfoodpriceNow);
          // console.log(price_display);
        }
      }
      //       }
      //     }
      //   )
      // }else{
      //   const alert = await this.alertController.create({
      //     header: 'Failed!',
      //     message: 'BNB Balance is not Enough',
      //     buttons: ['OK'],
      //   });
      //   await alert.present();
      // }
    })();
  }

  pay_secondMarketp2pBID() {
    // this.web3js.eth.sendTransaction({
    //   from : this.wallet,
    //   to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
    //   value : this.web3js.utils.toWei(this.fee, 'ether'),
    //   gas : 500000,
    //   gasPrice : 5000000000
    //   }, async (err : any, transactionHash : any) => {
    //     if(err){
    //       this.openDialog("Transaction Error Please Try Again");
    //     }else{
    let lastseen = localStorage.getItem("lastseen");
    if (lastseen == "dragon") {
      let type = this.marketp2pBIDdragontype;
      if (type == "Free") {
        console.log("Detail Free BID");
        this.state_BID = "Free";
        this.state_buy = 0;
        // Create Royalty pos 1
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
        this.biditem();
      } else {
        console.log("Detail Step BID");
        this.state_BID = "Step";
        this.state_buy = 0;
        let percentBID = this.marketp2pBIDdragonpriceNow / 100 * 10;
        console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
        this.price_display_StepBID = percentBID + Number(this.marketp2pBIDdragonpriceNow);
        // Create Royalty pos 1
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
        this.biditem();
      }
    } else if (lastseen == "egg") {
      let type = this.marketp2pBIDeggtype;
      if (type == "Free") {
        console.log("Detail Free BID");
        this.state_BID = "Free";
        this.state_buy = 0;
        this.biditem();
      } else {
        console.log("Detail Step BID");
        this.state_BID = "Step";
        this.state_buy = 0;
        let percentBID = this.marketp2pBIDeggpriceNow / 100 * 10;
        console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
        this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
        this.biditem();
      }
    } else if (lastseen == "battery") {
      let type = this.marketp2pBIDbatterytype;
      if (type == "Free") {
        console.log("Detail Free BID");
        this.state_BID = "Free";
        this.state_buy = 0;
        this.biditem();
      } else {
        console.log("Detail Step BID");
        this.state_BID = "Step";
        this.state_buy = 0;
        let percentBID = this.marketp2pBIDbatterypriceNow / 100 * 10;
        console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
        this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
        this.biditem();
      }
    } else if (lastseen == "food") {
      // Create Transaction History
      // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
      let type = this.marketp2pBIDfoodtype;
      if (type == "Free") {
        console.log("Detail Free BID");
        this.state_BID = "Free";
        this.state_buy = 0;
        this.biditem();
      } else {
        console.log("Detail Step BID");
        this.state_BID = "Step";
        this.state_buy = 0;
        let percentBID = this.marketp2pBIDfoodpriceNow / 100 * 10;
        console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
        this.price_display_StepBID = percentBID + Number(this.marketp2pBIDfoodpriceNow);
        this.biditem();
      }
    }
    //     }
    //   }
    // )
    // localStorage.removeItem('walletconnect');
  }

  biditem() {
    var _this12 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lastseen = localStorage.getItem("lastseen");
      if (lastseen == "dragon") {
        let type = _this12.marketp2pBIDdragontype;
        _this12.loadingtext = true;
        console.log("loadingtext", _this12.loadingtext);
        if (type == "Free") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.input_price_actual)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDdragonuidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemsBIDNOWmp(_this12.marketp2pBIDdragonDocId, arr.toString(), _this12.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref14 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDdragonDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe( /*#__PURE__*/function () {
                    var _ref15 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.dragonBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                      if (_this12.dragonBidHistoryWin[1].uidBid == _this12.globalID) {
                        _this12.sendNotificationtoLosesBid(_this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                        _this12.checknotificationLosesBid(_this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x14) {
                      return _ref15.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDdragonowner + '/Dragons').doc(_this12.marketp2pBIDdragonDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDdragonowner).subscribe(dataToken => {
                      _this12.tokenNotif = JSON.parse(dataToken);
                      _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDdragonowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {
                        _this12.loadingtext = false;
                      });
                      console.log(_this12.tokenNotif.tokenPushNotification);
                      _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDdragonDocId).subscribe(dataNotif => {
                        _this12.notifications = JSON.parse(dataNotif);
                        console.log("data notifications", _this12.notifications);
                        _this12.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this12.detailBid(_this12.marketp2pBIDdragonDocId);
                          _this12.checkdragonBIDall();
                          _this12.priceNowBiddragon(_this12.marketp2pBIDdragonDocId);
                          _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe(dataBid => {
                            _this12.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if (_this12.state_buy == 2) {
                            clearInterval(_this12.countdowncheckdragonbidall);
                            _this12.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBid(_this12.marketp2pBIDdragonDocId);
                _this12.checkdragonBIDall();
                _this12.priceNowBiddragon(_this12.marketp2pBIDdragonDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe(dataBid => {
                  _this12.dragonBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x13) {
              return _ref14.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.price_display_StepBID)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDdragonuidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemsBIDNOWmp(_this12.marketp2pBIDdragonDocId, arr.toString(), _this12.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref17 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDdragonDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe( /*#__PURE__*/function () {
                    var _ref18 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.dragonBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                      if (_this12.dragonBidHistoryWin[1].uidBid == _this12.globalID) {
                        _this12.sendNotificationtoLosesBid(_this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                        _this12.checknotificationLosesBid(_this12.dragonBidHistoryWin[1].uidBid, _this12.dragonBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x16) {
                      return _ref18.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDdragonowner + '/Dragons').doc(_this12.marketp2pBIDdragonDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDdragonowner).subscribe(dataToken => {
                      _this12.tokenNotif = JSON.parse(dataToken);
                      _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDdragonowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {
                        _this12.loadingtext = false;
                      });
                      console.log(_this12.tokenNotif.tokenPushNotification);
                      _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDdragonDocId).subscribe(dataNotif => {
                        _this12.notifications = JSON.parse(dataNotif);
                        console.log("data notifications", _this12.notifications);
                        _this12.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this12.detailBid(_this12.marketp2pBIDdragonDocId);
                          _this12.checkdragonBIDall();
                          _this12.priceNowBiddragon(_this12.marketp2pBIDdragonDocId);
                          _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe(dataBid => {
                            _this12.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if (_this12.state_buy == 2) {
                            clearInterval(_this12.countdowncheckdragonbidall);
                            _this12.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBid(_this12.marketp2pBIDdragonDocId);
                _this12.checkdragonBIDall();
                _this12.priceNowBiddragon(_this12.marketp2pBIDdragonDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDdragonDocId).subscribe(dataBid => {
                  _this12.dragonBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x15) {
              return _ref17.apply(this, arguments);
            };
          }());
        }
        _this12.state_buy = 2;
      } else if (lastseen == "egg") {
        let type = _this12.marketp2pBIDeggtype;
        _this12.loadingtext = true;
        console.log("loadingtext", _this12.loadingtext);
        console.log("type", _this12.marketp2pBIDeggtype);
        if (type == "Free") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.input_price_actual)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDegguidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemseggBIDNOWmp(_this12.marketp2pBIDeggDocId, arr.toString(), _this12.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref20 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDeggDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe( /*#__PURE__*/function () {
                    var _ref21 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.eggBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                      _this12.sendNotificationtoLosesBid(_this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                      _this12.checknotificationLosesBid(_this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                    });
                    return function (_x18) {
                      return _ref21.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDeggowner + '/Eggs').doc(_this12.marketp2pBIDeggDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then( /*#__PURE__*/function () {
                  var _ref22 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenPushNotification) {
                    if (tokenPushNotification) {
                      _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this12.tokenNotif = JSON.parse(dataToken);
                        _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDeggowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {});
                        console.log(_this12.tokenNotif.tokenPushNotification);
                        _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDeggDocId).subscribe(dataNotif => {
                          _this12.notifications = JSON.parse(dataNotif);
                          console.log("data notifications", _this12.notifications);
                          _this12.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                            _this12.detailBidegg(_this12.marketp2pBIDeggDocId);
                            _this12.checkeggBIDall();
                            _this12.priceNowBidegg(_this12.marketp2pBIDeggDocId);
                            _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe(dataBid => {
                              _this12.eggBidHistory = JSON.parse(dataBid);
                            });
                            if (_this12.state_buy == 2) {
                              clearInterval(_this12.countdowncheckeggbidall);
                              _this12.loadingtext = false;
                            }
                          }), 1000);
                        });
                      });
                    } else {
                      console.log('No registration token available. Request permission to generate one.');
                    }
                  });
                  return function (_x19) {
                    return _ref22.apply(this, arguments);
                  };
                }()).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBidegg(_this12.marketp2pBIDeggDocId);
                _this12.checkeggBIDall();
                _this12.priceNowBidegg(_this12.marketp2pBIDeggDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe(dataBid => {
                  _this12.eggBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x17) {
              return _ref20.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.price_display_StepBID)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDegguidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemseggBIDNOWmp(_this12.marketp2pBIDeggDocId, arr.toString(), _this12.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref24 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDeggDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe( /*#__PURE__*/function () {
                    var _ref25 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.eggBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                      _this12.sendNotificationtoLosesBid(_this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                      _this12.checknotificationLosesBid(_this12.eggBidHistoryWin[1].uidBid, _this12.eggBidHistoryWin[1].idBid);
                    });
                    return function (_x21) {
                      return _ref25.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDeggowner + '/Eggs').doc(_this12.marketp2pBIDeggDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then( /*#__PURE__*/function () {
                  var _ref26 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenPushNotification) {
                    if (tokenPushNotification) {
                      _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this12.tokenNotif = JSON.parse(dataToken);
                        _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDeggowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {});
                        console.log(_this12.tokenNotif.tokenPushNotification);
                        _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDeggDocId).subscribe(dataNotif => {
                          _this12.notifications = JSON.parse(dataNotif);
                          console.log("data notifications", _this12.notifications);
                          _this12.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                            _this12.detailBidegg(_this12.marketp2pBIDeggDocId);
                            _this12.checkeggBIDall();
                            _this12.priceNowBidegg(_this12.marketp2pBIDeggDocId);
                            _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe(dataBid => {
                              _this12.eggBidHistory = JSON.parse(dataBid);
                            });
                            if (_this12.state_buy == 2) {
                              clearInterval(_this12.countdowncheckeggbidall);
                              _this12.loadingtext = false;
                            }
                          }), 1000);
                        });
                      });
                    } else {
                      console.log('No registration token available. Request permission to generate one.');
                    }
                  });
                  return function (_x22) {
                    return _ref26.apply(this, arguments);
                  };
                }()).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBidegg(_this12.marketp2pBIDeggDocId);
                _this12.checkeggBIDall();
                _this12.priceNowBidegg(_this12.marketp2pBIDeggDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDeggDocId).subscribe(dataBid => {
                  _this12.eggBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x20) {
              return _ref24.apply(this, arguments);
            };
          }());
        }
        _this12.state_buy = 2;
      } else if (lastseen == "battery") {
        let type = _this12.marketp2pBIDbatterytype;
        _this12.loadingtext = true;
        console.log("loadingtext", _this12.loadingtext);
        if (type == "Free") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.input_price_actual)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDbatteryuidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemsbatteryBIDNOWmp(_this12.marketp2pBIDbatteryDocId, arr.toString(), _this12.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref28 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDbatteryDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe( /*#__PURE__*/function () {
                    var _ref29 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.batteryBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                      if (_this12.batteryBidHistoryWin[1].uidBid == _this12.globalID) {
                        _this12.sendNotificationtoLosesBid(_this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                        _this12.checknotificationLosesBid(_this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x24) {
                      return _ref29.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDbatteryowner + '/Batteries').doc(_this12.marketp2pBIDbatteryDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDbatteryowner).subscribe(dataToken => {
                      _this12.tokenNotif = JSON.parse(dataToken);
                      _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDbatteryowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {
                        _this12.loadingtext = false;
                      });
                      console.log(_this12.tokenNotif.tokenPushNotification);
                      _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDbatteryDocId).subscribe(dataNotif => {
                        _this12.notifications = JSON.parse(dataNotif);
                        console.log("data notifications", _this12.notifications);
                        _this12.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this12.detailBidbattery(_this12.marketp2pBIDbatteryDocId);
                          _this12.checkbatteryBIDall();
                          _this12.priceNowBidbattery(_this12.marketp2pBIDbatteryDocId);
                          _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                            _this12.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if (_this12.state_buy == 2) {
                            clearInterval(_this12.countdowncheckbatterybidall);
                            _this12.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBidbattery(_this12.marketp2pBIDbatteryDocId);
                _this12.checkbatteryBIDall();
                _this12.priceNowBidbattery(_this12.marketp2pBIDbatteryDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                  _this12.batteryBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x23) {
              return _ref28.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this12.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this12.globalID,
            price: Number(_this12.price_display_StepBID)
          });
          _this12.current_data = JSON.parse(crd);
          console.log(JSON.stringify(_this12.current_data));
          var arr = new Array(_this12.marketp2pBIDbatteryuidBid);
          var addArr = arr.unshift(JSON.stringify(_this12.current_data));
          _this12.senddata.editpricedumpitemsbatteryBIDNOWmp(_this12.marketp2pBIDdragonDocId, arr.toString(), _this12.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref31 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this12.input_price_actual == priceNowBid) {
                _this12.senddata.addBidListmp(_this12.marketp2pBIDbatteryDocId, _this12.globalID, _this12.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this12.senddata.getswinhistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe( /*#__PURE__*/function () {
                    var _ref32 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this12.batteryBidHistoryWin = JSON.parse(dataBid);
                      console.log("checknotificationLosesBid", _this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                      if (_this12.batteryBidHistoryWin[1].uidBid == _this12.globalID) {
                        _this12.sendNotificationtoLosesBid(_this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                        _this12.checknotificationLosesBid(_this12.batteryBidHistoryWin[1].uidBid, _this12.batteryBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x26) {
                      return _ref32.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this12.fs.collection('Bid/' + _this12.marketp2pBIDbatteryowner + '/Batteries').doc(_this12.marketp2pBIDbatteryDocId).update({
                  PriceNow: Number(_this12.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this12.current_data)
                }).then(() => {
                  console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this12.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDbatteryowner).subscribe(dataToken => {
                      _this12.tokenNotif = JSON.parse(dataToken);
                      _this12.senddata.postNotificationOwnerBidmp(_this12.username, _this12.marketp2pBIDbatteryowner, _this12.tokenNotif.tokenPushNotification, _this12.globalID).subscribe(data => {
                        _this12.loadingtext = false;
                      });
                      console.log(_this12.tokenNotif.tokenPushNotification);
                      _this12.senddata.setNotificationBidOwnermp(_this12.marketp2pBIDbatteryDocId).subscribe(dataNotif => {
                        _this12.notifications = JSON.parse(dataNotif);
                        console.log("data notifications", _this12.notifications);
                        _this12.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this12.detailBidbattery(_this12.marketp2pBIDbatteryDocId);
                          _this12.checkbatteryBIDall();
                          _this12.priceNowBidbattery(_this12.marketp2pBIDbatteryDocId);
                          _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                            _this12.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if (_this12.state_buy == 2) {
                            clearInterval(_this12.countdowncheckbatterybidall);
                            _this12.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this12.detailBidbattery(_this12.marketp2pBIDbatteryDocId);
                _this12.checkbatteryBIDall();
                _this12.priceNowBidbattery(_this12.marketp2pBIDbatteryDocId);
                _this12.senddata.getshistorydgidBIDmp(_this12.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                  _this12.batteryBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this12.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this12.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x25) {
              return _ref31.apply(this, arguments);
            };
          }());
        }
      }
    })();
  }
  pay_cartBID() {
    var _this13 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this13.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("lastseen");
      if (kind == "dragon") {
        // this.fs
        //   .collection("Players")
        //   .doc(this.marketp2peggowner)
        //   .valueChanges()
        //   .subscribe((datas: any) => {
        //     //console.log(datas.ProfileData);
        //     let data_user = JSON.parse(datas.ProfileData);
        //     // console.log(data_user.WalletAddress)
        //     this.owner_address = data_user.WalletAddress;
        //     // console.log(this.owner_address)
        //   });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this13.kind = "dragon";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: _this13.marketp2pBIDdragonDocId,
          ItemId: _this13.marketp2pBIDdragonID,
          price: _this13.input_price_actual
        });
        _this13.current_data = JSON.parse(crd);
        console.log(_this13.current_data);
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this13.senddata.gettokenOwnermp(_this13.marketp2pBIDdragonowner).subscribe(dataToken => {
              _this13.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this13.senddata.settrxhistory(_this13.globalID,
              //userid
              _this13.marketp2pBIDdragonDocId + '-' + _this13.kind,
              //itemid
              _this13.input_price_actual,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this13.current_data),
              //item
              _this13.email,
              //email
              _this13.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this13.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this13.fs.firestore.collection('Bid/' + _this13.marketp2pBIDdragonowner + '/Dragons').doc(_this13.marketp2pBIDdragonDocId);
        var sfDocRef2 = _this13.fs.firestore.collection('Items/' + _this13.globalID + '/Dragons').doc(_this13.marketp2pBIDdragonDocId);
        try {
          _this13.fs.firestore.collection('Bid/' + _this13.globalID + '/Dragons').doc(_this13.marketp2pBIDdragonDocId).delete().then(() => {});
          _this13.fs.collection('Items/' + _this13.globalID + '/Dragons').doc(_this13.marketp2pBIDdragonDocId).set({
            Id: _this13.marketp2pBIDdragonDocId,
            ItemId: _this13.marketp2pBIDdragonID,
            Attributes: {
              AttackPoint: Number(_this13.marketp2pBIDdragonAttack),
              DefensePoint: Number(_this13.marketp2pBIDdragonDefense),
              Exp: Number(_this13.marketp2pBIDdragonExp),
              HP: Number(_this13.marketp2pBIDdragonHP),
              Hunger: Number(_this13.marketp2pBIDdragonHunger),
              Level: Number(_this13.marketp2pBIDdragonLevel),
              MaxHP: Number(_this13.marketp2pBIDdragonMaxHP),
              MaxHunger: Number(_this13.marketp2pBIDdragonMaxHunger)
            }
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this13.senddata.selldragontoitemsmp(_this13.globalID, _this13.marketp2pBIDdragonDocId).subscribe(dataE => {
          console.log(dataE);
          _this13.senddata.removedragonDocIdBIDmp(_this13.marketp2pBIDdragonDocId).subscribe(dataR => {
            console.log("Bid list has been remove !");
          });
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2pBIDdragonID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this13.senddata.addSellListmp(_this13.marketp2pBIDdragonDocId, _this13.globalID, _this13.input_price_actual).subscribe(dataE => {});
        const alert = yield _this13.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        //if success
        _this13.state_buy = "3";
        _this13.status_2 = "1";
        _this13.cartBidcount = 0;
        _this13.checkdragonBIDall();
        setTimeout(function () {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "egg") {
        // this.fs
        //   .collection("Players")
        //   .doc(this.marketp2peggowner)
        //   .valueChanges()
        //   .subscribe((datas: any) => {
        //     //console.log(datas.ProfileData);
        //     let data_user = JSON.parse(datas.ProfileData);
        //     // console.log(data_user.WalletAddress)
        //     this.owner_address = data_user.WalletAddress;
        //     // console.log(this.owner_address)
        //   });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this13.kind = "egg";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: _this13.marketp2pBIDeggDocId,
          ItemId: _this13.marketp2pBIDeggID,
          price: _this13.input_price_actual
        });
        _this13.current_data = JSON.parse(crd);
        console.log(_this13.current_data);
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this13.senddata.gettokenOwnermp(_this13.marketp2pBIDeggowner).subscribe(dataToken => {
              _this13.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this13.senddata.settrxhistory(_this13.globalID,
              //userid
              _this13.marketp2pBIDeggDocId + '-' + _this13.kind,
              //itemid
              _this13.input_price_actual,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this13.current_data),
              //item
              _this13.email,
              //email
              _this13.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this13.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this13.fs.firestore.collection('Bid/' + _this13.marketp2pBIDeggowner + '/Eggs').doc(_this13.marketp2pBIDeggDocId);
        var sfDocRef2 = _this13.fs.firestore.collection('Items/' + _this13.globalID + '/Eggs').doc(_this13.marketp2pBIDeggDocId);
        try {
          _this13.fs.firestore.collection('Bid/' + _this13.globalID + '/Eggs').doc(_this13.marketp2pBIDeggDocId).delete().then(() => {});
          _this13.fs.collection('Items/' + _this13.globalID + '/Eggs').doc(_this13.marketp2pBIDeggDocId).set({
            Id: _this13.marketp2pBIDeggDocId,
            ItemId: _this13.marketp2pBIDeggID
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this13.senddata.selleggtoitemsmp(_this13.globalID, _this13.marketp2pBIDeggDocId).subscribe(dataE => {
          console.log(dataE);
          _this13.senddata.removeeggDocIdBIDmp(_this13.marketp2pBIDeggDocId).subscribe(dataR => {
            console.log("Bid list has been remove !");
          });
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2pBIDeggID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this13.senddata.addSellListmp(_this13.marketp2pBIDeggDocId, _this13.globalID, _this13.input_price_actual).subscribe(dataE => {});
        const alert = yield _this13.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        //if success
        _this13.state_buy = "3";
        _this13.status_2 = "1";
        _this13.cartBidcount = 0;
        _this13.checkeggBIDall();
        setTimeout(function () {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "battery") {
        // this.fs
        //   .collection("Players")
        //   .doc(this.marketp2peggowner)
        //   .valueChanges()
        //   .subscribe((datas: any) => {
        //     //console.log(datas.ProfileData);
        //     let data_user = JSON.parse(datas.ProfileData);
        //     // console.log(data_user.WalletAddress)
        //     this.owner_address = data_user.WalletAddress;
        //     // console.log(this.owner_address)
        //   });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this13.kind = "battery";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: _this13.marketp2pBIDbatteryDocId,
          ItemId: _this13.marketp2pBIDbatteryID,
          price: _this13.input_price_actual
        });
        _this13.current_data = JSON.parse(crd);
        console.log(_this13.current_data);
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this13.senddata.gettokenOwnermp(_this13.marketp2pBIDbatteryowner).subscribe(dataToken => {
              _this13.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this13.senddata.settrxhistory(_this13.globalID,
              //userid
              _this13.marketp2pBIDbatteryDocId + '-' + _this13.kind,
              //itemid
              _this13.input_price_actual,
              //amount
              'transactionHash',
              //tx_hash
              'bnb-to-seller',
              //type
              JSON.stringify(_this13.current_data),
              //item
              _this13.email,
              //email
              _this13.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        // Check Cart
        yield _this13.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this13.fs.firestore.collection('Bid/' + _this13.marketp2pBIDbatteryowner + '/Batteries').doc(_this13.marketp2pBIDbatteryDocId);
        var sfDocRef2 = _this13.fs.firestore.collection('Items/' + _this13.globalID + '/Batteries').doc(_this13.marketp2pBIDbatteryDocId);
        try {
          _this13.fs.firestore.collection('Bid/' + _this13.globalID + '/Batteries').doc(_this13.marketp2pBIDbatteryDocId).delete().then(() => {});
          _this13.fs.collection('Items/' + _this13.globalID + '/Batteries').doc(_this13.marketp2pBIDbatteryDocId).set({
            Id: _this13.marketp2pBIDbatteryDocId,
            ItemId: _this13.marketp2pBIDbatteryID
          }).then(() => {
            console.log("Document successfully Buy!");
            // this.openDialog("Item Listed");
          }).catch(error => {});
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        _this13.senddata.sellbatterytoitemsmp(_this13.globalID, _this13.marketp2pBIDbatteryDocId).subscribe(dataE => {
          console.log(dataE);
          _this13.senddata.removebatteryDocIdBIDmp(_this13.marketp2pBIDbatteryDocId).subscribe(dataR => {
            console.log("Bid list has been remove !");
          });
        }, error => {});
        // this.senddata.setitemhistory(this.marketp2pBIDbatteryID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        _this13.senddata.addSellListmp(_this13.marketp2pBIDbatteryDocId, _this13.globalID, _this13.input_price_actual).subscribe(dataE => {});
        const alert = yield _this13.alertController.create({
          header: "Success",
          message: "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"]
        });
        yield alert.present();
        //if success
        _this13.state_buy = "3";
        _this13.status_2 = "1";
        _this13.cartBidcount = 0;
        _this13.checkbatteryBIDall();
        setTimeout(function () {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
        //if success
        //       }
        //     }
        //   )
        // }else{
        //   const alert = await this.alertController.create({
        //     header: 'Failed!',
        //     message: 'BNB Balance is not Enough',
        //     buttons: ['OK'],
        //   });
        //   await alert.present();
        // }
      } else if (kind == "food") {
        _this13.fs.collection("Players").doc(_this13.marketp2pfoodowner).valueChanges().subscribe(datas => {
          //console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          _this13.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });
        // if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
        //   this.web3js.eth.sendTransaction({
        //     from : this.wallet,
        //     to : this.owner_address,
        //     value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
        //     gas : 500000,
        //     gasPrice : 5000000000
        //     }, async (err : any, transactionHash : any) => {
        //       if(err){
        //         this.openDialog("Transaction Error Please Try Again");
        //       }else{
        let kind = localStorage.getItem("kind");
        _this13.kind = "food";
        // Build Json String Battery
        let crd = JSON.stringify({
          ItemId: _this13.marketp2pfoodID,
          Id: _this13.marketp2pfoodImg,
          HVP: Number(_this13.marketp2pfoodHVP),
          Count: Number(_this13.marketp2pfoodQty),
          price: _this13.marketp2pfoodprice,
          owner: _this13.marketp2pfoodowner
        });
        _this13.current_data = JSON.parse(crd);
        console.log(JSON.stringify(_this13.current_data));
        // Create Transaction History
        // this.senddata.settrxhistory(
        //   this.globalID, //userid
        //   this.marketp2pfoodID+'-'+this.kind, //itemid
        //   this.marketp2pfoodprice, //amount
        //   'transactionHash', //tx_hash
        //   'bnb-to-seller', //type
        //   JSON.stringify(this.current_data), //item
        //   this.email
        // ).subscribe((data:any) => {},(error:any) => {})
        // Check Cart
        yield _this13.checkitemscreated();
        // Transaction Data Firestore
        var sfDocRef = _this13.fs.firestore.collection("Sell").doc(_this13.marketp2pfoodowner);
        var sfDocRef2 = _this13.fs.firestore.collection("Items").doc(_this13.globalID);
        try {
          _this13.fs.firestore.runTransaction( /*#__PURE__*/function () {
            var _ref34 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (transaction) {
              const sfDoc = yield transaction.get(sfDocRef);
              let kind = localStorage.getItem("kind");
              if (sfDoc.data()["FoodGroup"].indexOf(JSON.stringify(_this13.current_data)) > -1) {
                // console.log(sfDoc)
                // console.log(sfDoc.data()["FoodGroup"])
                //DELETE
                const datax = _this13.current_data;
                yield transaction.update(sfDocRef, {
                  FoodGroup: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayRemove(JSON.stringify(datax))
                });
                //ADD
                delete datax.price;
                delete datax.owner;
                delete datax.IsNew;
                delete datax.ObjectId;
                delete datax.AddAt;
                delete datax.Qty;
                yield transaction.update(sfDocRef2, {
                  Food: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify(datax)),
                  FoodLength: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(_this13.marketp2pfoodQty)
                });
                loading.dismiss();
                const alert = yield _this13.alertController.create({
                  header: "Success",
                  message: "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"]
                });
                yield alert.present();
              } else {
                throw "Document FoodGroup does not exist!";
              }
            });
            return function (_x27) {
              return _ref34.apply(this, arguments);
            };
          }());
          console.log("Transaction successfully committed!");
        } catch (e) {
          console.log("Transaction failed: ", e);
        }
        // this.senddata.setitemhistory(this.marketp2pfoodID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {});
        _this13.senddata.addSellListmp(_this13.marketp2pfoodID, _this13.globalID, _this13.input_price).subscribe(dataE => {});
        _this13.senddata.updatesellfoodUserqtymp(_this13.globalID, _this13.marketp2pfoodID, _this13.marketp2pfoodQty).subscribe(data => {});
        _this13.senddata.updatesellfoodUsermp(_this13.globalID, _this13.marketp2pfoodID, "transactionHash").subscribe(data => {}, error => {});
        _this13.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
          var _ref35 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            _this13.foodsHigh = dataSell;
          });
          return function (_x28) {
            return _ref35.apply(this, arguments);
          };
        }(), error => {});
        //if success
        _this13.stateHash = true;
        _this13.state_buy = 2;
        _this13.status_2 = "1";
        loading.dismiss();
        //if success
        //         }
        //       }
        //     )
        //     localStorage.removeItem('walletconnect');
        //   }else{
        //     const alert = await this.alertController.create({
        //       header: 'Failed!',
        //       message: 'BNB Balance is not Enough',
        //       buttons: ['OK'],
        //     });
        //     await alert.present();
        //   }
      }

      localStorage.removeItem("lastpay");
      localStorage.removeItem("lastdragon");
    })();
  }
  checkeggBIDall() {
    this.senddata.getselleggBIDmp().subscribe(dataSell => {
      this.eggsBID = dataSell;
      this.marketp2peggLength = dataSell.length;
    }, error => {});
  }
  checkdragonBIDall() {
    this.senddata.getselldgBIDmp().subscribe(dataSell => {
      this.dragonsBID = dataSell;
    }, error => {});
  }
  checkbatteryBIDall() {
    this.senddata.getsellbatteryBIDmp().subscribe(dataSell => {
      this.batterysBID = dataSell;
    }, error => {});
  }
  // Market P2P
  p2pTab(kind) {
    var _this14 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (kind == "1") {
        if (_this14.lastseen == "dragon") {
          _this14.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
            var _ref36 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this14.loadingController.create();
              yield loading.present();
              _this14.dragons = dataSell;
              _this14.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x29) {
              return _ref36.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this14.lastseen == "egg") {
          _this14.senddata.getselleggmp().subscribe( /*#__PURE__*/function () {
            var _ref37 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this14.loadingController.create();
              yield loading.present();
              _this14.eggsHigh = dataSell;
              _this14.marketp2peggLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x30) {
              return _ref37.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this14.lastseen == "battery") {
          _this14.senddata.getsellbatterymp().subscribe( /*#__PURE__*/function () {
            var _ref38 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this14.loadingController.create();
              yield loading.present();
              _this14.batteriesHigh = dataSell;
              _this14.marketp2pbatteryLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x31) {
              return _ref38.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this14.lastseen == "food") {
          _this14.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
            var _ref39 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this14.loadingController.create();
              yield loading.present();
              _this14.foodsHigh = dataSell;
              _this14.marketp2pfoodLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x32) {
              return _ref39.apply(this, arguments);
            };
          }(), error => {});
        }
        localStorage.setItem("tabs", "sell");
      } else if (kind == "2") {
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        _this14.senddata.getselldgBIDmp().subscribe(dataSell => {
          _this14.marketp2pBIDdragonLength = dataSell.length;
        }, error => {});
        _this14.senddata.getselleggBIDmp().subscribe(dataSell => {
          _this14.marketp2peggBIDLength = dataSell.length;
          _this14.countDownBIDEgg();
          _this14.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this14.countDownBIDEgg();
            // console.log("detailBid", this.minutes, this.seconds);
            if (_this14.minutesEgg == 0 && _this14.secondsEgg == 0) {
              _this14.sesion1 = 1;
              clearInterval(_this14.countdown);
            }
          }), 1000);
        }, error => {});
        _this14.senddata.getsellbatteryBIDmp().subscribe(dataSell => {
          _this14.marketp2pbatteryBIDLength = dataSell.length;
        }, error => {});
        localStorage.setItem("tabs", "bid");
        loading.dismiss();
      }
    })();
  }
  getstorecart() {
    this.senddata.getstorecart(this.globalID).subscribe(data => {
      this.storecart = JSON.parse(data);
      for (let i in this.storecart) {
        // console.log(this.storecart[i].addressw)
        this.cartCount = this.storecart.length;
        this.cartUID = this.globalID;
        this.carts = this.storecart;
        this.cartID = this.storecart[i].id_cart;
        // this.cartName = this.storecart[i].nama
        // this.cartDeskripsi = this.storecart[i].deskripsi
        this.cartPrice = this.storecart[i].harga;
        this.cartQty = this.storecart[i].qty_cart;
        let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
        this.cartPriceBNB = cartPriceBNB.toFixed(2);
        this.cartImg = this.storecart[i].gambar;
      }
    }, error => {});
  }
  getbidcart() {
    var _this15 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this15.selectedBid == "Dragons") {
        _this15.senddata.getbidcartdragon(_this15.globalID).subscribe( /*#__PURE__*/function () {
          var _ref41 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this15.bidcart = JSON.parse(data);
            if (_this15.bidcart[0].statusBid == 1) {
              _this15.bidCount = _this15.bidcart[0].length;
              _this15.bidPrice = _this15.bidcart[0].priceBid;
              let bidPriceUSD = _this15.bidcart[0].priceBid / _this15.current_bnb;
              _this15.bidPriceUSD = bidPriceUSD.toFixed(2);
              console.log("bidPriceUSD", _this15.bidPriceUSD);
              console.log("marketp2pBIDdragonDocId", _this15.marketp2pBIDdragonDocId);
              if (_this15.marketp2pBIDdragonBG == "exists") {
                _this15.senddata.getdgroyaltymp(_this15.marketp2pBIDdragonDocId).subscribe(dataRoyalty => {
                  let dr = dataRoyalty;
                  // fee p2p market dragon
                  _this15.marketp2pdragonFee = 12 / 100 * _this15.bidPrice;
                  let marketp2pdragonprice_actual = _this15.bidPrice - _this15.marketp2pdragonFee;
                  _this15.fee_display = _this15.marketp2pdragonFee;
                  _this15.price_display = marketp2pdragonprice_actual;
                  _this15.marketp2pdragonRoyalty = 10 / 100 * _this15.bidPrice;
                  let priceRoyalty_display = _this15.price_display - _this15.marketp2pdragonRoyalty;
                  _this15.priceRoyalty_display = priceRoyalty_display.toFixed(2);
                  _this15.fee_royalty = _this15.fee_display + _this15.marketp2pdragonRoyalty;
                  _this15.marketp2pdragonRoyalty2 = 10 / 100 * _this15.marketp2pdragonRoyalty;
                  _this15.marketp2pdragonRoyalty3 = 10 / 100 * _this15.marketp2pdragonRoyalty2;
                  _this15.marketp2pdragonRoyalty4 = 10 / 100 * _this15.marketp2pdragonRoyalty3;
                  _this15.marketp2pdragonRoyalty5 = 10 / 100 * _this15.marketp2pdragonRoyalty4;
                  _this15.marketp2pdragonRoyalty6 = 10 / 100 * _this15.marketp2pdragonRoyalty5;
                  let totaroyalty_5a = _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5;
                  let totaroyalty_5b = _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5;
                  let totaroyalty_5c = _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5;
                  let totaroyalty_5d = _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5;
                  let totaroyalty_5e = _this15.marketp2pdragonRoyalty5 - _this15.marketp2pdragonRoyalty6;
                  _this15.totaroyalty_5a = totaroyalty_5a;
                  _this15.totaroyalty_5b = totaroyalty_5b;
                  _this15.totaroyalty_5c = totaroyalty_5c;
                  _this15.totaroyalty_5d = totaroyalty_5d;
                  _this15.totaroyalty_5e = totaroyalty_5e;
                  let totaroyalty_4a = _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4;
                  let totaroyalty_4b = _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4;
                  let totaroyalty_4c = _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4;
                  _this15.totaroyalty_4a = totaroyalty_4a;
                  _this15.totaroyalty_4b = totaroyalty_4b;
                  _this15.totaroyalty_4c = totaroyalty_4c;
                  let totaroyalty_3a = _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3;
                  let totaroyalty_3b = _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3;
                  _this15.totaroyalty_3a = totaroyalty_3a;
                  _this15.totaroyalty_3b = totaroyalty_3b;
                  let totaroyalty_2a = _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2;
                  _this15.totaroyalty_2a = totaroyalty_2a;
                  let totaroyalty_1a = _this15.marketp2pdragonRoyalty;
                  _this15.totaroyalty_1a = totaroyalty_1a;
                  if (dr == 1) {
                    _this15.positionRoyalty = 1;
                    console.log("first position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty);
                  } else if (dr == 2) {
                    _this15.positionRoyalty = 2;
                    console.log("second position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2);
                    console.log("royalti untuk pos 2", _this15.marketp2pdragonRoyalty2);
                  } else if (dr == 3) {
                    _this15.positionRoyalty = 3;
                    console.log("third position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3);
                    console.log("royalti untuk pos 2", _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3);
                    console.log("royalti untuk pos 3", _this15.marketp2pdragonRoyalty3);
                  } else if (dr == 4) {
                    _this15.positionRoyalty = 4;
                    console.log("fourth position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4);
                    console.log("royalti untuk pos 2", _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4);
                    console.log("royalti untuk pos 3", _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4);
                    console.log("royalti untuk pos 4", _this15.marketp2pdragonRoyalty4);
                  } else if (dr == 5) {
                    _this15.positionRoyalty = 5;
                    console.log("fifth position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 2", _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 3", _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 4", _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 5", _this15.marketp2pdragonRoyalty5);
                  } else if (dr == 6) {
                    _this15.positionRoyalty = 6;
                    console.log("fifth position");
                    console.log("royalti untuk pos 1", _this15.marketp2pdragonRoyalty - _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 2", _this15.marketp2pdragonRoyalty2 - _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 3", _this15.marketp2pdragonRoyalty3 - _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 4", _this15.marketp2pdragonRoyalty4 - _this15.marketp2pdragonRoyalty5);
                    console.log("royalti untuk pos 5", _this15.marketp2pdragonRoyalty6);
                  } else {
                    console.log("unknown position");
                  }
                  console.log("royalti pos 1", _this15.marketp2pdragonRoyalty);
                  console.log("royalti pos 2", _this15.marketp2pdragonRoyalty2);
                  console.log("royalti pos 3", _this15.marketp2pdragonRoyalty3);
                  console.log("royalti pos 4", _this15.marketp2pdragonRoyalty4);
                  console.log("royalti pos 5", _this15.marketp2pdragonRoyalty5);
                });
              } else {
                // sengaja dikosongkan
              }
              // console.log(this.bidPrice)
            } else {
              _this15.stateHash = true;
              const alert = yield _this15.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              console.log("Your cart is expired!");
            }
          });
          return function (_x33) {
            return _ref41.apply(this, arguments);
          };
        }());
      } else if (_this15.selectedBid == "Eggs") {
        _this15.senddata.getbidcartegg(_this15.globalID).subscribe( /*#__PURE__*/function () {
          var _ref42 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this15.bidcart = JSON.parse(data);
            if (_this15.bidcart[0].statusBid == 1) {
              _this15.bidCount = _this15.bidcart[0].length;
              _this15.bidPrice = _this15.bidcart[0].priceBid;
              let bidPriceUSD = _this15.bidcart[0].priceBid / _this15.current_bnb;
              _this15.bidPriceUSD = bidPriceUSD.toFixed(2);
              console.log("bidPriceUSD", _this15.bidPriceUSD);
              console.log("marketp2pBIDdragonDocId", _this15.marketp2pBIDdragonDocId);
              // console.log(this.bidPrice)
            } else {
              _this15.stateHash = true;
              const alert = yield _this15.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              console.log("Your cart is expired!");
            }
          });
          return function (_x34) {
            return _ref42.apply(this, arguments);
          };
        }());
      } else if (_this15.selectedBid == "Batteries") {
        _this15.senddata.getbidcartbattery(_this15.globalID).subscribe( /*#__PURE__*/function () {
          var _ref43 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this15.bidcart = JSON.parse(data);
            if (_this15.bidcart[0].statusBid == 1) {
              _this15.bidCount = _this15.bidcart[0].length;
              _this15.bidPrice = _this15.bidcart[0].priceBid;
              let bidPriceUSD = _this15.bidcart[0].priceBid / _this15.current_bnb;
              _this15.bidPriceUSD = bidPriceUSD.toFixed(2);
              console.log("bidPriceUSD", _this15.bidPriceUSD);
              console.log("marketp2pBIDdragonDocId", _this15.marketp2pBIDdragonDocId);
              // console.log(this.bidPrice)
            } else {
              _this15.stateHash = true;
              const alert = yield _this15.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              console.log("Your cart is expired!");
            }
          });
          return function (_x35) {
            return _ref43.apply(this, arguments);
          };
        }());
      } else {
        const alert = yield _this15.alertController.create({
          header: "Sorry !",
          message: "Oopss, Something went wrong.",
          buttons: ["OK"]
        });
        yield alert.present();
      }
    })();
  }
  getcurrentoragon() {
    this.senddata.getcurrentoragon2().subscribe(data => {
      this.current_oragon = data.data.price;
      this.in_oragon_100c = (100 / this.current_oragon).toFixed(14);
      this.in_oragon_12c = (12 / this.current_oragon).toFixed(14);
      //console.log(this.current_oragon)
    }, error => {});
  }
  clickcategory(kind) {
    var _this16 = this;
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
      this.fs.collection("testUtility").valueChanges().subscribe(dataBackground => {
        this.profile = [];
        for (var i = 0; i < dataBackground.length; i++) {
          if (dataBackground[i].hasOwnProperty("Dragon")) {
            for (var j = 0; j < dataBackground[i].Dragon.length; j++) {
              this.profile.push(JSON.parse(dataBackground[i].Dragon[j]));
            }
            console.log("data background", this.profile);
          }
        }
      });
    } else if (kind == 2) {
      this.lastseen = "egg";
      this.sortp2pmarket = 4;
      localStorage.setItem("lastseen", "egg");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatterymp().subscribe( /*#__PURE__*/function () {
        var _ref44 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this16.loadingController.create();
          yield loading.present();
          _this16.batteriesHigh = dataSell;
          _this16.marketp2pbatteryLength = dataSell.length;
          loading.dismiss();
        });
        return function (_x36) {
          return _ref44.apply(this, arguments);
        };
      }(), error => {});
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
        var _ref45 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this16.loadingController.create();
          yield loading.present();
          _this16.foodsHigh = dataSell;
          loading.dismiss();
        });
        return function (_x37) {
          return _ref45.apply(this, arguments);
        };
      }(), error => {});
    }
  }
  clickcategorybid(kind) {
    var _this17 = this;
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgBIDmp().subscribe( /*#__PURE__*/function () {
        var _ref46 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this17.loadingController.create();
          yield loading.present();
          _this17.dragonsBID = dataSell;
          _this17.marketp2pBIDdragonLength = dataSell.length;
          loading.dismiss();
          // console.log(this.dragonsBID)
          let marketp2pdragonDate = _this17.dragonsBID;
          for (let i in marketp2pdragonDate) {
            _this17.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
            if (_this17.dragonsBID[i].imgbackground == 'exists') {
              _this17.senddata.getallbackgroundsellmp(_this17.dragonsBID[i].ItemId).subscribe(dataBackground => {
                _this17.dragonsownedbg = JSON.parse(dataBackground);
                _this17.marketp2pdragonBG = _this17.dragonsownedbg.imgbackground;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        });
        return function (_x38) {
          return _ref46.apply(this, arguments);
        };
      }(), error => {});
      this.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this17.checkdragonBIDall();
        if (_this17.lastseen != "dragon") {
          clearInterval(_this17.countdowncheckdragonbidall);
        }
      }), 10000);
    } else if (kind == 2) {
      this.lastseen = "egg";
      this.sortp2pmarket = 4;
      localStorage.setItem("lastseen", "egg");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggBIDmp().subscribe(dataSell => {
        this.eggsBID = dataSell;
        this.marketp2peggBIDLength = dataSell.length;
      }, error => {});
      this.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this17.checkeggBIDall();
        if (_this17.lastseen != "egg") {
          clearInterval(_this17.countdowncheckeggbidall);
        }
      }), 10000);
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatteryBIDmp().subscribe(dataSell => {
        this.batterysBID = dataSell;
      }, error => {});
      this.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this17.checkbatteryBIDall();
        if (_this17.lastseen != "battery") {
          clearInterval(_this17.countdowncheckbatterybidall);
        }
      }), 10000);
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
        var _ref50 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this17.loadingController.create();
          yield loading.present();
          _this17.foodsHigh = dataSell;
          loading.dismiss();
        });
        return function (_x39) {
          return _ref50.apply(this, arguments);
        };
      }(), error => {});
    }
  }
  clicksortp2pmarket(kind) {
    // ------------------------ Sort DRAGON
    if (kind == 1) {
      this.currentp2p = 0;
      this.sortp2pmarket = 1;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
    } else if (kind == 2) {
      this.currentp2p = 1;
      this.sortp2pmarket = 2;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowsellhargamp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
    } else if (kind == 3) {
      this.sortp2pmarket = 3;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozsellhargamp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
      // ------------------------ Sort EGG
    } else if (kind == 4) {
      this.currentp2p = 2;
      this.sortp2pmarket = 4;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 5) {
      this.currentp2p = 2;
      this.sortp2pmarket = 5;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 6) {
      this.currentp2p = 2;
      this.sortp2pmarket = 6;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    }
  }
  getdgbuydetail(ItemId) {
    var _this18 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this18.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "dragon");
      localStorage.setItem("lastdragon", ItemId);
      _this18.checkkind(ItemId);
      loading.dismiss();
      console.log(ItemId);
    })();
  }
  getdgBIDdetail(ItemId) {
    let lastseen = localStorage.setItem("lastseen", "dragon");
    this.checkkind(ItemId);
  }
  geteggBIDdetail(ItemId) {
    let lastseen = localStorage.setItem("lastseen", "egg");
    this.checkkindEgg(ItemId);
  }
  getbatteryBIDdetail(ItemId) {
    let lastseen = localStorage.setItem("lastseen", "battery");
    this.checkkindBattery(ItemId);
  }
  geteggbuydetail(marketp2peggDocId) {
    var _this19 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this19.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "egg");
      localStorage.setItem("lastegg", marketp2peggDocId);
      _this19.checkkindEgg(marketp2peggDocId);
      loading.dismiss();
      console.log(marketp2peggDocId);
    })();
  }
  getbatterybuydetail(marketp2pbatteryDocId) {
    var _this20 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this20.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "battery");
      localStorage.setItem("lastbattery", marketp2pbatteryDocId);
      _this20.checkkindBattery(marketp2pbatteryDocId);
      loading.dismiss();
      console.log(marketp2pbatteryDocId);
    })();
  }
  getfoodbuydetail(iditemssellFood) {
    var _this21 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lastseen = localStorage.setItem("lastseen", "food");
      _this21.checkkindGroup(iditemssellFood);
      console.log(iditemssellFood);
    })();
  }
  // DRAGON
  checkkind(ItemId) {
    let tabs = localStorage.getItem("tabs");
    let lastpay = localStorage.getItem("lastpay");
    let lastdragon = localStorage.getItem("lastdragon");
    if (lastpay == lastdragon) {
      if (tabs == "sell") {
        this.state_buy = 3;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
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
            this.marketp2pdragontime = this.dragonDetail.CreatedAt;
            let marketp2pdragonpriceUSD = this.dragonDetail.price / this.current_bnb;
            this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
            this.marketp2pdragonBG = this.dragonDetail.imgbackground;
            this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
            this.marketp2pdragonfavorited = this.dragonDetail.favorited;
            console.log(this.marketp2pdragonpriceUSD);
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
                  console.log("first position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
                } else if (dr == 2) {
                  this.positionRoyalty = 2;
                  console.log("second position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
                } else if (dr == 3) {
                  this.positionRoyalty = 3;
                  console.log("third position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
                } else if (dr == 4) {
                  this.positionRoyalty = 4;
                  console.log("fourth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
                } else if (dr == 5) {
                  this.positionRoyalty = 5;
                  console.log("fifth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
                } else if (dr == 6) {
                  this.positionRoyalty = 6;
                  console.log("fifth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6);
                } else {
                  console.log("unknown position");
                }
                console.log("royalti pos 1", this.marketp2pdragonRoyalty);
                console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
                console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
                console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
                console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
              });
            } else {}
            this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe(datapos => {
              let position = JSON.parse(datapos);
              this.pos_1 = position.pos_1;
              console.log("pos 1", this.pos_1);
              this.pos_2 = position.pos_2;
              console.log("pos 2", this.pos_2);
              this.pos_3 = position.pos_3;
              console.log("pos 3", this.pos_3);
              this.pos_4 = position.pos_4;
              console.log("pos 4", this.pos_4);
              this.pos_5 = position.pos_5;
              console.log("pos 5", this.pos_5);
            });
            this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe(datahistory => {
              let historyItems = JSON.parse(datahistory);
              console.log(historyItems);
            });
          }, error => {});
        }
      } else if (tabs == "bid") {
        this.loadingtext = true;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
          this.loadingtext = false;
          this.sesion1 = 0;
          this.detailBid(ItemId);
          this.countDownBID();
          this.countdown = setInterval(() => {
            this.countDownBID();
            // console.log("checkkind", this.minutes, this.seconds);
          }, 1000);
          this.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            this.dragonBidHistory = JSON.parse(dataBid);
          });
          let type = this.marketp2pBIDdragontype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            this.state_BID = "Free";
          } else {
            // console.log("Detail Step BID");
            this.state_BID = "Step";
          }
        }
        // console.log(tabs);
      }
    } else {
      this.state_buy = 2;
      if (tabs == "sell") {
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
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
            this.marketp2pdragontime = this.dragonDetail.CreatedAt;
            let marketp2pdragonpriceUSD = this.dragonDetail.price / this.current_bnb;
            this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
            this.marketp2pdragonBG = this.dragonDetail.imgbackground;
            this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
            this.marketp2pdragonfavorited = this.dragonDetail.favorited;
            console.log(this.marketp2pdragonpriceUSD);
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
                  console.log("first position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
                } else if (dr == 2) {
                  this.positionRoyalty = 2;
                  console.log("second position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
                } else if (dr == 3) {
                  this.positionRoyalty = 3;
                  console.log("third position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
                } else if (dr == 4) {
                  this.positionRoyalty = 4;
                  console.log("fourth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
                } else if (dr == 5) {
                  this.positionRoyalty = 5;
                  console.log("fifth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
                } else if (dr == 6) {
                  this.positionRoyalty = 6;
                  console.log("fifth position");
                  console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5);
                  console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6);
                } else {
                  console.log("unknown position");
                }
                console.log("royalti pos 1", this.marketp2pdragonRoyalty);
                console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
                console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
                console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
                console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
              });
            } else {}
            this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe(datapos => {
              let position = JSON.parse(datapos);
              this.pos_1 = position.pos_1;
              console.log("pos 1", this.pos_1);
              this.pos_2 = position.pos_2;
              console.log("pos 2", this.pos_2);
              this.pos_3 = position.pos_3;
              console.log("pos 3", this.pos_3);
              this.pos_4 = position.pos_4;
              console.log("pos 4", this.pos_4);
              this.pos_5 = position.pos_5;
              console.log("pos 5", this.pos_5);
            });
            this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe(datahistory => {
              let historyItems = JSON.parse(datahistory);
              console.log(historyItems);
            });
          }, error => {});
        }
      }
    }
  }
  detailBid(ItemId) {
    var _this22 = this;
    this.senddata.getselldgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref51 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this22.dragonDetail = JSON.parse(dataDetail);
        _this22.marketp2pBIDdragonDocId = _this22.dragonDetail[0].DocId;
        _this22.marketp2pBIDdragonID = _this22.dragonDetail[0].ItemId;
        _this22.marketp2pBIDdragonImg = _this22.dragonDetail[0].Id;
        _this22.marketp2pBIDdragonAttack = _this22.dragonDetail[0].Attack;
        _this22.marketp2pBIDdragonDefense = _this22.dragonDetail[0].Defense;
        _this22.marketp2pBIDdragonLevel = _this22.dragonDetail[0].Level;
        _this22.marketp2pBIDdragonHP = _this22.dragonDetail[0].HP;
        _this22.marketp2pBIDdragonMaxHP = _this22.dragonDetail[0].MaxHP;
        _this22.marketp2pBIDdragonHunger = _this22.dragonDetail[0].Hunger;
        _this22.marketp2pBIDdragonMaxHunger = _this22.dragonDetail[0].MaxHunger;
        _this22.marketp2pBIDdragonRarity = _this22.dragonDetail[0].Rarity;
        _this22.marketp2pBIDdragonExp = _this22.dragonDetail[0].Exp;
        _this22.marketp2pBIDdragonowner = _this22.dragonDetail[0].uid;
        _this22.marketp2pBIDdragonprice = _this22.dragonDetail[0].price;
        _this22.marketp2pBIDdragontype = _this22.dragonDetail[0].Type;
        _this22.marketp2pBIDdragonpriceNow = _this22.dragonDetail[0].PriceNow;
        _this22.marketp2pBIDdragontime = _this22.dragonDetail[0].CreatedAt;
        _this22.marketp2pdragonBIDfavorited = _this22.dragonDetail[0].favorited;
        _this22.marketp2pBIDdragonBG = _this22.dragonDetail[0].imgbackground;
        _this22.marketp2pBIDdragonImgBG = _this22.dragonDetail[0].imgBg;
        let marketp2pdragonpriceUSD = _this22.marketp2pBIDdragonpriceNow / _this22.current_bnb;
        _this22.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);
        if (_this22.marketp2pBIDdragonBG == "exists") {
          _this22.senddata.getdgroyaltymp(_this22.marketp2pBIDdragonDocId).subscribe(dataRoyalty => {
            let dr = dataRoyalty;
            // fee p2p market dragon
            _this22.marketp2pdragonFee = 12 / 100 * _this22.marketp2pBIDdragonpriceNow;
            let marketp2pdragonprice_actual = _this22.marketp2pBIDdragonpriceNow - _this22.marketp2pdragonFee;
            _this22.fee_display = _this22.marketp2pdragonFee;
            _this22.price_display = marketp2pdragonprice_actual;
            _this22.marketp2pdragonRoyalty = 10 / 100 * _this22.marketp2pBIDdragonpriceNow;
            let priceRoyalty_display = _this22.price_display - _this22.marketp2pdragonRoyalty;
            _this22.priceRoyalty_display = priceRoyalty_display.toFixed(2);
            _this22.fee_royalty = _this22.fee_display + _this22.marketp2pdragonRoyalty;
            _this22.marketp2pdragonRoyalty2 = 10 / 100 * _this22.marketp2pdragonRoyalty;
            _this22.marketp2pdragonRoyalty3 = 10 / 100 * _this22.marketp2pdragonRoyalty2;
            _this22.marketp2pdragonRoyalty4 = 10 / 100 * _this22.marketp2pdragonRoyalty3;
            _this22.marketp2pdragonRoyalty5 = 10 / 100 * _this22.marketp2pdragonRoyalty4;
            _this22.marketp2pdragonRoyalty6 = 10 / 100 * _this22.marketp2pdragonRoyalty5;
            let totaroyalty_5a = _this22.marketp2pdragonRoyalty - _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4 - _this22.marketp2pdragonRoyalty5;
            let totaroyalty_5b = _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4 - _this22.marketp2pdragonRoyalty5;
            let totaroyalty_5c = _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4 - _this22.marketp2pdragonRoyalty5;
            let totaroyalty_5d = _this22.marketp2pdragonRoyalty4 - _this22.marketp2pdragonRoyalty5;
            let totaroyalty_5e = _this22.marketp2pdragonRoyalty5 - _this22.marketp2pdragonRoyalty6;
            _this22.totaroyalty_5a = totaroyalty_5a;
            _this22.totaroyalty_5b = totaroyalty_5b;
            _this22.totaroyalty_5c = totaroyalty_5c;
            _this22.totaroyalty_5d = totaroyalty_5d;
            _this22.totaroyalty_5e = totaroyalty_5e;
            let totaroyalty_4a = _this22.marketp2pdragonRoyalty - _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4;
            let totaroyalty_4b = _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4;
            let totaroyalty_4c = _this22.marketp2pdragonRoyalty3 - _this22.marketp2pdragonRoyalty4;
            _this22.totaroyalty_4a = totaroyalty_4a;
            _this22.totaroyalty_4b = totaroyalty_4b;
            _this22.totaroyalty_4c = totaroyalty_4c;
            let totaroyalty_3a = _this22.marketp2pdragonRoyalty - _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3;
            let totaroyalty_3b = _this22.marketp2pdragonRoyalty2 - _this22.marketp2pdragonRoyalty3;
            _this22.totaroyalty_3a = totaroyalty_3a;
            _this22.totaroyalty_3b = totaroyalty_3b;
            let totaroyalty_2a = _this22.marketp2pdragonRoyalty - _this22.marketp2pdragonRoyalty2;
            _this22.totaroyalty_2a = totaroyalty_2a;
            let totaroyalty_1a = _this22.marketp2pdragonRoyalty;
            _this22.totaroyalty_1a = totaroyalty_1a;
            if (dr == 1) {
              _this22.positionRoyalty = 1;
              // console.log("first position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
            } else if (dr == 2) {
              _this22.positionRoyalty = 2;
              // console.log("second position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
            } else if (dr == 3) {
              _this22.positionRoyalty = 3;
              // console.log("third position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
            } else if (dr == 4) {
              _this22.positionRoyalty = 4;
              // console.log("fourth position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
            } else if (dr == 5) {
              _this22.positionRoyalty = 5;
              // console.log("fifth position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
            } else if (dr == 6) {
              _this22.positionRoyalty = 6;
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
          // 
        }
        _this22.senddata.getposroyaltymp(ItemId).subscribe(datapos => {
          let position = JSON.parse(datapos);
          _this22.pos_1 = position.pos_1;
          // console.log("pos 1", this.pos_1);
          _this22.pos_2 = position.pos_2;
          // console.log("pos 2", this.pos_2);
          _this22.pos_3 = position.pos_3;
          // console.log("pos 3", this.pos_3);
          _this22.pos_4 = position.pos_4;
          // console.log("pos 4", this.pos_4);
          _this22.pos_5 = position.pos_5;
          // console.log("pos 5", this.pos_5);
        });

        let now = new Date();
        _this22.latest_date = _this22.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        console.log("latest_date", _this22.latest_date);
        _this22.sesion1 = 0;
        console.log(_this22.sesion1);
        _this22.countDownBID();
        _this22.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this22.countDownBID();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this22.minutes == 0 && _this22.seconds == 0) {
            _this22.sesion1 = 1;
            clearInterval(_this22.countdown);
            if (_this22.sesion1 == 1) {
              console.log(_this22.sesion1);
              _this22.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this22.dragonBidHistoryWin = JSON.parse(dataBid);
                _this22.executeBid(ItemId, _this22.dragonBidHistoryWin[0].idBid);
              });
            }
          }
        }), 1000);
        if (_this22.latest_date > _this22.marketp2pBIDdragontime) {
          console.log("marketp2pBIDdragontime", _this22.marketp2pBIDdragontime);
          _this22.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this22.dragonBidHistoryWin = JSON.parse(dataBid);
            if (_this22.dragonBidHistoryWin.length == 0) {
              _this22.sendBidtoItems(ItemId);
            } else {
              console.log("dragonBidHistoryWin", _this22.dragonBidHistoryWin[0].cartCreatedBid);
              _this22.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this22.checkcountDowncartBID(_this22.dragonBidHistoryWin[0].cartCreatedBid);
                console.log("detailBid cart", _this22.minutescart, _this22.secondscart);
                if (_this22.minutescart == 0 && _this22.secondscart == 0) {
                  _this22.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                    var _ref54 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this22.dragonBidHistoryWin = JSON.parse(dataBid);
                      _this22.dragonBidHistoryWinuidBid = _this22.dragonBidHistoryWin[0].uidBid;
                      _this22.dragonBidHistorycartwinBid = _this22.dragonBidHistoryWin[0].cartCreatedBid;
                      _this22.fs.collection('Bid/' + _this22.marketp2pBIDdragonowner + '/Dragons').doc(_this22.dragonBidHistoryWin[0].DocId).delete().then(() => {});
                      let crd = JSON.stringify({
                        uid: _this22.globalID,
                        price: Number(_this22.input_price_actual)
                      });
                      _this22.current_data = JSON.parse(crd);
                      _this22.fs.collection('Bid/' + _this22.dragonBidHistoryWin[0].uidBid + '/Dragons').doc(_this22.dragonBidHistoryWin[0].DocId).set({
                        Id: _this22.marketp2pBIDdragonDocId,
                        ItemId: _this22.marketp2pBIDdragonID,
                        Attributes: {
                          AttackPoint: Number(_this22.marketp2pBIDdragonAttack),
                          DefensePoint: Number(_this22.marketp2pBIDdragonDefense),
                          Exp: Number(_this22.marketp2pBIDdragonExp),
                          HP: Number(_this22.marketp2pBIDdragonHP),
                          Hunger: Number(_this22.marketp2pBIDdragonHunger),
                          Level: Number(_this22.marketp2pBIDdragonLevel),
                          MaxHP: Number(_this22.marketp2pBIDdragonMaxHP),
                          MaxHunger: Number(_this22.marketp2pBIDdragonMaxHunger)
                        },
                        PriceNow: Number(_this22.marketp2pBIDdragonpriceNow),
                        BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this22.current_data)
                      }).then(() => {}).catch(error => {});
                      let now = new Date();
                      _this22.latest_date = _this22.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                      function addHours(numOfHours, date = new Date()) {
                        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                        return date;
                      }
                      const date = now;
                      let latest_date = addHours(0.001, now);
                      _this22.timeBID = _this22.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                      if (_this22.dragonBidHistoryWin[0].statusBid == 1) {
                        _this22.senddata.deletecartBidListmp(_this22.dragonBidHistoryWin[0].idBid, _this22.timeBID).subscribe(dataE => {
                          _this22.executeBid(ItemId, _this22.dragonBidHistoryWin[0].idBid);
                        });
                        _this22.sesion1 = 0;
                      }
                    });
                    return function (_x41) {
                      return _ref54.apply(this, arguments);
                    };
                  }());
                  const loading = yield _this22.loadingController.create();
                  yield loading.present();
                  _this22.executeBid(ItemId, _this22.dragonBidHistoryWin[0].idBid);
                  setTimeout(function () {
                    window.location.replace('/tabs/p2pmarket');
                    loading.dismiss();
                  }, 2000);
                  clearInterval(_this22.countdownCart);
                } else {
                  _this22.stateExecuteBid = false;
                }
              }), 1000);
            }
          });
        }
      });
      return function (_x40) {
        return _ref51.apply(this, arguments);
      };
    }(), error => {});
  }
  priceNowBiddragon(ItemId) {
    this.senddata.getselldgidBIDmp(ItemId);
  }
  checkBid(ItemId) {
    // this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {});
    let now = new Date();
    this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
    console.log(this.latest_date);
    if (this.latest_date > this.marketp2pBIDdragontime) {
      this.countdownBid = setInterval(() => {
        this.countDownBID();
        this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
          this.dragonBidHistoryWin = JSON.parse(dataBid);
          this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
          this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
          this.stateExecuteBid = true;
          if (this.minutescart == 0 && this.secondscart == 0) {
            this.executecartBid(ItemId);
            this.sendNotificationtoLoseBid(this.dragonBidHistoryWin[0].uidBid, this.dragonBidHistoryWin[0].idBid);
            console.log("cart will expired");
            this.stateExecuteBid = false;
          } else {
            // this.countDowncartBID();
            console.log("cart still running");
            this.stateExecuteBid = true;
          }
        });
      }, 3000);
      this.switchToWinner = true;
      this.sesion1 = 0;
      // this.detailBid(ItemId);
      // console.log(this.switchToWinner);
    } else {
      console.log(ItemId);
      this.switchToWinner = false;
      // this.detailBid(ItemId);
      // console.log(this.switchToWinner);
    }
  }

  checkWinner(ItemId) {
    this.countDowncartBID();
    this.countdownCart = setInterval(() => {
      this.countDowncartBID();
    }, 1000);
    this.countdownWinner = setInterval(() => {
      this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
        this.dragonBidHistoryWin = JSON.parse(dataBid);
        this.dragonBidHistoryWinuidBid = this.dragonBidHistoryWin[0].uidBid;
        this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
        // console.log(this.dragonBidHistoryWin);
      });
    }, 3000);
  }
  countDownBID() {
    var _this23 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this23.marketp2pBIDdragontime).getTime();
      // Update the count down every 1 second
      // var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      _this23.marketp2pdragontimeCount = 1;
      localStorage.setItem("Type", _this23.marketp2pBIDdragontype);
      _this23.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this23.hours = hours;
      _this23.minutes = minutes;
      _this23.seconds = seconds;
      // If the count down is over, write some text
      if (distance < 0 || _this23.hours < 0) {
        _this23.hours = 0;
        _this23.minutes = 0;
        _this23.seconds = 0;
        _this23.marketp2pdragontimeCount = 0;
        // console.log(this.marketp2pdragontimeCount);
        // this.senddata.getselldgBIDmp().subscribe(
        //   async (dataSell: any) => {
        //     this.dragonsBID = dataSell;
        //     this.marketp2pdragonLength = dataSell.length;
        //     setTimeout(function () {
        //       window.location.replace("/tabs/p2pmarket");
        //     }, 500);
        //     let tabs = localStorage.getItem("tabs");
        //     tabs = "bid";
        //   },
        //   (error: any) => {}
        // );
      }
      // }, 1000);
    })();
  }

  timeCart(ItemId) {
    var _this24 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("2. execute timeCartSecond function");
      // const loading = await this.loadingController.create();
      // await loading.present();
      _this24.stateCollectionBid = 0;
      _this24.timeCartSecond(ItemId);
    })();
  }
  timeCartSecond(ItemId) {
    var _this25 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("3. execute executeBid function");
      _this25.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
        var _ref55 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
          _this25.dragonBidHistoryWin = JSON.parse(dataBid);
          _this25.dragonBidHistoryWinuidBid = _this25.dragonBidHistoryWin[0].uidBid;
          _this25.dragonBidHistorycartwinBid = _this25.dragonBidHistoryWin[0].cartCreatedBid;
          _this25.executeBid(ItemId, _this25.dragonBidHistoryWin[0].idBid);
        });
        return function (_x42) {
          return _ref55.apply(this, arguments);
        };
      }());
    })();
  }
  sendBidtoItems(ItemId) {
    var _this26 = this;
    console.log("the winner is empty");
    this.fs.collection('Bid/' + this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).delete().then(() => {
      this.senddata.selldragontoitemsmp(this.marketp2pBIDdragonowner, ItemId).subscribe(dataE => {
        // console.log(dataE);
        this.fs.collection('Items/' + this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).set({
          Id: ItemId,
          ItemId: this.marketp2pBIDdragonID,
          Attributes: {
            AttackPoint: Number(this.marketp2pBIDdragonAttack),
            DefensePoint: Number(this.marketp2pBIDdragonDefense),
            Exp: Number(this.marketp2pBIDdragonExp),
            HP: Number(this.marketp2pBIDdragonHP),
            Hunger: Number(this.marketp2pBIDdragonHunger),
            Level: Number(this.marketp2pBIDdragonLevel),
            MaxHP: Number(this.marketp2pBIDdragonMaxHP),
            MaxHunger: Number(this.marketp2pBIDdragonMaxHunger)
          }
        }).then( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const alert = yield _this26.alertController.create({
            header: "Warning !",
            message: "This Auction has expired!",
            buttons: ["OK"]
          });
          yield alert.present();
          _this26.sesion1 = 0;
          // this.detailBid(ItemId);
          _this26.senddata.getselldgBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref57 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this26.loadingController.create();
              yield loading.present();
              _this26.dragonsBID = dataSell;
              _this26.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.dragonsBID)
              let marketp2pdragonDate = _this26.dragonsBID;
              for (let i in marketp2pdragonDate) {
                _this26.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
                if (_this26.dragonsBID[i].imgbackground == 'exists') {
                  _this26.senddata.getallbackgroundsellmp(_this26.dragonsBID[i].ItemId).subscribe(dataBackground => {
                    _this26.dragonsownedbg = JSON.parse(dataBackground);
                    _this26.marketp2pdragonBG = _this26.dragonsownedbg.imgbackground;
                    // console.log(this.dragonsownedbg)
                  }, error => {});
                }
              }
            });
            return function (_x43) {
              return _ref57.apply(this, arguments);
            };
          }(), error => {});
        })).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBid(ItemId, idBid) {
    var _this27 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this27.sesion1 = 0;
        // this.detailBid(ItemId);
        console.log("the winner is empty");
        _this27.fs.collection('Bid/' + _this27.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).delete().then(() => {
          _this27.senddata.selldragontoitemsmp(_this27.marketp2pBIDdragonowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref58 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this27.fs.collection('Items/' + _this27.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).set({
                Id: ItemId,
                ItemId: _this27.marketp2pBIDdragonID,
                Attributes: {
                  AttackPoint: Number(_this27.marketp2pBIDdragonAttack),
                  DefensePoint: Number(_this27.marketp2pBIDdragonDefense),
                  Exp: Number(_this27.marketp2pBIDdragonExp),
                  HP: Number(_this27.marketp2pBIDdragonHP),
                  Hunger: Number(_this27.marketp2pdragonHunger),
                  Level: Number(_this27.marketp2pBIDdragonLevel),
                  MaxHP: Number(_this27.marketp2pdragonMaxHP),
                  MaxHunger: Number(_this27.marketp2pdragonMaxHunger)
                }
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
              // this.checkkind(this.dragonBidHistoryWin[0].DocId);
            });
            return function (_x44) {
              return _ref58.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this27.stateExecuteBid == false) {
          console.log("processing validation");
          // document has deleted from owner
          console.log("6. delete document from owner");
          _this27.fs.collection('Bid/' + _this27.marketp2pBIDdragonowner + '/Dragons').doc(_this27.dragonBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this27.dragonBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this27.globalID,
              price: Number(_this27.input_price_actual)
            });
            _this27.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            console.log("7. add document to", _this27.dragonBidHistoryWin[0].uidBid);
            _this27.fs.collection('Bid/' + _this27.dragonBidHistoryWin[0].uidBid + '/Dragons').doc(_this27.dragonBidHistoryWin[0].DocId).set({
              Id: ItemId,
              ItemId: _this27.marketp2pBIDdragonID,
              Attributes: {
                AttackPoint: Number(_this27.marketp2pBIDdragonAttack),
                DefensePoint: Number(_this27.marketp2pBIDdragonDefense),
                Exp: Number(_this27.marketp2pBIDdragonExp),
                HP: Number(_this27.marketp2pBIDdragonHP),
                Hunger: Number(_this27.marketp2pdragonHunger),
                Level: Number(_this27.marketp2pBIDdragonLevel),
                MaxHP: Number(_this27.marketp2pdragonMaxHP),
                MaxHunger: Number(_this27.marketp2pdragonMaxHunger)
              },
              PriceNow: Number(_this27.marketp2pBIDdragonpriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this27.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this27.latest_date = _this27.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this27.timeBID = _this27.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", _this27.timeBID);
              // post API to add bid list
              console.log("9. posting data to API...");
              _this27.sessioncountdownCart = 0;
              if (_this27.dragonBidHistoryWin[0].notifBid == 0) {
                _this27.senddata.addcartBidListmp(idBid, _this27.timeBID).subscribe(dataE => {
                  _this27.sendNotificationtoWinBid(_this27.dragonBidHistoryWin[0].uidBid, idBid);
                  if (_this27.dragonBidHistoryWin[0].uidBid == _this27.globalID) {
                    _this27.cartBidcount = 1;
                    _this27.selectedBid = "Dragons";
                    _this27.state_buy = 2;
                    _this27.marketp2pdragonDocId = _this27.dragonBidHistoryWin[0].DocId;
                    console.log(_this27.selectedBid);
                  }
                  let addcartBidListmp = JSON.parse(dataE);
                  console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this27.sesion1 = 0;
                  _this27.sessioncountdownCart = 1;
                  _this27.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this27.timeBID).subscribe(lastBid => {
                    console.log("lastBid", lastBid);
                    _this27.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this27.dragonBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this27.dragonBidHistoryWin[0].uidBid == _this27.globalID) {
                  _this27.cartBidcount = 1;
                  _this27.selectedBid = "Dragons";
                  _this27.state_buy = 2;
                  _this27.marketp2pdragonDocId = _this27.dragonBidHistoryWin[0].DocId;
                  console.log(_this27.selectedBid);
                }
              }
            }).catch(error => {});
          }
          _this27.countDownBID();
          _this27.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this27.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this27.minutes == 0 && _this27.seconds == 0) {
              clearInterval(_this27.countdown);
            } else {
              clearInterval(_this27.countdown);
            }
          }), 1000);
        } else {
          _this27.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this27.dragonBidHistory = JSON.parse(dataBid);
          });
          console.log("validation success");
        }
      }
      // end validation data
    })();
  }
  // EGG
  checkkindEgg(marketp2peggDocId) {
    let tabs = localStorage.getItem("tabs");
    let lastpay = localStorage.getItem("lastpay");
    let lastegg = localStorage.getItem("lastegg");
    if (lastpay == lastegg) {
      if (tabs == "sell") {
        this.state_buy = 3;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "egg") {
          this.senddata.getselleggidmp(marketp2peggDocId).subscribe(dataDetail => {
            this.eggDetail = JSON.parse(dataDetail);
            this.marketp2peggDocId = this.eggDetail.DocId;
            this.marketp2peggID = this.eggDetail.ItemId;
            this.marketp2peggowner = this.eggDetail.uid;
            this.marketp2peggprice = this.eggDetail.price;
            let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
            this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
            console.log(this.marketp2peggpriceUSD);
            this.marketp2peggFee = 12 / 100 * this.marketp2peggprice;
            let marketp2peggprice_actual = this.marketp2peggprice - this.marketp2peggFee;
            this.fee_display = this.marketp2peggFee;
            this.price_display = marketp2peggprice_actual;
          }, error => {});
        }
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        this.loadingtext = true;
        if (lastseen == "egg") {
          this.loadingtext = false;
          this.sesion1 = 0;
          this.detailBidegg(marketp2peggDocId);
          this.countDownBID();
          this.countdown = setInterval(() => {
            this.countDownBID();
            // console.log("checkkind", this.minutes, this.seconds);
          }, 1000);
          this.senddata.getshistorydgidBIDmp(marketp2peggDocId).subscribe(dataBid => {
            this.eggBidHistory = JSON.parse(dataBid);
          });
          let type = this.marketp2pBIDeggtype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            this.state_BID = "Free";
          } else {
            // console.log("Detail Step BID");
            this.state_BID = "Step";
          }
        }
        // console.log(tabs);
      }
    } else {
      if (tabs == "sell") {
        this.state_buy = 2;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "egg") {
          this.senddata.getselleggidmp(marketp2peggDocId).subscribe(dataDetail => {
            this.eggDetail = JSON.parse(dataDetail);
            this.marketp2peggDocId = this.eggDetail.DocId;
            this.marketp2peggID = this.eggDetail.ItemId;
            this.marketp2peggowner = this.eggDetail.uid;
            this.marketp2peggprice = this.eggDetail.price;
            let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
            this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
            console.log(this.marketp2peggpriceUSD);
            this.marketp2peggFee = 12 / 100 * this.marketp2peggprice;
            let marketp2peggprice_actual = this.marketp2peggprice - this.marketp2peggFee;
            this.fee_display = this.marketp2peggFee;
            this.price_display = marketp2peggprice_actual;
          }, error => {});
        }
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        this.loadingtext = true;
        if (lastseen == "egg") {
          // this.senddata.getselleggBIDmp().subscribe(
          //   async (dataSell: any) => {
          //     const loading = await this.loadingController.create();
          //     await loading.present();
          //     this.eggsBID = dataSell;
          //     this.marketp2pdragonLength = dataSell.length;
          //     loading.dismiss();
          //     // console.log(this.eggsBID)
          //     let marketp2pdragonDate = this.eggsBID;
          //   },
          //   (error: any) => {}
          // );
          this.loadingtext = false;
          this.sesion1 = 0;
          this.detailBidegg(marketp2peggDocId);
          this.countDownBID();
          this.countdown = setInterval(() => {
            this.countDownBID();
            // console.log("checkkind", this.minutes, this.seconds);
          }, 1000);
          this.senddata.getshistorydgidBIDmp(marketp2peggDocId).subscribe(dataBid => {
            this.eggBidHistory = JSON.parse(dataBid);
          });
          let type = this.marketp2pBIDeggtype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            this.state_BID = "Free";
          } else {
            // console.log("Detail Step BID");
            this.state_BID = "Step";
          }
        }
        // console.log(tabs);
      }
    }
  }

  detailBidegg(ItemId) {
    var _this28 = this;
    this.senddata.getselleggidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref60 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this28.eggDetail = JSON.parse(dataDetail);
        _this28.marketp2pBIDeggDocId = _this28.eggDetail[0].DocId;
        _this28.marketp2pBIDeggID = _this28.eggDetail[0].ItemId;
        _this28.marketp2pBIDeggImg = _this28.eggDetail[0].Id;
        _this28.marketp2pBIDeggAttack = _this28.eggDetail[0].Attack;
        _this28.marketp2pBIDeggDefense = _this28.eggDetail[0].Defense;
        _this28.marketp2pBIDeggLevel = _this28.eggDetail[0].Level;
        _this28.marketp2pBIDeggHP = _this28.eggDetail[0].HP;
        _this28.marketp2pBIDeggRarity = _this28.eggDetail[0].Rarity;
        _this28.marketp2pBIDeggExp = _this28.eggDetail[0].Exp;
        _this28.marketp2pBIDeggowner = _this28.eggDetail[0].uid;
        _this28.marketp2pBIDeggprice = _this28.eggDetail[0].price;
        _this28.marketp2pBIDeggtype = _this28.eggDetail[0].Type;
        _this28.marketp2pBIDeggpriceNow = _this28.eggDetail[0].PriceNow;
        _this28.marketp2pBIDeggtime = _this28.eggDetail[0].CreatedAt;
        _this28.marketp2pBIDeggLastUpdate = _this28.eggDetail[0].EditAt;
        _this28.marketp2pBIDeggbidTime = _this28.eggDetail[0].bidTime;
        _this28.marketp2peggBIDfavorited = _this28.eggDetail[0].favorited;
        _this28.marketp2pBIDeggBG = _this28.eggDetail[0].imgbackground;
        _this28.marketp2pBIDeggImgBG = _this28.eggDetail[0].imgBg;
        let marketp2peggpriceUSD = _this28.marketp2pBIDeggpriceNow / _this28.current_bnb;
        _this28.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        console.log(_this28.marketp2pBIDeggpriceNow);
        console.log("type", _this28.marketp2pBIDeggtype);
        _this28.marketp2peggFee = 12 / 100 * _this28.marketp2pBIDeggpriceNow;
        // let marketp2peggprice_actual = this.marketp2pBIDeggpriceNow - this.marketp2peggFee;
        _this28.fee_display = _this28.marketp2peggFee;
        // this.price_display = marketp2peggprice_actual;
        let now = new Date();
        _this28.latest_date = _this28.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        console.log("latest_date", _this28.latest_date);
        _this28.sesion1 = 0;
        console.log(_this28.sesion1);
        _this28.countDownBIDEgg();
        _this28.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this28.countDownBIDEgg();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this28.minutesEgg == 0 && _this28.secondsEgg == 0) {
            _this28.sesion1 = 1;
            clearInterval(_this28.countdown);
            if (_this28.sesion1 == 1) {
              console.log(_this28.sesion1);
              _this28.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this28.eggBidHistoryWin = JSON.parse(dataBid);
                _this28.executeBidEgg(ItemId, _this28.eggBidHistoryWin[0].idBid);
              });
            }
          }
        }), 1000);
        if (_this28.isRunning == false) {
          _this28.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this28.senddata.gethmsBIDmp(_this28.marketp2pBIDeggDocId).subscribe(res => {
              let hms = JSON.parse(res);
              _this28.hoursEgg = hms.hours;
              _this28.minutesEgg = hms.minutes;
              _this28.secondsEgg = hms.seconds;
              console.log(_this28.hoursEgg, _this28.minutesEgg, _this28.secondsEgg);
              _this28.secondsEgg++;
              if (_this28.secondsEgg >= 60) {
                _this28.minutesEgg++;
                _this28.secondsEgg = 0;
              }
              if (_this28.minutesEgg >= 60) {
                _this28.hoursEgg++;
                _this28.minutesEgg = 0;
              }
              _this28.senddata.hmsBIDmp(_this28.marketp2pBIDeggDocId, _this28.hoursEgg.toString(), _this28.minutesEgg.toString(), _this28.secondsEgg.toString()).subscribe(res => {
                _this28.isRunning = true;
                // this.bidTime = true;
              });

              if (_this28.hoursEgg >= _this28.marketp2pBIDeggbidTime) {
                // this.bidTime = false;
                console.log("marketp2pBIDeggtime", _this28.marketp2pBIDeggtime);
                _this28.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                  _this28.eggBidHistoryWin = JSON.parse(dataBid);
                  if (_this28.eggBidHistoryWin.length == 0) {
                    _this28.sendBidtoItemsEgg(ItemId);
                  } else {
                    console.log("eggBidHistoryWin", _this28.eggBidHistoryWin[0].cartCreatedBid);
                    _this28.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      _this28.checkcountDowncartBID(_this28.eggBidHistoryWin[0].cartCreatedBid);
                      // console.log("detailBid cart", this.minutescart, this.secondscart);
                      if (_this28.minutescart == 0 && _this28.secondscart == 0) {
                        _this28.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                          var _ref64 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                            _this28.eggBidHistoryWin = JSON.parse(dataBid);
                            _this28.eggBidHistoryWinuidBid = _this28.eggBidHistoryWin[0].uidBid;
                            _this28.eggBidHistorycartwinBid = _this28.eggBidHistoryWin[0].cartCreatedBid;
                            _this28.fs.collection('Bid/' + _this28.marketp2pBIDeggowner + '/Eggs').doc(_this28.eggBidHistoryWin[0].DocId).delete().then(() => {});
                            let crd = JSON.stringify({
                              uid: _this28.globalID,
                              price: Number(_this28.input_price_actual)
                            });
                            _this28.current_data = JSON.parse(crd);
                            _this28.fs.collection('Bid/' + _this28.eggBidHistoryWin[0].uidBid + '/Eggs').doc(_this28.eggBidHistoryWin[0].DocId).set({
                              Id: _this28.eggBidHistoryWin[0].DocId,
                              ItemId: _this28.marketp2pBIDeggID,
                              PriceNow: Number(_this28.marketp2pBIDeggpriceNow),
                              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this28.current_data)
                            }).then(() => {}).catch(error => {});
                            let now = new Date();
                            _this28.latest_date = _this28.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                            function addHours(numOfHours, date = new Date()) {
                              date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                              return date;
                            }
                            const date = now;
                            let latest_date = addHours(0.1, now);
                            _this28.timeBID = _this28.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                            if (_this28.eggBidHistoryWin[0].statusBid == 1) {
                              _this28.senddata.deletecartBidListmp(_this28.eggBidHistoryWin[0].idBid, _this28.timeBID).subscribe(dataE => {
                                _this28.executeBidEgg(ItemId, _this28.eggBidHistoryWin[0].idBid);
                              });
                              _this28.sesion1 = 0;
                            }
                          });
                          return function (_x46) {
                            return _ref64.apply(this, arguments);
                          };
                        }());
                        const loading = yield _this28.loadingController.create();
                        yield loading.present();
                        _this28.executeBidEgg(ItemId, _this28.eggBidHistoryWin[0].idBid);
                        setTimeout(function () {
                          window.location.replace('/tabs/p2pmarket');
                          loading.dismiss();
                        }, 2000);
                        clearInterval(_this28.countdownCart);
                      } else {
                        _this28.stateExecuteBid = false;
                      }
                    }), 1000);
                  }
                });
              }
            });
          }), 1000);
        }
      });
      return function (_x45) {
        return _ref60.apply(this, arguments);
      };
    }(), error => {});
  }
  priceNowBidegg(ItemId) {
    this.senddata.getselleggidBIDmp(ItemId);
  }
  sendBidtoItemsEgg(ItemId) {
    var _this29 = this;
    console.log("the winner is empty");
    this.fs.collection('Bid/' + this.marketp2pBIDeggowner + '/Eggs').doc(ItemId).delete().then(() => {
      this.senddata.selleggtoitemsmp(this.marketp2pBIDeggowner, ItemId).subscribe(dataE => {
        // console.log(dataE);
        this.fs.collection('Items/' + this.marketp2pBIDeggowner + '/Eggs').doc(ItemId).set({
          DocId: ItemId,
          ItemId: this.marketp2pBIDeggID
        }).then( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const alert = yield _this29.alertController.create({
            header: "Warning !",
            message: "This Auction has expired!",
            buttons: ["OK"]
          });
          yield alert.present();
          _this29.sesion1 = 0;
          // this.detailBid(ItemId);
          _this29.senddata.getselleggBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref66 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this29.loadingController.create();
              yield loading.present();
              _this29.eggsBID = dataSell;
              _this29.marketp2peggLength = dataSell.length;
              loading.dismiss();
              // console.log(this.eggsBID)
              let marketp2peggDate = _this29.eggsBID;
            });
            return function (_x47) {
              return _ref66.apply(this, arguments);
            };
          }(), error => {});
        })).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBidEgg(ItemId, idBid) {
    var _this30 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this30.sesion1 = 0;
        // this.detailBid(ItemId);
        console.log("the winner is empty");
        _this30.fs.collection('Bid/' + _this30.marketp2pBIDeggowner + '/Eggs').doc(ItemId).delete().then(() => {
          _this30.senddata.selleggtoitemsmp(_this30.marketp2pBIDeggowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref67 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this30.fs.collection('Items/' + _this30.marketp2pBIDeggowner + '/Eggs').doc(ItemId).set({
                Id: ItemId,
                ItemId: _this30.marketp2pBIDeggID
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
              // this.checkkind(this.eggBidHistoryWin[0].DocId);
            });
            return function (_x48) {
              return _ref67.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this30.stateExecuteBid == false) {
          console.log("processing validation");
          // document has deleted from owner
          console.log("6. delete document from owner");
          _this30.fs.collection('Bid/' + _this30.marketp2pBIDeggowner + '/Eggs').doc(_this30.eggBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this30.eggBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this30.globalID,
              price: Number(_this30.input_price_actual)
            });
            _this30.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            console.log("7. add document to", _this30.eggBidHistoryWin[0].uidBid);
            _this30.fs.collection('Bid/' + _this30.eggBidHistoryWin[0].uidBid + '/Eggs').doc(_this30.eggBidHistoryWin[0].DocId).set({
              Id: _this30.eggBidHistoryWin[0].DocId,
              ItemId: _this30.marketp2pBIDeggID,
              PriceNow: Number(_this30.marketp2pBIDeggpriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this30.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this30.latest_date = _this30.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this30.timeBID = _this30.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", _this30.timeBID);
              // post API to add bid list
              console.log("9. posting data to API...");
              _this30.sessioncountdownCart = 0;
              if (_this30.eggBidHistoryWin[0].notifBid == 0) {
                _this30.senddata.addcartBidListmp(idBid, _this30.timeBID).subscribe(dataE => {
                  _this30.sendNotificationtoWinBid(_this30.eggBidHistoryWin[0].uidBid, idBid);
                  if (_this30.eggBidHistoryWin[0].uidBid == _this30.globalID) {
                    _this30.cartBidcount = 1;
                    _this30.selectedBid = "Eggs";
                    _this30.state_buy = 2;
                    _this30.marketp2peggDocId = _this30.eggBidHistoryWin[0].DocId;
                    console.log(_this30.selectedBid);
                  }
                  let addcartBidListmp = JSON.parse(dataE);
                  console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this30.sesion1 = 0;
                  _this30.sessioncountdownCart = 1;
                  _this30.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this30.timeBID).subscribe(lastBid => {
                    console.log("lastBid", lastBid);
                    _this30.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this30.eggBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this30.eggBidHistoryWin[0].uidBid == _this30.globalID) {
                  _this30.cartBidcount = 1;
                  _this30.selectedBid = "Eggs";
                  _this30.state_buy = 2;
                  _this30.marketp2peggDocId = _this30.eggBidHistoryWin[0].DocId;
                  console.log(_this30.selectedBid);
                }
              }
            }).catch(error => {});
          }
          _this30.countDownBID();
          _this30.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this30.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this30.minutes == 0 && _this30.seconds == 0) {
              clearInterval(_this30.countdown);
            } else {
              clearInterval(_this30.countdown);
            }
          }), 1000);
        } else {
          _this30.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this30.eggBidHistory = JSON.parse(dataBid);
          });
          console.log("validation success");
        }
      }
      // end validation data
    })();
  }

  countDownBIDEgg() {
    var _this31 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this31.marketp2pBIDeggtime).getTime();
      // Update the count down every 1 second
      // var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      _this31.marketp2peggtimeCount = 1;
      localStorage.setItem("Type", _this31.marketp2pBIDeggtype);
      _this31.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      // this.hoursEgg = hours;
      // this.minutesEgg = minutes;
      // this.secondsEgg = seconds;
      // Send to API realtime final
      // this.senddata.hmsBIDmp(this.marketp2pBIDeggDocId, this.hoursServer, this.minutesServer, this.secondsServer, this.fulltimeServer).subscribe((res:any) => {
      //   let hms = JSON.parse(res);
      //   this.hoursEgg = this.hoursServer;
      //   this.minutesEgg = this.minutesServer;
      //   this.secondsEgg = this.secondsServer;
      // });
      // If the count down is over, write some text
      if (_this31.hoursEgg >= _this31.marketp2pBIDeggbidTime) {
        _this31.hoursEgg = 0;
        _this31.minutesEgg = 0;
        _this31.secondsEgg = 0;
        _this31.marketp2peggtimeCount = 0;
        // console.log(this.marketp2pdragontimeCount);
        // this.senddata.getselldgBIDmp().subscribe(
        //   async (dataSell: any) => {
        //     this.dragonsBID = dataSell;
        //     this.marketp2pdragonLength = dataSell.length;
        //     setTimeout(function () {
        //       window.location.replace("/tabs/p2pmarket");
        //     }, 500);
        //     let tabs = localStorage.getItem("tabs");
        //     tabs = "bid";
        //   },
        //   (error: any) => {}
        // );
      }
      // }, 1000);
    })();
  }
  // BATTERY
  checkkindBattery(marketp2pbatteryDocId) {
    var _this32 = this;
    let tabs = localStorage.getItem("tabs");
    let lastpay = localStorage.getItem("lastpay");
    let lastbattery = localStorage.getItem("lastbattery");
    if (lastpay == lastbattery) {
      if (tabs == "sell") {
        this.state_buy = 3;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "battery") {
          this.senddata.getsellbatteryidmp(marketp2pbatteryDocId).subscribe(dataDetail => {
            this.batteryDetail = JSON.parse(dataDetail);
            this.marketp2pbatteryDocId = this.batteryDetail.DocId;
            this.marketp2pbatteryID = this.batteryDetail.ItemId;
            this.marketp2pbatteryowner = this.batteryDetail.uid;
            this.marketp2pbatteryprice = this.batteryDetail.price;
            let marketp2pbatterypriceUSD = this.batteryDetail.price / this.current_bnb;
            this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
            console.log(this.marketp2pbatterypriceUSD);
          }, error => {});
        }
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        this.loadingtext = true;
        if (lastseen == "battery") {
          this.senddata.getsellbatteryBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref69 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this32.loadingController.create();
              yield loading.present();
              _this32.batterysBID = dataSell;
              _this32.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pdragonDate = _this32.batterysBID;
            });
            return function (_x49) {
              return _ref69.apply(this, arguments);
            };
          }(), error => {});
          this.loadingtext = false;
          this.sesion1 = 0;
          this.detailBidbattery(marketp2pbatteryDocId);
          this.countDownBID();
          this.countdown = setInterval(() => {
            this.countDownBID();
            // console.log("checkkind", this.minutes, this.seconds);
          }, 1000);
          this.senddata.getshistorydgidBIDmp(marketp2pbatteryDocId).subscribe(dataBid => {
            this.batteryBidHistory = JSON.parse(dataBid);
          });
          let type = this.marketp2pBIDbatterytype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            this.state_BID = "Free";
          } else {
            // console.log("Detail Step BID");
            this.state_BID = "Step";
          }
        }
        // console.log(tabs);
      }
    } else {
      if (tabs == "sell") {
        this.state_buy = 2;
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "battery") {
          this.senddata.getsellbatteryidmp(marketp2pbatteryDocId).subscribe(dataDetail => {
            this.batteryDetail = JSON.parse(dataDetail);
            this.marketp2pbatteryDocId = this.batteryDetail.DocId;
            this.marketp2pbatteryID = this.batteryDetail.ItemId;
            this.marketp2pbatteryowner = this.batteryDetail.uid;
            this.marketp2pbatteryprice = this.batteryDetail.price;
            let marketp2pbatterypriceUSD = this.batteryDetail.price / this.current_bnb;
            this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
            console.log(this.marketp2pbatterypriceUSD);
            this.marketp2pbatteryFee = 12 / 100 * this.marketp2pbatteryprice;
            let marketp2pbatteryprice_actual = this.marketp2pbatteryprice - this.marketp2pbatteryFee;
            this.fee_display = this.marketp2pbatteryFee;
            this.price_display = marketp2pbatteryprice_actual;
          }, error => {});
        }
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        this.loadingtext = true;
        if (lastseen == "battery") {
          this.senddata.getsellbatteryBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref70 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this32.loadingController.create();
              yield loading.present();
              _this32.batterysBID = dataSell;
              _this32.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pdragonDate = _this32.batterysBID;
            });
            return function (_x50) {
              return _ref70.apply(this, arguments);
            };
          }(), error => {});
          this.loadingtext = false;
          this.sesion1 = 0;
          this.detailBidbattery(marketp2pbatteryDocId);
          this.countDownBID();
          this.countdown = setInterval(() => {
            this.countDownBID();
            // console.log("checkkind", this.minutes, this.seconds);
          }, 1000);
          this.senddata.getshistorydgidBIDmp(marketp2pbatteryDocId).subscribe(dataBid => {
            this.batteryBidHistory = JSON.parse(dataBid);
          });
          let type = this.marketp2pBIDbatterytype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            this.state_BID = "Free";
          } else {
            // console.log("Detail Step BID");
            this.state_BID = "Step";
          }
        }
        // console.log(tabs);
      }
    }
  }

  detailBidbattery(ItemId) {
    var _this33 = this;
    this.senddata.getsellbatteryidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref71 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this33.batteryDetail = JSON.parse(dataDetail);
        _this33.marketp2pBIDbatteryDocId = _this33.batteryDetail[0].DocId;
        _this33.marketp2pBIDbatteryID = _this33.batteryDetail[0].ItemId;
        _this33.marketp2pBIDbatteryImg = _this33.batteryDetail[0].Id;
        _this33.marketp2pBIDbatteryAttack = _this33.batteryDetail[0].Attack;
        _this33.marketp2pBIDbatteryDefense = _this33.batteryDetail[0].Defense;
        _this33.marketp2pBIDbatteryLevel = _this33.batteryDetail[0].Level;
        _this33.marketp2pBIDbatteryHP = _this33.batteryDetail[0].HP;
        _this33.marketp2pBIDbatteryRarity = _this33.batteryDetail[0].Rarity;
        _this33.marketp2pBIDbatteryExp = _this33.batteryDetail[0].Exp;
        _this33.marketp2pBIDbatteryowner = _this33.batteryDetail[0].uid;
        _this33.marketp2pBIDbatteryprice = _this33.batteryDetail[0].price;
        _this33.marketp2pBIDbatterytype = _this33.batteryDetail[0].Type;
        _this33.marketp2pBIDbatterypriceNow = _this33.batteryDetail[0].PriceNow;
        _this33.marketp2pBIDbatterytime = _this33.batteryDetail[0].CreatedAt;
        _this33.marketp2pbatteryBIDfavorited = _this33.batteryDetail[0].favorited;
        _this33.marketp2pBIDbatteryBG = _this33.batteryDetail[0].imgbackground;
        _this33.marketp2pBIDbatteryImgBG = _this33.batteryDetail[0].imgBg;
        let marketp2pbatterypriceUSD = _this33.marketp2pBIDbatterypriceNow / _this33.current_bnb;
        _this33.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);
        _this33.marketp2pbatteryFee = 12 / 100 * _this33.marketp2pBIDbatterypriceNow;
        let marketp2pbatteryprice_actual = _this33.marketp2pBIDbatterypriceNow - _this33.marketp2pbatteryFee;
        _this33.fee_display = _this33.marketp2pbatteryFee;
        _this33.price_display = marketp2pbatteryprice_actual;
        let now = new Date();
        _this33.latest_date = _this33.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        console.log("latest_date", _this33.latest_date);
        _this33.sesion1 = 0;
        console.log(_this33.sesion1);
        _this33.countDownBIDBattery();
        _this33.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this33.countDownBIDBattery();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this33.minutesBattery == 0 && _this33.secondsBattery == 0) {
            _this33.sesion1 = 1;
            clearInterval(_this33.countdown);
            if (_this33.sesion1 == 1) {
              console.log(_this33.sesion1);
              _this33.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this33.batteryBidHistoryWin = JSON.parse(dataBid);
                _this33.executeBidBattery(ItemId, _this33.batteryBidHistoryWin[0].idBid);
              });
            }
          }
        }), 1000);
        if (_this33.latest_date > _this33.marketp2pBIDbatterytime) {
          console.log("marketp2pBIDbatterytime", _this33.marketp2pBIDbatterytime);
          _this33.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this33.batteryBidHistoryWin = JSON.parse(dataBid);
            if (_this33.batteryBidHistoryWin.length == 0) {
              _this33.sendBidtoItemsBattery(ItemId);
            } else {
              console.log("batteryBidHistoryWin", _this33.batteryBidHistoryWin[0].cartCreatedBid);
              _this33.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this33.checkcountDowncartBID(_this33.batteryBidHistoryWin[0].cartCreatedBid);
                console.log("detailBid cart", _this33.minutescart, _this33.secondscart);
                if (_this33.minutescart == 0 && _this33.secondscart == 0) {
                  _this33.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                    var _ref74 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this33.batteryBidHistoryWin = JSON.parse(dataBid);
                      _this33.batteryBidHistoryWinuidBid = _this33.batteryBidHistoryWin[0].uidBid;
                      _this33.batteryBidHistorycartwinBid = _this33.batteryBidHistoryWin[0].cartCreatedBid;
                      _this33.fs.collection('Bid/' + _this33.marketp2pBIDbatteryowner + '/Batteries').doc(_this33.batteryBidHistoryWin[0].DocId).delete().then(() => {});
                      let crd = JSON.stringify({
                        uid: _this33.globalID,
                        price: Number(_this33.input_price_actual)
                      });
                      _this33.current_data = JSON.parse(crd);
                      _this33.fs.collection('Bid/' + _this33.batteryBidHistoryWin[0].uidBid + '/Batteries').doc(_this33.batteryBidHistoryWin[0].DocId).set({
                        DocId: _this33.batteryBidHistoryWin[0].DocId,
                        ItemId: _this33.marketp2pBIDbatteryID,
                        PriceNow: Number(_this33.marketp2pBIDbatterypriceNow),
                        BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this33.current_data)
                      }).then(() => {}).catch(error => {});
                      let now = new Date();
                      _this33.latest_date = _this33.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                      function addHours(numOfHours, date = new Date()) {
                        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                        return date;
                      }
                      const date = now;
                      let latest_date = addHours(0.1, now);
                      _this33.timeBID = _this33.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                      if (_this33.batteryBidHistoryWin[0].statusBid == 1) {
                        _this33.senddata.deletecartBidListmp(_this33.batteryBidHistoryWin[0].idBid, _this33.timeBID).subscribe(dataE => {
                          _this33.executeBidBattery(ItemId, _this33.batteryBidHistoryWin[0].idBid);
                        });
                        _this33.sesion1 = 0;
                      }
                    });
                    return function (_x52) {
                      return _ref74.apply(this, arguments);
                    };
                  }());
                  const loading = yield _this33.loadingController.create();
                  yield loading.present();
                  _this33.executeBidBattery(ItemId, _this33.batteryBidHistoryWin[0].idBid);
                  setTimeout(function () {
                    window.location.replace('/tabs/p2pmarket');
                    loading.dismiss();
                  }, 2000);
                  clearInterval(_this33.countdownCart);
                } else {
                  _this33.stateExecuteBid = false;
                }
              }), 1000);
            }
          });
        }
      });
      return function (_x51) {
        return _ref71.apply(this, arguments);
      };
    }(), error => {});
  }
  priceNowBidbattery(ItemId) {
    this.senddata.getsellbatteryidBIDmp(ItemId);
  }
  sendBidtoItemsBattery(ItemId) {
    var _this34 = this;
    console.log("the winner is empty");
    this.fs.collection('Bid/' + this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).delete().then(() => {
      this.senddata.sellbatterytoitemsmp(this.marketp2pBIDbatteryowner, ItemId).subscribe(dataE => {
        // console.log(dataE);
        this.fs.collection('Items/' + this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).set({
          DocId: ItemId,
          ItemId: this.marketp2pBIDbatteryID
        }).then( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const alert = yield _this34.alertController.create({
            header: "Warning !",
            message: "This Auction has expired!",
            buttons: ["OK"]
          });
          yield alert.present();
          _this34.sesion1 = 0;
          // this.detailBid(ItemId);
          _this34.senddata.getsellbatteryBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref76 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this34.loadingController.create();
              yield loading.present();
              _this34.batterysBID = dataSell;
              _this34.marketp2pbatteryLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pbatteryDate = _this34.batterysBID;
            });
            return function (_x53) {
              return _ref76.apply(this, arguments);
            };
          }(), error => {});
        })).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBidBattery(ItemId, idBid) {
    var _this35 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this35.sesion1 = 0;
        // this.detailBid(ItemId);
        console.log("the winner is empty");
        _this35.fs.collection('Bid/' + _this35.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).delete().then(() => {
          _this35.senddata.sellbatterytoitemsmp(_this35.marketp2pBIDbatteryowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref77 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this35.fs.collection('Items/' + _this35.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).set({
                DocId: ItemId,
                ItemId: _this35.marketp2pBIDbatteryID
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
              // this.checkkind(this.batteryBidHistoryWin[0].DocId);
            });
            return function (_x54) {
              return _ref77.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this35.stateExecuteBid == false) {
          console.log("processing validation");
          // document has deleted from owner
          console.log("6. delete document from owner");
          _this35.fs.collection('Bid/' + _this35.marketp2pBIDbatteryowner + '/Batteries').doc(_this35.batteryBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this35.batteryBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this35.globalID,
              price: Number(_this35.input_price_actual)
            });
            _this35.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            console.log("7. add document to", _this35.batteryBidHistoryWin[0].uidBid);
            _this35.fs.collection('Bid/' + _this35.batteryBidHistoryWin[0].uidBid + '/Batteries').doc(_this35.batteryBidHistoryWin[0].DocId).set({
              DocId: _this35.batteryBidHistoryWin[0].DocId,
              ItemId: _this35.marketp2pBIDbatteryID,
              PriceNow: Number(_this35.marketp2pBIDbatterypriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this35.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this35.latest_date = _this35.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this35.timeBID = _this35.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", _this35.timeBID);
              // post API to add bid list
              console.log("9. posting data to API...");
              _this35.sessioncountdownCart = 0;
              if (_this35.batteryBidHistoryWin[0].notifBid == 0) {
                _this35.senddata.addcartBidListmp(idBid, _this35.timeBID).subscribe(dataE => {
                  _this35.sendNotificationtoWinBid(_this35.batteryBidHistoryWin[0].uidBid, idBid);
                  if (_this35.batteryBidHistoryWin[0].uidBid == _this35.globalID) {
                    _this35.cartBidcount = 1;
                    _this35.selectedBid = "Batteries";
                    _this35.state_buy = 2;
                    _this35.marketp2pbatteryDocId = _this35.batteryBidHistoryWin[0].DocId;
                    console.log(_this35.selectedBid);
                  }
                  let addcartBidListmp = JSON.parse(dataE);
                  console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this35.sesion1 = 0;
                  _this35.sessioncountdownCart = 1;
                  _this35.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this35.timeBID).subscribe(lastBid => {
                    console.log("lastBid", lastBid);
                    _this35.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this35.batteryBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this35.batteryBidHistoryWin[0].uidBid == _this35.globalID) {
                  _this35.cartBidcount = 1;
                  _this35.selectedBid = "Batteries";
                  _this35.state_buy = 2;
                  _this35.marketp2pbatteryDocId = _this35.batteryBidHistoryWin[0].DocId;
                  console.log(_this35.selectedBid);
                }
              }
            }).catch(error => {});
          }
          _this35.countDownBID();
          _this35.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this35.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this35.minutes == 0 && _this35.seconds == 0) {
              clearInterval(_this35.countdown);
            } else {
              clearInterval(_this35.countdown);
            }
          }), 1000);
        } else {
          _this35.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this35.batteryBidHistory = JSON.parse(dataBid);
          });
          console.log("validation success");
        }
      }
      // end validation data
    })();
  }

  countDownBIDBattery() {
    var _this36 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this36.marketp2pBIDbatterytime).getTime();
      // Update the count down every 1 second
      // var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      _this36.marketp2pbatterytimeCount = 1;
      localStorage.setItem("Type", _this36.marketp2pBIDbatterytype);
      _this36.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this36.hoursBattery = hours;
      _this36.minutesBattery = minutes;
      _this36.secondsBattery = seconds;
      // If the count down is over, write some text
      if (distance < 0 || _this36.hoursBattery < 0) {
        _this36.hoursBattery = 0;
        _this36.minutesBattery = 0;
        _this36.secondsBattery = 0;
        _this36.marketp2pbatterytimeCount = 0;
        // console.log(this.marketp2pdragontimeCount);
        // this.senddata.getselldgBIDmp().subscribe(
        //   async (dataSell: any) => {
        //     this.dragonsBID = dataSell;
        //     this.marketp2pdragonLength = dataSell.length;
        //     setTimeout(function () {
        //       window.location.replace("/tabs/p2pmarket");
        //     }, 500);
        //     let tabs = localStorage.getItem("tabs");
        //     tabs = "bid";
        //   },
        //   (error: any) => {}
        // );
      }
      // }, 1000);
    })();
  }

  checkcountDowncartBID(cartCreatedBid) {
    var _this37 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDatecart = new Date(cartCreatedBid).getTime();
      // console.log(countDownDatecart);
      // Update the count down every 1 second
      // var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distancecart = countDownDatecart - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distancecart / (1000 * 60 * 60 * 24));
      var hourscart = Math.floor(distancecart % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutescart = Math.floor(distancecart % (1000 * 60 * 60) / (1000 * 60));
      var secondscart = Math.floor(distancecart % (1000 * 60) / 1000);
      localStorage.setItem("Type", _this37.marketp2pBIDdragontype);
      _this37.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this37.hourscart = hourscart;
      _this37.minutescart = minutescart;
      _this37.secondscart = secondscart;
      _this37.carttimeleft = 1;
      _this37.sesicart = 1;
      // this.state_buy = 5;
      // this.stateHash = true;
      // If the count down is over, write some text
      if (distancecart < 0) {
        _this37.hourscart = 0;
        _this37.minutescart = 0;
        _this37.secondscart = 0;
        _this37.carttimeleft = 0;
        _this37.sesicart = 0;
        // console.log(this.marketp2pdragontimeCount);
        // this.senddata.getselldgBIDmp().subscribe(
        //   async (dataSell: any) => {
        //     this.dragonsBID = dataSell;
        //     this.marketp2pdragonLength = dataSell.length;
        //     setTimeout(function () {
        //       window.location.replace("/tabs/p2pmarket");
        //     }, 500);
        //     let tabs = localStorage.getItem("tabs");
        //     tabs = "bid";
        //   },
        //   (error: any) => {}
        // );
      }
      // }, 1000);
    })();
  }

  countDowncartBID() {
    var _this38 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDatecart = new Date(_this38.dragonBidHistorycartwinBid).getTime();
      // console.log(countDownDatecart);
      // Update the count down every 1 second
      // var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distancecart = countDownDatecart - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distancecart / (1000 * 60 * 60 * 24));
      var hourscart = Math.floor(distancecart % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutescart = Math.floor(distancecart % (1000 * 60 * 60) / (1000 * 60));
      var secondscart = Math.floor(distancecart % (1000 * 60) / 1000);
      localStorage.setItem("Type", _this38.marketp2pBIDdragontype);
      _this38.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this38.hourscart = hourscart;
      _this38.minutescart = minutescart;
      _this38.secondscart = secondscart;
      _this38.carttimeleft = 1;
      _this38.sesicart = 1;
      // this.state_buy = 5;
      // this.stateHash = true;
      // If the count down is over, write some text
      if (distancecart < 0) {
        _this38.hourscart = 0;
        _this38.minutescart = 0;
        _this38.secondscart = 0;
        _this38.carttimeleft = 0;
        _this38.sesicart = 0;
        // console.log(this.marketp2pdragontimeCount);
        // this.senddata.getselldgBIDmp().subscribe(
        //   async (dataSell: any) => {
        //     this.dragonsBID = dataSell;
        //     this.marketp2pdragonLength = dataSell.length;
        //     setTimeout(function () {
        //       window.location.replace("/tabs/p2pmarket");
        //     }, 500);
        //     let tabs = localStorage.getItem("tabs");
        //     tabs = "bid";
        //   },
        //   (error: any) => {}
        // );
      }
      // }, 1000);
    })();
  }

  sessionCart() {
    if (this.sesicart == 0) {
      this.checkkind(this.marketp2pBIDdragonDocId);
    }
  }
  executecartBid(ItemId) {
    var _this39 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this39.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
        var _ref79 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
          _this39.dragonBidHistoryWin = JSON.parse(dataBid);
          _this39.dragonBidHistoryWinuidBid = _this39.dragonBidHistoryWin[0].uidBid;
          _this39.dragonBidHistorycartwinBid = _this39.dragonBidHistoryWin[0].cartCreatedBid;
          _this39.fs.collection('Bid/' + _this39.marketp2pBIDdragonowner + '/Dragons').doc(_this39.dragonBidHistoryWin[0].DocId).delete().then(() => {});
          let crd = JSON.stringify({
            uid: _this39.globalID,
            price: Number(_this39.input_price_actual)
          });
          _this39.current_data = JSON.parse(crd);
          _this39.fs.collection('Bid/' + _this39.dragonBidHistoryWin[0].uidBid + '/Dragons').doc(_this39.dragonBidHistoryWin[0].DocId).set({
            Id: ItemId,
            ItemId: _this39.marketp2pBIDdragonID,
            Attributes: {
              AttackPoint: Number(_this39.marketp2pBIDdragonAttack),
              DefensePoint: Number(_this39.marketp2pBIDdragonDefense),
              Exp: Number(_this39.marketp2pBIDdragonExp),
              HP: Number(_this39.marketp2pBIDdragonHP),
              Hunger: Number(_this39.marketp2pdragonHunger),
              Level: Number(_this39.marketp2pBIDdragonLevel),
              MaxHP: Number(_this39.marketp2pdragonMaxHP),
              MaxHunger: Number(_this39.marketp2pdragonMaxHunger)
            },
            PriceNow: Number(_this39.marketp2pBIDdragonpriceNow),
            BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this39.current_data)
          }).then(() => {}).catch(error => {});
          let now = new Date();
          _this39.latest_date = _this39.datepipe.transform(now, "yyyy-MM-dd HH:mm");
          function addHours(numOfHours, date = new Date()) {
            date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
            return date;
          }
          const date = now;
          let latest_date = addHours(0.1, now);
          _this39.timeBID = _this39.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
          if (_this39.dragonBidHistoryWin[0].statusBid == 1) {
            _this39.senddata.deletecartBidListmp(_this39.dragonBidHistoryWin[0].idBid, _this39.timeBID).subscribe(dataE => {});
            // this.timeCart(ItemId);
            _this39.sesion1 = 0;
          } else {}
        });
        return function (_x55) {
          return _ref79.apply(this, arguments);
        };
      }(), error => {});
    })();
  }
  checkkindGroup(iditemssellFood) {
    let lastseen = localStorage.getItem("lastseen");
    this.senddata.getsellfoodidmp(iditemssellFood).subscribe(dataDetail => {
      this.foodDetail = JSON.parse(dataDetail);
      this.marketp2pfoodOID = this.foodDetail.ObjectId;
      this.marketp2pfoodID = this.foodDetail.ItemId;
      this.marketp2pfoodImg = this.foodDetail.Id;
      this.marketp2pfoodowner = this.foodDetail.owner;
      this.marketp2pfoodHVP = this.foodDetail.HVP;
      this.marketp2pfoodQty = this.foodDetail.qty;
      this.marketp2pfoodprice = this.foodDetail.price;
      let marketp2pfoodpriceUSD = this.foodDetail.price / this.current_bnb;
      this.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
      console.log(JSON.parse(dataDetail));
    }, error => {});
  }
  countDownSell() {
    var _this40 = this;
    // console.log("Countdown Sell", this.marketp2pdragontime);
    // Set the date we're counting down to
    var countDownDate = new Date(this.marketp2pdragontime).getTime();
    // Update the count down every 1 second
    // var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    this.marketp2pdragontimeCount = 1;
    localStorage.setItem("Type", this.marketp2pBIDdragontype);
    this.input_price_actual = localStorage.getItem("Input");
    // console.log(this.marketp2pdragontimeCount)
    this.daysSell = days;
    this.hoursSell = hours;
    this.minutesSell = minutes;
    this.secondsSell = seconds;
    // console.log(this.marketp2pdragontime)
    // If the count down is over, write some text
    if (distance < 0) {
      this.marketp2pdragontimeCount = 0;
      console.log(this.marketp2pdragontimeCount);
      this.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
        var _ref80 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          _this40.dragons = dataSell;
          _this40.marketp2pdragonLength = dataSell.length;
          setTimeout(function () {
            window.location.replace("/tabs/p2pmarket");
          }, 50000);
          let tabs = localStorage.getItem("tabs");
          tabs = "sell";
        });
        return function (_x56) {
          return _ref80.apply(this, arguments);
        };
      }(), error => {});
      this.fs.collection('Sell/' + this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId).delete().then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.marketp2pdragonowner;
        console.log("Items has been expired!");
        this.senddata.selldragontoitemsmp(this.marketp2pdragonowner, this.marketp2pdragonDocId).subscribe( /*#__PURE__*/function () {
          var _ref81 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
            console.log(dataE);
            _this40.fs.collection('Items/' + _this40.marketp2pdragonowner + '/Dragons').doc(_this40.marketp2pdragonDocId).set({
              Id: _this40.marketp2pdragonDocId,
              ItemId: _this40.marketp2pdragonID,
              Attributes: {
                AttackPoint: Number(_this40.marketp2pdragonAttack),
                DefensePoint: Number(_this40.marketp2pdragonDefense),
                Exp: Number(_this40.marketp2pdragonExp),
                HP: Number(_this40.marketp2pdragonHP),
                Hunger: Number(_this40.marketp2pdragonHunger),
                Level: Number(_this40.marketp2pdragonLevel),
                MaxHP: Number(_this40.marketp2pdragonMaxHP),
                MaxHunger: Number(_this40.marketp2pdragonMaxHunger)
              }
            }).then(() => {
              console.log("Document successfully sold!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            const alert = yield _this40.alertController.create({
              header: "Attention",
              message: "Items has been expired!",
              buttons: ["OK"]
            });
            yield alert.present();
            _this40.checkkind(_this40.marketp2pdragonID);
          });
          return function (_x57) {
            return _ref81.apply(this, arguments);
          };
        }(), error => {});
      });
    }
    // }, 1000);
  }

  checkitemscreated() {
    this.fs.collection("Items").doc(this.globalID).valueChanges().subscribe(datas => {
      //console.log(datas.Count);
      if (datas == undefined) {
        this.fs.collection("Items").doc(this.globalID).set({
          LastUpdated: this.newTime(),
          Dragon: [],
          Egg: [],
          Battery: [],
          Food: []
        });
      }
    });
  }
  setdgbuycart() {}
  onPriceChange(input_price) {
    var _this41 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem("Input", input_price.toString());
      _this41.state_buy = 4;
      let marketp2peggprice_actual = input_price - _this41.marketp2peggFee;
      _this41.price_display = marketp2peggprice_actual;
      console.log(_this41.price_display);
      if (input_price == _this41.marketp2pBIDdragonpriceNow || input_price == _this41.marketp2pBIDeggpriceNow) {
        const alert = yield _this41.alertController.create({
          header: "Warning !",
          message: "Please Bid With Higher Price.",
          buttons: ["OK"]
        });
        yield alert.present();
      }
    })();
  }
  addItemRoulette(uid, kind, txhash) {
    //this.getcountRolling();
    if (kind == "10") {
      this.fs.collection("Roulette").doc(uid).update({
        Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          CreatedAt: this.newTime(),
          Count: 10,
          txHash: txhash
        }))
      }).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection("Roulette").doc(uid).update({
          Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(10)
        });
        this.openDialog("Transaction Success, 10 Roulette Added");
      }).catch(error => {
        // The document probably doesn't exist.
        this.fs.collection("Roulette").doc(uid).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection("Roulette").doc(uid).update({
          Count: 10
        });
        this.fs.collection("Roulette").doc(uid).update({
          Used: 0
        });
        this.fs.collection("Roulette").doc(uid).update({
          Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
            CreatedAt: this.newTime(),
            Count: 10,
            txHash: txhash
          }))
        });
        this.openDialog("Transaction Success, 10 Roulette Added");
      });
    } else if (kind == "1") {
      this.fs.collection("Roulette").doc(uid).update({
        Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          CreatedAt: this.newTime(),
          Count: 1,
          txHash: txhash
        }))
      }).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection("Roulette").doc(uid).update({
          Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(1)
        });
        this.openDialog("Transaction Success, 1 Roulette Added");
      }).catch(error => {
        // The document probably doesn't exist.
        this.fs.collection("Roulette").doc(uid).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection("Roulette").doc(uid).update({
          Count: 1
        });
        this.fs.collection("Roulette").doc(uid).update({
          Used: 0
        });
        this.fs.collection("Roulette").doc(uid).update({
          Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
            CreatedAt: this.newTime(),
            Count: 1,
            txHash: txhash
          }))
        });
        this.openDialog("Transaction Success, 1 Roulette Added");
        // if(this.count_roulette % 5 == 0 && this.count_roulette != 0){
        //   this.fs.collection('Roulette').doc(uid).update({Count : firebase.firestore.FieldValue.increment(1)});
        // }
      });
    }
  }

  getPaymentCount() {
    this.fs.collection("Payment").doc(this.globalID).valueChanges().subscribe(datas => {
      // console.log(datas.Gacha1);
      if (datas != undefined) {
        if (this.kind == "10") {
          if (datas.Gacha10 > 0) {
            this.payment_count = datas.Gacha10;
            this.state_buy == "2";
          }
        } else if (this.kind == "1") {
          if (datas.Gacha1 > 0) {
            this.payment_count = datas.Gacha1;
            this.state_buy == "2";
          }
        }
        if (datas.Gacha10 < 0) {
          this.fs.collection("Payment").doc(this.globalID).update({
            Gacha10: 0
          });
        }
        if (datas.Gacha1 < 0) {
          this.fs.collection("Payment").doc(this.globalID).update({
            Gacha1: 0
          });
        }
      } else {
        this.fs.collection("Payment").doc(this.globalID).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection("Payment").doc(this.globalID).update({
          Gacha10: 0,
          Gacha1: 0
        }).then(() => {});
      }
      //this.slot_roulette = test
      // console.log(datas);
    });
  }

  favorite_item(DocId) {
    var _this42 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this42.loadingController.create();
      yield loading.present();
      _this42.senddata.favoritedmp(_this42.globalID, DocId).subscribe( /*#__PURE__*/function () {
        var _ref82 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this42.senddata.getselldglimitmp().subscribe(dataSell => {
            _this42.dragons = dataSell;
          }, error => {});
          loading.dismiss();
        });
        return function (_x58) {
          return _ref82.apply(this, arguments);
        };
      }(), error => {});
    })();
  }
  checkselleggmp() {
    this.senddata.getselleggmp().subscribe(dataSell => {
      this.sorteggs = dataSell;
      this.marketp2peggLength = dataSell.length;
    }, error => {});
  }
  openDialog(msg) {}
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
  sendNotificationtoWinBid(uidWinBid, idBid) {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
      vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
    }).then(tokenPushNotification => {
      if (tokenPushNotification) {
        this.senddata.gettokenOwnermp(uidWinBid).subscribe(dataToken => {
          this.tokenNotif = JSON.parse(dataToken);
          this.senddata.postNotificationtoWinBidmp(uidWinBid, this.tokenNotif.tokenPushNotification, idBid).subscribe(data => {});
          console.log(this.tokenNotif.tokenPushNotification);
        });
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  sendNotificationtoLoseBid(uidLoseBid, idBid) {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
      vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
    }).then(tokenPushNotification => {
      if (tokenPushNotification) {
        this.senddata.gettokenOwnermp(uidLoseBid).subscribe(dataToken => {
          this.tokenNotif = JSON.parse(dataToken);
          this.senddata.postNotificationtoLoseBidmp(uidLoseBid, this.tokenNotif.tokenPushNotification, idBid).subscribe(data => {
            localStorage.setItem("token", tokenPushNotification);
            console.log("save token", tokenPushNotification);
          });
          console.log(this.tokenNotif.tokenPushNotification);
        });
        console.log("Hurraaa!!! we got the token.....");
        console.log(tokenPushNotification);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  sendNotificationtoLosesBid(uidLoseBid, idBid) {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
      vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
    }).then(tokenPushNotification => {
      if (tokenPushNotification) {
        this.senddata.gettokenOwnermp(uidLoseBid).subscribe(dataToken => {
          this.tokenNotif = JSON.parse(dataToken);
          console.log("gettokenOwnermp", this.tokenNotif.tokenPushNotification);
          this.senddata.postNotificationtoLosesBidmp(uidLoseBid, this.tokenNotif.tokenPushNotification, idBid).subscribe(data => {
            localStorage.setItem("token", tokenPushNotification);
            console.log("save token", tokenPushNotification);
          });
          console.log(this.tokenNotif.tokenPushNotification);
        });
        console.log("Hurraaa!!! we got the token.....");
        console.log(tokenPushNotification);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.onMessage)(messaging, payload => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ToastController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_18__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_10__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_5__.SendData
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe
}, {
  type: _awesome_cordova_plugins_push_ngx__WEBPACK_IMPORTED_MODULE_6__.Push
}, {
  type: _services_messaging_service__WEBPACK_IMPORTED_MODULE_11__.MessagingService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
}]), (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "propDecorators", {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInfiniteScroll]
  }]
}), _class);
CronBidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
  selector: "app-cron-bid",
  template: _cron_bid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_cron_bid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], CronBidPage);


/***/ }),

/***/ 68059:
/*!********************************************************!*\
  !*** ./src/app/cron-bid/cron-bid.page.scss?ngResource ***!
  \********************************************************/
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

/***/ 72401:
/*!********************************************************!*\
  !*** ./src/app/cron-bid/cron-bid.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">  \n  <main>\n    <!-- Collection -->\n    <section class=\"relative py-24\" style=\"padding-top: 20vh;\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"assets/img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"container\">\n        <!-- Tabs Nav -->\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"p2pTab(2)\" class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"bid-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bid\" type=\"button\" role=\"tab\" aria-controls=\"bid\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">BID</span>\n            </button>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <!-- BID Tab -->\n          <div class=\"tab-pane fade show active\" id=\"bid\" role=\"tabpanel\" aria-labelledby=\"bid-tab\">\n            <!-- Filters -->\n            <div class=\"mb-8 flex flex-wrap items-center justify-between\">\n              <div class=\"flex flex-wrap items-center\">\n                <!-- Category -->\n                <div class=\"my-1 mr-2.5\">\n                  <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\n                    </svg>\n                    <span>Category</span>\n                  </button>\n                  <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\n                    <ul class=\"flex flex-col flex-wrap\">\n                      <li>\n                        <div style=\"padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategorybid(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggBIDLength}}</span>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- end filters -->\n            <!-- Grid -->\n            <div *ngIf=\"lastseen == 'egg'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n              <div *ngFor=\"let datas of eggsBID\">\n                <article>\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                      <!--  -->\n                      <div *ngIf=\"datas.ItemId == 'ITM6'\">\n                        <img src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                      <div *ngIf=\"datas.ItemId == 'ITM8'\">\n                        <img src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                      <div *ngIf=\"datas.ItemId == 'ITM2'\">\n                        <img src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                      <div *ngIf=\"datas.ItemId == 'ITM5'\">\n                        <img src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                      <div *ngIf=\"datas.ItemId == 'ITM7'\">\n                        <img src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                      <div *ngIf=\"datas.ItemId == 'ITM4'\">\n                        <img src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\"/>\n                      </div>\n                    </figure>\n                    <div class=\"mt-2 text-sm\">\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4 w-full\">\n                        <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\n                          <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Auction {{datas.bidTime}} hours</span>\n                          <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\n                            <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\n                              <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{datas.hours}}</span>\n                              <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\n                            </span>\n                            <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\n                              <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{datas.minutes}}</span>\n                              <span class=\"block text-xs font-medium tracking-tight\">Min</span>\n                            </span>\n                            <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\n                              <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{datas.seconds}}</span>\n                              <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"mt-7 flex items-center justify-between\">\n                      <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\n                      <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\n                      <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\n                      <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\n                      <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\n                      <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                        </a>\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"mt-2 text-sm\">\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                        <span data-tippy-content=\"ETH\">\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                            <g fill=\"#f3ba2f\">\n                              <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                            </g>\n                          </svg>\n                        </span>\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.PriceNow}} BNB - </span>\n                        <span class=\"text-green\"> {{datas.Type}}</span>\n                      </span>\n                    </div>\n                  </div>\n                </article>\n              </div>\n            </div>\n            <!-- end grid -->\n          </div>\n          <!-- end bid tab -->\n        </div>\n      </div>\n    </section>\n    <!-- end collection -->\n  </main>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_cron-bid_cron-bid_module_ts.js.map