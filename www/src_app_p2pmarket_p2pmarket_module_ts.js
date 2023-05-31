(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_p2pmarket_p2pmarket_module_ts"],{

/***/ 81527:
/*!*****************************************!*\
  !*** ./src/app/date-difference.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateDifference": () => (/* binding */ DateDifference)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/**
 * @author Ronak Patel
 * @description This pipe create for find difference between two date.
 */


let DateDifference = class DateDifference {
  transform(startingDate, endingDate) {
    var startDate = new Date(startingDate);
    // user not pass endingDate then set current date as end date.
    if (!endingDate) {
      endingDate = new Date();
    }
    let endDate = new Date(endingDate);
    // chack start date and end date and base on condication alter date.
    if (startDate > endDate) {
      var swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    // This is for leap year.
    const startYear = startDate.getFullYear();
    const february = startYear % 4 === 0 && startYear % 100 !== 0 || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    let hourDiff = endDate.getHours() - startDate.getHours();
    let minuteDiff = endDate.getMinutes() - startDate.getMinutes();
    let secondDiff = endDate.getSeconds() - startDate.getSeconds();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    return yearDiff + "Years " + monthDiff + "Monts " + dayDiff + "Days " + hourDiff + "Hours " + minuteDiff + "Minutes " + secondDiff + "Seconds "
    // hourDiff + minuteDiff + secondDiff
    ;
  }
};

DateDifference = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: "dateDifference",
  pure: true
})], DateDifference);


/***/ }),

/***/ 33738:
/*!*******************************************************!*\
  !*** ./src/app/p2pmarket/p2pmarket-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2pmarketPageRoutingModule": () => (/* binding */ P2pmarketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _p2pmarket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p2pmarket.page */ 74347);




const routes = [{
  path: '',
  component: _p2pmarket_page__WEBPACK_IMPORTED_MODULE_0__.P2pmarketPage
}];
let P2pmarketPageRoutingModule = class P2pmarketPageRoutingModule {};
P2pmarketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], P2pmarketPageRoutingModule);


/***/ }),

/***/ 23279:
/*!***********************************************!*\
  !*** ./src/app/p2pmarket/p2pmarket.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2pmarketPageModule": () => (/* binding */ P2pmarketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _p2pmarket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p2pmarket-routing.module */ 33738);
/* harmony import */ var _p2pmarket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p2pmarket.page */ 74347);
/* harmony import */ var _date_difference_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-difference.pipe */ 81527);








let P2pmarketPageModule = class P2pmarketPageModule {};
P2pmarketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _p2pmarket_routing_module__WEBPACK_IMPORTED_MODULE_0__.P2pmarketPageRoutingModule],
  declarations: [_p2pmarket_page__WEBPACK_IMPORTED_MODULE_1__.P2pmarketPage, _date_difference_pipe__WEBPACK_IMPORTED_MODULE_2__.DateDifference]
})], P2pmarketPageModule);


/***/ }),

/***/ 74347:
/*!*********************************************!*\
  !*** ./src/app/p2pmarket/p2pmarket.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2pmarketPage": () => (/* binding */ P2pmarketPage)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _p2pmarket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p2pmarket.page.html?ngResource */ 65143);
/* harmony import */ var _p2pmarket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./p2pmarket.page.scss?ngResource */ 76006);
/* harmony import */ var _p2pmarket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_p2pmarket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../send-data */ 6158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _awesome_cordova_plugins_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/push/ngx */ 12359);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/messaging */ 6157);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qrcode */ 35646);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/messaging.service */ 64271);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! web3modal */ 77208);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @walletconnect/web3-provider */ 67014);


var _class;









const Tx = (__webpack_require__(/*! ethereumjs-tx */ 51463).Transaction);





// AngularFire




// Services



// Web3



const providerOptions = {
  walletconnect: {
    package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_15__["default"],
    options: {
      network: "binance",
      infuraId: "46a670cff8894b729ea30027244e4641",
      rpc: {
        56: "https://oragonbsc.io/binance/"
      }
    }
  }
};
const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_14___default())({
  network: "mainnet",
  cacheProvider: true,
  providerOptions // required
});

let P2pmarketPage = (_class = class P2pmarketPage {
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartStatus", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartDeskripsi", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartQty", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cartPrice", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "actualcartPrice", void 0);
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
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeID", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeFee", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storedetail", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "storeDeskripsi", void 0);
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
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
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
      _this4.senddata.getcurrentbusd().subscribe(data => {
        _this4.current_bnb = data.data.price_BNB;
        // console.log(this.current_bnb)
      }, error => {});
      _this4.isLogin = localStorage.getItem('isLogin');
      _this4.localStorage = localStorage.getItem('ProfileData');
      _this4.parse_localStorage = JSON.parse(_this4.localStorage);
      if (_this4.localStorage == undefined) {
        _this4.isLogin = '!';
      } else {
        _this4.isLogin = '';
        _this4.wallets = _this4.parse_localStorage.WalletAddress;
        _this4.username = _this4.parse_localStorage.PlayerName;
        _this4.globalID = _this4.parse_localStorage.Uid;
        _this4.email = _this4.parse_localStorage.Email;
        if (_this4.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this4.connect = false;
          _this4.stateHash = false;
          _this4.state_buy = 1;
          _this4.status_direct_buy = 1;
        } else {
          _this4.connect = true;
          _this4.stateHash = true;
          _this4.state_buy = 2;
          _this4.status_direct_buy = 2;
        }
        console.log("walletconnect", _this4.connect);
        console.log("stateHash", _this4.stateHash);
        console.log("state_buy", _this4.state_buy);
        console.log("status_direct_buy", _this4.status_direct_buy);
        _this4.senddata.balancePlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceORGNPlayers", this.balanceORGNPlayers);
        }, error => {});
        _this4.senddata.balanceBNBPlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBNBPlayers", this.balanceBNBPlayers);
          _this4.valueRoyalty = _this4.balanceBNBPlayers / 100 * 100;
          _this4.percentRoyalty = _this4.balanceBNBPlayers * 100;
          if (_this4.valueRoyalty == 1) {
            localStorage.setItem('wd', '1');
            let wd = localStorage.getItem('wd');
            if (wd == '1') {
              _this4.alertWithdraw();
              return wd;
            }
            return _this4.valueRoyalty;
          }
        }, error => {});
        _this4.senddata.balanceBUSDPlayers(_this4.wallets).subscribe(dataB => {
          var Web3 = __webpack_require__(/*! web3 */ 30143);
          _this4.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'ether') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBUSDPlayers", this.balanceBUSDPlayers);
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
      _this4.currentp2p = 0;
      _this4.sortp2pmarket = 1;
      _this4.currentfashion = 0;
      _this4.getstorecart();
      _this4.getstoreprogress();
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      let lastitems = localStorage.getItem("lastseen");
      let lastseenfashion = localStorage.getItem("lastseenfashion");
      if (lastitems == "dragon") {
        _this4.lastseen = "dragon";
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
        _this4.senddata.getselldgUserownedmp(_this4.globalID).subscribe(dataSell => {
          _this4.dragonsowned = JSON.parse(dataSell);
          _this4.marketp2pdragonID = _this4.dragonsowned.ItemId;
          _this4.marketp2pdragonLength = _this4.dragonsowned.length;
          console.log(_this4.marketp2pdragonLength);
          for (let i in _this4.dragonsowned) {
            if (_this4.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " + _this4.dragonsowned[i].qtyClaim + " jaket metalicana");
              if (_this4.dragonsowned[i].qtyClaim > 0) {
                _this4.senddata.getselljaketsmp().subscribe(dataSell => {
                  _this4.jakets = dataSell;
                  _this4.fashionjaketsLength = dataSell.length;
                  console.log(_this4.jakets);
                }, error => {});
              } else {
                console.log("unknown error");
              }
            } else {
              console.log("item tidak tersedia");
            }
          }
        }, error => {});
        _this4.senddata.getsellcommonjaketsmp().subscribe(dataSell => {
          _this4.commonjakets = dataSell;
          _this4.fashioncommonjaketsLength = dataSell.length;
          console.log(_this4.commonjakets);
        }, error => {});
      } else if (lastitems == "egg") {
        _this4.lastseen = "egg";
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.sorteggs = dataSell;
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.marketp2pdragonLength = dataSell.length;
        }, error => {});
      } else if (lastitems == "battery") {
        _this4.lastseen = "battery";
        _this4.senddata.getsellbatterymp().subscribe(dataSell => {
          _this4.batteriesHigh = dataSell;
          _this4.marketp2pbatteryLength = dataSell.length;
        }, error => {});
        _this4.senddata.getsellfoodmp().subscribe(dataSell => {
          _this4.marketp2pfoodLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselleggmp().subscribe(dataSell => {
          _this4.marketp2peggLength = dataSell.length;
        }, error => {});
        _this4.senddata.getselldgmp().subscribe(dataSell => {
          _this4.marketp2pdragonLength = dataSell.length;
        }, error => {});
      } else if (lastitems == "food") {
        _this4.lastseen = "food";
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
      } else if (lastseenfashion == "jakets") {
        _this4.senddata.getselldgUserownedmp(_this4.globalID).subscribe(dataSell => {
          _this4.dragonsowned = JSON.parse(dataSell);
          _this4.marketp2pdragonID = _this4.dragonsowned.ItemId;
          _this4.marketp2pdragonLength = _this4.dragonsowned.length;
          console.log(_this4.marketp2pdragonLength);
          for (let i in _this4.dragonsowned) {
            if (_this4.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " + _this4.dragonsowned[i].qtyClaim + " jaket metalicana");
              if (_this4.dragonsowned[i].qtyClaim > 0) {
                _this4.senddata.getselljaketsmp().subscribe(dataSell => {
                  _this4.jakets = dataSell;
                  _this4.fashionjaketsLength = dataSell.length;
                  console.log(_this4.jakets);
                }, error => {});
              } else {
                console.log("unknown error");
              }
            } else {
              console.log("item tidak tersedia");
            }
          }
        }, error => {});
        _this4.senddata.getsellcommonjaketsmp().subscribe(dataSell => {
          _this4.commonjakets = dataSell;
          _this4.fashioncommonjaketsLength = dataSell.length;
          console.log(_this4.commonjakets);
        }, error => {});
      } else {
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
        _this4.senddata.getselldgUserownedmp(_this4.globalID).subscribe(dataSell => {
          _this4.dragonsowned = JSON.parse(dataSell);
          _this4.marketp2pdragonID = _this4.dragonsowned.ItemId;
          _this4.marketp2pdragonLength = _this4.dragonsowned.length;
          console.log(_this4.marketp2pdragonLength);
          for (let i in _this4.dragonsowned) {
            if (_this4.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " + _this4.dragonsowned[i].qtyClaim + " jaket metalicana");
              if (_this4.dragonsowned[i].qtyClaim > 0) {
                _this4.senddata.getselljaketsmp().subscribe(dataSell => {
                  _this4.jakets = dataSell;
                  _this4.fashionjaketsLength = dataSell.length;
                  console.log(_this4.jakets);
                }, error => {});
              } else {
                console.log("unknown error");
              }
            } else {
              console.log("item tidak tersedia");
            }
          }
        }, error => {});
        _this4.senddata.getsellcommonjaketsmp().subscribe(dataSell => {
          _this4.commonjakets = dataSell;
          _this4.fashioncommonjaketsLength = dataSell.length;
          console.log(_this4.commonjakets);
        }, error => {});
      }
      localStorage.setItem("tabs", "sell");
    })();
  }
  checknotificationSellDragon() {
    var _this5 = this;
    this.senddata.getNotificationSellDragonmp(this.globalID).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataNotif) {
        _this5.dataNotif = JSON.parse(dataNotif);
        for (let i in _this5.dataNotif) {
          // console.log("dataNotif", this.dataNotif[i].idSell);
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
                    // console.log(dataRead, 'notifications readed');
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
          // console.log("dataNotif", this.dataNotif[i].idSell);
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
                    // console.log(dataRead, 'notifications readed');
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
          // console.log("dataNotif", this.dataNotif[i].idBid);
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
                    // console.log(dataRead, 'notifications readed');
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
    // console.log(dataRead, 'notifications readed');
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
    // console.log(dataRead, 'notifications readed');
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
      _this9.web3js = new (web3__WEBPACK_IMPORTED_MODULE_13___default())(_this9.provider); // create web3 instance
      console.log(_this9.web3js);
      _this9.accounts = yield _this9.web3js.eth.getAccounts(console.log);
      _this9.wallet = _this9.accounts[0];
      if (_this9.wallet == _this9.wallets) {
        _this9.tokenInst = new _this9.web3js.eth.Contract(_this9.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
        _this9.balance1 = yield _this9.tokenInst.methods.balanceOf(_this9.accounts[0]).call();
        _this9.oragon_balance_display = (_this9.web3js.utils.fromWei(_this9.balance1, 'gwei') * 1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        _this9.oragon_balance = _this9.web3js.utils.fromWei(_this9.balance1, 'gwei');
        _this9.in_dollar = _this9.oragon_balance * _this9.current_oragon;
        _this9.oragon_balance2 = _this9.balance1;
        _this9.balance2 = yield _this9.web3js.eth.getBalance(_this9.accounts[0]);
        _this9.bnb_balance = _this9.web3js.utils.fromWei(_this9.balance2, 'ether');
        // console.log(this.tokenInst);
        //if connect
        _this9.connect = true;
        _this9.stateHash = true;
        _this9.state_buy = 2;
        _this9.status_direct_buy = 2;
        console.log("walletconnect", _this9.connect);
        console.log("stateHash", _this9.stateHash);
        console.log("state_buy", _this9.state_buy);
        console.log("status_direct_buy", _this9.status_direct_buy);
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
        if (_this10.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this10.fs.collection("Players").doc(_this10.marketp2pdragonowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this10.bnb_balance * 1 > _this10.price * 1 && _this10.bnb_balance * 1 > _this10.marketp2pdragonFee * 1) {
            _this10.web3js.eth.sendTransaction({
              from: _this10.wallet,
              to: _this10.owner_address,
              value: _this10.web3js.utils.toWei(_this10.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref10 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this10.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this10.kind = "dragon";
                  // Build Json String Dragon
                  let crd = JSON.stringify({
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
                    },
                    price: Number(_this10.marketp2pdragonprice),
                    owner: _this10.marketp2pdragonowner
                  });
                  _this10.current_data = JSON.parse(crd);
                  // console.log(JSON.stringify(this.current_data));
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this10.senddata.gettokenOwnermp(_this10.marketp2pdragonowner).subscribe(dataToken => {
                        _this10.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this10.senddata.settrxhistory(_this10.marketp2pdragonDocId,
                        //id_product
                        _this10.globalID,
                        //userid
                        _this10.marketp2pdragonDocId + '-' + _this10.kind,
                        //itemid
                        _this10.marketp2pdragonprice,
                        //amount
                        transactionHash,
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
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
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
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this10.senddata.selldragontoitemsmp(_this10.globalID, _this10.marketp2pdragonDocId).subscribe(dataE => {
                    // console.log(dataE);
                  }, error => {});
                  _this10.senddata.setitemhistory(_this10.marketp2pdragonDocId, _this10.globalID, transactionHash, JSON.stringify(_this10.current_data), '').subscribe(data => {}, error => {});
                  _this10.senddata.addSellListmp(_this10.marketp2pdragonDocId, _this10.globalID, _this10.priceRoyalty_display).subscribe(dataE => {});
                  loading.dismiss();
                  const alert = yield _this10.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  _this10.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
                    var _ref11 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
                      const loading = yield _this10.loadingController.create();
                      yield loading.present();
                      _this10.dragons = dataSell;
                      _this10.marketp2pdragonLength = dataSell.length;
                      loading.dismiss();
                    });
                    return function (_x11) {
                      return _ref11.apply(this, arguments);
                    };
                  }(), error => {});
                  _this10.stateHash = false;
                  _this10.senddata.setitemhistory(_this10.marketp2pdragonDocId, _this10.globalID, 'transactionHash', JSON.stringify(_this10.current_data), '').subscribe(data => {}, error => {});
                }
              });
              return function (_x9, _x10) {
                return _ref10.apply(this, arguments);
              };
            }());
          } else {
            const alert = yield _this10.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK']
            });
            yield alert.present();
          }
        } else {
          _this10.fs.collection("Players").doc(_this10.marketp2pdragonowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          let kind = localStorage.getItem("kind");
          _this10.kind = "dragon";
          // Build Json String Dragon
          let crd = JSON.stringify({
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
            },
            price: Number(_this10.marketp2pdragonprice),
            owner: _this10.marketp2pdragonowner
          });
          _this10.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this10.senddata.gettokenOwnermp(_this10.marketp2pdragonowner).subscribe(dataToken => {
                _this10.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this10.senddata.settrxhistory(_this10.marketp2pdragonDocId,
                //id_product
                _this10.globalID,
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
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
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
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this10.senddata.selldragontoitemsmp(_this10.globalID, _this10.marketp2pdragonDocId).subscribe(dataE => {
            // console.log(dataE);
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
            var _ref12 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this10.loadingController.create();
              yield loading.present();
              _this10.dragons = dataSell;
              _this10.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x12) {
              return _ref12.apply(this, arguments);
            };
          }(), error => {});
          _this10.state_buy = 2;
          _this10.stateHash = true;
        }
      } else if (kind == "egg") {
        if (_this10.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this10.fs.collection("Players").doc(_this10.marketp2peggowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this10.bnb_balance * 1 > _this10.price * 1 && _this10.bnb_balance * 1 > _this10.marketp2pdragonFee * 1) {
            _this10.web3js.eth.sendTransaction({
              from: _this10.wallet,
              to: _this10.owner_address,
              value: _this10.web3js.utils.toWei(_this10.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref13 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this10.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this10.kind = "egg";
                  // Build Json String Egg
                  let crd = JSON.stringify({
                    Id: _this10.marketp2peggDocId,
                    ItemId: _this10.marketp2peggID,
                    price: _this10.price_display
                  });
                  _this10.current_data = JSON.parse(crd);
                  // console.log(this.current_data);
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this10.senddata.gettokenOwnermp(_this10.marketp2peggowner).subscribe(dataToken => {
                        _this10.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this10.senddata.settrxhistory(_this10.marketp2peggDocId,
                        //id_product
                        _this10.globalID,
                        //userid
                        _this10.marketp2peggDocId + '-' + _this10.kind,
                        //itemid
                        _this10.price_display,
                        //amount
                        transactionHash,
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
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
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
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this10.senddata.selleggtoitemsmp(_this10.globalID, _this10.marketp2peggDocId).subscribe(dataE => {
                    // console.log(dataE);
                  }, error => {});
                  _this10.senddata.setitemhistory(_this10.marketp2peggDocId, _this10.globalID, transactionHash, JSON.stringify(_this10.current_data), '').subscribe(data => {}, error => {});
                  _this10.senddata.addSellListmp(_this10.marketp2peggDocId, _this10.globalID, _this10.price_display).subscribe(dataE => {});
                  loading.dismiss();
                  const alert = yield _this10.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  //if success
                  _this10.stateHash = false;
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
                    var _ref14 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
                      const loading = yield _this10.loadingController.create();
                      yield loading.present();
                      _this10.eggsBID = dataSell;
                      _this10.marketp2peggLength = dataSell.length;
                      loading.dismiss();
                      // console.log(this.eggsBID)
                      let marketp2pdragonDate = _this10.eggsBID;
                    });
                    return function (_x15) {
                      return _ref14.apply(this, arguments);
                    };
                  }(), error => {});
                }
              });
              return function (_x13, _x14) {
                return _ref13.apply(this, arguments);
              };
            }());
          } else {
            const alert = yield _this10.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK']
            });
            yield alert.present();
          }
        } else {
          let kind = localStorage.getItem("kind");
          _this10.kind = "egg";
          // Build Json String Egg
          let crd = JSON.stringify({
            Id: _this10.marketp2peggDocId,
            ItemId: _this10.marketp2peggID,
            price: _this10.price_display
          });
          _this10.current_data = JSON.parse(crd);
          // console.log(this.current_data);
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this10.senddata.gettokenOwnermp(_this10.marketp2peggowner).subscribe(dataToken => {
                _this10.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this10.senddata.settrxhistory(_this10.marketp2peggDocId,
                //id_product
                _this10.globalID,
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
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
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
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this10.senddata.selleggtoitemsmp(_this10.globalID, _this10.marketp2peggDocId).subscribe(dataE => {
            // console.log(dataE);
          }, error => {});
          _this10.senddata.addSellListmp(_this10.marketp2peggDocId, _this10.globalID, _this10.price_display).subscribe(dataE => {});
          loading.dismiss();
          const alert = yield _this10.alertController.create({
            header: "Success",
            message: "Transaction Successfull, We have send this transaction receipt to your email",
            buttons: ["OK"]
          });
          yield alert.present();
          //if success
          _this10.state_buy = "2";
          _this10.stateHash = true;
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
            var _ref15 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this10.loadingController.create();
              yield loading.present();
              _this10.eggsBID = dataSell;
              _this10.marketp2peggLength = dataSell.length;
              loading.dismiss();
              // console.log(this.eggsBID)
              let marketp2pdragonDate = _this10.eggsBID;
            });
            return function (_x16) {
              return _ref15.apply(this, arguments);
            };
          }(), error => {});
        }
      } else if (kind == "battery") {
        if (_this10.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this10.fs.collection("Players").doc(_this10.marketp2peggowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this10.bnb_balance * 1 > _this10.price * 1 && _this10.bnb_balance * 1 > _this10.marketp2pdragonFee * 1) {
            _this10.web3js.eth.sendTransaction({
              from: _this10.wallet,
              to: _this10.owner_address,
              value: _this10.web3js.utils.toWei(_this10.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref16 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this10.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this10.kind = "battery";
                  // Build Json String Egg
                  let crd = JSON.stringify({
                    Id: _this10.marketp2pbatteryDocId,
                    ItemId: _this10.marketp2pbatteryID,
                    price: _this10.price_display
                  });
                  _this10.current_data = JSON.parse(crd);
                  // console.log(this.current_data);
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this10.senddata.gettokenOwnermp(_this10.marketp2pbatteryowner).subscribe(dataToken => {
                        _this10.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this10.senddata.settrxhistory(_this10.marketp2pbatteryDocId,
                        //id_product
                        _this10.globalID,
                        //userid
                        _this10.marketp2pbatteryDocId + '-' + _this10.kind,
                        //itemid
                        _this10.price_display,
                        //amount
                        transactionHash,
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
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
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
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this10.senddata.sellbatterytoitemsmp(_this10.globalID, _this10.marketp2pbatteryDocId).subscribe(dataE => {
                    // console.log(dataE);
                  }, error => {});
                  _this10.senddata.setitemhistory(_this10.marketp2pbatteryDocId, _this10.globalID, transactionHash, JSON.stringify(_this10.current_data), '').subscribe(data => {}, error => {});
                  _this10.senddata.addSellListmp(_this10.marketp2pbatteryDocId, _this10.globalID, _this10.price_display).subscribe(dataE => {});
                  loading.dismiss();
                  const alert = yield _this10.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  //if success
                  _this10.stateHash = false;
                  _this10.status_2 = "1";
                  _this10.senddata.getsellbatterymp().subscribe(dataSell => {
                    _this10.batteriesHigh = dataSell;
                    _this10.marketp2pbatteryLength = dataSell.length;
                    // console.log(this.batteriesHigh)
                  }, error => {});
                }
              });
              return function (_x17, _x18) {
                return _ref16.apply(this, arguments);
              };
            }());
          } else {
            const alert = yield _this10.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK']
            });
            yield alert.present();
          }
        } else {
          let kind = localStorage.getItem("kind");
          _this10.kind = "battery";
          // Build Json String Egg
          let crd = JSON.stringify({
            DocId: _this10.marketp2pbatteryDocId,
            ItemId: _this10.marketp2pbatteryID,
            price: _this10.price_display
          });
          _this10.current_data = JSON.parse(crd);
          // console.log(this.current_data);
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this10.senddata.gettokenOwnermp(_this10.marketp2pbatteryowner).subscribe(dataToken => {
                _this10.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this10.senddata.settrxhistory(_this10.marketp2pbatteryDocId,
                //id_product
                _this10.globalID,
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
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
          // Check Cart
          yield _this10.checkitemscreated();
          // Transaction Data Firestore
          var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2pbatteryowner + '/Batteries').doc(_this10.marketp2pbatteryDocId);
          var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Batteries').doc(_this10.marketp2pbatteryDocId);
          try {
            _this10.fs.firestore.collection('Sell/' + _this10.marketp2pbatteryowner + '/Batteries').doc(_this10.marketp2pbatteryDocId).delete().then(() => {});
            _this10.fs.collection('Items/' + _this10.globalID + '/Batteries').doc(_this10.marketp2pbatteryDocId).update({
              Id: _this10.marketp2pbatteryDocId,
              ItemId: _this10.marketp2pbatteryID,
              Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(+1)
            }).then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this10.senddata.sellbatterytoitemsmp(_this10.globalID, _this10.marketp2pbatteryDocId).subscribe(dataE => {
            // console.log(dataE);
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
          _this10.state_buy = "2";
          _this10.status_2 = "1";
          _this10.senddata.getsellbatterymp().subscribe(dataSell => {
            _this10.batteriesHigh = dataSell;
            _this10.marketp2pbatteryLength = dataSell.length;
            // console.log(this.batteriesHigh)
          }, error => {});
        }
      } else if (kind == "food") {
        if (_this10.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this10.fs.collection("Players").doc(_this10.marketp2pfoodowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this10.bnb_balance * 1 > _this10.price * 1 && _this10.bnb_balance * 1 > _this10.marketp2pdragonFee * 1) {
            _this10.web3js.eth.sendTransaction({
              from: _this10.wallet,
              to: _this10.owner_address,
              value: _this10.web3js.utils.toWei(_this10.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref17 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this10.openDialog("Transaction Error Please Try Again");
                } else {
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
                  // console.log(JSON.stringify(this.current_data));
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this10.senddata.gettokenOwnermp(_this10.marketp2pfoodowner).subscribe(dataToken => {
                        _this10.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this10.senddata.settrxhistory(_this10.marketp2pfoodOID,
                        //id_product
                        _this10.globalID,
                        //userid
                        _this10.marketp2pfoodOID + '-' + _this10.kind,
                        //itemid
                        _this10.marketp2pfoodprice,
                        //amount
                        transactionHash,
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
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
                  });
                  // Check Cart
                  yield _this10.checkitemscreated();
                  // Transaction Data Firestore
                  var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2pfoodowner + '/Foods').doc(_this10.marketp2pfoodOID);
                  var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Foods').doc(_this10.marketp2pfoodOID);
                  try {
                    _this10.fs.firestore.collection('Sell/' + _this10.marketp2pfoodowner + '/Foods').doc(_this10.marketp2pfoodOID).delete().then(() => {});
                    _this10.fs.collection('Items/' + _this10.globalID + '/Foods').doc(_this10.marketp2pfoodOID).update({
                      Amount: Number(_this10.marketp2pfoodQty),
                      Id: _this10.marketp2pfoodOID,
                      ItemId: _this10.marketp2pfoodID
                    }).then(() => {
                      console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this10.senddata.setitemhistory(_this10.marketp2pfoodID, _this10.globalID, transactionHash, JSON.stringify(_this10.current_data), '').subscribe(data => {}, error => {});
                  _this10.senddata.addSellListmp(_this10.marketp2pfoodID, _this10.globalID, _this10.marketp2pfoodprice).subscribe(dataE => {});
                  _this10.senddata.updatesellfoodUserqtymp(_this10.globalID, _this10.marketp2pfoodID, _this10.marketp2pfoodQty).subscribe(data => {});
                  _this10.senddata.updatesellfoodUsermp(_this10.globalID, _this10.marketp2pfoodID, "transactionHash").subscribe(data => {}, error => {});
                  _this10.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
                    var _ref18 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
                      _this10.foodsHigh = dataSell;
                    });
                    return function (_x21) {
                      return _ref18.apply(this, arguments);
                    };
                  }(), error => {});
                  //if success
                  _this10.stateHash = false;
                  _this10.status_2 = "1";
                  loading.dismiss();
                }
              });
              return function (_x19, _x20) {
                return _ref17.apply(this, arguments);
              };
            }());
            localStorage.removeItem('walletconnect');
          } else {
            const alert = yield _this10.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK']
            });
            yield alert.present();
          }
        } else {
          _this10.fs.collection("Players").doc(_this10.marketp2pfoodowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this10.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          let kind = localStorage.getItem("kind");
          _this10.kind = "food";
          // Build Json String Battery
          let crd = JSON.stringify({
            ItemId: _this10.marketp2pfoodOID,
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
                _this10.senddata.settrxhistory(_this10.marketp2pfoodOID,
                //id_product
                _this10.globalID,
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
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
          // Check Cart
          yield _this10.checkitemscreated();
          // Transaction Data Firestore
          var sfDocRef = _this10.fs.firestore.collection('Sell/' + _this10.marketp2pfoodowner + '/Foods').doc(_this10.marketp2pfoodOID);
          var sfDocRef2 = _this10.fs.firestore.collection('Items/' + _this10.globalID + '/Foods').doc(_this10.marketp2pfoodOID);
          try {
            _this10.fs.firestore.collection('Sell/' + _this10.marketp2pfoodowner + '/Foods').doc(_this10.marketp2pfoodOID).delete().then(() => {});
            _this10.fs.collection('Items/' + _this10.globalID + '/Foods').doc(_this10.marketp2pfoodID).update({
              Amount: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(+_this10.marketp2pfoodQty),
              Id: _this10.marketp2pfoodID,
              ItemId: 'ITM14'
            }).then(() => {
              console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          // this.senddata.setitemhistory(this.marketp2pfoodID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {});
          _this10.senddata.addSellListmp(_this10.marketp2pfoodID, _this10.globalID, _this10.marketp2pfoodprice).subscribe(dataE => {});
          _this10.senddata.updatesellfoodUserqtymp(_this10.globalID, _this10.marketp2pfoodID, _this10.marketp2pfoodQty).subscribe(data => {});
          _this10.senddata.updatesellfoodUsermp(_this10.globalID, _this10.marketp2pfoodID, "transactionHash").subscribe(data => {}, error => {});
          _this10.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
            var _ref19 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              _this10.foodsHigh = dataSell;
            });
            return function (_x22) {
              return _ref19.apply(this, arguments);
            };
          }(), error => {});
          //if success
          _this10.stateHash = true;
          _this10.state_buy = 2;
          _this10.status_2 = "1";
          loading.dismiss();
        }
      }
      localStorage.removeItem("lastpay");
      localStorage.removeItem("lastdragon");
    })();
  }
  pay_secondMarketp2p() {
    var _this11 = this;
    if (this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      this.web3js.eth.sendTransaction({
        from: this.wallet,
        to: '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
        value: this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
        gas: 500000,
        gasPrice: 5000000000
      }, /*#__PURE__*/function () {
        var _ref20 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
          if (err) {
            _this11.openDialog("Transaction Error Please Try Again");
          } else {
            let kind = localStorage.getItem("lastseen");
            if (kind == "dragon") {
              _this11.kind = "dragon";
              // Build Json String Dragon
              let crd = JSON.stringify({
                ObjectId: Number(_this11.marketp2pdragonDocId),
                ItemId: _this11.marketp2pdragonID,
                Id: _this11.marketp2pdragonImg,
                HP: Number(_this11.marketp2pdragonHP),
                Attack: Number(_this11.marketp2pdragonAttack),
                Defense: Number(_this11.marketp2pdragonDefense),
                Exp: Number(_this11.marketp2pdragonExp),
                Level: Number(_this11.marketp2pdragonLevel),
                Rarity: _this11.marketp2pdragonRarity,
                price: _this11.marketp2pdragonprice,
                owner: _this11.marketp2pdragonowner
              });
              _this11.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));
              // Create Royalty pos 1
              if (_this11.positionRoyalty == 1) {
                _this11.senddata.setdgfirstroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {}, error => {});
                // Create Royalty pos 2
              } else if (_this11.positionRoyalty == 2) {
                _this11.senddata.setdgsecondroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_1,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_2a,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 3
              } else if (_this11.positionRoyalty == 3) {
                _this11.senddata.setdgthirdroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_1,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_3a,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_2,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_3b,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 4
              } else if (_this11.positionRoyalty == 4) {
                _this11.senddata.setdgfourthroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_1,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_4a,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_2,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_4b,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_3,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_4c,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
                // Create Royalty pos 5
              } else if (_this11.positionRoyalty == 5) {
                _this11.senddata.setdgfifthroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_1,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5a,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_2,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5b,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_3,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5c,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_4,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5d,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              } else if (_this11.positionRoyalty == 6) {
                _this11.senddata.setdgsixthroyaltymp(_this11.globalID,
                //userid
                _this11.marketp2pdragonowner,
                //owner
                _this11.marketp2pdragonDocId //itemid
                ).subscribe(data => {
                  // Create Transaction History
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_1,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5a,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 1",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_2,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5b,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 2",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_3,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5c,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 3",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_4,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5d,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 4",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                  _this11.senddata.setroyaltytrxhistory(_this11.globalID,
                  //userid
                  _this11.pos_5,
                  //userid
                  _this11.marketp2pdragonDocId + "-" + _this11.kind,
                  //itemid
                  _this11.totaroyalty_5e,
                  //amount
                  transactionHash,
                  //tx_hash
                  "Royalty Seller 5",
                  //type
                  JSON.stringify(_this11.current_data) //item
                  ).subscribe(data => {}, error => {});
                }, error => {});
              }
              const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
              (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
              }).then(tokenPushNotification => {
                if (tokenPushNotification) {
                  _this11.senddata.gettokenOwnermp(_this11.marketp2pdragonowner).subscribe(dataToken => {
                    _this11.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    _this11.senddata.settrxhistory(_this11.marketp2pdragonDocId,
                    //id_product
                    _this11.globalID,
                    //userid
                    _this11.marketp2pdragonDocId + '-' + _this11.kind,
                    //itemid
                    _this11.fee_royalty,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
                    //type
                    JSON.stringify(_this11.current_data),
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
              _this11.state_buy = 3;
              _this11.status_1 = "1";
              localStorage.setItem("lastpay", _this11.marketp2pdragonDocId);
            } else if (kind == "egg") {
              _this11.kind = "egg";
              // Build Json String Egg
              let crd = JSON.stringify({
                ItemId: _this11.marketp2peggID,
                Id: _this11.marketp2peggImg,
                owner: _this11.marketp2peggowner,
                price: _this11.marketp2peggprice
              });
              _this11.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));
              const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
              (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
              }).then(tokenPushNotification => {
                if (tokenPushNotification) {
                  _this11.senddata.gettokenOwnermp(_this11.marketp2peggowner).subscribe(dataToken => {
                    _this11.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    _this11.senddata.settrxhistory(_this11.marketp2peggDocId,
                    //id_product
                    _this11.globalID,
                    //userid
                    _this11.marketp2peggDocId + '-' + _this11.kind,
                    //itemid
                    _this11.marketp2peggprice,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
                    //type
                    JSON.stringify(_this11.current_data),
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
              _this11.state_buy = "3";
              _this11.status_1 = "1";
            } else if (kind == "battery") {
              _this11.kind = "battery";
              // Build Json String Battery
              let crd = JSON.stringify({
                ItemId: _this11.marketp2pbatteryID,
                Id: _this11.marketp2pbatteryImg,
                price: _this11.marketp2pbatteryprice,
                owner: _this11.marketp2pbatteryowner
              });
              _this11.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));
              const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
              (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
              }).then(tokenPushNotification => {
                if (tokenPushNotification) {
                  _this11.senddata.gettokenOwnermp(_this11.marketp2pbatteryowner).subscribe(dataToken => {
                    _this11.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    _this11.senddata.settrxhistory(_this11.marketp2pbatteryDocId,
                    //id_product
                    _this11.globalID,
                    //userid
                    _this11.marketp2pbatteryDocId + '-' + _this11.kind,
                    //itemid
                    _this11.marketp2pbatteryprice,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
                    //type
                    JSON.stringify(_this11.current_data),
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
              _this11.state_buy = "3";
              _this11.status_1 = "1";
            } else if (kind == "food") {
              _this11.kind = "food";
              // Build Json String Food
              let crd = JSON.stringify({
                ItemId: _this11.marketp2pfoodID,
                Id: _this11.marketp2pfoodImg,
                HVP: Number(_this11.marketp2pfoodHVP),
                Qty: Number(_this11.marketp2pfoodQty),
                price: Number(_this11.marketp2pfoodprice),
                owner: _this11.marketp2pfoodowner
              });
              _this11.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));
              const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
              (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
              }).then(tokenPushNotification => {
                if (tokenPushNotification) {
                  _this11.senddata.gettokenOwnermp(_this11.marketp2pfoodowner).subscribe(dataToken => {
                    _this11.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    _this11.senddata.settrxhistory(_this11.marketp2pfoodOID,
                    //id_product
                    _this11.globalID,
                    //userid
                    _this11.marketp2pfoodOID + '-' + _this11.kind,
                    //itemid
                    _this11.marketp2pfoodprice,
                    //amount
                    transactionHash,
                    //tx_hash
                    'bnb-to-oragon',
                    //type
                    JSON.stringify(_this11.current_data),
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
              _this11.state_buy = "3";
              _this11.status_1 = "1";
            }
          }
        });
        return function (_x23, _x24) {
          return _ref20.apply(this, arguments);
        };
      }());
    } else {
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
        // console.log(JSON.stringify(this.current_data));
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
              this.senddata.settrxhistory(this.marketp2pdragonDocId,
              //id_product
              this.globalID,
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
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
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
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe(dataToken => {
              this.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              this.senddata.settrxhistory(this.marketp2peggDocId,
              //id_product
              this.globalID,
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
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
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
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe(dataToken => {
              this.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              this.senddata.settrxhistory(this.marketp2pbatteryDocId,
              //id_product
              this.globalID,
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
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
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
        // console.log(JSON.stringify(this.current_data));
        const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
          vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
        }).then(tokenPushNotification => {
          if (tokenPushNotification) {
            this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe(dataToken => {
              this.tokenNotif = JSON.parse(dataToken);
              // Create Transaction History
              this.senddata.settrxhistory(this.marketp2pfoodOID,
              //id_product
              this.globalID,
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
            // console.log('No registration token available. Request permission to generate one.');
          }
        }).catch(err => {
          // console.log('An error occurred while retrieving token. ', err);
        });
        this.state_buy = "3";
        this.status_1 = "1";
      }
    }
  }
  pay_firstMarketp2pBID() {
    var _this12 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this12.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        if (_this12.bnb_balance * 1 > _this12.price * 1 && _this12.bnb_balance * 1 > _this12.marketp2pdragonFee * 1) {
          _this12.web3js.eth.sendTransaction({
            from: _this12.wallet,
            to: '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
            value: _this12.web3js.utils.toWei(_this12.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
            gas: 500000,
            gasPrice: 5000000000
          }, /*#__PURE__*/function () {
            var _ref21 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
              if (err) {
                _this12.openDialog("Transaction Error Please Try Again");
              } else {
                let lastseen = localStorage.getItem("lastseen");
                if (lastseen == "dragon") {
                  // Create Transaction History
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDdragonowner).subscribe(dataToken => {
                        _this12.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this12.senddata.settrxhistory(_this12.marketp2pBIDdragonDocId,
                        //id_product
                        _this12.globalID,
                        //userid
                        _this12.marketp2pBIDdragonDocId,
                        //itemid
                        _this12.fee_display,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-oragon',
                        //type
                        'fee-auction',
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
                  let type = _this12.marketp2pBIDdragontype;
                  if (type == "Free") {
                    // console.log("Detail Free BID");
                    _this12.state_BID = "Free";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                  } else {
                    // console.log("Detail Step BID");
                    _this12.state_BID = "Step";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                    let percentBID = _this12.marketp2pBIDdragonpriceNow / 100 * 10;
                    // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
                    _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDdragonpriceNow);
                    // console.log(price_display);
                  }
                } else if (lastseen == "egg") {
                  // Create Transaction History
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this12.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this12.senddata.settrxhistory(_this12.marketp2pBIDeggDocId,
                        //id_product
                        _this12.globalID,
                        //userid
                        _this12.marketp2pBIDeggDocId,
                        //itemid
                        _this12.fee_display,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-oragon',
                        //type
                        'fee-auction',
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
                  let type = _this12.marketp2pBIDeggtype;
                  if (type == "Free") {
                    // console.log("Detail Free BID");
                    _this12.state_BID = "Free";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                  } else {
                    // console.log("Detail Step BID");
                    _this12.state_BID = "Step";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                    let percentBID = _this12.marketp2pBIDeggpriceNow / 100 * 10;
                    // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
                    _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDeggpriceNow);
                    // console.log(price_display);
                  }
                } else if (lastseen == "battery") {
                  // Create Transaction History
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDbatteryowner).subscribe(dataToken => {
                        _this12.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this12.senddata.settrxhistory(_this12.marketp2pBIDbatteryDocId,
                        //id_product
                        _this12.globalID,
                        //userid
                        _this12.marketp2pBIDbatteryDocId,
                        //itemid
                        _this12.fee_display,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-oragon',
                        //type
                        'fee-auction',
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
                  let type = _this12.marketp2pBIDbatterytype;
                  if (type == "Free") {
                    // console.log("Detail Free BID");
                    _this12.state_BID = "Free";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                  } else {
                    // console.log("Detail Step BID");
                    _this12.state_BID = "Step";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                    let percentBID = _this12.marketp2pBIDbatterypriceNow / 100 * 10;
                    // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
                    _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDbatterypriceNow);
                    // console.log(price_display);
                  }
                } else if (lastseen == "food") {
                  // Create Transaction History
                  // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
                  let type = _this12.marketp2pBIDfoodtype;
                  if (type == "Free") {
                    // console.log("Detail Free BID");
                    _this12.state_BID = "Free";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                  } else {
                    // console.log("Detail Step BID");
                    _this12.state_BID = "Step";
                    _this12.state_buy = 3;
                    _this12.stateHash = true;
                    let percentBID = _this12.marketp2pBIDfoodpriceNow / 100 * 10;
                    // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
                    _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDfoodpriceNow);
                    // console.log(price_display);
                  }
                }
              }
            });
            return function (_x25, _x26) {
              return _ref21.apply(this, arguments);
            };
          }());
        } else {
          const alert = yield _this12.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        let lastseen = localStorage.getItem("lastseen");
        if (lastseen == "dragon") {
          // Create Transaction History
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDdragonowner).subscribe(dataToken => {
                _this12.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this12.senddata.settrxhistory(_this12.marketp2pBIDdragonDocId,
                //id_product
                _this12.globalID,
                //userid
                _this12.marketp2pBIDdragonDocId,
                //itemid
                _this12.fee_display,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-oragon',
                //type
                'fee-auction',
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
          let type = _this12.marketp2pBIDdragontype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            _this12.state_BID = "Free";
            _this12.state_buy = 3;
            _this12.stateHash = true;
          } else {
            // console.log("Detail Step BID");
            _this12.state_BID = "Step";
            _this12.state_buy = 3;
            _this12.stateHash = true;
            let percentBID = _this12.marketp2pBIDdragonpriceNow / 100 * 10;
            // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
            _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDdragonpriceNow);
            // console.log(price_display);
          }
        } else if (lastseen == "egg") {
          // Create Transaction History
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDeggowner).subscribe(dataToken => {
                _this12.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this12.senddata.settrxhistory(_this12.marketp2pBIDeggDocId,
                //id_product
                _this12.globalID,
                //userid
                _this12.marketp2pBIDeggDocId,
                //itemid
                _this12.fee_display,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-oragon',
                //type
                'fee-auction',
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
          let type = _this12.marketp2pBIDeggtype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            _this12.state_BID = "Free";
            _this12.state_buy = 3;
            _this12.stateHash = true;
          } else {
            // console.log("Detail Step BID");
            _this12.state_BID = "Step";
            _this12.state_buy = 3;
            _this12.stateHash = true;
            let percentBID = _this12.marketp2pBIDeggpriceNow / 100 * 10;
            // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
            _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDeggpriceNow);
            // console.log(price_display);
          }
        } else if (lastseen == "battery") {
          // Create Transaction History
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this12.senddata.gettokenOwnermp(_this12.marketp2pBIDbatteryowner).subscribe(dataToken => {
                _this12.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this12.senddata.settrxhistory(_this12.marketp2pBIDbatteryDocId,
                //id_product
                _this12.globalID,
                //userid
                _this12.marketp2pBIDbatteryDocId,
                //itemid
                _this12.fee_display,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-oragon',
                //type
                'fee-auction',
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
          let type = _this12.marketp2pBIDbatterytype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            _this12.state_BID = "Free";
            _this12.state_buy = 3;
            _this12.stateHash = true;
          } else {
            // console.log("Detail Step BID");
            _this12.state_BID = "Step";
            _this12.state_buy = 3;
            _this12.stateHash = true;
            let percentBID = _this12.marketp2pBIDbatterypriceNow / 100 * 10;
            // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
            _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDbatterypriceNow);
            // console.log(price_display);
          }
        } else if (lastseen == "food") {
          // Create Transaction History
          // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
          let type = _this12.marketp2pBIDfoodtype;
          if (type == "Free") {
            // console.log("Detail Free BID");
            _this12.state_BID = "Free";
            _this12.state_buy = 3;
            _this12.stateHash = true;
          } else {
            // console.log("Detail Step BID");
            _this12.state_BID = "Step";
            _this12.state_buy = 3;
            _this12.stateHash = true;
            let percentBID = _this12.marketp2pBIDfoodpriceNow / 100 * 10;
            // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
            _this12.price_display_StepBID = percentBID + Number(_this12.marketp2pBIDfoodpriceNow);
            // console.log(price_display);
          }
        }
      }
    })();
  }

  pay_secondMarketp2pBID() {
    var _this13 = this;
    if (this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      this.web3js.eth.sendTransaction({
        from: this.wallet,
        to: '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
        value: this.web3js.utils.toWei(this.fee, 'ether'),
        gas: 500000,
        gasPrice: 5000000000
      }, /*#__PURE__*/function () {
        var _ref22 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
          if (err) {
            _this13.openDialog("Transaction Error Please Try Again");
          } else {
            let lastseen = localStorage.getItem("lastseen");
            if (lastseen == "dragon") {
              let type = _this13.marketp2pBIDdragontype;
              if (type == "Free") {
                // console.log("Detail Free BID");
                _this13.state_BID = "Free";
                _this13.state_buy = 0;
                // Create Royalty pos 1
                if (_this13.positionRoyalty == 1) {
                  _this13.senddata.setdgfirstroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {}, error => {});
                  // Create Royalty pos 2
                } else if (_this13.positionRoyalty == 2) {
                  _this13.senddata.setdgsecondroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_2a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 3
                } else if (_this13.positionRoyalty == 3) {
                  _this13.senddata.setdgthirdroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_3a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_3b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 4
                } else if (_this13.positionRoyalty == 4) {
                  _this13.senddata.setdgfourthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 5
                } else if (_this13.positionRoyalty == 5) {
                  _this13.senddata.setdgfifthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_4,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5d,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 4",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                } else if (_this13.positionRoyalty == 6) {
                  _this13.senddata.setdgsixthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_4,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5d,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 4",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_5,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5e,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 5",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                }
                _this13.biditem();
              } else {
                // console.log("Detail Step BID");
                _this13.state_BID = "Step";
                _this13.state_buy = 0;
                let percentBID = _this13.marketp2pBIDdragonpriceNow / 100 * 10;
                // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
                _this13.price_display_StepBID = percentBID + Number(_this13.marketp2pBIDdragonpriceNow);
                // Create Royalty pos 1
                if (_this13.positionRoyalty == 1) {
                  _this13.senddata.setdgfirstroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {}, error => {});
                  // Create Royalty pos 2
                } else if (_this13.positionRoyalty == 2) {
                  _this13.senddata.setdgsecondroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_2a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 3
                } else if (_this13.positionRoyalty == 3) {
                  _this13.senddata.setdgthirdroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_3a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_3b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 4
                } else if (_this13.positionRoyalty == 4) {
                  _this13.senddata.setdgfourthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_4c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                  // Create Royalty pos 5
                } else if (_this13.positionRoyalty == 5) {
                  _this13.senddata.setdgfifthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_4,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5d,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 4",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                } else if (_this13.positionRoyalty == 6) {
                  _this13.senddata.setdgsixthroyaltymp(_this13.globalID,
                  //userid
                  _this13.marketp2pdragonowner,
                  //owner
                  _this13.marketp2pdragonDocId //itemid
                  ).subscribe(data => {
                    // Create Transaction History
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_1,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5a,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 1",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_2,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5b,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 2",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_3,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5c,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 3",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_4,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5d,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 4",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                    _this13.senddata.setroyaltytrxhistory(_this13.globalID,
                    //userid
                    _this13.pos_5,
                    //userid
                    _this13.marketp2pdragonDocId + "-" + _this13.kind,
                    //itemid
                    _this13.totaroyalty_5e,
                    //amount
                    transactionHash,
                    //tx_hash
                    "Royalty Seller 5",
                    //type
                    JSON.stringify(_this13.current_data) //item
                    ).subscribe(data => {}, error => {});
                  }, error => {});
                }
                _this13.biditem();
              }
            } else if (lastseen == "egg") {
              let type = _this13.marketp2pBIDeggtype;
              if (type == "Free") {
                // console.log("Detail Free BID");
                _this13.state_BID = "Free";
                _this13.state_buy = 0;
                _this13.biditem();
              } else {
                // console.log("Detail Step BID");
                _this13.state_BID = "Step";
                _this13.state_buy = 0;
                let percentBID = _this13.marketp2pBIDeggpriceNow / 100 * 10;
                // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
                _this13.price_display_StepBID = percentBID + Number(_this13.marketp2pBIDeggpriceNow);
                _this13.biditem();
              }
            } else if (lastseen == "battery") {
              let type = _this13.marketp2pBIDbatterytype;
              if (type == "Free") {
                // console.log("Detail Free BID");
                _this13.state_BID = "Free";
                _this13.state_buy = 0;
                _this13.biditem();
              } else {
                // console.log("Detail Step BID");
                _this13.state_BID = "Step";
                _this13.state_buy = 0;
                let percentBID = _this13.marketp2pBIDbatterypriceNow / 100 * 10;
                // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
                _this13.price_display_StepBID = percentBID + Number(_this13.marketp2pBIDbatterypriceNow);
                _this13.biditem();
              }
            } else if (lastseen == "food") {
              let type = _this13.marketp2pBIDfoodtype;
              if (type == "Free") {
                // console.log("Detail Free BID");
                _this13.state_BID = "Free";
                _this13.state_buy = 0;
                _this13.biditem();
              } else {
                // console.log("Detail Step BID");
                _this13.state_BID = "Step";
                _this13.state_buy = 0;
                let percentBID = _this13.marketp2pBIDfoodpriceNow / 100 * 10;
                // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
                _this13.price_display_StepBID = percentBID + Number(_this13.marketp2pBIDfoodpriceNow);
                _this13.biditem();
              }
            }
          }
        });
        return function (_x27, _x28) {
          return _ref22.apply(this, arguments);
        };
      }());
      localStorage.removeItem('walletconnect');
    } else {
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
          // console.log("Detail Free BID");
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
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = this.marketp2pBIDdragonpriceNow / 100 * 10;
          // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
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
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = this.marketp2pBIDeggpriceNow / 100 * 10;
          // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
          this.biditem();
        }
      } else if (lastseen == "battery") {
        let type = this.marketp2pBIDbatterytype;
        if (type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = this.marketp2pBIDbatterypriceNow / 100 * 10;
          // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
          this.biditem();
        }
      } else if (lastseen == "food") {
        // Create Transaction History
        // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
        let type = this.marketp2pBIDfoodtype;
        if (type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = this.marketp2pBIDfoodpriceNow / 100 * 10;
          // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDfoodpriceNow);
          this.biditem();
        }
      }
      //     }
      //   }
      // )
      // localStorage.removeItem('walletconnect');
    }
  }

  biditem() {
    var _this14 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lastseen = localStorage.getItem("lastseen");
      if (lastseen == "dragon") {
        let type = _this14.marketp2pBIDdragontype;
        _this14.loadingtext = true;
        // console.log("loadingtext", this.loadingtext);
        if (type == "Free") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.input_price_actual)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDdragonuidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemsBIDNOWmp(_this14.marketp2pBIDdragonDocId, arr.toString(), _this14.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref23 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDdragonDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe( /*#__PURE__*/function () {
                    var _ref24 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.dragonBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                      if (_this14.dragonBidHistoryWin[1].uidBid == _this14.globalID) {
                        _this14.sendNotificationtoLosesBid(_this14.dragonBidHistoryWin[1].uidBid, _this14.dragonBidHistoryWin[1].idBid);
                        _this14.checknotificationLosesBid(_this14.dragonBidHistoryWin[1].uidBid, _this14.dragonBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x30) {
                      return _ref24.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDdragonowner + '/Dragons').doc(_this14.marketp2pBIDdragonDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDdragonowner).subscribe(dataToken => {
                      _this14.tokenNotif = JSON.parse(dataToken);
                      _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDdragonowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {
                        _this14.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDdragonDocId).subscribe(dataNotif => {
                        _this14.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        _this14.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this14.detailBid(_this14.marketp2pBIDdragonDocId);
                          _this14.checkdragonBIDall();
                          _this14.priceNowBiddragon(_this14.marketp2pBIDdragonDocId);
                          _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe(dataBid => {
                            _this14.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if (_this14.state_buy == 2) {
                            clearInterval(_this14.countdowncheckdragonbidall);
                            _this14.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    // console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBid(_this14.marketp2pBIDdragonDocId);
                _this14.checkdragonBIDall();
                _this14.priceNowBiddragon(_this14.marketp2pBIDdragonDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe(dataBid => {
                  _this14.dragonBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x29) {
              return _ref23.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.price_display_StepBID)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDdragonuidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemsBIDNOWmp(_this14.marketp2pBIDdragonDocId, arr.toString(), _this14.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref26 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDdragonDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe( /*#__PURE__*/function () {
                    var _ref27 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.dragonBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                      if (_this14.dragonBidHistoryWin[1].uidBid == _this14.globalID) {
                        _this14.sendNotificationtoLosesBid(_this14.dragonBidHistoryWin[1].uidBid, _this14.dragonBidHistoryWin[1].idBid);
                        _this14.checknotificationLosesBid(_this14.dragonBidHistoryWin[1].uidBid, _this14.dragonBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x32) {
                      return _ref27.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDdragonowner + '/Dragons').doc(_this14.marketp2pBIDdragonDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDdragonowner).subscribe(dataToken => {
                      _this14.tokenNotif = JSON.parse(dataToken);
                      _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDdragonowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {
                        _this14.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDdragonDocId).subscribe(dataNotif => {
                        _this14.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        _this14.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this14.detailBid(_this14.marketp2pBIDdragonDocId);
                          _this14.checkdragonBIDall();
                          _this14.priceNowBiddragon(_this14.marketp2pBIDdragonDocId);
                          _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe(dataBid => {
                            _this14.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if (_this14.state_buy == 2) {
                            clearInterval(_this14.countdowncheckdragonbidall);
                            _this14.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    // console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBid(_this14.marketp2pBIDdragonDocId);
                _this14.checkdragonBIDall();
                _this14.priceNowBiddragon(_this14.marketp2pBIDdragonDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDdragonDocId).subscribe(dataBid => {
                  _this14.dragonBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x31) {
              return _ref26.apply(this, arguments);
            };
          }());
        }
        _this14.state_buy = 2;
      } else if (lastseen == "egg") {
        let type = _this14.marketp2pBIDeggtype;
        _this14.loadingtext = true;
        // console.log("loadingtext", this.loadingtext);
        // console.log("type", this.marketp2pBIDeggtype);
        if (type == "Free") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.input_price_actual)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDegguidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemseggBIDNOWmp(_this14.marketp2pBIDeggDocId, arr.toString(), _this14.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref29 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDeggDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe( /*#__PURE__*/function () {
                    var _ref30 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.eggBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                      _this14.sendNotificationtoLosesBid(_this14.eggBidHistoryWin[1].uidBid, _this14.eggBidHistoryWin[1].idBid);
                      _this14.checknotificationLosesBid(_this14.eggBidHistoryWin[1].uidBid, _this14.eggBidHistoryWin[1].idBid);
                    });
                    return function (_x34) {
                      return _ref30.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDeggowner + '/Eggs').doc(_this14.marketp2pBIDeggDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then( /*#__PURE__*/function () {
                  var _ref31 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenPushNotification) {
                    if (tokenPushNotification) {
                      _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this14.tokenNotif = JSON.parse(dataToken);
                        _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDeggowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {});
                        // console.log(this.tokenNotif.tokenPushNotification);
                        _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDeggDocId).subscribe(dataNotif => {
                          _this14.notifications = JSON.parse(dataNotif);
                          // console.log("data notifications", this.notifications);
                          _this14.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                            _this14.detailBidegg(_this14.marketp2pBIDeggDocId);
                            _this14.checkeggBIDall();
                            _this14.priceNowBidegg(_this14.marketp2pBIDeggDocId);
                            _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe(dataBid => {
                              _this14.eggBidHistory = JSON.parse(dataBid);
                            });
                            if (_this14.state_buy == 2) {
                              clearInterval(_this14.countdowncheckeggbidall);
                              _this14.loadingtext = false;
                            }
                          }), 1000);
                        });
                      });
                    } else {
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  });
                  return function (_x35) {
                    return _ref31.apply(this, arguments);
                  };
                }()).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBidegg(_this14.marketp2pBIDeggDocId);
                _this14.checkeggBIDall();
                _this14.priceNowBidegg(_this14.marketp2pBIDeggDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe(dataBid => {
                  _this14.eggBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x33) {
              return _ref29.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.price_display_StepBID)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDegguidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemseggBIDNOWmp(_this14.marketp2pBIDeggDocId, arr.toString(), _this14.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref33 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDeggDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe( /*#__PURE__*/function () {
                    var _ref34 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.eggBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                      _this14.sendNotificationtoLosesBid(_this14.eggBidHistoryWin[1].uidBid, _this14.eggBidHistoryWin[1].idBid);
                      _this14.checknotificationLosesBid(_this14.eggBidHistoryWin[1].uidBid, _this14.eggBidHistoryWin[1].idBid);
                    });
                    return function (_x37) {
                      return _ref34.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDeggowner + '/Eggs').doc(_this14.marketp2pBIDeggDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then( /*#__PURE__*/function () {
                  var _ref35 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenPushNotification) {
                    if (tokenPushNotification) {
                      _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this14.tokenNotif = JSON.parse(dataToken);
                        _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDeggowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {});
                        // console.log(this.tokenNotif.tokenPushNotification);
                        _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDeggDocId).subscribe(dataNotif => {
                          _this14.notifications = JSON.parse(dataNotif);
                          // console.log("data notifications", this.notifications);
                          _this14.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                            _this14.detailBidegg(_this14.marketp2pBIDeggDocId);
                            _this14.checkeggBIDall();
                            _this14.priceNowBidegg(_this14.marketp2pBIDeggDocId);
                            _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe(dataBid => {
                              _this14.eggBidHistory = JSON.parse(dataBid);
                            });
                            if (_this14.state_buy == 2) {
                              clearInterval(_this14.countdowncheckeggbidall);
                              _this14.loadingtext = false;
                            }
                          }), 1000);
                        });
                      });
                    } else {
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  });
                  return function (_x38) {
                    return _ref35.apply(this, arguments);
                  };
                }()).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBidegg(_this14.marketp2pBIDeggDocId);
                _this14.checkeggBIDall();
                _this14.priceNowBidegg(_this14.marketp2pBIDeggDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDeggDocId).subscribe(dataBid => {
                  _this14.eggBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x36) {
              return _ref33.apply(this, arguments);
            };
          }());
        }
        _this14.state_buy = 2;
      } else if (lastseen == "battery") {
        let type = _this14.marketp2pBIDbatterytype;
        _this14.loadingtext = true;
        // console.log("loadingtext", this.loadingtext);
        if (type == "Free") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.input_price_actual)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDbatteryuidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemsbatteryBIDNOWmp(_this14.marketp2pBIDbatteryDocId, arr.toString(), _this14.input_price_actual).subscribe( /*#__PURE__*/function () {
            var _ref37 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDbatteryDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe( /*#__PURE__*/function () {
                    var _ref38 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.batteryBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                      if (_this14.batteryBidHistoryWin[1].uidBid == _this14.globalID) {
                        _this14.sendNotificationtoLosesBid(_this14.batteryBidHistoryWin[1].uidBid, _this14.batteryBidHistoryWin[1].idBid);
                        _this14.checknotificationLosesBid(_this14.batteryBidHistoryWin[1].uidBid, _this14.batteryBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x40) {
                      return _ref38.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDbatteryowner + '/Batteries').doc(_this14.marketp2pBIDbatteryDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDbatteryowner).subscribe(dataToken => {
                      _this14.tokenNotif = JSON.parse(dataToken);
                      _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDbatteryowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {
                        _this14.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDbatteryDocId).subscribe(dataNotif => {
                        _this14.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        _this14.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this14.detailBidbattery(_this14.marketp2pBIDbatteryDocId);
                          _this14.checkbatteryBIDall();
                          _this14.priceNowBidbattery(_this14.marketp2pBIDbatteryDocId);
                          _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                            _this14.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if (_this14.state_buy == 2) {
                            clearInterval(_this14.countdowncheckbatterybidall);
                            _this14.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    // console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBidbattery(_this14.marketp2pBIDbatteryDocId);
                _this14.checkbatteryBIDall();
                _this14.priceNowBidbattery(_this14.marketp2pBIDbatteryDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                  _this14.batteryBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x39) {
              return _ref37.apply(this, arguments);
            };
          }());
        } else if (type == "Step") {
          const loading = yield _this14.loadingController.create();
          yield loading.present();
          let crd = JSON.stringify({
            uid: _this14.globalID,
            price: Number(_this14.price_display_StepBID)
          });
          _this14.current_data = JSON.parse(crd);
          // console.log(JSON.stringify(this.current_data));
          var arr = new Array(_this14.marketp2pBIDbatteryuidBid);
          var addArr = arr.unshift(JSON.stringify(_this14.current_data));
          _this14.senddata.editpricedumpitemsbatteryBIDNOWmp(_this14.marketp2pBIDdragonDocId, arr.toString(), _this14.price_display_StepBID).subscribe( /*#__PURE__*/function () {
            var _ref40 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              let de = JSON.parse(dataE);
              let priceNowBid = Number(de.priceNow);
              if (_this14.input_price_actual == priceNowBid) {
                _this14.senddata.addBidListmp(_this14.marketp2pBIDbatteryDocId, _this14.globalID, _this14.input_price_actual).subscribe(dataE => {
                  let databid = JSON.parse(dataE);
                  _this14.senddata.getswinhistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe( /*#__PURE__*/function () {
                    var _ref41 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                      _this14.batteryBidHistoryWin = JSON.parse(dataBid);
                      // console.log("checknotificationLosesBid", this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                      if (_this14.batteryBidHistoryWin[1].uidBid == _this14.globalID) {
                        _this14.sendNotificationtoLosesBid(_this14.batteryBidHistoryWin[1].uidBid, _this14.batteryBidHistoryWin[1].idBid);
                        _this14.checknotificationLosesBid(_this14.batteryBidHistoryWin[1].uidBid, _this14.batteryBidHistoryWin[1].idBid);
                      }
                    });
                    return function (_x42) {
                      return _ref41.apply(this, arguments);
                    };
                  }());
                }, error => {});
                _this14.fs.collection('Bid/' + _this14.marketp2pBIDbatteryowner + '/Batteries').doc(_this14.marketp2pBIDbatteryDocId).update({
                  PriceNow: Number(_this14.input_price_actual),
                  BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this14.current_data)
                }).then(() => {
                  // console.log("Document successfully sold!");
                  // this.openDialog("Item Listed");
                }).catch(error => {});
                _this14.state_buy = 2;
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this14.senddata.gettokenOwnermp(_this14.marketp2pBIDbatteryowner).subscribe(dataToken => {
                      _this14.tokenNotif = JSON.parse(dataToken);
                      _this14.senddata.postNotificationOwnerBidmp(_this14.username, _this14.marketp2pBIDbatteryowner, _this14.tokenNotif.tokenPushNotification, _this14.globalID).subscribe(data => {
                        _this14.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      _this14.senddata.setNotificationBidOwnermp(_this14.marketp2pBIDbatteryDocId).subscribe(dataNotif => {
                        _this14.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        _this14.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          _this14.detailBidbattery(_this14.marketp2pBIDbatteryDocId);
                          _this14.checkbatteryBIDall();
                          _this14.priceNowBidbattery(_this14.marketp2pBIDbatteryDocId);
                          _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                            _this14.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if (_this14.state_buy == 2) {
                            clearInterval(_this14.countdowncheckbatterybidall);
                            _this14.loadingtext = false;
                          }
                        }), 1000);
                      });
                    });
                  } else {
                    // console.log('No registration token available. Request permission to generate one.');
                  }
                }).catch(err => {
                  // console.log('An error occurred while retrieving token. ', err);
                });
                loading.dismiss();
              } else {
                _this14.detailBidbattery(_this14.marketp2pBIDbatteryDocId);
                _this14.checkbatteryBIDall();
                _this14.priceNowBidbattery(_this14.marketp2pBIDbatteryDocId);
                _this14.senddata.getshistorydgidBIDmp(_this14.marketp2pBIDbatteryDocId).subscribe(dataBid => {
                  _this14.batteryBidHistory = JSON.parse(dataBid);
                });
                const alert = yield _this14.alertController.create({
                  header: "Failed !",
                  message: "Oopss, Something went wrong.",
                  buttons: ["OK"]
                });
                yield alert.present();
                _this14.loadingtext = false;
                loading.dismiss();
              }
            });
            return function (_x41) {
              return _ref40.apply(this, arguments);
            };
          }());
        }
      }
    })();
  }
  pay_cartBID() {
    var _this15 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this15.loadingController.create();
      yield loading.present();
      let kind = localStorage.getItem("lastseen");
      if (kind == "dragon") {
        if (_this15.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this15.fs.collection("Players").doc(_this15.marketp2pBIDdragonowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this15.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this15.bnb_balance * 1 > _this15.price * 1 && _this15.bnb_balance * 1 > _this15.marketp2pdragonFee * 1) {
            _this15.web3js.eth.sendTransaction({
              from: _this15.wallet,
              to: _this15.owner_address,
              value: _this15.web3js.utils.toWei(_this15.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref43 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this15.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this15.kind = "dragon";
                  // Build Json String Egg
                  let crd = JSON.stringify({
                    Id: _this15.marketp2pBIDdragonDocId,
                    ItemId: _this15.marketp2pBIDdragonID,
                    Attributes: {
                      AttackPoint: Number(_this15.marketp2pBIDdragonAttack),
                      DefensePoint: Number(_this15.marketp2pBIDdragonDefense),
                      Exp: Number(_this15.marketp2pBIDdragonExp),
                      HP: Number(_this15.marketp2pBIDdragonHP),
                      Hunger: Number(_this15.marketp2pBIDdragonHunger),
                      Level: Number(_this15.marketp2pBIDdragonLevel),
                      MaxHP: Number(_this15.marketp2pBIDdragonMaxHP),
                      MaxHunger: Number(_this15.marketp2pBIDdragonMaxHunger)
                    },
                    price: _this15.input_price_actual
                  });
                  _this15.current_data = JSON.parse(crd);
                  // console.log(this.current_data);
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDdragonowner).subscribe(dataToken => {
                        _this15.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this15.senddata.settrxhistory(_this15.marketp2pBIDdragonDocId,
                        //id_product
                        _this15.globalID,
                        //userid
                        _this15.marketp2pBIDdragonDocId + '-' + _this15.kind,
                        //itemid
                        _this15.input_price_actual,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-seller',
                        //type
                        JSON.stringify(_this15.current_data),
                        //item
                        _this15.email,
                        //email
                        _this15.tokenNotif.tokenPushNotification //token
                        ).subscribe(data => {}, error => {});
                      });
                    } else {
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
                  });
                  // Check Cart
                  yield _this15.checkitemscreated();
                  // Transaction Data Firestore
                  var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDdragonowner + '/Dragons').doc(_this15.marketp2pBIDdragonDocId);
                  var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId);
                  try {
                    _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId).delete().then(() => {});
                    _this15.fs.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId).set({
                      Id: _this15.marketp2pBIDdragonDocId,
                      ItemId: _this15.marketp2pBIDdragonID,
                      Attributes: {
                        AttackPoint: Number(_this15.marketp2pBIDdragonAttack),
                        DefensePoint: Number(_this15.marketp2pBIDdragonDefense),
                        Exp: Number(_this15.marketp2pBIDdragonExp),
                        HP: Number(_this15.marketp2pBIDdragonHP),
                        Hunger: Number(_this15.marketp2pBIDdragonHunger),
                        Level: Number(_this15.marketp2pBIDdragonLevel),
                        MaxHP: Number(_this15.marketp2pBIDdragonMaxHP),
                        MaxHunger: Number(_this15.marketp2pBIDdragonMaxHunger)
                      }
                    }).then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this15.senddata.selldragontoitemsmp(_this15.globalID, _this15.marketp2pBIDdragonDocId).subscribe(dataE => {
                    // console.log(dataE);
                    _this15.senddata.removedragonDocIdBIDmp(_this15.marketp2pBIDdragonDocId).subscribe(dataR => {
                      // console.log("Bid list has been remove !");
                    });
                  }, error => {});
                  _this15.senddata.setitemhistory(_this15.marketp2pBIDdragonDocId, _this15.globalID, transactionHash, JSON.stringify(_this15.current_data), '').subscribe(data => {}, error => {});
                  _this15.senddata.addSellListmp(_this15.marketp2pBIDdragonDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
                  const alert = yield _this15.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  //if success
                  _this15.state_buy = "3";
                  _this15.status_2 = "1";
                  _this15.cartBidcount = 0;
                  _this15.checkdragonBIDall();
                  setTimeout(function () {
                    window.location.replace('/tabs/profile');
                    loading.dismiss();
                  }, 3000);
                }
              });
              return function (_x43, _x44) {
                return _ref43.apply(this, arguments);
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
          let kind = localStorage.getItem("kind");
          _this15.kind = "dragon";
          // Build Json String Egg
          let crd = JSON.stringify({
            DocId: _this15.marketp2pBIDdragonDocId,
            ItemId: _this15.marketp2pBIDdragonID,
            price: _this15.input_price_actual
          });
          _this15.current_data = JSON.parse(crd);
          // console.log(this.current_data);
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDdragonowner).subscribe(dataToken => {
                _this15.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this15.senddata.settrxhistory(_this15.marketp2pBIDdragonDocId,
                //id_product
                _this15.globalID,
                //userid
                _this15.marketp2pBIDdragonDocId + '-' + _this15.kind,
                //itemid
                _this15.input_price_actual,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-seller',
                //type
                JSON.stringify(_this15.current_data),
                //item
                _this15.email,
                //email
                _this15.tokenNotif.tokenPushNotification //token
                ).subscribe(data => {}, error => {});
              });
            } else {
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
          // Check Cart
          yield _this15.checkitemscreated();
          // Transaction Data Firestore
          var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDdragonowner + '/Dragons').doc(_this15.marketp2pBIDdragonDocId);
          var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId);
          try {
            _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId).delete().then(() => {});
            _this15.fs.collection('Items/' + _this15.globalID + '/Dragons').doc(_this15.marketp2pBIDdragonDocId).set({
              Id: _this15.marketp2pBIDdragonDocId,
              ItemId: _this15.marketp2pBIDdragonID,
              Attributes: {
                AttackPoint: Number(_this15.marketp2pBIDdragonAttack),
                DefensePoint: Number(_this15.marketp2pBIDdragonDefense),
                Exp: Number(_this15.marketp2pBIDdragonExp),
                HP: Number(_this15.marketp2pBIDdragonHP),
                Hunger: Number(_this15.marketp2pBIDdragonHunger),
                Level: Number(_this15.marketp2pBIDdragonLevel),
                MaxHP: Number(_this15.marketp2pBIDdragonMaxHP),
                MaxHunger: Number(_this15.marketp2pBIDdragonMaxHunger)
              }
            }).then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this15.senddata.selldragontoitemsmp(_this15.globalID, _this15.marketp2pBIDdragonDocId).subscribe(dataE => {
            // console.log(dataE);
            _this15.senddata.removedragonDocIdBIDmp(_this15.marketp2pBIDdragonDocId).subscribe(dataR => {
              // console.log("Bid list has been remove !");
            });
          }, error => {});
          _this15.senddata.addSellListmp(_this15.marketp2pBIDdragonDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
          const alert = yield _this15.alertController.create({
            header: "Success",
            message: "Transaction Successfull, We have send this transaction receipt to your email",
            buttons: ["OK"]
          });
          yield alert.present();
          //if success
          _this15.state_buy = "3";
          _this15.status_2 = "1";
          _this15.cartBidcount = 0;
          _this15.checkdragonBIDall();
          setTimeout(function () {
            window.location.replace('/tabs/profile');
            loading.dismiss();
          }, 3000);
        }
      } else if (kind == "egg") {
        if (_this15.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this15.fs.collection("Players").doc(_this15.marketp2peggowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this15.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this15.bnb_balance * 1 > _this15.price * 1 && _this15.bnb_balance * 1 > _this15.marketp2pdragonFee * 1) {
            _this15.web3js.eth.sendTransaction({
              from: _this15.wallet,
              to: _this15.owner_address,
              value: _this15.web3js.utils.toWei(_this15.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref44 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this15.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this15.kind = "egg";
                  // Build Json String Egg
                  let crd = JSON.stringify({
                    Id: _this15.marketp2pBIDeggDocId,
                    ItemId: _this15.marketp2pBIDeggID,
                    price: _this15.input_price_actual
                  });
                  _this15.current_data = JSON.parse(crd);
                  // console.log(this.current_data);
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDeggowner).subscribe(dataToken => {
                        _this15.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this15.senddata.settrxhistory(_this15.marketp2pBIDeggDocId,
                        //id_product
                        _this15.globalID,
                        //userid
                        _this15.marketp2pBIDeggDocId + '-' + _this15.kind,
                        //itemid
                        _this15.input_price_actual,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-seller',
                        //type
                        JSON.stringify(_this15.current_data),
                        //item
                        _this15.email,
                        //email
                        _this15.tokenNotif.tokenPushNotification //token
                        ).subscribe(data => {}, error => {});
                      });
                    } else {
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
                  });
                  // Check Cart
                  yield _this15.checkitemscreated();
                  // Transaction Data Firestore
                  var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDeggowner + '/Eggs').doc(_this15.marketp2pBIDeggDocId);
                  var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId);
                  try {
                    _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId).delete().then(() => {});
                    _this15.fs.collection('Items/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId).set({
                      Id: _this15.marketp2pBIDeggDocId,
                      ItemId: _this15.marketp2pBIDeggID
                    }).then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this15.senddata.selleggtoitemsmp(_this15.globalID, _this15.marketp2pBIDeggDocId).subscribe(dataE => {
                    // console.log(dataE);
                    _this15.senddata.removeeggDocIdBIDmp(_this15.marketp2pBIDeggDocId).subscribe(dataR => {
                      // console.log("Bid list has been remove !");
                    });
                  }, error => {});
                  _this15.senddata.setitemhistory(_this15.marketp2pBIDeggDocId, _this15.globalID, transactionHash, JSON.stringify(_this15.current_data), '').subscribe(data => {}, error => {});
                  _this15.senddata.addSellListmp(_this15.marketp2pBIDeggDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
                  const alert = yield _this15.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  //if success
                  _this15.state_buy = "3";
                  _this15.status_2 = "1";
                  _this15.cartBidcount = 0;
                  _this15.checkeggBIDall();
                  setTimeout(function () {
                    window.location.replace('/tabs/profile');
                    loading.dismiss();
                  }, 3000);
                }
              });
              return function (_x45, _x46) {
                return _ref44.apply(this, arguments);
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
          let kind = localStorage.getItem("kind");
          _this15.kind = "egg";
          // Build Json String Egg
          let crd = JSON.stringify({
            DocId: _this15.marketp2pBIDeggDocId,
            ItemId: _this15.marketp2pBIDeggID,
            price: _this15.input_price_actual
          });
          _this15.current_data = JSON.parse(crd);
          // console.log(this.current_data);
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDeggowner).subscribe(dataToken => {
                _this15.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this15.senddata.settrxhistory(_this15.marketp2pBIDeggDocId,
                //id_product
                _this15.globalID,
                //userid
                _this15.marketp2pBIDeggDocId + '-' + _this15.kind,
                //itemid
                _this15.input_price_actual,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-seller',
                //type
                JSON.stringify(_this15.current_data),
                //item
                _this15.email,
                //email
                _this15.tokenNotif.tokenPushNotification //token
                ).subscribe(data => {}, error => {});
              });
            } else {
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
          // Check Cart
          yield _this15.checkitemscreated();
          // Transaction Data Firestore
          var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDeggowner + '/Eggs').doc(_this15.marketp2pBIDeggDocId);
          var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId);
          try {
            _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId).delete().then(() => {});
            _this15.fs.collection('Items/' + _this15.globalID + '/Eggs').doc(_this15.marketp2pBIDeggDocId).set({
              Id: _this15.marketp2pBIDeggDocId,
              ItemId: _this15.marketp2pBIDeggID
            }).then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this15.senddata.selleggtoitemsmp(_this15.globalID, _this15.marketp2pBIDeggDocId).subscribe(dataE => {
            // console.log(dataE);
            _this15.senddata.removeeggDocIdBIDmp(_this15.marketp2pBIDeggDocId).subscribe(dataR => {
              // console.log("Bid list has been remove !");
            });
          }, error => {});
          _this15.senddata.addSellListmp(_this15.marketp2pBIDeggDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
          const alert = yield _this15.alertController.create({
            header: "Success",
            message: "Transaction Successfull, We have send this transaction receipt to your email",
            buttons: ["OK"]
          });
          yield alert.present();
          //if success
          _this15.state_buy = "3";
          _this15.status_2 = "1";
          _this15.cartBidcount = 0;
          _this15.checkeggBIDall();
          setTimeout(function () {
            window.location.replace('/tabs/profile');
            loading.dismiss();
          }, 3000);
        }
      } else if (kind == "battery") {
        if (_this15.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          _this15.fs.collection("Players").doc(_this15.marketp2peggowner).valueChanges().subscribe(datas => {
            console.log(datas.ProfileData);
            let data_user = JSON.parse(datas.ProfileData);
            // console.log(data_user.WalletAddress)
            _this15.owner_address = data_user.WalletAddress;
            // console.log(this.owner_address)
          });

          if (_this15.bnb_balance * 1 > _this15.price * 1 && _this15.bnb_balance * 1 > _this15.marketp2pdragonFee * 1) {
            _this15.web3js.eth.sendTransaction({
              from: _this15.wallet,
              to: _this15.owner_address,
              value: _this15.web3js.utils.toWei(_this15.price.toFixed(8).toString(), 'ether'),
              gas: 500000,
              gasPrice: 5000000000
            }, /*#__PURE__*/function () {
              var _ref45 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, transactionHash) {
                if (err) {
                  _this15.openDialog("Transaction Error Please Try Again");
                } else {
                  let kind = localStorage.getItem("kind");
                  _this15.kind = "battery";
                  // Build Json String Egg
                  let crd = JSON.stringify({
                    Id: _this15.marketp2pBIDbatteryDocId,
                    ItemId: _this15.marketp2pBIDbatteryID,
                    price: _this15.input_price_actual
                  });
                  _this15.current_data = JSON.parse(crd);
                  // console.log(this.current_data);
                  const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                  (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                    vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                  }).then(tokenPushNotification => {
                    if (tokenPushNotification) {
                      _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDbatteryowner).subscribe(dataToken => {
                        _this15.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        _this15.senddata.settrxhistory(_this15.marketp2pBIDbatteryDocId,
                        //id_product
                        _this15.globalID,
                        //userid
                        _this15.marketp2pBIDbatteryDocId + '-' + _this15.kind,
                        //itemid
                        _this15.input_price_actual,
                        //amount
                        transactionHash,
                        //tx_hash
                        'bnb-to-seller',
                        //type
                        JSON.stringify(_this15.current_data),
                        //item
                        _this15.email,
                        //email
                        _this15.tokenNotif.tokenPushNotification //token
                        ).subscribe(data => {}, error => {});
                      });
                    } else {
                      // console.log('No registration token available. Request permission to generate one.');
                    }
                  }).catch(err => {
                    // console.log('An error occurred while retrieving token. ', err);
                  });
                  // Check Cart
                  yield _this15.checkitemscreated();
                  // Transaction Data Firestore
                  var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDbatteryowner + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId);
                  var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId);
                  try {
                    _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId).delete().then(() => {});
                    _this15.fs.collection('Items/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId).set({
                      Id: _this15.marketp2pBIDbatteryDocId,
                      ItemId: _this15.marketp2pBIDbatteryID
                    }).then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    }).catch(error => {});
                    // console.log("Transaction successfully committed!");
                  } catch (e) {
                    // console.log("Transaction failed: ", e);
                  }
                  _this15.senddata.sellbatterytoitemsmp(_this15.globalID, _this15.marketp2pBIDbatteryDocId).subscribe(dataE => {
                    // console.log(dataE);
                    _this15.senddata.removebatteryDocIdBIDmp(_this15.marketp2pBIDbatteryDocId).subscribe(dataR => {
                      // console.log("Bid list has been remove !");
                    });
                  }, error => {});
                  _this15.senddata.setitemhistory(_this15.marketp2pBIDbatteryDocId, _this15.globalID, transactionHash, JSON.stringify(_this15.current_data), '').subscribe(data => {}, error => {});
                  _this15.senddata.addSellListmp(_this15.marketp2pBIDbatteryDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
                  const alert = yield _this15.alertController.create({
                    header: "Success",
                    message: "Transaction Successfull, We have send this transaction receipt to your email",
                    buttons: ["OK"]
                  });
                  yield alert.present();
                  //if success
                  _this15.state_buy = "3";
                  _this15.status_2 = "1";
                  _this15.cartBidcount = 0;
                  _this15.checkbatteryBIDall();
                  setTimeout(function () {
                    window.location.replace('/tabs/profile');
                    loading.dismiss();
                  }, 3000);
                }
              });
              return function (_x47, _x48) {
                return _ref45.apply(this, arguments);
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
          let kind = localStorage.getItem("kind");
          _this15.kind = "battery";
          // Build Json String Egg
          let crd = JSON.stringify({
            DocId: _this15.marketp2pBIDbatteryDocId,
            ItemId: _this15.marketp2pBIDbatteryID,
            price: _this15.input_price_actual
          });
          _this15.current_data = JSON.parse(crd);
          // console.log(this.current_data);
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this15.senddata.gettokenOwnermp(_this15.marketp2pBIDbatteryowner).subscribe(dataToken => {
                _this15.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this15.senddata.settrxhistory(_this15.marketp2pBIDbatteryDocId,
                //id_product
                _this15.globalID,
                //userid
                _this15.marketp2pBIDbatteryDocId + '-' + _this15.kind,
                //itemid
                _this15.input_price_actual,
                //amount
                'transactionHash',
                //tx_hash
                'bnb-to-seller',
                //type
                JSON.stringify(_this15.current_data),
                //item
                _this15.email,
                //email
                _this15.tokenNotif.tokenPushNotification //token
                ).subscribe(data => {}, error => {});
              });
            } else {
              // console.log('No registration token available. Request permission to generate one.');
            }
          }).catch(err => {
            // console.log('An error occurred while retrieving token. ', err);
          });
          // Check Cart
          yield _this15.checkitemscreated();
          // Transaction Data Firestore
          var sfDocRef = _this15.fs.firestore.collection('Bid/' + _this15.marketp2pBIDbatteryowner + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId);
          var sfDocRef2 = _this15.fs.firestore.collection('Items/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId);
          try {
            _this15.fs.firestore.collection('Bid/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId).delete().then(() => {});
            _this15.fs.collection('Items/' + _this15.globalID + '/Batteries').doc(_this15.marketp2pBIDbatteryDocId).set({
              Id: _this15.marketp2pBIDbatteryDocId,
              ItemId: _this15.marketp2pBIDbatteryID
            }).then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            // console.log("Transaction successfully committed!");
          } catch (e) {
            // console.log("Transaction failed: ", e);
          }
          _this15.senddata.sellbatterytoitemsmp(_this15.globalID, _this15.marketp2pBIDbatteryDocId).subscribe(dataE => {
            // console.log(dataE);
            _this15.senddata.removebatteryDocIdBIDmp(_this15.marketp2pBIDbatteryDocId).subscribe(dataR => {
              // console.log("Bid list has been remove !");
            });
          }, error => {});
          // this.senddata.setitemhistory(this.marketp2pBIDbatteryID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
          _this15.senddata.addSellListmp(_this15.marketp2pBIDbatteryDocId, _this15.globalID, _this15.input_price_actual).subscribe(dataE => {});
          const alert = yield _this15.alertController.create({
            header: "Success",
            message: "Transaction Successfull, We have send this transaction receipt to your email",
            buttons: ["OK"]
          });
          yield alert.present();
          //if success
          _this15.state_buy = "3";
          _this15.status_2 = "1";
          _this15.cartBidcount = 0;
          _this15.checkbatteryBIDall();
          setTimeout(function () {
            window.location.replace('/tabs/profile');
            loading.dismiss();
          }, 3000);
        }
      } else if (kind == "food") {}
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
  pay_cartStore(id_cart, user_uid, addressw) {
    var _this16 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        if (+(_this16.oragon_balance * 1).toFixed(0) > +(_this16.cartPrice * 1).toFixed(0) && _this16.bnb_balance * 1 > _this16.storeFee * 1) {
          let amountf = _this16.cartPrice * 1e9;
          console.log(amountf);
          yield _this16.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
            from: _this16.wallet
          }).then( /*#__PURE__*/function () {
            var _ref46 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              console.log(res);
              _this16.senddata.getstoredetail(_this16.storeID).subscribe(data => {
                _this16.storedetail = JSON.parse(data);
                _this16.storeDeskripsi = _this16.storedetail.deskripsi;
                // set transaction history
                const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
                (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
                  vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
                }).then(tokenPushNotification => {
                  if (tokenPushNotification) {
                    _this16.senddata.gettokenOwnermp(_this16.globalID).subscribe(dataToken => {
                      _this16.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      _this16.senddata.settrxhistory(_this16.storeID,
                      //storeid
                      _this16.globalID,
                      //userid
                      'S-BNB' + _this16.newTime(),
                      //itemid
                      _this16.cartPriceBNB,
                      //amount BNB
                      res.transactionHash,
                      //tx_hash
                      'BNB',
                      //type
                      'Package-Official-Store',
                      //item
                      _this16.email,
                      //email
                      _this16.tokenNotif.tokenPushNotification //token
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
              // if(this.storeID == 17) {
              // BATTERY
              // this.addJaketsMetalicana(user_uid);
              // }
              //if success
              _this16.state_buy = 3;
              _this16.status_direct_buy = 1;
              _this16.stateHash = true;
              _this16.connect = true;
              const alert = yield _this16.alertController.create({
                header: 'Success',
                message: 'Transaction Successfull, We have send this transaction receipt to your email',
                buttons: ['OK']
              });
              _this16.updatestorecart(_this16.cartID, _this16.globalID, _this16.wallets, _this16.email);
              yield alert.present();
              setTimeout( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                const loading = yield _this16.loadingController.create();
                yield loading.present();
                window.location.reload();
                loading.dismiss();
              }), 2000);
            });
            return function (_x49) {
              return _ref46.apply(this, arguments);
            };
          }()).catch(err => {});
        } else {
          const alert = yield _this16.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } else {
        _this16.senddata.getstoredetail(_this16.storeID).subscribe(data => {
          _this16.storedetail = JSON.parse(data);
          _this16.storeDeskripsi = _this16.storedetail.deskripsi;
          // set transaction history
          const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
          (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getToken)(messaging, {
            vapidKey: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase.vapidKey
          }).then(tokenPushNotification => {
            if (tokenPushNotification) {
              _this16.senddata.gettokenOwnermp(_this16.globalID).subscribe(dataToken => {
                _this16.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                _this16.senddata.settrxhistory(_this16.storeID,
                //storeid
                _this16.globalID,
                //userid
                'S-BNB' + _this16.newTime(),
                //itemid
                _this16.cartPriceBNB,
                //amount BNB
                'res.transactionHash',
                //tx_hash
                'BNB',
                //type
                'Package-Official-Store',
                //item
                _this16.email,
                //email
                _this16.tokenNotif.tokenPushNotification //token
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
        // if(this.storeID == 17) {
        // BATTERY
        // this.addJaketsMetalicana(user_uid);
        // }
        //if success
        _this16.state_buy = 3;
        _this16.status_direct_buy = 1;
        _this16.stateHash = true;
        _this16.connect = true;
        const alert = yield _this16.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK']
        });
        _this16.updatestorecart(_this16.cartID, _this16.globalID, _this16.wallets, _this16.email);
        yield alert.present();
        setTimeout( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const loading = yield _this16.loadingController.create();
          yield loading.present();
          window.location.reload();
          loading.dismiss();
        }), 2000);
      }
    })();
  }
  pay_progressStore(event, id_orders, user_uid, product_id, addressw) {
    var _this17 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this17.loadingController.create();
      yield loading.present();
      // console.log(event, DocId, ItemId)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        _this17.updatestoreprogress(_this17.ordersID, _this17.globalID, _this17.wallets, event.target.files[0]);
        _this17.addJaketsMetalicana(_this17.ordersID, user_uid, product_id);
        loading.dismiss();
        console.log(event.target.files[0]);
        reader.onload = event => {
          _this17.url = event.target.result;
        };
      }
      _this17.updateProgressCount();
    })();
  }
  updateProgressCount() {
    var _this18 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this18.progressCount);
      const pc = _this18.progressCount;
      _this18.progressCount = pc - 1;
      const updateProgressCount = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const loading = yield _this18.loadingController.create();
        yield loading.present();
        _this18.senddata.getstoreprogress(_this18.globalID).subscribe(data => {
          _this18.storeprogress = JSON.parse(data);
          for (let i in _this18.storeprogress) {
            // console.log(this.storeprogress[i].addressw)
            _this18.progressCount = _this18.storeprogress.length;
          }
        }, error => {});
        loading.dismiss();
        if (_this18.progressCount == 0) {
          _this18.progressCount = 0;
          _this18.ngOnInit();
          clearInterval(updateProgressCount);
        }
      }), 5000);
      setTimeout( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        window.location.reload();
      }), 5000);
    })();
  }
  // Market P2P
  p2pTab(kind) {
    var _this19 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (kind == "1") {
        if (_this19.lastseen == "dragon") {
          _this19.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
            var _ref51 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this19.loadingController.create();
              yield loading.present();
              _this19.dragons = dataSell;
              _this19.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x50) {
              return _ref51.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this19.lastseen == "egg") {
          _this19.senddata.getselleggmp().subscribe( /*#__PURE__*/function () {
            var _ref52 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this19.loadingController.create();
              yield loading.present();
              _this19.sorteggs = dataSell;
              _this19.marketp2peggLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x51) {
              return _ref52.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this19.lastseen == "battery") {
          _this19.senddata.getsellbatterymp().subscribe( /*#__PURE__*/function () {
            var _ref53 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this19.loadingController.create();
              yield loading.present();
              _this19.batteriesHigh = dataSell;
              _this19.marketp2pbatteryLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x52) {
              return _ref53.apply(this, arguments);
            };
          }(), error => {});
        } else if (_this19.lastseen == "food") {
          _this19.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
            var _ref54 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this19.loadingController.create();
              yield loading.present();
              _this19.foodsHigh = dataSell;
              _this19.marketp2pfoodLength = dataSell.length;
              loading.dismiss();
            });
            return function (_x53) {
              return _ref54.apply(this, arguments);
            };
          }(), error => {});
        }
        localStorage.setItem("tabs", "sell");
      } else if (kind == "2") {
        const loading = yield _this19.loadingController.create();
        yield loading.present();
        _this19.senddata.getselldgBIDmp().subscribe(dataSell => {
          _this19.marketp2pBIDdragonLength = dataSell.length;
        }, error => {});
        _this19.senddata.getselleggBIDmp().subscribe(dataSell => {
          _this19.marketp2peggBIDLength = dataSell.length;
        }, error => {});
        _this19.senddata.getsellbatteryBIDmp().subscribe(dataSell => {
          _this19.marketp2pbatteryBIDLength = dataSell.length;
        }, error => {});
        localStorage.setItem("tabs", "bid");
        loading.dismiss();
      } else if (kind == "3") {
        _this19.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
          var _ref55 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
            const loading = yield _this19.loadingController.create();
            yield loading.present();
            _this19.jakets = dataSell;
            _this19.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          });
          return function (_x54) {
            return _ref55.apply(this, arguments);
          };
        }(), error => {});
        localStorage.setItem("tabs", "fashion");
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
        this.cartStatus = this.storecart[i].status;
        // this.cartDeskripsi = this.storecart[i].deskripsi
        this.cartPrice = this.storecart[i].harga;
        this.cartQty = this.storecart[i].qty_cart;
        let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
        this.cartPriceBNB = cartPriceBNB.toFixed(4);
        this.cartImg = this.storecart[i].gambar;
      }
    }, error => {});
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
  getbidcart() {
    var _this20 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this20.selectedBid == "Dragons") {
        _this20.senddata.getbidcartdragon(_this20.globalID).subscribe( /*#__PURE__*/function () {
          var _ref56 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this20.bidcart = JSON.parse(data);
            if (_this20.bidcart[0].statusBid == 1) {
              _this20.bidCount = _this20.bidcart[0].length;
              _this20.bidPrice = _this20.bidcart[0].priceBid;
              let bidPriceUSD = _this20.bidcart[0].priceBid / _this20.current_bnb;
              _this20.bidPriceUSD = bidPriceUSD.toFixed(2);
              // console.log("bidPriceUSD", this.bidPriceUSD);
              // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);
              if (_this20.marketp2pBIDdragonBG == "exists") {
                _this20.senddata.getdgroyaltymp(_this20.marketp2pBIDdragonDocId).subscribe(dataRoyalty => {
                  let dr = dataRoyalty;
                  // fee p2p market dragon
                  _this20.marketp2pdragonFee = 12 / 100 * _this20.bidPrice;
                  let marketp2pdragonprice_actual = _this20.bidPrice - _this20.marketp2pdragonFee;
                  _this20.fee_display = _this20.marketp2pdragonFee;
                  _this20.price_display = marketp2pdragonprice_actual;
                  _this20.marketp2pdragonRoyalty = 10 / 100 * _this20.bidPrice;
                  let priceRoyalty_display = _this20.price_display - _this20.marketp2pdragonRoyalty;
                  _this20.priceRoyalty_display = priceRoyalty_display.toFixed(2);
                  _this20.fee_royalty = _this20.fee_display + _this20.marketp2pdragonRoyalty;
                  _this20.marketp2pdragonRoyalty2 = 10 / 100 * _this20.marketp2pdragonRoyalty;
                  _this20.marketp2pdragonRoyalty3 = 10 / 100 * _this20.marketp2pdragonRoyalty2;
                  _this20.marketp2pdragonRoyalty4 = 10 / 100 * _this20.marketp2pdragonRoyalty3;
                  _this20.marketp2pdragonRoyalty5 = 10 / 100 * _this20.marketp2pdragonRoyalty4;
                  _this20.marketp2pdragonRoyalty6 = 10 / 100 * _this20.marketp2pdragonRoyalty5;
                  let totaroyalty_5a = _this20.marketp2pdragonRoyalty - _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4 - _this20.marketp2pdragonRoyalty5;
                  let totaroyalty_5b = _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4 - _this20.marketp2pdragonRoyalty5;
                  let totaroyalty_5c = _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4 - _this20.marketp2pdragonRoyalty5;
                  let totaroyalty_5d = _this20.marketp2pdragonRoyalty4 - _this20.marketp2pdragonRoyalty5;
                  let totaroyalty_5e = _this20.marketp2pdragonRoyalty5 - _this20.marketp2pdragonRoyalty6;
                  _this20.totaroyalty_5a = totaroyalty_5a;
                  _this20.totaroyalty_5b = totaroyalty_5b;
                  _this20.totaroyalty_5c = totaroyalty_5c;
                  _this20.totaroyalty_5d = totaroyalty_5d;
                  _this20.totaroyalty_5e = totaroyalty_5e;
                  let totaroyalty_4a = _this20.marketp2pdragonRoyalty - _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4;
                  let totaroyalty_4b = _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4;
                  let totaroyalty_4c = _this20.marketp2pdragonRoyalty3 - _this20.marketp2pdragonRoyalty4;
                  _this20.totaroyalty_4a = totaroyalty_4a;
                  _this20.totaroyalty_4b = totaroyalty_4b;
                  _this20.totaroyalty_4c = totaroyalty_4c;
                  let totaroyalty_3a = _this20.marketp2pdragonRoyalty - _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3;
                  let totaroyalty_3b = _this20.marketp2pdragonRoyalty2 - _this20.marketp2pdragonRoyalty3;
                  _this20.totaroyalty_3a = totaroyalty_3a;
                  _this20.totaroyalty_3b = totaroyalty_3b;
                  let totaroyalty_2a = _this20.marketp2pdragonRoyalty - _this20.marketp2pdragonRoyalty2;
                  _this20.totaroyalty_2a = totaroyalty_2a;
                  let totaroyalty_1a = _this20.marketp2pdragonRoyalty;
                  _this20.totaroyalty_1a = totaroyalty_1a;
                  if (dr == 1) {
                    _this20.positionRoyalty = 1;
                    // console.log("first position");
                    // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
                  } else if (dr == 2) {
                    _this20.positionRoyalty = 2;
                    // console.log("second position");
                    // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
                    // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
                  } else if (dr == 3) {
                    _this20.positionRoyalty = 3;
                    // console.log("third position");
                    // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                    // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                    // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
                  } else if (dr == 4) {
                    _this20.positionRoyalty = 4;
                    // console.log("fourth position");
                    // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                    // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                    // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                    // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
                  } else if (dr == 5) {
                    _this20.positionRoyalty = 5;
                    // console.log("fifth position");
                    // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                    // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                    // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                    // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                    // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
                  } else if (dr == 6) {
                    _this20.positionRoyalty = 6;
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
                // sengaja dikosongkan
              }
              // console.log(this.bidPrice)
            } else {
              _this20.stateHash = true;
              const alert = yield _this20.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              // console.log("Your cart is expired!");
            }
          });
          return function (_x55) {
            return _ref56.apply(this, arguments);
          };
        }());
      } else if (_this20.selectedBid == "Eggs") {
        _this20.senddata.getbidcartegg(_this20.globalID).subscribe( /*#__PURE__*/function () {
          var _ref57 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this20.bidcart = JSON.parse(data);
            if (_this20.bidcart[0].statusBid == 1) {
              _this20.bidCount = _this20.bidcart[0].length;
              _this20.bidPrice = _this20.bidcart[0].priceBid;
              let bidPriceUSD = _this20.bidcart[0].priceBid / _this20.current_bnb;
              _this20.bidPriceUSD = bidPriceUSD.toFixed(2);
              // console.log("bidPriceUSD", this.bidPriceUSD);
              // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);
              // console.log(this.bidPrice)
            } else {
              _this20.stateHash = true;
              const alert = yield _this20.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              // console.log("Your cart is expired!");
            }
          });
          return function (_x56) {
            return _ref57.apply(this, arguments);
          };
        }());
      } else if (_this20.selectedBid == "Batteries") {
        _this20.senddata.getbidcartbattery(_this20.globalID).subscribe( /*#__PURE__*/function () {
          var _ref58 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this20.bidcart = JSON.parse(data);
            if (_this20.bidcart[0].statusBid == 1) {
              _this20.bidCount = _this20.bidcart[0].length;
              _this20.bidPrice = _this20.bidcart[0].priceBid;
              let bidPriceUSD = _this20.bidcart[0].priceBid / _this20.current_bnb;
              _this20.bidPriceUSD = bidPriceUSD.toFixed(2);
              // console.log("bidPriceUSD", this.bidPriceUSD);
              // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);
              // console.log(this.bidPrice)
            } else {
              _this20.stateHash = true;
              const alert = yield _this20.alertController.create({
                header: "Attention",
                message: "Your cart is expired!",
                buttons: ["OK"]
              });
              yield alert.present();
              // console.log("Your cart is expired!");
            }
          });
          return function (_x57) {
            return _ref58.apply(this, arguments);
          };
        }());
      } else {
        const alert = yield _this20.alertController.create({
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
      console.log(this.current_oragon);
    }, error => {});
  }
  clickcategory(kind) {
    var _this21 = this;
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
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
            // console.log("data background", this.profile);
          }
        }
      });
    } else if (kind == 2) {
      this.lastseen = "egg";
      this.sortp2pmarket = 4;
      localStorage.setItem("lastseen", "egg");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatterymp().subscribe( /*#__PURE__*/function () {
        var _ref59 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this21.loadingController.create();
          yield loading.present();
          _this21.batteriesHigh = dataSell;
          _this21.marketp2pbatteryLength = dataSell.length;
          loading.dismiss();
        });
        return function (_x58) {
          return _ref59.apply(this, arguments);
        };
      }(), error => {});
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
        var _ref60 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this21.loadingController.create();
          yield loading.present();
          _this21.foodsHigh = dataSell;
          loading.dismiss();
        });
        return function (_x59) {
          return _ref60.apply(this, arguments);
        };
      }(), error => {});
    }
  }
  clickcategorybid(kind) {
    var _this22 = this;
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgBIDmp().subscribe( /*#__PURE__*/function () {
        var _ref61 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this22.loadingController.create();
          yield loading.present();
          _this22.dragonsBID = dataSell;
          _this22.marketp2pBIDdragonLength = dataSell.length;
          loading.dismiss();
          // console.log(this.dragonsBID)
          let marketp2pdragonDate = _this22.dragonsBID;
          for (let i in marketp2pdragonDate) {
            _this22.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
            if (_this22.dragonsBID[i].imgbackground == 'exists') {
              _this22.senddata.getallbackgroundsellmp(_this22.dragonsBID[i].ItemId).subscribe(dataBackground => {
                _this22.dragonsownedbg = JSON.parse(dataBackground);
                _this22.marketp2pdragonBG = _this22.dragonsownedbg.imgbackground;
                // console.log(this.dragonsownedbg)
              }, error => {});
            }
          }
        });
        return function (_x60) {
          return _ref61.apply(this, arguments);
        };
      }(), error => {});
      this.countdowncheckdragonbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this22.checkdragonBIDall();
        if (_this22.lastseen != "dragon") {
          clearInterval(_this22.countdowncheckdragonbidall);
        }
      }), 10000);
    } else if (kind == 2) {
      this.lastseen = "egg";
      this.sortp2pmarket = 4;
      localStorage.setItem("lastseen", "egg");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggBIDmp().subscribe(dataSell => {
        this.eggsBID = dataSell;
        this.marketp2peggBIDLength = dataSell.length;
      }, error => {});
      this.countdowncheckeggbidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this22.checkeggBIDall();
        if (_this22.lastseen != "egg") {
          clearInterval(_this22.countdowncheckeggbidall);
        }
      }), 10000);
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatteryBIDmp().subscribe(dataSell => {
        this.batterysBID = dataSell;
      }, error => {});
      this.countdowncheckbatterybidall = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this22.checkbatteryBIDall();
        if (_this22.lastseen != "battery") {
          clearInterval(_this22.countdowncheckbatterybidall);
        }
      }), 10000);
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe( /*#__PURE__*/function () {
        var _ref65 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          const loading = yield _this22.loadingController.create();
          yield loading.present();
          _this22.foodsHigh = dataSell;
          loading.dismiss();
        });
        return function (_x61) {
          return _ref65.apply(this, arguments);
        };
      }(), error => {});
    }
  }
  clickcategoryfashion(kind) {
    if (kind == 1) {
      this.lastseen = "jakets";
      this.sortfashion = 1;
      localStorage.setItem("lastseenfashion", "jakets");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgUserownedmp(this.globalID).subscribe(dataSell => {
        this.dragonsowned = JSON.parse(dataSell);
        this.marketp2pdragonID = this.dragonsowned.ItemId;
        this.marketp2pdragonLength = this.dragonsowned.length;
        console.log(this.marketp2pdragonLength);
        for (let i in this.dragonsowned) {
          if (this.dragonsowned[i].ItemId == 'ITM13') {
            console.log("anda dapat membeli " + this.dragonsowned[i].qtyClaim + " jaket metalicana");
            if (this.dragonsowned[i].qtyClaim > 0) {
              this.senddata.getselljaketsmp().subscribe(dataSell => {
                this.jakets = dataSell;
                this.fashionjaketsLength = dataSell.length;
                console.log(this.jakets);
              }, error => {});
            } else {
              console.log("unknown error");
            }
          } else {
            console.log("item tidak tersedia");
          }
        }
      }, error => {});
      this.senddata.getsellcommonjaketsmp().subscribe(dataSell => {
        this.commonjakets = dataSell;
        this.fashioncommonjaketsLength = dataSell.length;
        console.log(this.commonjakets);
      }, error => {});
    }
  }
  clicksortp2pmarket(kind) {
    // ------------------------ Sort DRAGON
    if (kind == 1) {
      this.currentp2p = 0;
      this.sortp2pmarket = 1;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
    } else if (kind == 2) {
      this.currentp2p = 1;
      this.sortp2pmarket = 2;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowsellhargamp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
    } else if (kind == 3) {
      this.sortp2pmarket = 3;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozsellhargamp().subscribe(dataSell => {
        this.sortdragons = dataSell;
      }, error => {});
      // ------------------------ Sort EGG
    } else if (kind == 4) {
      this.currentp2p = 2;
      this.sortp2pmarket = 4;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 5) {
      this.currentp2p = 2;
      this.sortp2pmarket = 5;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    } else if (kind == 6) {
      this.currentp2p = 2;
      this.sortp2pmarket = 6;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozselleggmp().subscribe(dataSell => {
        this.sorteggs = dataSell;
      }, error => {});
    }
  }
  getdgbuydetail(ItemId) {
    var _this23 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this23.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "dragon");
      localStorage.setItem("lastdragon", ItemId);
      _this23.checkkind(ItemId);
      loading.dismiss();
      // console.log(ItemId);
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
    var _this24 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this24.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "egg");
      localStorage.setItem("lastegg", marketp2peggDocId);
      _this24.checkkindEgg(marketp2peggDocId);
      loading.dismiss();
      // console.log(marketp2peggDocId);
    })();
  }

  getbatterybuydetail(marketp2pbatteryDocId) {
    var _this25 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this25.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "battery");
      localStorage.setItem("lastbattery", marketp2pbatteryDocId);
      _this25.checkkindBattery(marketp2pbatteryDocId);
      loading.dismiss();
      // console.log(marketp2pbatteryDocId);
    })();
  }

  getfoodbuydetail(iditemsFood) {
    var _this26 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let lastseen = localStorage.setItem("lastseen", "food");
      _this26.checkkindGroup(iditemsFood);
      // console.log(iditemsFood);
    })();
  }

  getjaketsbuydetail(ItemId) {
    var _this27 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this27.loadingController.create();
      yield loading.present();
      let lastseen = localStorage.setItem("lastseen", "jakets");
      localStorage.setItem("lastjakets", ItemId);
      _this27.checkkindJakets(ItemId);
      loading.dismiss();
      ;
    })();
  }
  setstorecart(id_product, user_uid, addressw) {
    var _this28 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.isLogin == '!') {
        const alert = yield _this28.alertController.create({
          header: 'Failed !',
          message: 'Please login for add to cart',
          buttons: ['OK']
        });
        yield alert.present();
      } else {
        const loading = yield _this28.loadingController.create();
        yield loading.present();
        _this28.senddata.setstorecart(id_product, user_uid, addressw).subscribe(data => {
          let setstorecart = data;
          _this28.senddata.getstorecart(_this28.globalID).subscribe(data => {
            _this28.storecart = JSON.parse(data);
            for (let i in _this28.storecart) {
              console.log(_this28.storecart[i].addressw);
              if (_this28.storecart.length == 0) {
                _this28.cartCount = 0;
                _this28.cartStatus = 0;
              } else {
                _this28.cartCount = _this28.storecart.length;
              }
              _this28.cartUID = _this28.globalID;
              _this28.carts = _this28.storecart;
              _this28.cartID = _this28.storecart[i].id_cart;
              _this28.storeID = _this28.storecart[i].product_id;
              // this.cartStatus = this.storecart[i].nama
              _this28.cartDeskripsi = _this28.storecart[i].deskripsi;
              _this28.cartPrice = _this28.storecart[i].harga;
              _this28.cartQty = _this28.storecart[i].qty_cart;
              let cartPriceBNB = _this28.current_bnb * _this28.cartPrice * _this28.cartQty;
              _this28.cartPriceBNB = cartPriceBNB.toFixed(4);
              _this28.cartImg = _this28.storecart[i].gambar;
              _this28.cartStatus = 1;
            }
          }, error => {});
        }, error => {});
        loading.dismiss();
        const alert = yield _this28.alertController.create({
          header: 'Success',
          message: 'Items already added to your cart',
          buttons: ['OK']
        });
        yield alert.present();
        _this28.stateHash = true;
        _this28.state_buy = 2;
      }
    })();
  }
  updatestorecart(id_cart, user_uid, addressw, transactionHash) {
    var _this29 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this29.loadingController.create();
      yield loading.present();
      _this29.senddata.updatestorecartHome(id_cart, user_uid, addressw, transactionHash).subscribe(data => {
        let updatestorecartHome = data;
        console.log(updatestorecartHome);
      }, error => {});
      loading.dismiss();
    })();
  }
  updatestoreprogress(id_orders, user_uid, addressw, file_orders) {
    var _this30 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this30.loadingController.create();
      yield loading.present();
      _this30.senddata.updatestoreprogressHome(id_orders, user_uid, addressw, file_orders).subscribe(data => {
        let updatestoreprogressHome = data;
        console.log(updatestoreprogressHome);
      }, error => {});
      loading.dismiss();
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
            } else {}
            this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe(datapos => {
              let position = JSON.parse(datapos);
              this.pos_1 = position.pos_1;
              // console.log("pos 1", this.pos_1);
              this.pos_2 = position.pos_2;
              // console.log("pos 2", this.pos_2);
              this.pos_3 = position.pos_3;
              // console.log("pos 3", this.pos_3);
              this.pos_4 = position.pos_4;
              // console.log("pos 4", this.pos_4);
              this.pos_5 = position.pos_5;
              // console.log("pos 5", this.pos_5);
            });

            this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe(datahistory => {
              let historyItems = JSON.parse(datahistory);
              // console.log(historyItems);
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
            } else {}
            this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe(datapos => {
              let position = JSON.parse(datapos);
              this.pos_1 = position.pos_1;
              // console.log("pos 1", this.pos_1);
              this.pos_2 = position.pos_2;
              // console.log("pos 2", this.pos_2);
              this.pos_3 = position.pos_3;
              // console.log("pos 3", this.pos_3);
              this.pos_4 = position.pos_4;
              // console.log("pos 4", this.pos_4);
              this.pos_5 = position.pos_5;
              // console.log("pos 5", this.pos_5);
            });

            this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe(datahistory => {
              let historyItems = JSON.parse(datahistory);
              // console.log(historyItems);
            });
          }, error => {});
        }
      }
    }
  }
  detailBid(ItemId) {
    var _this31 = this;
    this.senddata.getselldgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref66 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this31.dragonDetail = JSON.parse(dataDetail);
        _this31.marketp2pBIDdragonDocId = _this31.dragonDetail[0].DocId;
        _this31.marketp2pBIDdragonID = _this31.dragonDetail[0].ItemId;
        _this31.marketp2pBIDdragonImg = _this31.dragonDetail[0].Id;
        _this31.marketp2pBIDdragonAttack = _this31.dragonDetail[0].Attack;
        _this31.marketp2pBIDdragonDefense = _this31.dragonDetail[0].Defense;
        _this31.marketp2pBIDdragonLevel = _this31.dragonDetail[0].Level;
        _this31.marketp2pBIDdragonHP = _this31.dragonDetail[0].HP;
        _this31.marketp2pBIDdragonMaxHP = _this31.dragonDetail[0].MaxHP;
        _this31.marketp2pBIDdragonHunger = _this31.dragonDetail[0].Hunger;
        _this31.marketp2pBIDdragonMaxHunger = _this31.dragonDetail[0].MaxHunger;
        _this31.marketp2pBIDdragonRarity = _this31.dragonDetail[0].Rarity;
        _this31.marketp2pBIDdragonExp = _this31.dragonDetail[0].Exp;
        _this31.marketp2pBIDdragonowner = _this31.dragonDetail[0].uid;
        _this31.marketp2pBIDdragonprice = _this31.dragonDetail[0].price;
        _this31.marketp2pBIDdragontype = _this31.dragonDetail[0].Type;
        _this31.marketp2pBIDdragonpriceNow = _this31.dragonDetail[0].PriceNow;
        _this31.marketp2pBIDdragontime = _this31.dragonDetail[0].CreatedAt;
        _this31.marketp2pdragonBIDfavorited = _this31.dragonDetail[0].favorited;
        _this31.marketp2pBIDdragonBG = _this31.dragonDetail[0].imgbackground;
        _this31.marketp2pBIDdragonImgBG = _this31.dragonDetail[0].imgBg;
        let marketp2pdragonpriceUSD = _this31.marketp2pBIDdragonpriceNow / _this31.current_bnb;
        _this31.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);
        if (_this31.marketp2pBIDdragonBG == "exists") {
          _this31.senddata.getdgroyaltymp(_this31.marketp2pBIDdragonDocId).subscribe(dataRoyalty => {
            let dr = dataRoyalty;
            // fee p2p market dragon
            _this31.marketp2pdragonFee = 12 / 100 * _this31.marketp2pBIDdragonpriceNow;
            let marketp2pdragonprice_actual = _this31.marketp2pBIDdragonpriceNow - _this31.marketp2pdragonFee;
            _this31.fee_display = _this31.marketp2pdragonFee;
            _this31.price_display = marketp2pdragonprice_actual;
            _this31.marketp2pdragonRoyalty = 10 / 100 * _this31.marketp2pBIDdragonpriceNow;
            let priceRoyalty_display = _this31.price_display - _this31.marketp2pdragonRoyalty;
            _this31.priceRoyalty_display = priceRoyalty_display.toFixed(2);
            _this31.fee_royalty = _this31.fee_display + _this31.marketp2pdragonRoyalty;
            _this31.marketp2pdragonRoyalty2 = 10 / 100 * _this31.marketp2pdragonRoyalty;
            _this31.marketp2pdragonRoyalty3 = 10 / 100 * _this31.marketp2pdragonRoyalty2;
            _this31.marketp2pdragonRoyalty4 = 10 / 100 * _this31.marketp2pdragonRoyalty3;
            _this31.marketp2pdragonRoyalty5 = 10 / 100 * _this31.marketp2pdragonRoyalty4;
            _this31.marketp2pdragonRoyalty6 = 10 / 100 * _this31.marketp2pdragonRoyalty5;
            let totaroyalty_5a = _this31.marketp2pdragonRoyalty - _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4 - _this31.marketp2pdragonRoyalty5;
            let totaroyalty_5b = _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4 - _this31.marketp2pdragonRoyalty5;
            let totaroyalty_5c = _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4 - _this31.marketp2pdragonRoyalty5;
            let totaroyalty_5d = _this31.marketp2pdragonRoyalty4 - _this31.marketp2pdragonRoyalty5;
            let totaroyalty_5e = _this31.marketp2pdragonRoyalty5 - _this31.marketp2pdragonRoyalty6;
            _this31.totaroyalty_5a = totaroyalty_5a;
            _this31.totaroyalty_5b = totaroyalty_5b;
            _this31.totaroyalty_5c = totaroyalty_5c;
            _this31.totaroyalty_5d = totaroyalty_5d;
            _this31.totaroyalty_5e = totaroyalty_5e;
            let totaroyalty_4a = _this31.marketp2pdragonRoyalty - _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4;
            let totaroyalty_4b = _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4;
            let totaroyalty_4c = _this31.marketp2pdragonRoyalty3 - _this31.marketp2pdragonRoyalty4;
            _this31.totaroyalty_4a = totaroyalty_4a;
            _this31.totaroyalty_4b = totaroyalty_4b;
            _this31.totaroyalty_4c = totaroyalty_4c;
            let totaroyalty_3a = _this31.marketp2pdragonRoyalty - _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3;
            let totaroyalty_3b = _this31.marketp2pdragonRoyalty2 - _this31.marketp2pdragonRoyalty3;
            _this31.totaroyalty_3a = totaroyalty_3a;
            _this31.totaroyalty_3b = totaroyalty_3b;
            let totaroyalty_2a = _this31.marketp2pdragonRoyalty - _this31.marketp2pdragonRoyalty2;
            _this31.totaroyalty_2a = totaroyalty_2a;
            let totaroyalty_1a = _this31.marketp2pdragonRoyalty;
            _this31.totaroyalty_1a = totaroyalty_1a;
            if (dr == 1) {
              _this31.positionRoyalty = 1;
              // console.log("first position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
            } else if (dr == 2) {
              _this31.positionRoyalty = 2;
              // console.log("second position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
            } else if (dr == 3) {
              _this31.positionRoyalty = 3;
              // console.log("third position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
            } else if (dr == 4) {
              _this31.positionRoyalty = 4;
              // console.log("fourth position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
              // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
            } else if (dr == 5) {
              _this31.positionRoyalty = 5;
              // console.log("fifth position");
              // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
              // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
            } else if (dr == 6) {
              _this31.positionRoyalty = 6;
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
        _this31.senddata.getposroyaltymp(ItemId).subscribe(datapos => {
          let position = JSON.parse(datapos);
          _this31.pos_1 = position.pos_1;
          // console.log("pos 1", this.pos_1);
          _this31.pos_2 = position.pos_2;
          // console.log("pos 2", this.pos_2);
          _this31.pos_3 = position.pos_3;
          // console.log("pos 3", this.pos_3);
          _this31.pos_4 = position.pos_4;
          // console.log("pos 4", this.pos_4);
          _this31.pos_5 = position.pos_5;
          // console.log("pos 5", this.pos_5);
        });

        _this31.marketp2pdragonFee = 12 / 100 * _this31.marketp2pBIDdragonpriceNow;
        let marketp2pdragonprice_actual = _this31.marketp2pBIDdragonpriceNow - _this31.marketp2pdragonFee;
        _this31.fee_display = _this31.marketp2pdragonFee;
        _this31.price_display = marketp2pdragonprice_actual;
        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        _this31.latest_date = _this31.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = _this31.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDdragontime, "LOCAL");
        _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
          _this31.dragonBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.dragonBidHistoryWin[0].CreatedBid, "LOCAL");
        });

        _this31.sesion1 = 0;
        // console.log(this.sesion1);
        _this31.countDownBID();
        _this31.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this31.countDownBID();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this31.minutes == 0 && _this31.seconds == 0) {
            _this31.sesion1 = 1;
            clearInterval(_this31.countdown);
            if (_this31.sesion1 == 1) {
              // console.log(this.sesion1);
              _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this31.dragonBidHistoryWin = JSON.parse(dataBid);
                _this31.executeBid(ItemId, _this31.dragonBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDdragontime", this.marketp2pBIDdragontime);
            _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this31.dragonBidHistoryWin = JSON.parse(dataBid);
              if (_this31.dragonBidHistoryWin.length == 0) {
                _this31.sendBidtoItems(ItemId);
              } else {
                // console.log("dragonBidHistoryWin", this.dragonBidHistoryWin[0].cartCreatedBid);
                _this31.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this31.checkcountDowncartBID(_this31.dragonBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if (_this31.minutescart == 0 && _this31.secondscart == 0) {
                    _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                      var _ref69 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                        _this31.dragonBidHistoryWin = JSON.parse(dataBid);
                        _this31.dragonBidHistoryWinuidBid = _this31.dragonBidHistoryWin[0].uidBid;
                        _this31.dragonBidHistorycartwinBid = _this31.dragonBidHistoryWin[0].cartCreatedBid;
                        _this31.fs.collection('Bid/' + _this31.marketp2pBIDdragonowner + '/Batteries').doc(_this31.dragonBidHistoryWin[0].DocId).delete().then(() => {});
                        let crd = JSON.stringify({
                          uid: _this31.globalID,
                          price: Number(_this31.input_price_actual)
                        });
                        _this31.current_data = JSON.parse(crd);
                        _this31.fs.collection('Bid/' + _this31.dragonBidHistoryWin[0].uidBid + '/Batteries').doc(_this31.dragonBidHistoryWin[0].DocId).set({
                          DocId: _this31.dragonBidHistoryWin[0].DocId,
                          ItemId: _this31.marketp2pBIDdragonID,
                          PriceNow: Number(_this31.marketp2pBIDdragonpriceNow),
                          BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this31.current_data)
                        }).then(() => {}).catch(error => {});
                        let now = new Date();
                        _this31.latest_date = _this31.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                        function addHours(numOfHours, date = new Date()) {
                          date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                          return date;
                        }
                        const date = now;
                        let latest_date = addHours(0.1, now);
                        _this31.timeBID = _this31.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                        if (_this31.dragonBidHistoryWin[0].statusBid == 1) {
                          _this31.senddata.deletecartBidListmp(_this31.dragonBidHistoryWin[0].idBid, _this31.timeBID).subscribe(dataE => {
                            _this31.executeBid(ItemId, _this31.dragonBidHistoryWin[0].idBid);
                          });
                          _this31.sesion1 = 0;
                        }
                      });
                      return function (_x63) {
                        return _ref69.apply(this, arguments);
                      };
                    }());
                    const loading = yield _this31.loadingController.create();
                    yield loading.present();
                    _this31.executeBid(ItemId, _this31.dragonBidHistoryWin[0].idBid);
                    setTimeout(function () {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(_this31.countdownCart);
                  } else {
                    _this31.stateExecuteBid = false;
                  }
                }), 1000);
              }
            });
          } else if (_this31.hours <= -1 || _this31.minutes <= -1 || _this31.seconds <= -1) {
            const alert = yield _this31.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"]
            });
            yield alert.present();
            clearInterval(_this31.countdown);
            _this31.loadingtext = true;
            _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this31.dragonBidHistoryWin = JSON.parse(dataBid);
              if (_this31.dragonBidHistoryWin.length == 0) {
                _this31.sendBidtoItems(ItemId);
              } else {
                // console.log("dragonBidHistoryWin", this.dragonBidHistoryWin[0].cartCreatedBid);
                _this31.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this31.checkcountDowncartBID(_this31.dragonBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  _this31.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                    _this31.dragonBidHistoryWin = JSON.parse(dataBid);
                    _this31.executeBid(ItemId, _this31.dragonBidHistoryWin[0].idBid);
                    _this31.stateExecuteBid = true;
                  });
                }), 1000);
              }
            });
          }
        }), 1000);
      });
      return function (_x62) {
        return _ref66.apply(this, arguments);
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
    // console.log(this.latest_date);
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
            // console.log("cart will expired");
            this.stateExecuteBid = false;
          } else {
            // this.countDowncartBID();
            // console.log("cart still running");
            this.stateExecuteBid = true;
          }
        });
      }, 3000);
      this.switchToWinner = true;
      this.sesion1 = 0;
      // this.detailBid(ItemId);
      // console.log(this.switchToWinner);
    } else {
      // console.log(ItemId);
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
    var _this32 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this32.marketp2pBIDdragontime).getTime();
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
      _this32.marketp2pdragontimeCount = 1;
      localStorage.setItem("Type", _this32.marketp2pBIDdragontype);
      _this32.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this32.hours = hours;
      _this32.minutes = minutes;
      _this32.seconds = seconds;
      // If the count down is over, write some text
      if (distance < 0 || _this32.hours < 0) {
        _this32.hours = 0;
        _this32.minutes = 0;
        _this32.seconds = 0;
        _this32.marketp2pdragontimeCount = 0;
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
    var _this33 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("2. execute timeCartSecond function");
      // const loading = await this.loadingController.create();
      // await loading.present();
      _this33.stateCollectionBid = 0;
      _this33.timeCartSecond(ItemId);
    })();
  }
  timeCartSecond(ItemId) {
    var _this34 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("3. execute executeBid function");
      _this34.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
        var _ref71 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
          _this34.dragonBidHistoryWin = JSON.parse(dataBid);
          _this34.dragonBidHistoryWinuidBid = _this34.dragonBidHistoryWin[0].uidBid;
          _this34.dragonBidHistorycartwinBid = _this34.dragonBidHistoryWin[0].cartCreatedBid;
          _this34.executeBid(ItemId, _this34.dragonBidHistoryWin[0].idBid);
        });
        return function (_x64) {
          return _ref71.apply(this, arguments);
        };
      }());
    })();
  }
  sendBidtoItems(ItemId) {
    var _this35 = this;
    // console.log("the winner is empty");
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
          const alert = yield _this35.alertController.create({
            header: "Warning !",
            message: "This Auction has expired!",
            buttons: ["OK"]
          });
          yield alert.present();
          _this35.sesion1 = 0;
          // this.detailBid(ItemId);
          _this35.senddata.getselldgBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref73 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this35.loadingController.create();
              yield loading.present();
              _this35.dragonsBID = dataSell;
              _this35.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.dragonsBID)
              let marketp2pdragonDate = _this35.dragonsBID;
              for (let i in marketp2pdragonDate) {
                _this35.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
                if (_this35.dragonsBID[i].imgbackground == 'exists') {
                  _this35.senddata.getallbackgroundsellmp(_this35.dragonsBID[i].ItemId).subscribe(dataBackground => {
                    _this35.dragonsownedbg = JSON.parse(dataBackground);
                    _this35.marketp2pdragonBG = _this35.dragonsownedbg.imgbackground;
                    // console.log(this.dragonsownedbg)
                  }, error => {});
                }
              }
            });
            return function (_x65) {
              return _ref73.apply(this, arguments);
            };
          }(), error => {});
        })).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBid(ItemId, idBid) {
    var _this36 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this36.sesion1 = 0;
        // this.detailBid(ItemId);
        // console.log("the winner is empty");
        _this36.fs.collection('Bid/' + _this36.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).delete().then(() => {
          _this36.senddata.selldragontoitemsmp(_this36.marketp2pBIDdragonowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref74 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this36.fs.collection('Items/' + _this36.marketp2pBIDdragonowner + '/Dragons').doc(ItemId).set({
                Id: ItemId,
                ItemId: _this36.marketp2pBIDdragonID,
                Attributes: {
                  AttackPoint: Number(_this36.marketp2pBIDdragonAttack),
                  DefensePoint: Number(_this36.marketp2pBIDdragonDefense),
                  Exp: Number(_this36.marketp2pBIDdragonExp),
                  HP: Number(_this36.marketp2pBIDdragonHP),
                  Hunger: Number(_this36.marketp2pdragonHunger),
                  Level: Number(_this36.marketp2pBIDdragonLevel),
                  MaxHP: Number(_this36.marketp2pdragonMaxHP),
                  MaxHunger: Number(_this36.marketp2pdragonMaxHunger)
                }
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
              // this.checkkind(this.dragonBidHistoryWin[0].DocId);
            });
            return function (_x66) {
              return _ref74.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this36.stateExecuteBid == false) {
          // console.log("processing validation");
          // document has deleted from owner
          // console.log("6. delete document from owner");
          _this36.fs.collection('Bid/' + _this36.marketp2pBIDdragonowner + '/Dragons').doc(_this36.dragonBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this36.dragonBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this36.globalID,
              price: Number(_this36.input_price_actual)
            });
            _this36.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            // console.log("7. add document to", this.dragonBidHistoryWin[0].uidBid);
            _this36.fs.collection('Bid/' + _this36.dragonBidHistoryWin[0].uidBid + '/Dragons').doc(_this36.dragonBidHistoryWin[0].DocId).set({
              Id: ItemId,
              ItemId: _this36.marketp2pBIDdragonID,
              Attributes: {
                AttackPoint: Number(_this36.marketp2pBIDdragonAttack),
                DefensePoint: Number(_this36.marketp2pBIDdragonDefense),
                Exp: Number(_this36.marketp2pBIDdragonExp),
                HP: Number(_this36.marketp2pBIDdragonHP),
                Hunger: Number(_this36.marketp2pdragonHunger),
                Level: Number(_this36.marketp2pBIDdragonLevel),
                MaxHP: Number(_this36.marketp2pdragonMaxHP),
                MaxHunger: Number(_this36.marketp2pdragonMaxHunger)
              },
              PriceNow: Number(_this36.marketp2pBIDdragonpriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this36.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this36.latest_date = _this36.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this36.timeBID = _this36.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
              // post API to add bid list
              // console.log("9. posting data to API...");
              _this36.sessioncountdownCart = 0;
              if (_this36.dragonBidHistoryWin[0].notifBid == 0) {
                _this36.senddata.addcartBidListmp(idBid, _this36.timeBID).subscribe(dataE => {
                  _this36.sendNotificationtoWinBid(_this36.dragonBidHistoryWin[0].uidBid, idBid);
                  if (_this36.dragonBidHistoryWin[0].uidBid == _this36.globalID) {
                    _this36.cartBidcount = 1;
                    _this36.selectedBid = "Dragons";
                    _this36.state_buy = 2;
                    _this36.marketp2pdragonDocId = _this36.dragonBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                  }

                  let addcartBidListmp = JSON.parse(dataE);
                  // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this36.sesion1 = 0;
                  _this36.sessioncountdownCart = 1;
                  _this36.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this36.timeBID).subscribe(lastBid => {
                    // console.log("lastBid", lastBid);
                    _this36.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this36.dragonBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this36.dragonBidHistoryWin[0].uidBid == _this36.globalID) {
                  _this36.cartBidcount = 1;
                  _this36.selectedBid = "Dragons";
                  _this36.state_buy = 2;
                  _this36.marketp2pdragonDocId = _this36.dragonBidHistoryWin[0].DocId;
                  // console.log(this.selectedBid);
                }
              }
            }).catch(error => {});
          }
          _this36.countDownBID();
          _this36.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this36.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this36.minutes == 0 && _this36.seconds == 0) {
              clearInterval(_this36.countdown);
            } else {
              clearInterval(_this36.countdown);
            }
          }), 1000);
        } else {
          _this36.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this36.dragonBidHistory = JSON.parse(dataBid);
          });
          // console.log("validation success");
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
            // console.log(this.marketp2peggpriceUSD);
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
            // console.log(this.marketp2peggpriceUSD);
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
          console.log(this.eggsBID);
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
    var _this37 = this;
    this.senddata.getselleggidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref76 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this37.eggDetail = JSON.parse(dataDetail);
        _this37.marketp2pBIDeggDocId = _this37.eggDetail[0].DocId;
        _this37.marketp2pBIDeggID = _this37.eggDetail[0].ItemId;
        _this37.marketp2pBIDeggowner = _this37.eggDetail[0].uid;
        _this37.marketp2pBIDeggprice = _this37.eggDetail[0].price;
        _this37.marketp2pBIDeggtype = _this37.eggDetail[0].Type;
        _this37.marketp2pBIDeggpriceNow = _this37.eggDetail[0].PriceNow;
        _this37.marketp2pBIDeggtime = _this37.eggDetail[0].CreatedAt;
        let marketp2peggpriceUSD = _this37.marketp2pBIDeggpriceNow / _this37.current_bnb;
        _this37.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);
        _this37.marketp2peggFee = 12 / 100 * _this37.marketp2pBIDeggpriceNow;
        let marketp2peggprice_actual = _this37.marketp2pBIDeggpriceNow - _this37.marketp2peggFee;
        _this37.fee_display = _this37.marketp2peggFee;
        _this37.price_display = marketp2peggprice_actual;
        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        _this37.latest_date = _this37.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = _this37.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDeggtime, "LOCAL");
        _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
          _this37.eggBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.eggBidHistoryWin[0].CreatedBid, "LOCAL");
        });

        _this37.sesion1 = 0;
        // console.log(this.sesion1);
        _this37.countDownBIDEgg();
        _this37.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this37.countDownBIDEgg();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this37.minutesEgg == 0 && _this37.secondsEgg == 0) {
            _this37.sesion1 = 1;
            clearInterval(_this37.countdown);
            if (_this37.sesion1 == 1) {
              // console.log(this.sesion1);
              _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this37.eggBidHistoryWin = JSON.parse(dataBid);
                _this37.executeBidEgg(ItemId, _this37.eggBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDeggtime", this.marketp2pBIDeggtime);
            _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this37.eggBidHistoryWin = JSON.parse(dataBid);
              if (_this37.eggBidHistoryWin.length == 0) {
                _this37.sendBidtoItemsEgg(ItemId);
              } else {
                // console.log("eggBidHistoryWin", this.eggBidHistoryWin[0].cartCreatedBid);
                _this37.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this37.checkcountDowncartBID(_this37.eggBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if (_this37.minutescart == 0 && _this37.secondscart == 0) {
                    _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                      var _ref79 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                        _this37.eggBidHistoryWin = JSON.parse(dataBid);
                        _this37.eggBidHistoryWinuidBid = _this37.eggBidHistoryWin[0].uidBid;
                        _this37.eggBidHistorycartwinBid = _this37.eggBidHistoryWin[0].cartCreatedBid;
                        _this37.fs.collection('Bid/' + _this37.marketp2pBIDeggowner + '/Batteries').doc(_this37.eggBidHistoryWin[0].DocId).delete().then(() => {});
                        let crd = JSON.stringify({
                          uid: _this37.globalID,
                          price: Number(_this37.input_price_actual)
                        });
                        _this37.current_data = JSON.parse(crd);
                        _this37.fs.collection('Bid/' + _this37.eggBidHistoryWin[0].uidBid + '/Batteries').doc(_this37.eggBidHistoryWin[0].DocId).set({
                          DocId: _this37.eggBidHistoryWin[0].DocId,
                          ItemId: _this37.marketp2pBIDeggID,
                          PriceNow: Number(_this37.marketp2pBIDeggpriceNow),
                          BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this37.current_data)
                        }).then(() => {}).catch(error => {});
                        let now = new Date();
                        _this37.latest_date = _this37.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                        function addHours(numOfHours, date = new Date()) {
                          date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                          return date;
                        }
                        const date = now;
                        let latest_date = addHours(0.1, now);
                        _this37.timeBID = _this37.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                        if (_this37.eggBidHistoryWin[0].statusBid == 1) {
                          _this37.senddata.deletecartBidListmp(_this37.eggBidHistoryWin[0].idBid, _this37.timeBID).subscribe(dataE => {
                            _this37.executeBidEgg(ItemId, _this37.eggBidHistoryWin[0].idBid);
                          });
                          _this37.sesion1 = 0;
                        }
                      });
                      return function (_x68) {
                        return _ref79.apply(this, arguments);
                      };
                    }());
                    const loading = yield _this37.loadingController.create();
                    yield loading.present();
                    _this37.executeBidEgg(ItemId, _this37.eggBidHistoryWin[0].idBid);
                    setTimeout(function () {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(_this37.countdownCart);
                  } else {
                    _this37.stateExecuteBid = false;
                  }
                }), 1000);
              }
            });
          } else if (_this37.hoursEgg <= -1 || _this37.minutesEgg <= -1 || _this37.secondsEgg <= -1) {
            const alert = yield _this37.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"]
            });
            yield alert.present();
            clearInterval(_this37.countdown);
            _this37.loadingtext = true;
            _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this37.eggBidHistoryWin = JSON.parse(dataBid);
              if (_this37.eggBidHistoryWin.length == 0) {
                _this37.sendBidtoItemsEgg(ItemId);
              } else {
                // console.log("eggBidHistoryWin", this.eggBidHistoryWin[0].cartCreatedBid);
                _this37.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this37.checkcountDowncartBID(_this37.eggBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  _this37.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                    _this37.eggBidHistoryWin = JSON.parse(dataBid);
                    _this37.executeBidEgg(ItemId, _this37.eggBidHistoryWin[0].idBid);
                    _this37.stateExecuteBid = true;
                  });
                }), 1000);
              }
            });
          }
        }), 1000);
      });
      return function (_x67) {
        return _ref76.apply(this, arguments);
      };
    }(), error => {});
  }
  priceNowBidegg(ItemId) {
    this.senddata.getselleggidBIDmp(ItemId);
  }
  sendBidtoItemsEgg(ItemId) {
    var _this38 = this;
    // console.log("the winner is empty");
    this.fs.collection('Bid/' + this.marketp2pBIDeggowner + '/Eggs').doc(ItemId).delete().then(() => {
      this.senddata.selleggtoitemsmp(this.marketp2pBIDeggowner, ItemId).subscribe(dataE => {
        // console.log(dataE);
        this.fs.collection('Items/' + this.marketp2pBIDeggowner + '/Eggs').doc(ItemId).set({
          DocId: ItemId,
          ItemId: this.marketp2pBIDeggID
        }).then(() => {
          this.sesion1 = 0;
          // this.detailBid(ItemId);
          this.senddata.getselleggBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref81 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this38.loadingController.create();
              yield loading.present();
              _this38.eggsBID = dataSell;
              _this38.marketp2peggLength = dataSell.length;
              loading.dismiss();
              // console.log(this.eggsBID)
              let marketp2peggDate = _this38.eggsBID;
            });
            return function (_x69) {
              return _ref81.apply(this, arguments);
            };
          }(), error => {});
        }).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBidEgg(ItemId, idBid) {
    var _this39 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this39.sesion1 = 0;
        // this.detailBid(ItemId);
        // console.log("the winner is empty");
        _this39.fs.collection('Bid/' + _this39.marketp2pBIDeggowner + '/Eggs').doc(ItemId).delete().then(() => {
          _this39.senddata.selleggtoitemsmp(_this39.marketp2pBIDeggowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref82 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this39.fs.collection('Items/' + _this39.marketp2pBIDeggowner + '/Eggs').doc(ItemId).set({
                Id: ItemId,
                ItemId: _this39.marketp2pBIDeggID
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
            });
            return function (_x70) {
              return _ref82.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this39.stateExecuteBid == false) {
          // console.log("processing validation");
          // document has deleted from owner
          // console.log("6. delete document from owner");
          _this39.fs.collection('Bid/' + _this39.marketp2pBIDeggowner + '/Eggs').doc(_this39.eggBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this39.eggBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this39.globalID,
              price: Number(_this39.input_price_actual)
            });
            _this39.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            // console.log("7. add document to", this.eggBidHistoryWin[0].uidBid);
            _this39.fs.collection('Bid/' + _this39.eggBidHistoryWin[0].uidBid + '/Eggs').doc(_this39.eggBidHistoryWin[0].DocId).set({
              Id: _this39.eggBidHistoryWin[0].DocId,
              ItemId: _this39.marketp2pBIDeggID,
              PriceNow: Number(_this39.marketp2pBIDeggpriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this39.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this39.latest_date = _this39.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this39.timeBID = _this39.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
              // post API to add bid list
              // console.log("9. posting data to API...");
              _this39.sessioncountdownCart = 0;
              if (_this39.eggBidHistoryWin[0].notifBid == 0) {
                _this39.senddata.addcartBidListmp(idBid, _this39.timeBID).subscribe(dataE => {
                  _this39.sendNotificationtoWinBid(_this39.eggBidHistoryWin[0].uidBid, idBid);
                  if (_this39.eggBidHistoryWin[0].uidBid == _this39.globalID) {
                    _this39.cartBidcount = 1;
                    _this39.selectedBid = "Eggs";
                    _this39.state_buy = 2;
                    _this39.marketp2peggDocId = _this39.eggBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                    _this39.stateExecuteBid = true;
                  }
                  let addcartBidListmp = JSON.parse(dataE);
                  // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this39.sesion1 = 0;
                  _this39.sessioncountdownCart = 1;
                  _this39.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this39.timeBID).subscribe(lastBid => {
                    // console.log("lastBid", lastBid);
                    _this39.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this39.eggBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this39.eggBidHistoryWin[0].uidBid == _this39.globalID) {
                  _this39.cartBidcount = 1;
                  _this39.selectedBid = "Eggs";
                  _this39.state_buy = 2;
                  _this39.marketp2peggDocId = _this39.eggBidHistoryWin[0].DocId;
                  // console.log(this.selectedBid);
                  _this39.stateExecuteBid = true;
                }
              }
            }).catch(error => {});
          }
          _this39.countDownBID();
          _this39.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this39.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this39.minutes == 0 && _this39.seconds == 0) {
              clearInterval(_this39.countdown);
            } else {
              clearInterval(_this39.countdown);
            }
          }), 1000);
        } else {
          _this39.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this39.eggBidHistory = JSON.parse(dataBid);
          });
          // console.log("validation success");
        }
      }
      // end validation data
    })();
  }

  countDownBIDEgg() {
    var _this40 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this40.marketp2pBIDeggtime).getTime();
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
      _this40.marketp2peggtimeCount = 1;
      localStorage.setItem("Type", _this40.marketp2pBIDeggtype);
      _this40.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this40.hoursEgg = hours;
      _this40.minutesEgg = minutes;
      _this40.secondsEgg = seconds;
      // }, 1000);
    })();
  }
  // BATTERY
  checkkindBattery(marketp2pbatteryDocId) {
    var _this41 = this;
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
            // console.log(this.marketp2pbatterypriceUSD);
          }, error => {});
        }
      } else if (tabs == "bid") {
        let lastseen = localStorage.getItem("lastseen");
        this.loadingtext = true;
        if (lastseen == "battery") {
          this.senddata.getsellbatteryBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref84 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this41.loadingController.create();
              yield loading.present();
              _this41.batterysBID = dataSell;
              _this41.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pdragonDate = _this41.batterysBID;
            });
            return function (_x71) {
              return _ref84.apply(this, arguments);
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
            // console.log(this.marketp2pbatterypriceUSD);
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
            var _ref85 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this41.loadingController.create();
              yield loading.present();
              _this41.batterysBID = dataSell;
              _this41.marketp2pdragonLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pdragonDate = _this41.batterysBID;
            });
            return function (_x72) {
              return _ref85.apply(this, arguments);
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
    var _this42 = this;
    this.senddata.getsellbatteryidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
      var _ref86 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataDetail) {
        _this42.batteryDetail = JSON.parse(dataDetail);
        _this42.marketp2pBIDbatteryDocId = _this42.batteryDetail[0].DocId;
        _this42.marketp2pBIDbatteryID = _this42.batteryDetail[0].ItemId;
        _this42.marketp2pBIDbatteryowner = _this42.batteryDetail[0].uid;
        _this42.marketp2pBIDbatteryprice = _this42.batteryDetail[0].price;
        _this42.marketp2pBIDbatterytype = _this42.batteryDetail[0].Type;
        _this42.marketp2pBIDbatterypriceNow = _this42.batteryDetail[0].PriceNow;
        _this42.marketp2pBIDbatterytime = _this42.batteryDetail[0].CreatedAt;
        let marketp2pbatterypriceUSD = _this42.marketp2pBIDbatterypriceNow / _this42.current_bnb;
        _this42.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);
        _this42.marketp2pbatteryFee = 12 / 100 * _this42.marketp2pBIDbatterypriceNow;
        let marketp2pbatteryprice_actual = _this42.marketp2pBIDbatterypriceNow - _this42.marketp2pbatteryFee;
        _this42.fee_display = _this42.marketp2pbatteryFee;
        _this42.price_display = marketp2pbatteryprice_actual;
        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        _this42.latest_date = _this42.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = _this42.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDbatterytime, "LOCAL");
        _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
          _this42.batteryBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.batteryBidHistoryWin[0].CreatedBid, "LOCAL");
        });

        _this42.sesion1 = 0;
        // console.log(this.sesion1);
        _this42.countDownBIDBattery();
        _this42.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this42.countDownBIDBattery();
          // console.log("detailBid", this.minutes, this.seconds);
          if (_this42.minutesBattery == 0 && _this42.secondsBattery == 0) {
            _this42.sesion1 = 1;
            clearInterval(_this42.countdown);
            if (_this42.sesion1 == 1) {
              // console.log(this.sesion1);
              _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                _this42.batteryBidHistoryWin = JSON.parse(dataBid);
                _this42.executeBidBattery(ItemId, _this42.batteryBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDbatterytime", this.marketp2pBIDbatterytime);
            _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this42.batteryBidHistoryWin = JSON.parse(dataBid);
              if (_this42.batteryBidHistoryWin.length == 0) {
                _this42.sendBidtoItemsBattery(ItemId);
              } else {
                // console.log("batteryBidHistoryWin", this.batteryBidHistoryWin[0].cartCreatedBid);
                _this42.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this42.checkcountDowncartBID(_this42.batteryBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if (_this42.minutescart == 0 && _this42.secondscart == 0) {
                    _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
                      var _ref89 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
                        _this42.batteryBidHistoryWin = JSON.parse(dataBid);
                        _this42.batteryBidHistoryWinuidBid = _this42.batteryBidHistoryWin[0].uidBid;
                        _this42.batteryBidHistorycartwinBid = _this42.batteryBidHistoryWin[0].cartCreatedBid;
                        _this42.fs.collection('Bid/' + _this42.marketp2pBIDbatteryowner + '/Batteries').doc(_this42.batteryBidHistoryWin[0].DocId).delete().then(() => {});
                        let crd = JSON.stringify({
                          uid: _this42.globalID,
                          price: Number(_this42.input_price_actual)
                        });
                        _this42.current_data = JSON.parse(crd);
                        _this42.fs.collection('Bid/' + _this42.batteryBidHistoryWin[0].uidBid + '/Batteries').doc(_this42.batteryBidHistoryWin[0].DocId).set({
                          DocId: _this42.batteryBidHistoryWin[0].DocId,
                          ItemId: _this42.marketp2pBIDbatteryID,
                          PriceNow: Number(_this42.marketp2pBIDbatterypriceNow),
                          BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this42.current_data)
                        }).then(() => {}).catch(error => {});
                        let now = new Date();
                        _this42.latest_date = _this42.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                        function addHours(numOfHours, date = new Date()) {
                          date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                          return date;
                        }
                        const date = now;
                        let latest_date = addHours(0.1, now);
                        _this42.timeBID = _this42.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                        if (_this42.batteryBidHistoryWin[0].statusBid == 1) {
                          _this42.senddata.deletecartBidListmp(_this42.batteryBidHistoryWin[0].idBid, _this42.timeBID).subscribe(dataE => {
                            _this42.executeBidBattery(ItemId, _this42.batteryBidHistoryWin[0].idBid);
                          });
                          _this42.sesion1 = 0;
                        }
                      });
                      return function (_x74) {
                        return _ref89.apply(this, arguments);
                      };
                    }());
                    const loading = yield _this42.loadingController.create();
                    yield loading.present();
                    _this42.executeBidBattery(ItemId, _this42.batteryBidHistoryWin[0].idBid);
                    setTimeout(function () {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(_this42.countdownCart);
                  } else {
                    _this42.stateExecuteBid = false;
                  }
                }), 1000);
              }
            });
          } else if (_this42.hoursBattery <= -1 || _this42.minutesBattery <= -1 || _this42.secondsBattery <= -1) {
            const alert = yield _this42.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"]
            });
            yield alert.present();
            clearInterval(_this42.countdown);
            _this42.loadingtext = true;
            _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
              _this42.batteryBidHistoryWin = JSON.parse(dataBid);
              if (_this42.batteryBidHistoryWin.length == 0) {
                _this42.sendBidtoItemsBattery(ItemId);
              } else {
                // console.log("batteryBidHistoryWin", this.batteryBidHistoryWin[0].cartCreatedBid);
                _this42.countdownCart = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this42.checkcountDowncartBID(_this42.batteryBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  _this42.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                    _this42.batteryBidHistoryWin = JSON.parse(dataBid);
                    _this42.executeBidBattery(ItemId, _this42.batteryBidHistoryWin[0].idBid);
                    _this42.stateExecuteBid = true;
                  });
                }), 1000);
              }
            });
          }
        }), 1000);
      });
      return function (_x73) {
        return _ref86.apply(this, arguments);
      };
    }(), error => {});
  }
  priceNowBidbattery(ItemId) {
    this.senddata.getsellbatteryidBIDmp(ItemId);
  }
  sendBidtoItemsBattery(ItemId) {
    var _this43 = this;
    // console.log("the winner is empty");
    this.fs.collection('Bid/' + this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).delete().then(() => {
      this.senddata.sellbatterytoitemsmp(this.marketp2pBIDbatteryowner, ItemId).subscribe(dataE => {
        // console.log(dataE);
        this.fs.collection('Items/' + this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).set({
          DocId: ItemId,
          ItemId: this.marketp2pBIDbatteryID
        }).then( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const alert = yield _this43.alertController.create({
            header: "Warning !",
            message: "This Auction has expired!",
            buttons: ["OK"]
          });
          yield alert.present();
          _this43.sesion1 = 0;
          // this.detailBid(ItemId);
          _this43.senddata.getsellbatteryBIDmp().subscribe( /*#__PURE__*/function () {
            var _ref92 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
              const loading = yield _this43.loadingController.create();
              yield loading.present();
              _this43.batterysBID = dataSell;
              _this43.marketp2pbatteryLength = dataSell.length;
              loading.dismiss();
              // console.log(this.batterysBID)
              let marketp2pbatteryDate = _this43.batterysBID;
            });
            return function (_x75) {
              return _ref92.apply(this, arguments);
            };
          }(), error => {});
        })).catch(error => {});
        // this.checkkind(this.dragonBidHistoryWin[0].DocId);
      }, error => {});
    });
  }
  executeBidBattery(ItemId, idBid) {
    var _this44 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // validation data 
      // check status bid from highest place bid
      if (idBid == null) {
        //if bid list empty, document will delete on bid collection and send it back to items collection
        _this44.sesion1 = 0;
        // this.detailBid(ItemId);
        // console.log("the winner is empty");
        _this44.fs.collection('Bid/' + _this44.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).delete().then(() => {
          _this44.senddata.sellbatterytoitemsmp(_this44.marketp2pBIDbatteryowner, ItemId).subscribe( /*#__PURE__*/function () {
            var _ref93 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
              // console.log(dataE);
              _this44.fs.collection('Items/' + _this44.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId).set({
                DocId: ItemId,
                ItemId: _this44.marketp2pBIDbatteryID
              }).then(() => {
                // console.log("Document expired!");
                // this.openDialog("Item Listed");
              }).catch(error => {});
              // this.checkkind(this.batteryBidHistoryWin[0].DocId);
            });
            return function (_x76) {
              return _ref93.apply(this, arguments);
            };
          }(), error => {});
        });
      } else {
        //bid list already exists, document switch to higest bid
        if (_this44.stateExecuteBid == false) {
          // console.log("processing validation");
          // document has deleted from owner
          // console.log("6. delete document from owner");
          _this44.fs.collection('Bid/' + _this44.marketp2pBIDbatteryowner + '/Batteries').doc(_this44.batteryBidHistoryWin[0].DocId).delete().then(() => {});
          if (_this44.batteryBidHistoryWin[0].statusBid < 2) {
            //check status bid 0 or 1 from higest bid
            let crd = JSON.stringify({
              uid: _this44.globalID,
              price: Number(_this44.input_price_actual)
            });
            _this44.current_data = JSON.parse(crd);
            // document already switch to bid collection winner
            // console.log("7. add document to", this.batteryBidHistoryWin[0].uidBid);
            _this44.fs.collection('Bid/' + _this44.batteryBidHistoryWin[0].uidBid + '/Batteries').doc(_this44.batteryBidHistoryWin[0].DocId).set({
              DocId: _this44.batteryBidHistoryWin[0].DocId,
              ItemId: _this44.marketp2pBIDbatteryID,
              PriceNow: Number(_this44.marketp2pBIDbatterypriceNow),
              BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this44.current_data)
            }).then(() => {
              // generate time left cart
              let now = new Date();
              _this44.latest_date = _this44.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                return date;
              }
              const date = now;
              let latest_date = addHours(0.1, now);
              _this44.timeBID = _this44.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
              // post API to add bid list
              // console.log("9. posting data to API...");
              _this44.sessioncountdownCart = 0;
              if (_this44.batteryBidHistoryWin[0].notifBid == 0) {
                _this44.senddata.addcartBidListmp(idBid, _this44.timeBID).subscribe(dataE => {
                  _this44.sendNotificationtoWinBid(_this44.batteryBidHistoryWin[0].uidBid, idBid);
                  if (_this44.batteryBidHistoryWin[0].uidBid == _this44.globalID) {
                    _this44.cartBidcount = 1;
                    _this44.selectedBid = "Batteries";
                    _this44.state_buy = 2;
                    _this44.marketp2pbatteryDocId = _this44.batteryBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                    _this44.stateExecuteBid = true;
                  }
                  let addcartBidListmp = JSON.parse(dataE);
                  // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                  _this44.sesion1 = 0;
                  _this44.sessioncountdownCart = 1;
                  _this44.senddata.getlastBidIdmp(addcartBidListmp.idBid, _this44.timeBID).subscribe(lastBid => {
                    // console.log("lastBid", lastBid);
                    _this44.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(dataBid => {
                      _this44.batteryBidHistoryWin = JSON.parse(dataBid);
                    });
                  });
                });
              } else {
                if (_this44.batteryBidHistoryWin[0].uidBid == _this44.globalID) {
                  _this44.cartBidcount = 1;
                  _this44.selectedBid = "Batteries";
                  _this44.state_buy = 2;
                  _this44.marketp2pbatteryDocId = _this44.batteryBidHistoryWin[0].DocId;
                  // console.log(this.selectedBid);
                  _this44.stateExecuteBid = true;
                }
              }
            }).catch(error => {});
          }
          _this44.countDownBID();
          _this44.countdown = setInterval( /*#__PURE__*/(0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this44.countDownBID();
            // console.log("executeBid", this.minutes, this.seconds);
            if (_this44.minutes == 0 && _this44.seconds == 0) {
              clearInterval(_this44.countdown);
            } else {
              clearInterval(_this44.countdown);
            }
          }), 1000);
        } else {
          _this44.senddata.getshistorydgidBIDmp(ItemId).subscribe(dataBid => {
            _this44.batteryBidHistory = JSON.parse(dataBid);
          });
          // console.log("validation success");
        }
      }
      // end validation data
    })();
  }

  countDownBIDBattery() {
    var _this45 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDate = new Date(_this45.marketp2pBIDbatterytime).getTime();
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
      _this45.marketp2pbatterytimeCount = 1;
      localStorage.setItem("Type", _this45.marketp2pBIDbatterytype);
      _this45.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this45.hoursBattery = hours;
      _this45.minutesBattery = minutes;
      _this45.secondsBattery = seconds;
      // }, 1000);
    })();
  }

  checkcountDowncartBID(cartCreatedBid) {
    var _this46 = this;
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
      localStorage.setItem("Type", _this46.marketp2pBIDdragontype);
      _this46.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this46.hourscart = hourscart;
      _this46.minutescart = minutescart;
      _this46.secondscart = secondscart;
      _this46.carttimeleft = 1;
      _this46.sesicart = 1;
      // this.state_buy = 5;
      // this.stateHash = true;
      // If the count down is over, write some text
      if (distancecart < 0) {
        _this46.hourscart = 0;
        _this46.minutescart = 0;
        _this46.secondscart = 0;
        _this46.carttimeleft = 0;
        _this46.sesicart = 0;
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
    var _this47 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set the date we're counting down to
      var countDownDatecart = new Date(_this47.dragonBidHistorycartwinBid).getTime();
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
      localStorage.setItem("Type", _this47.marketp2pBIDdragontype);
      _this47.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      _this47.hourscart = hourscart;
      _this47.minutescart = minutescart;
      _this47.secondscart = secondscart;
      _this47.carttimeleft = 1;
      _this47.sesicart = 1;
      // this.state_buy = 5;
      // this.stateHash = true;
      // If the count down is over, write some text
      if (distancecart < 0) {
        _this47.hourscart = 0;
        _this47.minutescart = 0;
        _this47.secondscart = 0;
        _this47.carttimeleft = 0;
        _this47.sesicart = 0;
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
    var _this48 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this48.senddata.getswinhistorydgidBIDmp(ItemId).subscribe( /*#__PURE__*/function () {
        var _ref95 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataBid) {
          _this48.dragonBidHistoryWin = JSON.parse(dataBid);
          _this48.dragonBidHistoryWinuidBid = _this48.dragonBidHistoryWin[0].uidBid;
          _this48.dragonBidHistorycartwinBid = _this48.dragonBidHistoryWin[0].cartCreatedBid;
          _this48.fs.collection('Bid/' + _this48.marketp2pBIDdragonowner + '/Dragons').doc(_this48.dragonBidHistoryWin[0].DocId).delete().then(() => {});
          let crd = JSON.stringify({
            uid: _this48.globalID,
            price: Number(_this48.input_price_actual)
          });
          _this48.current_data = JSON.parse(crd);
          _this48.fs.collection('Bid/' + _this48.dragonBidHistoryWin[0].uidBid + '/Dragons').doc(_this48.dragonBidHistoryWin[0].DocId).set({
            Id: ItemId,
            ItemId: _this48.marketp2pBIDdragonID,
            Attributes: {
              AttackPoint: Number(_this48.marketp2pBIDdragonAttack),
              DefensePoint: Number(_this48.marketp2pBIDdragonDefense),
              Exp: Number(_this48.marketp2pBIDdragonExp),
              HP: Number(_this48.marketp2pBIDdragonHP),
              Hunger: Number(_this48.marketp2pdragonHunger),
              Level: Number(_this48.marketp2pBIDdragonLevel),
              MaxHP: Number(_this48.marketp2pdragonMaxHP),
              MaxHunger: Number(_this48.marketp2pdragonMaxHunger)
            },
            PriceNow: Number(_this48.marketp2pBIDdragonpriceNow),
            BidList: firebase_compat_app__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.arrayUnion(_this48.current_data)
          }).then(() => {}).catch(error => {});
          let now = new Date();
          _this48.latest_date = _this48.datepipe.transform(now, "yyyy-MM-dd HH:mm");
          function addHours(numOfHours, date = new Date()) {
            date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
            return date;
          }
          const date = now;
          let latest_date = addHours(0.1, now);
          _this48.timeBID = _this48.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
          if (_this48.dragonBidHistoryWin[0].statusBid == 1) {
            _this48.senddata.deletecartBidListmp(_this48.dragonBidHistoryWin[0].idBid, _this48.timeBID).subscribe(dataE => {});
            // this.timeCart(ItemId);
            _this48.sesion1 = 0;
          } else {}
        });
        return function (_x77) {
          return _ref95.apply(this, arguments);
        };
      }(), error => {});
    })();
  }
  checkkindGroup(iditemsFood) {
    let lastseen = localStorage.getItem("lastseen");
    this.senddata.getsellfoodidmp(iditemsFood).subscribe(dataDetail => {
      this.foodDetail = JSON.parse(dataDetail);
      this.marketp2pfoodOID = this.foodDetail.DocId;
      this.marketp2pfoodID = this.foodDetail.ItemId;
      this.marketp2pfoodImg = this.foodDetail.Id;
      this.marketp2pfoodowner = this.foodDetail.owner;
      this.marketp2pfoodHVP = this.foodDetail.HVP;
      this.marketp2pfoodQty = this.foodDetail.qty;
      this.marketp2pfoodprice = this.foodDetail.price;
      let marketp2pfoodpriceUSD = this.foodDetail.price / this.current_bnb;
      this.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
      // console.log(JSON.parse(dataDetail));
    }, error => {});
  }
  checkkindJakets(iditemsJakets) {
    let lastseen = localStorage.getItem("lastseen");
    this.senddata.getselljaketsidmp(iditemsJakets).subscribe(dataDetail => {
      this.jaketsDetail = JSON.parse(dataDetail);
      this.marketfashionJaketsOID = this.jaketsDetail.id_product;
      this.marketfashionJaketsID = this.jaketsDetail.deskripsi;
      this.marketfashionJaketsImg = this.jaketsDetail.gambar;
      this.marketfashionJaketsprice = this.jaketsDetail.harga;
      // console.log(JSON.parse(dataDetail));
    }, error => {});
  }
  countDownSell() {
    var _this49 = this;
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
      // console.log(this.marketp2pdragontimeCount);
      this.senddata.getselldgmp().subscribe( /*#__PURE__*/function () {
        var _ref96 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataSell) {
          _this49.dragons = dataSell;
          _this49.marketp2pdragonLength = dataSell.length;
          setTimeout(function () {
            window.location.replace("/tabs/p2pmarket");
          }, 50000);
          let tabs = localStorage.getItem("tabs");
          tabs = "sell";
        });
        return function (_x78) {
          return _ref96.apply(this, arguments);
        };
      }(), error => {});
      this.fs.collection('Sell/' + this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId).delete().then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.marketp2pdragonowner;
        // console.log("Items has been expired!");
        this.senddata.selldragontoitemsmp(this.marketp2pdragonowner, this.marketp2pdragonDocId).subscribe( /*#__PURE__*/function () {
          var _ref97 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataE) {
            // console.log(dataE);
            _this49.fs.collection('Items/' + _this49.marketp2pdragonowner + '/Dragons').doc(_this49.marketp2pdragonDocId).set({
              Id: _this49.marketp2pdragonDocId,
              ItemId: _this49.marketp2pdragonID,
              Attributes: {
                AttackPoint: Number(_this49.marketp2pdragonAttack),
                DefensePoint: Number(_this49.marketp2pdragonDefense),
                Exp: Number(_this49.marketp2pdragonExp),
                HP: Number(_this49.marketp2pdragonHP),
                Hunger: Number(_this49.marketp2pdragonHunger),
                Level: Number(_this49.marketp2pdragonLevel),
                MaxHP: Number(_this49.marketp2pdragonMaxHP),
                MaxHunger: Number(_this49.marketp2pdragonMaxHunger)
              }
            }).then(() => {
              // console.log("Document successfully sold!");
              // this.openDialog("Item Listed");
            }).catch(error => {});
            const alert = yield _this49.alertController.create({
              header: "Attention",
              message: "Items has been expired!",
              buttons: ["OK"]
            });
            yield alert.present();
            _this49.checkkind(_this49.marketp2pdragonID);
          });
          return function (_x79) {
            return _ref97.apply(this, arguments);
          };
        }(), error => {});
      });
    }
    // }, 1000);
  }

  checkitemscreated() {
    this.fs.collection("Items").doc(this.globalID).valueChanges().subscribe(datas => {
      console.log(datas.Count);
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
    var _this50 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem("Input", input_price.toString());
      _this50.state_buy = 4;
      let marketp2peggprice_actual = input_price - _this50.marketp2peggFee;
      _this50.price_display = marketp2peggprice_actual;
      // console.log(this.price_display);
      if (input_price == _this50.marketp2pBIDdragonpriceNow || input_price == _this50.marketp2pBIDeggpriceNow) {
        const alert = yield _this50.alertController.create({
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
    var _this51 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this51.loadingController.create();
      yield loading.present();
      _this51.senddata.favoritedmp(_this51.globalID, DocId).subscribe( /*#__PURE__*/function () {
        var _ref98 = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this51.senddata.getselldglimitmp().subscribe(dataSell => {
            _this51.dragons = dataSell;
          }, error => {});
          loading.dismiss();
        });
        return function (_x80) {
          return _ref98.apply(this, arguments);
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
          // console.log(this.tokenNotif.tokenPushNotification);
        });
      } else {
        // console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      // console.log('An error occurred while retrieving token. ', err);
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
            // console.log("save token", tokenPushNotification);
          });
          // console.log(this.tokenNotif.tokenPushNotification);
        });
        // console.log("Hurraaa!!! we got the token.....");
        // console.log(tokenPushNotification);
      } else {
        // console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      // console.log('An error occurred while retrieving token. ', err);
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
          // console.log("gettokenOwnermp", this.tokenNotif.tokenPushNotification);
          this.senddata.postNotificationtoLosesBidmp(uidLoseBid, this.tokenNotif.tokenPushNotification, idBid).subscribe(data => {
            localStorage.setItem("token", tokenPushNotification);
            // console.log("save token", tokenPushNotification);
          });
          // console.log(this.tokenNotif.tokenPushNotification);
        });
        // console.log("Hurraaa!!! we got the token.....");
        // console.log(tokenPushNotification);
      } else {
        // console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(err => {
      // console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.getMessaging)();
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.onMessage)(messaging, payload => {
      // console.log('Message received. ', payload);
      this.message = payload;
    });
  }
  inputAddress(event) {
    const query = event.target.value;
    localStorage.setItem("alamat", query);
  }
  inputPostalCode(event) {
    const query = event.target.value;
    localStorage.setItem("kode_pos", query);
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
          localStorage.setItem("kota", query);
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
    const address = localStorage.getItem("alamat");
    const postal_id = localStorage.getItem("kode_pos");
    const cities = localStorage.getItem("kota");
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
      qrcode__WEBPACK_IMPORTED_MODULE_9__.toDataURL(qrCodeDataString, (err, qrCodeUrl) => {
        if (err) {
          console.error(err);
          return;
        }
        // The `qrCodeUrl` variable now contains the data URL of the generated QR code image
        // console.log(qrCodeUrl);
        this.senddata.insertNewJaketMetalicanamp(ordersID, globalID, this.codeHoodie + DocIdJakets, this.ItemIdJaket, updateJakets.toString(), JSON.stringify({
          uid: globalID
        }), qrCodeUrl).subscribe(resp => {
          // console.log("updating 1 data food...", resp);
        });
        this.fs.collection('Items/' + globalID + '/Fashions').doc(this.codeHoodie + DocIdJakets).set({
          ItemId: this.ItemIdJaket,
          QrCodeData: {
            UID: globalID,
            Claimmed: false,
            CreatedAt: this.newTime()
          },
          Id: this.codeHoodie + DocIdJakets
        }).then(() => {});
        // console.log(this.jaketsHigh);
      });
    }, error => {});
    localStorage.removeItem("alamat");
    localStorage.removeItem("kode_pos");
    localStorage.removeItem("kota");
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService
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
  type: _provider_service__WEBPACK_IMPORTED_MODULE_11__.ProviderService
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_5__.SendData
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe
}, {
  type: _awesome_cordova_plugins_push_ngx__WEBPACK_IMPORTED_MODULE_6__.Push
}, {
  type: _services_messaging_service__WEBPACK_IMPORTED_MODULE_12__.MessagingService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform
}]), (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "propDecorators", {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInfiniteScroll]
  }]
}), _class);
P2pmarketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: "app-p2pmarket",
  template: _p2pmarket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_p2pmarket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], P2pmarketPage);


/***/ }),

/***/ 76006:
/*!**********************************************************!*\
  !*** ./src/app/p2pmarket/p2pmarket.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-3deg);\n  }\n}\n.carticon {\n  animation: shake 0.5s;\n  animation-iteration-count: infinite;\n}\n\ncanvas {\n  background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/app/p2pmarket/p2pmarket.page.scss"],"names":[],"mappings":"AAAA;EACE;IAAK,2CAAA;EAEL;EADA;IAAO,6CAAA;EAIP;AACF;AAFA;EACE,qBAAA;EACA,mCAAA;AAIF;;AADA;EACE,uBAAA;AAIF","sourcesContent":["@keyframes shake {\r\n  0% { transform: translate(1px, 1px) rotate(0deg); }\r\n  100% { transform: translate(1px, -2px) rotate(-3deg); }\r\n}\r\n\r\n.carticon {\r\n  animation: shake 0.5s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\ncanvas {\r\n  background-color: black;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65143:
/*!**********************************************************!*\
  !*** ./src/app/p2pmarket/p2pmarket.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" id=\"main-content\">\r\n  <!-- Header -->\r\n  <header class=\"js-page-header z-20 fixed top-0 w-full backdrop-blur transition-colors\">\r\n    <div class=\"flex items-center px-6 py-6 xl:px-24\">\r\n      <!-- Logo -->\r\n      <a color=\"dark\" href=\"/tabs/home\">\r\n        <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n        <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n      </a>\r\n      <!-- Desktop Menu Actions -->\r\n        <div class=\"js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent\">\r\n          <!-- Mobile Logo / Menu Close -->\r\n          <div class=\"t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden\">\r\n            <!-- Mobile Logo -->\r\n            <a color=\"dark\" href=\"/tabs/home\">\r\n              <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n              <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n            </a>\r\n          </div>\r\n          <!-- Primary Nav -->\r\n          <nav class=\"navbar w-full\">\r\n            <ul class=\"flex flex-col lg:flex-row\">\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/home\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Home <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/p2pmarket\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">P2P Market <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"/tabs/gamehub\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Game Hub <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"#\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\" id=\"navDropdown-4\" aria-expanded=\"false\" role=\"button\" data-bs-toggle=\"dropdown\">Utility <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2\" aria-labelledby=\"navDropdown-4\">\r\n                  <li>\r\n                    <a href=\"/tabs/background\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Background</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- <li>\r\n                    <a [routerLink]=\"['/tabs/advertise']\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors\">\r\n                      <span class=\"font-display text-jacarta-700 text-sm dark:text-white\">Add Advertise</span>\r\n                    </a>\r\n                  </li> -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"js-nav-dropdown group relative\">\r\n                <a href=\"https://chatting.page/zhgxl6yxqqwat7pzj48lgzh7afhddd0m\" target=\"_blank\" class=\"dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5\">Support <i class=\"lg:hidden\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-4 w-4 dark:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <!-- Mobile Connect Wallet / Socials -->\r\n          <!-- Actions -->\r\n          <div class=\"ml-8 hidden lg:flex xl:ml-12\">\r\n            <!-- hatching -->\r\n            <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n              <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n            </button> -->\r\n\r\n            <!-- progress -->\r\n            <button *ngIf=\"progressCount > 0\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"progress\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\r\n                <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\r\n              </svg>\r\n              <span style=\"padding-left: 1px;\">{{progressCount}}</span>\r\n            </button>\r\n\r\n            <!-- cart -->\r\n            <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh;\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <g>\r\n                  <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                  <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                  <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                </g>\r\n              </svg>\r\n              <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n            </button>\r\n            \r\n            <!-- Profile -->\r\n            <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n                <ion-icon name=\"log-in-outline\"></ion-icon>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n              <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n                <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                  <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                  </svg>\r\n                </button>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                  </div>\r\n                  <div class=\"flex items-center mb-3\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f0b90b\">\r\n                        <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                      </g>\r\n                    </svg>\r\n                    <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                  <div>\r\n                    <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                    <div class=\"flex items-center mt-2\">\r\n                      <!-- Default Progressbar with 50 percent -->\r\n                      <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                    <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n                </a>\r\n                <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                  </svg>\r\n                  <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Mobile Menu Actions -->\r\n        <div class=\"ml-auto flex lg:hidden\">\r\n          <!-- hatching -->\r\n          <!-- <button *ngIf=\"hatching == true\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#hatchModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n            <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n          </button> -->\r\n\r\n          <!-- progress -->\r\n          <button *ngIf=\"progressCount > 0\" (click)=\"getstoreprogress()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#progressModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0H24V24H0z\"></path>\r\n              <path d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z\"></path>\r\n            </svg>\r\n            <span style=\"padding-left: 1px;\">{{progressCount}}</span>\r\n          </button>\r\n\r\n          <!-- cart -->\r\n          <button *ngIf=\"cartCount > 0\" (click)=\"getstorecart()\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartModal\" class=\"js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" aria-label=\"cart\" style=\"background-color: rgb(131 88 255 / var(--tw-bg-opacity));margin-left: 1vh\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n              <g>\r\n                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n              </g>\r\n            </svg>\r\n            <span style=\"padding-left: 1px;\">{{cartCount}}</span>\r\n          </button>\r\n          \r\n          <!-- Profile -->            \r\n          <div *ngIf=\"isLogin == '!'\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" (click)=\"login()\">\r\n              <ion-icon name=\"log-in-outline\"></ion-icon>\r\n            </button>\r\n          </div>\r\n          <div *ngIf=\"isLogin == ''\" class=\"js-nav-dropdown group-dropdown relative\">\r\n            <button class=\"dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]\" id=\"profileDropdown\" aria-expanded=\"false\" data-bs-toggle=\"dropdown\" aria-label=\"profile\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\" />\r\n              </svg>\r\n            </button>\r\n            <div class=\"dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl\" aria-labelledby=\"profileDropdown\">\r\n              <button class=\"js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white\" data-tippy-content=\"Copy\">\r\n                <span class=\"max-w-[10rem] overflow-hidden text-ellipsis\">{{wallets}}</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z\" />\r\n                </svg>\r\n              </button>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Balance</span>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <img src=\"assets/img/1627920359498.png\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceORGNPlayers}} ORGN</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBNBPlayers}} BNB</span>\r\n                </div>\r\n                <div class=\"flex items-center mb-3\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 420 420\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f0b90b\">\r\n                      <path d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/>\r\n                    </g>\r\n                  </svg>\r\n                  <span class=\"text-green text-sm font-bold\">{{balanceBUSDPlayers}} BUSD</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4\">\r\n                <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Royalty</span>\r\n                <div>\r\n                  <span class=\"dark:text-jacarta-200 text-sm font-medium tracking-tight\">Your progress {{percentRoyalty}}%</span>\r\n                  <div class=\"flex items-center mt-2\">\r\n                    <!-- Default Progressbar with 50 percent -->\r\n                    <ion-progress-bar value=\"{{valueRoyalty}}\"></ion-progress-bar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a href=\"/tabs/profile\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                  <path d=\"M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z\"></path>\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">My Profile</span>\r\n              </a>\r\n              <a (click)=\"logout()\" class=\"dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white\">\r\n                  <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                  <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z\" />\r\n                </svg>\r\n                <span class=\"font-display text-jacarta-700 mt-1 text-sm dark:text-white\">Sign out</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <!-- Collection -->\r\n    <section class=\"relative py-24\" style=\"padding-top: 20vh;\">\r\n      <picture class=\"pointer-events-none absolute inset-0 -z-10 dark:hidden\">\r\n        <img src=\"assets/img/gradient_light.jpg\" alt=\"gradient\" class=\"h-full w-full\" />\r\n      </picture>\r\n      <div class=\"container\">\r\n        <!-- Tabs Nav -->\r\n        <ul class=\"nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center\" role=\"tablist\">\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"p2pTab(1)\" class=\"nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-sale-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-sale\" type=\"button\" role=\"tab\" aria-controls=\"on-sale\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Marketplace</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"p2pTab(2)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"bid-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#bid\" type=\"button\" role=\"tab\" aria-controls=\"bid\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">BID</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"nav-item\" role=\"presentation\">\r\n            <button (click)=\"p2pTab(3)\" class=\"nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white\" id=\"on-fashion-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#on-fashion\" type=\"button\" role=\"tab\" aria-controls=\"on-fashion\" aria-selected=\"true\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"mr-1 h-5 w-5 fill-current\">\r\n                <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z\" />\r\n              </svg>\r\n              <span class=\"font-display text-base font-medium\">Fashion</span>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <!-- Marketplace Tab -->\r\n          <div class=\"tab-pane fade show active\" id=\"on-sale\" role=\"tabpanel\" aria-labelledby=\"on-sale-tab\">\r\n            <!-- Filters -->\r\n            <div class=\"mb-8 flex flex-wrap items-center justify-between\">\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- Category -->\r\n                <div class=\"my-1 mr-2.5\">\r\n                  <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                    </svg>\r\n                    <span>Category</span>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                    <ul class=\"flex flex-col flex-wrap\">\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategory(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragons </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pdragonLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategory(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategory(3)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategory(4)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Foods </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Sort Category Dragon -->\r\n              <div *ngIf=\"currentp2p == 0\" class=\"dropdown my-1 cursor-pointer\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white\" role=\"button\" id=\"onSaleSort\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <span *ngIf=\"sortp2pmarket == 1\" class=\"font-display\">Price: High to Low</span>\r\n                  <span *ngIf=\"sortp2pmarket == 2\" class=\"font-display\">Price: Low to High</span>\r\n                  <span *ngIf=\"sortp2pmarket == 3\" class=\"font-display\">A - Z</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleSort\">\r\n                  <span class=\"font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold\">Sort By</span>\r\n                  <button (click)=\"clicksortp2pmarket(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: High to Low\r\n                    <div *ngIf=\"sortp2pmarket == 1\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: Low to High\r\n                    <div *ngIf=\"sortp2pmarket == 2\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(3)\" class=\"dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    A - Z\r\n                    <div *ngIf=\"sortp2pmarket == 3\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"currentp2p == 1\" class=\"dropdown my-1 cursor-pointer\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white\" role=\"button\" id=\"onSaleSort\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <span *ngIf=\"sortp2pmarket == 1\" class=\"font-display\">Price: High to Low</span>\r\n                  <span *ngIf=\"sortp2pmarket == 2\" class=\"font-display\">Price: Low to High</span>\r\n                  <span *ngIf=\"sortp2pmarket == 3\" class=\"font-display\">A - Z</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleSort\">\r\n                  <span class=\"font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold\">Sort By</span>\r\n                  <button (click)=\"clicksortp2pmarket(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: High to Low\r\n                    <div *ngIf=\"sortp2pmarket == 1\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: Low to High\r\n                    <div *ngIf=\"sortp2pmarket == 2\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(3)\" class=\"dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    A - Z\r\n                    <div *ngIf=\"sortp2pmarket == 3\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <!-- Sort Category Egg -->\r\n              <div *ngIf=\"currentp2p == 2\" class=\"dropdown my-1 cursor-pointer\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white\" role=\"button\" id=\"onSaleSort\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <span *ngIf=\"sortp2pmarket == 4\" class=\"font-display\">Price: High to Low</span>\r\n                  <span *ngIf=\"sortp2pmarket == 5\" class=\"font-display\">Price: Low to High</span>\r\n                  <span *ngIf=\"sortp2pmarket == 6\" class=\"font-display\">A - Z</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleSort\">\r\n                  <span class=\"font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold\">Sort By</span>\r\n                  <button (click)=\"clicksortp2pmarket(4)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: High to Low\r\n                    <div *ngIf=\"sortp2pmarket == 4\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(5)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: Low to High\r\n                    <div *ngIf=\"sortp2pmarket == 5\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button (click)=\"clicksortp2pmarket(6)\" class=\"dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    A - Z\r\n                    <div *ngIf=\"sortp2pmarket == 6\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end filters -->\r\n            <!-- Grid -->\r\n            <div *ngIf=\"lastseen == 'dragon'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of sortdragons\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <!--  -->\r\n                      <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                        <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM9'\">\r\n                        <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM10'\">\r\n                        <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM11'\">\r\n                        <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM12'\">\r\n                        <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM13'\">\r\n                        <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                      </div>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId.substr(0,8)}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId.substr(0,8)}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId.substr(0,8)}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId.substr(0,8)}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId.substr(0,8)}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId.substr(0,8)}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                          <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <span data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                            <g fill=\"#f3ba2f\">\r\n                              <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.price}} BNB</span>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <button (click)=\"getdgbuydetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowDragonModal\"> Buy </button>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"lastseen == 'egg'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of sorteggs\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <img *ngIf=\"datas.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      \r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{datas.DocId}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.uid.substr(0,15)}}...</span></p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"geteggbuydetail(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowEggModal\">Buy</a> -->\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n              <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n                <ion-infinite-scroll-content\r\n                  loadingSpinner=\"crescent\"\r\n                  loadingText=\"Loading more data...\">\r\n                </ion-infinite-scroll-content>\r\n              </ion-infinite-scroll> -->\r\n            </div>\r\n            <div *ngIf=\"lastseen == 'battery'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of batteriesHigh\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      <!--  -->\r\n                      <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERAH #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">HIJAU #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">BIRU #{{datas.DocId}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner {{datas.owners}}...</span></p>\r\n                          <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"getbatterybuydetail(datas.DocId)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowBatteryModal\">Buy</a> -->\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n              <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n                <ion-infinite-scroll-content\r\n                  loadingSpinner=\"crescent\"\r\n                  loadingText=\"Loading more data...\">\r\n                </ion-infinite-scroll-content>\r\n              </ion-infinite-scroll> -->\r\n            </div>\r\n            <div *ngIf=\"lastseen == 'food'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of foodsHigh\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <img src=\"assets/img/food.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{datas.qty}} Foods</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"itemActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"itemActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Food Data<span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at </span><br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Owner ...</span></p>\r\n                          <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{datas.price}} BNB</h4>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"getfoodbuydetail(datas.iditemsFood)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#buyNowFoodModal\">Buy</a> -->\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end marketplace tab -->\r\n\r\n          <!-- BID Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"bid\" role=\"tabpanel\" aria-labelledby=\"bid-tab\">\r\n            <!-- Filters -->\r\n            <div class=\"mb-8 flex flex-wrap items-center justify-between\">\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- Category -->\r\n                <div class=\"my-1 mr-2.5\">\r\n                  <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                    </svg>\r\n                    <span>Category</span>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                    <ul class=\"flex flex-col flex-wrap\">\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategorybid(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragons </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pdragonLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategorybid(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Eggs </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggBIDLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategorybid(3)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryBIDLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategorybid(4)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Foods </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodBIDLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end filters -->\r\n            <!-- Grid -->\r\n            <div *ngIf=\"lastseen == 'dragon'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of dragonsBID\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <!--  -->\r\n                      <div *ngIf=\"datas.ItemId == 'ITM1'\">\r\n                        <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngIf=\"datas.statusbayarbackground == 'paid'\" class=\"box-bg\">\r\n                          <img src=\"https://oragon.network/website/asset/img/backgrounds/{{datas.imgBg}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists' && datas.statusbayarbackground == 'paid'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                          <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                              <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                            </svg>\r\n                          </span>\r\n                          <span *ngIf=\"datas.favorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                          <ng-template #favorited>\r\n                            <span class=\"dark:text-jacarta-200 text-sm\">{{datas.favorited | number}}</span>\r\n                          </ng-template>\r\n                        </div>\r\n                        <div style=\"z-index: 2;\" *ngIf=\"datas.imgbackground == 'exists'\" (click)=\"favorite_item(datas.DocId)\" class=\"light:bg-jacarta-700 absolute top-3 left-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2 bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\">\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">LVL {{datas.Level}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{datas.DocId}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Dragon Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                          <hr class=\"dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0\" style=\"margin-bottom: 1rem;\" />\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Attack</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Attack}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Defense</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Defense}}</span>\r\n                            </div>\r\n                          </div>\r\n                          <div style=\"padding-left: 1rem;padding-right: 1rem;\">\r\n                            <div class=\"mb-2 flex items-center justify-between\">\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Level</span>\r\n                              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{datas.Level}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <span data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                            <g fill=\"#f3ba2f\">\r\n                              <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.PriceNow}} BNB</span>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <button *ngIf=\"isLogin == ''\" (click)=\"getdgBIDdetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#getbidNowDragonModal\"> Place BID </button>\r\n                      <a *ngIf=\"isLogin == '!'\" (click)=\"login()\" class=\"text-accent font-display text-sm font-semibold\">Login to Place BID</a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"lastseen == 'egg'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of eggsBID\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <!--  -->\r\n                      <div *ngIf=\"datas.ItemId == 'ITM6'\">\r\n                        <img src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM8'\">\r\n                        <img src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM2'\">\r\n                        <img src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM5'\">\r\n                        <img src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM7'\">\r\n                        <img src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                      <div *ngIf=\"datas.ItemId == 'ITM4'\">\r\n                        <img src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      </div>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{datas.DocId}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Egg Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <span data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                            <g fill=\"#f3ba2f\">\r\n                              <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.PriceNow}} BNB - </span>\r\n                        <span class=\"text-green\"> {{datas.Type}}</span>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <button *ngIf=\"isLogin == ''\" (click)=\"geteggBIDdetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#getbidNowEggModal\"> Place BID </button>\r\n                      <a *ngIf=\"isLogin == '!'\" (click)=\"login()\" class=\"text-accent font-display text-sm font-semibold\">Login to Place BID</a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"lastseen == 'battery'\" class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let datas of batterysBID\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <img *ngIf=\"datas.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n                    <!--  -->\r\n                    <img *ngIf=\"datas.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n                    <!--  -->\r\n                    <img *ngIf=\"datas.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400\" loading=\"lazy\" style=\"width: 80%;margin-right: -100vh;\" />\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <span *ngIf=\"datas.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERAH #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">HIJAU #{{datas.DocId}}</span>\r\n                      <span *ngIf=\"datas.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">BIRU #{{datas.DocId}}</span>\r\n                      <div class=\"dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full\">\r\n                        <a href=\"#\" class=\"dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm\" role=\"button\" id=\"dgActions\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                          <ion-icon size=\"large\" name=\"ellipsis-vertical\" class=\"group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500\" style=\"margin-bottom: -10px;\"></ion-icon>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"dgActions\">\r\n                          <p class=\"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Battery Data<br><span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\" style=\"font-size: 10px;\">Update at {{datas.EditAt}}</span> </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                        <span data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                            <g fill=\"#f3ba2f\">\r\n                              <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{datas.PriceNow}} BNB</span>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <button *ngIf=\"isLogin == ''\" (click)=\"getbatteryBIDdetail(datas.DocId)\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-1 px-3 text-center font-semibold text-white transition-all\" data-bs-toggle=\"modal\" data-bs-target=\"#getbidNowBatteryModal\"> Place BID </button>\r\n                      <a *ngIf=\"isLogin == '!'\" (click)=\"login()\" class=\"text-accent font-display text-sm font-semibold\">Login to Place BID</a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end bid tab -->\r\n\r\n          <!-- Fashion Tab -->\r\n          <div class=\"tab-pane fade show\" id=\"on-fashion\" role=\"tabpanel\" aria-labelledby=\"on-fashion-tab\">\r\n            <!-- Filters -->\r\n            <div class=\"mb-8 flex flex-wrap items-center justify-between\">\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- Category -->\r\n                <div class=\"my-1 mr-2.5\">\r\n                  <button class=\"group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white\" id=\"onSaleCategoriesFilter\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white\">\r\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                      <path d=\"M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z\" />\r\n                    </svg>\r\n                    <span>Category</span>\r\n                  </button>\r\n                  <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleCategoriesFilter\">\r\n                    <ul class=\"flex flex-col flex-wrap\">\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(1)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Hoodie </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{fashionjaketsLength + fashioncommonjaketsLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(2)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Shirts </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2peggLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(3)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Pants </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pbatteryLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div style=\"padding-right: 1rem;\">\r\n                          <div class=\"mb-2 flex items-center justify-between\">\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\"><a (click)=\"clickcategoryfashion(4)\" class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\"> Shorts </a></span>\r\n                            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">{{marketp2pfoodLength}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Sort Category Jakets -->\r\n              <div *ngIf=\"currentfashion == 0\" class=\"dropdown my-1 cursor-pointer\">\r\n                <div class=\"dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white\" role=\"button\" id=\"onSaleSort\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <span *ngIf=\"sortfashion == 1\" class=\"font-display\">Price: High to Low</span>\r\n                  <span *ngIf=\"sortfashion == 2\" class=\"font-display\">Price: Low to High</span>\r\n                  <span *ngIf=\"sortfashion == 3\" class=\"font-display\">A - Z</span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-500 h-4 w-4 dark:fill-white\">\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path d=\"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z\" />\r\n                  </svg>\r\n                </div>\r\n                <div class=\"dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl\" aria-labelledby=\"onSaleSort\">\r\n                  <span class=\"font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold\">Sort By</span>\r\n                  <button class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: High to Low\r\n                    <div *ngIf=\"sortfashion == 1\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button class=\"dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    Price: Low to High\r\n                    <div *ngIf=\"sortfashion == 2\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                  <button class=\"dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white\">\r\n                    A - Z\r\n                    <div *ngIf=\"sortfashion == 3\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-accent mb-[3px] h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                        <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end filters -->\r\n            <!-- Grid -->\r\n            <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pb-2\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let s of jakets\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\">\r\n                        <img src=\"assets/img/store/{{s.gambar}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      </a>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\">\r\n                        <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.nama}}</span>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.deskripsi}}</span>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Rp {{s.harga | number}}.00</h4>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"text-green mr-1\">QTY 30</h4>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\"> Buy</a> -->\r\n                      <a (click)=\"setstorecart(s.id_product, globalID, wallets)\" class=\"group flex items-center\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                          <g>\r\n                            <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                            <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                            <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                          </g>\r\n                        </svg>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-2\" style=\"gap: 1.2rem\">\r\n              <div *ngFor=\"let s of commonjakets\">\r\n                <article>\r\n                  <div class=\"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg\">\r\n                    <figure class=\"relative\" style=\"margin: 0em 0px;\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\">\r\n                        <img src=\"assets/img/store/{{s.gambar}}\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                      </a>\r\n                    </figure>\r\n                    <div class=\"mt-7 flex items-center justify-between\">\r\n                      <a data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\">\r\n                        <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">{{s.nama}}</span>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">{{s.deskripsi}}</span>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Rp {{s.harga | number}}.00</h4>\r\n                    </div>\r\n                    <div class=\"mt-2 text-sm\">\r\n                      <h4 class=\"text-green mr-1\">QTY 30</h4>\r\n                    </div>\r\n                    <div class=\"mt-8 flex items-center justify-between\">\r\n                      <!-- <a (click)=\"getstoredetail(s.id_product)\" class=\"text-accent font-display text-sm font-semibold\" data-bs-toggle=\"modal\" data-bs-target=\"#cartfashionModalLabel\"> Buy</a> -->\r\n                      <a (click)=\"setstorecart(s.id_product, globalID, wallets)\" class=\"group flex items-center\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white\">\r\n                          <g>\r\n                            <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                            <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                            <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                          </g>\r\n                        </svg>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n            <!-- end grid -->\r\n          </div>\r\n          <!-- end fashion tab -->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- end collection -->\r\n  </main>\r\n\r\n  <!-- Buy Now Dragon Modal -->\r\n  <div class=\"modal fade\" id=\"buyNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"buyNowDragonModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"buyNowDragonModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"relative py-4\">\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM1'\">\r\n                <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM9'\">\r\n                <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM10'\">\r\n                <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM11'\">\r\n                <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM12'\">\r\n                <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"marketp2pdragonID == 'ITM13'\">\r\n                <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                <span>\r\n                  <img *ngIf=\"marketp2pdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                  <div style=\"z-index: 2;\" *ngIf=\"marketp2pdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                    <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                        <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                        <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                      </svg>\r\n                    </span>\r\n                    <span *ngIf=\"marketp2pdragonfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                    <ng-template #favorited>\r\n                      <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonfavorited | number}}</span>\r\n                    </ng-template>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n            </figure>\r\n            <div class=\"w-full ml-12\">\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\r\n              <h3 *ngIf=\"marketp2pdragonID == 'null'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">NULL</h3>\r\n              <span *ngIf=\"marketp2pdragonBG == 'exists'\">\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Price : {{priceRoyalty_display}} BNB</span>\r\n                </div>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Dev Fee : {{fee_display}} BNB</span>\r\n                </div>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 py-1 block text-sm\">Royalty : {{marketp2pdragonRoyalty}} BNB</span>\r\n                </div>\r\n                \r\n              </span>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right text-sm\">${{marketp2pdragonpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{marketp2pdragonprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pdragonpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Sell -->\r\n          <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4 w-full\">\r\n            <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n              <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Selling ends in</span>\r\n              <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{daysSell}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Days</span>\r\n                </span>\r\n                <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hoursSell}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\r\n                </span>\r\n                <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutesSell}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Min</span>\r\n                </span>\r\n                <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                  <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{secondsSell}}</span>\r\n                  <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end sell -->\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee & Royalty {{fee_royalty}} BNB </button>\r\n            <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{priceRoyalty_display}} BNB </button>\r\n          </div>\r\n          <!-- Rankings -->\r\n          <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\r\n            <!-- Table -->\r\n            <div class=\"scrollbar-custom overflow-hidden\">\r\n              <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Owner History</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Price</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis\">Date</span>\r\n                  </div>\r\n                </div>\r\n                <a *ngFor=\"let r of dragonDetail;let i = index\" href=\"#\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                    <span class=\"mr-2 lg:mr-4\">{{i}}</span>\r\n                    <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                      <img *ngIf=\"r.ItemId == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                        <span *ngFor=\"let p of profile\">\r\n                          <img *ngIf=\"p.ItemId == r.itemid.substr(0,41)\" [src]=\"p.url\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                        </span>\r\n                      <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                          <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                        </svg>\r\n                      </div>\r\n                    </figure>\r\n                    <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                      {{username}}\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                    <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\r\n                  </div>\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                    <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                        <g fill=\"#f3ba2f\">\r\n                          <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                        </g>\r\n                      </svg>\r\n                    </span>\r\n                    <span class=\"text-sm font-medium tracking-tight\">{{r.amount}}</span>\r\n                  </div>\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                    <span class=\"text-green\">{{wallets.substr(0,20)}}....</span>\r\n                  </div>\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                    <span class=\"text-white\">{{r.date | date}}</span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end rankings -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- BID Now Dragon Modal -->\r\n  <div class=\"modal fade\" id=\"getbidNowDragonModal\" tabindex=\"-1\" aria-labelledby=\"getbidNowDragonModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"getbidNowDragonModalLabel\">Complete checkout BID</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <!-- Item -->\r\n          <div *ngFor=\"let dg of dragonDetail\" class=\"md:flex md:flex-wrap\">\r\n            <!-- Image -->\r\n            <figure class=\"mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-3/5\">\r\n              <div *ngIf=\"dg.ItemId == 'ITM1'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM9'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM10'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM11'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM12'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM13'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n            </figure>\r\n            <!-- Details -->\r\n            <div class=\"md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]\">\r\n              <!-- Collection / Likes / Actions -->\r\n              <div class=\"mb-3 flex\">\r\n                <!-- Collection -->\r\n                <div class=\"flex items-center\">\r\n                  <a href=\"#\" class=\"text-accent mr-2 text-sm font-bold\">{{dg.uid}}</a>\r\n                </div>\r\n              </div>\r\n              <span *ngIf=\"dg.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA #{{dg.DocId}}</span>\r\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\r\n                <div class=\"flex items-center\">\r\n                  <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green text-sm font-medium tracking-tight\">{{dg.PriceNow.substr(0,4)}} BNB</span>\r\n                </div>\r\n                <span class=\"dark:text-jacarta-300 text-jacarta-400 text-sm\">Highest bid</span>\r\n              </div>\r\n              <!-- Tabs -->\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4 w-full\">\r\n                <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n                  <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Auction ends in</span>\r\n                  <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                    <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hours}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\r\n                    </span>\r\n                    <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutes}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Min</span>\r\n                    </span>\r\n                    <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{seconds}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end tabs -->\r\n              <div class=\"flex items-center justify-center space-x-4 pt-5\" *ngIf=\"marketp2pdragontimeCount == 1\">\r\n                <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n                <button *ngIf=\"loadingtext == true;else loadingdismiss\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Please Wait.... </button>\r\n                <ng-template #loadingdismiss>\r\n                  <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button>\r\n                </ng-template>\r\n                <!-- <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true && balanceBNBPlayers >= dg.PriceNow;else insufficientbnb\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button> -->\r\n                <!-- <ng-template #insufficientbnb>\r\n                  <a class=\"text-accent font-display text-sm font-semibold\">Your BNB Balance not enough !</a>\r\n                </ng-template> -->\r\n                <div *ngIf=\"state_buy == 3 && stateHash == true && state_BID == 'Free' || state_buy == 4\" class=\"justify-center\">\r\n                  <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" min=\"{{dg.PriceNow}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Minimum price > {{dg.PriceNow}}\" style=\"margin-bottom:2vh;\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n                <button *ngIf=\"state_BID == 'Free' && stateHash == true && input_price_actual > dg.PriceNow && state_buy == 4\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Free BID {{price_display}} </button>\r\n                <button *ngIf=\"state_buy == 3 && state_BID == 'Step'\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Step BID {{price_display_StepBID}} </button>\r\n              </div>\r\n            </div>\r\n            <!-- end details -->\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <!-- Rankings -->\r\n          <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\r\n            <!-- Table -->\r\n            <div class=\"scrollbar-custom overflow-hidden\">\r\n              <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Auction History</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Price</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Date</span>\r\n                  </div>\r\n                </div>\r\n                <a *ngFor=\"let dbh of dragonBidHistory;let i = index\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                    <span class=\"mr-2 lg:mr-4\">{{i}}</span>\r\n                    <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM1'\" src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                          <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                        </svg>\r\n                      </div>\r\n                    </figure>\r\n                    <ng-template #activebiduser>\r\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                        {{dbh.uidBid.substr(0, 8)}}....\r\n                      </span>\r\n                    </ng-template>\r\n                    <span *ngIf=\"dbh.statusBid == '2';else activebiduser\" class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                      {{dbh.uidBid.substr(0, 8)}}....\r\n                    </span>\r\n                  </div>\r\n                  <ng-template #activebidprice>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                          <g fill=\"#f3ba2f\">\r\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </span>\r\n                      <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid.substr(0,4)}}</span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebidprice\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                        <g fill=\"#f3ba2f\">\r\n                          <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                        </g>\r\n                      </svg>\r\n                    </span>\r\n                    <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid}}</span>\r\n                  </div>\r\n                  <ng-template #activebiddate>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-white\">\r\n                        {{dbh.CreatedBid | date}}\r\n                        <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                          <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                              <g>\r\n                                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                              </g>\r\n                            </svg>\r\n                          </span>\r\n                          <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                          </span>\r\n                        </div>\r\n                      </span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebiddate\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"text-white\">\r\n                      {{dbh.CreatedBid | date}}\r\n                      <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                            <g>\r\n                              <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                              <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                              <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                        </span>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end rankings -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Buy Now Egg Modal -->\r\n  <div class=\"modal fade\" id=\"buyNowEggModal\" tabindex=\"-1\" aria-labelledby=\"buyNowEggModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"buyNowEggModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2peggID == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2peggID == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <div class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                    <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                    <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"dark:text-jacarta-200 text-sm\">188</span>\r\n              </div>\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM6'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM8'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM2'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM5'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM7'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH EGG</h3>\r\n              <h3 *ngIf=\"marketp2peggID == 'ITM4'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH EGG</h3>\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <!-- <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">Creator Earnings: 5%</span> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{marketp2peggprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2peggpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\r\n          </div>\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee {{fee_display}} BNB </button>\r\n            <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{price_display}} BNB </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- BID Now Egg Modal -->\r\n  <div class=\"modal fade\" id=\"getbidNowEggModal\" tabindex=\"-1\" aria-labelledby=\"getbidNowEggModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"getbidNowEggModalLabel\">Complete checkout BID</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <!-- Item -->\r\n          <div *ngFor=\"let dg of eggDetail\" class=\"md:flex md:flex-wrap\">\r\n            <!-- Image -->\r\n            <figure class=\"mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-3/5\">\r\n              <div *ngIf=\"dg.ItemId == 'ITM6'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM8'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM2'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM5'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM7'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM4'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n            </figure>\r\n            <!-- Details -->\r\n            <div class=\"md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]\">\r\n              <!-- Collection / Likes / Actions -->\r\n              <div class=\"mb-3 flex\">\r\n                <!-- Collection -->\r\n                <div class=\"flex items-center\">\r\n                  <a href=\"#\" class=\"text-accent mr-2 text-sm font-bold\">{{dg.uid}}</a>\r\n                </div>\r\n              </div>\r\n              <span *ngIf=\"dg.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">RITRA EGG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">METALICANA EGG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERU EGG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">FENG EGG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">DORCH EGG #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">AKH EGG #{{dg.DocId}}</span>\r\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\r\n                <div class=\"flex items-center\">\r\n                  <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green text-sm font-medium tracking-tight\">{{dg.PriceNow.substr(0,4)}} BNB</span>\r\n                </div>\r\n                <span class=\"dark:text-jacarta-300 text-jacarta-400 text-sm\">Highest bid</span>\r\n              </div>\r\n              <!-- Tabs -->\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4 w-full\">\r\n                <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n                  <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Auction is open for the next {{marketp2pBIDeggbidTime}} hour</span>\r\n                  <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                    <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hoursEgg}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\r\n                    </span>\r\n                    <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutesEgg}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Min</span>\r\n                    </span>\r\n                    <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{secondsEgg}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end tabs -->\r\n              <div class=\"flex items-center justify-center space-x-4 pt-5\" *ngIf=\"marketp2peggtimeCount == 1\">\r\n                <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n                <button *ngIf=\"loadingtext == true;else loadingdismiss\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Please Wait.... </button>\r\n                <ng-template #loadingdismiss>\r\n                  <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button>\r\n                </ng-template>\r\n                <!-- <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true && balanceBNBPlayers >= dg.PriceNow;else insufficientbnb\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button> -->\r\n                <!-- <ng-template #insufficientbnb>\r\n                  <a class=\"text-accent font-display text-sm font-semibold\">Your BNB Balance not enough !</a>\r\n                </ng-template> -->\r\n                <div *ngIf=\"state_buy == 3 && stateHash == true && state_BID == 'Free' || state_buy == 4\" class=\"justify-center\">\r\n                  <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" min=\"{{dg.PriceNow}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Minimum price > {{dg.PriceNow}}\" style=\"margin-bottom:2vh;\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"flex items-center justify-center space-x-4\">\r\n                <button *ngIf=\"state_BID == 'Free' && input_price_actual > dg.PriceNow && state_buy == 4 && stateHash == true\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Free BID {{price_display}} </button>\r\n                <button *ngIf=\"state_BID == 'Step' && state_buy == 3 && stateHash == true\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Step BID {{price_display_StepBID}} </button>\r\n              </div>\r\n            </div>\r\n            <!-- end details -->\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <!-- Rankings -->\r\n          <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\r\n            <!-- Table -->\r\n            <div class=\"scrollbar-custom overflow-hidden\">\r\n              <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Auction History</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Price</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Date</span>\r\n                  </div>\r\n                </div>\r\n                <a *ngFor=\"let dbh of eggBidHistory;let i = index\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                    <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM6'\" src=\"assets/img/dragons/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM2'\" src=\"assets/img/dragons/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM8'\" src=\"assets/img/dragons/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM5'\" src=\"assets/img/dragons/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM7'\" src=\"assets/img/dragons/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDdragonID == 'ITM4'\" src=\"assets/img/dragons/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                          <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                        </svg>\r\n                      </div>\r\n                    </figure>\r\n                    <ng-template #activebiduser>\r\n                      <span *ngIf=\"dbh.statusBid == '0' || dbh.statusBid == '1'\" class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                        {{dbh.uidBid.substr(0, 8)}}....\r\n                      </span>\r\n                    </ng-template>\r\n                    <span *ngIf=\"dbh.statusBid == '2';else activebiduser\" class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                      {{dbh.uidBid.substr(0, 8)}}....\r\n                    </span>\r\n                  </div>\r\n                  <ng-template #activebidprice>\r\n                    <div *ngIf=\"dbh.statusBid == '0' || dbh.statusBid == '1'\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                          <g fill=\"#f3ba2f\">\r\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </span>\r\n                      <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid.substr(0,4)}}</span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebidprice\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                        <g fill=\"#f3ba2f\">\r\n                          <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                        </g>\r\n                      </svg>\r\n                    </span>\r\n                    <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid}}</span>\r\n                  </div>\r\n                  <ng-template #activebiddate>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-white\">\r\n                        {{dbh.CreatedBid | date}}\r\n                        <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                          <!-- <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                              <g>\r\n                                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                              </g>\r\n                            </svg>\r\n                          </span> -->\r\n                          <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                          </span>\r\n                        </div>\r\n                      </span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebiddate\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"text-white\">\r\n                      {{dbh.CreatedBid | date}}\r\n                      <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                            <g>\r\n                              <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                              <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                              <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                        </span>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end rankings -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Buy Now Battery Modal -->\r\n  <div class=\"modal fade\" id=\"buyNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"buyNowBatteryModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"buyNowBatteryModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n              <!--  -->\r\n              <img *ngIf=\"marketp2pbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n            </figure>\r\n            <div>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\r\n              <h3 *ngIf=\"marketp2pbatteryID == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{marketp2pbatteryprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right text-sm\">${{marketp2pbatterypriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{marketp2pbatteryprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pbatterypriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee {{fee_display}} BNB </button>\r\n            <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{price_display}} BNB </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- BID Now Battery Modal -->\r\n  <div class=\"modal fade\" id=\"getbidNowBatteryModal\" tabindex=\"-1\" aria-labelledby=\"getbidNowBatteryModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"getbidNowBatteryModalLabel\">Complete checkout BID</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <!-- Item -->\r\n          <div *ngFor=\"let dg of batterysBID\" class=\"md:flex md:flex-wrap\">\r\n            <!-- Image -->\r\n            <figure class=\"mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-3/5\">\r\n              <div *ngIf=\"dg.ItemId == 'ITM3'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM15'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n              <div *ngIf=\"dg.ItemId == 'ITM32'\" style=\"text-align: -webkit-center;\">\r\n                <img src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px; width: 40%;\" />\r\n              </div>\r\n            </figure>\r\n            <!-- Details -->\r\n            <div class=\"md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]\">\r\n              <!-- Collection / Likes / Actions -->\r\n              <div class=\"mb-3 flex\">\r\n                <!-- Collection -->\r\n                <div class=\"flex items-center\">\r\n                  <a href=\"#\" class=\"text-accent mr-2 text-sm font-bold\">{{dg.uid}}</a>\r\n                </div>\r\n              </div>\r\n              <span *ngIf=\"dg.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">MERAH #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">HIJAU #{{dg.DocId}}</span>\r\n              <span *ngIf=\"dg.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">BIRU #{{dg.DocId}}</span>\r\n              <div class=\"mb-8 flex items-center space-x-4 whitespace-nowrap\">\r\n                <div class=\"flex items-center\">\r\n                  <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                      <g fill=\"#f3ba2f\">\r\n                        <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span class=\"text-green text-sm font-medium tracking-tight\">{{dg.PriceNow.substr(0,4)}} BNB</span>\r\n                </div>\r\n                <span class=\"dark:text-jacarta-300 text-jacarta-400 text-sm\">Highest bid</span>\r\n              </div>\r\n              <!-- Tabs -->\r\n              <div class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg border bg-white p-4 w-full\">\r\n                <div class=\"dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:pl-4 lg:pl-4 text-center\">\r\n                  <span class=\"js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300 text-sm\">Auction ends in</span>\r\n                  <div class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                    <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]\">{{hoursBattery}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Hrs</span>\r\n                    </span>\r\n                    <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]\">{{minutesBattery}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Min</span>\r\n                    </span>\r\n                    <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                      <span class=\"js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]\">{{secondsBattery}}</span>\r\n                      <span class=\"block text-xs font-medium tracking-tight\">Sec</span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end tabs -->\r\n              <div class=\"flex items-center justify-center space-x-4 pt-5\" *ngIf=\"marketp2pbatterytimeCount == 1\">\r\n                <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n                <button *ngIf=\"loadingtext == true;else loadingdismiss\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Please Wait.... </button>\r\n                <ng-template #loadingdismiss>\r\n                  <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button>\r\n                </ng-template>\r\n                <!-- <button (click)=\"pay_firstMarketp2pBID()\" *ngIf=\"state_buy == 2 && stateHash == true && balanceBNBPlayers >= dg.PriceNow;else insufficientbnb\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all justify-center\"> Pay for Fee {{fee_display}} </button> -->\r\n                <!-- <ng-template #insufficientbnb>\r\n                  <a class=\"text-accent font-display text-sm font-semibold\">Your BNB Balance not enough !</a>\r\n                </ng-template> -->\r\n                <div *ngIf=\"state_buy == 3 && stateHash == true && state_BID == 'Free' || state_buy == 4\" class=\"justify-center\">\r\n                  <input type=\"number\" [ngModel]=\"input_price\" (ngModelChange)=\"onPriceChange($event)\" min=\"{{dg.PriceNow}}\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Minimum price > {{dg.PriceNow}}\" style=\"margin-bottom:2vh;\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"flex items-center justify-center space-x-4\">\r\n                <button *ngIf=\"state_BID == 'Free' && stateHash == true && input_price_actual > dg.PriceNow && state_buy == 4\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Free BID {{price_display}} </button>\r\n                <button *ngIf=\"state_buy == 3 && state_BID == 'Step'\" (click)=\"pay_secondMarketp2pBID()\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Place Step BID {{price_display_StepBID}} </button>\r\n              </div>\r\n            </div>\r\n            <!-- end details -->\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <!-- Rankings -->\r\n          <div class=\"grid grid-cols-12 md:grid-cols-1 lg:grid-cols-12 py-4 px-4\">\r\n            <!-- Table -->\r\n            <div class=\"scrollbar-custom overflow-hidden\">\r\n              <div role=\"table\" class=\"dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white\">\r\n                <div class=\"dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex\" role=\"row\">\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Auction History</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Price</span>\r\n                  </div>\r\n                  <div class=\"w-[100%] py-6 px-8\" role=\"columnheader\">\r\n                    <span class=\"text-jacarta-700 dark:text-jacarta-100 w-full text-ellipsis\">Date</span>\r\n                  </div>\r\n                </div>\r\n                <a *ngFor=\"let dbh of batteryBidHistory;let i = index\" class=\"flex transition-shadow hover:shadow-lg\" role=\"row\">\r\n                  <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\"role=\"cell\">\r\n                    <span class=\"mr-2 lg:mr-4\">{{i}}</span>\r\n                    <figure class=\"relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12\">\r\n                      <img *ngIf=\"marketp2pBIDbatteryID == 'ITM3'\" src=\"assets/img/batteries/batre_hijau.png\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDbatteryID == 'ITM31'\" src=\"assets/img/batteries/batre_biru.png\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <img *ngIf=\"marketp2pBIDbatteryID == 'ITM32'\" src=\"assets/img/batteries/batre_merah.png\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                      <div class=\"dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white\" data-tippy-content=\"Verified Collection\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"h-[.875rem] w-[.875rem] fill-white\">\r\n                          <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\r\n                          <path d=\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\"></path>\r\n                        </svg>\r\n                      </div>\r\n                    </figure>\r\n                    <ng-template #activebiduser>\r\n                      <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">\r\n                        {{dbh.uidBid.substr(0, 8)}}....\r\n                      </span>\r\n                    </ng-template>\r\n                    <span *ngIf=\"dbh.statusBid == '2';else activebiduser\" class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                      {{dbh.uidBid.substr(0, 8)}}....\r\n                    </span>\r\n                  </div>\r\n                  <ng-template #activebidprice>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                          <g fill=\"#f3ba2f\">\r\n                            <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </span>\r\n                      <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid.substr(0,4)}}</span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebidprice\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center whitespace-nowrap border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"-ml-1\" data-tippy-content=\"ETH\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                        <g fill=\"#f3ba2f\">\r\n                          <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                        </g>\r\n                      </svg>\r\n                    </span>\r\n                    <span class=\"text-sm font-medium tracking-tight\">{{dbh.priceBid}}</span>\r\n                  </div>\r\n                  <ng-template #activebiddate>\r\n                    <div class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\">\r\n                      <span class=\"text-white\">\r\n                        {{dbh.CreatedBid | date}}\r\n                        <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                          <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                              <g>\r\n                                <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                                <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                                <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                              </g>\r\n                            </svg>\r\n                          </span>\r\n                          <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                          </span>\r\n                          <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                            <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                          </span>\r\n                        </div>\r\n                      </span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <div *ngIf=\"dbh.statusBid == '2';else activebiddate\" class=\"dark:border-jacarta-600 border-jacarta-100 flex w-[100%] items-center border-t py-4 px-4\" role=\"cell\" style=\"text-decoration: line-through;opacity: .5;\">\r\n                    <span class=\"text-white\">\r\n                      {{dbh.CreatedBid | date}}\r\n                      <div *ngIf=\"dbh.statusBid == '1'\" class=\"js-countdown-single-timer mt-3 flex space-x-4 justify-center text-center\" data-countdown=\"2022-09-07T19:40:30\" data-expired=\"This auction has ended\">\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.944 476.944\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white carticon\">\r\n                            <g>\r\n                              <path d=\"M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z\" />\r\n                              <path d=\"M474.946,30V0h-61.624l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h130.756c-0.001,0.19-0.007,0.38-0.007,0.57c0,13.744,2.161,26.992,6.149,39.429H50.641v30H233.52c15.742,24.669,39.607,43.675,67.799,53.214c-4.53,7.377-7.147,16.048-7.147,25.32c0,26.762,21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534c0-9.273-2.617-17.944-7.147-25.32c51.133-17.302,88.042-65.743,88.042-122.644c0-44.48-22.556-83.789-56.828-107.097L438.804,30H474.946z M361.241,428.41c0,10.22-8.314,18.534-18.534,18.534c-10.221,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534C352.927,409.875,361.241,418.19,361.241,428.41zM442.136,280.446c0,54.826-44.604,99.43-99.429,99.43c-54.826,0-99.431-44.604-99.431-99.43s44.604-99.429,99.431-99.429C397.532,181.016,442.136,225.62,442.136,280.446z M342.707,151.016c-60.839,0-112,42.197-125.773,98.859H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271l-11.298,68.924C373.371,153.81,358.36,151.016,342.707,151.016z\" />\r\n                              <polygon points=\"357.707,218.83 327.707,218.83 327.707,265.446 281.091,265.446 281.091,295.446 327.707,295.446 327.707,342.062 357.707,342.062 357.707,295.446 404.323,295.446 404.323,265.446 357.707,265.446\" />\r\n                            </g>\r\n                          </svg>\r\n                        </span>\r\n                        <span class=\"countdown-hours text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-hours-number text-sm\">{{hourscart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-minutes text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-minutes-number text-sm\">{{minutescart}}</span>\r\n                        </span>\r\n                        <span class=\"countdown-seconds text-jacarta-700 dark:text-white\">\r\n                          <span class=\"js-countdown-seconds-number text-sm\">{{secondscart}}</span>\r\n                        </span>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end rankings -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Buy Now Food Modal -->\r\n  <div class=\"modal fade\" id=\"buyNowFoodModal\" tabindex=\"-1\" aria-labelledby=\"buyNowFoodModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"buyNowFoodModalLabel\">Complete checkout</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n            <figure class=\"mr-5 self-start\">\r\n              <img src=\"assets/img/food.png\" alt=\"item 5\" class=\"res-400 w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"width: 50%;\" />\r\n            </figure>\r\n            <div style=\"width: 100%;\">\r\n              <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FOOD</h3>\r\n              <div class=\"flex flex-wrap items-center\">\r\n                <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{marketp2pfoodQty}} Foods</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{marketp2pfoodprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right text-sm\">${{marketp2pfoodpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"-ml-1 mr-1 h-[1.125rem] w-[1.125rem]\">\r\n                    <g fill=\"#f3ba2f\">\r\n                      <path d=\"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z\"/><path d=\"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11\"/>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{marketp2pfoodprice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{marketp2pfoodpriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg == 'null'\">\r\n          </div>\r\n          <div class=\"flex items-center justify-center space-x-4\" *ngIf=\"marketp2pdragonImg != 'null'\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"stateHash == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_secondMarketp2p()\" *ngIf=\"state_buy == 2 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Fee {{fee_display}} BNB </button>\r\n            <button (click)=\"pay_firstMarketp2p()\" *ngIf=\"state_buy == 3 && stateHash == true\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\" data-bs-dismiss=\"modal\" aria-label=\"Close\"> Pay for Items {{price_display}} BNB </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Cart BID Modal -->\r\n  <div *ngIf=\"cartBidcount > 0\" class=\"modal fade\" id=\"cartbidModal\" tabindex=\"-1\" aria-labelledby=\"cartbidModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"cartbidModalLabel\">Cart BID</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div>\r\n            <div *ngFor=\"let bc of bidcart\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <!-- Dragons -->\r\n                <figure *ngIf=\"selectedBid == 'Dragons'\" class=\"relative py-4\">\r\n                  <div *ngIf=\"bc.ItemId == 'ITM1'\">\r\n                    <img src=\"assets/img/dragons/MERU.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                  <div *ngIf=\"bc.ItemId == 'ITM9'\">\r\n                    <img src=\"assets/img/dragons/AKH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                  <div *ngIf=\"bc.ItemId == 'ITM10'\">\r\n                    <img src=\"assets/img/dragons/FENG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                  <div *ngIf=\"bc.ItemId == 'ITM11'\">\r\n                    <img src=\"assets/img/dragons/RITRA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                  <div *ngIf=\"bc.ItemId == 'ITM12'\">\r\n                    <img src=\"assets/img/dragons/DORCH.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                  <div *ngIf=\"bc.ItemId == 'ITM13'\">\r\n                    <img src=\"assets/img/dragons/METALICANA.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" style=\"z-index: 1;position: relative;padding-bottom: 15px;\" />\r\n                    <span>\r\n                      <img *ngIf=\"marketp2pBIDdragonBG == 'exists'\" src=\"https://oragon.network/website/asset/img/backgrounds/{{marketp2pBIDdragonImgBG}}\" class=\"rounded-2.5xl cursor-pointer\" data-bs-toggle=\"modal\" data-bs-target=\"#imageModal\" style=\"position: absolute;z-index: 0;top: 0;margin-bottom: 10px;\" />\r\n                      <div style=\"z-index: 2;\" *ngIf=\"marketp2pBIDdragonBG == 'exists'\" (click)=\"favorite_item(marketp2pBIDdragonID)\" class=\"light:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-accent-dark p-2\">\r\n                        <span class=\"js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-1\" data-tippy-content=\"Favorite\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4\">\r\n                            <path fill=\"none\" d=\"M0 0H24V24H0z\" />\r\n                            <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" />\r\n                          </svg>\r\n                        </span>\r\n                        <span *ngIf=\"marketp2pdragonBIDfavorited > 999;else favorited\" class=\"dark:text-jacarta-200 text-sm\">1K</span>\r\n                        <ng-template #favorited>\r\n                          <span class=\"dark:text-jacarta-200 text-sm\">{{marketp2pdragonBIDfavorited | number}}</span>\r\n                        </ng-template>\r\n                      </div>\r\n                    </span>\r\n                  </div>\r\n                </figure>\r\n              <!-- dragons -->\r\n              <!-- Eggs -->\r\n                <figure *ngIf=\"selectedBid == 'Eggs'\" class=\"mr-5 self-start\">\r\n                  <img *ngIf=\"bc.ItemId == 'ITM6'\" src=\"assets/img/eggs/RITRA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <!--  -->\r\n                  <img *ngIf=\"bc.ItemId == 'ITM8'\" src=\"assets/img/eggs/METALICANA_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <!--  -->\r\n                  <img *ngIf=\"bc.ItemId == 'ITM2'\" src=\"assets/img/eggs/MERU_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <!--  -->\r\n                  <img *ngIf=\"bc.ItemId == 'ITM5'\" src=\"assets/img/eggs/FENG_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <!--  -->\r\n                  <img *ngIf=\"bc.ItemId == 'ITM7'\" src=\"assets/img/eggs/DORCH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <!--  -->\r\n                  <img *ngIf=\"bc.ItemId == 'ITM4'\" src=\"assets/img/eggs/AKH_EGG.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                </figure>\r\n              <!-- eggs -->\r\n              <!-- Batteries -->\r\n                <figure *ngIf=\"selectedBid == 'Batteries'\" class=\"mr-5 self-start\">\r\n                  <img *ngIf=\"bc.ItemId == 'ITM3'\" src=\"assets/img/batteries/batre_merah.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <img *ngIf=\"bc.ItemId == 'ITM15'\" src=\"assets/img/batteries/batre_hijau.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                  <img *ngIf=\"bc.ItemId == 'ITM32'\" src=\"assets/img/batteries/batre_biru.gif\" alt=\"item 5\" class=\"w-full rounded-[0.625rem]\" loading=\"lazy\" />\r\n                </figure>\r\n              <!-- batteries -->\r\n              <div *ngIf=\"selectedBid == 'Dragons'\" class=\"w-full ml-12\">\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM1'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM9'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM10'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM11'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">RITRA</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM12'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM13'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\r\n              </div>\r\n              <div *ngIf=\"selectedBid == 'Eggs'\" class=\"w-full ml-12\">\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM6'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM8'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">METALICANA</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM2'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERU</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM5'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">FENG</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM7'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">DORCH</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM4'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">AKH</h3>\r\n              </div>\r\n              <div *ngIf=\"selectedBid == 'Batteries'\" class=\"w-full ml-12\">\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM3'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">MERAH</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM15'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">HIJAU</h3>\r\n                <h3 *ngIf=\"bc.ItemId == 'ITM32'\" class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">BIRU</h3>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">{{bidPrice}} BNB</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">${{bidPriceUSD}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total 1 Items</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span data-tippy-content=\"ETH\">\r\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 1920 1920\" xml:space=\"preserve\" class=\"h-4 w-4\">\r\n                    <path fill=\"#8A92B2\" d=\"M959.8 80.7L420.1 976.3 959.8 731z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z\"></path>\r\n                    <path fill=\"#454A75\" d=\"M959.8 1295.4l539.8-319.1L959.8 731z\"></path>\r\n                    <path fill=\"#8A92B2\" d=\"M420.1 1078.7l539.7 760.6v-441.7z\"></path>\r\n                    <path fill=\"#62688F\" d=\"M959.8 1397.6v441.7l540.1-760.6z\"></path>\r\n                  </svg>\r\n                </span>\r\n                <span class=\"text-green font-medium tracking-tight\">{{bidPrice}} BNB</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">${{bidPriceUSD}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"connect == false && stateHash == '2'\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_cartBID()\" *ngIf=\"state_buy == 2\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Items {{bidPrice}} BNB</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Cart Modal -->\r\n  <div *ngIf=\"cartCount > 0\" class=\"modal fade\" id=\"cartModal\" tabindex=\"-1\" aria-labelledby=\"cartModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"cartModalLabel\">Cart</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/store/{{cartImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{cartDeskripsi}}</h3>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{cartName}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{cartPrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-3\" style=\"width: 100%;\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Alamat Lengkap</span>\r\n          </div>\r\n          <input type=\"text\" (keyup)=\"inputAddress($event)\" id=\"input_addres\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required />\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kode Pos</span>\r\n          </div>\r\n          <input type=\"text\" (keyup)=\"inputPostalCode($event)\" id=\"input_posta_code\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your postal code\" required />\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white pt-5\">Kota</span>\r\n          </div>\r\n          <input type=\"text\" (keyup)=\"searchAddress($event)\" id=\"search_addres\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your city\" required />\r\n          <div class=\"modal-body p-6\">\r\n            <div class=\"mb-2 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Pilihan Kurir</span>\r\n            </div>\r\n            <div *ngFor=\"let result of resultCost\">\r\n              <div (click)=\"chooseKurir(result.service, result.cost[0].value)\" class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n                <div>\r\n                  <h3 *ngIf=\"kurir == result.cost[0].value; else nokurir\" class=\"text-green font-medium tracking-tight\">{{result.service}}</h3>\r\n                  <ng-template #nokurir>\r\n                    <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{result.service}}</h3>\r\n                  </ng-template>\r\n                  <div class=\"flex flex-wrap items-center\">\r\n                    <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{result.description}}</span>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"kurir == result.cost[0].value; else slowservie\" class=\"ml-auto\">\r\n                  <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                    <span class=\"text-green font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                  </span>\r\n                  <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                </div>\r\n                <ng-template #slowservie>\r\n                  <div class=\"ml-auto\">\r\n                    <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                      <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{result.cost[0].value | number}}</span>\r\n                    </span>\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{result.cost[0].value | number }}</div>\r\n                    <div class=\"dark:text-jacarta-300 text-right text-sm\">{{result.cost[0].etd}} hari</div>\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-7 flex items-center justify-between\">\r\n              <span class=\"font-display text-jacarta-700 hover:text-accent text-base dark:text-white\">Transfer Bank</span>\r\n            </div>\r\n            <div class=\"mt-2 text-sm\">\r\n              <span class=\"dark:text-jacarta-200 text-jacarta-700 mr-1\">Bank BCA</span>\r\n            </div>\r\n            <div class=\"mt-2 text-sm\">\r\n              <h4 class=\"text-green mr-1\">4972990519</h4>\r\n            </div>\r\n            <div class=\"mt-2 text-sm\">\r\n              <h4 class=\"text-white mr-1\">PT Oragon Teknologi Indonesia</h4>\r\n            </div>\r\n          </div>\r\n          <!-- </span> -->\r\n        </div>\r\n        <!-- end body -->\r\n        <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"connectAccount()\" *ngIf=\"connect == false\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Connect Wallet </button>\r\n            <button (click)=\"pay_cartStore(cartID, globalID, wallets)\" *ngIf=\"state_buy == 2 && isLogin == '' && cartStatus == 1\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Pay Items Rp {{actualcartPrice | number}}.00</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Progress Modal -->\r\n  <div *ngIf=\"progressCount > 0\" class=\"modal fade\" id=\"progressModal\" tabindex=\"-1\" aria-labelledby=\"progressModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog max-w-2xl\">\r\n      <div class=\"modal-content\" style=\"margin-bottom: 1rem;\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"progressModalLabel\">Progress</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" class=\"fill-jacarta-700 h-6 w-6 dark:fill-white\">\r\n              <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n              <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" />\r\n            </svg>\r\n          </button>\r\n        </div>\r\n        <!-- Body -->\r\n        <div class=\"modal-body p-6\">\r\n          <div class=\"mb-2 flex items-center justify-between\">\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Item</span>\r\n            <span class=\"font-display text-jacarta-700 text-sm font-semibold dark:text-white\">Subtotal</span>\r\n          </div>\r\n          <div>\r\n            <div class=\"dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4\">\r\n              <figure class=\"mr-5 self-start\">\r\n                <img src=\"assets/img/store/{{cartImg}}\" alt=\"avatar 2\" class=\"rounded-2lg\" loading=\"lazy\" />\r\n              </figure>\r\n              <div>\r\n                <h3 class=\"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white\">{{cartDeskripsi}}</h3>\r\n                <div class=\"flex flex-wrap items-center\">\r\n                  <span class=\"dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm\">{{cartName}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <span class=\"mb-1 flex items-center whitespace-nowrap\">\r\n                  <span class=\"dark:text-jacarta-100 text-sm font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n                </span>\r\n                <div class=\"dark:text-jacarta-300 text-right text-sm\">Rp {{cartPrice | number}}.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Total -->\r\n          <div class=\"dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between py-2.5\">\r\n            <span class=\"font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white\">Total {{cartQty}} Items</span>\r\n            <div class=\"ml-auto\">\r\n              <span class=\"flex items-center whitespace-nowrap\">\r\n                <span class=\"text-green font-medium tracking-tight\">Rp {{cartPrice | number}}.00</span>\r\n              </span>\r\n              <div class=\"dark:text-jacarta-300 text-right\">Rp {{cartPrice | number}}.00</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-3\" style=\"width: 100%;\">\r\n          <input type=\"file\" (change)=\"pay_progressStore($event, ordersID, globalID, product_id, wallets)\" id=\"file-upload\" class=\"dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white\" placeholder=\"Enter your address\" required />\r\n        </div>\r\n        <!-- end body -->\r\n        <!-- <div class=\"modal-footer\">\r\n          <div class=\"flex items-center justify-center space-x-4\">\r\n            <button (click)=\"pay_progressStore(ordersID, globalID, wallets)\" *ngIf=\"state_buy == 2 && isLogin == ''\" class=\"bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all\"> Confirm Now</button>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"dark:bg-jacarta-900 page-footer bg-white\">\r\n    <div class=\"container\">\r\n      <div class=\"grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12\">\r\n        <div class=\"col-span-3 md:col-span-4\">\r\n          <!-- Logo -->\r\n          <a href=\"#\" class=\"mb-6 inline-block\">\r\n            <img src=\"assets/img/logo1.png\" class=\"max-h-7 dark:hidden\" alt=\"Xhibiter | NFT Marketplace\" />\r\n            <img src=\"assets/img/logo_white.png\" class=\"hidden max-h-7 dark:block\" alt=\"Xhibiter | NFT Marketplace\" />\r\n          </a>\r\n          <p class=\"dark:text-jacarta-300 mb-12\">\r\n            Create, sell and collect truly rare digital artworks. Powered by blockchain technology.\r\n          </p>\r\n          <!-- Socials -->\r\n          <div class=\"flex space-x-5\">\r\n            <!-- <a href=\"#\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"facebook\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"\r\n                ></path>\r\n              </svg>\r\n            </a> -->\r\n            <a href=\"https://twitter.com/OragonXBsc\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"twitter\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://discord.com/invite/hNXbcCtnNV\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"discord\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 640 512\"\r\n              >\r\n                <path\r\n                  d=\"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/oragonx_official/?hl=en\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"instagram\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 448 512\"\r\n              >\r\n                <path\r\n                  d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n            <a href=\"https://www.youtube.com/channel/UCI8UcLVmFXAQKJGnxtxReXg\" class=\"group\">\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                focusable=\"false\"\r\n                data-prefix=\"fab\"\r\n                data-icon=\"youtube\"\r\n                class=\"group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 20 20\"\r\n              >\r\n                <path\r\n                  d=\"M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003\"\r\n                ></path>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2 md:col-start-7\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Marketplace</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">All NFTs</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Art</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Music</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Domain Names</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collectibles</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Virtual World</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">Company</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Explore</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">About</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Contact Us</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Our Blog</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">FAQ</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-span-full sm:col-span-3 md:col-span-2\">\r\n          <h3 class=\"font-display text-jacarta-700 mb-6 text-sm dark:text-white\">My Account</h3>\r\n          <ul class=\"dark:text-jacarta-300 flex flex-col space-y-1\">\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Authors</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Collection</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Author Profile</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" class=\"hover:text-accent dark:hover:text-white\">Create Item</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0\">\r\n        <span class=\"dark:text-jacarta-400 text-sm\"\r\n          >&copy;\r\n          <script>\r\n            document.write(new Date().getFullYear())\r\n          </script>\r\n          Copyright OragonX All Rights Reserved By\r\n          <a href=\"https://oragon.network/website\" class=\"hover:text-accent\">OragonX</a></span\r\n        >\r\n        <ul class=\"dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm\">\r\n          <li>\r\n            <a href=\"tos.html\" class=\"hover:text-accent\">Terms and conditions</a>\r\n          </li>\r\n          <li><a href=\"tos.html\" class=\"hover:text-accent\">Privacy policy & EULA </a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!-- end footer -->\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_p2pmarket_p2pmarket_module_ts.js.map