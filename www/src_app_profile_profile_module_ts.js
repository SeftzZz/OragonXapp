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
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
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
  constructor(authService, router, loadingController, alertController, toastCtrl, fs, http, global, senddata, datepipe) {
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "authService", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastCtrl", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "http", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "senddata", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "datepipe", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "infiniteScroll", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "slides", void 0);
    // object
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "profile", null);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ipAddress", "");
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
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "points", void 0);
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
    // MAIN
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscription", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "status_direct_buy", "1");
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stateHash", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "localStorage", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "parse_localStorage", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_bnb_wei", void 0);
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
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storecart", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragons", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsdate", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsownedbg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hargaEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggLowest", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "atozEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2p", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentp2powned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonAttack", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDefense", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLevel", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonHunger", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHP", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonMaxHunger", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRarity", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonExp", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonpriceBNB", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonDate", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonIdBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonImgBG", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonfavorited", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "priceRoyalty_display", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fee_royalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_data", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "owner_address", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortdragons", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortdragonsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeSell", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortp2pmarket", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsHigh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsLow", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dragonsAtoZ", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsHigh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsLow", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggsHAtoZ", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "eggDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggpriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2peggDate", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sorteggs", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sorteggsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesHigh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesLow", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteriesHAtoZ", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "batteryDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryDocId", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatterypriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pbatteryDate", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodsHigh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodLow", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodHAtoZ", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "foodDetail", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodOID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodImg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodprice", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodpriceUSD", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodpriceBNB", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodowner", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodFee", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pfoodDate", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "btnclickcategory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfoodsowned", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "current_qty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_stock", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getSellfood", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "iditemssellFood", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "input_price", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "rangeValue", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectedBid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "latest_date", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeBID", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "royalties", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "positionRoyalty", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty2", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty3", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty4", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marketp2pdragonRoyalty5", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trxhistory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistoryall", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pointhistorybyid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sessionPointHistory", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataNotif", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "notificationBid", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "statusCheckNew", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesownedLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "usedBattery", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "usedEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timeIncubator", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatching", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "countdown", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "days", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hours", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutes", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "seconds", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatchingDataEgg", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hatchingDataBattery", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hoursServer", 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "minutesServer", 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "secondsServer", 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isRunning", false);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timerId", 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortbatteriesownedIncubator", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jaketsHigh", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lastseen", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sortfashion", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "jakets", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashionjaketsLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fashioncommonjaketsLength", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "commonjakets", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "detailJaket", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "qrcodeJaket", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "nameJaket", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ClaimmedJaket", void 0);
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "scanned", false);
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
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
  }
  setSwiperInstance(swiper) {
    this.slides = swiper;
  }
  logout() {
    var _this = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.logout();
      window.location.replace("/tabs/home");
    })();
  }
  login() {
    var _this2 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this2.router.navigateByUrl("/login", {
        replaceUrl: true
      });
    })();
  }
  p2pmarket() {
    var _this3 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.authService.logout();
      _this3.router.navigateByUrl("/tabs/p2pmarket", {
        replaceUrl: true
      });
    })();
  }
  doInfinite(infiniteScroll) {
    var _this4 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  // FCT-Root
  ngOnInit() {
    var _this5 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      _this5.senddata.getselleggUsermp(_this5.globalID).subscribe(dataSell => {
        _this5.eggsHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
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
      var _ref = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
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
                  var _ref2 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataRead) {
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
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      var _ref3 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewDragon) {
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
                // console.log(this.dragonsowned);
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
      var _ref4 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewEgg) {
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
      var _ref5 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFood) {
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
      var _ref6 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewBattery) {
        // console.log("datanewBattery", datanewBattery);
        for (let i in datanewBattery) {
          // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
          _this11.senddata.getsellbatteryUserallmp(_this11.globalID).subscribe(dataSell => {
            _this11.sortbatteriesowned = JSON.parse(dataSell);
            if (_this11.sortbatteriesowned[0].lengthBattery != datanewBattery[i].Amount) {
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
  checknewpoint() {
    var _this12 = this;
    this.fs.collection("Players").doc(this.globalID).valueChanges().subscribe( /*#__PURE__*/function () {
      var _ref7 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewPoint) {
        // console.log("datanewPoint", datanewPoint.Point);
        _this12.points = datanewPoint.Point;
        _this12.senddata.getpointhistory(_this12.globalID).subscribe(dataSell => {
          _this12.pointhistory = JSON.parse(dataSell);
          // console.log("qtyPoint", this.pointhistory.qtyPoint);
          if (_this12.pointhistory.qtyPoint != _this12.points) {
            // console.log("data point s not match from point f");
            _this12.senddata.insertNewPointmp(_this12.globalID, datanewPoint.Point, 'checked').subscribe(resp => {
              // console.log("inserting data...", resp);
            });
          } else {
            // console.log("data point s match from point f");
          }
        }, error => {});
      });
      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
  tab(kind) {
    var _this13 = this;
    // tab-owned
    if (kind == 10) {
      this.currentp2powned = 10;
      // console.log("category p2p owned", this.currentp2powned);
      this.senddata.getselldgUserownedmp(this.globalID).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this13.loadingController.create();
          yield loading.present();
          _this13.dragonsowned = JSON.parse(dataSell);
          _this13.marketp2pdragonLength = _this13.dragonsowned.length;
          // console.log(this.dragonsowned)
          for (let i in _this13.dragonsowned) {
            if (_this13.dragonsowned[i].imgbackground == "exists" && _this13.dragonsowned[i].statusbayarbackground == "paid") {
              _this13.senddata.getallbackgroundmp(_this13.globalID).subscribe(dataSell => {
                _this13.dragonsownedbg = JSON.parse(dataSell);
                _this13.marketp2pdragonBG = _this13.dragonsownedbg.imgBg;
                _this13.marketp2pdragonIdBG = _this13.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg);
              }, error => {});
            }
          }
          loading.dismiss();
        });
        return function (_x8) {
          return _ref8.apply(this, arguments);
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
    var _this14 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (kind == 11) {
        _this14.currentp2powned = 11;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        _this14.senddata.getselldgUserownedmp(_this14.globalID).subscribe(dataSell => {
          _this14.sortdragonsowned = JSON.parse(dataSell);
        }, error => {});
        loading.dismiss();
      } else if (kind == 20) {
        _this14.currentp2powned = 20;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        _this14.senddata.getselleggUserownedmp(_this14.globalID).subscribe(dataSell => {
          _this14.sorteggsowned = JSON.parse(dataSell);
          _this14.fs.collection("Players/" + _this14.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref9 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this14.usedEgg = dataIncubator[0].EggItemId;
              _this14.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this14.latest_date = _this14.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this14.timeIncubator = _this14.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this14.senddata.itemseggtoincubatormp(_this14.usedEgg, _this14.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this14.hatchingDataEgg = JSON.parse(dataE);
                  _this14.senddata.getselleggUserownedmp(_this14.globalID).subscribe(dataSell => {
                    _this14.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this14.senddata.itemsbatterytoincubatormp(_this14.usedBattery, _this14.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this14.hatchingDataBattery = JSON.parse(dataE);
                  _this14.senddata.getsellbatteryUserownedmp(_this14.globalID).subscribe(dataSell => {
                    _this14.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this14.hatching = true;
              }
            });
            return function (_x9) {
              return _ref9.apply(this, arguments);
            };
          }());
        }, error => {});
        loading.dismiss();
      } else if (kind == 30) {
        _this14.currentp2powned = 30;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        _this14.senddata.getsellbatteryUserallmp(_this14.globalID).subscribe(dataSell => {
          _this14.sortbatteriesowned = JSON.parse(dataSell);
          _this14.sortbatteriesownedLength = _this14.sortbatteriesowned.lengthBattery;
          _this14.fs.collection("Players/" + _this14.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref10 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this14.usedEgg = dataIncubator[0].EggItemId;
              _this14.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this14.latest_date = _this14.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this14.timeIncubator = _this14.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this14.senddata.itemseggtoincubatormp(_this14.usedEgg, _this14.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this14.hatchingDataEgg = JSON.parse(dataE);
                  _this14.senddata.getselleggUserownedmp(_this14.globalID).subscribe(dataSell => {
                    _this14.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this14.senddata.itemsbatterytoincubatormp(_this14.usedBattery, _this14.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this14.hatchingDataBattery = JSON.parse(dataE);
                  _this14.senddata.getsellbatteryUserownedmp(_this14.globalID).subscribe(dataSell => {
                    _this14.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this14.hatching = true;
              }
            });
            return function (_x10) {
              return _ref10.apply(this, arguments);
            };
          }());
        }, error => {});
        loading.dismiss();
      } else if (kind == 40) {
        _this14.currentp2powned = 40;
        // console.log("click category p2p owned", this.currentp2powned);
        const loading = yield _this14.loadingController.create();
        yield loading.present();
        _this14.senddata.getsellfoodUsermp(_this14.globalID).subscribe(dataSell => {
          _this14.sortfoodsowned = JSON.parse(dataSell);
          _this14.marketp2pfoodLength = _this14.sortfoodsowned.lengthFood;
          _this14.marketp2pfoodDate = _this14.sortfoodsowned.EditAt;
          _this14.marketp2pfoodowner = _this14.sortfoodsowned.uid;
          _this14.marketp2pfoodpriceUSD = 1;
          // console.log(this.marketp2pfoodpriceUSD)
        }, error => {});
        loading.dismiss();
      }
      _this14.countDownHatching();
      _this14.countdown = setInterval( /*#__PURE__*/(0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this14.countDownHatching();
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
    var _this15 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this15.timeIncubator).getTime();
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
      _this15.days = days;
      _this15.hours = hours;
      _this15.minutes = minutes;
      _this15.seconds = seconds;
      // If the count down is over, write some text
      if (distance < 0 || _this15.hours < 0) {
        _this15.hours = 0;
        _this15.minutes = 0;
        _this15.seconds = 0;
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
    var _this16 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let kind = localStorage.getItem("kind");
      if (kind == "food") {
        _this16.input_price = input_price;
        let marketp2pfoodpriceBNB = _this16.current_bnb * _this16.input_price;
        // this.marketp2pfoodpriceBNB = (marketp2pfoodpriceBNB).toFixed(2);
        let marketp2pfoodpriceUSD = _this16.input_price * _this16.input_stock;
        _this16.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
      } else if (kind == "dragon") {
        _this16.input_price = input_price;
        let marketp2pdragonpriceUSD = _this16.input_price;
        _this16.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
        _this16.senddata.getdgroyaltymp(_this16.marketp2pdragonID).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          _this16.marketp2pdragonFee = 12 / 100 * Number(input_price);
          let marketp2pdragonprice_actual = Number(input_price) - _this16.marketp2pdragonFee;
          _this16.fee_display = _this16.marketp2pdragonFee;
          _this16.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display = _this16.price_display - _this16.marketp2pdragonRoyalty;
          _this16.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          _this16.fee_royalty = _this16.fee_display + _this16.marketp2pdragonRoyalty;
          _this16.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
          _this16.marketp2pdragonRoyalty2 = 10 / 100 * _this16.marketp2pdragonRoyalty;
          _this16.marketp2pdragonRoyalty3 = 10 / 100 * _this16.marketp2pdragonRoyalty2;
          _this16.marketp2pdragonRoyalty4 = 10 / 100 * _this16.marketp2pdragonRoyalty3;
          _this16.marketp2pdragonRoyalty5 = 10 / 100 * _this16.marketp2pdragonRoyalty4;
          if (dr == 1) {
            _this16.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            _this16.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            _this16.positionRoyalty = 3;
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
            _this16.positionRoyalty = 4;
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
            _this16.positionRoyalty = 5;
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
        _this16.input_price = input_price;
        let marketp2peggpriceUSD = _this16.input_price / _this16.current_bnb;
        _this16.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
        _this16.senddata.getdgroyaltymp(_this16.marketp2pdragonID).subscribe(dataRoyalty => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          _this16.marketp2pdragonFee = 12 / 100 * Number(input_price);
          let marketp2pdragonprice_actual = Number(input_price) - _this16.marketp2pdragonFee;
          _this16.fee_display = _this16.marketp2pdragonFee;
          _this16.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display = _this16.price_display - _this16.marketp2pdragonRoyalty;
          _this16.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          _this16.fee_royalty = _this16.fee_display + _this16.marketp2pdragonRoyalty;
          _this16.marketp2pdragonRoyalty = 10 / 100 * Number(input_price);
          _this16.marketp2pdragonRoyalty2 = 10 / 100 * _this16.marketp2pdragonRoyalty;
          _this16.marketp2pdragonRoyalty3 = 10 / 100 * _this16.marketp2pdragonRoyalty2;
          _this16.marketp2pdragonRoyalty4 = 10 / 100 * _this16.marketp2pdragonRoyalty3;
          _this16.marketp2pdragonRoyalty5 = 10 / 100 * _this16.marketp2pdragonRoyalty4;
          if (dr == 1) {
            _this16.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            _this16.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            _this16.positionRoyalty = 3;
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
            _this16.positionRoyalty = 4;
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
            _this16.positionRoyalty = 5;
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
        _this16.input_price = input_price;
        let marketp2pbatterypriceUSD = _this16.input_price / _this16.current_bnb;
        _this16.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        localStorage.setItem("input_price", input_price.toFixed());
      }
    })();
  }
  onStockChange(input_stock) {
    var _this17 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this17.input_stock = input_stock;
      let marketp2pfoodpriceBNB = _this17.current_bnb * _this17.input_price * _this17.input_stock;
      _this17.marketp2pfoodpriceBNB = marketp2pfoodpriceBNB.toFixed(2);
      let marketp2pfoodpriceUSD = _this17.input_price * _this17.input_stock;
      _this17.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
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
    var _this18 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Dragon
      let crd = JSON.stringify({
        ObjectId: Number(_this18.marketp2pdragonDocId),
        ItemId: _this18.marketp2pdragonID,
        HP: Number(_this18.marketp2pdragonHP),
        Attack: Number(_this18.marketp2pdragonAttack),
        Defense: Number(_this18.marketp2pdragonDefense),
        Exp: Number(_this18.marketp2pdragonExp),
        Level: Number(_this18.marketp2pdragonLevel),
        Rarity: _this18.marketp2pdragonRarity
      });
      _this18.current_data = JSON.parse(crd);
      // console.log(JSON.stringify(this.current_data));
      let now = new Date();
      _this18.latest_date = _this18.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(168, now);
      _this18.timeSell = _this18.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end items on sell", this.timeSell);
      if (_this18.input_price == undefined) {
        const alert = yield _this18.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this18.loadingController.create();
        yield loading.present();
        _this18.fs.collection("Items/" + _this18.globalID + "/Dragons").doc(marketp2pdragonDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this18.move_to_sell_test(marketp2pdragonDocId);
          _this18.senddata.itemsdragontosellmp(marketp2pdragonDocId, _this18.input_price, _this18.timeSell).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  bidNowDragon(marketp2pdragonDocId) {
    var _this19 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      // Build Json String Dragon
      let crd = JSON.stringify({
        ObjectId: Number(_this19.marketp2pdragonDocId),
        ItemId: _this19.marketp2pdragonID,
        Id: _this19.marketp2pdragonImg,
        HP: Number(_this19.marketp2pdragonHP),
        Attack: Number(_this19.marketp2pdragonAttack),
        Defense: Number(_this19.marketp2pdragonDefense),
        Exp: Number(_this19.marketp2pdragonExp),
        Level: Number(_this19.marketp2pdragonLevel),
        Rarity: _this19.marketp2pdragonRarity
      });
      _this19.current_data = JSON.parse(crd);
      // console.log(JSON.stringify(this.current_data));
      let now = new Date();
      _this19.latest_date = _this19.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this19.rangeValue, now);
      _this19.timeBID = _this19.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      if (_this19.input_price == undefined) {
        const alert = yield _this19.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this19.loadingController.create();
        yield loading.present();
        _this19.fs.collection("Items/" + _this19.globalID + "/Dragons").doc(marketp2pdragonDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this19.move_to_auction_test(marketp2pdragonDocId);
          _this19.senddata.itemsdragontobidmp(marketp2pdragonDocId, _this19.input_price, _this19.selectedBid, _this19.timeBID).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  move_to_sell_test(marketp2pdragonDocId) {
    var _this20 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this20.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        _this20.fs.collection("Sell/" + _this20.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
          Id: marketp2pdragonDocId,
          ItemId: _this20.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this20.marketp2pdragonAttack),
            DefensePoint: Number(_this20.marketp2pdragonDefense),
            Exp: Number(_this20.marketp2pdragonExp),
            HP: Number(_this20.marketp2pdragonHP),
            Hunger: Number(_this20.marketp2pdragonHunger),
            Level: Number(_this20.marketp2pdragonLevel),
            MaxHP: Number(_this20.marketp2pdragonMaxHP),
            MaxHunger: Number(_this20.marketp2pdragonMaxHunger)
          },
          price: _this20.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this20.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this20.currentp2p = 0;
        _this20.currentp2powned = 10;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this20.senddata.getselldgUserownedmp(_this20.globalID).subscribe(dataSell => {
          _this20.dragonsowned = JSON.parse(dataSell);
          _this20.marketp2pdragonID = _this20.dragonsowned.ItemId;
          _this20.marketp2pdragonLength = _this20.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in _this20.dragonsowned) {
            if (_this20.dragonsowned[i].imgbackground == "exists" && _this20.dragonsowned[i].statusbayarbackground == "paid") {
              _this20.senddata.getallbackgroundmp(_this20.globalID).subscribe(dataSell => {
                _this20.dragonsownedbg = JSON.parse(dataSell);
                _this20.marketp2pdragonBG = _this20.dragonsownedbg.imgBg;
                _this20.marketp2pdragonIdBG = _this20.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        _this20.senddata.getselldgUsermp(_this20.globalID).subscribe(dataSell => {
          _this20.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test(marketp2pdragonDocId) {
    var _this21 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this21.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        _this21.fs.collection("Bid/" + _this21.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
          Id: marketp2pdragonDocId,
          ItemId: _this21.marketp2pdragonID,
          Attributes: {
            AttackPoint: Number(_this21.marketp2pdragonAttack),
            DefensePoint: Number(_this21.marketp2pdragonDefense),
            Exp: Number(_this21.marketp2pdragonExp),
            HP: Number(_this21.marketp2pdragonHP),
            Hunger: Number(_this21.marketp2pdragonHunger),
            Level: Number(_this21.marketp2pdragonLevel),
            MaxHP: Number(_this21.marketp2pdragonMaxHP),
            MaxHunger: Number(_this21.marketp2pdragonMaxHunger)
          },
          PriceNow: Number(_this21.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this21.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this21.currentp2p = 0;
        _this21.currentp2powned = 10;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this21.senddata.getselldgUserownedmp(_this21.globalID).subscribe(dataSell => {
          _this21.dragonsowned = JSON.parse(dataSell);
          _this21.marketp2pdragonID = _this21.dragonsowned.ItemId;
          _this21.marketp2pdragonLength = _this21.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in _this21.dragonsowned) {
            if (_this21.dragonsowned[i].imgbackground == "exists" && _this21.dragonsowned[i].statusbayarbackground == "paid") {
              _this21.senddata.getallbackgroundmp(_this21.globalID).subscribe(dataSell => {
                _this21.dragonsownedbg = JSON.parse(dataSell);
                _this21.marketp2pdragonBG = _this21.dragonsownedbg.imgBg;
                _this21.marketp2pdragonIdBG = _this21.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        }, error => {});
        _this21.senddata.getselldgUsermp(_this21.globalID).subscribe(dataSell => {
          _this21.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        }, error => {});
        _this21.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // EGG
  sellNowEgg(marketp2peggDocId) {
    var _this22 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Egg
      let crd = JSON.stringify({
        DocId: marketp2peggDocId,
        ItemId: _this22.marketp2peggID,
        price: _this22.input_price
      });
      _this22.current_data = JSON.parse(crd);
      // console.log(this.current_data);
      if (_this22.input_price == undefined) {
        const alert = yield _this22.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        _this22.fs.collection("Items/" + _this22.globalID + "/Eggs").doc(marketp2peggDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this22.move_to_sell_test_egg(marketp2peggDocId);
          _this22.senddata.itemseggtosellmp(marketp2peggDocId, _this22.input_price).subscribe(dataE => {
            // console.log(dataE);
          }, error => {});
        });
      }
    })();
  }
  bidNowEgg(marketp2peggDocId) {
    var _this23 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      let now = new Date();
      _this23.latest_date = _this23.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this23.rangeValue, now);
      _this23.timeBID = _this23.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      // Create difference time of bid
      const diffInMs = Date.parse(_this23.timeBID) - Date.parse(_this23.latest_date);
      const diffInHours = Math.ceil(diffInMs / 1000 / 60 / 60);
      // console.log("diffInHours", diffInHours);
      if (_this23.input_price == undefined) {
        const alert = yield _this23.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this23.loadingController.create();
        yield loading.present();
        _this23.fs.collection("Items/" + _this23.globalID + "/Eggs").doc(marketp2peggDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this23.move_to_auction_test_egg(marketp2peggDocId);
          _this23.senddata.itemseggtobidmp(marketp2peggDocId, _this23.input_price, _this23.selectedBid, _this23.timeBID, diffInHours.toString()).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
        _this23.createStopWatch(marketp2peggDocId);
      }
    })();
  }
  createStopWatch(marketp2peggDocId) {
    var _this24 = this;
    setInterval( /*#__PURE__*/(0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this24.secondsServer++;
      if (_this24.secondsServer >= 60) {
        _this24.minutesServer++;
        _this24.secondsServer = 0;
      }
      if (_this24.minutesServer >= 60) {
        _this24.hoursServer++;
        _this24.minutesServer = 0;
      }
      _this24.senddata.hmsBIDmp(marketp2peggDocId, _this24.hoursServer.toString(), _this24.minutesServer.toString(), _this24.secondsServer.toString()).subscribe(res => {});
    }), 1000);
  }
  move_to_sell_test_egg(marketp2peggDocId) {
    var _this25 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this25.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "egg") {
        _this25.fs.collection("Sell/" + _this25.globalID + "/Eggs").doc(marketp2peggDocId).set({
          Id: marketp2peggDocId,
          ItemId: _this25.marketp2peggID,
          PriceNow: Number(_this25.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this25.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this25.currentp2p = 0;
        _this25.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this25.senddata.getselleggUserownedmp(_this25.globalID).subscribe(dataSell => {
          _this25.eggsHigh = JSON.parse(dataSell);
          _this25.marketp2peggLength = _this25.eggsHigh.length;
        }, error => {});
        _this25.senddata.getselleggUserownedmp(_this25.globalID).subscribe(dataSell => {
          _this25.sorteggsowned = JSON.parse(dataSell);
        }, error => {});
        _this25.senddata.getselleggUsermp(_this25.globalID).subscribe(dataSell => {
          _this25.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test_egg(marketp2peggDocId) {
    var _this26 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this26.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "egg") {
        _this26.fs.collection("Bid/" + _this26.globalID + "/Eggs").doc(marketp2peggDocId).set({
          Id: marketp2peggDocId,
          ItemId: _this26.marketp2peggID,
          price: _this26.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this26.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this26.currentp2p = 0;
        _this26.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this26.senddata.getselleggUserownedmp(_this26.globalID).subscribe(dataSell => {
          _this26.eggsHigh = JSON.parse(dataSell);
          _this26.marketp2peggLength = _this26.eggsHigh.length;
        }, error => {});
        _this26.senddata.getselleggUserownedmp(_this26.globalID).subscribe(dataSell => {
          _this26.sorteggsowned = JSON.parse(dataSell);
        }, error => {});
        _this26.senddata.getselleggUsermp(_this26.globalID).subscribe(dataSell => {
          _this26.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        _this26.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // BATTERY
  sellNowBattery(marketp2pbatteryDocId) {
    var _this27 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Build Json String Egg
      let crd = JSON.stringify({
        DocId: marketp2pbatteryDocId,
        ItemId: _this27.marketp2pbatteryID,
        price: _this27.input_price
      });
      _this27.current_data = JSON.parse(crd);
      console.log(_this27.input_price);
      if (_this27.input_price == undefined) {
        const alert = yield _this27.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        _this27.fs.collection('Items/' + _this27.globalID + '/Batteries').doc(marketp2pbatteryDocId).update({
          Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(-1)
        }).then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this27.move_to_sell_test_battery(marketp2pbatteryDocId);
          _this27.senddata.itemsbatterytosellmp(marketp2pbatteryDocId, _this27.input_price).subscribe(dataE => {
            // console.log(dataE);
          }, error => {});
        });
      }
    })();
  }
  bidNowBattery(marketp2pbatteryDocId) {
    var _this28 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.input_price);
      let now = new Date();
      _this28.latest_date = _this28.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      // console.log("date now", this.latest_date);
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      // 👇️ Add 2 hours to another date
      const date = now;
      // 👇️ Mon Mar 14 2022 11:25:30
      let latest_date = addHours(_this28.rangeValue, now);
      _this28.timeBID = _this28.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      // console.log("date end bid", this.timeBID);
      if (_this28.input_price == undefined) {
        const alert = yield _this28.alertController.create({
          header: "Failed !",
          message: "Price must over than floorprice",
          buttons: ["OK"]
        });
        yield alert.present();
      } else {
        const loading = yield _this28.loadingController.create();
        yield loading.present();
        _this28.fs.collection("Items/" + _this28.globalID + "/Batteries").doc(marketp2pbatteryDocId).delete().then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          _this28.move_to_auction_test_battery(marketp2pbatteryDocId);
          _this28.senddata.itemsbatterytobidmp(marketp2pbatteryDocId, _this28.input_price, _this28.selectedBid, _this28.timeBID).subscribe(dataE => {
            // console.log(dataE);
            loading.dismiss();
          }, error => {});
        });
      }
    })();
  }
  move_to_sell_test_battery(marketp2pbatteryDocId) {
    var _this29 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this29.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "battery") {
        _this29.fs.collection("Sell/" + _this29.globalID + "/Batteries").doc(marketp2pbatteryDocId).set({
          Id: marketp2pbatteryDocId,
          ItemId: _this29.marketp2pbatteryID,
          price: Number(_this29.input_price)
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this29.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this29.senddata.getsellbatteryUserownedmp(_this29.globalID).subscribe(dataSell => {
          _this29.batteriesHigh = JSON.parse(dataSell);
        }, error => {});
        _this29.senddata.getsellbatteryUserallmp(_this29.globalID).subscribe(dataSell => {
          _this29.sortbatteriesowned = JSON.parse(dataSell);
          _this29.sortbatteriesownedLength = _this29.sortbatteriesowned.lengthBattery;
          _this29.fs.collection("Players/" + _this29.globalID + "/Incubator").valueChanges().subscribe( /*#__PURE__*/function () {
            var _ref13 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataIncubator) {
              // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
              _this29.usedEgg = dataIncubator[0].EggItemId;
              _this29.usedBattery = dataIncubator[0].BatteryItemId;
              // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
              // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
              if (dataIncubator[0].IncubatorState == "Started") {
                let unix_timestamp = dataIncubator[0].StartedAt.seconds;
                let now = new Date(unix_timestamp * 1000);
                _this29.latest_date = _this29.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                // console.log("date now", this.latest_date);
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                // 👇️ Add 2 hours to another date
                const date = now;
                // 👇️ Mon Mar 14 2022 11:25:30
                let latest_date = addHours(dataIncubator[0].HatchTime, now);
                _this29.timeIncubator = _this29.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("date end incubator", this.timeIncubator);
                _this29.senddata.itemseggtoincubatormp(_this29.usedEgg, _this29.timeIncubator).subscribe(dataE => {
                  // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                  _this29.hatchingDataEgg = JSON.parse(dataE);
                  _this29.senddata.getselleggUserownedmp(_this29.globalID).subscribe(dataSell => {
                    _this29.sorteggsowned = JSON.parse(dataSell);
                  }, error => {});
                });
                _this29.senddata.itemsbatterytoincubatormp(_this29.usedBattery, _this29.timeIncubator).subscribe(dataE => {
                  // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                  _this29.hatchingDataBattery = JSON.parse(dataE);
                  _this29.senddata.getsellbatteryUserownedmp(_this29.globalID).subscribe(dataSell => {
                    _this29.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  }, error => {});
                });
                _this29.hatching = true;
              }
            });
            return function (_x11) {
              return _ref13.apply(this, arguments);
            };
          }());
        }, error => {});
        _this29.senddata.getsellbatteryUserallmp(_this29.globalID).subscribe(dataSell => {
          _this29.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        loading.dismiss();
      }
    })();
  }
  move_to_auction_test_battery(marketp2pbatteryDocId) {
    var _this30 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this30.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("kind");
      if (kind == "battery") {
        _this30.fs.collection("Bid/" + _this30.globalID + "/Batteries").doc(marketp2pbatteryDocId).set({
          Id: marketp2pbatteryDocId,
          ItemId: _this30.marketp2pbatteryID,
          price: _this30.input_price
        }).then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        }).catch(error => {});
        const alert = yield _this30.alertController.create({
          header: "Success",
          message: "Your item now in P2P Market",
          buttons: ["OK"]
        });
        yield alert.present();
        _this30.currentp2p = 0;
        _this30.currentp2powned = 20;
        // console.log("category p2p", this.currentp2p);
        // console.log("category p2p owned", this.currentp2powned);
        _this30.senddata.getsellbatteryUserownedmp(_this30.globalID).subscribe(dataSell => {
          _this30.batteriesHigh = JSON.parse(dataSell);
        }, error => {});
        _this30.senddata.getsellbatteryUserownedmp(_this30.globalID).subscribe(dataSell => {
          _this30.sortbatteriesowned = JSON.parse(dataSell);
        }, error => {});
        _this30.senddata.getsellbatteryUserallmp(_this30.globalID).subscribe(dataSell => {
          _this30.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        }, error => {});
        _this30.selectedBid = "-";
        loading.dismiss();
      }
    })();
  }
  // FOOD
  sellNowFood(qty, marketp2pfoodpriceBNB) {
    var _this31 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let kind = localStorage.getItem("kind");
      let Id = "b037f3149945dbc52384d5242e746106";
      let HVP = 24;
      let food = qty;
      let i = 0;
      // for (i; i < food; i++) {
      var itemid1 = _this31.newTime() + _this31.globalID;
      _this31.fs.collection("Sell").doc(_this31.globalID).update({
        FoodGroup: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(JSON.stringify({
          ItemId: _this31.marketp2pfoodOID,
          HVP: 24,
          Qty: food,
          price: marketp2pfoodpriceBNB,
          owner: _this31.globalID
        }))
      }).then(() => {});
      // console.log(this.marketp2pfoodOID);
      // update stok food
      _this31.senddata.getsellfoodUserqtymp(_this31.globalID, qty).subscribe(data => {
        let getSell = JSON.parse(data);
        // insert ke tabel sell
        _this31.senddata.setsellfoodUsermp(_this31.globalID, getSell.iditemsFood, qty, marketp2pfoodpriceBNB, HVP.toString(), _this31.marketp2pfoodOID, _this31.globalID).subscribe(dataSellFood => {
          _this31.iditemssellFood = dataSellFood;
        });
      });
      _this31.fs.collection('Items/' + _this31.globalID + '/Foods').doc(_this31.marketp2pfoodOID).update({
        Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(-qty),
        Id: _this31.marketp2pfoodOID,
        ItemId: 'ITM14'
      }).then(() => {
        console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      // }
      const alert = yield _this31.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"]
      });
      yield alert.present();
      _this31.selectedBid = "-";
    })();
  }
  favorite_item(ItemId) {
    var _this32 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this32.loadingController.create();
      yield loading.present();
      _this32.senddata.favoritedmp(_this32.globalID, ItemId).subscribe( /*#__PURE__*/function () {
        var _ref14 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this32.senddata.getselldgUserownedmp(_this32.globalID).subscribe(dataSell => {
            _this32.dragonsowned = JSON.parse(dataSell);
            _this32.marketp2pdragonLength = _this32.dragonsowned.length;
            // console.log(this.dragonsowned);
          }, error => {});
          loading.dismiss();
        });
        return function (_x12) {
          return _ref14.apply(this, arguments);
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
    var _this33 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this33.alertController.create({
        header: "Congratulation !",
        message: "Now you can Withdraw.",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  withdraw() {
    var _this34 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this34.alertController.create({
        header: "Success !",
        message: "Thanks for withdraw.",
        buttons: ["OK"]
      });
      yield alert.present();
      _this34.percentRoyalty = 0;
      _this34.valueRoyalty = 0;
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
    var _this35 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this35.fs.collection("Items/" + _this35.globalID + "/Dragons").doc(marketp2pdragonDocId).set({
        Id: marketp2pdragonDocId,
        ItemId: marketp2pdragonID,
        Attributes: {
          AttackPoint: Number(_this35.marketp2pdragonAttack),
          DefensePoint: Number(_this35.marketp2pdragonDefense),
          Exp: Number(_this35.marketp2pdragonExp),
          HP: Number(_this35.marketp2pdragonHP),
          Hunger: Number(_this35.marketp2pdragonHunger),
          Level: Number(_this35.marketp2pdragonLevel),
          MaxHP: Number(_this35.marketp2pdragonMaxHP),
          MaxHunger: Number(_this35.marketp2pdragonMaxHunger)
        }
      }).then(() => {
        // console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      const alert = yield _this35.alertController.create({
        header: "Success",
        message: "Your item delisted from market",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  move_to_item_test_egg(marketp2peggDocId) {
    var _this36 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this36.fs.collection("Items/" + _this36.globalID + "/Eggs").doc(marketp2peggDocId).set({
        Id: marketp2peggDocId,
        ItemId: _this36.marketp2peggID
      }).then(() => {
        // console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      }).catch(error => {});
      const alert = yield _this36.alertController.create({
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
    var _this37 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this37.provider = yield web3Modal.connect();
      _this37.getcurrentoragon();
      yield _this37.getPaymentCount();
      _this37.web3js = new (web3__WEBPACK_IMPORTED_MODULE_10___default())(_this37.provider); // create web3 instance
      // console.log(this.web3js);
      _this37.accounts = yield _this37.web3js.eth.getAccounts(console.log);
      const tokenContract = new _this37.web3js.eth.Contract(_this37.tokenABI, tokenContractAddress);
      const gasPrice = yield _this37.web3js.eth.getGasPrice();
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
    var _this38 = this;
    return (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this38.fs.collection("Items/" + _this38.globalID + "/Fashions").doc(DocId).valueChanges().subscribe( /*#__PURE__*/function () {
        var _ref15 = (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datanewFashions) {
          console.log("datanewFashions", datanewFashions);
          _this38.detailJaket = datanewFashions;
          _this38.qrcodeJaket = _this38.detailJaket.QrCodeUrl;
          _this38.nameJaket = _this38.detailJaket.ItemId;
          _this38.ClaimmedJaket = _this38.detailJaket.QrCodeData.Claimmed;
          console.log(_this38.ClaimmedJaket);
        });
        return function (_x13) {
          return _ref15.apply(this, arguments);
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
}, (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
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
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_9__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_6__.SendData
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
}]), (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "propDecorators", {
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
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\n  <!-- Header -->\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\n      <!-- Logo -->\n      <a color=\"dark\" href=\"/tabs/home\">\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n      </a>\n      <!-- Desktop Menu Actions -->\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\n          <!-- Mobile Logo / Menu Close -->\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\n            <!-- Mobile Logo -->\n            <a color=\"dark\" href=\"/tabs/home\">\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n            </a>\n          </div>\n          <!-- Primary Nav -->\n          <nav class=\"navbar w-full\">\n            <ul class=\"flex flex-col lg:flex-row\">\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/home\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\n                  <li>\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\n                    </a>\n                  </li>\n                  <!-- <li>\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\n                    </a>\n                  </li> -->\n                </ul>\n              </li>\n              <li class=\"js-nav-dropdown group relative\">\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\n                    </svg>\n                  </i>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- Mobile Connect Wallet / Socials -->\n          <!-- Actions -->\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\n            <!-- hatching -->\n            <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\n            </button> -->\n\n            <!-- cart -->\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <g>\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n                </g>\n              </svg>\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n            </button>\n            \n            <!-- Profile -->\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n                <ion-icon name=\"log-in-outline\"></ion-icon>\n              </button>\n            </div>\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n                </svg>\n              </button>\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                  </svg>\n                </button>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                  <div class=\"flex items-center mb-3\">\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f3ba2f\">\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                  </div>\n                  <div class=\"flex items-center mb-3\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                      <g fill=\"#f0b90b\">\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                      </g>\n                    </svg>\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                  </div>\n                </div>\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                  <div>\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                    <div class=\"flex items-center mt-2\">\n                      <!-- Default Progressbar with 50 percent -->\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                    </div>\n                  </div>\n                </div>\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n                </a>\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                  </svg>\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Mobile Menu Actions -->\n        <div class=\"ml-auto flex lg:hidden\">\n          <!-- hatching -->\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\n          </button> -->\n\n          <!-- cart -->\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n              <g>\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\n              </g>\n            </svg>\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\n          </button>\n          \n          <!-- Profile -->            \n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </button>\n          </div>\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\n              </svg>\n            </button>\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\n                </svg>\n              </button>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\n                <div class=\"flex items-center mb-3\">\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\n                </div>\n                <div class=\"flex items-center mb-3\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f0b90b\">\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\n                    </g>\n                  </svg>\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\n                </div>\n              </div>\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\n                <div>\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\n                  <div class=\"flex items-center mt-2\">\n                    <!-- Default Progressbar with 50 percent -->\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n                  </div>\n                </div>\n              </div>\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\n              </a>\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\n                </svg>\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\n              </a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </header>\n  \n  <main>\n    <!-- Banner -->\n    <div class=\"relative\">\n      <img src=\"assets/img/user/banner.png\" alt=\"banner\" class=\"h-[18.75rem] object-cover\" />\n    </div>\n    <!-- end banner -->\n    <!-- Profile -->\n    <section class=\"dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28\">\n      <!-- Avatar -->\n      <div class=\"absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center\">\n        <figure class=\"relative\">\n          <img src=\"assets/img/user/1user_avatar.gif\" alt=\"collection avatar\" class=\"dark:border-jacarta-600 rounded-xl border-[5px] border-white\" />\n          <div class=\"dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n              <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\n            </svg>\n          </div>\n        </figure>\n      </div>\n      <div class=\"container\">\n        <div class=\"text-center\">\n          <h2 class=\"font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white\">{{username}}</h2>\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4\">\n            <span data-tippy-content=\"ETH\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                <g fill=\"#f3ba2f\">\n                  <style type=\"text/css\">\n                    .st0{fill:#00FF99;}\n                    .st1{fill:#10B981;}\n                    .st2{fill:#0D7F53;}\n                    .st3{fill:#E6E6E6;}\n                  </style>\n                  <title>point</title>\n                  <circle class=\"st0\" cx=\"894.4\" cy=\"896.8\" r=\"894\"/>\n                  <circle class=\"st1\" cx=\"894.4\" cy=\"896.8\" r=\"758.7\"/>\n                  <path class=\"st2\" d=\"M1291.4,249.2c78.2,122,119.6,263.8,119.4,408.7c0,419-339.7,758.7-758.7,758.7\n                    c-140.2,0.2-277.6-38.6-397-112.1c134.8,210.5,370.8,350,639.4,350c419,0,758.7-339.7,758.7-758.7\n                    C1653.2,622.4,1508.4,382.7,1291.4,249.2z\"/>\n                  <path class=\"st3\" d=\"M531.7,1490.2c-70.9-110.6-108.5-239.3-108.3-370.7c0-380.1,308.1-688.2,688.2-688.2\n                    c127.1-0.2,251.8,35,360.1,101.7c-122.3-191-336.3-317.5-579.9-317.5c-380.1,0-688.2,308.1-688.2,688.2\n                    C203.6,1151.7,334.9,1369.1,531.7,1490.2z\"/>\n                </g>\n              </svg>\n            </span>\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\n              <span>{{points}} Point</span>\n            </button>\n          </div>\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4 ml-2\">\n            <span data-tippy-content=\"ETH\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                <g fill=\"#f3ba2f\">\n                  <style type=\"text/css\">\n                    .st4{fill:#CC9900;}\n                    .st5{fill:#0D7F53;}\n                    .st6{fill:#10B981;}\n                    .st7{clip-path:url(#SVGID_2_);}\n                    .st8{fill:none;stroke:#00FF99;stroke-width:80;stroke-miterlimit:10;}\n                  </style>\n                  <title>gatcha-box</title>\n                  <path class=\"st4\" d=\"M507.5,430.5C436.5,430.5,379,488,379,559c0,0,0,0,0,0v207.5l1-0.1c1.6-0.1,3.2,0,4.7,0.2h434.2V430.5H507.5z\"\n                    />\n                  <path class=\"st5\" d=\"M1396.7,1666c98.9,0,179-57.5,179-128.5v-624H962.6V1666H1396.7z\"/>\n                  <path class=\"st5\" d=\"M202.3,1537.6c0,71,80.6,128.5,180.1,128.5h436.6V913.6H202.3V1537.6z\"/>\n                  <path class=\"st4\" d=\"M962.6,766.7h439.9V559c0-70.9-57.5-128.5-128.4-128.5c0,0-0.1,0-0.1,0H962.6V766.7\"/>\n                  <g>\n                    <path class=\"st6\" d=\"M785.3,754.9c0.4-24.5,0.6-49,0.8-73.5c0.2-43.9,0.2-87.8,0.2-131.7c0-21.9,0.1-43.9,0-65.8\n                      c-0.1-17.8-2.5-36,1.7-53.5H220.6c-92.8,0-168.1,75.3-168.1,168.1c0,0,0,0,0,0l0,0c0,92.8,75.3,168.1,168.1,168.1h567.1\n                      C786,763,785.2,759,785.3,754.9z\"/>\n                    <rect x=\"740.6\" y=\"430.5\" class=\"st6\" width=\"78.3\" height=\"336.2\"/>\n                  </g>\n                  <g>\n                    <path class=\"st6\" d=\"M1561,430.5H996.2c0,0.1,0,0.3,0,0.4c3.7,32.7,3.9,65.5,3.8,98.4c2.3,79.1,2.9,158.2,2.9,237.4h558\n                      c92.8,0,168.1-75.3,168.1-168.1l0,0C1729,505.8,1653.8,430.5,1561,430.5z\"/>\n                    <rect x=\"962.6\" y=\"430.5\" class=\"st6\" width=\"48.7\" height=\"336.2\"/>\n                  </g>\n                  <g>\n                    <defs>\n                      <rect id=\"SVGID_1_\" x=\"254\" y=\"114\" width=\"1321.7\" height=\"316.5\"/>\n                    </defs>\n                    <clipPath id=\"SVGID_2_\">\n                      <use xlink:href=\"#SVGID_1_\"  style=\"overflow:visible;\"/>\n                    </clipPath>\n                    <g class=\"st7\">\n                      \n                        <ellipse transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -88.3685 558.8589)\" class=\"st8\" cx=\"630.4\" cy=\"386.1\" rx=\"219\" ry=\"240.2\"/>\n                      \n                        <ellipse transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 64.0444 926.8279)\" class=\"st8\" cx=\"1150.8\" cy=\"386.1\" rx=\"240.2\" ry=\"219\"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>\n            </span>\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\n              <span>{{count_roulette}} Gatcha</span>\n            </button>\n          </div>\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4 ml-2\">\n            <span data-tippy-content=\"ETH\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                <g fill=\"#f3ba2f\">\n                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                </g>\n              </svg>\n            </span>\n            <button class=\"js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap\" data-tippy-content=\"Copy\">\n              <span>{{wallets}}</span>\n            </button>\n          </div>\n          <p class=\"dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg\"> {{email}} </p>\n          <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your royalty progress {{percentRoyalty}}%</span>\n          <div class=\"flex items-center mt-2\">\n            <!-- Default Progressbar with 50 percent -->\n            <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\n          </div>\n          <!-- <ion-button class=\"mt-2\" (click)=\"airdropTokens('0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd', '0.001', '0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd')\" size=\"small\">Airdrop Token</ion-button> -->\n          <ion-button class=\"mt-2\" *ngIf=\"percentRoyalty == 0\" size=\"small\" disabled>Withdraw</ion-button>\n          <ion-button class=\"mt-2\" *ngIf=\"percentRoyalty >= 100\" (click)=\"withdraw()\" size=\"small\">Withdraw</ion-button>\n          <br>\n          <span class=\"text-jacarta-400\">Link Refferal <a class=\"text-green\" [routerLink]=\"['/tabs/profile']\">https://marketplace.oragon.network/tabs/register/12345</a> </span>\n          <div class=\"mt-6 flex items-center justify-center space-x-2.5\">\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\n              <div class=\"js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0\" role=\"button\" data-tippy-content=\"Favorite\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                  <path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\" />\n                </svg>\n              </div>\n            </div>\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\n              <a href=\"#\" class=\"dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm\" role=\"button\" id=\"collectionShare\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" data-tippy-content=\"Share\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4\">\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                  <path d=\"M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z\" />\n                </svg>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"collectionShare\">\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"facebook\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                    <path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path>\n                  </svg>\n                  <span class=\"mt-1 inline-block\">Facebook</span>\n                </a>\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                    <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\n                  </svg>\n                  <span class=\"mt-1 inline-block\">Twitter</span>\n                </a>\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                  <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"discord\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\n                    <path d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"></path>\n                  </svg>\n                  <span class=\"mt-1 inline-block\">Discord</span>\n                </a>\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z\" />\n                  </svg>\n                  <span class=\"mt-1 inline-block\">Email</span>\n                </a>\n                <a href=\"#\" class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z\" />\n                  </svg>\n                  <span class=\"mt-1 inline-block\">Copy</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white\">\n              <a href=\"#\" class=\"dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm\" role=\"button\" id=\"collectionActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                <svg width=\"16\" height=\"4\" viewBox=\"0 0 16 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dark:fill-jacarta-200 fill-jacarta-500\">\n                  <circle cx=\"2\" cy=\"2\" r=\"2\" />\n                  <circle cx=\"8\" cy=\"2\" r=\"2\" />\n                  <circle cx=\"14\" cy=\"2\" r=\"2\" />\n                </svg>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"collectionActions\">\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> New bid </button>\n                <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" />\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Refresh Metadata </button>\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Share </button>\n                <button class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Report </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- end profile -->\n\n    <!-- Collection -->\n    <section class=\"relative\">\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\n        <img src=\"assets/img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\n      </picture>\n      <div class=\"container\">\n        <!-- Tabs Nav -->\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(10)\" class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"owned-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#owned\" type=\"button\" role=\"tab\" aria-controls=\"owned\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">Owned</span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-fnft-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-fnft\" type=\"button\" role=\"tab\" aria-controls=\"on-fnft\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">FNFT <span class=\"font-display text-base text-green\">new</span></span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(20)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-sale-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-sale\" type=\"button\" role=\"tab\" aria-controls=\"on-sale\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">On Sale</span>\n            </button>\n          </li>\n          <!-- <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(30)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-bid-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-bid\" type=\"button\" role=\"tab\" aria-controls=\"on-bid\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">On BID</span>\n            </button>\n          </li> -->\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(80)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"bidhistory-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bidhistory\" type=\"button\" role=\"tab\" aria-controls=\"bidhistory\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">BID History</span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(50)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"royaties-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#royaties\" type=\"button\" role=\"tab\" aria-controls=\"royaties\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">Royalties</span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(60)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"trxhistroy-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#trxhistroy\" type=\"button\" role=\"tab\" aria-controls=\"trxhistroy\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">Transction History</span>\n            </button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button (click)=\"tab(70)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"point-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#point\" type=\"button\" role=\"tab\" aria-controls=\"point\" aria-selected=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\n              </svg>\n              <span class=\"font-display text-base font-medium\">Point History</span>\n            </button>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <!-- Owned Tab -->\n          <div class=\"tab-pane fade show active\" id=\"owned\" role=\"tabpanel\" aria-labelledby=\"owned-tab\">\n            <!-- Filters -->\n              <div class=\"mb-8 flex flex-wrap items-center justify-between\">\n                <div class=\"flex flex-wrap items-center\">\n                  <!-- Category -->\n                  <div class=\"my-1 mr-2.5\">\n                    <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                        <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\n                      </svg>\n                      <span>Category</span>\n                    </button>\n                    <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\n                      <ul class=\"flex flex-col flex-wrap\">\n                        <li>\n                          <div style=\"padding-right: 1rem;\">\n                            <div class=\"mb-2 flex items-center justify-between\">\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(11)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragons </a></span>\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pdragonLength}}</span>\n                            </div>\n                          </div>\n                        </li>\n                        <li>\n                          <div style=\"padding-right: 1rem;\">\n                            <div class=\"mb-2 flex items-center justify-between\">\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(20)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggLength}}</span>\n                            </div>\n                          </div>\n                        </li>\n                        <li>\n                          <div style=\"padding-right: 1rem;\">\n                            <div class=\"mb-2 flex items-center justify-between\">\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(30)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery </a></span>\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\n                            </div>\n                          </div>\n                        </li>\n                        <li>\n                          <div style=\"padding-right: 1rem;\">\n                            <div class=\"mb-2 flex items-center justify-between\">\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryowned(40)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Foods </a></span>\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            <!-- end filters -->\n            <!-- Grid -->\n              <!-- Dragons -->\n                <div *ngIf=\"currentp2powned == 10\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of dragonsowned\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <!--  -->\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\n                              <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\n                            </div>\n                          </div>\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                            <span data-tippy-content=\"ETH\">\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                                <g fill=\"#f3ba2f\">\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                                </g>\n                              </svg>\n                            </span>\n                            <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\n                          </span>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <!-- <button (click)=\"setdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowDragonModal\"> Sell </button>\n                          <button (click)=\"setdgbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowDragonModal\"> Auction </button> -->\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n                <div *ngIf=\"currentp2powned == 11\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of sortdragonsowned\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <!--  -->\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,13)}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId.substr(0,13)}}</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                            <span data-tippy-content=\"ETH\">\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                                <g fill=\"#f3ba2f\">\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                                </g>\n                              </svg>\n                            </span>\n                            <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\n                          </span>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <!-- <button (click)=\"setdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowDragonModal\"> Sell </button>\n                          <button (click)=\"setdgbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowDragonModal\"> Auction </button> -->\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- dragons -->\n              <!-- Eggs -->\n                <div *ngIf=\"currentp2powned == 20\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of sorteggsowned\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          \n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.uid}}...</span></p>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 *ngIf=\"usedEgg == datas.DocId\" class=\"text-green mr-1\">Egg in use</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\" *ngIf=\"usedEgg != datas.DocId\">\n                          <!-- <button (click)=\"seteggbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowEggModal\"> Sell </button> -->\n                          <!-- <button (click)=\"seteggbiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowEggModal\"> Auction </button> -->\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- eggs -->\n              <!-- Batteries -->\n                <div *ngIf=\"currentp2powned == 30\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of sortbatteriesowned\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span></p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 *ngIf=\"usedBattery == datas.DocId\" class=\"text-green mr-1\">1 of {{datas.lengthBattery}} in use</h4>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <span *ngIf=\"datas.DocId != usedBattery;else btnsellbattery\">\n                            <!-- <button (click)=\"setbatterybuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowBatteryModal\"> Sell </button> -->\n                            <!-- <button (click)=\"setbatterybiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowBatteryModal\"> Auction </button> -->\n                          </span>\n                          <ng-template #btnsellbattery>\n                            <span *ngIf=\"datas.lengthBattery > 1\">\n                              <!-- <button (click)=\"setbatterybuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowBatteryModal\"> Sell </button> -->\n                              <!-- <button (click)=\"setbatterybiddetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-2 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#setbidNowBatteryModal\"> Auction </button> -->\n                            </span>\n                          </ng-template>\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- batteries -->\n              <!-- Foods -->\n                <div *ngIf=\"currentp2powned == 40\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div>\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <img src=\"assets/img/food.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n\n                          \n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{marketp2pfoodLength}} Foods</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Food Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{marketp2pfoodDate}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{marketp2pfoodowner}}...</span></p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">${{marketp2pfoodpriceUSD}} USD / Item</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <!-- <a (click)=\"setfoodbuydetail()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#sellNowFoodModal\">Sell Now</a> -->\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- foods -->\n            <!-- end grid -->\n          </div>\n          <!-- end owned tab -->\n\n          <!-- On Sale Tab -->\n          <div class=\"tab-pane fade show\" id=\"on-sale\" role=\"tabpanel\" aria-labelledby=\"on-sale-tab\">\n            <!-- Grid -->\n              <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem;padding-bottom: 2vh;\">\n                <div *ngFor=\"let datas of dragonsHigh\">\n                  <article>\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                        <!--  -->\n                        <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                          <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                        <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                          <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                        <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                          <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                        <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                          <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                        <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                          <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                        <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                          <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                            <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                          <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                            <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                              </svg>\n                            </span>\n                            <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                            <ng-template #favorited>\n                              <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                            </ng-template>\n                          </div>\n                        </div>\n                      </figure>\n                      <div class=\"mt-7 flex items-center justify-between\">\n                        <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                          </a>\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                              <div class=\"mb-2 flex items-center justify-between\">\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                              </div>\n                            </div>\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                              <div class=\"mb-2 flex items-center justify-between\">\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                              </div>\n                            </div>\n                            <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                              <div class=\"mb-2 flex items-center justify-between\">\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                                <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"mt-2 text-sm\">\n                        <span class=\"mb-1 flex items-center whitespace-nowrap\">\n                          <span data-tippy-content=\"ETH\">\n                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                              <g fill=\"#f3ba2f\">\n                                <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                              </g>\n                            </svg>\n                          </span>\n                          <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\n                        </span>\n                      </div>\n                      <div class=\"mt-8 flex items-center justify-between\">\n                        <a (click)=\"delistDragon(datas.DocId, datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n                <div *ngFor=\"let datas of eggsHigh\">\n                  <article>\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                        <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                      </figure>\n                      <div class=\"mt-7 flex items-center justify-between\">\n                        <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                          </a>\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"mt-2 text-sm\">\n                        <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                      </div>\n                      <div class=\"mt-8 flex items-center justify-between\">\n                        <a (click)=\"delistEgg(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n                <div *ngFor=\"let datas of batteriesHigh\">\n                  <article>\n                    <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                      <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                        <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <!--  -->\n                        <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                      </figure>\n                      <div class=\"mt-7 flex items-center justify-between\">\n                        <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                        <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                        <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                          <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                            <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                          </a>\n                          <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                            <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\n                            <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"mt-2 text-sm\">\n                        <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                      </div>\n                      <div class=\"mt-8 flex items-center justify-between\">\n                        <a (click)=\"delistBattery(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\">Delist from Market</a>\n                      </div>\n                    </div>\n                  </article>\n                </div>\n              </div>\n            <!-- end grid -->\n          </div>\n          <!-- end on sale tab -->\n\n          <!-- On Fnft Tab -->\n          <div class=\"tab-pane fade show\" id=\"on-fnft\" role=\"tabpanel\" aria-labelledby=\"on-fnft-tab\">\n            <div class=\"flex flex-wrap items-center\">\n              <!-- Category -->\n              <div class=\"my-1 mr-2.5\">\n                <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n                    <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\n                  </svg>\n                  <span>Category</span>\n                </button>\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\n                  <ul class=\"flex flex-col flex-wrap\">\n                    <li>\n                      <div style=\"padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Hoodie </a></span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{fashionjaketsLength}}</span>\n                        </div>\n                      </div>\n                    </li>\n                    <li>\n                      <div style=\"padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Shirts </a></span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggLength}}</span>\n                        </div>\n                      </div>\n                    </li>\n                    <li>\n                      <div style=\"padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(3)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Pants </a></span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\n                        </div>\n                      </div>\n                    </li>\n                    <li>\n                      <div style=\"padding-right: 1rem;\">\n                        <div class=\"mb-2 flex items-center justify-between\">\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(4)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Shorts </a></span>\n                          <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <!-- Grid -->\n            <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-10 pb-2\" style=\"gap: 1.2rem\">\n              <div *ngFor=\"let s of jakets\">\n                <article>\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\">\n                        <img *ngIf=\"s.ItemId == 'ITM13'\" src=\"assets/img/store/hoodie-metalicana.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <img *ngIf=\"s.ItemId == 'ITM11'\" src=\"assets/img/store/hoodie-meru.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        <img *ngIf=\"s.ItemId == 'ITM1'\" src=\"assets/img/store/hoodie-meru.jpg\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                      </a>\n                    </figure>\n                    <div class=\"mt-7 flex items-center justify-between\">\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\">\n                        <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.name}}</span>\n                      </a>\n                    </div>\n                    <div class=\"mt-2 text-sm\">\n                      <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.DocId}}</span>\n                    </div>\n                    <div class=\"mt-2 text-sm\">\n                      <h4 *ngIf=\"s.Claimmed == 0;else claimmed\" class=\"text-green mr-1\">Item belum diclaim</h4>\n                      <ng-template #Claimmed>\n                        <h4 class=\"text-green mr-1\">Item telah diclaim</h4>\n                      </ng-template>\n                    </div>\n                    <div class=\"mt-8 flex items-center justify-between\">\n                      <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\"> Buy</a> -->\n                      <a (click)=\"getselljaketsUserownedqrcodemp(s.DocId)\" data-bs-toggle=\"modal\" data-bs-target=\"#qrcodemodal\" class=\"group flex items-center\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100\">\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                          <path d=\"M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z\"></path>\n                        </svg>\n                      </a>\n                    </div>\n                  </div>\n                </article>\n              </div>\n            </div>\n            <!-- end grid -->\n          </div>\n          <!-- end on fnft tab -->\n\n          <!-- On BID Tab -->\n          <div class=\"tab-pane fade show\" id=\"on-bid\" role=\"tabpanel\" aria-labelledby=\"on-bid-tab\">\n            <!-- Grid -->\n              <!-- Dragons -->\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of dragons\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <!--  -->\n                          <div *ngIf=\"datas.ItemId == 'ITM1'\">\n                            <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM9'\">\n                            <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM10'\">\n                            <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM11'\">\n                            <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM12'\">\n                            <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                          <div *ngIf=\"datas.ItemId == 'ITM13'\">\n                            <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                            <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\n                              <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                            </span>\n                            <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                              <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                                  <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                                  <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                                </svg>\n                              </span>\n                              <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\n                              <ng-template #favorited>\n                                <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\n                              </ng-template>\n                            </div>\n                          </div>\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">                \n                          <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\n                                </div>\n                              </div>\n                              <div style=\"padding-left: 1rem;padding-right: 1rem;\">\n                                <div class=\"mb-2 flex items-center justify-between\">\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\n                                  <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <a (click)=\"getdgbuydetail(datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\">Delist Item</a>\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- dragons -->\n              <!-- Eggs -->\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of sorteggs\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          <a (click)=\"geteggbuydetail(datas.ItemId)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowEggModal\">Buy</a>\n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- eggs -->\n              <!-- Batteries -->\n                <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\n                  <div *ngFor=\"let datas of batteriesHigh\">\n                    <article>\n                      <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\n                        <figure class=\"relative\" style=\"margin: 0em 0px;\">\n                          <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                          <!--  -->\n                          <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\n                        </figure>\n                        <div class=\"mt-7 flex items-center justify-between\">\n                          <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.lengthBattery}} Batteries</span>\n                          <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\n                            <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                              <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\n                              <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owner}}...</span></p>\n                              <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"mt-2 text-sm\">\n                          <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\n                        </div>\n                        <div class=\"mt-8 flex items-center justify-between\">\n                          \n                        </div>\n                      </div>\n                    </article>\n                  </div>\n                </div>\n              <!-- batteries -->\n            <!-- end grid -->\n          </div>\n          <!-- end on bid tab -->\n\n          <!-- Royalties Tab -->\n          <div class=\"tab-pane fade show\" id=\"royaties\" role=\"tabpanel\" aria-labelledby=\"royaties-tab\">\n            <!-- Rankings -->\n            <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12\">\n              <!-- Table -->\n              <div *ngIf=\"currentp2powned == 50\" class=\"scrollbar-custom overflow-hidden\">\n                <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\n                  <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Collection</span>\n                    </div>\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Address</span>\n                    </div>\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Earn Royalties</span>\n                    </div>\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Hash</span>\n                    </div>\n                    <div class=\"w-[17%] py-6 px-8\" role=\"columnheader\">\n                      <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date</span>\n                    </div>\n                  </div>\n                  <a *ngFor=\"let r of royalties;let i = index\" href=\"#\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\"role=\"cell\">\n                      <span class=\"mr-2 lg:mr-4\">{{i}}</span>\n                      <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\n                        <img *ngIf=\"r.item == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\n                          <span *ngFor=\"let p of profile\">\n                            <img *ngIf=\"p.ItemId == r.itemid\" [src]=\"p.url\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\n                          </span>\n                        <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                            <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\n                          </svg>\n                        </div>\n                      </figure>\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\n                        {{username}}\n                      </span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-green\">{{wallets}}....</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                          <g fill=\"#f3ba2f\">\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                          </g>\n                        </svg>\n                      </span>\n                      <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-green\">{{wallets}}....</span>\n                    </div>\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\n                      <span class=\"text-white\">{{r.date | date}}</span>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n            <!-- end rankings -->\n          </div>\n          <!-- end royalties tab -->\n\n          <!-- Transaction History Tab -->\n          <div class=\"tab-pane fade show\" id=\"trxhistroy\" role=\"tabpanel\" aria-labelledby=\"trxhistroy-tab\">\n            <!-- Rankings -->\n            <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 mb-6\">\n              <!-- Details -->\n              <div class=\"table-recently\">\n                <!-- Table -->\n                <div class=\"scrollbar-custom overflow-hidden\">\n                  <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\n                    <span>\n                      <a *ngFor=\"let r of trxhistory;let i = index\">\n                        <span class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 1rem;padding-left: 2rem;\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\n                              {{i+1}}\n                            </span>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 1rem;padding-left: 2rem;\">\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\n                              {{r.userid.substr(0,10)}}...\n                            </span>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\n                            <span class=\"text-sm font-medium tracking-tight\">{{r.item.substr(0,17)}}...</span>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4\" role=\"cell\" style=\"padding-right: 4rem;padding-left: 2rem;\">\n                            <span class=\"-ml-1\" data-tippy-content=\"ETH\">\n                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                                <g fill=\"#f3ba2f\">\n                                  <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                                </g>\n                              </svg>\n                            </span>\n                            <span class=\"text-sm font-medium tracking-tight\">{{r.amount}} BNB</span>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\n                            <a href=\"https://bscscan.com/tx/{{r.tx_hash}}\" target=\"_blank\">\n                              <span class=\"text-green\">{{r.tx_hash.substr(0,20)}}...</span>\n                            </a>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 3rem;padding-left: 2rem;\">\n                            <span class=\"text-white\">{{r.date | date}}</span>\n                          </div>\n                        </span>\n                      </a>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <!-- end details -->\n            </div>\n            <!-- end rankings -->\n          </div>\n          <!-- end transaction history tab -->\n\n          <!-- Point History Tab -->\n          <div class=\"tab-pane fade show\" id=\"point\" role=\"tabpanel\" aria-labelledby=\"point-tab\">\n            <!-- Rankings -->\n            <div class=\"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-6\">\n              <!-- Details -->\n              <div class=\"table-recently\">\n                <!-- Table -->\n                <div class=\"scrollbar-custom overflow-hidden\">\n                  <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg min-w-[736px] border bg-white text-sm dark:text-white\">\n                    <span>\n                      <a *ngFor=\"let r of pointhistoryall;let i = index\">\n                        <span class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 2rem;padding-left: 2rem;\">\n                            <span data-tippy-content=\"ETH\">\n                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                                <g fill=\"#f3ba2f\">\n                                  <style type=\"text/css\">\n                                    .st0{fill:#00FF99;}\n                                    .st1{fill:#10B981;}\n                                    .st2{fill:#0D7F53;}\n                                    .st3{fill:#E6E6E6;}\n                                  </style>\n                                  <title>point</title>\n                                  <circle class=\"st0\" cx=\"894.4\" cy=\"896.8\" r=\"894\"/>\n                                  <circle class=\"st1\" cx=\"894.4\" cy=\"896.8\" r=\"758.7\"/>\n                                  <path class=\"st2\" d=\"M1291.4,249.2c78.2,122,119.6,263.8,119.4,408.7c0,419-339.7,758.7-758.7,758.7\n                                    c-140.2,0.2-277.6-38.6-397-112.1c134.8,210.5,370.8,350,639.4,350c419,0,758.7-339.7,758.7-758.7\n                                    C1653.2,622.4,1508.4,382.7,1291.4,249.2z\"/>\n                                  <path class=\"st3\" d=\"M531.7,1490.2c-70.9-110.6-108.5-239.3-108.3-370.7c0-380.1,308.1-688.2,688.2-688.2\n                                    c127.1-0.2,251.8,35,360.1,101.7c-122.3-191-336.3-317.5-579.9-317.5c-380.1,0-688.2,308.1-688.2,688.2\n                                    C203.6,1151.7,334.9,1369.1,531.7,1490.2z\"/>\n                                </g>\n                              </svg>\n                            </span>\n                            <span class=\"text-sm font-medium tracking-tight text-green\">+ {{r.qtyPoint}} Points</span>\n                          </div>\n                          <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4\" role=\"cell\" style=\"padding-right: 3rem;padding-left: 2rem;\">\n                            <span class=\"text-white\">{{r.date | date}}</span>\n                          </div>\n                        </span>\n                      </a>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <!-- end details -->\n            </div>\n            <!-- end rankings -->\n          </div>\n          <!-- end point history tab -->\n        </div>\n      </div>\n    </section>\n    <!-- end collection -->\n  </main>\n\n  <!-- Sell Now Dragon Modal -->\n  <div class=\"modal fade\" id=\"sellNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"sellNowDragonModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sellNowDragonModalLabel\">Sell</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2pdragonID == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM9'\" src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM10'\" src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM11'\" src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM12'\" src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM13'\" src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n            </figure>\n            <div>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\n              <h3 *ngIf=\"marketp2pdragonID == 'null'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">NULL</h3>\n              <div class=\"flex flex-wrap items-center\">\n                <!-- <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Creator Earnings: 5%</span> -->\n              </div>\n            </div>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\n          </div>\n          <div class=\"items-center justify-center space-x-4\">\n            <!-- <button (click)=\"sellNowDragon(marketp2pdragonDocId)\" *ngIf=\"marketp2pdragonLength > 0 && marketp2pdragonpriceUSD >= 125\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button> -->\n            <button (click)=\"sellNowDragon(marketp2pdragonDocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\n          </div>\n        </div>\n        <div class=\"dark:text-jacarta-300 text-center p-4\">The price must be above the floor price of $125</div>\n      </div>\n    </div>\n  </div>\n  <!-- Bid Now Dragon Modal -->\n  <div class=\"modal fade\" id=\"setbidNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowDragonModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"setbidNowDragonModalLabel\">Auction</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2pdragonID == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM9'\" src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM10'\" src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM11'\" src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM12'\" src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n              <img *ngIf=\"marketp2pdragonID == 'ITM13'\" src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 80%;margin-right: -40vh;\" />\n            </figure>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\n                  </svg>\n                </div>\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Free BID </span>\n                  </button>\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Step BID </span>\n                  </button>\n                </div>\n              </div>\n              <div class=\"slidecontainer\">\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\n                <p><span>{{rangeValue}}</span> Hours</p>\n              </div>\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\n          </div>\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\n            <button (click)=\"bidNowDragon(marketp2pdragonDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>View your item on BID market</ion-label>\n            </ion-tab-button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Sell Now Egg Modal -->\n  <div class=\"modal fade\" id=\"sellNowEggModal\" tabindex=\"-1\" aria-labelledby=\"sellNowEggModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sellNowEggModalLabel\">Complete checkout</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2peggID == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <div class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\n                <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\n                    <path fill=\"none\" d=\"M0 0H24V24H0z\" />\n                    <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\n                  </svg>\n                </span>\n                <span class=\"dark:text-jacarta-200 text-sm\">188</span>\n              </div>\n            </figure>\n            <div>\n              <h3 *ngIf=\"marketp2peggID == 'ITM6'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA EGG</h3>\n              <h3 *ngIf=\"marketp2peggID == 'ITM8'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA EGG</h3>\n              <h3 *ngIf=\"marketp2peggID == 'ITM2'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU EGG</h3>\n              <h3 *ngIf=\"marketp2peggID == 'ITM5'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG EGG</h3>\n              <h3 *ngIf=\"marketp2peggID == 'ITM7'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH EGG</h3>\n              <h3 *ngIf=\"marketp2peggID == 'ITM4'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH EGG</h3>\n              <div class=\"flex flex-wrap items-center\">\n                <!-- <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Creator Earnings: 5%</span> -->\n              </div>\n            </div>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2peggpriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\">\n            <button (click)=\"sellNowEgg(marketp2peggDocId)\" *ngIf=\"marketp2peggLength > 0 && marketp2peggpriceUSD >= 115\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\n          </div>\n          <div class=\"dark:text-jacarta-300 text-center\">The price must be above the floor price of $115</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Bid Now Egg Modal -->\n  <div class=\"modal fade\" id=\"setbidNowEggModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowEggModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"setbidNowEggModalLabel\">Auction</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2peggID == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n              <!--  -->\n              <img *ngIf=\"marketp2peggID == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\n            </figure>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\n                  </svg>\n                </div>\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Free BID </span>\n                  </button>\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Step BID </span>\n                  </button>\n                </div>\n              </div>\n              <div class=\"slidecontainer\">\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\n                <p><span>{{rangeValue}}</span> Hours</p>\n              </div>\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2peggpriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\">\n            <button (click)=\"bidNowEgg(marketp2peggDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>View your item on BID market</ion-label>\n            </ion-tab-button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Sell Now Battery Modal -->\n  <div class=\"modal fade\" id=\"sellNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"sellNowBatteryModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sellNowBatteryModalLabel\">Complete checkout</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2pbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n              <!--  -->\n              <img *ngIf=\"marketp2pbatteryID == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n              <!--  -->\n              <img *ngIf=\"marketp2pbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n            </figure>\n            <div>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\n            </div>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"0\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item price\" required />\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pbatterypriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\">\n            <button (click)=\"sellNowBattery(marketp2pbatteryDocId)\" *ngIf=\"marketp2pbatterypriceUSD >= 115\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Item </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Bid Now Battery Modal -->\n  <div class=\"modal fade\" id=\"setbidNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"setbidNowBatteryModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"setbidNowBatteryModalLabel\">Auction</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n            <figure class=\"mr-5 self-start\">\n              <img *ngIf=\"marketp2pbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n              <!--  -->\n              <img *ngIf=\"marketp2pbatteryID == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n              <!--  -->\n              <img *ngIf=\"marketp2pbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n            </figure>\n            <div>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\n            </div>\n            <div class=\"ml-auto\">\n              <input type=\"number\" [ngModel]=\"input_price\" min=\"1\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter item floor price\" required />\n              <div class=\"dropdown relative mb-4 cursor-pointer mt-2\">\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white\" role=\"button\" id=\"item-blockchain\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <!-- <span *ngIf=\"selectedBid == 0\" class=\"flex items-center\">Select type BID</span> -->\n                  <span class=\"flex items-center\">{{selectedBid}}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\"></path>\n                  </svg>\n                </div>\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"item-blockchain\">\n                  <button (click)=\"typeBid(1)\" class=\"dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Free BID </span>\n                  </button>\n                  <button (click)=\"typeBid(2)\" class=\"dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-base transition-colors dark:text-white\">\n                    <span class=\"flex items-center\">Step BID </span>\n                  </button>\n                </div>\n              </div>\n              <div class=\"slidecontainer\">\n                <input type=\"range\" min=\"1\" max=\"24\" class=\"slider\" (ngModelChange)=\"myRange($event)\" [ngModel]=\"rangeValue\">\n                <p><span>{{rangeValue}}</span> Hours</p>\n              </div>\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\n                    <g fill=\"#f3ba2f\">\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\n                    </g>\n                  </svg>\n                </span>\n                <span class=\"text-green font-medium tracking-tight\">{{input_price}} BNB</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pbatterypriceUSD}}</div>\n            </div>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\">\n            <button (click)=\"bidNowBattery(marketp2pbatteryDocId)\" *ngIf=\"selectedBid != '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> BID This Item </button>\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on BID market</a>\n            <!-- <ion-tab-button tab=\"p2pmarket\" *ngIf=\"selectedBid == '-'\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>View your item on BID market</ion-label>\n            </ion-tab-button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Sell Now Food Modal -->\n  <div class=\"modal fade\" id=\"sellNowFoodModal\" tabindex=\"-1\" aria-labelledby=\"sellNowFoodModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sellNowFoodModalLabel\">Complete checkout</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative items-center border-t border-b py-4\">\n            <div style=\"width: 100%;\">\n              <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FOODS</h3>\n              <div class=\"flex flex-wrap items-center\">\n                <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Max {{marketp2pfoodLength}} Foods</span>\n              </div>\n            </div>\n            <div class=\"pt-2\" style=\"width: 100%;\">\n              <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" id=\"input_price\" min=\"1\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter Price / Items\" required />\n            </div>\n            <div class=\"pt-2\" style=\"width: 100%;\">\n              <input type=\"number\" [ngModel]=\"input_stock\" (ngModelChange)=\"onStockChange($event)\" id=\"input_stock\" min=\"1\" max=\"{{marketp2pfoodLength}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter Qty Items\" required />\n            </div>\n          </div>\n          <!-- Total -->\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\n            <div class=\"ml-auto\">\n              <span class=\"flex items-center whitespace-nowrap\">\n                <span data-tippy-content=\"ETH\">                  \n                </span>\n                <span class=\"text-green font-medium tracking-tight\">${{input_price}} Per Items</span>\n              </span>\n              <div class=\"dark:text-jacarta-300 text-right\">{{marketp2pfoodpriceUSD}} USD</div>\n              <div class=\"dark:text-jacarta-300 text-right\">{{marketp2pfoodpriceBNB}} BNB</div>\n            </div>\n          </div>\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\n            <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Current BNB<br> $1 : {{current_bnb_wei}} BNB</span>\n          </div>\n        </div>\n        <!-- end body -->\n        <div class=\"modal-footer\">\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\n          </div>\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\n            <button (click)=\"sellNowFood(input_stock, marketp2pfoodpriceBNB)\" *ngIf=\"marketp2pfoodpriceUSD >= 1 && marketp2pfoodLength > 0 && input_stock <= marketp2pfoodLength && input_stock > 0 && selectedBid != '-' && input_price >= 0.1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Sell This Items </button>\n            <a color=\"dark\" href=\"tabs/p2pmarket\" *ngIf=\"selectedBid == '-'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\">View your item on P2P market</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Hatching Modal -->\n  <div *ngIf=\"hatching == true\" class=\"modal fade\" id=\"hatchModal\" tabindex=\"-1\" aria-labelledby=\"hatchModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"hatchModalLabel\">Items being used on the incubator</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n          </div>\n          <div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataEgg.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 30%;\" />\n              </figure>\n              <div>\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{hatchingDataEgg.DocId}}</h3>\n                <div class=\"flex flex-wrap items-center\">\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{hatchingDataEgg.CreatedAt}}</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n                <!--  -->\n                <img *ngIf=\"hatchingDataBattery.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\n              </figure>\n              <div>\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{hatchingDataBattery.DocId}}</h3>\n                <div class=\"flex flex-wrap items-center\">\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{hatchingDataBattery.CreatedAt}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 p-4 w-full\">\n            <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\n              <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Hatching ends in</span>\n              <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\n                <span class=\"countdown-days text-jacarta-700 dark:text-white\">\n                  <span class=\"js-countdown-days-number text-lg font-medium lg:text-[1.5rem]\">{{days}}</span>\n                  <span class=\"block text-xs font-medium tracking-tight\">Day</span>\n                </span>\n                <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\n                  <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hours}}</span>\n                  <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\n                </span>\n                <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\n                  <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutes}}</span>\n                  <span class=\"block text-xs font-medium tracking-tight\">Min</span>\n                </span>\n                <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\n                  <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{seconds}}</span>\n                  <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Qrcode Modal -->\n  <div class=\"modal fade\" id=\"qrcodemodal\" tabindex=\"-1\" aria-labelledby=\"qrcodemodalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog max-w-2xl\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"qrcodemodalLabel\">QR Code Items</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\n            </svg>\n          </button>\n        </div>\n        <!-- Body -->\n        <div class=\"modal-body p-6\">\n          <div class=\"mb-2 flex items-center justify-between\">\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\n          </div>\n          <div>\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative items-center border-t border-b py-4\">\n              <figure class=\"mr-5 self-start\">\n                <img *ngIf=\"ClaimmedJaket == true;else notclaimmed\" src=\"{{qrcodeJaket}}\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 100%;filter: blur(5px);\" />\n                <ng-template #notclaimmed>\n                  <img src=\"{{qrcodeJaket}}\" alt=\"item 5\" class=\"rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 100%;\" />\n                </ng-template>\n              </figure>\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 p-4 w-full\">\n                <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\n                  <span *ngIf=\"nameJaket == 'ITM13'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Metalicana Hoodie #{{detailJaket.Id}}</span>\n                  <span *ngIf=\"nameJaket == 'ITM11'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Ritra Hoodie #{{detailJaket.Id}}</span>\n                  <span *ngIf=\"nameJaket == 'ITM1'\" class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Meru Hoodie #{{detailJaket.Id}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"mt-2 text-sm\">\n            <h4 *ngIf=\"ClaimmedJaket == false;else claimmed\" class=\"text-green mr-1\">Item belum diclaim</h4>\n            <ng-template #Claimmed>\n              <h4 class=\"text-green mr-1\">Item telah diclaim</h4>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\n    <div class=\"container\">\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\n        <div class=\"col-span-3 md:col-span-4\">\n          <!-- Logo -->\n          <a href=\"#\" class=\"mb-6 inline-block\">\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\n          </a>\n          <p class=\"dark:text-jacarta-300 mb-12\">\n            Create, sell and collect truly rare digital artworks. Powered by blockchain technology.\n          </p>\n          <!-- Socials -->\n          <div class=\"flex space-x-5\">\n            <!-- <a href=\"#\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"facebook\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\n                ></path>\n              </svg>\n            </a> -->\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"twitter\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 512 512\"\n              >\n                <path\n                  d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"discord\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 640 512\"\n              >\n                <path\n                  d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"instagram\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 448 512\"\n              >\n                <path\n                  d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\n                ></path>\n              </svg>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\n              <svg\n                aria-hidden=\"true\"\n                focusable=\"false\"\n                data-prefix=\"fab\"\n                data-icon=\"youtube\"\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\n                role=\"img\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 20 20\"\n              >\n                <path\n                  d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"\n                ></path>\n              </svg>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\n        <span class=\"dark:text-jacarta-400 text-sm\"\n          >&copy;\n          <script>\n            document.write(new Date().getFullYear())\n          </script>\n          Copyright OragonX All Rights Reserved By\n          <a href=\"https://oragonbsc.io\" class=\"hover:text-accent\">OragonX</a></span\n        >\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\n          <li>\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\n          </li>\n          <li><a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n  <!-- end footer -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map