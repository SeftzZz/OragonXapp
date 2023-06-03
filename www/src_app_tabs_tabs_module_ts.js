(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ 83200);




// AngularFire

const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectUnauthorizedTo)(['login']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectLoggedInTo)(['home']);
const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'home',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("default-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
  }, {
    path: 'login',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../login/login.module */ 80107)).then(m => m.LoginPageModule)
  }, {
    path: 'resetpassword',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("src_app_resetpassword_resetpassword_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../resetpassword/resetpassword.module */ 81869)).then(m => m.ResetpasswordPageModule)
  }, {
    path: 'p2pmarket',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_p2pmarket_p2pmarket_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../p2pmarket/p2pmarket.module */ 23279)).then(m => m.P2pmarketPageModule),
    ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin)
  }, {
    path: 'gamehub',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_gamehub_gamehub_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gamehub/gamehub.module */ 50148)).then(m => m.GamehubPageModule)
  }, {
    path: 'background',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_background_background_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../background/background.module */ 30686)).then(m => m.BackgroundPageModule),
    ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin)
  }, {
    path: 'advertise',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_advertise_advertise_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../advertise/advertise.module */ 57739)).then(m => m.AdvertisePageModule),
    ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin)
  }, {
    path: 'profile',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 84523)).then(m => m.ProfilePageModule),
    ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin)
  }, {
    path: 'rankings',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_rankings_rankings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../rankings/rankings.module */ 97258)).then(m => m.RankingsPageModule)
  }, {
    path: 'recently-sold',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_recently-sold_recently-sold_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../recently-sold/recently-sold.module */ 5763)).then(m => m.RecentlySoldPageModule)
  }, {
    path: 'help-center',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_help-center_help-center_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../help-center/help-center.module */ 85653)).then(m => m.HelpCenterPageModule)
  }, {
    path: 'platform',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_platform-status_platform-status_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../platform-status/platform-status.module */ 16702)).then(m => m.PlatformStatusPageModule)
  }, {
    path: 'partners',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_partners_partners_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../partners/partners.module */ 31756)).then(m => m.PartnersPageModule)
  }, {
    path: 'blogs',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("default-node_modules_walletconnect_web3-provider_dist_esm_index_js-node_modules_web3_dist_web-388b94"), __webpack_require__.e("default-node_modules_swiper_swiper_esm_js"), __webpack_require__.e("src_app_newsletter_newsletter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../newsletter/newsletter.module */ 57854)).then(m => m.NewsletterPageModule)
  }, {
    path: 'swap',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_swap_swap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../swap/swap.module */ 75650)).then(m => m.SwapPageModule)
  }, {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 62146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);

var _class;




let TabsPage = (_class = class TabsPage {
  constructor() {
    (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "connect", void 0);
  }
  ngOnInit() {
    this.connect = false;
  }
}, (0,_workspaces_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabsPage);


/***/ }),

/***/ 62146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1080px) {\n  ion-tab-bar {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.page.scss"],"names":[],"mappings":"AAAA;EACC;IACC,aAAA;EACA;AACF","sourcesContent":["@media (min-width: 1080px) {\n\tion-tab-bar {\n\t\tdisplay : none;\n\t}\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <a href=\"/tabs/home\" style=\"padding: 1.5rem;\">\n      <ion-icon name=\"home-outline\" style=\"font-size: 1.5rem;\"></ion-icon>\n      <!-- <ion-label style=\"display: block;font-size: 0.5rem;\">Home</ion-label> -->\n    </a>\n\n    <a href=\"/tabs/p2pmarket\" style=\"padding: 1.5rem;\">\n      <ion-icon name=\"cart-outline\" style=\"font-size: 1.5rem;\"></ion-icon>\n      <!-- <ion-label style=\"display: block;font-size: 0.5rem;\">P2P Market</ion-label> -->\n    </a>\n\n    <a href=\"/tabs/gamehub\" style=\"padding: 1.5rem;\">\n      <ion-icon name=\"game-controller-outline\" style=\"font-size: 1.5rem;\"></ion-icon>\n      <!-- <ion-label style=\"display: block;font-size: 0.5rem;\">Game Hub</ion-label> -->\n    </a>\n\n    <a id=\"nested-button\" href=\"/tabs/background\" style=\"padding: 1.5rem;\">\n      <ion-icon name=\"add-circle-outline\" style=\"font-size: 1.5rem;\"></ion-icon>\n      <!-- <ion-label style=\"display: block;font-size: 0.5rem;\">Utility</ion-label> -->\n    </a>\n\n    <a href=\"/tabs/tab2\" style=\"padding: 1.5rem;\">\n      <ion-icon name=\"chatbubbles-outline\" style=\"font-size: 1.5rem;\"></ion-icon>\n      <!-- <ion-label style=\"display: block;font-size: 0.5rem;\">Suppport</ion-label> -->\n    </a>\n\n  </ion-tab-bar>\n\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map