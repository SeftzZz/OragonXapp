(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [{
  path: '',
  component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
}];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ProfilePageRoutingModule);


/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 28775);








let ProfilePageModule = class ProfilePageModule {};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
  declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
})], ProfilePageModule);


/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 680);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 26710);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;









swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_4__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_4__.Zoom, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade]);

const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);



// AngularFire


// Services


// Web3



const providerOptions = {
  walletconnect: {
    package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_12__["default"],
    options: {
      network: "binance",
      infuraId: "46a670cff8894b729ea30027244e4641",
      rpc: {
        56: "https://oragonbsc.io/weboragonbsc/kelolaisi/api"
      }
    }
  }
};
const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_11___default())({
  network: "mainnet",
  cacheProvider: true,
  providerOptions // required
});

let ProfilePage = (_class = class ProfilePage {
  constructor(authService, router, loadingController, alertController, toastCtrl, fs, fs2, http, global, senddata, datepipe) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datepipe", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "infiniteScroll", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "slides", void 0);
    // object
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isLogin", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "percentRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "valueRoyalty", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "points", void 0);
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
    // MAIN
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscription", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_direct_buy", "1");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateHash", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "parse_localStorage", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_bnb_wei", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storecart", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsdate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2powned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceBNB", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonIdBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImgBG", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonfavorited", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceRoyalty_display", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_royalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortdragons", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortdragonsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeSell", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortp2pmarket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsLow", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsAtoZ", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLength", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sorteggsowned", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesowned", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodDate", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "btnclickcategory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfoodsowned", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_qty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_stock", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getSellfood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "iditemssellFood", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "rangeValue", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectedBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latest_date", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeBID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "royalties", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "positionRoyalty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty2", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty3", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty4", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty5", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistoryall", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistorybyid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sessionPointHistory", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataNotif", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notificationBid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "statusCheckNew", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesownedLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "usedBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "usedEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeIncubator", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatching", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdown", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "days", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hours", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutes", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "seconds", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatchingDataEgg", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatchingDataBattery", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsServer", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isRunning", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timerId", 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesownedIncubator", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jaketsHigh", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lastseen", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfashion", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jakets", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashionjaketsLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashioncommonjaketsLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "commonjakets", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "detailJaket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "qrcodeJaket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "nameJaket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ClaimmedJaket", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "scanned", false);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonsellLength", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggsellLength", void 0);
    this.authService = authService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.toastCtrl = toastCtrl;
    this.fs = fs;
    this.fs2 = fs2;
    this.http = http;
    this.global = global;
    this.senddata = senddata;
    this.datepipe = datepipe;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
  }
  setSwiperInstance(swiper) {
    this.slides = swiper;
  }
  logout() {
    var _this = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.logout();
      window.location.replace("/login");
    })();
  }
  login() {
    var _this2 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this2.router.navigateByUrl("/login", {
        replaceUrl: true
      });
    })();
  }
  p2pmarket() {
    var _this3 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this3.router.navigateByUrl("/tabs/p2pmarket", {
        replaceUrl: true
      });
    })();
  }
  doInfinite(infiniteScroll) {
    var _this4 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("Begin async operation");
      const loading = yield _this4.loadingController.create();
      yield loading.present();
      setTimeout(() => {
        for (let i = 0; i < 12; i++) {
          _this4.dragons.push(_this4.dragons[i]);
        }
        loading.dismiss();
        // console.log("Async operation has ended");
        infiniteScroll.target.complete();
      }, 6);
    })();
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  // FCT-Refresh
  doRefresh(event) {
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  // FCT-Root
  ngOnInit() {
    var _this5 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingController.create();
      yield loading.present();
      _this5.connect = false;
      _this5.setCurrentLocation();
      _this5.status_direct_buy = 1;
      _this5.senddata.getcurrentoragon2().subscribe(data => {
        _this5.current_oragon = data.data.price;
        var Web3 = __webpack_require__(/*! web3 */ 30143);
        // Gatcha 10X
        let currTen = (100 / _this5.current_oragon).toFixed();
        _this5.latesttenOragon = (Web3.utils.fromWei(currTen, "wei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // Gatcha 1X
        let currOne = (12 / _this5.current_oragon).toFixed();
        _this5.latestoneOragon = (Web3.utils.fromWei(currOne, "wei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // console.log(this.latestoneOragon);
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
        if (_this5.globalID == "iXo9SC6D93OS8FXNnWeWEDjVXvc2") {
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
        _this5.checknotificationBid();
        // this.notificationBid = setInterval(async () => {
        // this.checknotificationBid();
        // }, 3000);
        _this5.checknewdragon();
        _this5.checknewegg();
        _this5.checknewfood();
        _this5.checknewbattery();
        _this5.checknewbattery12();
        _this5.insertNewBattery8mp();
        _this5.checknewpoint();
        _this5.getcountRolling();
      }
      _this5.stateHash = false;
      _this5.currentp2p = 0;
      _this5.currentp2powned = 10;
      _this5.sortp2pmarket = 1;
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      // const source = interval(2000);
      // this.subscription = source.subscribe(() => this.checkonsale());
      _this5.lastseen = "jakets";
      _this5.sortfashion = 1;
      localStorage.setItem("lastseenfashion", "jakets");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      _this5.senddata.getselljaketsUserownedmp(_this5.globalID).subscribe(dataSell => {
        _this5.jakets = JSON.parse(dataSell);
        _this5.fashionjaketsLength = dataSell.length;
        // console.log(this.jakets)
      }, error => {});
      _this5.senddata.getsellcommonjaketsownedmp(_this5.globalID).subscribe(dataSell => {
        _this5.commonjakets = JSON.parse(dataSell);
        _this5.fashioncommonjaketsLength = dataSell.length;
        // console.log(this.commonjakets)
      }, error => {});
      _this5.senddata.getselldgUsermp(_this5.globalID).subscribe(dataSell => {
        _this5.dragonsHigh = JSON.parse(dataSell);
        _this5.marketp2pdragonsellLength = _this5.dragonsHigh.length;
        // console.log(this.dragons)
      }, error => {});
      _this5.senddata.getselleggUsermp(_this5.globalID).subscribe(dataSell => {
        _this5.eggsHigh = JSON.parse(dataSell);
        _this5.marketp2peggsellLength = _this5.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      _this5.senddata.getselleggUserownedmp(_this5.globalID).subscribe(dataSell => {
        _this5.eggsHigh = JSON.parse(dataSell);
        _this5.marketp2peggLength = _this5.eggsHigh.length;
      }, error => {});
      _this5.senddata.getsellbatteryUserallmp(_this5.globalID).subscribe(dataSell => {
        _this5.batteriesHigh = JSON.parse(dataSell);
        _this5.marketp2pbatteryLength = _this5.batteriesHigh.length;
        if (_this5.marketp2pbatteryLength == 0) {
          _this5.fs.collection('Items/' + _this5.globalID + '/Batteries').doc(_this5.batteriesHigh.DocId).set({
            Amount: 0,
            Id: _this5.batteriesHigh.DocId,
            ItemId: _this5.batteriesHigh.ItemId
          }).then(() => {});
        }
        // console.log(this.batteriesHigh)
      }, error => {});
      _this5.senddata.getsellfoodUsermp(_this5.globalID).subscribe(dataSell => {
        _this5.foodsHigh = JSON.parse(dataSell);
        _this5.marketp2pfoodLength = _this5.foodsHigh.lengthFood;
        if (_this5.marketp2pfoodLength == 0) {
          _this5.fs.collection('Items/' + _this5.globalID + '/Foods').doc(_this5.foodsHigh.DocId).set({
            Amount: 0,
            Id: _this5.foodsHigh.DocId,
            ItemId: _this5.foodsHigh.ItemId,
            Used: 0
          }).then(() => {});
        }
        // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
      }, error => {});
      _this5.senddata.getroyaltiesUsermp(_this5.globalID).subscribe(dataSell => {
        let royalties = JSON.parse(dataSell);
        _this5.royalties = royalties;
        if (_this5.royalties.length == 0) {
          _this5.percentRoyalty = 0;
          _this5.valueRoyalty = 0;
        } else {
          // console.log("royaties data: ", this.royalties);
          for (let i in _this5.royalties) {
            _this5.valueRoyalty = _this5.royalties[i].amount / 100 * 100;
            _this5.percentRoyalty = _this5.valueRoyalty * 100;
            if (_this5.valueRoyalty == 1) {
              localStorage.setItem("wd", "1");
              let wd = localStorage.getItem("wd");
              if (wd == "1") {
                // this.alertWithdraw();
                return wd;
              }
              return _this5.valueRoyalty;
            }
          }
        }
      }, error => {});
      _this5.selectedBid = "Select type BID";
      _this5.rangeValue = 1;
      loading.dismiss();
    })();
  }
  checknotificationBid() {
    var _this6 = this;
    this.senddata.getNotificationBidmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this6.dataNotif = JSON.parse(dataNotif);
        for (let i in _this6.dataNotif) {
          // console.log("dataNotif", this.dataNotif[i].idBid);
          const toast2 = yield _this6.toastCtrl.create({
            header: "You have notifications",
            message: _this6.dataNotif[i].username + " has place bid in " + _this6.dataNotif[i].priceBid + " BNB",
            icon: "information-circle",
            position: "top",
            color: "success",
            buttons: [{
              text: "Close",
              role: "cancel",
              handler: () => {
                _this6.senddata.readNotificationBidmp(_this6.dataNotif[i].idBid).subscribe( /*#__PURE__*/function () {
                  var _ref2 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
                    // console.log(dataRead, "notifications readed");
                  });
                  return function (_x2) {
                    return _ref2.apply(this, arguments);
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
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
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
  // FCT-AGM Get Current Location Coordinates
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
  // FCT-WEB3
  connectAccount() {
    var _this7 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.provider = yield web3Modal.connect();
      _this7.getcurrentoragon();
      yield _this7.getPaymentCount();
      _this7.web3js = new (web3__WEBPACK_IMPORTED_MODULE_10___default())(_this7.provider); // create web3 instance
      // console.log(this.web3js);
      _this7.accounts = yield _this7.web3js.eth.getAccounts(console.log);
      _this7.wallet = _this7.accounts[0];
      if (_this7.wallet == _this7.wallets) {
        _this7.tokenInst = new _this7.web3js.eth.Contract(_this7.tokenABI, "0x88c676fc777c225b69869aeef5d10535de1e4f5d");
        _this7.balance1 = yield _this7.tokenInst.methods.balanceOf(_this7.accounts[0]).call(console.log);
        _this7.oragon_balance_display = (_this7.web3js.utils.fromWei(_this7.balance1, "gwei") * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        _this7.oragon_balance = _this7.web3js.utils.fromWei(_this7.balance1, "gwei");
        _this7.in_dollar = _this7.oragon_balance * _this7.current_oragon;
        _this7.oragon_balance2 = _this7.balance1;
        _this7.balance2 = yield _this7.web3js.eth.getBalance(_this7.accounts[0]);
        _this7.bnb_balance = _this7.web3js.utils.fromWei(_this7.balance2, "ether");
        console.log(_this7.bnb_balance);
        //if connect
        _this7.connect = true;
        if (_this7.payment_count <= 0) {
          _this7.state_buy = "2";
        } else if (_this7.payment_count > 0) {
          _this7.state_buy = "2";
        }
        _this7.stateHash = true;
        // fee gatcha
        _this7.fee = (11 / 100 * 100 * 0.0027).toString(); //10X
        let kind = localStorage.getItem("kind");
        if (kind == "dragon") {
          // fee p2p market dragon
          _this7.marketp2pdragonFee = 11 / 100 * _this7.marketp2pdragonprice;
          let marketp2pdragonprice_actual = _this7.marketp2pdragonprice - _this7.marketp2pdragonFee;
          _this7.fee_display = _this7.marketp2pdragonFee;
          _this7.price_display = marketp2pdragonprice_actual;
        } else if (kind == "egg") {
          // fee p2p market egg
          _this7.marketp2peggFee = 11 / 100 * _this7.marketp2peggprice;
          let marketp2peggprice_actual = _this7.marketp2peggprice - _this7.marketp2peggFee;
          _this7.fee_display = _this7.marketp2peggFee;
          _this7.price_display = marketp2peggprice_actual;
        } else if (kind == "battery") {
          // fee p2p market battery
          _this7.marketp2pbatteryFee = 11 / 100 * _this7.marketp2pbatteryprice;
          let marketp2pbatteryprice_actual = _this7.marketp2pbatteryprice - _this7.marketp2pbatteryFee;
          _this7.fee_display = _this7.marketp2pbatteryFee;
          _this7.price_display = marketp2pbatteryprice_actual;
        }
        const alert = yield _this7.alertController.create({
          header: "Success",
          message: "Connected to Registered Wallet",
          buttons: ["OK"]
        });
        yield alert.present();
        //if connect
      } else {
        yield _this7.provider.close();
        _this7.provider = null;
        _this7.connect = false;
        const alert = yield _this7.alertController.create({
          header: "Failed!",
          message: "Please Use Registered Wallet",
          buttons: ["OK"]
        });
        yield alert.present();
      }
    })();
  }
  // FCT-Market P2P
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
      console.log(datas.Gacha1);
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
      console.log(datas);
    });
    localStorage.removeItem("walletconnect");
  }
  getcurrentoragon() {
    this.senddata.getcurrentoragon2().subscribe(data => {
      this.current_oragon = data.data.price;
      this.in_oragon_100c = (100 / this.current_oragon).toFixed(14);
      this.in_oragon_12c = (12 / this.current_oragon).toFixed(14);
      console.log(this.current_oragon);
    }, error => {});
  }
  clickcategory(kind) {
    if (kind == 1) {
      this.currentp2p = 1;
      this.sortp2pmarket = 1;
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
    } else if (kind == 2) {
      this.currentp2p = 2;
      this.sortp2pmarket = 4;
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 3) {
      this.currentp2p = 3;
      this.senddata.getsellbatterymp().subscribe(dataSell => {
        this.batteriesHigh = dataSell;
      }, error => {});
    } else if (kind == 4) {
      this.currentp2p = 4;
      this.senddata.getsellfoodmp().subscribe(dataSell => {
        this.foodsHigh = dataSell;
      }, error => {});
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
      // ------------------------ Sort BATERRY
    } else if (kind == 7) {
      this.currentp2p = 3;
      this.sortp2pmarket = 7;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatterymp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    }
  }
  getdgbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(DocId);
  }
  geteggbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(DocId);
  }
  getbatterybuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }
  checkkind(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "dragon") {
      this.senddata.getselldgidmp(DocId).subscribe(dataDetail => {
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
        this.marketp2pdragonowner = this.dragonDetail.owner;
        this.marketp2pdragonprice = this.dragonDetail.price;
        let marketp2pdragonpriceUSD = this.dragonDetail.price / this.current_bnb;
        this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        this.marketp2pdragonBG = this.dragonDetail.imgbackground;
        this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
        this.marketp2pdragonfavorited = this.dragonDetail.favorited;
        console.log(this.marketp2pdragonpriceUSD);
        let input_price = localStorage.getItem("input_price");
        if (this.marketp2pdragonBG == "exists") {
          this.senddata.getdgroyaltymp(DocId).subscribe(dataRoyalty => {
            let dr = dataRoyalty;
            // fee p2p market dragon
            this.marketp2pdragonFee = 12 / 100 * Number(input_price);
            let marketp2pdragonprice_actual = Number(input_price) - this.marketp2pdragonFee;
            this.fee_display = this.marketp2pdragonFee;
            this.price_display = marketp2pdragonprice_actual;
            this.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
            let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
            this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
            this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
            this.marketp2pdragonRoyalty2 = 10 / 100 * this.marketp2pdragonRoyalty;
            this.marketp2pdragonRoyalty3 = 10 / 100 * this.marketp2pdragonRoyalty2;
            this.marketp2pdragonRoyalty4 = 10 / 100 * this.marketp2pdragonRoyalty3;
            this.marketp2pdragonRoyalty5 = 10 / 100 * this.marketp2pdragonRoyalty4;
            if (dr == 1) {
              this.positionRoyalty = 1;
              // console.log("first position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
            } else if (dr == 2) {
              this.positionRoyalty = 2;
              // console.log("second position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2
              // );
            } else if (dr == 3) {
              this.positionRoyalty = 3;
              // console.log("third position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3
              // );
            } else if (dr == 4) {
              this.positionRoyalty = 4;
              // console.log("fourth position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 4",
              //   this.marketp2pdragonRoyalty4
              // );
            } else if (dr == 5) {
              this.positionRoyalty = 5;
              // console.log("fifth position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 4",
              //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 5",
              //   this.marketp2pdragonRoyalty5
              // );
            } else {
              // console.log("unknown position");
            }
            // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
            // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
            // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
            // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
            // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
          });
        } else {
          this.senddata.getdgroyaltymp(DocId).subscribe(dataRoyalty => {
            let dr = dataRoyalty;
            // fee p2p market dragon
            this.marketp2pdragonFee = 12 / 100 * Number(input_price);
            let marketp2pdragonprice_actual = Number(input_price) - this.marketp2pdragonFee;
            this.fee_display = this.marketp2pdragonFee;
            this.price_display = marketp2pdragonprice_actual;
            this.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
            let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
            this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
            this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
            this.marketp2pdragonRoyalty2 = 10 / 100 * this.marketp2pdragonRoyalty;
            this.marketp2pdragonRoyalty3 = 10 / 100 * this.marketp2pdragonRoyalty2;
            this.marketp2pdragonRoyalty4 = 10 / 100 * this.marketp2pdragonRoyalty3;
            this.marketp2pdragonRoyalty5 = 10 / 100 * this.marketp2pdragonRoyalty4;
            if (dr == 1) {
              this.positionRoyalty = 1;
              // console.log("first position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
            } else if (dr == 2) {
              this.positionRoyalty = 2;
              // console.log("second position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2
              // );
            } else if (dr == 3) {
              this.positionRoyalty = 3;
              // console.log("third position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3
              // );
            } else if (dr == 4) {
              this.positionRoyalty = 4;
              // console.log("fourth position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
              // );
              // console.log(
              //   "royalti untuk pos 4",
              //   this.marketp2pdragonRoyalty4
              // );
            } else if (dr == 5) {
              this.positionRoyalty = 5;
              // console.log("fifth position");
              // console.log(
              //   "royalti untuk pos 1",
              //   this.marketp2pdragonRoyalty -
              //     this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 2",
              //   this.marketp2pdragonRoyalty2 -
              //     this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 3",
              //   this.marketp2pdragonRoyalty3 -
              //     this.marketp2pdragonRoyalty4 -
              //     this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 4",
              //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
              // );
              // console.log(
              //   "royalti untuk pos 5",
              //   this.marketp2pdragonRoyalty5
              // );
            } else {
              // console.log("unknown position");
            }
            // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
            // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
            // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
            // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
            // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
          });
        }

        this.senddata.getposroyaltymp(DocId).subscribe(datapos => {
          // console.log(JSON.parse(datapos))
        });
      }, error => {});
    } else if (kind == "food") {
      this.senddata.getsellfoodUsermp(this.globalID).subscribe(dataSell => {
        this.sortfoodsowned = JSON.parse(dataSell);
        this.marketp2pfoodOID = this.sortfoodsowned.DocId;
        this.marketp2pfoodLength = this.sortfoodsowned.lengthFood;
        this.marketp2pfoodDate = this.sortfoodsowned.EditAt;
        this.marketp2pfoodowner = this.sortfoodsowned.owner;
        this.marketp2pfoodpriceBNB = 1;
        let marketp2pfoodpriceBNB = this.current_bnb * this.marketp2pfoodpriceBNB;
        this.marketp2pfoodpriceBNB = marketp2pfoodpriceBNB.toFixed(2);
        // console.log(this.marketp2pfoodpriceBNB)
      }, error => {});
    }
  }
  checkkindEgg(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "egg") {
      this.senddata.getselleggidmp(DocId).subscribe(dataDetail => {
        this.eggDetail = JSON.parse(dataDetail);
        this.marketp2peggDocId = this.eggDetail.DocId;
        this.marketp2peggID = this.eggDetail.ItemId;
        this.marketp2peggImg = this.eggDetail.Id;
        this.marketp2peggowner = this.eggDetail.owner;
        this.marketp2peggprice = this.eggDetail.price;
        let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
        this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        // console.log(this.marketp2peggpriceUSD);
      }, error => {});
    }
  }
  checkkindBattery(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "battery") {
      this.senddata.getsellbatteryidmp(DocId).subscribe(dataDetail => {
        this.batteryDetail = JSON.parse(dataDetail);
        this.marketp2pbatteryDocId = this.batteryDetail.DocId;
        this.marketp2pbatteryID = this.batteryDetail.ItemId;
        this.marketp2pbatteryImg = this.batteryDetail.Id;
        this.marketp2pbatteryowner = this.batteryDetail.owner;
        this.marketp2pbatteryprice = this.batteryDetail.price;
        let marketp2pbatterypriceUSD = this.batteryDetail.price / this.current_bnb;
        this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        // console.log(this.marketp2pbatterypriceUSD);
      }, error => {});
    }
  }
  checkitemscreated() {
    this.fs.collection("Items").doc(this.globalID).valueChanges().subscribe(datas => {
      // console.log(datas.Count);
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
  // FCT-Profile
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
  checknewdragon() {
    var _this8 = this;
    this.fs.collection("Items/" + this.globalID + "/Dragons").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewDragon) {
        // console.log("datanewDragon", datanewDragon);
        for (let i in datanewDragon) {
          // console.log("datanewDragon", datanewDragon[i].Id, datanewDragon[i].Attributes.AttackPoint);
          if (datanewDragon[i].Attributes != undefined) {
            _this8.senddata.insertNewDragonmp(_this8.globalID, datanewDragon[i].Id, datanewDragon[i].ItemId, datanewDragon[i].Attributes.AttackPoint, datanewDragon[i].Attributes.DefensePoint, datanewDragon[i].Attributes.Exp, datanewDragon[i].Attributes.HP, datanewDragon[i].Attributes.Hunger, datanewDragon[i].Attributes.Level, datanewDragon[i].Attributes.MaxHP, datanewDragon[i].Attributes.MaxHunger).subscribe(resp => {
              // console.log(JSON.parse(resp));
              let check = JSON.parse(resp);
              if (check.newest == true) {
                _this8.senddata.updateNewDataDragonmp(_this8.globalID, datanewDragon[i].Id, datanewDragon[i].ItemId, datanewDragon[i].Attributes.AttackPoint, datanewDragon[i].Attributes.DefensePoint, datanewDragon[i].Attributes.Exp, datanewDragon[i].Attributes.HP, datanewDragon[i].Attributes.Hunger, datanewDragon[i].Attributes.Level, datanewDragon[i].Attributes.MaxHP, datanewDragon[i].Attributes.MaxHunger).subscribe(respUpdate => {
                  // console.log("respUpdate", respUpdate);
                });
              }
              _this8.senddata.getselldgUserownedmp(_this8.globalID).subscribe(dataSell => {
                _this8.dragonsowned = JSON.parse(dataSell);
                _this8.marketp2pdragonID = _this8.dragonsowned.ItemId;
                _this8.marketp2pdragonLength = _this8.dragonsowned.length;
                // console.log("from sql", this.dragonsowned);
                // console.log("from fb", datanewDragon);
                for (let i in _this8.dragonsowned) {
                  if (_this8.dragonsowned[i].imgbackground == "exists" && _this8.dragonsowned[i].statusbayarbackground == "paid") {
                    _this8.senddata.getallbackgroundmp(_this8.globalID).subscribe(dataSell => {
                      _this8.dragonsownedbg = JSON.parse(dataSell);
                      _this8.marketp2pdragonBG = _this8.dragonsownedbg.imgBg;
                      _this8.marketp2pdragonIdBG = _this8.dragonsownedbg.ItemId;
                      // console.log(this.dragonsownedbg)
                    }, error => {});
                  }
                }
              }, error => {});
            });
          } else {}
        }
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  checknewegg() {
    var _this9 = this;
    this.fs.collection("Items/" + this.globalID + "/Eggs").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewEgg) {
        // console.log("datanewEgg", datanewEgg);
        for (let i in datanewEgg) {
          // console.log("datanewEgg", datanewEgg[i].Id, datanewEgg[i].Attributes.AttackPoint);
          _this9.senddata.getselleggUsermp(_this9.globalID).subscribe(dataSell => {
            _this9.sorteggsowned = JSON.parse(dataSell);
            _this9.senddata.insertNewEggmp(_this9.globalID, datanewEgg[i].Id, datanewEgg[i].ItemId, '', 'checked').subscribe(resp => {
              // console.log("inserting data...", resp);
            });
          }, error => {});
        }
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  checknewfood() {
    var _this10 = this;
    this.fs.collection("Items/" + this.globalID + "/Foods").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFood) {
        // console.log("datanewFood", datanewFood);
        for (let i in datanewFood) {
          // console.log("datanewFood", datanewFood[i].Id, datanewFood[i].Attributes.AttackPoint);
          _this10.senddata.getsellfoodUsermp(_this10.globalID).subscribe(dataSell => {
            _this10.foodsHigh = JSON.parse(dataSell);
            _this10.marketp2pfoodLength = _this10.foodsHigh.lengthFood;
            if (_this10.foodsHigh.lengthFood != datanewFood[i].Amount) {
              // console.log("data s not match from f");
              _this10.senddata.insertNewFoodmp(_this10.globalID, datanewFood[i].Id, datanewFood[i].ItemId, datanewFood[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  checknewbattery() {
    var _this11 = this;
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
        // console.log("datanewBattery", datanewBattery);
        for (let i in datanewBattery) {
          // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
          _this11.senddata.getsellbatteryUserallmp(_this11.globalID).subscribe(dataSell => {
            _this11.sortbatteriesowned = JSON.parse(dataSell);
            if (_this11.sortbatteriesowned.length != datanewBattery[i].Amount) {
              // console.log("data s not match from f");
              _this11.senddata.insertNewBatterymp(_this11.globalID, datanewBattery[i].Id, datanewBattery[i].ItemId, datanewBattery[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  checknewbattery12() {
    var _this12 = this;
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref7 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
        // console.log("datanewBattery", datanewBattery);
        for (let i in datanewBattery) {
          // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
          _this12.senddata.getsellbatteryUserallmp(_this12.globalID).subscribe(dataSell => {
            _this12.sortbatteriesowned = JSON.parse(dataSell);
            if (_this12.sortbatteriesowned.length != datanewBattery[i].Amount) {
              // console.log("data s not match from f");
              _this12.senddata.insertNewBattery12mp(_this12.globalID, datanewBattery[i].Id, datanewBattery[i].ItemId, datanewBattery[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
  insertNewBattery8mp() {
    var _this13 = this;
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref8 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
        // console.log("datanewBattery", datanewBattery);
        for (let i in datanewBattery) {
          // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
          _this13.senddata.getsellbatteryUserallmp(_this13.globalID).subscribe(dataSell => {
            _this13.sortbatteriesowned = JSON.parse(dataSell);
            if (_this13.sortbatteriesowned.length != datanewBattery[i].Amount) {
              // console.log("data s not match from f");
              _this13.senddata.insertNewBattery8mp(_this13.globalID, datanewBattery[i].Id, datanewBattery[i].ItemId, datanewBattery[i].Amount, '', 'checked').subscribe(resp => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          }, error => {});
        }
      });
      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }());
  }
  checknewpoint() {
    var _this14 = this;
    this.fs.collection("Players").doc(this.globalID).valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref9 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewPoint) {
        // console.log("datanewPoint", datanewPoint.Point);
        _this14.points = datanewPoint.Point;
        _this14.senddata.getpointhistory(_this14.globalID).subscribe(dataSell => {
          _this14.pointhistory = JSON.parse(dataSell);
          // console.log("qtyPoint", this.pointhistory.qtyPoint);
          if (_this14.pointhistory.qtyPoint != _this14.points) {
            // console.log("data point s not match from point f");
            _this14.senddata.insertNewPointmp(_this14.globalID, datanewPoint.Point, 'checked').subscribe(resp => {
              // console.log("inserting data...", resp);
            });
          } else {
            // console.log("data point s match from point f");
          }
        }, error => {});
      });
      return function (_x9) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
  tab(kind) {
    var _this15 = this;
    // tab-owned
    if (kind == 10) {
      this.currentp2powned = 10;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.getselldgUserownedmp(this.globalID).subscribe( /*#__PURE__*/function () {
        var _ref10 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this15.loadingController.create();
          yield loading.present();
          _this15.dragonsowned = JSON.parse(dataSell);
          _this15.marketp2pdragonLength = _this15.dragonsowned.length;
          // console.log(this.dragonsowned)
          for (let i in _this15.dragonsowned) {
            if (_this15.dragonsowned[i].imgbackground == "exists" && _this15.dragonsowned[i].statusbayarbackground == "paid") {
              _this15.senddata.getallbackgroundmp(_this15.globalID).subscribe(dataSell => {
                _this15.dragonsownedbg = JSON.parse(dataSell);
                _this15.marketp2pdragonBG = _this15.dragonsownedbg.imgBg;
                _this15.marketp2pdragonIdBG = _this15.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg);
              }, error => {});
            }
          }
          loading.dismiss();
        });
        return function (_x10) {
          return _ref10.apply(this, arguments);
        };
      }(), error => {});
      this.senddata.getselleggUsermp(this.globalID).subscribe(dataSell => {
        this.eggsHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      this.senddata.getselleggUserownedmp(this.globalID).subscribe(dataSell => {
        this.eggsHigh = JSON.parse(dataSell);
        this.marketp2peggLength = this.eggsHigh.length;
      }, error => {});
      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(dataSell => {
        this.batteriesHigh = JSON.parse(dataSell);
        this.marketp2pbatteryLength = this.batteriesHigh.length;
        // console.log(this.batteriesHigh)
      }, error => {});
      this.senddata.getsellfoodUsermp(this.globalID).subscribe(dataSell => {
        this.foodsHigh = JSON.parse(dataSell);
        this.marketp2pfoodLength = this.foodsHigh.lengthFood;
        // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
      }, error => {});
    } else if (kind == 20) {
      this.currentp2powned = 20;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.getselldgUsermp(this.globalID).subscribe(dataSell => {
        this.dragonsHigh = JSON.parse(dataSell);
        // console.log(this.dragons)
      }, error => {});
      this.senddata.getselleggUsermp(this.globalID).subscribe(dataSell => {
        this.eggsHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      this.senddata.getsellbatterysellUsermp(this.globalID).subscribe(dataSell => {
        this.batteriesHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      this.senddata.getsellfoodUsermp(this.globalID).subscribe(dataSell => {
        this.foodsHigh = JSON.parse(dataSell);
        this.marketp2pfoodLength = this.foodsHigh.lengthFood;
        // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
      }, error => {});
    } else if (kind == 30) {
      this.currentp2powned = 30;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.getselldgUsermp(this.globalID).subscribe(dataSell => {
        this.dragonsHigh = JSON.parse(dataSell);
        // console.log(this.dragons)
      }, error => {});
      this.senddata.getselleggUsermp(this.globalID).subscribe(dataSell => {
        this.eggsHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(dataSell => {
        this.batteriesHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      }, error => {});
      this.senddata.getsellfoodUsermp(this.globalID).subscribe(dataSell => {
        this.foodsHigh = JSON.parse(dataSell);
        this.marketp2pfoodLength = this.foodsHigh.lengthFood;
        // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
      }, error => {});
    } else if (kind == 50) {
      this.currentp2powned = 50;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.getroyaltiesUsermp(this.globalID).subscribe(dataSell => {
        let royalties = JSON.parse(dataSell);
        this.royalties = royalties;
        // console.log("royaties data: ", this.royalties);
        for (let i in this.royalties) {
          this.valueRoyalty = this.royalties[i].amount / 100 * 100;
          this.percentRoyalty = this.valueRoyalty * 100;
          if (this.valueRoyalty == 1) {
            localStorage.setItem("wd", "1");
            let wd = localStorage.getItem("wd");
            if (wd == "1") {
              // this.alertWithdraw();
              return wd;
            }
            return this.valueRoyalty;
          }
        }
      }, error => {});
    } else if (kind == 60) {
      this.currentp2powned = 60;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.gettrxhistory(this.globalID).subscribe(dataSell => {
        let trxhistory = JSON.parse(dataSell);
        this.trxhistory = trxhistory;
        // console.log("trxhistory data: ", this.trxhistory);
      }, error => {});
    } else if (kind == 70) {
      this.currentp2powned = 70;
      // console.log("category p2p owned", this.currentp2powned);
      this.sessionPointHistory = 0;
      this.senddata.getpointhistoryall(this.globalID).subscribe(dataSell => {
        let pointhistoryall = JSON.parse(dataSell);
        this.pointhistoryall = pointhistoryall;
        // console.log("pointhistoryall data: ", this.pointhistoryall);
        // this.senddata.getpointhistorybyid(this.pointhistoryall.idPoint).subscribe(
        //   (dataSell: any) => {
        //     let pointhistorybyid = JSON.parse(dataSell);
        //     this.pointhistorybyid = pointhistorybyid;
        // console.log("pointhistorybyid data: ", this.pointhistorybyid);
        //   },
        //   (error: any) => {}
        // );
      }, error => {});
    } else if (kind == 80) {
      this.currentp2powned = 80;
      // console.log("category p2p owned", this.currentp2powned);
    } else if (kind == 'jakets') {
      this.lastseen = "jakets";
      this.sortfashion = 1;
      localStorage.setItem("lastseenfashion", "jakets");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselljaketsUserownedmp(this.globalID).subscribe(dataSell => {
        this.jakets = JSON.parse(dataSell);
        this.fashionjaketsLength = dataSell.length;
        // console.log(this.jakets)
      }, error => {});
      this.senddata.getsellcommonjaketsownedmp(this.globalID).subscribe(dataSell => {
        this.commonjakets = JSON.parse(dataSell);
        this.fashioncommonjaketsLength = dataSell.length;
        // console.log(this.commonjakets)
      }, error => {});
    }
  }
  onQRCodeScanned() {
    // Set the scanned status to true
    this.scanned = true;
    console.log(this.scanned);
  }
  clickcategoryowned(kind) {
    var _this16 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (kind == 11) {
        _this16.currentp2powned = 11;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this16.loadingController.create();
        yield loading.present();
        _this16.senddata.getselldgUserownedmp(_this16.globalID).subscribe(dataSell => {
          _this16.sortdragonsowned = JSON.parse(dataSell);
        }, error => {});
        loading.dismiss();
      } else if (kind == 20) {
        _this16.currentp2powned = 20;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this16.loadingController.create();
        yield loading.present();
        _this16.senddata.getselleggUserownedmp(_this16.globalID).subscribe(dataSell => {
          _this16.sorteggsowned = JSON.parse(dataSell);
          _this16.fs.collection("Players/" + _this16.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref11 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this16.usedEgg = dataIncubator[0].EggItemId;
              _this16.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this16.latest_date = _this16.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this16.timeIncubator = _this16.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this16.senddata.itemseggtoincubatormp(_this16.usedEgg, _this16.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this16.hatchingDataEgg = JSON.parse(dataE);
                  _this16.senddata.getselleggUserownedmp(_this16.globalID).subscribe(dataSell => {
                    _this16.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this16.senddata.itemsbatterytoincubatormp(_this16.usedBattery, _this16.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this16.hatchingDataBattery = JSON.parse(dataE);
                  _this16.senddata.getsellbatteryUserownedmp(_this16.globalID).subscribe(dataSell => {
                    _this16.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this16.hatching = true;
              }
            });
            return function (_x11) {
              return _ref11.apply(this, arguments);
            };
          }());
        }, error => {});
        loading.dismiss();
      } else if (kind == 30) {
        _this16.currentp2powned = 30;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this16.loadingController.create();
        yield loading.present();
        _this16.senddata.getsellbatteryUserallmp(_this16.globalID).subscribe(dataSell => {
          _this16.sortbatteriesowned = JSON.parse(dataSell);
          _this16.sortbatteriesownedLength = _this16.sortbatteriesowned.lengthBattery;
          _this16.fs.collection("Players/" + _this16.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref12 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this16.usedEgg = dataIncubator[0].EggItemId;
              _this16.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this16.latest_date = _this16.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this16.timeIncubator = _this16.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this16.senddata.itemseggtoincubatormp(_this16.usedEgg, _this16.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this16.hatchingDataEgg = JSON.parse(dataE);
                  _this16.senddata.getselleggUserownedmp(_this16.globalID).subscribe(dataSell => {
                    _this16.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this16.senddata.itemsbatterytoincubatormp(_this16.usedBattery, _this16.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this16.hatchingDataBattery = JSON.parse(dataE);
                  _this16.senddata.getsellbatteryUserownedmp(_this16.globalID).subscribe(dataSell => {
                    _this16.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this16.hatching = true;
              }
            });
            return function (_x12) {
              return _ref12.apply(this, arguments);
            };
          }());
        }, error => {});
        loading.dismiss();
      } else if (kind == 40) {
        _this16.currentp2powned = 40;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this16.loadingController.create();
        yield loading.present();
        _this16.senddata.getsellfoodUsermp(_this16.globalID).subscribe(dataSell => {
          _this16.sortfoodsowned = JSON.parse(dataSell);
          _this16.marketp2pfoodLength = _this16.sortfoodsowned.lengthFood;
          _this16.marketp2pfoodDate = _this16.sortfoodsowned.EditAt;
          _this16.marketp2pfoodowner = _this16.sortfoodsowned.uid;
          _this16.marketp2pfoodpriceUSD = 1;
          // console.log(this.marketp2pfoodpriceUSD)
        }, error => {});
        loading.dismiss();
      }
      _this16.countDownHatching();
      _this16.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this16.countDownHatching();
      }), 1000);
    })();
  }
  clickcategoryfashion(kind) {
    if (kind == 1) {
      this.lastseen = "jakets";
      this.sortfashion = 1;
      localStorage.setItem("lastseenfashion", "jakets");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselljaketsUserownedmp(this.globalID).subscribe(dataSell => {
        this.jakets = JSON.parse(dataSell);
        this.fashionjaketsLength = dataSell.length;
        // console.log(this.jakets)
      }, error => {});
      this.senddata.getsellcommonjaketsownedmp(this.globalID).subscribe(dataSell => {
        this.commonjakets = JSON.parse(dataSell);
        this.fashioncommonjaketsLength = dataSell.length;
        // console.log(this.commonjakets)
      }, error => {});
    }
  }
  countDownHatching() {
    var _this17 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this17.timeIncubator).getTime();
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
      // console.log(this.marketp2pdragontimeCount)
      _this17.days = days;
      _this17.hours = hours;
      _this17.minutes = minutes;
      _this17.seconds = seconds;
      // If the count down is over, write some text
      if (distance < 0 || _this17.hours < 0) {
        _this17.hours = 0;
        _this17.minutes = 0;
        _this17.seconds = 0;
      }
      // }, 1000);
    })();
  }

  setdgbuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(ItemId);
  }
  setdgbiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(ItemId);
  }
  seteggbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(DocId);
  }
  seteggbiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(ItemId);
  }
  setbatterybuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }
  setbatterybiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }
  setfoodbuydetail() {
    let kind = localStorage.setItem("kind", "food");
    this.checkkind(kind);
  }
  setfoodbiddetail() {
    let kind = localStorage.setItem("kind", "food");
    this.checkkind(kind);
  }
  onPriceChange(input_price) {
    var _this18 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let kind = localStorage.getItem("kind");
      if (kind == "food") {
        _this18.input_price = input_price;
        let marketp2pfoodpriceBNB = _this18.current_bnb * _this18.input_price;
        // this.marketp2pfoodpriceBNB = (marketp2pfoodpriceBNB).toFixed(2);
        let marketp2pfoodpriceUSD = _this18.input_price * _this18.input_stock;
        _this18.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
      } else if (kind == "dragon") {
        _this18.input_price = input_price;
        let marketp2pdragonpriceUSD = _this18.input_price;
        _this18.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
        _this18.senddata.getdgroyaltymp(_this18.marketp2pdragonID).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          _this18.marketp2pdragonFee = 12 / 100 * Number(input_price);
          let marketp2pdragonprice_actual = Number(input_price) - _this18.marketp2pdragonFee;
          _this18.fee_display = _this18.marketp2pdragonFee;
          _this18.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display = _this18.price_display - _this18.marketp2pdragonRoyalty;
          _this18.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          _this18.fee_royalty = _this18.fee_display + _this18.marketp2pdragonRoyalty;
          _this18.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
          _this18.marketp2pdragonRoyalty2 = 10 / 100 * _this18.marketp2pdragonRoyalty;
          _this18.marketp2pdragonRoyalty3 = 10 / 100 * _this18.marketp2pdragonRoyalty2;
          _this18.marketp2pdragonRoyalty4 = 10 / 100 * _this18.marketp2pdragonRoyalty3;
          _this18.marketp2pdragonRoyalty5 = 10 / 100 * _this18.marketp2pdragonRoyalty4;
          if (dr == 1) {
            _this18.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            _this18.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            _this18.positionRoyalty = 3;
            // console.log("third position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
            // );
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
          } else if (dr == 4) {
            _this18.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
            // );
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
          } else if (dr == 5) {
            _this18.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 4",
            //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
            // );
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
          } else {
            // console.log("unknown position");
          }
          // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
        });
      } else if (kind == "egg") {
        _this18.input_price = input_price;
        let marketp2peggpriceUSD = _this18.input_price / _this18.current_bnb;
        _this18.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
        _this18.senddata.getdgroyaltymp(_this18.marketp2pdragonID).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          _this18.marketp2pdragonFee = 12 / 100 * Number(input_price);
          let marketp2pdragonprice_actual = Number(input_price) - _this18.marketp2pdragonFee;
          _this18.fee_display = _this18.marketp2pdragonFee;
          _this18.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display = _this18.price_display - _this18.marketp2pdragonRoyalty;
          _this18.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          _this18.fee_royalty = _this18.fee_display + _this18.marketp2pdragonRoyalty;
          _this18.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
          _this18.marketp2pdragonRoyalty2 = 10 / 100 * _this18.marketp2pdragonRoyalty;
          _this18.marketp2pdragonRoyalty3 = 10 / 100 * _this18.marketp2pdragonRoyalty2;
          _this18.marketp2pdragonRoyalty4 = 10 / 100 * _this18.marketp2pdragonRoyalty3;
          _this18.marketp2pdragonRoyalty5 = 10 / 100 * _this18.marketp2pdragonRoyalty4;
          if (dr == 1) {
            _this18.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            _this18.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            _this18.positionRoyalty = 3;
            // console.log("third position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
            // );
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
          } else if (dr == 4) {
            _this18.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
            // );
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
          } else if (dr == 5) {
            _this18.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 4",
            //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
            // );
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
          } else {
            // console.log("unknown position");
          }
          // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
        });
      } else if (kind == "battery") {
        _this18.input_price = input_price;
        let marketp2pbatterypriceUSD = _this18.input_price / _this18.current_bnb;
        _this18.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
      }
    })();
  }
  onStockChange(input_stock) {
    var _this19 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.input_stock = input_stock;
      let marketp2pfoodpriceBNB = _this19.current_bnb * _this19.input_price * _this19.input_stock;
      _this19.marketp2pfoodpriceBNB = marketp2pfoodpriceBNB.toFixed(2);
      let marketp2pfoodpriceUSD = _this19.input_price * _this19.input_stock;
      _this19.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
    })();
  }
  myRange(demo) {
    this.rangeValue = demo;
    // console.log(demo);
  }

  typeBid(kind) {
    let selectedBid = kind;
    if (selectedBid == "1") {
      this.selectedBid = "Free";
      // console.log(this.selectedBid)
    } else if (selectedBid == "2") {
      this.selectedBid = "Step";
      // console.log(this.selectedBid)
    }
  }
  // DRAGON
  sellNowDragon(marketp2pdragonDocId) {
    var _this20 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Dragon
      let crd = JSON.stringify({
        ObjectId: Number(_this20.marketp2pdragonDocId),
        ItemId: _this20.marketp2pdragonID,
        HP: Number(_this20.marketp2pdragonHP),
        Attack: Number(_this20.marketp2pdragonAttack),
        Defense: Number(_this20.marketp2pdragonDefense),
        Exp: Number(_this20.marketp2pdragonExp),
        Level: Number(_this20.marketp2pdragonLevel),
        Rarity: _this20.marketp2pdragonRarity
      });
      _this20.current_data = JSON.parse(crd);
      // console.log(JSON.stringify(this.current_data));
      let now = new Date();
      _this20.latest_date = _this20.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(168, now);
      _this20.timeSell = _this20.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end items on sell", this.timeSell);
      if (_this20.input_price == undefined) {
        const alert = yield _this20.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this20.loadingController.create();
        yield loading.present();
        _this20.fs.collection("Items/" + _this20.globalID + "/Dragons").doc(marketp2pdragonDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this20.move_to_sell_test(marketp2pdragonDocId);
          _this20.senddata.itemsdragontosellmp(marketp2pdragonDocId, _this20.input_price, _this20.timeSell).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  bidNowDragon(marketp2pdragonDocId) {
    var _this21 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      // Build Json String Dragon
      let crd = JSON.stringify({
        ObjectId: Number(_this21.marketp2pdragonDocId),
        ItemId: _this21.marketp2pdragonID,
        Id: _this21.marketp2pdragonImg,
        HP: Number(_this21.marketp2pdragonHP),
        Attack: Number(_this21.marketp2pdragonAttack),
        Defense: Number(_this21.marketp2pdragonDefense),
        Exp: Number(_this21.marketp2pdragonExp),
        Level: Number(_this21.marketp2pdragonLevel),
        Rarity: _this21.marketp2pdragonRarity
      });
      _this21.current_data = JSON.parse(crd);
      // console.log(JSON.stringify(this.current_data));
      let now = new Date();
      _this21.latest_date = _this21.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this21.rangeValue, now);
      _this21.timeBID = _this21.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      if (_this21.input_price == undefined) {
        const alert = yield _this21.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this21.loadingController.create();
        yield loading.present();
        _this21.fs.collection("Items/" + _this21.globalID + "/Dragons").doc(marketp2pdragonDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this21.move_to_auction_test(marketp2pdragonDocId);
          _this21.senddata.itemsdragontobidmp(marketp2pdragonDocId, _this21.input_price, _this21.selectedBid, _this21.timeBID).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  move_to_sell_test(marketp2pdragonDocId) {
    var _this22 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this22.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        _this22.fs.collection("Sell/" + _this22.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
          Id: marketp2pdragonDocId,
          ItemId: _this22.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this22.marketp2pdragonAttack),
            DefensePoint: Number(_this22.marketp2pdragonDefense),
            Exp: Number(_this22.marketp2pdragonExp),
            HP: Number(_this22.marketp2pdragonHP),
            Hunger: Number(_this22.marketp2pdragonHunger),
            Level: Number(_this22.marketp2pdragonLevel),
            MaxHP: Number(_this22.marketp2pdragonMaxHP),
            MaxHunger: Number(_this22.marketp2pdragonMaxHunger)
          },
          price: _this22.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this22.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this22.currentp2p = 0;
        _this22.currentp2powned = 10;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this22.senddata.getselldgUserownedmp(_this22.globalID).subscribe(dataSell => {
          _this22.dragonsowned = JSON.parse(dataSell);
          _this22.marketp2pdragonID = _this22.dragonsowned.ItemId;
          _this22.marketp2pdragonLength = _this22.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in _this22.dragonsowned) {
            if (_this22.dragonsowned[i].imgbackground == "exists" && _this22.dragonsowned[i].statusbayarbackground == "paid") {
              _this22.senddata.getallbackgroundmp(_this22.globalID).subscribe(dataSell => {
                _this22.dragonsownedbg = JSON.parse(dataSell);
                _this22.marketp2pdragonBG = _this22.dragonsownedbg.imgBg;
                _this22.marketp2pdragonIdBG = _this22.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        _this22.senddata.getselldgUsermp(_this22.globalID).subscribe(dataSell => {
          _this22.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test(marketp2pdragonDocId) {
    var _this23 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this23.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        _this23.fs.collection("Bid/" + _this23.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
          Id: marketp2pdragonDocId,
          ItemId: _this23.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this23.marketp2pdragonAttack),
            DefensePoint: Number(_this23.marketp2pdragonDefense),
            Exp: Number(_this23.marketp2pdragonExp),
            HP: Number(_this23.marketp2pdragonHP),
            Hunger: Number(_this23.marketp2pdragonHunger),
            Level: Number(_this23.marketp2pdragonLevel),
            MaxHP: Number(_this23.marketp2pdragonMaxHP),
            MaxHunger: Number(_this23.marketp2pdragonMaxHunger)
          },
          PriceNow: Number(_this23.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this23.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this23.currentp2p = 0;
        _this23.currentp2powned = 10;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this23.senddata.getselldgUserownedmp(_this23.globalID).subscribe(dataSell => {
          _this23.dragonsowned = JSON.parse(dataSell);
          _this23.marketp2pdragonID = _this23.dragonsowned.ItemId;
          _this23.marketp2pdragonLength = _this23.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in _this23.dragonsowned) {
            if (_this23.dragonsowned[i].imgbackground == "exists" && _this23.dragonsowned[i].statusbayarbackground == "paid") {
              _this23.senddata.getallbackgroundmp(_this23.globalID).subscribe(dataSell => {
                _this23.dragonsownedbg = JSON.parse(dataSell);
                _this23.marketp2pdragonBG = _this23.dragonsownedbg.imgBg;
                _this23.marketp2pdragonIdBG = _this23.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        _this23.senddata.getselldgUsermp(_this23.globalID).subscribe(dataSell => {
          _this23.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        }, error => {});
        _this23.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // EGG
  sellNowEgg(marketp2peggDocId) {
    var _this24 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Egg
      let crd = JSON.stringify({
        DocId: marketp2peggDocId,
        ItemId: _this24.marketp2peggID,
        price: _this24.input_price
      });
      _this24.current_data = JSON.parse(crd);
      // console.log(this.current_data);
      if (_this24.input_price == undefined) {
        const alert = yield _this24.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        _this24.fs.collection("Items/" + _this24.globalID + "/Eggs").doc(marketp2peggDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this24.move_to_sell_test_egg(marketp2peggDocId);
          _this24.senddata.itemseggtosellmp(marketp2peggDocId, _this24.input_price).subscribe(dataE => {
            // console.log(dataE);
          }, error => {});
        });
      }
    })();
  }
  bidNowEgg(marketp2peggDocId) {
    var _this25 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      let now = new Date();
      _this25.latest_date = _this25.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this25.rangeValue, now);
      _this25.timeBID = _this25.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      // Create difference time of bid
      const diffInMs = Date.parse(_this25.timeBID) - Date.parse(_this25.latest_date);
      const diffInHours = Math.ceil(diffInMs / 1000 / 60 / 60);
      // console.log("diffInHours", diffInHours);
      if (_this25.input_price == undefined) {
        const alert = yield _this25.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this25.loadingController.create();
        yield loading.present();
        _this25.fs.collection("Items/" + _this25.globalID + "/Eggs").doc(marketp2peggDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this25.move_to_auction_test_egg(marketp2peggDocId);
          _this25.senddata.itemseggtobidmp(marketp2peggDocId, _this25.input_price, _this25.selectedBid, _this25.timeBID, diffInHours.toString()).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
        _this25.createStopWatch(marketp2peggDocId);
      }
    })();
  }
  createStopWatch(marketp2peggDocId) {
    var _this26 = this;
    setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.secondsServer++;
      if (_this26.secondsServer >= 60) {
        _this26.minutesServer++;
        _this26.secondsServer = 0;
      }
      if (_this26.minutesServer >= 60) {
        _this26.hoursServer++;
        _this26.minutesServer = 0;
      }
      _this26.senddata.hmsBIDmp(marketp2peggDocId, _this26.hoursServer.toString(), _this26.minutesServer.toString(), _this26.secondsServer.toString()).subscribe(res => {});
    }), 1000);
  }
  move_to_sell_test_egg(marketp2peggDocId) {
    var _this27 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this27.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "egg") {
        _this27.fs.collection("Sell/" + _this27.globalID + "/Eggs").doc(marketp2peggDocId).set({
          Id: marketp2peggDocId,
          ItemId: _this27.marketp2peggID,
          PriceNow: Number(_this27.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this27.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this27.currentp2p = 0;
        _this27.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this27.senddata.getselleggUserownedmp(_this27.globalID).subscribe(dataSell => {
          _this27.eggsHigh = JSON.parse(dataSell);
          _this27.marketp2peggLength = _this27.eggsHigh.length;
        }, error => {});
        _this27.senddata.getselleggUserownedmp(_this27.globalID).subscribe(dataSell => {
          _this27.sorteggsowned = JSON.parse(dataSell);
        }, error => {});
        _this27.senddata.getselleggUsermp(_this27.globalID).subscribe(dataSell => {
          _this27.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test_egg(marketp2peggDocId) {
    var _this28 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this28.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "egg") {
        _this28.fs.collection("Bid/" + _this28.globalID + "/Eggs").doc(marketp2peggDocId).set({
          Id: marketp2peggDocId,
          ItemId: _this28.marketp2peggID,
          price: _this28.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this28.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this28.currentp2p = 0;
        _this28.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this28.senddata.getselleggUserownedmp(_this28.globalID).subscribe(dataSell => {
          _this28.eggsHigh = JSON.parse(dataSell);
          _this28.marketp2peggLength = _this28.eggsHigh.length;
        }, error => {});
        _this28.senddata.getselleggUserownedmp(_this28.globalID).subscribe(dataSell => {
          _this28.sorteggsowned = JSON.parse(dataSell);
        }, error => {});
        _this28.senddata.getselleggUsermp(_this28.globalID).subscribe(dataSell => {
          _this28.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        _this28.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // BATTERY
  sellNowBattery(marketp2pbatteryDocId) {
    var _this29 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Egg
      let crd = JSON.stringify({
        DocId: marketp2pbatteryDocId,
        ItemId: _this29.marketp2pbatteryID,
        price: _this29.input_price
      });
      _this29.current_data = JSON.parse(crd);
      console.log(_this29.input_price);
      if (_this29.input_price == undefined) {
        const alert = yield _this29.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        _this29.fs.collection('Items/' + _this29.globalID + '/Batteries').doc(marketp2pbatteryDocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(-1)
        }).then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this29.move_to_sell_test_battery(marketp2pbatteryDocId);
          _this29.senddata.itemsbatterytosellmp(marketp2pbatteryDocId, _this29.input_price).subscribe(dataE => {
            // console.log(dataE);
          }, error => {});
        });
      }
    })();
  }
  bidNowBattery(marketp2pbatteryDocId) {
    var _this30 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      let now = new Date();
      _this30.latest_date = _this30.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this30.rangeValue, now);
      _this30.timeBID = _this30.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      if (_this30.input_price == undefined) {
        const alert = yield _this30.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this30.loadingController.create();
        yield loading.present();
        _this30.fs.collection("Items/" + _this30.globalID + "/Batteries").doc(marketp2pbatteryDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this30.move_to_auction_test_battery(marketp2pbatteryDocId);
          _this30.senddata.itemsbatterytobidmp(marketp2pbatteryDocId, _this30.input_price, _this30.selectedBid, _this30.timeBID).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  move_to_sell_test_battery(marketp2pbatteryDocId) {
    var _this31 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this31.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "battery") {
        _this31.fs.collection("Sell/" + _this31.globalID + "/Batteries").doc(marketp2pbatteryDocId).set({
          Id: marketp2pbatteryDocId,
          ItemId: _this31.marketp2pbatteryID,
          price: Number(_this31.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this31.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this31.senddata.getsellbatteryUserownedmp(_this31.globalID).subscribe(dataSell => {
          _this31.batteriesHigh = JSON.parse(dataSell);
        }, error => {});
        _this31.senddata.getsellbatteryUserallmp(_this31.globalID).subscribe(dataSell => {
          _this31.sortbatteriesowned = JSON.parse(dataSell);
          _this31.sortbatteriesownedLength = _this31.sortbatteriesowned.lengthBattery;
          _this31.fs.collection("Players/" + _this31.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref15 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this31.usedEgg = dataIncubator[0].EggItemId;
              _this31.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this31.latest_date = _this31.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this31.timeIncubator = _this31.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this31.senddata.itemseggtoincubatormp(_this31.usedEgg, _this31.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this31.hatchingDataEgg = JSON.parse(dataE);
                  _this31.senddata.getselleggUserownedmp(_this31.globalID).subscribe(dataSell => {
                    _this31.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this31.senddata.itemsbatterytoincubatormp(_this31.usedBattery, _this31.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this31.hatchingDataBattery = JSON.parse(dataE);
                  _this31.senddata.getsellbatteryUserownedmp(_this31.globalID).subscribe(dataSell => {
                    _this31.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this31.hatching = true;
              }
            });
            return function (_x13) {
              return _ref15.apply(this, arguments);
            };
          }());
        }, error => {});
        _this31.senddata.getsellbatteryUserallmp(_this31.globalID).subscribe(dataSell => {
          _this31.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test_battery(marketp2pbatteryDocId) {
    var _this32 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this32.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "battery") {
        _this32.fs.collection("Bid/" + _this32.globalID + "/Batteries").doc(marketp2pbatteryDocId).set({
          Id: marketp2pbatteryDocId,
          ItemId: _this32.marketp2pbatteryID,
          price: _this32.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this32.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this32.currentp2p = 0;
        _this32.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this32.senddata.getsellbatteryUserownedmp(_this32.globalID).subscribe(dataSell => {
          _this32.batteriesHigh = JSON.parse(dataSell);
        }, error => {});
        _this32.senddata.getsellbatteryUserownedmp(_this32.globalID).subscribe(dataSell => {
          _this32.sortbatteriesowned = JSON.parse(dataSell);
        }, error => {});
        _this32.senddata.getsellbatteryUserallmp(_this32.globalID).subscribe(dataSell => {
          _this32.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        _this32.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // FOOD
  sellNowFood(qty, marketp2pfoodpriceBNB) {
    var _this33 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let kind = localStorage.getItem("kind");
      let Id = "b037f3149945dbc52384d5242e746106";
      let HVP = 24;
      let food = qty;
      let i = 0;
      // for (i; i < food; i++) {
      var itemid1 = _this33.newTime() + _this33.globalID;
      _this33.fs.collection("Sell").doc(_this33.globalID).update({
        FoodGroup: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          ItemId: _this33.marketp2pfoodOID,
          HVP: 24,
          Qty: food,
          price: marketp2pfoodpriceBNB,
          owner: _this33.globalID
        }))
      }).then(() => {});
      // console.log(this.marketp2pfoodOID);
      // update stok food
      _this33.senddata.getsellfoodUserqtymp(_this33.globalID, qty).subscribe(data => {
        let getSell = JSON.parse(data);
        // insert ke tabel sell
        _this33.senddata.setsellfoodUsermp(_this33.globalID, getSell.iditemsFood, qty, marketp2pfoodpriceBNB, HVP.toString(), _this33.marketp2pfoodOID, _this33.globalID).subscribe(dataSellFood => {
          _this33.iditemssellFood = dataSellFood;
        });
      });
      _this33.fs.collection('Items/' + _this33.globalID + '/Foods').doc(_this33.marketp2pfoodOID).update({
        Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(-qty),
        Id: _this33.marketp2pfoodOID,
        ItemId: 'ITM14'
      }).then(() => {
        console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      // }
      const alert = yield _this33.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"]
      });
      yield alert.present();
      _this33.selectedBid = "-";
    })();
  }
  favorite_item(ItemId) {
    var _this34 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this34.loadingController.create();
      yield loading.present();
      _this34.senddata.favoritedmp(_this34.globalID, ItemId).subscribe( /*#__PURE__*/function () {
        var _ref16 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this34.senddata.getselldgUserownedmp(_this34.globalID).subscribe(dataSell => {
            _this34.dragonsowned = JSON.parse(dataSell);
            _this34.marketp2pdragonLength = _this34.dragonsowned.length;
            // console.log(this.dragonsowned);
          }, error => {});
          loading.dismiss();
        });
        return function (_x14) {
          return _ref16.apply(this, arguments);
        };
      }(), error => {});
      // console.log(ItemId);
    })();
  }

  checkonsale() {
    this.senddata.getselldgUsermp(this.globalID).subscribe(dataSell => {
      this.dragons = JSON.parse(dataSell);
      // console.log(this.dragons)
    }, error => {});
    this.senddata.getselldgUsermp(this.globalID).subscribe(dataSell => {
      this.eggsHigh = JSON.parse(dataSell);
      // console.log(this.eggsHigh)
    }, error => {});
  }
  openDialog(msg) {}
  alertWithdraw() {
    var _this35 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this35.alertController.create({
        header: "Congratulation !",
        message: "Now you can Withdraw.",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  withdraw() {
    var _this36 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this36.alertController.create({
        header: "Success !",
        message: "Thanks for withdraw.",
        buttons: ["OK"]
      });
      yield alert.present();
      _this36.percentRoyalty = 0;
      _this36.valueRoyalty = 0;
    })();
  }
  delistDragon(marketp2pdragonDocId, marketp2pdragonID) {
    this.fs.collection("Sell/" + this.globalID + "/Dragons").doc(marketp2pdragonDocId).delete().then(() => {
      // this.current_data.price = this.input_price;
      // this.current_data.owner = this.globalID;
      this.move_to_item_test_dragon(marketp2pdragonDocId, marketp2pdragonID);
      this.senddata.selldragontoitemsmp(this.globalID, marketp2pdragonDocId).subscribe(dataE => {
        // console.log(dataE);
      }, error => {});
    });
  }
  delistEgg(marketp2peggDocId) {
    this.fs.collection("Sell/" + this.globalID + "/Eggs").doc(marketp2peggDocId).delete().then(() => {
      // this.current_data.price = this.input_price;
      // this.current_data.owner = this.globalID;
      this.move_to_item_test_egg(marketp2peggDocId);
      this.senddata.selleggtoitemsmp(this.globalID, marketp2peggDocId).subscribe(dataE => {
        // console.log(dataE);
      }, error => {});
    });
  }
  move_to_item_test_dragon(marketp2pdragonDocId, marketp2pdragonID) {
    var _this37 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this37.fs.collection("Items/" + _this37.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
        Id: marketp2pdragonDocId,
        ItemId: marketp2pdragonID,
        Attributes: {
          AttackPoint: Number(_this37.marketp2pdragonAttack),
          DefensePoint: Number(_this37.marketp2pdragonDefense),
          Exp: Number(_this37.marketp2pdragonExp),
          HP: Number(_this37.marketp2pdragonHP),
          Hunger: Number(_this37.marketp2pdragonHunger),
          Level: Number(_this37.marketp2pdragonLevel),
          MaxHP: Number(_this37.marketp2pdragonMaxHP),
          MaxHunger: Number(_this37.marketp2pdragonMaxHunger)
        }
      }).then(() => {
        // console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      const alert = yield _this37.alertController.create({
        header: "Success",
        message: "Your item delisted from market",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  move_to_item_test_egg(marketp2peggDocId) {
    var _this38 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this38.fs.collection("Items/" + _this38.globalID + "/Eggs").doc(marketp2peggDocId).set({
        Id: marketp2peggDocId,
        ItemId: _this38.marketp2peggID
      }).then(() => {
        // console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      const alert = yield _this38.alertController.create({
        header: "Success",
        message: "Your item delisted from market",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  delistBattery(marketp2pbatteryDocId) {}
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
  airdropTokens(tokenContractAddress, airdropAmount, addresses, web3) {
    var _this39 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this39.provider = yield web3Modal.connect();
      _this39.getcurrentoragon();
      yield _this39.getPaymentCount();
      _this39.web3js = new (web3__WEBPACK_IMPORTED_MODULE_10___default())(_this39.provider); // create web3 instance
      // console.log(this.web3js);
      _this39.accounts = yield _this39.web3js.eth.getAccounts(console.log);
      const tokenContract = new _this39.web3js.eth.Contract(_this39.tokenABI, tokenContractAddress);
      const gasPrice = yield _this39.web3js.eth.getGasPrice();
      const gasEstimate = yield tokenContract.methods.airdropTokens(addresses, airdropAmount).estimateGas();
      const tx = yield tokenContract.methods.airdropTokens(addresses, airdropAmount).send({
        from: "0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd",
        gas: gasEstimate,
        gasPrice
      });
      console.log('Transaction hash:', tx.transactionHash);
    })();
  }
  getselljaketsUserownedqrcodemp(DocId) {
    var _this40 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this40.fs.collection("Items/" + _this40.globalID + "/Fashions").doc(DocId).valueChanges().subscribe( /*#__PURE__*/function () {
        var _ref17 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFashions) {
          console.log("datanewFashions", datanewFashions);
          _this40.detailJaket = datanewFashions;
          _this40.qrcodeJaket = _this40.detailJaket.QrCodeUrl;
          _this40.nameJaket = _this40.detailJaket.ItemId;
          _this40.ClaimmedJaket = _this40.detailJaket.QrCodeData.Claimmed;
          console.log(_this40.ClaimmedJaket);
        });
        return function (_x15) {
          return _ref17.apply(this, arguments);
        };
      }());
      // this.senddata.getselljaketsUserownedqrcodemp(DocId).subscribe(
      //   (dataSell: any) => {
      //     this.detailJaket = JSON.parse(dataSell);
      //     this.qrcodeJaket = this.detailJaket.qrcode;
      //     this.nameJaket = this.detailJaket.name;
      //     this.ClaimmedJaket = this.detailJaket.Claimmed;
      //     console.log(this.detailJaket)
      //   },
      //   (error: any) => {}
      // );
    })();
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_9__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_6__.SendData
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
}]), (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "propDecorators", {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInfiniteScroll]
  }]
}), _class);
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: "app-profile",
  template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewEncapsulation.None,
  styles: [(_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], ProfilePage);


/***/ }),

/***/ 680:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
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

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\r\n  <!-- Header -->\r\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\r\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\r\n      <!-- Logo -->\r\n      <a color=\"dark\" href=\"/tabs/profile\">\r\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n      </a>\r\n      <!-- Desktop Menu Actions -->\r\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\r\n          <!-- Mobile Logo / Menu Close -->\r\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\r\n            <!-- Mobile Logo -->\r\n            <a color=\"dark\" href=\"/tabs/profile\">\r\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n            </a>\r\n          </div>\r\n          <!-- Primary Nav -->\r\n          <nav class=\"navbar w-full\">\r\n            <ul class=\"flex flex-col lg:flex-row\">\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/profile\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\r\n                  <li>\r\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- <li>\r\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\r\n                    </a>\r\n                  </li> -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <!-- Mobile Connect Wallet / Socials -->\r\n          <!-- Actions -->\r\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\r\n            <!-- hatching -->\r\n            <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n            </button> -->\r\n\r\n            <!-- cart -->\r\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <g>\r\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                </g>\r\n              </svg>\r\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n            </button>\r\n            \r\n            <!-- Profile -->\r\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n                <ion-icon name=\"log-in-outline\"></ion-icon>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                  </svg>\r\n                </button>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                  <div>\r\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                    <div class=\"flex items-center mt-2\">\r\n                      <!-- Default Progressbar with 50 percent -->\r\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n                </a>\r\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Mobile Menu Actions -->\r\n        <div class=\"ml-auto flex lg:hidden\">\r\n          <!-- hatching -->\r\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n          </button> -->\r\n\r\n          <!-- cart -->\r\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n              <g>\r\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n              </g>\r\n            </svg>\r\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n          </button>\r\n          \r\n          <!-- Profile -->            \r\n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n              <ion-icon name=\"log-in-outline\"></ion-icon>\r\n            </button>\r\n          </div>\r\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n              </svg>\r\n            </button>\r\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f0b90b\">\r\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                <div>\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                  <div class=\"flex items-center mt-2\">\r\n                    <!-- Default Progressbar with 50 percent -->\r\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n              </a>\r\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </header>\r\n  \r\n  <main>\r\n    <!-- Banner -->\r\n    <div class=\"relative\">\r\n      <img src=\"assets/img/user/banner.png\" alt=\"banner\" class=\"h-[18.75rem] object-cover\" />\r\n    </div>\r\n    <!-- end banner -->\r\n    <!-- Profile -->\r\n    <section class=\"dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28\">\r\n      <!-- Avatar -->\r\n      <div class=\"absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center\">\r\n        <figure class=\"relative\">\r\n          <img src=\"assets/img/user/1user_avatar.gif\" alt=\"collection avatar\" class=\"dark:border-jacarta-600 rounded-xl border-[5px] border-white\" />\r\n          <div class=\"dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n              <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n            </svg>\r\n          </div>\r\n        </figure>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"text-center\">\r\n          <h2 class=\"font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white\">{{username}}</h2>\r\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4\">\r\n            <span data-tippy-content=\"ETH\">\r\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                <g fill=\"#f3ba2f\">\r\n                  <style type=\"text/css\">\r\n                    .st0{fill:#00FF99;}\r\n                    .st1{fill:#10B981;}\r\n                    .st2{fill:#0D7F53;}\r\n                    .st3{fill:#E6E6E6;}\r\n                  </style>\r\n                  <title>point</title>\r\n                  <circle class=\"st0\" cx=\"894.4\" cy=\"896.8\" r=\"894\"/>\r\n                  <circle class=\"st1\" cx=\"894.4\" cy=\"896.8\" r=\"758.7\"/>\r\n                  <path class=\"st2\" d=\"M1291.4,249.2c78.2,122,119.6,263.8,119.4,408.7c0,419-339.7,758.7-758.7,758.7\r\n                    c-140.2,0.2-277.6-38.6-397-112.1c134.8,210.5,370.8,350,639.4,350c419,0,758.7-339.7,758.7-758.7\r\n                    C1653.2,622.4,1508.4,382.7,1291.4,249.2z\"/>\r\n                  <path class=\"st3\" d=\"M531.7,1490.2c-70.9-110.6-108.5-239.3-108.3-370.7c0-380.1,308.1-688.2,688.2-688.2\r\n                    c127.1-0.2,251.8,35,360.1,101.7c-122.3-191-336.3-317.5-579.9-317.5c-380.1,0-688.2,308.1-688.2,688.2\r\n                    C203.6,1151.7,334.9,1369.1,531.7,1490.2z\"/>\r\n                </g>\r\n              </svg>\r\n            </span>\r\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\r\n              <span>{{points}} Point</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4 ml-2\">\r\n            <span data-tippy-content=\"ETH\">\r\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                <g fill=\"#f3ba2f\">\r\n                  <style type=\"text/css\">\r\n                    .st4{fill:#CC9900;}\r\n                    .st5{fill:#0D7F53;}\r\n                    .st6{fill:#10B981;}\r\n                    .st7{clip-path:url(#SVGID_2_);}\r\n                    .st8{fill:none;stroke:#00FF99;stroke-width:80;stroke-miterlimit:10;}\r\n                  </style>\r\n                  <title>gatcha-box</title>\r\n                  <path class=\"st4\" d=\"M507.5,430.5C436.5,430.5,379,488,379,559c0,0,0,0,0,0v207.5l1-0.1c1.6-0.1,3.2,0,4.7,0.2h434.2V430.5H507.5z\"\r\n                    />\r\n                  <path class=\"st5\" d=\"M1396.7,1666c98.9,0,179-57.5,179-128.5v-624H962.6V1666H1396.7z\"/>\r\n                  <path class=\"st5\" d=\"M202.3,1537.6c0,71,80.6,128.5,180.1,128.5h436.6V913.6H202.3V1537.6z\"/>\r\n                  <path class=\"st4\" d=\"M962.6,766.7h439.9V559c0-70.9-57.5-128.5-128.4-128.5c0,0-0.1,0-0.1,0H962.6V766.7\"/>\r\n                  <g>\r\n                    <path class=\"st6\" d=\"M785.3,754.9c0.4-24.5,0.6-49,0.8-73.5c0.2-43.9,0.2-87.8,0.2-131.7c0-21.9,0.1-43.9,0-65.8\r\n                      c-0.1-17.8-2.5-36,1.7-53.5H220.6c-92.8,0-168.1,75.3-168.1,168.1c0,0,0,0,0,0l0,0c0,92.8,75.3,168.1,168.1,168.1h567.1\r\n                      C786,763,785.2,759,785.3,754.9z\"/>\r\n                    <rect x=\"740.6\" y=\"430.5\" class=\"st6\" width=\"78.3\" height=\"336.2\"/>\r\n                  </g>\r\n                  <g>\r\n                    <path class=\"st6\" d=\"M1561,430.5H996.2c0,0.1,0,0.3,0,0.4c3.7,32.7,3.9,65.5,3.8,98.4c2.3,79.1,2.9,158.2,2.9,237.4h558\r\n                      c92.8,0,168.1-75.3,168.1-168.1l0,0C1729,505.8,1653.8,430.5,1561,430.5z\"/>\r\n                    <rect x=\"962.6\" y=\"430.5\" class=\"st6\" width=\"48.7\" height=\"336.2\"/>\r\n                  </g>\r\n                  <g>\r\n                    <defs>\r\n                      <rect id=\"SVGID_1_\" x=\"254\" y=\"114\" width=\"1321.7\" height=\"316.5\"/>\r\n                    </defs>\r\n                    <clipPath id=\"SVGID_2_\">\r\n                      <use xlink:href=\"#SVGID_1_\"  style=\"overflow:visible;\"/>\r\n                    </clipPath>\r\n                    <g class=\"st7\">\r\n                      \r\n                        <ellipse transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -88.3685 558.8589)\" class=\"st8\" cx=\"630.4\" cy=\"386.1\" rx=\"219\" ry=\"240.2\"/>\r\n                      \r\n                        <ellipse transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 64.0444 926.8279)\" class=\"st8\" cx=\"1150.8\" cy=\"386.1\" rx=\"240.2\" ry=\"219\"/>\r\n                    </g>\r\n                  </g>\r\n                </g>\r\n              </svg>\r\n            </span>\r\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\r\n              <span>{{count_roulette}} Gatcha</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4 ml-2\">\r\n            <span data-tippy-content=\"ETH\">\r\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                <g fill=\"#f3ba2f\">\r\n                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                </g>\r\n              </svg>\r\n            </span>\r\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\r\n              <span>{{wallets}}</span>\r\n            </button>\r\n          </div>\r\n          <p class=\"dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg\"> {{email}} </p>\r\n          <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your royalty progress {{percentRoyalty}}%</span>\r\n          <div class=\"flex items-center mt-2\">\r\n            <!-- Default Progressbar with 50 percent -->\r\n            <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n          </div>\r\n          <!-- <ion-button class=\"mt-2\" (click)=\"airdropTokens('0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd', '0.001', '0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd')\" size=\"small\">Airdrop Token</ion-button> -->\r\n          <ion-button class=\"mt-2\" *ngIf=\"percentRoyalty == 0\" size=\"small\" disabled>Withdraw</ion-button>\r\n          <ion-button class=\"mt-2\" *ngIf=\"percentRoyalty >= 100\" (click)=\"withdraw()\" size=\"small\">Withdraw</ion-button>\r\n          <br>\r\n          <!-- <span class=\"text-jacarta-400\">Link Refferal <a class=\"text-green\" [routerLink]=\"['/tabs/profile']\">https://marketplace.oragon.network/tabs/register/12345</a> </span> -->\r\n          <div class=\"mt-6 flex items-center justify-center space-x-2.5\">\r\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\r\n              <div class=\"js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0\" role=\"button\" data-tippy-content=\"Favorite\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4\">\r\n                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                  <path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\" />\r\n                </svg>\r\n              </div>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\r\n              <a href=\"#\" class=\"dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm\" role=\"button\" id=\"collectionShare\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" data-tippy-content=\"Share\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z\" />\r\n                </svg>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"collectionShare\">\r\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"facebook\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                    <path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path>\r\n                  </svg>\r\n                  <span class=\"mt-1 inline-block\">Facebook</span>\r\n                </a>\r\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                    <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\r\n                  </svg>\r\n                  <span class=\"mt-1 inline-block\">Twitter</span>\r\n                </a>\r\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"discord\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\r\n                    <path d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"></path>\r\n                  </svg>\r\n                  <span class=\"mt-1 inline-block\">Discord</span>\r\n                </a>\r\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z\" />\r\n                  </svg>\r\n                  <span class=\"mt-1 inline-block\">Email</span>\r\n                </a>\r\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z\" />\r\n                  </svg>\r\n                  <span class=\"mt-1 inline-block\">Copy</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\r\n              <a href=\"#\" class=\"dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm\" role=\"button\" id=\"collectionActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                <svg width=\"16\" height=\"4\" viewBox=\"0 0 16 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dark:fill-jacarta-200 fill-jacarta-500\">\r\n                  <circle cx=\"2\" cy=\"2\" r=\"2\" />\r\n                  <circle cx=\"8\" cy=\"2\" r=\"2\" />\r\n                  <circle cx=\"14\" cy=\"2\" r=\"2\" />\r\n                </svg>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"collectionActions\">\r\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> New bid </button>\r\n                <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" />\r\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Refresh Metadata </button>\r\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Share </button>\r\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Report </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- end profile -->\r\n\r\n    <!-- Collection -->\r\n    <section class=\"relative\">\r\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\r\n        <img src=\"assets/img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\r\n      </picture>\r\n      <div class=\"container\">\r\n        <!-- Tabs Nav -->\r\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(10)\" class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"owned-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#owned\" type=\"button\" role=\"tab\" aria-controls=\"owned\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Owned</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-fnft-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-fnft\" type=\"button\" role=\"tab\" aria-controls=\"on-fnft\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">FNFT <span class=\"font-display text-base text-green\">new</span></span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(20)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-sale-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-sale\" type=\"button\" role=\"tab\" aria-controls=\"on-sale\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">On Sale</span>\r\n            </button>\r\n          </li>\r\n          <!-- <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(30)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-bid-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-bid\" type=\"button\" role=\"tab\" aria-controls=\"on-bid\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">On BID</span>\r\n            </button>\r\n          </li> -->\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(80)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"bidhistory-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bidhistory\" type=\"button\" role=\"tab\" aria-controls=\"bidhistory\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">BID History</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(50)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"royaties-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#royaties\" type=\"button\" role=\"tab\" aria-controls=\"royaties\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Royalties</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(60)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"trxhistroy-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#trxhistroy\" type=\"button\" role=\"tab\" aria-controls=\"trxhistroy\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Transction History</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"tab(70)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"point-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#point\" type=\"button\" role=\"tab\" aria-controls=\"point\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Point History</span>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <!-- Owned Tab -->\r\n          <div class=\"tab-pane fade show active\" id=\"owned\" role=\"tabpanel\" aria-labelledby=\"owned-tab\">\r\n            <!-- Filters -->\r\n              <div class=\"mb-8 flex flex-wrap items-center justify-between\">\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <!-- Category -->\r\n                  <div class=\"my-1 mr-2.5\">\r\n                    <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                      </svg>\r\n                      <span>Category</span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                      <ul class=\"flex flex-col flex-wrap\">\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(11)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragons </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pdragonLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(20)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(30)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(40)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Foods </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- end filters -->\r\n            <!-- Grid -->\r\n              <!-- Dragons -->\r\n                <div *ngIf=\"currentp2powned == 10\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of dragonsowned\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <!--  -->\r\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                            <span data-tippy-content=\"ETH\">\r\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                                <g fill=\"#f3ba2f\">\r\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                                </g>\r\n                              </svg>\r\n                            </span>\r\n                            <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <!-- <button (click)=\"setdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowDragonModal\"> Sell </button>\r\n                          <button (click)=\"setdgbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowDragonModal\"> Auction </button> -->\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"currentp2powned == 11\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of sortdragonsowned\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <!--  -->\r\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,13)}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId.substr(0,13)}}</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                            <span data-tippy-content=\"ETH\">\r\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                                <g fill=\"#f3ba2f\">\r\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                                </g>\r\n                              </svg>\r\n                            </span>\r\n                            <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <!-- <button (click)=\"setdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowDragonModal\"> Sell </button>\r\n                          <button (click)=\"setdgbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowDragonModal\"> Auction </button> -->\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- dragons -->\r\n              <!-- Eggs -->\r\n                <div *ngIf=\"currentp2powned == 20\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of sorteggsowned\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          \r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.uid}}...</span></p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 *ngIf=\"usedEgg == datas.DocId\" class=\"text-green mr-1\">Egg in use</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\" *ngIf=\"usedEgg != datas.DocId\">\r\n                          <!-- <button (click)=\"seteggbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowEggModal\"> Sell </button> -->\r\n                          <!-- <button (click)=\"seteggbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowEggModal\"> Auction </button> -->\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- eggs -->\r\n              <!-- Batteries -->\r\n                <div *ngIf=\"currentp2powned == 30\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of sortbatteriesowned\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span></p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 *ngIf=\"usedBattery == datas.DocId\" class=\"text-green mr-1\">1 of {{datas.lengthBattery}} in use</h4>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.DocId != usedBattery;else btnsellbattery\">\r\n                            <!-- <button (click)=\"setbatterybuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowBatteryModal\"> Sell </button> -->\r\n                            <!-- <button (click)=\"setbatterybiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowBatteryModal\"> Auction </button> -->\r\n                          </span>\r\n                          <ng-template #btnsellbattery>\r\n                            <span *ngIf=\"datas.lengthBattery > 1\">\r\n                              <!-- <button (click)=\"setbatterybuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowBatteryModal\"> Sell </button> -->\r\n                              <!-- <button (click)=\"setbatterybiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowBatteryModal\"> Auction </button> -->\r\n                            </span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- batteries -->\r\n              <!-- Foods -->\r\n                <div *ngIf=\"currentp2powned == 40\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div>\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <img src=\"assets/img/food.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n\r\n                          \r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{marketp2pfoodLength}} Foods</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Food Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{marketp2pfoodDate}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{marketp2pfoodowner}}...</span></p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">${{marketp2pfoodpriceUSD}} USD / Item</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <!-- <a (click)=\"setfoodbuydetail()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowFoodModal\">Sell Now</a> -->\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- foods -->\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end owned tab -->\r\n\r\n          <!-- On Sale Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"on-sale\" role=\"tabpanel\" aria-labelledby=\"on-sale-tab\">\r\n            <!-- Filters -->\r\n              <div class=\"mb-8 flex flex-wrap items-center justify-between\">\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <!-- Category -->\r\n                  <div class=\"my-1 mr-2.5\">\r\n                    <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                      </svg>\r\n                      <span>Category</span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                      <ul class=\"flex flex-col flex-wrap\">\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(11)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragons </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pdragonsellLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(20)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggsellLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(30)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li>\r\n                          <div style=\"padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(40)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Foods </a></span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- end filters -->\r\n            <!-- Grid -->\r\n              <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem;padding-bottom: 2vh;\">\r\n                <div *ngFor=\"let datas of dragonsHigh\">\r\n                  <article>\r\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                        <!--  -->\r\n                        <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                          <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                          <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                          <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                          <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                          <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                          <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                              </svg>\r\n                            </span>\r\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                            <ng-template #favorited>\r\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                      </figure>\r\n                      <div class=\"mt-7 flex items-center justify-between\">\r\n                        <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\r\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                          </a>\r\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                              <div class=\"mb-2 flex items-center justify-between\">\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                              </div>\r\n                            </div>\r\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                              <div class=\"mb-2 flex items-center justify-between\">\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                              </div>\r\n                            </div>\r\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                              <div class=\"mb-2 flex items-center justify-between\">\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-2 text-sm\">\r\n                        <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                          <span data-tippy-content=\"ETH\">\r\n                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                              <g fill=\"#f3ba2f\">\r\n                                <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                              </g>\r\n                            </svg>\r\n                          </span>\r\n                          <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"mt-8 flex items-center justify-between\">\r\n                        <a (click)=\"delistDragon(datas.DocId, datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\r\n                      </div>\r\n                    </div>\r\n                  </article>\r\n                </div>\r\n                <div *ngFor=\"let datas of eggsHigh\">\r\n                  <article>\r\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                        <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      </figure>\r\n                      <div class=\"mt-7 flex items-center justify-between\">\r\n                        <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\r\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                          </a>\r\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\r\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-2 text-sm\">\r\n                        <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                      </div>\r\n                      <div class=\"mt-8 flex items-center justify-between\">\r\n                        <a (click)=\"delistEgg(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\r\n                      </div>\r\n                    </div>\r\n                  </article>\r\n                </div>\r\n                <div *ngFor=\"let datas of batteriesHigh\">\r\n                  <article>\r\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                        <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <!--  -->\r\n                        <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      </figure>\r\n                      <div class=\"mt-7 flex items-center justify-between\">\r\n                        <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                        <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                          </a>\r\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\r\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"mt-2 text-sm\">\r\n                        <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                      </div>\r\n                      <div class=\"mt-8 flex items-center justify-between\">\r\n                        <a (click)=\"delistBattery(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\r\n                      </div>\r\n                    </div>\r\n                  </article>\r\n                </div>\r\n              </div>\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end on sale tab -->\r\n\r\n          <!-- On Fnft Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"on-fnft\" role=\"tabpanel\" aria-labelledby=\"on-fnft-tab\">\r\n            <div class=\"flex flex-wrap items-center\">\r\n              <!-- Category -->\r\n              <div class=\"my-1 mr-2.5\">\r\n                <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                  </svg>\r\n                  <span>Category</span>\r\n                </button>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                  <ul class=\"flex flex-col flex-wrap\">\r\n                    <li>\r\n                      <div style=\"padding-right: 1rem;\">\r\n                        <div class=\"mb-2 flex items-center justify-between\">\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Hoodie </a></span>\r\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{fashionjaketsLength}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Grid -->\r\n            <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-10 pb-2\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let s of jakets\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\">\r\n                        <img *ngIf=\"s.ItemId == 'ITM13'\" src=\"assets/img/store/hoodie-metalicana.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <img *ngIf=\"s.ItemId == 'ITM11'\" src=\"assets/img/store/hoodie-meru.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        <img *ngIf=\"s.ItemId == 'ITM1'\" src=\"assets/img/store/hoodie-meru.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      </a>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\">\r\n                        <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.name}}</span>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.DocId}}</span>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 *ngIf=\"s.Claimmed == 0;else claimmed\" class=\"text-green mr-1\">Item belum diclaim</h4>\r\n                      <ng-template #Claimmed>\r\n                        <h4 class=\"text-green mr-1\">Item telah diclaim</h4>\r\n                      </ng-template>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\"> Buy</a> -->\r\n                      <a (click)=\"getselljaketsUserownedqrcodemp(s.DocId)\" data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\" class=\"group flex items-center\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100\">\r\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                          <path d=\"M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z\"></path>\r\n                        </svg>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end on fnft tab -->\r\n\r\n          <!-- On BID Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"on-bid\" role=\"tabpanel\" aria-labelledby=\"on-bid-tab\">\r\n            <!-- Grid -->\r\n              <!-- Dragons -->\r\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of dragons\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <!--  -->\r\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                            </span>\r\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                                </svg>\r\n                              </span>\r\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                              <ng-template #favorited>\r\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                              </ng-template>\r\n                            </div>\r\n                          </div>\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">                \r\n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                                <div class=\"mb-2 flex items-center justify-between\">\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <a (click)=\"getdgbuydetail(datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\">Delist Item</a>\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- dragons -->\r\n              <!-- Eggs -->\r\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of sorteggs\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          <a (click)=\"geteggbuydetail(datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowEggModal\">Buy</a>\r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- eggs -->\r\n              <!-- Batteries -->\r\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n                  <div *ngFor=\"let datas of batteriesHigh\">\r\n                    <article>\r\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                          <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                          <!--  -->\r\n                          <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                        </figure>\r\n                        <div class=\"mt-7 flex items-center justify-between\">\r\n                          <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\r\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\r\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"mt-2 text-sm\">\r\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                        </div>\r\n                        <div class=\"mt-8 flex items-center justify-between\">\r\n                          \r\n                        </div>\r\n                      </div>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n              <!-- batteries -->\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end on bid tab -->\r\n\r\n          <!-- Royalties Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"royaties\" role=\"tabpanel\" aria-labelledby=\"royaties-tab\">\r\n            <!-- Rankings -->\r\n            <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12\">\r\n              <!-- Table -->\r\n              <div *ngIf=\"currentp2powned == 50\" class=\"scrollbar-custom overflow-hidden\">\r\n                <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Collection</span>\r\n                    </div>\r\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Address</span>\r\n                    </div>\r\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Earn Royalties</span>\r\n                    </div>\r\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Hash</span>\r\n                    </div>\r\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\r\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date</span>\r\n                    </div>\r\n                  </div>\r\n                  <a *ngFor=\"let r of royalties;let i = index\" href=\"#\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                      <span class=\"mr-2 lg:mr-4\">{{i}}</span>\r\n                      <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                        <img *ngIf=\"r.item == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                          <span *ngFor=\"let p of profile\">\r\n                            <img *ngIf=\"p.ItemId == r.itemid\" [src]=\"p.url\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                          </span>\r\n                        <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                            <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                          </svg>\r\n                        </div>\r\n                      </figure>\r\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                        {{username}}\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-green\">{{wallets}}....</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                          <g fill=\"#f3ba2f\">\r\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </span>\r\n                      <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-green\">{{wallets}}....</span>\r\n                    </div>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-white\">{{r.date | date}}</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end rankings -->\r\n          </div>\r\n          <!-- end royalties tab -->\r\n\r\n          <!-- Transaction History Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"trxhistroy\" role=\"tabpanel\" aria-labelledby=\"trxhistroy-tab\">\r\n            <!-- Rankings -->\r\n            <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 mb-6\">\r\n              <!-- Details -->\r\n              <div class=\"table-recently\">\r\n                <!-- Table -->\r\n                <div class=\"scrollbar-custom overflow-hidden\">\r\n                  <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                    <span>\r\n                      <a *ngFor=\"let r of trxhistory;let i = index\">\r\n                        <span class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 1rem;padding-left: 2rem;\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                              {{i+1}}\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 1rem;padding-left: 2rem;\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                              {{r.userid.substr(0,10)}}...\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\r\n                            <span class=\"text-sm font-medium tracking-tight\">{{r.item.substr(0,17)}}...</span>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4\" role=\"cell\" style=\"padding-right: 4rem;padding-left: 2rem;\">\r\n                            <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                                <g fill=\"#f3ba2f\">\r\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                                </g>\r\n                              </svg>\r\n                            </span>\r\n                            <span class=\"text-sm font-medium tracking-tight\">{{r.amount}} BNB</span>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\r\n                            <a href=\"https://bscscan.com/tx/{{r.tx_hash}}\" target=\"_blank\">\r\n                              <span class=\"text-green\">{{r.tx_hash.substr(0,20)}}...</span>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 3rem;padding-left: 2rem;\">\r\n                            <span class=\"text-white\">{{r.date | date}}</span>\r\n                          </div>\r\n                        </span>\r\n                      </a>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end details -->\r\n            </div>\r\n            <!-- end rankings -->\r\n          </div>\r\n          <!-- end transaction history tab -->\r\n\r\n          <!-- Point History Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"point\" role=\"tabpanel\" aria-labelledby=\"point-tab\">\r\n            <!-- Rankings -->\r\n            <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-6\">\r\n              <!-- Details -->\r\n              <div class=\"table-recently\">\r\n                <!-- Table -->\r\n                <div class=\"scrollbar-custom overflow-hidden\">\r\n                  <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                    <span>\r\n                      <a *ngFor=\"let r of pointhistoryall;let i = index\">\r\n                        <span class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\r\n                            <span data-tippy-content=\"ETH\">\r\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                                <g fill=\"#f3ba2f\">\r\n                                  <style type=\"text/css\">\r\n                                    .st0{fill:#00FF99;}\r\n                                    .st1{fill:#10B981;}\r\n                                    .st2{fill:#0D7F53;}\r\n                                    .st3{fill:#E6E6E6;}\r\n                                  </style>\r\n                                  <title>point</title>\r\n                                  <circle class=\"st0\" cx=\"894.4\" cy=\"896.8\" r=\"894\"/>\r\n                                  <circle class=\"st1\" cx=\"894.4\" cy=\"896.8\" r=\"758.7\"/>\r\n                                  <path class=\"st2\" d=\"M1291.4,249.2c78.2,122,119.6,263.8,119.4,408.7c0,419-339.7,758.7-758.7,758.7\r\n                                    c-140.2,0.2-277.6-38.6-397-112.1c134.8,210.5,370.8,350,639.4,350c419,0,758.7-339.7,758.7-758.7\r\n                                    C1653.2,622.4,1508.4,382.7,1291.4,249.2z\"/>\r\n                                  <path class=\"st3\" d=\"M531.7,1490.2c-70.9-110.6-108.5-239.3-108.3-370.7c0-380.1,308.1-688.2,688.2-688.2\r\n                                    c127.1-0.2,251.8,35,360.1,101.7c-122.3-191-336.3-317.5-579.9-317.5c-380.1,0-688.2,308.1-688.2,688.2\r\n                                    C203.6,1151.7,334.9,1369.1,531.7,1490.2z\"/>\r\n                                </g>\r\n                              </svg>\r\n                            </span>\r\n                            <span class=\"text-sm font-medium tracking-tight text-green\">+ {{r.qtyPoint}} Points</span>\r\n                          </div>\r\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 3rem;padding-left: 2rem;\">\r\n                            <span class=\"text-white\">{{r.date | date}}</span>\r\n                          </div>\r\n                        </span>\r\n                      </a>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end details -->\r\n            </div>\r\n            <!-- end rankings -->\r\n          </div>\r\n          <!-- end point history tab -->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- end collection -->\r\n  </main>\r\n\r\n  <!-- Sell Now Dragon Modal -->\r\n  <div class=\"modal fade\" id=\"sellNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"sellNowDragonModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"sellNowDragonModalLabel\">Sell</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM9'\" src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM10'\" src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM11'\" src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM12'\" src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM13'\" src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'null'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">NULL</h3>\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Creator Earnings: 5%</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\r\n          </div>\r\n          <div class=\"items-center justify-center space-x-4\">\r\n            <button (click)=\"sellNowDragon(marketp2pdragonDocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"dark:text-jacarta-300 text-center p-4\">The price must be above the floor price of $125</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Bid Now Dragon Modal -->\r\n  <div class=\"modal fade\" id=\"setbidNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowDragonModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"setbidNowDragonModalLabel\">Auction</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM9'\" src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM10'\" src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM11'\" src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM12'\" src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n              <img *ngIf=\"marketp2pdragonID == 'ITM13'\" src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\r\n            </figure>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\r\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\r\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\r\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Free BID </span>\r\n                  </button>\r\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Step BID </span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"slidecontainer\">\r\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\r\n                <p><span>{{rangeValue}}</span> Hours</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\r\n          </div>\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n            <button (click)=\"bidNowDragon(marketp2pdragonDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\r\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\r\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              <ion-label>View your item on BID market</ion-label>\r\n            </ion-tab-button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Sell Now Egg Modal -->\r\n  <div class=\"modal fade\" id=\"sellNowEggModal\" tabindex=\"-1\" aria-labelledby=\"sellNowEggModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"sellNowEggModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2peggID == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <div class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                    <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                    <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"dark:text-jacarta-200 text-sm\">188</span>\r\n              </div>\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM6'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM8'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM2'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM5'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM7'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM4'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH EGG</h3>\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Creator Earnings: 5%</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2peggpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"sellNowEgg(marketp2peggDocId)\" *ngIf=\"marketp2peggLength > 0 && marketp2peggpriceUSD >= 115\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\r\n          </div>\r\n          <div class=\"dark:text-jacarta-300 text-center\">The price must be above the floor price of $115</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Bid Now Egg Modal -->\r\n  <div class=\"modal fade\" id=\"setbidNowEggModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowEggModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"setbidNowEggModalLabel\">Auction</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2peggID == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n            </figure>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\r\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\r\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\r\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Free BID </span>\r\n                  </button>\r\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Step BID </span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"slidecontainer\">\r\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\r\n                <p><span>{{rangeValue}}</span> Hours</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2peggpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"bidNowEgg(marketp2peggDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\r\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\r\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              <ion-label>View your item on BID market</ion-label>\r\n            </ion-tab-button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Sell Now Battery Modal -->\r\n  <div class=\"modal fade\" id=\"sellNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"sellNowBatteryModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"sellNowBatteryModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pbatterypriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"sellNowBattery(marketp2pbatteryDocId)\" *ngIf=\"marketp2pbatterypriceUSD >= 115\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Bid Now Battery Modal -->\r\n  <div class=\"modal fade\" id=\"setbidNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowBatteryModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"setbidNowBatteryModalLabel\">Auction</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\r\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\r\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\r\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Free BID </span>\r\n                  </button>\r\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\r\n                    <span class=\"flex items-center\">Step BID </span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"slidecontainer\">\r\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\r\n                <p><span>{{rangeValue}}</span> Hours</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pbatterypriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"bidNowBattery(marketp2pbatteryDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\r\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\r\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              <ion-label>View your item on BID market</ion-label>\r\n            </ion-tab-button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Sell Now Food Modal -->\r\n  <div class=\"modal fade\" id=\"sellNowFoodModal\" tabindex=\"-1\" aria-labelledby=\"sellNowFoodModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"sellNowFoodModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative items-center border-t border-b py-4\">\r\n            <div style=\"width: 100%;\">\r\n              <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FOODS</h3>\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Max {{marketp2pfoodLength}} Foods</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"pt-2\" style=\"width: 100%;\">\r\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"1\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter Price / Items\" required />\r\n            </div>\r\n            <div class=\"pt-2\" style=\"width: 100%;\">\r\n              <input type=\"number\" [ngModel]=\"input_stock\" (ngModelChange)=\"onStockChange($event)\" id=\"input_stock\" min=\"1\" max=\"{{marketp2pfoodLength}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter Qty Items\" required />\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">                  \r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">${{input_price}} Per Items</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">{{marketp2pfoodpriceUSD}} USD</div>\r\n              <div class=\"dark:text-jacarta-300 text-right\">{{marketp2pfoodpriceBNB}} BNB</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Current BNB<br> $1 : {{current_bnb_wei}} BNB</span>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\r\n          </div>\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n            <button (click)=\"sellNowFood(input_stock, marketp2pfoodpriceBNB)\" *ngIf=\"marketp2pfoodpriceUSD >= 1 && marketp2pfoodLength > 0 && input_stock <= marketp2pfoodLength && input_stock > 0 && selectedBid != '-' && input_price >= 0.1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Items </button>\r\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on P2P market</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Hatching Modal -->\r\n  <div *ngIf=\"hatching == true\" class=\"modal fade\" id=\"hatchModal\" tabindex=\"-1\" aria-labelledby=\"hatchModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"hatchModalLabel\">Items being used on the incubator</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n          </div>\r\n          <div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{hatchingDataEgg.DocId}}</h3>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{hatchingDataEgg.CreatedAt}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n                <!--  -->\r\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{hatchingDataBattery.DocId}}</h3>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{hatchingDataBattery.CreatedAt}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 p-4 w-full\">\r\n            <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n              <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Hatching ends in</span>\r\n              <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                <span class=\"countdown-days text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-days-number text-lg font-medium lg:text-[1.5rem]\">{{days}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Day</span>\r\n                </span>\r\n                <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hours}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\r\n                </span>\r\n                <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutes}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Min</span>\r\n                </span>\r\n                <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{seconds}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Qrcode Modal -->\r\n  <div class=\"modal fade\" id=\"qrcodemodal\" tabindex=\"-1\" aria-labelledby=\"qrcodemodalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"qrcodemodalLabel\">QR Code Items</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n          </div>\r\n          <div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img *ngIf=\"ClaimmedJaket == true;else notclaimmed\" src=\"{{qrcodeJaket}}\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 100%;filter: blur(5px);\" />\r\n                <ng-template #notclaimmed>\r\n                  <img src=\"{{qrcodeJaket}}\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 100%;\" />\r\n                </ng-template>\r\n              </figure>\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 p-4 w-full\">\r\n                <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n                  <span *ngIf=\"nameJaket == 'ITM13'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Metalicana Hoodie #{{detailJaket.Id}}</span>\r\n                  <span *ngIf=\"nameJaket == 'ITM11'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Ritra Hoodie #{{detailJaket.Id}}</span>\r\n                  <span *ngIf=\"nameJaket == 'ITM1'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Meru Hoodie #{{detailJaket.Id}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"mt-2 text-sm\">\r\n            <h4 *ngIf=\"ClaimmedJaket == false;else claimmed\" class=\"text-green mr-1\">Item belum diclaim</h4>\r\n            <ng-template #Claimmed>\r\n              <h4 class=\"text-green mr-1\">Item telah diclaim</h4>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map