"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_auth_service_ts"],{

/***/ 3223:
/*!*************************************!*\
  !*** ./src/app/provider.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderService": () => (/* binding */ ProviderService)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);

var _class;


let ProviderService = (_class = class ProviderService {
  constructor() {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "states", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "states_test", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "status_test", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "username", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "r_txhash", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "wallet_address", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "web3js", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "datax", void 0);
    this.states = "";
    this.id = "";
    this.email = "";
    this.username = "";
    this.wallet_address = "";
    this.r_txhash = "";
    this.states_test = "";
    this.status_test = "";
    this.datax = {};
  }
  setDataX(value) {
    this.datax = value;
  }
  getDataX() {
    return this.datax;
  }
  setTXH(value) {
    this.r_txhash = value;
  }
  getTXH() {
    return this.r_txhash;
  }
  setWEB3(value) {
    this.web3js = value;
  }
  getWEB3() {
    return this.web3js;
  }
  setID(value) {
    this.id = value;
  }
  getID() {
    return this.id;
  }
  setEMAIL(value) {
    this.email = value;
  }
  getEMAIL() {
    return this.email;
  }
  setUSERNAME(value) {
    this.username = value;
  }
  getUSERNAME() {
    return this.username;
  }
  setWALLET_ADDRESS(value) {
    this.wallet_address = value;
  }
  getWALLET_ADDRESS() {
    return this.wallet_address;
  }
  setStates(value) {
    this.states = value;
  }
  getStates() {
    return this.states;
  }
  setTestStates(value) {
    this.states_test = value;
  }
  getTestStates() {
    return this.states_test;
  }
  setTestStatus(value) {
    this.status_test = value;
  }
  getTestStatus() {
    return this.status_test;
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
ProviderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ProviderService);


/***/ }),

/***/ 6158:
/*!******************************!*\
  !*** ./src/app/send-data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendData": () => (/* binding */ SendData)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.service */ 3223);

var _class;




let SendData = (_class = class SendData {
  //Manual State
  //End Manual State
  constructor(httpClient, global) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "webfolder", "services");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "webfolderjs", "js-services");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "server", "https://oragonbsc.io");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "controller", this.server + "/" + this.webfolder + "/");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "controllerjs", this.server + "/" + this.webfolderjs + "/");
    // serverapi : string = "http://localhost/oragonnew/kelolaisi/api";
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "serverapi", "https://oragonbsc.io/weboragonbsc/kelolaisi/api");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "controllerapi", this.serverapi + "/");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "api_key", "XASDKJKANVK239493FJEJG2JV9EVODKSVNKKNV009QASXLXXAA");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fcm_key", "key=AAAAz6cnOM8:APA91bESODjJGHW92MyZZHkVDh-PogOt4M6n-nZh9nJIsi4kFrMXRY1tBCdzuIrRIbqN-6AG5gvgvWcUFn4XeIfM2jKNHy5r1DVIcXpyGTyLGt1QhwuEYhEiOadd-YPc7HQRjp3Tw7lA");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "link", "https://us-central1-oragonx-19744.cloudfunctions.net/transferDragonData");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "latestOragon", "https://api.pancakeswap.info/api/v2/tokens/0x88c676fc777c225b69869aeef5d10535de1e4f5d");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "latestBUSD", "https://api.pancakeswap.info/api/v2/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "latestBNB", "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bscW", "https://api.bscscan.com/api");
    this.httpClient = httpClient;
    this.global = global;
  }
  gettokenbalance() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    return this.httpClient.get(this.controller + "get_token_balance" + "?uc=" + this.global.getWALLET_ADDRESS(), {
      headers: header
    });
  }
  getcurrentoragon() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    return this.httpClient.get(this.controller + "get_current_oragon", {
      headers: header
    });
  }
  getdragoncount(times, kind) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("kind", kind).set("times", times);
    return this.httpClient.post(this.controller + "get_dragon_count", body, {
      headers: header
    });
  }
  getbnbcount(times, kind) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("kind", kind).set("times", times);
    return this.httpClient.post(this.controller + "get_bnb_count", body, {
      headers: header
    });
  }
  getorgncount(times, kind) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("kind", kind).set("times", times);
    return this.httpClient.post(this.controller + "get_orgn_count", body, {
      headers: header
    });
  }
  setitemhistory(DocId, userid, remark, data_item, itemid) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("userid", userid);
    body.append("remark", remark);
    body.append("item", data_item);
    body.append("itemid", itemid);
    return this.httpClient.post(this.controllerapi + "item_history", body, {
      headers: header
    });
  }
  settrxhistory(id_product, userid, itemid, amount, tx_hash, tx_type, data_item = "", email, tokenPushNotification = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("id_product", id_product).set("userid", userid).set("itemid", itemid).set("amount", amount).set("tx_hash", tx_hash).set("tx_type", tx_type).set("item", data_item).set("email", email).set("tokenPushNotification", tokenPushNotification);
    return this.httpClient.post(this.controllerapi + "trx_history/" + id_product + "/" + userid + "/" + itemid + "/" + amount + "/" + tx_hash + "/" + tx_type + "/" + data_item + "/" + email + "/" + tokenPushNotification, body, {
      headers: header,
      responseType: "text"
    });
  }
  setroyaltytrxhistory(userid, owner, itemid, amount, tx_hash, tx_type, data_item) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("userid", userid);
    body.append("owner", owner);
    body.append("amount", amount);
    body.append("tx_hash", tx_hash);
    body.append("tx_type", tx_type);
    body.append("item", data_item);
    return this.httpClient.post(this.controllerapi + "trx_royalty_history", body, {
      headers: header
    });
  }
  gettrxhistoryall() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.post(this.controllerapi + "gettrxhistoryall_mp", body, {
      headers: header
    });
  }
  gettrxhistoryid(id) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.post(this.controllerapi + "gettrxhistoryid_mp/" + id, body, {
      headers: header
    });
  }
  gettrxhistoryalldg() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded")
    // header.append( 'No-Auth', 'True')
    .set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_dragon", {
      headers: header
    });
  }
  gettrxhistoryallfood() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded")
    // header.append( 'No-Auth', 'True')
    .set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_food", {
      headers: header
    });
  }
  gettrxhistoryallbtr() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded")
    // header.append( 'No-Auth', 'True')
    .set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_battery", {
      headers: header
    });
  }
  gettrxhistoryallegg() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded")
    // header.append( 'No-Auth', 'True')
    .set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_egg", {
      headers: header
    });
  }
  //get_history_item_all
  gettrxhistoryitem() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.post(this.controller + "get_history_item_all", body, {
      headers: header
    });
  }
  get_bnb_balance(address = "", provider) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("address", address).set("provider", provider);
    return this.httpClient.post(this.controllerjs + "get_bnb_balances", body, {
      headers: header
    });
  }
  login(email = "", password = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("email", email).set("password", password);
    return this.httpClient.post(this.controller + "login", body, {
      headers: header
    });
  }
  register(username = "", email = "", wallet_address = "", password = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("wallet_address", wallet_address);
    body.append("password", password);
    return this.httpClient.post(this.controller + "register", body, {
      headers: header,
      responseType: "text"
    });
  }
  transferDragon(owner = "", userid = "", itemid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("owner", owner).set("userid", userid).set("itemid", itemid);
    return this.httpClient.post(this.link + "?PreviousOwnerId=" + owner + "&NewOwnerId=" + userid + "&DragonObjectId=" + itemid, {
      headers: header
    });
  }
  registermp(username = "", email = "", wallet_address = "", password = "", acceptTerms = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("wallet_address", wallet_address);
    body.append("password", password);
    body.append("acceptTerms", acceptTerms);
    return this.httpClient.post(this.controllerapi + "register_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNoUidmp(nouid = "", email = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("nouid", nouid);
    body.append("email", email);
    return this.httpClient.post(this.controllerapi + "insertNoUid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  activationmp(kodeaktifasi = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("kodeaktifasi", kodeaktifasi);
    return this.httpClient.post(this.controllerapi + "aktifasi_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  get_user_by_kodeaktifasi(kodeaktifasi = "", username = "", email = "", wallet_address = "", password = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    body.append("kodeaktifasi", kodeaktifasi);
    body.append("username", username);
    body.append("email", email);
    body.append("wallet_address", wallet_address);
    body.append("password", password);
    return this.httpClient.post(this.controllerapi + "get_user_by_kode", body, {
      headers: header,
      responseType: "text"
    });
  }
  resetpassmp(password = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("password", password);
    return this.httpClient.post(this.controllerapi + "resetpass_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getcurrentoragon2() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    return this.httpClient.get(this.latestOragon, {
      headers: header
    });
  }
  usersmp(email = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    body.append("email", email);
    return this.httpClient.post(this.controllerapi + "checkuseremail_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  GetAllUsers() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.post(this.controllerapi + "getallusers_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  balancePlayers(wallet_address = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("wallet_address", wallet_address);
    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x88c676fc777c225b69869aeef5d10535de1e4f5d&address=" + wallet_address + "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU", {
      headers: header
    });
  }
  balanceBNBPlayers(wallet_address = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("wallet_address", wallet_address);
    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=balance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=" + wallet_address + "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU", {
      headers: header
    });
  }
  balanceBUSDPlayers(wallet_address = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("wallet_address", wallet_address);
    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&address=" + wallet_address + "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU", {
      headers: header
    });
  }
  useriditemidmp(uid = "", ItemId = "", attack = "", defense = "", rarity = "", level = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("attack", attack);
    body.append("defense", defense);
    body.append("rarity", rarity);
    body.append("level", level);
    return this.httpClient.post(this.controllerapi + "checkuiditemid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  checkitem_dragonmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "checkitems_dragonmp", {
      headers: header,
      responseType: "text"
    });
  }
  dumpitemsmp(uid = "", itemid = "", objectid = "", attack = "", defense = "", rarity = "", level = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("itemid", itemid);
    body.append("objectid", objectid);
    body.append("attack", attack);
    body.append("defense", defense);
    body.append("rarity", rarity);
    body.append("level", level);
    return this.httpClient.post(this.controllerapi + "dumpitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsdetailmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "checkitemsdetail_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  edititemiddumpitemsmp(ObjectId = "", ItemId = "", Id = "", position = "", price = "", owner = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ObjectId", ObjectId);
    body.append("ItemId", ItemId);
    body.append("Id", Id);
    body.append("position", position);
    body.append("price", price);
    body.append("owner", owner);
    return this.httpClient.post(this.controllerapi + "edititemiddumpitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemsmp(Id = "", uid = "", ItemId = "", price = "", attack = "", defense = "", rarity = "", level = "", owner = "", position = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("Id", Id);
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("price", price);
    body.append("attack", attack);
    body.append("defense", defense);
    body.append("rarity", rarity);
    body.append("level", level);
    body.append("owner", owner);
    body.append("position", position);
    return this.httpClient.post(this.controllerapi + "editdumpitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemsBIDmp(Id = "", uid = "", ItemId = "", price = "", attack = "", defense = "", rarity = "", level = "", owner = "", position = "", Type = "", CreatedAt = "", BidList = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("Id", Id);
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("price", price);
    body.append("attack", attack);
    body.append("defense", defense);
    body.append("rarity", rarity);
    body.append("level", level);
    body.append("owner", owner);
    body.append("position", position);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);
    body.append("BidList", BidList);
    return this.httpClient.post(this.controllerapi + "editdumpitemsBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemsBIDNOWmp(DocId = "", BidList = "", PriceNow = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);
    return this.httpClient.post(this.controllerapi + "editdumpitemsBIDNOW_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemseggBIDNOWmp(DocId = "", BidList = "", PriceNow = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);
    return this.httpClient.post(this.controllerapi + "editdumpitemseggBIDNOW_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemsbatteryBIDNOWmp(DocId = "", BidList = "", PriceNow = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);
    return this.httpClient.post(this.controllerapi + "editdumpitemsbatteryBIDNOW_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  addBidListmp(DocId = "", uidBid = "", priceBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("uidBid", uidBid);
    body.append("priceBid", priceBid);
    return this.httpClient.post(this.controllerapi + "addBidList_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  addSellListmp(DocId = "", uidSell = "", priceSell = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("uidSell", uidSell);
    body.append("priceSell", priceSell);
    return this.httpClient.post(this.controllerapi + "addSellList_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  addcartBidListmp(idBid = "", cartCreatedBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);
    return this.httpClient.post(this.controllerapi + "addcartBidList_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getlastBidIdmp(idBid = "", cartCreatedBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);
    return this.httpClient.post(this.controllerapi + "getlastBidId_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  deletecartBidListmp(idBid = "", cartCreatedBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);
    return this.httpClient.post(this.controllerapi + "deletecartBidList_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellhargamp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellharga_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getlowsellhargamp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getlowsellharga_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getatozsellhargamp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getatozsellharga_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselldgmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getselldg_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselldgdatemp(EditAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("EditAt", EditAt);
    return this.httpClient.post(this.controllerapi + "getselldgdate_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselldglimitmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.get(this.controllerapi + "getselldglimit_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselldgidmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getselldgid_mp/" + DocId, body, {
      headers: header,
      responseType: "text"
    });
  }
  getselldgUsermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getselldguser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselldgUserownedmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getselldguserowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getbgdgUserownedmp(uid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getdgdguserowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselldgBIDmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getselldgBID_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselldgidBIDmp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getselldgidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getshistorydgidBIDmp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getshistorydgidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getswinhistorydgidBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getswinhistorydgidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  checkswinhistorydgidBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "checkswinhistorydgidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationBidmp(nouid = "", tokenPushNotification = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid).set("tokenPushNotification", tokenPushNotification);
    return this.httpClient.post(this.controllerapi + "postNotificationBid_mp/" + nouid + "/" + tokenPushNotification, body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationOwnerBidmp(username = "", nouid = "", tokenPushNotification = "", uidBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("username", username).set("nouid", nouid).set("tokenPushNotification", tokenPushNotification).set("uidBid", uidBid);
    return this.httpClient.post(this.controllerapi + "postNotificationOwnerBid_mp/" + username + "/" + nouid + "/" + tokenPushNotification + "/" + uidBid, body, {
      headers: header,
      responseType: "text"
    });
  }
  gettokenOwnermp(nouid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid);
    return this.httpClient.post(this.controllerapi + "gettokenOwner_mp/" + nouid, body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationaddBidmp(nouid = "", notifBid = "", uidBid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid).set("notifBid", notifBid).set("uidBid", uidBid).set("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "postNotificationaddBid_mp/" + nouid + "/" + notifBid + "/" + uidBid + "/" + DocId, body, {
      headers: header,
      responseType: "text"
    });
  }
  setNotificationBidOwnermp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setNotificationBidOwner_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getNotificationBidmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getNotificationBid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getNotificationSellDragonmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getNotificationSellDragon_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getNotificationSellEggmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getNotificationSellEgg_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  readNotificationBidmp(idBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    return this.httpClient.post(this.controllerapi + "readNotificationBid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  readNotificationSellmp(idSell = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idSell", idSell);
    return this.httpClient.post(this.controllerapi + "readNotificationSell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getNotificationLosesBidmp(uidBid = "", idBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);
    body.append("idBid", idBid);
    return this.httpClient.post(this.controllerapi + "getNotificationLosesBid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationtoWinBidmp(nouid = "", tokenPushNotification = "", idBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid).set("tokenPushNotification", tokenPushNotification).set("idBid", idBid);
    return this.httpClient.post(this.controllerapi + "postNotificationtoWinBid_mp/" + nouid + "/" + tokenPushNotification + "/" + idBid, body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationtoLoseBidmp(nouid = "", tokenPushNotification = "", idBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid).set("tokenPushNotification", tokenPushNotification).set("idBid", idBid);
    return this.httpClient.post(this.controllerapi + "postNotificationtoLoseBid_mp/" + nouid + "/" + tokenPushNotification + "/" + idBid, body, {
      headers: header,
      responseType: "text"
    });
  }
  postNotificationtoLosesBidmp(nouid = "", tokenPushNotification = "", idBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Content-Type", "application/json").set("Authorization", this.fcm_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("nouid", nouid).set("tokenPushNotification", tokenPushNotification).set("idBid", idBid);
    return this.httpClient.post(this.controllerapi + "postNotificationtoLosesBid_mp/" + nouid + "/" + tokenPushNotification + "/" + idBid, body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsdragontosellmp(DocId = "", price = "", CreatedAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);
    body.append("CreatedAt", CreatedAt);
    return this.httpClient.post(this.controllerapi + "itemsdragontosell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  selldragontoitemsmp(uid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "selldragontoitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  removedragonDocIdBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "removedragonDocIdBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsdragontobidmp(DocId = "", PriceNow = "", Type = "", CreatedAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("PriceNow", PriceNow);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);
    return this.httpClient.post(this.controllerapi + "itemsdragontobid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // EGG
  getselleggmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellegg_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselleggidmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getselleggid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getlowselleggmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getlowsellegg_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getatozselleggmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getatozsellegg_mp", {
      headers: header,
      responseType: "text"
    });
  }
  editpricedumpitemseggmp(uid = "", DocId = "", ItemId = "", position = "", price = "", owners = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("ItemId", ItemId);
    body.append("position", position);
    body.append("price", price);
    body.append("owners", owners);
    return this.httpClient.post(this.controllerapi + "itemseggtosell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemseggtosellmp(DocId = "", price = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);
    return this.httpClient.post(this.controllerapi + "itemseggtosell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemseggtoincubatormp(DocId = "", CreatedAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("CreatedAt", CreatedAt);
    return this.httpClient.post(this.controllerapi + "itemseggtoincubator_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemseggtobidmp(DocId = "", PriceNow = "", Type = "", CreatedAt = "", bidTime = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("PriceNow", PriceNow);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);
    body.append("bidTime", bidTime);
    return this.httpClient.post(this.controllerapi + "itemseggtobid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  hmsBIDmp(DocId = "", hours = "", minutes = "", seconds = "", fulltime = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("hours", hours);
    body.append("minutes", minutes);
    body.append("seconds", seconds);
    body.append("fulltime", fulltime);
    return this.httpClient.post(this.controllerapi + "hmsBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  gethmsBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "gethmsBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  selleggtoitemsmp(uid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "selleggtoitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  removeeggDocIdBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "removeeggDocIdBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  editdumpitemseggmp(uid = "", DocId = "", ItemId = "", position = "", owners = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("ItemId", ItemId);
    body.append("position", position);
    body.append("owners", owners);
    return this.httpClient.post(this.controllerapi + "editdumpitemsegg_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselleggUsermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellegguser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselleggUserownedmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellegguserowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselleggBIDmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getselleggBID_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselleggidBIDmp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getselleggidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // BATTERY
  editdumpitemsbatterymp(uid = "", DocId = "", ItemId = "", position = "", owners = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("ItemId", ItemId);
    body.append("position", position);
    body.append("owners", owners);
    return this.httpClient.post(this.controllerapi + "editdumpitemsbattery_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatterymp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellbattery_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatteryidmp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getsellbatteryid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbattery24Usermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbattery24user_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatterysellUsermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbatteryselluser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatteryUserallmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbatteryuserall_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbattery12Usermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbattery12user_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbattery8Usermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbattery8user_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsbatterytosellmp(DocId = "", price = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);
    return this.httpClient.post(this.controllerapi + "itemsbatterytosell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsbatterytoincubatormp(DocId = "", CreatedAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("CreatedAt", CreatedAt);
    return this.httpClient.post(this.controllerapi + "itemsbatterytoincubator_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  itemsbatterytobidmp(DocId = "", PriceNow = "", Type = "", CreatedAt = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("PriceNow", PriceNow);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);
    return this.httpClient.post(this.controllerapi + "itemsbatterytobid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  sellbatterytoitemsmp(uid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "sellbatterytoitems_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  removebatteryDocIdBIDmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "removebatteryDocIdBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatteryUserownedmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellbatteryuserowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatteryBIDmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellbatteryBID_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getsellbatteryidBIDmp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getsellbatteryidBID_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // FOOD
  editdumpitemsfoodmp(uid = "", DocId = "", ItemId = "", position = "", length = "", owners = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("ItemId", ItemId);
    body.append("position", position);
    body.append("length", length);
    body.append("owners", owners);
    return this.httpClient.post(this.controllerapi + "editdumpitemsfood_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellfoodmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellfood_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getsellfoodUsermp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellfoodUserstoremp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellfooduserstore_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellfoodUserqtymp(uid = "", lengthFood = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("lengthFood", lengthFood);
    return this.httpClient.post(this.controllerapi + "getsellfooduserqty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatesellfoodUserqtymp(uid = "", ItemId = "", lengthFood = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("lengthFood", lengthFood);
    return this.httpClient.post(this.controllerapi + "updatesellfooduserqty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setsellfoodUsermp(uid = "", iditemsFood = "", qty = "", price = "", HVP = "", ItemId = "", owner = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("iditemsFood", iditemsFood);
    body.append("qty", qty);
    body.append("price", price);
    body.append("HVP", HVP);
    body.append("ItemId", ItemId);
    body.append("owner", owner);
    return this.httpClient.post(this.controllerapi + "setsellfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatesellfoodUsermp(uid = "", ItemId = "", transactionHash = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("transactionHash", transactionHash);
    return this.httpClient.post(this.controllerapi + "updatesellfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setsellDetailfoodUsermp(uid = "", iditemssellFood = "", HVP = "", ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("iditemssellFood", iditemssellFood);
    body.append("HVP", HVP);
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "setsellDetailfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellDetailfoodUsermp(ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "getsellDetailfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatesellDetailfoodUsermp(iditemssellFood = "", ItemId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("iditemssellFood", iditemssellFood);
    body.append("ItemId", ItemId);
    return this.httpClient.post(this.controllerapi + "updatesellDetailfooduser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellfoodidmp(iditemsFood = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("iditemsFood", iditemsFood);
    return this.httpClient.post(this.controllerapi + "getsellfoodid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // FASHION
  getselljaketsmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getselljakets_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getsellcommonjaketsmp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "getsellcommonjakets_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getselljaketsidmp(id_product = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_product", id_product);
    return this.httpClient.post(this.controllerapi + "getselljaketsid_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselljaketsUserownedmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getselljaketsUserowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getsellcommonjaketsownedmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getsellcommonjaketsowned_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getselljaketsUserownedqrcodemp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getselljaketsUserownedqrcode_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getOngkirmp(city = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("city", city);
    return this.httpClient.post(this.controllerapi + "getOngkir_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewJaketMetalicanamp(id_orders = "", uid = "", Id = "", ItemId = "", lengthJakets = "", owners = "", qrcode = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_orders", id_orders);
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("lengthJakets", lengthJakets);
    body.append("owners", owners);
    body.append("qrcode", qrcode);
    return this.httpClient.post(this.controllerapi + "insertNewJaketMetalicana_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // STORE-API
  getstoredata() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    return this.httpClient.get(this.controllerapi + "getstoredata_mp", {
      headers: header,
      responseType: "text"
    });
  }
  getstoredetail(id_product = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_product", id_product);
    return this.httpClient.post(this.controllerapi + "getstoredetail_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getcurrentbnb() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    return this.httpClient.get(this.latestBNB, {
      headers: header
    });
  }
  getcurrentbusd() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");
    return this.httpClient.get(this.latestBUSD, {
      headers: header
    });
  }
  getstorecart(user_uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("user_uid", user_uid);
    return this.httpClient.post(this.controllerapi + "getstorecart_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getstoreprogress(user_uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("user_uid", user_uid);
    return this.httpClient.post(this.controllerapi + "getstoreprogress_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getbidcartdragon(uidBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);
    return this.httpClient.post(this.controllerapi + "getbidcartdragon_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getbidcartegg(uidBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);
    return this.httpClient.post(this.controllerapi + "getbidcartegg_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getbidcartbattery(uidBid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);
    return this.httpClient.post(this.controllerapi + "getbidcartbattery_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setstorecart(id_product = "", user_uid = "", addressw = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_product", id_product);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    return this.httpClient.post(this.controllerapi + "setstorecart_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatestorecart(id_cart = "", user_uid = "", addressw = "", email = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("email", email);
    return this.httpClient.post(this.controllerapi + "updatestorecart_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatestoreprogress(file_orders = "", id_orders = "", user_uid = "", addressw = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("file_orders", file_orders);
    body.append("id_orders", id_orders);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    return this.httpClient.post(this.controllerapi + "updatestoreprogress_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatestorecartHome(id_cart = "", user_uid = "", addressw = "", transactionhash = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("transactionhash", transactionhash);
    return this.httpClient.post(this.controllerapi + "updatestorecart_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updatestoreprogressHome(id_orders = "", user_uid = "", addressw = "", file_orders = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_orders", id_orders);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("file_orders", file_orders);
    return this.httpClient.post(this.controllerapi + "updatestoreprogress_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  dumpeggtomp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "sendeggto_mp", {
      headers: header,
      responseType: "text"
    });
  }
  editdumpeggtomp(itemid = "", status_kirim = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);
    return this.httpClient.post(this.controllerapi + "editsendeggto_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  dumpbatterytomp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "sendbatteryto_mp", {
      headers: header,
      responseType: "text"
    });
  }
  editdumpbatterytomp(itemid = "", status_kirim = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);
    return this.httpClient.post(this.controllerapi + "editsendbatteryto_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  dumpfoodtomp() {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    return this.httpClient.post(this.controllerapi + "sendfoodto_mp", {
      headers: header,
      responseType: "text"
    });
  }
  editdumpfoodtomp(itemid = "", status_kirim = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);
    return this.httpClient.post(this.controllerapi + "editsendfoodto_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setkycuser(nouid = "", ipAddress = "", geoLocation = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("nouid", nouid);
    body.append("ipAddress", ipAddress);
    body.append("geoLocation", geoLocation);
    return this.httpClient.post(this.controllerapi + "setkycuser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  // background
  getdgbackgroundmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getdgbackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  checkbackgroundmp(uid = "", DocId = "", statusbayarbackground = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("statusbayarbackground", statusbayarbackground);
    return this.httpClient.post(this.controllerapi + "checkbackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  uploadBackgroundmp(imgBg = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("imgBg", imgBg);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "uploadbackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  paybackgroundmp(uid = "", DocId = "", imgBg = "", statusbayarbackground = "", transactionhash = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("imgBg", imgBg);
    body.append("statusbayarbackground", statusbayarbackground);
    body.append("transactionhash", transactionhash);
    return this.httpClient.post(this.controllerapi + "paybackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  addbackgroundmp(uid = "", DocId = "", imgbackground = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("imgbackground", imgbackground);
    return this.httpClient.post(this.controllerapi + "addbackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getallbackgroundmp(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "getallbackground_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getallbackgroundsellmp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getallbackgroundsell_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  favoritedmp(uid = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "favorited_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getdgroyaltymp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getdgroyalty_mp/" + DocId, body, {
      headers: header,
      responseType: "text"
    });
  }
  getposroyaltymp(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Accept", "application/json").set("Content-Type", "application/x-www-form-urlencoded").set("X-Api-Key", this.api_key);
    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "getposroyalty_mp/" + DocId, body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgfirstroyaltymp(uid = "", pos_1 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_1", pos_1);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgfirstroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgsecondroyaltymp(uid = "", pos_2 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_2", pos_2);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgsecondroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgthirdroyaltymp(uid = "", pos_3 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_3", pos_3);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgthirdroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgfourthroyaltymp(uid = "", pos_4 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_4", pos_4);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgfourthroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgfifthroyaltymp(uid = "", pos_5 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_5", pos_5);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgfifthroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  setdgsixthroyaltymp(uid = "", pos_6 = "", DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_6", pos_6);
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "setdgsixthroyalty_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  getroyaltiesUsermp(userid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);
    return this.httpClient.post(this.controllerapi + "getroyaltiesUser_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  gettrxhistory(userid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);
    return this.httpClient.post(this.controllerapi + "get_trx_history", body, {
      headers: header,
      responseType: "text"
    });
  }
  getpointhistory(userid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);
    return this.httpClient.post(this.controllerapi + "get_point_history", body, {
      headers: header,
      responseType: "text"
    });
  }
  getpointhistoryall(uid = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    return this.httpClient.post(this.controllerapi + "get_point_historyall", body, {
      headers: header,
      responseType: "text"
    });
  }
  getpointhistorybyid(idPoint = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idPoint", idPoint);
    return this.httpClient.post(this.controllerapi + "get_idpoint_history", body, {
      headers: header,
      responseType: "text"
    });
  }
  getitemhistory(DocId = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    return this.httpClient.post(this.controllerapi + "get_item_history", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewDragonmp(uid = "", Id = "", ItemId = "", AttackPoint = "", DefensePoint = "", Exp = "", HP = "", Hunger = "", Level = "", MaxHP = "", MaxHunger = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("AttackPoint", AttackPoint);
    body.append("DefensePoint", DefensePoint);
    body.append("Exp", Exp);
    body.append("HP", HP);
    body.append("Hunger", Hunger);
    body.append("Level", Level);
    body.append("MaxHP", MaxHP);
    body.append("MaxHunger", MaxHunger);
    return this.httpClient.post(this.controllerapi + "insertNewDragon_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updateNewDataClaimmp(uid = "", ItemId = "", qtyClaim = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("qtyClaim", qtyClaim);
    return this.httpClient.post(this.controllerapi + "updateNewDataClaim_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  updateNewDataDragonmp(uid = "", Id = "", ItemId = "", AttackPoint = "", DefensePoint = "", Exp = "", HP = "", Hunger = "", Level = "", MaxHP = "", MaxHunger = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("AttackPoint", AttackPoint);
    body.append("DefensePoint", DefensePoint);
    body.append("Exp", Exp);
    body.append("HP", HP);
    body.append("Hunger", Hunger);
    body.append("Level", Level);
    body.append("MaxHP", MaxHP);
    body.append("MaxHunger", MaxHunger);
    return this.httpClient.post(this.controllerapi + "updateNewDataDragon_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewFoodmp(uid = "", Id = "", ItemId = "", lengthFood = "", owners = "", status = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("lengthFood", lengthFood);
    body.append("owners", owners);
    body.append("status", status);
    return this.httpClient.post(this.controllerapi + "insertNewFood_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewBatterymp(uid = "", Id = "", ItemId = "", lengthBattery = "", owners = "", status = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("lengthBattery", lengthBattery);
    body.append("owners", owners);
    body.append("status", status);
    return this.httpClient.post(this.controllerapi + "insertNewBattery_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewBattery12mp(uid = "", Id = "", ItemId = "", lengthBattery = "", owners = "", status = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("lengthBattery", lengthBattery);
    body.append("owners", owners);
    body.append("status", status);
    return this.httpClient.post(this.controllerapi + "insertNewBattery12_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewBattery8mp(uid = "", Id = "", ItemId = "", lengthBattery = "", owners = "", status = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("Id", Id);
    body.append("ItemId", ItemId);
    body.append("lengthBattery", lengthBattery);
    body.append("owners", owners);
    body.append("status", status);
    return this.httpClient.post(this.controllerapi + "insertNewBattery8_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
  insertNewPointmp(uid = "", qtyPoint = "", status = "") {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("qtyPoint", qtyPoint);
    body.append("status", status);
    return this.httpClient.post(this.controllerapi + "insertNewPoint_mp", body, {
      headers: header,
      responseType: "text"
    });
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_1__.ProviderService
}]), _class);
SendData = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: "root"
})], SendData);


/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider.service */ 3223);
/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../send-data */ 6158);


var _class;




// AngularFire


// Services


let AuthService = (_class = class AuthService {
  constructor(auth, fs, router, data, global, alertController, loadingController) {
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "auth", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "fs", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "data", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "global", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alertController", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loadingController", void 0);
    // login
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "data_user", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "respAPI", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "email", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "emailreset", "");
    // register
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "username", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wallet_address", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "password", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "password2", "");
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "uid", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "acceptTerms", void 0);
    (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "marked", void 0);
    this.auth = auth;
    this.fs = fs;
    this.router = router;
    this.data = data;
    this.global = global;
    this.alertController = alertController;
    this.loadingController = loadingController;
  }
  register({
    email,
    username,
    wallet_address,
    password
  }) {
    var _this = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var agree = String(_this.acceptTerms);
      _this.data.registermp(username, email, wallet_address, password, agree).subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.respAPI = data;
          let messageError = 1;
          let messageErrorEmail = 1;
          if (_this.respAPI == messageError || _this.respAPI == messageErrorEmail) {
            _this.showAlert('Wallet / Email Already Exists!', 'Please try again!');
          } else {
            _this.showAlert('Register Success, Check your email address for activation!', 'Complete');
            _this.router.navigate(['/tabs/login']);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {});
    })();
  }
  login({
    email,
    password
  }) {
    var _this2 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(_this2.auth, email, password);
        _this2.fs.collection("Players").doc(user.user.uid).valueChanges().subscribe(datas => {
          //console.log(datas.ProfileData);
          _this2.data_user = JSON.parse(datas.ProfileData);
          _this2.global.setWALLET_ADDRESS(_this2.data_user.WalletAddress);
          _this2.global.setUSERNAME(_this2.data_user.PlayerName);
          _this2.global.setEMAIL(_this2.data_user.Email);
          localStorage.setItem('ProfileData', JSON.stringify({
            Uid: user.user.uid,
            Email: _this2.data_user.Email,
            WalletAddress: _this2.data_user.WalletAddress,
            PlayerName: _this2.data_user.PlayerName,
            Point: datas.Point
          }));
          _this2.global.setStates("1");
          // call api auto insert if user not exists
          _this2.data.usersmp(_this2.email).subscribe(data => {
            _this2.respAPI = data;
            if (_this2.respAPI || _this2.data_user.Email) {
              _this2.data.registermp(_this2.data_user.PlayerName, _this2.data_user.Email, _this2.data_user.WalletAddress, 'false', 'false').subscribe(data => {}, error => {});
            }
          }, error => {});
        });
        return user;
      } catch (e) {
        return null;
      }
    })();
  }
  resetpassword({
    emailreset
  }) {
    var _this3 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.sendPasswordResetEmail)(_this3.auth, emailreset).then(() => {
          _this3.showAlert('Success', 'Link reset password has sent to your email');
        }).catch(error => {
          _this3.showAlert('Failed!', 'Email Not Found');
        });
        return user;
      } catch (e) {
        return null;
      }
    })();
  }
  confirmPasswordReset({
    oob_code,
    password
  }) {
    var _this4 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.measureStrength(password) < 30) {
        //console.log("Please use Uppercase letter, Number, Symbol and Undercase letter Combination");
        _this4.showAlert("Failed !", "Please use Password with Uppercase, Number, Symbol and Undercase Combination");
        return false;
      } else {
        try {
          const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.confirmPasswordReset)(_this4.auth, oob_code, password).then(() => {
            _this4.showAlert('Success !', 'Your password has been changed.');
          }).catch(error => {
            _this4.showAlert('Failed !', 'Reset password link has expired.');
          });
          return user;
        } catch (e) {
          return null;
        }
      }
    })();
  }
  logout() {
    localStorage.clear();
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(this.auth);
  }
  measureStrength(pass) {
    let score = 0;
    // award every unique letter until 5 repetitions  
    // let letters = {};  
    // for (let i = 0; i< pass.length; i++) {  
    //   letters[pass[i]] = (letters[pass[i]] || 0) + 1;  
    //   score += 5.0 / letters[pass[i]];  
    // }  
    // bonus points for mixing it up  
    let variations = {};
    variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass)
    };
    let variationCount = 0;
    for (let check in variations) {
      variationCount += variations[check] ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    //console.log(score);
    return Math.trunc(score);
  }
  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }
  showAlert(header, message) {
    var _this5 = this;
    return (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}, (0,D_SeftzZz_PROGRAM_OragonXapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _send_data__WEBPACK_IMPORTED_MODULE_3__.SendData
}, {
  type: _provider_service__WEBPACK_IMPORTED_MODULE_2__.ProviderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}]), _class);
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_auth_service_ts.js.map