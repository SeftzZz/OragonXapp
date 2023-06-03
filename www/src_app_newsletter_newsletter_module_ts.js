(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newsletter_newsletter_module_ts"],{

/***/ 84629:
/*!*********************************************************!*\
  !*** ./src/app/newsletter/newsletter-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterPageRoutingModule": () => (/* binding */ NewsletterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _newsletter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter.page */ 82914);




const routes = [{
  path: '',
  component: _newsletter_page__WEBPACK_IMPORTED_MODULE_0__.NewsletterPage
}];
let NewsletterPageRoutingModule = class NewsletterPageRoutingModule {};
NewsletterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NewsletterPageRoutingModule);


/***/ }),

/***/ 57854:
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterPageModule": () => (/* binding */ NewsletterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-routing.module */ 84629);
/* harmony import */ var _newsletter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter.page */ 82914);







let NewsletterPageModule = class NewsletterPageModule {};
NewsletterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsletterPageRoutingModule],
  declarations: [_newsletter_page__WEBPACK_IMPORTED_MODULE_1__.NewsletterPage]
})], NewsletterPageModule);


/***/ }),

/***/ 82914:
/*!***********************************************!*\
  !*** ./src/app/newsletter/newsletter.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterPage": () => (/* binding */ NewsletterPage)
/* harmony export */ });
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _newsletter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter.page.html?ngResource */ 48593);
/* harmony import */ var _newsletter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter.page.scss?ngResource */ 14766);
/* harmony import */ var _newsletter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 64413);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/messaging */ 6157);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_5__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_5__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade]);

const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);


// AngularFire




// Services




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

let NewsletterPage = (_class = class NewsletterPage {
  constructor(authService, router, loadingController, alertController, toastCtrl, fs, http, global, senddata, auth, swPush) {
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "auth", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "swPush", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "slides", void 0);
    // Root Object
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", '');
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "percentRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "valueRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isLogin", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ritra", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "akh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "meru", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "feng", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "metalicana", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dorch", void 0);
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
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latestoneOragon", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceORGNPlayers", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBNBPlayers", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "balanceBUSDPlayers", void 0);
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
    // Store 
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
    // P2P Market
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaLowest", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atoz", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonOID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonAttack", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDefense", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLevel", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRarity", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonExp", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImgBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonfavorited", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonOID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonAttack", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonDefense", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonLevel", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonRarity", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonExp", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontype", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonbidder", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragontime", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragontimeCount", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonpriceNow", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBIDfavorited", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pBIDdragonImgBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hours", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutes", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "seconds", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price_actual", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bid_now", false);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "bidlist", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdown", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_royalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceRoyalty_display", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "positionRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty2", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty3", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty4", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty5", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty6", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_1", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_2", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_3", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_4", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pos_5", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5a", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5b", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5d", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_5e", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4a", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4b", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_4c", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_3a", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_3b", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_2a", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totaroyalty_1a", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "title", 'af-notification');
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "message", null);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "VAPID_PUBLIC_KEY", "BH6Pwg4y3wc38Ia1gQnr3mnhAU_StteRTEEIUAFoK14Ux_ci9ALK6RX76kSAUxQzC4FUJ0f6b9Ts-96xpK_I2NE");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistoryall", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataNotif", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notificationBid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemtrx", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "idtrxhistory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistorybyid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sessionTrxHistory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "itemid2", void 0);
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
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
  }
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      console.log(sub);
    });
  }
  setSwiperInstance(swiper) {
    this.slides = swiper;
  }
  logout() {
    var _this = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.logout();
      window.location.replace('/tabs/home');
    })();
  }
  login() {
    var _this2 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this2.router.navigateByUrl('/tabs/login', {
        replaceUrl: true
      });
    })();
  }
  doRefresh(event) {}
  ngOnInit() {
    var _this3 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const loading = await this.loadingController.create();
      // await loading.present();
      _this3.listen();
      _this3.setCurrentLocation();
      _this3.getstoredata();
      _this3.currentp2p = 0;
      _this3.senddata.getselldglimitmp().subscribe(dataSell => {
        _this3.dragons = dataSell;
        // this.marketp2pdragonLength = dataSell.length;
        for (let i in _this3.dragons) {
          if (_this3.dragons[i].imgbackground == 'exists') {
            _this3.senddata.getallbackgroundsellmp(_this3.dragons[i].ItemId).subscribe(dataBackground => {
              _this3.dragonsownedbg = JSON.parse(dataBackground);
              _this3.marketp2pdragonBG = _this3.dragonsownedbg.imgbackground;
              // console.log(this.dragonsownedbg)
            }, error => {});
          }
        }
      }, error => {});
      _this3.connect = false;
      _this3.stateHash = true;
      _this3.state_buy = 2;
      _this3.status_direct_buy = 2;
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
      _this3.senddata.getcurrentbnb().subscribe(data => {
        _this3.current_bnb = data.data.price_BNB;
        // console.log(this.current_bnb)
      }, error => {});
      _this3.isLogin = localStorage.getItem('isLogin');
      _this3.localStorage = localStorage.getItem('ProfileData');
      _this3.parse_localStorage = JSON.parse(_this3.localStorage);
      if (_this3.localStorage == undefined) {
        _this3.isLogin = '!';
      } else {
        _this3.isLogin = '';
        _this3.wallets = _this3.parse_localStorage.WalletAddress;
        _this3.username = _this3.parse_localStorage.PlayerName;
        _this3.globalID = _this3.parse_localStorage.Uid;
        _this3.email = _this3.parse_localStorage.Email;
        _this3.senddata.balancePlayers(_this3.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this3.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log(this.balanceORGNPlayers);
        }, error => {});
        _this3.senddata.balanceBNBPlayers(_this3.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this3.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log(this.balanceBNBPlayers);
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
          _this3.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log(this.balanceBUSDPlayers);
        }, error => {});
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_9__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_9__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            _this3.senddata.postNotificationBidmp(_this3.globalID, tokenPushNotification).subscribe(data => {
              localStorage.setItem("token", tokenPushNotification);
              console.log("save token", tokenPushNotification);
            });
            console.log("Hurraaa!!! we got the token.....");
            console.log(tokenPushNotification);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
        _this3.notificationBid = setInterval( /*#__PURE__*/(0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this3.checknotificationBid();
          _this3.getstorecart();
        }), 3000);
      }
      // console.log(this.globalID);
      _this3.senddata.gettrxhistoryall().subscribe(dataSell => {
        let trxhistoryall = dataSell;
        _this3.trxhistoryall = trxhistoryall;
        _this3.sessionTrxHistory = 0;
        for (let i in _this3.trxhistoryall) {
          _this3.itemtrx = JSON.parse(_this3.trxhistoryall[i].item);
          console.log("itemtrx: ", _this3.itemtrx);
        }
      }, error => {});
      _this3.getEggCount();
      // await loading.dismiss();
    })();
  }

  listen() {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_9__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_9__.onMessage)(messaging, payload => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
  checknotificationBid() {
    var _this4 = this;
    this.senddata.getNotificationBidmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this4.dataNotif = JSON.parse(dataNotif);
        for (let i in _this4.dataNotif) {
          console.log("dataNotif", _this4.dataNotif[i].idBid);
          const toast2 = yield _this4.toastCtrl.create({
            header: 'You have notifications',
            message: _this4.dataNotif[i].username + ' has place bid in ' + _this4.dataNotif[i].priceBid + ' BNB',
            icon: 'information-circle',
            position: 'top',
            color: 'success',
            buttons: [{
              text: 'Close',
              role: 'cancel',
              handler: () => {
                _this4.senddata.readNotificationBidmp(_this4.dataNotif[i].idBid).subscribe( /*#__PURE__*/function () {
                  var _ref3 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
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
          _this4.senddata.getNotificationBidmp(_this4.globalID);
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
  getEggCount() {
    this.fs.collection("Roulette").doc("Oragon").valueChanges().subscribe(datas => {
      //console.log(datas.Count);
      this.ritra = datas.Ritra;
      this.feng = datas.Feng;
      this.meru = datas.Meru;
      this.metalicana = datas.Metalicana;
      this.akh = datas.Akh;
      this.dorch = datas.Dorch;
      //this.slot_roulette = test
      //console.log(this.slot_roulette);
    });
  }

  trxhistoryid(id) {
    var _this5 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingController.create();
      yield loading.present();
      _this5.senddata.gettrxhistoryid(id).subscribe(dataSell => {
        _this5.trxhistorybyid = dataSell;
        _this5.sessionTrxHistory = 1;
        for (let i in _this5.trxhistorybyid) {
          _this5.idtrxhistory = JSON.parse(_this5.trxhistorybyid[i].id);
          _this5.itemid = JSON.parse(_this5.trxhistorybyid[i].item);
          _this5.itemid2 = _this5.itemid.ItemId;
          console.log("itemid2", _this5.itemid2);
        }
      }, error => {});
      loading.dismiss();
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
  // Market P2P
  addItemRoulette(uid, kind, txhash) {
    //this.getcountRolling();
    if (kind == '10') {
      this.fs.collection('Roulette').doc(uid).update({
        Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          CreatedAt: this.newTime(),
          Count: 10,
          txHash: txhash
        }))
      }).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection('Roulette').doc(uid).update({
          Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.increment(10)
        });
        this.openDialog("Transaction Success, 10 Roulette Added");
      }).catch(error => {
        // The document probably doesn't exist.
        this.fs.collection('Roulette').doc(uid).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection('Roulette').doc(uid).update({
          Count: 10
        });
        this.fs.collection('Roulette').doc(uid).update({
          Used: 0
        });
        this.fs.collection('Roulette').doc(uid).update({
          Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
            CreatedAt: this.newTime(),
            Count: 10,
            txHash: txhash
          }))
        });
        this.openDialog("Transaction Success, 10 Roulette Added");
      });
    } else if (kind == '1') {
      this.fs.collection('Roulette').doc(uid).update({
        Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          CreatedAt: this.newTime(),
          Count: 1,
          txHash: txhash
        }))
      }).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection('Roulette').doc(uid).update({
          Count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.increment(1)
        });
        this.openDialog("Transaction Success, 1 Roulette Added");
      }).catch(error => {
        // The document probably doesn't exist.
        this.fs.collection('Roulette').doc(uid).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection('Roulette').doc(uid).update({
          Count: 1
        });
        this.fs.collection('Roulette').doc(uid).update({
          Used: 0
        });
        this.fs.collection('Roulette').doc(uid).update({
          Detail: firebase_compat_app__WEBPACK_IMPORTED_MODULE_8__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
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
    this.fs.collection('Payment').doc(this.globalID).valueChanges().subscribe(datas => {
      // console.log(datas.Gacha1);
      if (datas != undefined) {
        if (this.kind == '10') {
          if (datas.Gacha10 > 0) {
            this.payment_count = datas.Gacha10;
            this.state_buy == "2";
          }
        } else if (this.kind == '1') {
          if (datas.Gacha1 > 0) {
            this.payment_count = datas.Gacha1;
            this.state_buy == "2";
          }
        }
        if (datas.Gacha10 < 0) {
          this.fs.collection('Payment').doc(this.globalID).update({
            Gacha10: 0
          });
        }
        if (datas.Gacha1 < 0) {
          this.fs.collection('Payment').doc(this.globalID).update({
            Gacha1: 0
          });
        }
      } else {
        this.fs.collection('Payment').doc(this.globalID).set({
          LastUpdated: this.newTime()
        });
        this.fs.collection('Payment').doc(this.globalID).update({
          Gacha10: 0,
          Gacha1: 0
        }).then(() => {});
      }
      //this.slot_roulette = test
      // console.log(datas);
    });
  }

  getcurrentoragon() {
    this.senddata.getcurrentoragon2().subscribe(data => {
      this.current_oragon = data.data.price;
      this.in_oragon_100c = (100 / this.current_oragon).toFixed(14);
      this.in_oragon_12c = (12 / this.current_oragon).toFixed(14);
      //console.log(this.current_oragon)
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
            this.marketp2pdragonRarity = this.dragonDetail.Rarity;
            this.marketp2pdragonExp = this.dragonDetail.Exp;
            this.marketp2pdragonowner = this.dragonDetail.uid;
            this.marketp2pdragonprice = this.dragonDetail.price;
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
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
          this.senddata.getselldgidBIDmp(ItemId).subscribe(dataDetail => {
            this.dragonDetail = JSON.parse(dataDetail);
            this.marketp2pBIDdragonOID = this.dragonDetail.ObjectId;
            this.marketp2pBIDdragonID = this.dragonDetail.ItemId;
            this.marketp2pBIDdragonImg = this.dragonDetail.Id;
            this.marketp2pBIDdragonAttack = this.dragonDetail.Attack;
            this.marketp2pBIDdragonDefense = this.dragonDetail.Defense;
            this.marketp2pBIDdragonLevel = this.dragonDetail.Level;
            this.marketp2pBIDdragonHP = this.dragonDetail.HP;
            this.marketp2pBIDdragonRarity = this.dragonDetail.Rarity;
            this.marketp2pBIDdragonExp = this.dragonDetail.Exp;
            this.marketp2pBIDdragonowner = this.dragonDetail.owner;
            this.marketp2pBIDdragonprice = this.dragonDetail.price;
            this.marketp2pBIDdragontype = this.dragonDetail.Type;
            this.marketp2pBIDdragonpriceNow = this.dragonDetail.PriceNow;
            this.marketp2pBIDdragonbidder = this.dragonDetail.BidList;
            this.marketp2pBIDdragontime = this.dragonDetail.CreatedAt;
            this.marketp2pdragonBIDfavorited = this.dragonDetail.favorited;
            this.marketp2pBIDdragonBG = this.dragonDetail.imgbackground;
            this.marketp2pBIDdragonImgBG = this.dragonDetail.imgBg;
            let marketp2pdragonpriceUSD = this.marketp2pBIDdragonpriceNow / this.current_bnb;
            this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
            console.log(this.dragonDetail);
          }, error => {});
        }
        console.log(tabs);
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
            this.marketp2pdragonRarity = this.dragonDetail.Rarity;
            this.marketp2pdragonExp = this.dragonDetail.Exp;
            this.marketp2pdragonowner = this.dragonDetail.uid;
            this.marketp2pdragonprice = this.dragonDetail.price;
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
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
          this.senddata.getselldgidBIDmp(ItemId).subscribe(dataDetail => {
            this.dragonDetail = JSON.parse(dataDetail);
            this.marketp2pBIDdragonOID = this.dragonDetail.ObjectId;
            this.marketp2pBIDdragonID = this.dragonDetail.ItemId;
            this.marketp2pBIDdragonImg = this.dragonDetail.Id;
            this.marketp2pBIDdragonAttack = this.dragonDetail.Attack;
            this.marketp2pBIDdragonDefense = this.dragonDetail.Defense;
            this.marketp2pBIDdragonLevel = this.dragonDetail.Level;
            this.marketp2pBIDdragonHP = this.dragonDetail.HP;
            this.marketp2pBIDdragonRarity = this.dragonDetail.Rarity;
            this.marketp2pBIDdragonExp = this.dragonDetail.Exp;
            this.marketp2pBIDdragonowner = this.dragonDetail.owner;
            this.marketp2pBIDdragonprice = this.dragonDetail.price;
            this.marketp2pBIDdragontype = this.dragonDetail.Type;
            this.marketp2pBIDdragonpriceNow = this.dragonDetail.PriceNow;
            this.marketp2pBIDdragonbidder = this.dragonDetail.BidList;
            this.marketp2pBIDdragontime = this.dragonDetail.CreatedAt;
            this.marketp2pdragonBIDfavorited = this.dragonDetail.favorited;
            this.marketp2pBIDdragonBG = this.dragonDetail.imgbackground;
            this.marketp2pBIDdragonImgBG = this.dragonDetail.imgBg;
            let marketp2pdragonpriceUSD = this.marketp2pBIDdragonpriceNow / this.current_bnb;
            this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
            console.log(this.dragonDetail);
          }, error => {});
        }
        console.log(tabs);
      }
    }
  }
  checkitemscreated() {
    this.fs.collection('Items').doc(this.globalID).valueChanges().subscribe(datas => {
      //console.log(datas.Count);
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
  setdgbuycart() {}
  favorite_item(DocId) {
    var _this6 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this6.loadingController.create();
      yield loading.present();
      _this6.senddata.favoritedmp(_this6.globalID, DocId).subscribe( /*#__PURE__*/function () {
        var _ref4 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this6.senddata.getselldglimitmp().subscribe(dataSell => {
            _this6.dragons = dataSell;
            // this.marketp2pdragonLength = dataSell.length;
            for (let i in _this6.dragons) {
              if (_this6.dragons[i].imgbackground == 'exists') {
                _this6.senddata.getallbackgroundsellmp(_this6.dragons[i].DocId).subscribe(dataBackground => {
                  _this6.dragonsownedbg = JSON.parse(dataBackground);
                  _this6.marketp2pdragonBG = _this6.dragonsownedbg.imgbackground;
                  // console.log(this.dragonsownedbg)
                }, error => {});
              }
            }
          }, error => {});
          loading.dismiss();
        });
        return function (_x3) {
          return _ref4.apply(this, arguments);
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
      let storePriceBNB = this.current_bnb * this.storePrice;
      this.storePriceBNB = storePriceBNB.toFixed(2);
      this.storeImg = this.storedetail.gambar;
      console.log(this.storeID);
    }, error => {});
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
        this.cartDeskripsi = this.storecart[i].deskripsi;
        this.cartPrice = this.storecart[i].harga;
        this.cartQty = this.storecart[i].qty_cart;
        let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
        this.cartPriceBNB = cartPriceBNB.toFixed(2);
        this.cartImg = this.storecart[i].gambar;
      }
    }, error => {});
  }
  setstorecart(id_product, user_uid, addressw) {
    var _this7 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.isLogin == '!') {
        const alert = yield _this7.alertController.create({
          header: 'Caution',
          message: 'Please login for add to cart',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        const loading = yield _this7.loadingController.create();
        yield loading.present();
        _this7.senddata.setstorecart(id_product, user_uid, addressw).subscribe(data => {
          let setstorecart = data;
          console.log(setstorecart);
        }, error => {});
        loading.dismiss();
        const alert = yield _this7.alertController.create({
          header: 'Success',
          message: 'Items already added to your cart',
          buttons: ['OK']
        });
        yield alert.present();
        _this7.stateHash = true;
        _this7.state_buy = 2;
      }
    })();
  }
  updatestorecart(id_cart, user_uid, addressw, transactionHash) {
    var _this8 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this8.loadingController.create();
      yield loading.present();
      _this8.senddata.updatestorecart(id_cart, user_uid, addressw, transactionHash).subscribe(data => {
        let updatestorecart = data;
        console.log(updatestorecart);
      }, error => {});
      loading.dismiss();
    })();
  }
  addAkh() {
    var DocIdAkh = this.newTime() + 1;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdAkh, 'ITM4', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Akh", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdAkh).set({
      ItemId: "ITM4",
      DocId: 'EGG' + DocIdAkh
    }).then(() => {});
  }
  addMeru() {
    var DocIdMeru = this.newTime() + 2;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMeru, 'ITM2', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Meru", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdMeru).set({
      ItemId: "ITM2",
      DocId: 'EGG' + DocIdMeru
    }).then(() => {});
  }
  addRitra() {
    var DocIdRitra = this.newTime() + 3;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdRitra, 'ITM6', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Ritra", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdRitra).set({
      ItemId: "ITM6",
      DocId: 'EGG' + DocIdRitra
    }).then(() => {});
  }
  addFeng() {
    var DocIdFeng = this.newTime() + 4;
    this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdFeng, 'ITM5', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Feng", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Eggs').doc('EGG' + DocIdFeng).set({
      ItemId: "ITM5",
      DocId: 'EGG' + DocIdFeng
    }).then(() => {});
  }
  addBattery8() {
    var DocIdBattery8 = this.newTime() + 4;
    this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery8, 'ITM3', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Green Battery", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery8).set({
      ItemId: "ITM3",
      DocId: 'BTR' + DocIdBattery8
    }).then(() => {});
  }
  addBattery12() {
    var DocIdBattery12 = this.newTime() + 5;
    this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery12, 'ITM3', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Blue Battery", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery12).set({
      ItemId: "ITM3",
      DocId: 'BTR' + DocIdBattery12
    }).then(() => {});
  }
  addBattery24() {
    var DocIdBattery24 = this.newTime() + 6;
    this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery24, 'ITM3', 'Items', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add Red Battery", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Batteries').doc('BTR' + DocIdBattery24).set({
      ItemId: "ITM3",
      DocId: 'BTR' + DocIdBattery24
    }).then(() => {});
  }
  addFood() {
    var DocIdFoods30 = this.newTime() + 1;
    this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods30, 'ITM14', 'Items', '30', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add 30 Food", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods30).set({
      ItemId: "ITM14",
      Count: 30,
      Used: 0,
      DocId: 'FOOD' + DocIdFoods30
    }).then(() => {});
  }
  addFood20() {
    var DocIdFoods20 = this.newTime() + 1;
    this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods20, 'ITM14', 'Items', '20', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add 20 Food", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods20).set({
      ItemId: "ITM14",
      Count: 20,
      Used: 0,
      DocId: 'FOOD' + DocIdFoods20
    }).then(() => {});
  }
  addFood10() {
    var DocIdFoods10 = this.newTime() + 1;
    this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods10, 'ITM14', 'Items', '10', JSON.stringify({
      uid: this.globalID
    })).subscribe(dataDump => {
      console.log("add 10 Food", dataDump);
    });
    this.fs.collection('Items/' + this.globalID + '/Foods').doc('FOOD' + DocIdFoods10).set({
      ItemId: "ITM14",
      Count: 10,
      Used: 0,
      DocId: 'FOOD' + DocIdFoods10
    }).then(() => {});
  }
  openDialog(msg) {}
  alertWithdraw() {
    var _this9 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header: 'Congratulation !',
        message: 'Now you can Withdraw, check your profile.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
}, (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_11__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_7__.SendData
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__.Auth
}, {
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.SwPush
}]), _class);
NewsletterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: 'app-newsletter',
  template: _newsletter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewEncapsulation.None,
  styles: [(_newsletter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], NewsletterPage);


/***/ }),

/***/ 14766:
/*!************************************************************!*\
  !*** ./src/app/newsletter/newsletter.page.scss?ngResource ***!
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

/***/ 48593:
/*!************************************************************!*\
  !*** ./src/app/newsletter/newsletter.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\n  <!-- Header -->\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\n      <!-- Logo -->\n      <a color=\"dark\" href=\"/tabs/home\">\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a>\n      <!-- Desktop Menu Actions -->\n      <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\n        <!-- Mobile Logo / Menu Close -->\n        <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\n          <!-- Mobile Logo -->\n          <a color=\"dark\" href=\"/tabs/home\">\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n          </a>\n        </div>\n        <!-- Primary Nav -->\n        <nav class=\"navbar w-full\">\n          <ul class=\"flex flex-col lg:flex-row\">\n            <li class=\"js-nav-dropdown group relative\">\n              <a [routerLink]=\"['/tabs/home']\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                  </svg>\n                </i>\n              </a>\n            </li>\n            <!-- new menu -->\n            <li class=\"js-nav-dropdown group relative\">\n              <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-1\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Activity <i class=\"lg:hidden\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                  </svg>\n                </i>\n              </a>\n              <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-1\">\n                <li>\n                  <a [routerLink]=\"['/tabs/rankings']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-accent text-sm\">Rankings</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/tabs/recently-sold']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Recently Sold</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"js-nav-dropdown group relative\">\n              <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Resources <i class=\"lg:hidden\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                  </svg>\n                </i>\n              </a>\n              <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\n                <li>\n                  <a [routerLink]=\"['/tabs/help-center']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Help Center</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/tabs/platform']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Platform Status</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/tabs/partners']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Partners</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/tabs/blogs']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Newsletter</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"js-nav-dropdown group relative\">\n              <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-1\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Create <i class=\"lg:hidden\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                  </svg>\n                </i>\n              </a>\n              <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-1\">\n                <li>\n                  <a [routerLink]=\"['/tabs/background']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-accent text-sm\">Background</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                    <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Advertise</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <!-- new menu -->\n            <li class=\"js-nav-dropdown group relative\">\n              <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                  </svg>\n                </i>\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <!-- Mobile Connect Wallet / Socials -->\n        <!-- Actions -->\n        <div class=\"ml-8 hidden lg:flex xl:ml-12\">\n          <!-- cart -->\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <g>\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n              </g>\n            </svg>\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n          </button>\n          <!-- Profile -->\n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </button>\n          </div>\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n              </svg>\n            </button>\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                </svg>\n              </button>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                <div class=\"flex items-center mb-3\">\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f0b90b\">\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                </div>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                <div>\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                  <div class=\"flex items-center mt-2\">\n                    <!-- Default Progressbar with 50 percent -->\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                  </div>\n                </div>\n              </div>\n              <a [routerLink]=\"['/tabs/profile']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n              </a>\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Mobile Menu Actions -->\n      <div class=\"ml-auto flex lg:hidden\">\n        <!-- cart -->\n        <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n            <g>\n              <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n              <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n              <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n            </g>\n          </svg>\n          <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n        </button>\n        \n        <!-- Profile -->            \n        <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n          <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n            <ion-icon name=\"log-in-outline\"></ion-icon>\n          </button>\n        </div>\n        <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n          <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n            </svg>\n          </button>\n          <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n            <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n              <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n              </svg>\n            </button>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n              <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n              <div class=\"flex items-center mb-3\">\n                <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n              </div>\n              <div class=\"flex items-center mb-3\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <g fill=\"#f3ba2f\">\n                    <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                  </g>\n                </svg>\n                <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n              </div>\n              <div class=\"flex items-center mb-3\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <g fill=\"#f0b90b\">\n                    <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                  </g>\n                </svg>\n                <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n              </div>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n              <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n              <div>\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                <div class=\"flex items-center mt-2\">\n                  <!-- Default Progressbar with 50 percent -->\n                  <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                </div>\n              </div>\n            </div>\n            <a [routerLink]=\"['/tabs/profile']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n              </svg>\n              <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n            </a>\n            <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n              </svg>\n              <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <main class=\"pt-[5.5rem] lg:pt-24\">\n    <!-- Blog -->\n    <section class=\"relative py-16 md:py-24\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"container\">\n        <!-- Featured Post -->\n        <article class=\"mb-[1.875rem] md:mb-16\">\n          <div class=\"rounded-2.5xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row\">\n            <figure class=\"group overflow-hidden md:w-1/2\">\n              <a href=\"single-post.html\">\n                <img src=\"img/blog/post_1.jpg\" alt=\"post 1\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n              </a>\n            </figure>\n            <!-- Body -->\n            <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]\">\n              <!-- Meta -->\n              <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                <span class=\"dark:text-jacarta-400\">in</span>\n                <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                  <a href=\"#\">NFT's</a>\n                  <a href=\"#\">DIGITAL ART</a>\n                </span>\n              </div>\n              <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl\">\n                <a href=\"single-post.html\"> List your collection for secondary sales </a>\n              </h2>\n              <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n              <!-- Date / Time -->\n              <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                <span>\n                  <time datetime=\"2022-02-05\">5 Feb</time>\n                </span>\n                <span>•</span>\n                <span>3 min read</span>\n              </div>\n            </div>\n          </div>\n        </article>\n        <div class=\"grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3\">\n          <!-- Posts -->\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_2.jpg\" alt=\"post 2\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\"> Mint your own Tezos collections </a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">5 Feb</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_3.jpg\" alt=\"post 3\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\">List your collection for secondary sales</a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">22 Feb</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_4.jpg\" alt=\"post 4\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\">The biggest moves in NFTs, Bitcoin, crypto rules</a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">18 Jan</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_5.jpg\" alt=\"post 5\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\">Incredible Amount of Developer Energy' in Web3</a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">15 Jan</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_6.jpg\" alt=\"post 6\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\">Inflation is up, it matters: High prices plague Biden's</a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">23 Dec</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n          <article>\n            <div class=\"rounded-2.5xl overflow-hidden transition-shadow hover:shadow-lg\">\n              <figure class=\"group overflow-hidden\">\n                <a href=\"single-post.html\">\n                  <img src=\"img/blog/post_7.jpg\" alt=\"post 7\" class=\"h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105\" />\n                </a>\n              </figure>\n              <!-- Body -->\n              <div class=\"dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]\">\n                <!-- Meta -->\n                <div class=\"mb-3 flex flex-wrap items-center space-x-1 text-xs\">\n                  <a href=\"#\" class=\"dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent\">Deothemes</a>\n                  <span class=\"dark:text-jacarta-400\">in</span>\n                  <span class=\"text-accent inline-flex flex-wrap items-center space-x-1\">\n                    <a href=\"#\">NFT's</a>\n                    <a href=\"#\">DIGITAL ART</a>\n                  </span>\n                </div>\n                <h2 class=\"font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white\">\n                  <a href=\"single-post.html\">What to do when the market is going everywhere</a>\n                </h2>\n                <p class=\"dark:text-jacarta-200 mb-8\"> Since we launched Tezos at the end of 2021, many awesome creators... </p>\n                <!-- Date / Time -->\n                <div class=\"text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm\">\n                  <span>\n                    <time datetime=\"2022-02-05\">15 Dec</time>\n                  </span>\n                  <span>•</span>\n                  <span>3 min read</span>\n                </div>\n              </div>\n            </div>\n          </article>\n        </div>\n        <!-- Load More -->\n        <div class=\"mt-10 text-center\">\n          <a href=\"blog.html\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">Load More</a>\n        </div>\n      </div>\n    </section>\n    <!-- end blog -->\n  </main>\n  \n  <!-- Footer -->\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\n    <div class=\"container\">\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\n        <div class=\"col-span-3 md:col-span-4\">\n          <!-- Logo -->\n          <a href=\"#\" class=\"mb-6 inline-block\">\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n          </a>\n          <p class=\"dark:text-jacarta-300 mb-12\"> Create, sell and collect truly rare digital artworks. Powered by blockchain technology. </p>\n          <!-- Socials -->\n          <div class=\"flex space-x-5\">\n            <!-- <a href=\"#\" class=\"group\"><svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"facebook\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              ><path\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\n                ></path></svg></a> -->\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\n              <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\n              </svg>\n            </a>\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\n              <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"discord\" class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\n                <path d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"></path>\n              </svg>\n            </a>\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\n              <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"instagram\" class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n                <path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path>\n              </svg>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\n              <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"youtube\" class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n                <path d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"></path>\n              </svg>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\n        <span class=\"dark:text-jacarta-400 text-sm\">&copy; <script>\n            document.write(new Date().getFullYear())\n          </script> Copyright OragonX All Rights Reserved By <a href=\"https://oragonbsc.io\" class=\"hover:text-accent\">OragonX</a>\n        </span>\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\n          <li>\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\n          </li>\n          <li>\n            <a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n  <!-- end footer -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newsletter_newsletter_module_ts.js.map