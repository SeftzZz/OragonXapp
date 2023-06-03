(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_background_background_module_ts"],{

/***/ 7381:
/*!*********************************************************!*\
  !*** ./src/app/background/background-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundPageRoutingModule": () => (/* binding */ BackgroundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _background_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.page */ 90453);




const routes = [{
  path: '',
  component: _background_page__WEBPACK_IMPORTED_MODULE_0__.BackgroundPage
}];
let BackgroundPageRoutingModule = class BackgroundPageRoutingModule {};
BackgroundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BackgroundPageRoutingModule);


/***/ }),

/***/ 30686:
/*!*************************************************!*\
  !*** ./src/app/background/background.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundPageModule": () => (/* binding */ BackgroundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _background_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-routing.module */ 7381);
/* harmony import */ var _background_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.page */ 90453);







let BackgroundPageModule = class BackgroundPageModule {};
BackgroundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _background_routing_module__WEBPACK_IMPORTED_MODULE_0__.BackgroundPageRoutingModule],
  declarations: [_background_page__WEBPACK_IMPORTED_MODULE_1__.BackgroundPage]
})], BackgroundPageModule);


/***/ }),

/***/ 90453:
/*!***********************************************!*\
  !*** ./src/app/background/background.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundPage": () => (/* binding */ BackgroundPage)
/* harmony export */ });
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _background_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.page.html?ngResource */ 27873);
/* harmony import */ var _background_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.page.scss?ngResource */ 20768);
/* harmony import */ var _background_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_background_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/messaging */ 6157);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;









swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_5__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade]);

const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);


// AngularFire


// Services




// Web3



const providerOptions = {
  walletconnect: {
    package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_13__["default"],
    options: {
      network: 'binance',
      infuraId: '46a670cff8894b729ea30027244e4641',
      rpc: {
        56: "https://oragonbsc.io/binance/"
      }
    }
  }
};
const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_12___default())({
  network: "mainnet",
  cacheProvider: true,
  providerOptions // required
});

let BackgroundPage = (_class = class BackgroundPage {
  constructor(authService, router, storage, firestore, loadingController, alertController, fs, http, global, senddata) {
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storage", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "firestore", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "slides", void 0);
    // object
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", '');
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isLogin", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "percentRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "valueRoyalty", void 0);
    // AGM
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latitude", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "longitude", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "zoom", void 0);
    // WEB3
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "states", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallet", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallets", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "username", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "email", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "price", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "item_name", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state_buy", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "connect", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "kind", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bnb_balance", "...");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance_display", "...");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "oragon_balance2", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_dollar", "...");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "price_display", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_display", "");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_1", "0");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_2", "0");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "count_roulette", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "used", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon_100c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon_12c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon10", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon1", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon102", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon12", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon12c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "in_oragon102c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latesttenOragon", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latestfiftheenOragon", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceORGNPlayers", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBNBPlayers", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBUSDPlayers", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceBackground", void 0);
    //WALLET PARAM
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3js", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "accounts", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "address_to", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "amount_to", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "provider", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance1", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balance2", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3Modal", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenInst", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "web3provider", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "check", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datas_oragon", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_oragon", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_bnb", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_busd", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "payment_count", 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenABI", [
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
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscription", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_direct_buy", "1");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateHash", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "parse_localStorage", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storedata", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storedetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeUID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeName", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeDeskripsi", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePrice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storePriceBNB", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storecart", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "carts", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartUID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartCount", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartNull", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartNotNull", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartName", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartDeskripsi", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartQty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPrice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPriceBNB", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidegg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidbattery", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uidfood", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaLowest", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atoz", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonAttack", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDefense", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLevel", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRarity", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonExp", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonIdBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "choosed", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bgdefault", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selected", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "historyremark", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "url", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsAllowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "imgBgUploaded", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedAttack", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedDefense", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedLevel", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedRarity", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedExp", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenNotif", void 0);
    this.authService = authService;
    this.router = router;
    this.storage = storage;
    this.firestore = firestore;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.fs = fs;
    this.http = http;
    this.global = global;
    this.senddata = senddata;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
  }
  setSwiperInstance(swiper) {
    this.slides = swiper;
  }
  logout() {
    var _this = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.logout();
      _this.router.navigateByUrl('/mpdev/', {
        replaceUrl: true
      });
    })();
  }
  login() {
    var _this2 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this2.router.navigateByUrl('/login', {
        replaceUrl: true
      });
    })();
  }
  alertWithdraw() {
    var _this3 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Congratulation !',
        message: 'Now you can Withdraw, check your profile.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  onSelectFile(event, DocId, ItemId) {
    var _this4 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingController.create();
      yield loading.present();
      // console.log(event, DocId, ItemId)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        _this4.senddata.uploadBackgroundmp(event.target.files[0], DocId).subscribe( /*#__PURE__*/function () {
          var _ref = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            let imgBgUploaded = JSON.parse(data);
            _this4.imgBgUploaded = imgBgUploaded.imgBg;
            _this4.marketp2pdragonID = imgBgUploaded.ItemId;
            _this4.marketp2pdragonAttack = imgBgUploaded.Attack;
            _this4.marketp2pdragonDefense = imgBgUploaded.Defense;
            _this4.marketp2pdragonLevel = imgBgUploaded.Level;
            _this4.marketp2pdragonRarity = imgBgUploaded.Rarity;
            _this4.marketp2pdragonBG = imgBgUploaded.imgBg;
            // console.log(ItemId);
            if (ItemId == 'ITM1') {
              let kind = 1;
              _this4.chooseDragon(kind, DocId, ItemId);
            } else if (ItemId == 'ITM11') {
              let kind = 2;
              _this4.chooseDragon(kind, DocId, ItemId);
            } else if (ItemId == 'ITM9') {
              let kind = 3;
              _this4.chooseDragon(kind, DocId, ItemId);
            } else if (ItemId == 'ITM10') {
              let kind = 4;
              _this4.chooseDragon(kind, DocId, ItemId);
            } else if (ItemId == 'ITM13') {
              let kind = 5;
              _this4.chooseDragon(kind, DocId, ItemId);
            } else if (ItemId == 'ITM12') {
              let kind = 6;
              _this4.chooseDragon(kind, DocId, ItemId);
            }
            _this4.bgdefault = 0;
            loading.dismiss();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        // console.log(event.target.files[0]);
        reader.onload = event => {
          _this4.url = event.target.result;
        };
      }
    })();
  }
  doRefresh(event) {}
  ngOnInit() {
    var _this5 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingController.create();
      yield loading.present();
      _this5.setCurrentLocation();
      _this5.status_direct_buy = 1;
      _this5.senddata.getcurrentoragon2().subscribe(data => {
        _this5.current_oragon = data.data.price;
        var Web3 = __webpack_require__(/*! web3 */ 30143);
        let currOne = (15 / _this5.current_oragon).toFixed();
        _this5.latestfiftheenOragon = (Web3.utils.fromWei(currOne, 'wei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.latestfiftheenOragon);
      }, error => {});
      _this5.senddata.getcurrentbnb().subscribe(data => {
        _this5.current_bnb = data.data.price_BNB;
        // console.log(this.current_bnb)
      }, error => {});
      _this5.senddata.getcurrentbusd().subscribe(data => {
        _this5.current_bnb = data.data.price_BNB;
        // console.log(this.current_bnb)
      }, error => {});
      _this5.isLogin = localStorage.getItem('isLogin');
      _this5.localStorage = localStorage.getItem('ProfileData');
      _this5.parse_localStorage = JSON.parse(_this5.localStorage);
      if (_this5.localStorage == undefined) {
        _this5.isLogin = '!';
      } else {
        _this5.isLogin = '';
        _this5.wallets = _this5.parse_localStorage.WalletAddress;
        _this5.username = _this5.parse_localStorage.PlayerName;
        _this5.globalID = _this5.parse_localStorage.Uid;
        _this5.email = _this5.parse_localStorage.Email;
        if (_this5.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this5.connect = false;
          _this5.stateHash = false;
        } else {
          _this5.connect = true;
          _this5.stateHash = true;
          _this5.state_buy = 2;
          _this5.status_direct_buy = 2;
        }
        _this5.senddata.balancePlayers(_this5.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this5.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceORGNPlayers", this.balanceORGNPlayers);
        }, error => {});
        _this5.senddata.balanceBNBPlayers(_this5.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this5.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBNBPlayers", this.balanceBNBPlayers);
          _this5.valueRoyalty = _this5.balanceBNBPlayers / 100 * 100;
          _this5.percentRoyalty = _this5.balanceBNBPlayers * 100;
          if (_this5.valueRoyalty == 1) {
            localStorage.setItem('wd', '1');
            let wd = localStorage.getItem('wd');
            if (wd == '1') {
              _this5.alertWithdraw();
              return wd;
            }
            return _this5.valueRoyalty;
          }
        }, error => {});
        _this5.senddata.balanceBUSDPlayers(_this5.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this5.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBUSDPlayers", this.balanceBUSDPlayers);
        }, error => {});
      }
      _this5.fs.collection('Utility').doc(_this5.globalID).valueChanges().subscribe(datas => {
        // console.log(datas.Count);
        if (datas == undefined) {
          _this5.fs.collection('Utility').doc(_this5.globalID).set({
            Dragon: []
          });
        }
      });
      _this5.senddata.getdgbackgroundmp(_this5.globalID).subscribe(dataSell => {
        _this5.dragonsAllowned = JSON.parse(dataSell);
        _this5.marketp2pdragonLength = _this5.dragonsAllowned.length;
        // console.log("this.dragonsAllowned", this.dragonsAllowned);
      }, error => {});
      yield loading.dismiss();
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
        localStorage.setItem('geoLocation', js);
        this.http.get("http://api.ipify.org/?format=json").subscribe(res => {
          this.ipAddress = res.ip;
          this.senddata.setkycuser(this.globalID, this.ipAddress, js).subscribe(data => {}, error => {});
        });
      });
    }
  }
  // WEB3
  connectAccount() {
    var _this6 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.provider = yield web3Modal.connect();
      _this6.getcurrentoragon();
      _this6.web3js = new (web3__WEBPACK_IMPORTED_MODULE_11___default())(_this6.provider); // create web3 instance
      console.log(_this6.web3js);
      // this.accounts = await this.web3js.eth.getAccounts(console.log); 
      _this6.wallet = _this6.accounts[0];
      if (_this6.wallet == _this6.wallets) {
        _this6.tokenInst = new _this6.web3js.eth.Contract(_this6.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
        // this.balance1 = await this.tokenInst.methods.balanceOf(this.accounts[0]).call(console.log);
        _this6.oragon_balance_display = (_this6.web3js.utils.fromWei(_this6.balance1, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        _this6.oragon_balance = _this6.web3js.utils.fromWei(_this6.balance1, 'gwei');
        _this6.in_dollar = _this6.oragon_balance * _this6.current_oragon;
        _this6.oragon_balance2 = _this6.balance1;
        _this6.balance2 = yield _this6.web3js.eth.getBalance(_this6.accounts[0]);
        _this6.bnb_balance = _this6.web3js.utils.fromWei(_this6.balance1, 'ether');
        // console.log(this.bnb_balance);
        //if connect
        _this6.connect = true;
        if (_this6.payment_count <= 0) {
          _this6.state_buy = "2";
        } else if (_this6.payment_count > 0) {
          _this6.state_buy = "2";
        }
        _this6.stateHash = true;
        _this6.fee = (11 / 100 * 100 * 0.0027).toString();
        _this6.marketp2pdragonFee = 11 / 100 * _this6.marketp2pdragonprice;
        let marketp2pdragonprice_actual = _this6.marketp2pdragonprice - _this6.marketp2pdragonFee;
        _this6.fee_display = _this6.marketp2pdragonFee;
        _this6.price_display = marketp2pdragonprice_actual;
        _this6.storeFee = 11 / 100 * _this6.cartPrice;
        const alert = yield _this6.alertController.create({
          header: 'Success',
          message: 'Connected to Registered Wallet',
          buttons: ['OK']
        });
        yield alert.present();
        //if connect
      } else {
        yield _this6.provider.close();
        _this6.provider = null;
        _this6.connect = false;
        const alert = yield _this6.alertController.create({
          header: 'Failed!',
          message: 'Please Use Registered Wallet',
          buttons: ['OK']
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
      console.log(this.current_oragon);
    }, error => {});
  }
  payBackground() {
    var _this7 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        if (+(_this7.balanceBUSDPlayers * 1).toFixed(0) > +(_this7.priceBackground * 1).toFixed(0)) {
          let amountf = _this7.priceBackground;
          // console.log(amountf)
          yield _this7.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this7.wallet
          }).then(res => {
            // console.log(res);
            let crd = JSON.stringify({
              ItemId: _this7.marketp2pdragonID,
              Id: _this7.marketp2pdragonImg
            });
            _this7.current_data = JSON.parse(crd);
            // console.log(JSON.stringify(this.current_data));
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
              vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
            }).then(tokenPushNotification => {
              if (tokenPushNotification) {
                _this7.senddata.gettokenOwnermp(_this7.globalID).subscribe(dataToken => {
                  _this7.tokenNotif = JSON.parse(dataToken);
                  // Create Transaction History
                  _this7.senddata.settrxhistory(_this7.globalID,
                  //userid
                  _this7.marketp2pdragonDocId,
                  //itemid
                  _this7.priceBackground,
                  //amount
                  res.transactionHash,
                  //tx_hash
                  'busd-to-oragon',
                  //type
                  'Payout-Background',
                  //item
                  _this7.email,
                  //email
                  _this7.tokenNotif.tokenPushNotification //token
                  ).subscribe(data => {}, error => {});
                });
              } else {
                // console.log('No registration token available. Request permission to generate one.');
              }
            }).catch(err => {
              // console.log('An error occurred while retrieving token. ', err);
            });
            _this7.senddata.paybackgroundmp(_this7.globalID, _this7.marketp2pdragonDocId, _this7.marketp2pdragonImg, 'paid', 'res.transactionHash').subscribe(data => {
              // console.log(data)
            });
            _this7.senddata.addbackgroundmp(_this7.globalID, _this7.marketp2pdragonDocId, 'exists').subscribe(data => {
              // console.log(data)
            });
          }).catch(err => {});
          const alert = yield _this7.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK']
          });
          yield alert.present();
          _this7.connect = true;
          _this7.choosed = 0;
          _this7.senddata.getdgbackgroundmp(_this7.globalID).subscribe(dataSell => {
            _this7.dragonsowned = JSON.parse(dataSell);
            _this7.marketp2pdragonLength = _this7.dragonsowned.length;
            // console.log(this.dragonsowned)
          }, error => {});
          localStorage.removeItem('walletconnect');
        } else {
          const alert = yield _this7.alertController.create({
            header: 'Failed!',
            message: 'Your BUSD Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        let crd = JSON.stringify({
          ItemId: _this7.marketp2pdragonID,
          Id: _this7.marketp2pdragonImg
        });
        _this7.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this7.senddata.gettokenOwnermp(_this7.globalID).subscribe(dataToken => {
              _this7.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              _this7.senddata.settrxhistory(_this7.globalID,
              //userid
              _this7.marketp2pdragonDocId,
              //itemid
              _this7.priceBackground,
              //amount
              'res.transactionHash',
              //tx_hash
              'busd-to-oragon',
              //type
              'Payout-Background',
              //item
              _this7.email,
              //email
              _this7.tokenNotif.tokenPushNotification //token
              ).subscribe(data => {}, error => {});
            });
          } else {
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        _this7.senddata.paybackgroundmp(_this7.globalID, _this7.marketp2pdragonDocId, _this7.marketp2pdragonImg, 'paid', 'res.transactionHash').subscribe(data => {
          // console.log(data)
        });
        _this7.senddata.addbackgroundmp(_this7.globalID, _this7.marketp2pdragonDocId, 'exists').subscribe(data => {
          // console.log(data)
        });
        const alert = yield _this7.alertController.create({
          header: 'Success',
          message: 'Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        yield alert.present();
        _this7.connect = true;
        _this7.choosed = 0;
        _this7.senddata.getdgbackgroundmp(_this7.globalID).subscribe(dataSell => {
          _this7.dragonsowned = JSON.parse(dataSell);
          _this7.marketp2pdragonLength = _this7.dragonsowned.length;
          // console.log(this.dragonsowned)
        }, error => {});
      }
    })();
  }
  chooseDragon(kind, DocId, ItemId) {
    var _this8 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (kind == 1) {
        // MERU
        _this8.choosed = 1;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref2 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else if (kind == 2) {
        // RITRA
        _this8.choosed = 2;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref3 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else if (kind == 3) {
        // AKH
        _this8.choosed = 3;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref4 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else if (kind == 4) {
        // FENG
        _this8.choosed = 4;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref5 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x5) {
              return _ref5.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else if (kind == 5) {
        // METALICANA
        _this8.choosed = 5;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref6 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x6) {
              return _ref6.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else if (kind == 6) {
        // DORCH
        _this8.choosed = 6;
        localStorage.setItem('chooseddg', DocId);
        _this8.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe(data => {
          _this8.selected = JSON.parse(data);
          _this8.marketp2pdragonDocId = _this8.selected.DocId;
          _this8.marketp2pdragonID = _this8.selected.ItemId;
          _this8.marketp2pdragonAttack = _this8.selected.Attack;
          _this8.marketp2pdragonDefense = _this8.selected.Defense;
          _this8.marketp2pdragonLevel = _this8.selected.Level;
          _this8.marketp2pdragonRarity = _this8.selected.Rarity;
          _this8.marketp2pdragonBG = _this8.selected.imgBg;
          _this8.senddata.getbgdgUserownedmp(_this8.globalID, DocId).subscribe( /*#__PURE__*/function () {
            var _ref7 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this8.loadingController.create();
              yield loading.present();
              _this8.dragonsowned = JSON.parse(dataSell);
              _this8.dragonsownedDocId = _this8.dragonsowned.DocumentId;
              _this8.dragonsownedID = ItemId;
              _this8.dragonsownedAttack = _this8.dragonsowned.Attack;
              _this8.dragonsownedDefense = _this8.dragonsowned.Defense;
              _this8.dragonsownedLevel = _this8.dragonsowned.Level;
              _this8.dragonsownedRarity = _this8.dragonsowned.Rarity;
              _this8.dragonsownedBG = _this8.dragonsowned.imgBg;
              let priceBackground = _this8.current_bnb * 2;
              _this8.priceBackground = priceBackground.toFixed(2);
              // console.log(this.dragonsowned)
              if (_this8.dragonsowned[0].imgbackground == 'exists') {
                _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                  _this8.dragonsownedbg = JSON.parse(dataSell);
                  _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                }, error => {});
              }
              loading.dismiss();
            });
            return function (_x7) {
              return _ref7.apply(this, arguments);
            };
          }(), error => {});
        });
        _this8.senddata.getitemhistory(DocId).subscribe(datahistory => {
          _this8.historyremark = datahistory;
        });
        _this8.senddata.getdgbackgroundmp(_this8.globalID).subscribe(dataSell => {
          _this8.dragonsAllowned = JSON.parse(dataSell);
        }, error => {});
      } else {
        _this8.choosed = 0;
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
  openDialog(msg) {}
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
}, (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__.Storage
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.Firestore
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_10__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_7__.SendData
}]), _class);
BackgroundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: 'app-background',
  template: _background_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_background_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], BackgroundPage);


/***/ }),

/***/ 20768:
/*!************************************************************!*\
  !*** ./src/app/background/background.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: auto;\n  height: 470px;\n  border-radius: 3%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/background/background.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AACF","sourcesContent":["ion-avatar {\n  width: 128px;\n  height: 128px;\n}\n \n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n \n.fallback {\n  width: auto;\n  height: 470px;\n  border-radius: 3%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27873:
/*!************************************************************!*\
  !*** ./src/app/background/background.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\n  <!-- Header -->\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\n      <!-- Logo -->\n      <a color=\"dark\" href=\"/tabs/home\">\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a>\n      <!-- Desktop Menu Actions -->\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\n          <!-- Mobile Logo / Menu Close -->\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\n            <!-- Mobile Logo -->\n            <a color=\"dark\" href=\"/tabs/home\">\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n            </a>\n          </div>\n          <!-- Primary Nav -->\n          <nav class=\"navbar w-full\">\n            <ul class=\"flex flex-col lg:flex-row\">\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/home\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\n                  <li>\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\n                    </a>\n                  </li>\n                  <!-- <li>\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\n                    </a>\n                  </li> -->\n                </ul>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- Mobile Connect Wallet / Socials -->\n          <!-- Actions -->\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\n            <!-- hatching -->\n            <!-- <button class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\n            </button> -->\n\n            <!-- cart -->\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <g>\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n                </g>\n              </svg>\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n            </button>\n            \n            <!-- Profile -->\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n                <ion-icon name=\"log-in-outline\"></ion-icon>\n              </button>\n            </div>\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n                </svg>\n              </button>\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                  </svg>\n                </button>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                  <div class=\"flex items-center mb-3\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                  </div>\n                </div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                  <div>\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                    <div class=\"flex items-center mt-2\">\n                      <!-- Default Progressbar with 50 percent -->\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                    </div>\n                  </div>\n                </div>\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n                </a>\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Mobile Menu Actions -->\n        <div class=\"ml-auto flex lg:hidden\">\n          <!-- hatching -->\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\n          </button> -->\n\n          <!-- cart -->\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <g>\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n              </g>\n            </svg>\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n          </button>\n          \n          <!-- Profile -->            \n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </button>\n          </div>\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n              </svg>\n            </button>\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                </svg>\n              </button>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                <div class=\"flex items-center mb-3\">\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f0b90b\">\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                </div>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                <div>\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                  <div class=\"flex items-center mt-2\">\n                    <!-- Default Progressbar with 50 percent -->\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                  </div>\n                </div>\n              </div>\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n              </a>\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n              </a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </header>\n\n  <!-- Create -->\n    <section class=\"relative py-24\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"assets/img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"container\">\n        <h1 class=\"font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white\">Background</h1>\n        <div class=\"mx-auto max-w-[48.125rem]\">\n          <!-- File Upload -->\n          <!-- Collection -->\n          <div class=\"relative\">\n            <div>\n              <label class=\"font-display text-jacarta-700 mb-2 block dark:text-white\">Choose Dragon</label>\n              <div class=\"mb-3 flex items-center space-x-2\">\n                <p class=\"dark:text-jacarta-300 text-2xs\"> Make sure you already have a dragon to use this feature. <span class=\"inline-block\" data-tippy-content=\"This is a feature to add a background in your dragon, where you will get royalties from the background.\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                      <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z\"></path>\n                    </svg>\n                  </span>\n                </p>\n              </div>\n            </div>\n            <div class=\"dropdown my-1 cursor-pointer\">\n              <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-jacarta-300 flex items-center justify-between rounded-lg border bg-white py-3 px-3\" role=\"button\" id=\"item-collection\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                <span class=\"\">Select your dragon</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                </svg>\n              </div>\n              <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-collection\">\n                <ul *ngFor=\"let d of dragonsAllowned\" class=\"scrollbar-custom flex max-h-48 flex-col overflow-y-auto\">\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM1'\">\n                      <a (click)=\"chooseDragon(1, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/MERU.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM11'\">\n                      <a (click)=\"chooseDragon(2, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/RITRA.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM9'\">\n                      <a (click)=\"chooseDragon(3, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/AKH.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM10'\">\n                      <a (click)=\"chooseDragon(4, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/FENG.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM13'\">\n                      <a (click)=\"chooseDragon(5, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/METALICANA.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"d.ItemId == 'ITM12'\">\n                      <a (click)=\"chooseDragon(6, d.DocId, d.ItemId)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                        <span class=\"flex items-center space-x-3\">\n                          <img src=\"assets/img/dragons/DORCH.gif\" class=\"h-8 w-8 rounded-full\" loading=\"lazy\" alt=\"avatar\" />\n                          <span class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">{{d.DocId}}</span>\n                          <span class=\"text-jacarta-700 dark:text-white\">LVL {{d.Level}}</span>\n                        </span>\n                      </a>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <br>\n          <!-- Selected Dragon -->\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 1\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                      <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                    <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                      <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                    <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                      <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                    <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                      <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                    <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                      <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                    <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                      <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">MERU #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 2\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                      <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">RITRA #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 3\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                      <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">AKH #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 4\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                      <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">FENG #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 5\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                      <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">METALICANA #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-6\" *ngIf=\"choosed == 6\">\n            <div *ngFor=\"let datas of dragonsowned\">\n              <article>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                  <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                    <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                      <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                      <span>\n                        <img *ngIf=\"datas.imgbackground != null\" src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                            </svg>\n                          </span>\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                          <ng-template #favorited>\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                          </ng-template>\n                        </div>\n                      </span>\n                    </div>\n                  </figure>\n                  <div class=\"mt-7 flex items-center justify-between\">\n                    <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\n                    <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                      <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                        <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                      </a>\n                      <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                        <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                        <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                          </div>\n                        </div>\n                        <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                          <div class=\"mb-2 flex items-center justify-between\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </article>\n            </div>\n            <!-- Details -->\n            <div class=\"md:basis-auto md:pl-8 lg:pl-[3.75rem]\" style=\"padding-left: 17px;\">\n              <!-- Collection / Likes / Actions -->\n              <div class=\"mb-3 flex\">\n                <!-- Collection -->\n                <div class=\"flex items-center\">\n                  <a [routerLink]=\"['/tabs/background']\" class=\"text-accent mr-2 text-sm font-bold\">Owned</a>\n                </div>\n              </div>\n              <h1 class=\"font-display text-jacarta-700 mb-4 text-4xl font-semibold dark:text-white\">DORCH #{{marketp2pdragonDocId}}</h1>\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\n                <div class=\"flex items-center\">\n                  <span class=\"text-green text-sm font-medium tracking-tight\">STATS</span>\n                </div>\n              </div>\n              <p class=\"dark:text-jacarta-300 mb-10\"> Level: {{marketp2pdragonLevel}} <br> Attack Point: {{marketp2pdragonAttack}} <br> Deffense Point: {{marketp2pdragonDefense}} <br> Rarity: {{marketp2pdragonRarity}} </p>\n              <!-- Creator / Owner -->\n              <div class=\"mb-8 flex flex-wrap\">\n                <div class=\"mr-8 mb-4\">\n                  <div class=\"justify-center\">\n                    <span class=\"text-jacarta-400 block text-sm dark:text-white\">\n                      Background royalties: <strong>10%</strong>\n                    </span>\n                  </div>\n                </div>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Recommended resolution <strong>540 x 670 px</strong></p>\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Maximum file size <strong>3072 Kb</strong></p>\n              </div>\n              <div class=\"mb-6\">\n                <p class=\"dark:text-jacarta-300 text-2xs mb-3\">Insert your background</p>\n                <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-6 px-5 text-center\">\n                  <div class=\"relative z-10 cursor-pointer\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 mb-4 inline-block dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z\" />\n                    </svg>\n                    <p class=\"dark:text-jacarta-300 mx-auto max-w-xs text-xs\"> JPG, PNG, GIF & Recommended Size 540 x 670 px </p>\n                  </div>\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100\"></div>\n                  <input type=\"file\" (change)=\"onSelectFile($event, marketp2pdragonDocId, dragonsownedID)\" id=\"file-upload\" class=\"absolute inset-0 z-20 cursor-pointer opacity-0\">\n                </div>\n              </div>\n            </div>\n            <!-- end details -->\n          </div>\n          <!-- end selected dragon -->\n          <!-- Price -->\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4\">\n            <div class=\"mb-2 sm:flex sm:flex-wrap\">\n              <!-- Price -->\n              <div class=\"sm:w-1/2 sm:pr-4 lg:pr-8\">\n                <div class=\"block overflow-hidden text-ellipsis whitespace-nowrap\">\n                  <span class=\"dark:text-jacarta-300 text-jacarta-400 text-sm\">Price</span>\n                </div>\n                <div class=\"mt-3 flex\">\n                  <div>\n                    <div class=\"flex items-center whitespace-nowrap\">\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"h-5 w-5\">\n                          <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\n                          <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\n                          <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\n                          <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\n                          <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\n                        </svg>\n                      </span>\n                      <span class=\"text-green text-lg font-medium leading-tight tracking-tight\">{{priceBackground}} BUSD</span>\n                    </div>\n                    <span class=\"dark:text-jacarta-300 text-jacarta-400 text-sm\" style=\"text-decoration: line-through;\">~$15 BUSD</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- end price -->\n          <br>\n          <!-- Disclaimer -->\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-8\">\n            <div class=\"mb-8 sm:flex sm:flex-wrap\">\n              <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Disclaimer</span>\n            </div>\n            <p>1. the background must not contain SARA, pornography, and copyright infringement</p>\n            <p>2. If you violate existing regulations, there will be no refund</p>\n            <p>3. Please re-read the EULA & Privacy Policy</p>\n            <br>\n            <a *ngIf=\"connect == false && choosed > 0\" (click)=\"connectAccount()\" data-bs-toggle=\"modal\" data-bs-target=\"#placeBidModal\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Connect Wallet</a>\n            <a *ngIf=\"connect == true && choosed > 0\" (click)=\"payBackground()\" data-bs-toggle=\"modal\" data-bs-target=\"#placeBidModal\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Pay to Apply Background</a>\n          </div>\n          <!-- end disclaimer -->\n          <br>\n          <!-- Activity -->\n          <div *ngIf=\"connect == false && choosed > 0\" class=\"tab-pane fade\" id=\"activity\" role=\"tabpanel\" aria-labelledby=\"activity-tab\">\n            <!-- Filter -->\n            <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5\">History </div>\n            <div role=\"table\" class=\"scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white\">\n              <div class=\"dark:bg-jacarta-600 bg-light-base sticky top-0 flex\" role=\"row\">\n                <div class=\"w-[17%] py-2 px-4\" role=\"columnheader\">\n                  <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">ID</span>\n                </div>\n                <div class=\"w-[17%] py-2 px-4\" role=\"columnheader\">\n                  <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Item</span>\n                </div>\n                <div class=\"w-[22%] py-2 px-4\" role=\"columnheader\">\n                  <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">From</span>\n                </div>\n                <div class=\"w-[22%] py-2 px-4\" role=\"columnheader\">\n                  <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Remark</span>\n                </div>\n                <div class=\"w-[22%] py-2 px-4\" role=\"columnheader\">\n                  <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date Created</span>\n                </div>\n              </div>\n              <div class=\"flex\" role=\"row\" *ngFor=\"let h of historyremark\">\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">{{h.id}}</div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">{{h.itemid.substr(0,15)}}...</div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4\" role=\"cell\">\n                  <a href=\"user.html\" class=\"text-accent\">{{h.userid.substr(0,15)}}...</a>\n                </div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4\" role=\"cell\">\n                  <a href=\"user.html\" class=\"text-accent\">{{h.remark}}</a>\n                </div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4\" role=\"cell\">\n                  <a href=\"#\" class=\"text-accent flex flex-wrap items-center\" target=\"_blank\" rel=\"nofollow noopener\" title=\"Opens in a new window\" data-tippy-content=\"March 13 2022, 2:32 pm\">\n                    <span class=\"mr-1\">{{h.date | date}}...</span>\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 fill-current\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z\" />\n                    </svg>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  <!-- end create -->\n\n  <!-- Footer -->\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\n    <div class=\"container\">\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\n        <div class=\"col-span-3 md:col-span-4\">\n          <!-- Logo -->\n          <a href=\"#\" class=\"mb-6 inline-block\">\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n          </a>\n          <p class=\"dark:text-jacarta-300 mb-12\">\n            Create, sell and collect truly rare digital artworks. Powered by blockchain technology.\n          </p>\n          <!-- Socials -->\n          <div class=\"flex space-x-5\">\n            <!-- <a href=\"#\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"facebook\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\n                ></path>\n              </svg>\n            </a> -->\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"twitter\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"discord\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 640 512\"\n              >\n                <path\n                  d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"instagram\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 448 512\"\n              >\n                <path\n                  d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"youtube\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 20 20\"\n              >\n                <path\n                  d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"\n                ></path>\n              </svg>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\n        <span class=\"dark:text-jacarta-400 text-sm\"\n          >&copy;\n          <script>\n            document.write(new Date().getFullYear())\n          </script>\n          Copyright OragonX All Rights Reserved By\n          <a href=\"https://oragonbsc.io\" class=\"hover:text-accent\">OragonX</a></span\n        >\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\n          <li>\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\n          </li>\n          <li><a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n  <!-- end footer -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_background_background_module_ts.js.map