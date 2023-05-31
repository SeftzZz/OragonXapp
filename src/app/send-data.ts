import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProviderService } from "./provider.service";

@Injectable({
  providedIn: "root",
})
export class SendData {
  webfolder: string = "services";
  webfolderjs: string = "js-services";
  server: string = "https://oragonbsc.io";
  controller: string = this.server + "/" + this.webfolder + "/";
  controllerjs: string = this.server + "/" + this.webfolderjs + "/";

  // serverapi : string = "http://localhost/oragonnew/kelolaisi/api";
  serverapi: string = "https://oragonbsc.io/weboragonbsc/kelolaisi/api";
  controllerapi: string = this.serverapi + "/";

  api_key: string = "XASDKJKANVK239493FJEJG2JV9EVODKSVNKKNV009QASXLXXAA";
  fcm_key: string =
    "key=AAAAz6cnOM8:APA91bESODjJGHW92MyZZHkVDh-PogOt4M6n-nZh9nJIsi4kFrMXRY1tBCdzuIrRIbqN-6AG5gvgvWcUFn4XeIfM2jKNHy5r1DVIcXpyGTyLGt1QhwuEYhEiOadd-YPc7HQRjp3Tw7lA";

  link: string =
    "https://us-central1-oragonx-19744.cloudfunctions.net/transferDragonData";
  latestOragon: string =
    "https://api.pancakeswap.info/api/v2/tokens/0x88c676fc777c225b69869aeef5d10535de1e4f5d";
  latestBUSD: string =
    "https://api.pancakeswap.info/api/v2/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  latestBNB: string =
    "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  bscW: string = "https://api.bscscan.com/api";
  //Manual State
  //End Manual State

  constructor(private httpClient: HttpClient, public global: ProviderService) {}

  gettokenbalance(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    return this.httpClient.get(
      this.controller +
        "get_token_balance" +
        "?uc=" +
        this.global.getWALLET_ADDRESS(),
      { headers: header }
    );
  }

  getcurrentoragon(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    return this.httpClient.get(this.controller + "get_current_oragon", {
      headers: header,
    });
  }

  getdragoncount(times: string, kind: string): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams().set("kind", kind).set("times", times);

    return this.httpClient.post(this.controller + "get_dragon_count", body, {
      headers: header,
    });
  }

  getbnbcount(times: string, kind: string): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams().set("kind", kind).set("times", times);

    return this.httpClient.post(this.controller + "get_bnb_count", body, {
      headers: header,
    });
  }

  getorgncount(times: string, kind: string): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams().set("kind", kind).set("times", times);

    return this.httpClient.post(this.controller + "get_orgn_count", body, {
      headers: header,
    });
  }

  setitemhistory(
    DocId: string,
    userid: string,
    remark: string,
    data_item: string,
    itemid: string
  ): Observable<any> {
    let header = new HttpHeaders();
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
      headers: header,
    });
  }

  settrxhistory(
    id_product: string,
    userid: string,
    itemid: string,
    amount: string,
    tx_hash: string,
    tx_type: string,
    data_item: string = "",
    email: string,
    tokenPushNotification: string = "",
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("id_product", id_product)
      .set("userid", userid)
      .set("itemid", itemid)
      .set("amount", amount)
      .set("tx_hash", tx_hash)
      .set("tx_type", tx_type)
      .set("item", data_item)
      .set("email", email)
      .set("tokenPushNotification", tokenPushNotification)

    return this.httpClient.post(
      this.controllerapi +
        "trx_history/" +
        id_product +
        "/" +
        userid +
        "/" +
        itemid +
        "/" +
        amount +
        "/" +
        tx_hash +
        "/" +
        tx_type +
        "/" +
        data_item +
        "/" +
        email +
        "/" +
        tokenPushNotification,
      body,
      { headers: header, responseType: "text" }
    );
  }

  setroyaltytrxhistory(
    userid: string,
    owner: string,
    itemid: string,
    amount: string,
    tx_hash: string,
    tx_type: string,
    data_item: string
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "trx_royalty_history",
      body,
      { headers: header }
    );
  }

  gettrxhistoryall(): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    return this.httpClient.post(
      this.controllerapi + "gettrxhistoryall_mp",
      body,
      { headers: header }
    );
  }

  gettrxhistoryid(id): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    return this.httpClient.post(
      this.controllerapi + "gettrxhistoryid_mp/" + id,
      body,
      { headers: header }
    );
  }

  gettrxhistoryalldg(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header
      .append("Content-Type", "application/x-www-form-urlencoded")
      // header.append( 'No-Auth', 'True')
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_dragon", {
      headers: header,
    });
  }

  gettrxhistoryallfood(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header
      .append("Content-Type", "application/x-www-form-urlencoded")
      // header.append( 'No-Auth', 'True')
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_food", {
      headers: header,
    });
  }

  gettrxhistoryallbtr(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header
      .append("Content-Type", "application/x-www-form-urlencoded")
      // header.append( 'No-Auth', 'True')
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_battery", {
      headers: header,
    });
  }

  gettrxhistoryallegg(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header
      .append("Content-Type", "application/x-www-form-urlencoded")
      // header.append( 'No-Auth', 'True')
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    // return this.httpClient.post(this.controllerapi + "get_trx_history_all",body
    //                             ,{headers : header}
    //                           )
    return this.httpClient.post(this.controllerapi + "get_trx_egg", {
      headers: header,
    });
  }

  //get_history_item_all

  gettrxhistoryitem(): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    return this.httpClient.post(
      this.controller + "get_history_item_all",
      body,
      { headers: header }
    );
  }

  get_bnb_balance(address: string = "", provider: any): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    let body = new HttpParams()
      .set("address", address)
      .set("provider", provider);

    return this.httpClient.post(this.controllerjs + "get_bnb_balances", body, {
      headers: header,
    });
  }

  login(email: string = "", password: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    let body = new HttpParams().set("email", email).set("password", password);

    return this.httpClient.post(this.controller + "login", body, {
      headers: header,
    });
  }

  register(
    username: string = "",
    email: string = "",
    wallet_address = "",
    password: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  transferDragon(owner: string = "", userid: string = "", itemid: string = "") {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    let body = new HttpParams()
      .set("owner", owner)
      .set("userid", userid)
      .set("itemid", itemid);

    return this.httpClient.post(
      this.link +
        "?PreviousOwnerId=" +
        owner +
        "&NewOwnerId=" +
        userid +
        "&DragonObjectId=" +
        itemid,
      { headers: header }
    );
  }

  registermp(
    username: string = "",
    email: string = "",
    wallet_address = "",
    password: string = "",
    acceptTerms: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNoUidmp(nouid: string = "", email: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("nouid", nouid);
    body.append("email", email);

    return this.httpClient.post(this.controllerapi + "insertNoUid_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  activationmp(kodeaktifasi: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("kodeaktifasi", kodeaktifasi);

    return this.httpClient.post(this.controllerapi + "aktifasi_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  get_user_by_kodeaktifasi(
    kodeaktifasi: string = "",
    username: string = "",
    email: string = "",
    wallet_address = "",
    password: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new HttpParams();
    body.append("kodeaktifasi", kodeaktifasi);
    body.append("username", username);
    body.append("email", email);
    body.append("wallet_address", wallet_address);
    body.append("password", password);

    return this.httpClient.post(this.controllerapi + "get_user_by_kode", body, {
      headers: header,
      responseType: "text",
    });
  }

  resetpassmp(password: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("password", password);

    return this.httpClient.post(this.controllerapi + "resetpass_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getcurrentoragon2(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    return this.httpClient.get(this.latestOragon, { headers: header });
  }

  usersmp(email: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new HttpParams();
    body.append("email", email);

    return this.httpClient.post(
      this.controllerapi + "checkuseremail_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  GetAllUsers(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new HttpParams();

    return this.httpClient.post(
      this.controllerapi + "getallusers_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  balancePlayers(wallet_address: string = "") {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    let body = new HttpParams().set("wallet_address", wallet_address);

    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x88c676fc777c225b69869aeef5d10535de1e4f5d&address=" +
        wallet_address +
        "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU",
      { headers: header }
    );
  }

  balanceBNBPlayers(wallet_address: string = "") {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    let body = new HttpParams().set("wallet_address", wallet_address);

    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=balance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=" +
        wallet_address +
        "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU",
      { headers: header }
    );
  }

  balanceBUSDPlayers(wallet_address: string = "") {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    let body = new HttpParams().set("wallet_address", wallet_address);

    return this.httpClient.post("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&address=" +
        wallet_address +
        "&tag=latest&apikey=TAXG7S7XWY4CIZDTIHVYDXR8DX8BXBNRYU",
      { headers: header }
    );
  }

  useriditemidmp(
    uid: string = "",
    ItemId: string = "",
    attack: string = "",
    defense: string = "",
    rarity: string = "",
    level: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "checkuiditemid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  checkitem_dragonmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "checkitems_dragonmp", {
      headers: header,
      responseType: "text",
    });
  }

  dumpitemsmp(
    uid: string = "",
    itemid: string = "",
    objectid: string = "",
    attack: string = "",
    defense: string = "",
    rarity: string = "",
    level: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  itemsdetailmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "checkitemsdetail_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  edititemiddumpitemsmp(
    ObjectId: string = "",
    ItemId: string = "",
    Id: string = "",
    position: string = "",
    price: string = "",
    owner: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "edititemiddumpitems_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  editpricedumpitemsmp(
    Id: string = "",
    uid: string = "",
    ItemId: string = "",
    price: string = "",
    attack: string = "",
    defense: string = "",
    rarity: string = "",
    level: string = "",
    owner: string = "",
    position: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  editpricedumpitemsBIDmp(
    Id: string = "",
    uid: string = "",
    ItemId: string = "",
    price: string = "",
    attack: string = "",
    defense: string = "",
    rarity: string = "",
    level: string = "",
    owner: string = "",
    position: string = "",
    Type: string = "",
    CreatedAt: string = "",
    BidList: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  editpricedumpitemsBIDNOWmp(
    DocId: string = "",
    BidList: string = "",
    PriceNow: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsBIDNOW_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  editpricedumpitemseggBIDNOWmp(
    DocId: string = "",
    BidList: string = "",
    PriceNow: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);

    return this.httpClient.post(
      this.controllerapi + "editdumpitemseggBIDNOW_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  editpricedumpitemsbatteryBIDNOWmp(
    DocId: string = "",
    BidList: string = "",
    PriceNow: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("BidList", BidList);
    body.append("PriceNow", PriceNow);

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsbatteryBIDNOW_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  addBidListmp(
    DocId: string = "",
    uidBid: string = "",
    priceBid: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  addSellListmp(
    DocId: string = "",
    uidSell: string = "",
    priceSell: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  addcartBidListmp(
    idBid: string = "",
    cartCreatedBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);

    return this.httpClient.post(
      this.controllerapi + "addcartBidList_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getlastBidIdmp(
    idBid: string = "",
    cartCreatedBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);

    return this.httpClient.post(this.controllerapi + "getlastBidId_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  deletecartBidListmp(
    idBid: string = "",
    cartCreatedBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);
    body.append("cartCreatedBid", cartCreatedBid);

    return this.httpClient.post(
      this.controllerapi + "deletecartBidList_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellhargamp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellharga_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getlowsellhargamp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getlowsellharga_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getatozsellhargamp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getatozsellharga_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselldgmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getselldg_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselldgdatemp(EditAt: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("EditAt", EditAt);

    return this.httpClient.post(this.controllerapi + "getselldgdate_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getselldglimitmp(): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    return this.httpClient.get(this.controllerapi + "getselldglimit_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselldgidmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams()
      .set("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "getselldgid_mp/" + DocId, body, {
      headers: header,
      responseType: "text",
    });
  }

  getselldgUsermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(this.controllerapi + "getselldguser_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getselldgUserownedmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getselldguserowned_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getbgdgUserownedmp(uid: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "getdgdguserowned_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getselldgBIDmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getselldgBID_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselldgidBIDmp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getselldgidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getshistorydgidBIDmp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getshistorydgidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getswinhistorydgidBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "getswinhistorydgidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  checkswinhistorydgidBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "checkswinhistorydgidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationBidmp(
    nouid: string = "",
    tokenPushNotification: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("nouid", nouid)
      .set("tokenPushNotification", tokenPushNotification);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationBid_mp/" +
        nouid +
        "/" +
        tokenPushNotification,
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationOwnerBidmp(
    username: string = "",
    nouid: string = "",
    tokenPushNotification: string = "",
    uidBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("username", username)
      .set("nouid", nouid)
      .set("tokenPushNotification", tokenPushNotification)
      .set("uidBid", uidBid);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationOwnerBid_mp/" +
        username +
        "/" +
        nouid +
        "/" +
        tokenPushNotification +
        "/" +
        uidBid,
      body,
      { headers: header, responseType: "text" }
    );
  }

  gettokenOwnermp(nouid: string = ""): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams().set("nouid", nouid);

    return this.httpClient.post(
      this.controllerapi + "gettokenOwner_mp/" + nouid,
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationaddBidmp(
    nouid: string = "",
    notifBid: string = "",
    uidBid: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("nouid", nouid)
      .set("notifBid", notifBid)
      .set("uidBid", uidBid)
      .set("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationaddBid_mp/" +
        nouid +
        "/" +
        notifBid +
        "/" +
        uidBid +
        "/" +
        DocId,
      body,
      { headers: header, responseType: "text" }
    );
  }

  setNotificationBidOwnermp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setNotificationBidOwner_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getNotificationBidmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getNotificationBid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getNotificationSellDragonmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getNotificationSellDragon_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getNotificationSellEggmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getNotificationSellEgg_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  readNotificationBidmp(idBid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idBid", idBid);

    return this.httpClient.post(
      this.controllerapi + "readNotificationBid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  readNotificationSellmp(idSell: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idSell", idSell);

    return this.httpClient.post(
      this.controllerapi + "readNotificationSell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getNotificationLosesBidmp(
    uidBid: string = "",
    idBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);
    body.append("idBid", idBid);

    return this.httpClient.post(
      this.controllerapi + "getNotificationLosesBid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationtoWinBidmp(
    nouid: string = "",
    tokenPushNotification: string = "",
    idBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("nouid", nouid)
      .set("tokenPushNotification", tokenPushNotification)
      .set("idBid", idBid);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationtoWinBid_mp/" +
        nouid +
        "/" +
        tokenPushNotification +
        "/" +
        idBid,
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationtoLoseBidmp(
    nouid: string = "",
    tokenPushNotification: string = "",
    idBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("nouid", nouid)
      .set("tokenPushNotification", tokenPushNotification)
      .set("idBid", idBid);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationtoLoseBid_mp/" +
        nouid +
        "/" +
        tokenPushNotification +
        "/" +
        idBid,
      body,
      { headers: header, responseType: "text" }
    );
  }

  postNotificationtoLosesBidmp(
    nouid: string = "",
    tokenPushNotification: string = "",
    idBid: string = ""
  ): Observable<any> {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", this.fcm_key);
    let body = new HttpParams()
      .set("nouid", nouid)
      .set("tokenPushNotification", tokenPushNotification)
      .set("idBid", idBid);

    return this.httpClient.post(
      this.controllerapi +
        "postNotificationtoLosesBid_mp/" +
        nouid +
        "/" +
        tokenPushNotification +
        "/" +
        idBid,
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemsdragontosellmp(
    DocId: string = "",
    price: string = "",
    CreatedAt: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);
    body.append("CreatedAt", CreatedAt);

    return this.httpClient.post(
      this.controllerapi + "itemsdragontosell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  selldragontoitemsmp(uid: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "selldragontoitems_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  removedragonDocIdBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "removedragonDocIdBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemsdragontobidmp(
    DocId: string = "",
    PriceNow: string = "",
    Type: string = "",
    CreatedAt: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("PriceNow", PriceNow);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);

    return this.httpClient.post(
      this.controllerapi + "itemsdragontobid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  // EGG
  getselleggmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellegg_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselleggidmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "getselleggid_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getlowselleggmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getlowsellegg_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getatozselleggmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getatozsellegg_mp", {
      headers: header,
      responseType: "text",
    });
  }

  editpricedumpitemseggmp(
    uid: string = "",
    DocId: string = "",
    ItemId: string = "",
    position: string = "",
    price: string = "",
    owners: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "itemseggtosell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemseggtosellmp(DocId: string = "", price: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);

    return this.httpClient.post(
      this.controllerapi + "itemseggtosell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemseggtoincubatormp(DocId: string = "", CreatedAt: string = "",): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("CreatedAt", CreatedAt);

    return this.httpClient.post(
      this.controllerapi + "itemseggtoincubator_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemseggtobidmp(
    DocId: string = "",
    PriceNow: string = "",
    Type: string = "",
    CreatedAt: string = "",
    bidTime: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  hmsBIDmp(DocId: string = "", hours: string = "", minutes: string = "", seconds: string = "", fulltime: string = ""): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "hmsBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  gethmsBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "gethmsBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  selleggtoitemsmp(uid: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "selleggtoitems_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  removeeggDocIdBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "removeeggDocIdBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  editdumpitemseggmp(
    uid: string = "",
    DocId: string = "",
    ItemId: string = "",
    position: string = "",
    owners: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsegg_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getselleggUsermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellegguser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getselleggUserownedmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellegguserowned_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getselleggBIDmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getselleggBID_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselleggidBIDmp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getselleggidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  // BATTERY
  editdumpitemsbatterymp(
    uid: string = "",
    DocId: string = "",
    ItemId: string = "",
    position: string = "",
    owners: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsbattery_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbatterymp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellbattery_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getsellbatteryidmp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getsellbatteryid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbattery24Usermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbattery24user_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbatterysellUsermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbatteryselluser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbatteryUserallmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbatteryuserall_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbattery12Usermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbattery12user_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbattery8Usermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbattery8user_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemsbatterytosellmp(
    DocId: string = "",
    price: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("price", price);

    return this.httpClient.post(
      this.controllerapi + "itemsbatterytosell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemsbatterytoincubatormp(DocId: string = "", CreatedAt: string = "",): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("CreatedAt", CreatedAt);

    return this.httpClient.post(
      this.controllerapi + "itemsbatterytoincubator_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  itemsbatterytobidmp(
    DocId: string = "",
    PriceNow: string = "",
    Type: string = "",
    CreatedAt: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);
    body.append("PriceNow", PriceNow);
    body.append("Type", Type);
    body.append("CreatedAt", CreatedAt);

    return this.httpClient.post(
      this.controllerapi + "itemsbatterytobid_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  sellbatterytoitemsmp(uid: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "sellbatterytoitems_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  removebatteryDocIdBIDmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "removebatteryDocIdBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbatteryUserownedmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellbatteryuserowned_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellbatteryBIDmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellbatteryBID_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getsellbatteryidBIDmp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getsellbatteryidBID_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  // FOOD
  editdumpitemsfoodmp(
    uid: string = "",
    DocId: string = "",
    ItemId: string = "",
    position: string = "",
    length: string = "",
    owners: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "editdumpitemsfood_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellfoodmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellfood_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getsellfoodUsermp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellfoodUserstoremp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getsellfooduserstore_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellfoodUserqtymp(
    uid: string = "",
    lengthFood: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("lengthFood", lengthFood);

    return this.httpClient.post(
      this.controllerapi + "getsellfooduserqty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatesellfoodUserqtymp(
    uid: string = "",
    ItemId: string = "",
    lengthFood: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("lengthFood", lengthFood);

    return this.httpClient.post(
      this.controllerapi + "updatesellfooduserqty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setsellfoodUsermp(
    uid: string = "",
    iditemsFood: string = "",
    qty: string = "",
    price: string = "",
    HVP: string = "",
    ItemId: string = "",
    owner: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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

    return this.httpClient.post(
      this.controllerapi + "setsellfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatesellfoodUsermp(
    uid: string = "",
    ItemId: string = "",
    transactionHash: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("ItemId", ItemId);
    body.append("transactionHash", transactionHash);

    return this.httpClient.post(
      this.controllerapi + "updatesellfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setsellDetailfoodUsermp(
    uid: string = "",
    iditemssellFood: string = "",
    HVP: string = "",
    ItemId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("iditemssellFood", iditemssellFood);
    body.append("HVP", HVP);
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "setsellDetailfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellDetailfoodUsermp(ItemId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "getsellDetailfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatesellDetailfoodUsermp(
    iditemssellFood: string = "",
    ItemId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("iditemssellFood", iditemssellFood);
    body.append("ItemId", ItemId);

    return this.httpClient.post(
      this.controllerapi + "updatesellDetailfooduser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getsellfoodidmp(iditemsFood: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("iditemsFood", iditemsFood);

    return this.httpClient.post(this.controllerapi + "getsellfoodid_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  // FASHION
  getselljaketsmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getselljakets_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getsellcommonjaketsmp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "getsellcommonjakets_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getselljaketsidmp(id_product: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_product", id_product);

    return this.httpClient.post(this.controllerapi + "getselljaketsid_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getselljaketsUserownedmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(this.controllerapi + "getselljaketsUserowned_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getsellcommonjaketsownedmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(this.controllerapi + "getsellcommonjaketsowned_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getselljaketsUserownedqrcodemp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "getselljaketsUserownedqrcode_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getOngkirmp(city: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("city", city);

    return this.httpClient.post(this.controllerapi + "getOngkir_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  insertNewJaketMetalicanamp(
    id_orders: string = "",
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    lengthJakets: string = "", 
    owners: string = "",
    qrcode: string = "",
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }


  // STORE-API
  getstoredata(): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams();

    return this.httpClient.get(this.controllerapi + "getstoredata_mp", {
      headers: header,
      responseType: "text",
    });
  }

  getstoredetail(id_product: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_product", id_product);

    return this.httpClient.post(
      this.controllerapi + "getstoredetail_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getcurrentbnb(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    return this.httpClient.get(this.latestBNB, { headers: header });
  }

  getcurrentbusd(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("No-Auth", "True");

    return this.httpClient.get(this.latestBUSD, { headers: header });
  }

  getstorecart(user_uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("user_uid", user_uid);

    return this.httpClient.post(this.controllerapi + "getstorecart_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getstoreprogress(user_uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("user_uid", user_uid);

    return this.httpClient.post(this.controllerapi + "getstoreprogress_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getbidcartdragon(uidBid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);

    return this.httpClient.post(this.controllerapi + "getbidcartdragon_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getbidcartegg(uidBid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);

    return this.httpClient.post(this.controllerapi + "getbidcartegg_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getbidcartbattery(uidBid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uidBid", uidBid);

    return this.httpClient.post(this.controllerapi + "getbidcartbattery_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  setstorecart(
    id_product: string = "",
    user_uid: string = "",
    addressw: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  updatestorecart(
    id_cart: string = "",
    user_uid: string = "",
    addressw: string = "",
    email: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("email", email);

    return this.httpClient.post(
      this.controllerapi + "updatestorecart_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setActiveCart(
    id_cart: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);

    return this.httpClient.post(
      this.controllerapi + "setActiveCart_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setactiveidcart(
    id_cart: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);

    return this.httpClient.post(
      this.controllerapi + "setactiveidcart_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setnoactiveidcart(
    id_cart: string = "",
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);

    return this.httpClient.post(
      this.controllerapi + "setnoactiveidcart_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatestoreprogress(
    file_orders: string = "",
    id_orders: string = "",
    user_uid: string = "",
    addressw: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("file_orders", file_orders);
    body.append("id_orders", id_orders);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);

    return this.httpClient.post(
      this.controllerapi + "updatestoreprogress_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatestorecartHome(
    id_cart: string = "",
    user_uid: string = "",
    addressw: string = "",
    transactionhash: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_cart", id_cart);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("transactionhash", transactionhash);

    return this.httpClient.post(
      this.controllerapi + "updatestorecart_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  updatestoreprogressHome(
    id_orders: string = "",
    user_uid: string = "",
    addressw: string = "",
    file_orders: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("id_orders", id_orders);
    body.append("user_uid", user_uid);
    body.append("addressw", addressw);
    body.append("file_orders", file_orders);

    return this.httpClient.post(
      this.controllerapi + "updatestoreprogress_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  dumpeggtomp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "sendeggto_mp", {
      headers: header,
      responseType: "text",
    });
  }

  editdumpeggtomp(
    itemid: string = "",
    status_kirim: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);

    return this.httpClient.post(this.controllerapi + "editsendeggto_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  dumpbatterytomp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "sendbatteryto_mp", {
      headers: header,
      responseType: "text",
    });
  }

  editdumpbatterytomp(
    itemid: string = "",
    status_kirim: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);

    return this.httpClient.post(
      this.controllerapi + "editsendbatteryto_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  dumpfoodtomp(): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");

    return this.httpClient.post(this.controllerapi + "sendfoodto_mp", {
      headers: header,
      responseType: "text",
    });
  }

  editdumpfoodtomp(
    itemid: string = "",
    status_kirim: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("itemid", itemid);
    body.append("status_kirim", status_kirim);

    return this.httpClient.post(
      this.controllerapi + "editsendfoodto_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setkycuser(
    nouid: string = "",
    ipAddress: string = "",
    geoLocation: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  // background
  getdgbackgroundmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getdgbackground_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  checkbackgroundmp(
    uid: string = "",
    DocId: string = "",
    statusbayarbackground: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);
    body.append("statusbayarbackground", statusbayarbackground);

    return this.httpClient.post(
      this.controllerapi + "checkbackground_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  uploadBackgroundmp(imgBg: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("imgBg", imgBg);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "uploadbackground_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  paybackgroundmp(
    uid: string = "",
    DocId: string = "",
    imgBg: string = "",
    statusbayarbackground: string = "",
    transactionhash: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  addbackgroundmp(
    uid: string = "",
    DocId: string = "",
    imgbackground: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  getallbackgroundmp(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(
      this.controllerapi + "getallbackground_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getallbackgroundsellmp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "getallbackgroundsell_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  favoritedmp(uid: string = "", DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "favorited_mp", body, {
      headers: header,
      responseType: "text",
    });
  }

  getdgroyaltymp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams()
      .set("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "getdgroyalty_mp/" + DocId, body, {
      headers: header,
      responseType: "text",
    });
  }

  getposroyaltymp(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("X-Api-Key", this.api_key);
    let body = new HttpParams()
      .set("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "getposroyalty_mp/" + DocId, body, {
      headers: header,
      responseType: "text",
    });
  }

  setdgfirstroyaltymp(
    uid: string = "",
    pos_1: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_1", pos_1);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgfirstroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setdgsecondroyaltymp(
    uid: string = "",
    pos_2: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_2", pos_2);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgsecondroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setdgthirdroyaltymp(
    uid: string = "",
    pos_3: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_3", pos_3);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgthirdroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setdgfourthroyaltymp(
    uid: string = "",
    pos_4: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_4", pos_4);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgfourthroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setdgfifthroyaltymp(
    uid: string = "",
    pos_5: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_5", pos_5);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgfifthroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  setdgsixthroyaltymp(
    uid: string = "",
    pos_6: string = "",
    DocId: string = ""
  ): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);
    body.append("pos_6", pos_6);
    body.append("DocId", DocId);

    return this.httpClient.post(
      this.controllerapi + "setdgsixthroyalty_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  getroyaltiesUsermp(userid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);

    return this.httpClient.post(
      this.controllerapi + "getroyaltiesUser_mp",
      body,
      { headers: header, responseType: "text" }
    );
  }

  gettrxhistory(userid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);

    return this.httpClient.post(this.controllerapi + "get_trx_history", body, {
      headers: header,
      responseType: "text",
    });
  }

  getpointhistory(userid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("userid", userid);

    return this.httpClient.post(this.controllerapi + "get_point_history", body, {
      headers: header,
      responseType: "text",
    });
  }

  getpointhistoryall(uid: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("uid", uid);

    return this.httpClient.post(this.controllerapi + "get_point_historyall", body, {
      headers: header,
      responseType: "text",
    });
  }

  getpointhistorybyid(idPoint: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("idPoint", idPoint);

    return this.httpClient.post(this.controllerapi + "get_idpoint_history", body, {
      headers: header,
      responseType: "text",
    });
  }

  getitemhistory(DocId: string = ""): Observable<any> {
    let header = new HttpHeaders();
    header.append("Accept", "plain/text");
    header.append("Content-Type", "application/x-www-form-urlencoded");
    header.append("enctype", "multipart/form-data");
    header.append("No-Auth", "True");
    let body = new FormData();
    body.append("DocId", DocId);

    return this.httpClient.post(this.controllerapi + "get_item_history", body, {
      headers: header,
      responseType: "text",
    });
  }

  insertNewDragonmp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    AttackPoint: string = "", 
    DefensePoint: string = "", 
    Exp: string = "", 
    HP: string = "", 
    Hunger: string = "", 
    Level: string = "", 
    MaxHP: string = "", 
    MaxHunger: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  updateNewDataClaimmp(
    uid: string = "",
    ItemId: string = "", 
    qtyClaim: string = ""
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  updateNewDataDragonmp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    AttackPoint: string = "", 
    DefensePoint: string = "", 
    Exp: string = "", 
    HP: string = "", 
    Hunger: string = "", 
    Level: string = "", 
    MaxHP: string = "", 
    MaxHunger: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNewFoodmp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    lengthFood: string = "", 
    owners: string = "", 
    status: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNewBatterymp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    lengthBattery: string = "", 
    owners: string = "", 
    status: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNewBattery12mp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    lengthBattery: string = "", 
    owners: string = "", 
    status: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNewBattery8mp(
    uid: string = "", 
    Id: string = "", 
    ItemId: string = "", 
    lengthBattery: string = "", 
    owners: string = "", 
    status: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }

  insertNewPointmp(
    uid: string = "", 
    qtyPoint: string = "", 
    status: string = "", 
    ): Observable<any> {
    let header = new HttpHeaders();
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
      responseType: "text",
    });
  }
}
