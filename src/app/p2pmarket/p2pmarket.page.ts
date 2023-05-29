import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";
import { IonInfiniteScroll } from "@ionic/angular";
import { environment } from "../../environments/environment";

import { SendData } from "../send-data";
const Tx = require("ethereumjs-tx").Transaction;
import { interval, Subscription } from "rxjs";
import { Location } from "@angular/common";
import CryptoJS from "crypto-js";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';
import { Platform } from '@ionic/angular';

// AngularFire
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import * as QRCode from 'qrcode';
import axios from 'axios';

// Services
import { AuthService } from "../services/auth.service";
import { ProviderService } from "../provider.service";
import { MessagingService } from '../services/messaging.service';

// Web3
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      network: "binance",
      infuraId: "46a670cff8894b729ea30027244e4641",
      rpc: {
        56: "https://oragonbsc.io/binance/",
      },
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

@Component({
  selector: "app-p2pmarket",
  templateUrl: "p2pmarket.page.html",
  styleUrls: ["p2pmarket.page.scss"],
})
export class P2pmarketPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // Root Object
    profile = null;
    ipAddress = "";
    isLogin: any;
    percentRoyalty: any;
    valueRoyalty: any;
    subscription: Subscription;

  // AGM
    latitude!: number;
    longitude!: number;
    zoom!: number;

  // WEB3
    states: string = "";
    wallet: string = "";
    wallets: string = "";
    username: string = "";
    email: string = "";
    price: any = "";
    fee: any = "";
    item_name: any = "";
    state_buy: any = "";
    connect: any;
    kind: any = "";
    bnb_balance: any = "...";
    oragon_balance_display: any = "...";
    oragon_balance: any = "";
    oragon_balance2: any = "";
    in_dollar: any = "...";
    price_display: any = "";
    fee_display: any = "";
    status_1: any = "0";
    status_2: any = "0";
    count_roulette: any;
    used: any;
    in_oragon_100c: any;
    in_oragon_12c: any;
    in_oragon10: any;
    in_oragon1: any;
    in_oragon102: any;
    in_oragon12: any;
    in_oragon12c: any;
    in_oragon102c: any;
    latesttenOragon: any;
    latestoneOragon: any;
    balanceORGNPlayers: any;
    balanceBNBPlayers: any;
    balanceBUSDPlayers: any;

  //WALLET PARAM
    private web3js: any;
    private accounts: any;
    address_to: any;
    amount_to: any;
    provider: any;
    balance1: any;
    balance2: any;
    web3Modal: any;
    tokenInst: any;
    web3provider: any;
    check: any;
    datas_oragon: any;
    current_oragon: any;
    current_bnb: any;
    payment_count = 0;
    tokenABI = [
      // balanceOf
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
      },
      // transfer
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        type: "function",
      },
    ];

  // Store
    status_direct_buy: any = "1";
    stateHash: any;
    localStorage: any;
    parse_localStorage: any;
    globalID: any;

    storecart: any;
    carts: any;
    cartID: any;
    cartUID: any;
    cartCount: any;
    cartNull: any;
    cartNotNull: any;
    cartStatus: any;
    cartDeskripsi: any;
    cartQty: any;
    cartPrice: any;
    actualcartPrice : any;
    cartImg: any;
    cartPriceBNB: any;
    uidegg: any;
    uidbattery: any;
    uidfood: any;

  // P2P Market
    lastseen: any;
    lastcategory: any;
    dragons: any;
    bgLength: any;
    dragonsBID: any;
    dragonsdate: any;
    dragonsownedbg : any;
    hargaEgg: any;
    eggLowest: any;
    atozEgg: any;
    currentp2p: any;
    dragonDetail: any;
    marketp2pdragonDocId: any;
    marketp2pdragonID: any;
    marketp2pdragonImg: any;
    marketp2pdragonAttack: any;
    marketp2pdragonDefense: any;
    marketp2pdragonLevel: any;
    marketp2pdragonHP: any;
    marketp2pdragonRarity: any;
    marketp2pdragonExp: any;
    marketp2pdragonprice: any;
    marketp2pdragonpriceUSD: any;
    marketp2pdragonpriceBNB: any;
    marketp2pdragonowner: any;
    marketp2pdragonFee: any;
    marketp2pdragonDate: any;
    marketp2pdragonBG: any;
    marketp2pdragonImgBG : any;
    marketp2pdragonfavorited: any;
    marketp2pdragontime : any;
    priceRoyalty_display: any;
    fee_royalty: any;
    current_data: any;
    owner_address: any;
    sortdragons: any;

    sortp2pmarket: any;
    dragonsHigh: any;
    dragonsLow: any;
    dragonsAtoZ: any;
    marketp2pdragonLength: any;
    btnclickcategory: any;

    eggsHigh: any;
    eggsLow: any;
    eggsHAtoZ: any;
    eggDetail: any;
    marketp2peggLength: any;
    marketp2peggDocId: any;
    marketp2peggID: any;
    marketp2peggImg: any;
    marketp2peggprice: any;
    marketp2peggpriceUSD: any;
    marketp2peggowner: any;
    marketp2peggFee: any;
    marketp2peggDate: any;
    sorteggs: any;

    batteriesHigh: any;
    batteriesLow: any;
    batteriesHAtoZ: any;
    batteryDetail: any;
    marketp2pbatteryLength: any;
    marketp2pbatteryDocId: any;
    marketp2pbatteryID: any;
    marketp2pbatteryImg: any;
    marketp2pbatteryprice: any;
    marketp2pbatterypriceUSD: any;
    marketp2pbatteryowner: any;
    marketp2pbatteryFee: any;
    marketp2pbatteryDate: any;

    foodsHigh: any;
    foodLow: any;
    foodHAtoZ: any;
    foodDetail: any;
    marketp2pfoodLength: any;
    marketp2pfoodOID: any;
    marketp2pfoodID: any;
    marketp2pfoodImg: any;
    marketp2pfoodprice: any;
    marketp2pfoodpriceUSD: any;
    marketp2pfoodpriceBNB: any;
    marketp2pfoodowner: any;
    marketp2pfoodQty: any;
    marketp2pfoodHVP: any;
    marketp2pfoodFee: any;
    marketp2pfoodDate: any;
    sortfoodsowned: any;
    public current_qty: any;
    input_stock: any;

    input_price: any;
    marketp2pBIDdragonDocId: any;
    marketp2pBIDdragonID: any;
    marketp2pBIDdragonImg: any;
    marketp2pBIDdragonAttack: any;
    marketp2pBIDdragonDefense: any;
    marketp2pBIDdragonLevel: any;
    marketp2pBIDdragonHP: any;
    marketp2pBIDdragonMaxHP : any;
    marketp2pBIDdragonHunger : any;
    marketp2pBIDdragonMaxHunger : any;
    marketp2pdragonHunger : any;
    marketp2pdragonMaxHP : any;
    marketp2pdragonMaxHunger : any;
    marketp2pBIDdragonRarity: any;
    marketp2pBIDdragonExp: any;
    marketp2pBIDdragonowner: any;
    marketp2pBIDdragonprice: any;
    marketp2pBIDdragontype: any;
    marketp2pBIDdragonuidBid: any;
    marketp2pBIDdragonpriceBid : any;
    marketp2pBIDdragontime: any;
    marketp2pdragontimeCount: any;
    marketp2pBIDdragonpriceNow: any;
    marketp2pdragonBIDfavorited : any;
    marketp2pBIDdragonBG : any;
    marketp2pBIDdragonImgBG : any;
    marketp2pBIDdragoncreatedBid : any;
    dragonBidHistory : any;
    dragonBidHistoryWin : any;
    dragonBidHistoryWinuidBid : any;
    dragonBidHistorycartwinBid : any;
    latest_date: any;
    timeBID: any;
    marketp2pBIDdragonLength : any;

    marketp2pBIDeggDocId: any;
    marketp2pBIDeggID: any;
    marketp2pBIDeggImg: any;
    marketp2pBIDeggAttack: any;
    marketp2pBIDeggDefense: any;
    marketp2pBIDeggLevel: any;
    marketp2pBIDeggHP: any;
    marketp2pBIDeggRarity: any;
    marketp2pBIDeggExp: any;
    marketp2pBIDeggowner: any;
    marketp2pBIDeggprice: any;
    marketp2pBIDeggtype: any;
    marketp2pBIDegguidBid: any;
    marketp2pBIDeggpriceBid : any;
    marketp2pBIDeggtime: any;
    marketp2pBIDeggLastUpdate : any;
    marketp2pBIDeggbidTime : any;
    marketp2peggtimeCount: any;
    marketp2pBIDeggpriceNow: any;
    marketp2peggBIDfavorited : any;
    marketp2pBIDeggBG : any;
    marketp2pBIDeggImgBG : any;
    marketp2pBIDeggcreatedBid : any;
    eggBidHistory : any;
    eggBidHistoryWin : any;
    eggBidHistoryWinuidBid : any;
    eggBidHistorycartwinBid : any;
    marketp2pBIDeggLength : any;
    eggsBID : any;
    marketp2peggBIDLength : any;

    marketp2pBIDbatteryDocId: any;
    marketp2pBIDbatteryID: any;
    marketp2pBIDbatteryImg: any;
    marketp2pBIDbatteryAttack: any;
    marketp2pBIDbatteryDefense: any;
    marketp2pBIDbatteryLevel: any;
    marketp2pBIDbatteryHP: any;
    marketp2pBIDbatteryRarity: any;
    marketp2pBIDbatteryExp: any;
    marketp2pBIDbatteryowner: any;
    marketp2pBIDbatteryprice: any;
    marketp2pBIDbatterytype: any;
    marketp2pBIDbatteryuidBid: any;
    marketp2pBIDbatterypriceBid : any;
    marketp2pBIDbatterytime: any;
    marketp2pbatterytimeCount: any;
    marketp2pBIDbatterypriceNow: any;
    marketp2pbatteryBIDfavorited : any;
    marketp2pBIDbatteryBG : any;
    marketp2pBIDbatteryImgBG : any;
    marketp2pBIDbatterycreatedBid : any;
    batteryBidHistory : any;
    batteryBidHistoryWin : any;
    batteryBidHistoryWinuidBid : any;
    batteryBidHistorycartwinBid : any;
    marketp2pBIDbatteryLength : any;
    batterysBID : any;
    marketp2pbatteryBIDLength : any;

    marketp2pBIDfoodDocId: any;
    marketp2pBIDfoodID: any;
    marketp2pBIDfoodImg: any;
    marketp2pBIDfoodAttack: any;
    marketp2pBIDfoodDefense: any;
    marketp2pBIDfoodLevel: any;
    marketp2pBIDfoodHP: any;
    marketp2pBIDfoodRarity: any;
    marketp2pBIDfoodExp: any;
    marketp2pBIDfoodowner: any;
    marketp2pBIDfoodprice: any;
    marketp2pBIDfoodtype: any;
    marketp2pBIDfooduidBid: any;
    marketp2pBIDfoodpriceBid : any;
    marketp2pBIDfoodtime: any;
    marketp2pfoodtimeCount: any;
    marketp2pBIDfoodpriceNow: any;
    marketp2pfoodBIDfavorited : any;
    marketp2pBIDfoodBG : any;
    marketp2pBIDfoodImgBG : any;
    marketp2pBIDfoodcreatedBid : any;
    foodBidHistory : any;
    foodBidHistoryWin : any;
    foodBidHistoryWinuidBid : any;
    foodBidHistorycartwinBid : any;
    marketp2pBIDfoodLength : any;
    foodsBID : any;
    marketp2pfoodBIDLength : any;

    days : any;
    hours: any;
    minutes : any;
    seconds : any;
    daysEgg : any;
    hoursEgg : any;
    minutesEgg : any;
    secondsEgg : any;
    hoursEg : any;
    minutesEg : any;
    secondsEg : any;
    daysBattery : any;
    hoursBattery : any;
    minutesBattery : any;
    secondsBattery : any;
    daysFood : any;
    hoursFood : any;
    minutesFood : any;
    secondsFood : any;
    daysSell : any;
    hoursSell : any;
    minutesSell : any;
    secondsSell : any;
    dragonsowned: any;
    input_price_actual: any;
    bid_now = false;
    bidlist: any;
    countdown: any;
    countdownCart : any;
    cartBidcount : any;
    bidCount : any;
    bidcart : any;
    hourscart: any;
    minutescart: any;
    secondscart: any;
    bidPrice : any;
    bidPriceUSD : any;
    state_BID : any;
    price_display_StepBID : any;
    tokenPushNotification : any;
    tokenNotif : any;
    carttimeleft : any;
    sesicart : any;
    executeTimeCart : any;
    counttimeCart : any;
    countdownWinner : any;
    countdownBid : any;
    loadWinBid : any;
    stateCollectionBid : any;
    switchToWinner = false;
    stateExecuteBid = false;

    positionRoyalty: any;
    marketp2pdragonRoyalty: any;
    marketp2pdragonRoyalty2 : any;
    marketp2pdragonRoyalty3 : any;
    marketp2pdragonRoyalty4 : any;
    marketp2pdragonRoyalty5 : any;
    marketp2pdragonRoyalty6 : any;
    pos_1 : any;
    pos_2 : any;
    pos_3 : any;
    pos_4 : any;
    pos_5 : any;
    
    totaroyalty_5a : any;
    totaroyalty_5b : any;
    totaroyalty_5c : any;
    totaroyalty_5d : any;
    totaroyalty_5e : any;
    totaroyalty_4a : any;
    totaroyalty_4b : any;
    totaroyalty_4c : any;
    totaroyalty_3a : any;
    totaroyalty_3b : any;
    totaroyalty_2a : any;
    totaroyalty_1a : any;
    message : any = null;
    readonly VAPID_PUBLIC_KEY = "BH6Pwg4y3wc38Ia1gQnr3mnhAU_StteRTEEIUAFoK14Ux_ci9ALK6RX76kSAUxQzC4FUJ0f6b9Ts-96xpK_I2NE";
    loadingtext : any;
    notifications : any;
    countNotifBid : any;
    sesion1 : any;
    sessioncountdownCart : any;
    dataNotif : any;
    notificationBid : any;
    selectedBid : any;
    countdowncheckdragonbidall : any;
    countdowncheckeggbidall : any;
    countdowncheckbatterybidall : any;
    hoursServer = 0;
    minutesServer = 0;
    secondsServer = 0;
    fulltimeServer : any;
    fulltimeServerEgg : any;

    hs = 0;
    ms = 0;
    ss = 0;
    isRunning = false;
    timerId = 0;
    bidTime = false;

    jakets : any;
    commonjakets : any;
    fashionjaketsLength : any;
    fashioncommonjaketsLength : any;
    currentfashion : any;
    sortfashion : any;
    jaketsDetail : any;
    jaketsHigh : any;
    marketfashionJaketsOID : any;
    marketfashionJaketsID : any;
    marketfashionJaketsImg : any;
    marketfashionJaketsowner : any;
    marketfashionJaketsHVP : any;
    marketfashionJaketsQty : any;
    marketfashionJaketsprice : any;
    marketfashionJaketspriceUSD : any;
    storeID : any;
    storeFee : any;
    storedetail : any;
    storeDeskripsi : any;
    apiKey = 'API_KEY';
    storeprogress : any;
    progressCount : any;
    ordersID : any;
    url : any;

    searchResults: any;
    resultCost : any;
    kurir : any;
    product_id : any;
    codeHoodie : any;
    ItemIdJaket  : any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global: ProviderService,
    public senddata: SendData,
    public datepipe: DatePipe,
    private push: Push,
    private messagingService: MessagingService,
    private platform: Platform,
  ) {
    this.subscription = new Subscription();
    this.platform = platform;
  }  

  async logout() {
    await this.authService.logout();
    window.location.replace('/tabs/home');
  }

  async login() {
    // await this.authService.logout();
    this.router.navigateByUrl("/tabs/login", { replaceUrl: true });
  }

  async alertWithdraw() {
    const alert = await this.alertController.create({
      header: "Congratulation !",
      message: "Now you can Withdraw, check your profile.",
      buttons: ["OK"],
    });
    await alert.present();
  }

  async ngOnInit() {
    this.connect = false;
    this.setCurrentLocation();
    this.status_direct_buy = 1;
    this.senddata.getcurrentoragon2().subscribe(
      (data: any) => {
        this.current_oragon = data.data.price;
        var Web3 = require("web3");
        // Gatcha 10X
        let currTen = (100 / this.current_oragon).toFixed();
        this.latesttenOragon = (Web3.utils.fromWei(currTen, "wei") * 1)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // Gatcha 1X
        let currOne = (12 / this.current_oragon).toFixed();
        this.latestoneOragon = (Web3.utils.fromWei(currOne, "wei") * 1)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        // console.log(this.latestoneOragon);
      },
      (error: any) => {}
    );

    this.senddata.getcurrentbnb().subscribe((data:any) => {
        this.current_bnb = data.data.price_BNB
        // console.log(this.current_bnb)
      },(error:any) => {
    })

    this.senddata.getcurrentbusd().subscribe((data:any) => {
        this.current_bnb = data.data.price_BNB
        // console.log(this.current_bnb)
      },(error:any) => {
    })

    this.isLogin = localStorage.getItem('isLogin');
    this.localStorage = localStorage.getItem('ProfileData');
    this.parse_localStorage = JSON.parse(this.localStorage);
    if(this.localStorage == undefined) {
      this.isLogin = '!';
    } else {
      this.isLogin = '';
      this.wallets = this.parse_localStorage.WalletAddress;
      this.username = this.parse_localStorage.PlayerName;
      this.globalID = this.parse_localStorage.Uid;
      this.email = this.parse_localStorage.Email;

      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.connect = false;
        this.stateHash = false;
        this.state_buy = 1;
        this.status_direct_buy = 1;
      } else {
        this.connect = true;
        this.stateHash = true;
        this.state_buy = 2;
        this.status_direct_buy = 2;
      }

      console.log("walletconnect", this.connect);
      console.log("stateHash", this.stateHash);
      console.log("state_buy", this.state_buy);
      console.log("status_direct_buy", this.status_direct_buy);

      this.senddata.balancePlayers(this.wallets).subscribe((dataB:any) => {
          var Web3 = require('web3');
          this.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceORGNPlayers", this.balanceORGNPlayers);
      },(error:any) => {});

      this.senddata.balanceBNBPlayers(this.wallets).subscribe((dataB:any) => {
          var Web3 = require('web3');
          this.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'ether')*1).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBNBPlayers", this.balanceBNBPlayers);
          
          this.valueRoyalty = this.balanceBNBPlayers / 100 * 100;
          this.percentRoyalty = this.balanceBNBPlayers * 100;
          if(this.valueRoyalty == 1) {
            localStorage.setItem('wd', '1');
            let wd = localStorage.getItem('wd');
            if(wd == '1') {
              this.alertWithdraw();
              return wd;
            }
            return this.valueRoyalty;
          }

      },(error:any) => {});

      this.senddata.balanceBUSDPlayers(this.wallets).subscribe((dataB:any) => {
          var Web3 = require('web3');
          this.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'ether')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log("balanceBUSDPlayers", this.balanceBUSDPlayers);
      },(error:any) => {});

      this.notificationBid = setInterval(async () => {
        // this.checknotificationBid();
        // this.checknotificationSellDragon();
        // this.checknotificationSellEgg();
        // this.checkeggBIDall();
      }, 3000);

      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.dragons = dataSell;
          this.marketp2pdragonLength = dataSell.length;
          for(let i in this.dragons) {
            if(this.dragons[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragons[i].ItemId).subscribe(
                (dataBackground: any) => {
                  this.dragonsownedbg = JSON.parse(dataBackground);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );
      loading.dismiss();
    }

    this.currentp2p = 0;
    this.sortp2pmarket = 1;
    this.currentfashion = 0;
    this.getstorecart();
    this.getstoreprogress();
    // console.log("category p2p", this.currentp2p);
    // console.log("sort p2p", this.sortp2pmarket);

    let lastitems = localStorage.getItem("lastseen");
    let lastseenfashion = localStorage.getItem("lastseenfashion");
    if (lastitems == "dragon") {
      this.lastseen = "dragon";
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.dragons = dataSell;
          this.marketp2pdragonLength = dataSell.length;
          for(let i in this.dragons) {
            if(this.dragons[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragons[i].ItemId).subscribe(
                (dataBackground: any) => {
                  this.dragonsownedbg = JSON.parse(dataBackground);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.marketp2peggLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.marketp2pbatteryLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.marketp2pfoodLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          console.log(this.marketp2pdragonLength);
          for(let i in this.dragonsowned) {
            if(this.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " +this.dragonsowned[i].qtyClaim+ " jaket metalicana")
              if(this.dragonsowned[i].qtyClaim > 0) {
                this.senddata.getselljaketsmp().subscribe(
                  (dataSell: any) => {
                    this.jakets = dataSell;
                    this.fashionjaketsLength = dataSell.length;
                    console.log(this.jakets)
                  },
                  (error: any) => {}
                );
              } else {
                console.log("unknown error")
              }
            } else {
              console.log("item tidak tersedia")
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getsellcommonjaketsmp().subscribe(
        (dataSell: any) => {
          this.commonjakets = dataSell;
          this.fashioncommonjaketsLength = dataSell.length;
          console.log(this.commonjakets)
        },
        (error: any) => {}
      );
    } else if (lastitems == "egg") {
      this.lastseen = "egg";
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
          this.marketp2peggLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.marketp2pbatteryLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.marketp2pfoodLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.marketp2pdragonLength = dataSell.length;
        },
        (error: any) => {}
      );
    } else if (lastitems == "battery") {
      this.lastseen = "battery";
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.batteriesHigh = dataSell;
          this.marketp2pbatteryLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.marketp2pfoodLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.marketp2peggLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.marketp2pdragonLength = dataSell.length;
        },
        (error: any) => {}
      );
    } else if (lastitems == "food") {
      this.lastseen = "food";
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.foodsHigh = dataSell;
          this.marketp2pfoodLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.marketp2pdragonLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.marketp2peggLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.marketp2pbatteryLength = dataSell.length;
        },
        (error: any) => {}
      );

      this.sessionCart();
    } else if (lastseenfashion == "jakets") {
      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          console.log(this.marketp2pdragonLength);
          for(let i in this.dragonsowned) {
            if(this.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " +this.dragonsowned[i].qtyClaim+ " jaket metalicana")
              if(this.dragonsowned[i].qtyClaim > 0) {
                this.senddata.getselljaketsmp().subscribe(
                  (dataSell: any) => {
                    this.jakets = dataSell;
                    this.fashionjaketsLength = dataSell.length;
                    console.log(this.jakets)
                  },
                  (error: any) => {}
                );
              } else {
                console.log("unknown error")
              }
            } else {
              console.log("item tidak tersedia")
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getsellcommonjaketsmp().subscribe(
        (dataSell: any) => {
          this.commonjakets = dataSell;
          this.fashioncommonjaketsLength = dataSell.length;
          console.log(this.commonjakets)
        },
        (error: any) => {}
      );
    } else {
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.dragons = dataSell;
          this.marketp2pdragonLength = dataSell.length;
          for(let i in this.dragons) {
            if(this.dragons[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragons[i].ItemId).subscribe(
                (dataBackground: any) => {
                  this.dragonsownedbg = JSON.parse(dataBackground);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.marketp2peggLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.marketp2pbatteryLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.marketp2pfoodLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          console.log(this.marketp2pdragonLength);
          for(let i in this.dragonsowned) {
            if(this.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " +this.dragonsowned[i].qtyClaim+ " jaket metalicana")
              if(this.dragonsowned[i].qtyClaim > 0) {
                this.senddata.getselljaketsmp().subscribe(
                  (dataSell: any) => {
                    this.jakets = dataSell;
                    this.fashionjaketsLength = dataSell.length;
                    console.log(this.jakets)
                  },
                  (error: any) => {}
                );
              } else {
                console.log("unknown error")
              }
            } else {
              console.log("item tidak tersedia")
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getsellcommonjaketsmp().subscribe(
        (dataSell: any) => {
          this.commonjakets = dataSell;
          this.fashioncommonjaketsLength = dataSell.length;
          console.log(this.commonjakets)
        },
        (error: any) => {}
      );
    }

    localStorage.setItem("tabs", "sell");
  }

  checknotificationSellDragon() {
    this.senddata.getNotificationSellDragonmp(this.globalID).subscribe(async (dataNotif: any) => {
      this.dataNotif = JSON.parse(dataNotif);
      for(let i in this.dataNotif) {
        // console.log("dataNotif", this.dataNotif[i].idSell);
        const toast2 = await this.toastCtrl.create({
          header: 'You have notifications',
          message: 'Your Dragon has been sold in ' + this.dataNotif[i].priceSell + ' BNB',
          icon: 'information-circle',
          position: 'top',
          color: 'success',
          buttons: [
            {
              text: 'Close',
              role: 'cancel',
              handler: () => {
                this.senddata.readNotificationSellmp(this.dataNotif[i].idSell).subscribe(async (dataRead: any) => {
                  // console.log(dataRead, 'notifications readed');
                });
              }
            }
          ]                    
        });
        await toast2.present();
        this.senddata.getNotificationSellDragonmp(this.globalID);
        const { role } = await toast2.onDidDismiss();
      }
    });
  }

  checknotificationSellEgg() {
    this.senddata.getNotificationSellEggmp(this.globalID).subscribe(async (dataNotif: any) => {
      this.dataNotif = JSON.parse(dataNotif);
      for(let i in this.dataNotif) {
        // console.log("dataNotif", this.dataNotif[i].idSell);
        const toast2 = await this.toastCtrl.create({
          header: 'You have notifications',
          message: 'Your Egg has been sold in ' + this.dataNotif[i].priceSell + ' BNB',
          icon: 'information-circle',
          position: 'top',
          color: 'success',
          buttons: [
            {
              text: 'Close',
              role: 'cancel',
              handler: () => {
                this.senddata.readNotificationSellmp(this.dataNotif[i].idSell).subscribe(async (dataRead: any) => {
                  // console.log(dataRead, 'notifications readed');
                });
              }
            }
          ]                    
        });
        await toast2.present();
        this.senddata.getNotificationSellEggmp(this.globalID);
        const { role } = await toast2.onDidDismiss();
      }
    });
  }

  checknotificationBid() {
    this.senddata.getNotificationBidmp(this.globalID).subscribe(async (dataNotif: any) => {
      this.dataNotif = JSON.parse(dataNotif);
      for(let i in this.dataNotif) {
        // console.log("dataNotif", this.dataNotif[i].idBid);
        const toast2 = await this.toastCtrl.create({
          header: 'You have notifications',
          message: this.dataNotif[i].username + ' has place bid in ' + this.dataNotif[i].priceBid + ' BNB',
          icon: 'information-circle',
          position: 'top',
          color: 'success',
          buttons: [
            {
              text: 'Close',
              role: 'cancel',
              handler: () => {
                this.senddata.readNotificationBidmp(this.dataNotif[i].idBid).subscribe(async (dataRead: any) => {
                  // console.log(dataRead, 'notifications readed');
                });
              }
            }
          ]                    
        });
        await toast2.present();
        this.senddata.getNotificationBidmp(this.globalID);
        const { role } = await toast2.onDidDismiss();
      }
    });
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
    this.messagingService.requestPermission().subscribe(
      async token => {
        this.tokenPushNotification = token;
        const toast = await this.toastCtrl.create({
          message: 'Got your token',
          duration: 2000
        });
        toast.present();
      },
      async (err) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: err,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }

  // AGM Get Current Location Coordinates
  private setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 19;
        var Latitude = "Latitude";
        var Longtitude = "Longitude";
        var js = JSON.stringify({
          Latitude: this.latitude,
          Longtitude: this.longitude,
        });
        localStorage.setItem("geoLocation", js);
        this.http
          .get("http://api.ipify.org/?format=json")
          .subscribe((res: any) => {
            this.ipAddress = res.ip;
            this.senddata
              .setkycuser(this.globalID, this.ipAddress, js)
              .subscribe(
                (data: any) => {},
                (error: any) => {}
              );
          });
      });
    }
  }

  // WEB3
  async connectAccount() {
    this.provider = await web3Modal.connect();
    this.getcurrentoragon();
    await this.getPaymentCount();
    this.web3js = new Web3(this.provider); // create web3 instance
    console.log(this.web3js);
    this.accounts = await this.web3js.eth.getAccounts(console.log);
    this.wallet = this.accounts[0];

    if (this.wallet == this.wallets) {
      this.tokenInst = new this.web3js.eth.Contract(this.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
      this.balance1 = await this.tokenInst.methods.balanceOf(this.accounts[0]).call();
      this.oragon_balance_display = (this.web3js.utils.fromWei(this.balance1,'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      this.oragon_balance = this.web3js.utils.fromWei(this.balance1,'gwei');
      this.in_dollar = this.oragon_balance * this.current_oragon
      this.oragon_balance2 = this.balance1;
      this.balance2 = await this.web3js.eth.getBalance(this.accounts[0]);
      this.bnb_balance = this.web3js.utils.fromWei(this.balance2,'ether');
      // console.log(this.tokenInst);

      //if connect
      this.connect = true;
      this.stateHash = true;   
      this.state_buy = 2;
      this.status_direct_buy = 2;
      console.log("walletconnect", this.connect);
      console.log("stateHash", this.stateHash);
      console.log("state_buy", this.state_buy);
      console.log("status_direct_buy", this.status_direct_buy);

      // fee gatcha
      this.fee = ((11 / 100) * 100 * 0.0027).toString(); //10X
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        // fee p2p market dragon
        this.marketp2pdragonFee = (12 / 100) * this.marketp2pdragonprice;
        let marketp2pdragonprice_actual =
          this.marketp2pdragonprice - this.marketp2pdragonFee;
        this.fee_display = this.marketp2pdragonFee;
        this.price_display = marketp2pdragonprice_actual;
        this.marketp2pdragonRoyalty = (10 / 100) * this.marketp2pdragonprice;
      } else if (kind == "egg") {
        // fee p2p market egg
        this.marketp2peggFee = (12 / 100) * this.marketp2peggprice;
        let marketp2peggprice_actual =
          this.marketp2peggprice - this.marketp2peggFee;
        this.fee_display = this.marketp2peggFee;
        this.price_display = marketp2peggprice_actual;
      } else if (kind == "battery") {
        // fee p2p market battery
        this.marketp2pbatteryFee = (12 / 100) * this.marketp2pbatteryprice;
        let marketp2pbatteryprice_actual =
          this.marketp2pbatteryprice - this.marketp2pbatteryFee;
        this.fee_display = this.marketp2pbatteryFee;
        this.price_display = marketp2pbatteryprice_actual;
      } else if (kind == "food") {
        // fee p2p market food
        this.marketp2pfoodFee = (12 / 100) * this.marketp2pfoodprice;
        let marketp2pfoodprice_actual =
          this.marketp2pfoodprice - this.marketp2pfoodFee;
        this.fee_display = this.marketp2pfoodFee;
        this.price_display = marketp2pfoodprice_actual;
      }

      const alert = await this.alertController.create({
        header: "Success",
        message: "Connected to Registered Wallet",
        buttons: ["OK"],
      });
      await alert.present();
      //if connect
    } else {
      await this.provider.close();
      this.provider = null;
      this.connect = false;
      const alert = await this.alertController.create({
        header: "Failed!",
        message: "Please Use Registered Wallet",
        buttons: ["OK"],
      });
      await alert.present();
    }
  }

  // Payment Market P2P
  async pay_firstMarketp2p() {
    const loading = await this.loadingController.create();
    await loading.present();

    let kind = localStorage.getItem("lastseen");
    if (kind == "dragon") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2pdragonowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });
        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : this.owner_address,
          value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err) {
              this.openDialog("Transaction Error Please Try Again");
            } else {
              let kind = localStorage.getItem("kind");
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
                price: Number(this.marketp2pdragonprice),
                owner: this.marketp2pdragonowner,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pdragonDocId, //id_product
                        this.globalID, //userid
                        this.marketp2pdragonDocId+'-'+this.kind, //itemid
                        this.marketp2pdragonprice, //amount
                        transactionHash, //tx_hash
                        'bnb-to-seller', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              // Check Cart
              await this.checkitemscreated();

              // Transaction Data Firestore
              var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId);
              var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pdragonDocId);
              try {
                this.fs.firestore.collection('Sell/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId)
                .delete()
                .then(() => {
                });
                this.fs.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pdragonDocId)
                  .set({
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
                  })
                  .then(() => {
                    // console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                    
                  });
                // console.log("Transaction successfully committed!");
              } catch (e) {
                // console.log("Transaction failed: ", e);
              }
              this.senddata
                .selldragontoitemsmp(
                  this.globalID,
                  this.marketp2pdragonDocId
                )
                .subscribe(
                  (dataE: any) => {
                    // console.log(dataE);
                  },
                  (error: any) => {}
                );
              this.senddata.setitemhistory(this.marketp2pdragonDocId,this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
              this.senddata.addSellListmp(this.marketp2pdragonDocId, this.globalID, this.priceRoyalty_display).subscribe((dataE: any) => {});
              loading.dismiss();
              const alert = await this.alertController.create({
                header: "Success",
                message:
                  "Transaction Successfull, We have send this transaction receipt to your email",
                buttons: ["OK"],
              });
              await alert.present();
              this.senddata.getselldgmp().subscribe(
                async (dataSell: any) => {
                  const loading = await this.loadingController.create();
                  await loading.present();
                  this.dragons = dataSell;
                  this.marketp2pdragonLength = dataSell.length;
                  loading.dismiss();
                },
                (error: any) => {}
              );
              this.stateHash = false;
              this.senddata.setitemhistory(this.marketp2pdragonDocId,this.globalID,'transactionHash',JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
            }
          })
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        this.fs
        .collection("Players")
        .doc(this.marketp2pdragonowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });      
        let kind = localStorage.getItem("kind");
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
          price: Number(this.marketp2pdragonprice),
          owner: this.marketp2pdragonowner,
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pdragonDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pdragonDocId+'-'+this.kind, //itemid
                  this.marketp2pdragonprice, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pdragonDocId);
        try {
          this.fs.firestore.collection('Sell/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pdragonDocId)
            .set({
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
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .selldragontoitemsmp(
            this.globalID,
            this.marketp2pdragonDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
            },
            (error: any) => {}
          );
        // this.senddata.setitemhistory(this.marketp2peggID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        this.senddata.addSellListmp(this.marketp2pdragonDocId, this.globalID, this.priceRoyalty_display).subscribe((dataE: any) => {});
        loading.dismiss();
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        this.senddata.getselldgmp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragons = dataSell;
            this.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          },
          (error: any) => {}
        );
        this.state_buy = 2;
        this.stateHash = true;
      }
    } else if (kind == "egg") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2peggowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
            from : this.wallet,
            to : this.owner_address,
            value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
            gas : 500000,
            gasPrice : 5000000000
            }, async (err : any, transactionHash : any) => {
              if(err) {
                this.openDialog("Transaction Error Please Try Again");
              } else{
                let kind = localStorage.getItem("kind");
                this.kind = "egg";
                // Build Json String Egg
                let crd = JSON.stringify({
                  Id: this.marketp2peggDocId,
                  ItemId: this.marketp2peggID,
                  price: this.price_display
                });
                this.current_data = JSON.parse(crd);
                // console.log(this.current_data);

                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2peggDocId, //id_product
                          this.globalID, //userid
                          this.marketp2peggDocId+'-'+this.kind, //itemid
                          this.price_display, //amount
                          transactionHash, //tx_hash
                          'bnb-to-seller', //type
                          JSON.stringify(this.current_data), //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });

                // Check Cart
                await this.checkitemscreated();

                // Transaction Data Firestore
                var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2peggowner + '/Eggs').doc(this.marketp2peggDocId);
                var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2peggDocId);
                try {
                  this.fs.firestore.collection('Sell/'+ this.marketp2peggowner + '/Eggs').doc(this.marketp2peggDocId)
                  .delete()
                  .then(() => {
                  });
                  this.fs.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2peggDocId)
                    .set({
                      Id: this.marketp2peggDocId,
                      ItemId: this.marketp2peggID
                    })
                    .then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    })
                    .catch((error: any) => {
                      
                    });
                  // console.log("Transaction successfully committed!");
                } catch (e) {
                  // console.log("Transaction failed: ", e);
                }
                this.senddata
                  .selleggtoitemsmp(
                    this.globalID,
                    this.marketp2peggDocId
                  )
                  .subscribe(
                    (dataE: any) => {
                      // console.log(dataE);
                    },
                    (error: any) => {}
                  );
                this.senddata.setitemhistory(this.marketp2peggDocId,this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
                this.senddata.addSellListmp(this.marketp2peggDocId, this.globalID, this.price_display).subscribe((dataE: any) => {});
                loading.dismiss();
                const alert = await this.alertController.create({
                  header: "Success",
                  message:
                    "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"],
                });
                await alert.present();
                //if success
                this.stateHash = false;
                this.status_2 = "1";
                this.cartBidcount = 0;
                this.senddata.getselleggmp().subscribe(
                  (dataSell: any) => {
                    this.sorteggs = dataSell;
                    this.marketp2peggLength = dataSell.length;
                    // console.log(this.sorteggs)
                    let marketp2pdragonDate = this.sorteggs;
                    for (let i in marketp2pdragonDate) {
                      this.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
                    }
                  },
                  (error: any) => {}
                );
                this.senddata.getselleggBIDmp().subscribe(
                  async (dataSell: any) => {
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.eggsBID = dataSell;
                    this.marketp2peggLength = dataSell.length;
                    loading.dismiss();
                    // console.log(this.eggsBID)
                    let marketp2pdragonDate = this.eggsBID;
                  },
                  (error: any) => {}
                );
              }
            }
          )
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        let kind = localStorage.getItem("kind");
        this.kind = "egg";
        // Build Json String Egg
        let crd = JSON.stringify({
          Id: this.marketp2peggDocId,
          ItemId: this.marketp2peggID,
          price: this.price_display
        });
        this.current_data = JSON.parse(crd);
        // console.log(this.current_data);

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2peggDocId, //id_product
                  this.globalID, //userid
                  this.marketp2peggDocId+'-'+this.kind, //itemid
                  this.price_display, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2peggowner + '/Eggs').doc(this.marketp2peggDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2peggDocId);
        try {
          this.fs.firestore.collection('Sell/'+ this.marketp2peggowner + '/Eggs').doc(this.marketp2peggDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2peggDocId)
            .set({
              Id: this.marketp2peggDocId,
              ItemId: this.marketp2peggID
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .selleggtoitemsmp(
            this.globalID,
            this.marketp2peggDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
            },
            (error: any) => {}
          );
        this.senddata.addSellListmp(this.marketp2peggDocId, this.globalID, this.price_display).subscribe((dataE: any) => {});
        loading.dismiss();
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        //if success
        this.state_buy = "2";
        this.stateHash = true;
        this.status_2 = "1";
        this.cartBidcount = 0;
        this.senddata.getselleggmp().subscribe(
          (dataSell: any) => {
            this.sorteggs = dataSell;
            this.marketp2peggLength = dataSell.length;
            // console.log(this.sorteggs)
            let marketp2pdragonDate = this.sorteggs;
            for (let i in marketp2pdragonDate) {
              this.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
            }
          },
          (error: any) => {}
        );
        this.senddata.getselleggBIDmp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.eggsBID = dataSell;
            this.marketp2peggLength = dataSell.length;
            loading.dismiss();
            // console.log(this.eggsBID)
            let marketp2pdragonDate = this.eggsBID;
          },
          (error: any) => {}
        );
      }
    } else if (kind == "battery") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2peggowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
            from : this.wallet,
            to : this.owner_address,
            value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
            gas : 500000,
            gasPrice : 5000000000
            }, async (err : any, transactionHash : any) => {
              if(err){
                this.openDialog("Transaction Error Please Try Again");
              } else {
                let kind = localStorage.getItem("kind");
                this.kind = "battery";
                // Build Json String Egg
                let crd = JSON.stringify({
                  Id: this.marketp2pbatteryDocId,
                  ItemId: this.marketp2pbatteryID,
                  price: this.price_display
                });
                this.current_data = JSON.parse(crd);
                // console.log(this.current_data);

                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2pbatteryDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pbatteryDocId+'-'+this.kind, //itemid
                          this.price_display, //amount
                          transactionHash, //tx_hash
                          'bnb-to-seller', //type
                          JSON.stringify(this.current_data), //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });

                // Check Cart
                await this.checkitemscreated();

                // Transaction Data Firestore
                var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pbatteryowner + '/Batteries').doc(this.marketp2pbatteryDocId);
                var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pbatteryDocId);
                try {
                  this.fs.firestore.collection('Sell/'+ this.marketp2pbatteryowner + '/Batteries').doc(this.marketp2pbatteryDocId)
                  .delete()
                  .then(() => {
                  });
                  this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pbatteryDocId)
                    .set({
                      Id: this.marketp2pbatteryDocId,
                      ItemId: this.marketp2pbatteryID
                    })
                    .then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    })
                    .catch((error: any) => {
                      
                    });
                  // console.log("Transaction successfully committed!");
                } catch (e) {
                  // console.log("Transaction failed: ", e);
                }
                this.senddata
                  .sellbatterytoitemsmp(
                    this.globalID,
                    this.marketp2pbatteryDocId
                  )
                  .subscribe(
                    (dataE: any) => {
                      // console.log(dataE);
                    },
                    (error: any) => {}
                  );
                this.senddata.setitemhistory(this.marketp2pbatteryDocId,this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
                this.senddata.addSellListmp(this.marketp2pbatteryDocId, this.globalID, this.price_display).subscribe((dataE: any) => {});
                loading.dismiss();
                const alert = await this.alertController.create({
                  header: "Success",
                  message:
                    "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"],
                });
                await alert.present();
                //if success
                this.stateHash = false;
                this.status_2 = "1";
                this.senddata.getsellbatterymp().subscribe(
                  (dataSell: any) => {
                    this.batteriesHigh = dataSell;
                    this.marketp2pbatteryLength = dataSell.length;
                    // console.log(this.batteriesHigh)
                  },
                  (error: any) => {}
                );
              }
            }
          )
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        let kind = localStorage.getItem("kind");
        this.kind = "battery";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: this.marketp2pbatteryDocId,
          ItemId: this.marketp2pbatteryID,
          price: this.price_display
        });
        this.current_data = JSON.parse(crd);
        // console.log(this.current_data);

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pbatteryDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pbatteryDocId+'-'+this.kind, //itemid
                  this.price_display, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pbatteryowner + '/Batteries').doc(this.marketp2pbatteryDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pbatteryDocId);
        try {
          this.fs.firestore.collection('Sell/'+ this.marketp2pbatteryowner + '/Batteries').doc(this.marketp2pbatteryDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pbatteryDocId)
            .update({
              Id: this.marketp2pbatteryDocId,
              ItemId: this.marketp2pbatteryID,
              Amount: firebase.firestore.FieldValue.increment(+1)
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .sellbatterytoitemsmp(
            this.globalID,
            this.marketp2pbatteryDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
            },
            (error: any) => {}
          );
        // this.senddata.setitemhistory(this.marketp2pbatteryID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        this.senddata.addSellListmp(this.marketp2pbatteryDocId, this.globalID, this.price_display).subscribe((dataE: any) => {});
        loading.dismiss();
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        //if success
        this.state_buy = "2";
        this.status_2 = "1";
        this.senddata.getsellbatterymp().subscribe(
          (dataSell: any) => {
            this.batteriesHigh = dataSell;
            this.marketp2pbatteryLength = dataSell.length;
            // console.log(this.batteriesHigh)
          },
          (error: any) => {}
        );
      }
    } else if (kind == "food") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2pfoodowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : this.owner_address,
          value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err){
              this.openDialog("Transaction Error Please Try Again");
            } else {
              let kind = localStorage.getItem("kind");
              this.kind = "food";
              // Build Json String Battery
              let crd = JSON.stringify({
                ItemId: this.marketp2pfoodID,
                Id: this.marketp2pfoodImg,
                HVP: Number(this.marketp2pfoodHVP),
                Count: Number(this.marketp2pfoodQty),
                price: this.marketp2pfoodprice,
                owner: this.marketp2pfoodowner,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pfoodOID, //id_product
                        this.globalID, //userid
                        this.marketp2pfoodOID+'-'+this.kind, //itemid
                        this.marketp2pfoodprice, //amount
                        transactionHash, //tx_hash
                        'bnb-to-seller', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              // Check Cart
              await this.checkitemscreated();

              // Transaction Data Firestore
              var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pfoodowner + '/Foods').doc(this.marketp2pfoodOID);
              var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Foods').doc(this.marketp2pfoodOID);
              try {
                this.fs.firestore.collection('Sell/'+ this.marketp2pfoodowner + '/Foods').doc(this.marketp2pfoodOID)
                .delete()
                .then(() => {
                });
                this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.marketp2pfoodOID)
                  .update({
                    Amount: Number(this.marketp2pfoodQty),
                    Id: this.marketp2pfoodOID,
                    ItemId: this.marketp2pfoodID
                  })
                  .then(() => {
                    console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                    
                  });
                // console.log("Transaction successfully committed!");
              } catch (e) {
                // console.log("Transaction failed: ", e);
              }
              this.senddata.setitemhistory(this.marketp2pfoodID,this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {});
              this.senddata.addSellListmp(this.marketp2pfoodID, this.globalID, this.marketp2pfoodprice).subscribe((dataE: any) => {});
              this.senddata
                .updatesellfoodUserqtymp(
                  this.globalID,
                  this.marketp2pfoodID,
                  this.marketp2pfoodQty
                )
                .subscribe((data: any) => {});
              this.senddata
                .updatesellfoodUsermp(
                  this.globalID,
                  this.marketp2pfoodID,
                  "transactionHash"
                )
                .subscribe(
                  (data: any) => {},
                  (error: any) => {}
                );
              this.senddata.getsellfoodmp().subscribe(
                async (dataSell: any) => {
                  this.foodsHigh = dataSell;
                },
                (error: any) => {}
              );
              //if success
              this.stateHash = false;
              this.status_2 = "1";
              loading.dismiss();
              }
            }
          )
          localStorage.removeItem('walletconnect');
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        this.fs
        .collection("Players")
        .doc(this.marketp2pfoodowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        let kind = localStorage.getItem("kind");
        this.kind = "food";
        // Build Json String Battery
        let crd = JSON.stringify({
          ItemId: this.marketp2pfoodOID,
          Id: this.marketp2pfoodImg,
          HVP: Number(this.marketp2pfoodHVP),
          Count: Number(this.marketp2pfoodQty),
          price: this.marketp2pfoodprice,
          owner: this.marketp2pfoodowner,
        });
        this.current_data = JSON.parse(crd);
        console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pfoodOID, //id_product
                  this.globalID, //userid
                  this.marketp2pfoodOID+'-'+this.kind, //itemid
                  this.marketp2pfoodprice, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Sell/'+ this.marketp2pfoodowner + '/Foods').doc(this.marketp2pfoodOID);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Foods').doc(this.marketp2pfoodOID);
        try {
          this.fs.firestore.collection('Sell/'+ this.marketp2pfoodowner + '/Foods').doc(this.marketp2pfoodOID)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.marketp2pfoodID)
            .update({
              Amount: firebase.firestore.FieldValue.increment(+this.marketp2pfoodQty),
              Id: this.marketp2pfoodID,
              ItemId: 'ITM14'
            })
            .then(() => {
              console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        // this.senddata.setitemhistory(this.marketp2pfoodID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {});
        this.senddata.addSellListmp(this.marketp2pfoodID, this.globalID, this.marketp2pfoodprice).subscribe((dataE: any) => {});
        this.senddata
          .updatesellfoodUserqtymp(
            this.globalID,
            this.marketp2pfoodID,
            this.marketp2pfoodQty
          )
          .subscribe((data: any) => {});
        this.senddata
          .updatesellfoodUsermp(
            this.globalID,
            this.marketp2pfoodID,
            "transactionHash"
          )
          .subscribe(
            (data: any) => {},
            (error: any) => {}
          );
        this.senddata.getsellfoodmp().subscribe(
          async (dataSell: any) => {
            this.foodsHigh = dataSell;
          },
          (error: any) => {}
        );
        //if success
        this.stateHash = true;
        this.state_buy = 2;
        this.status_2 = "1";
        loading.dismiss();
      }
    }
    localStorage.removeItem("lastpay");
    localStorage.removeItem("lastdragon");
  }

  pay_secondMarketp2p() {
    if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      this.web3js.eth.sendTransaction({
        from : this.wallet,
        to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
        value : this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
        gas : 500000,
        gasPrice : 5000000000
        }, async (err : any, transactionHash : any) => {
          if(err) {
            this.openDialog("Transaction Error Please Try Again");
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
                owner: this.marketp2pdragonowner,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              // Create Royalty pos 1
              if (this.positionRoyalty == 1) {

                this.senddata
                  .setdgfirstroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
                  // Create Royalty pos 2
              } else if (this.positionRoyalty == 2) {
                
                this.senddata
                  .setdgsecondroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {
                      // Create Transaction History
                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_1, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_2a, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 1", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );
                    },
                    (error: any) => {}
                  );
                  // Create Royalty pos 3
              } else if (this.positionRoyalty == 3) {
                
                this.senddata
                  .setdgthirdroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {
                      // Create Transaction History
                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_1, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_3a, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 1", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_2, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_3b, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 2", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );
                    },
                    (error: any) => {}
                  );
                  // Create Royalty pos 4
              } else if (this.positionRoyalty == 4) {
                
                this.senddata
                  .setdgfourthroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {
                      // Create Transaction History
                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_1, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_4a, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 1", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_2, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_4b, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 2", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_3, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_4c, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 3", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );
                    },
                    (error: any) => {}
                  );
                  // Create Royalty pos 5
              } else if (this.positionRoyalty == 5) {

                this.senddata
                  .setdgfifthroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {
                      // Create Transaction History
                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_1, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5a, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 1", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_2, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5b, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 2", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_3, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5c, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 3", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_4, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5d, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 4", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );
                    },
                    (error: any) => {}
                  );
              } else if (this.positionRoyalty == 6) {
                this.senddata
                  .setdgsixthroyaltymp(
                    this.globalID, //userid
                    this.marketp2pdragonowner, //owner
                    this.marketp2pdragonDocId //itemid
                  )
                  .subscribe(
                    (data: any) => {
                      // Create Transaction History
                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_1, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5a, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 1", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_2, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5b, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 2", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_3, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5c, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 3", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_4, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5d, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 4", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );

                      this.senddata
                        .setroyaltytrxhistory(
                          this.globalID, //userid
                          this.pos_5, //userid
                          this.marketp2pdragonDocId + "-" + this.kind, //itemid
                          this.totaroyalty_5e, //amount
                          transactionHash, //tx_hash
                          "Royalty Seller 5", //type
                          JSON.stringify(this.current_data) //item
                        )
                        .subscribe(
                          (data: any) => {},
                          (error: any) => {}
                        );
                    },
                    (error: any) => {}
                  );
              }

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pdragonDocId, //id_product
                        this.globalID, //userid
                        this.marketp2pdragonDocId+'-'+this.kind, //itemid
                        this.fee_royalty, //amount
                        transactionHash, //tx_hash
                        'bnb-to-oragon', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
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
                price: this.marketp2peggprice,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2peggDocId, //id_product
                        this.globalID, //userid
                        this.marketp2peggDocId+'-'+this.kind, //itemid
                        this.marketp2peggprice, //amount
                        transactionHash, //tx_hash
                        'bnb-to-oragon', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
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
                owner: this.marketp2pbatteryowner,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pbatteryDocId, //id_product
                        this.globalID, //userid
                        this.marketp2pbatteryDocId+'-'+this.kind, //itemid
                        this.marketp2pbatteryprice, //amount
                        transactionHash, //tx_hash
                        'bnb-to-oragon', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
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
                owner: this.marketp2pfoodowner,
              });
              this.current_data = JSON.parse(crd);
              // console.log(JSON.stringify(this.current_data));

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pfoodOID, //id_product
                        this.globalID, //userid
                        this.marketp2pfoodOID+'-'+this.kind, //itemid
                        this.marketp2pfoodprice, //amount
                        transactionHash, //tx_hash
                        'bnb-to-oragon', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });
              this.state_buy = "3";
              this.status_1 = "1";
            }
          }
        });
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
          owner: this.marketp2pdragonowner,
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        // Create Royalty pos 1
        if (this.positionRoyalty == 1) {

          this.senddata
            .setdgfirstroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {},
              (error: any) => {}
            );
            // Create Royalty pos 2
        } else if (this.positionRoyalty == 2) {
          
          this.senddata
            .setdgsecondroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {
                // Create Transaction History
                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_1, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_2a, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 1", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
              },
              (error: any) => {}
            );
            // Create Royalty pos 3
        } else if (this.positionRoyalty == 3) {
          
          this.senddata
            .setdgthirdroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {
                // Create Transaction History
                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_1, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_3a, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 1", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_2, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_3b, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 2", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
              },
              (error: any) => {}
            );
            // Create Royalty pos 4
        } else if (this.positionRoyalty == 4) {
          
          this.senddata
            .setdgfourthroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {
                // Create Transaction History
                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_1, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_4a, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 1", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_2, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_4b, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 2", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_3, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_4c, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 3", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
              },
              (error: any) => {}
            );
            // Create Royalty pos 5
        } else if (this.positionRoyalty == 5) {

          this.senddata
            .setdgfifthroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {
                // Create Transaction History
                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_1, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5a, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 1", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_2, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5b, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 2", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_3, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5c, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 3", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_4, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5d, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 4", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
              },
              (error: any) => {}
            );
        } else if (this.positionRoyalty == 6) {
          this.senddata
            .setdgsixthroyaltymp(
              this.globalID, //userid
              this.marketp2pdragonowner, //owner
              this.marketp2pdragonDocId //itemid
            )
            .subscribe(
              (data: any) => {
                // Create Transaction History
                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_1, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5a, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 1", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_2, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5b, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 2", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_3, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5c, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 3", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_4, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5d, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 4", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );

                this.senddata
                  .setroyaltytrxhistory(
                    this.globalID, //userid
                    this.pos_5, //userid
                    this.marketp2pdragonDocId + "-" + this.kind, //itemid
                    this.totaroyalty_5e, //amount
                    "transactionHash", //tx_hash
                    "Royalty Seller 5", //type
                    JSON.stringify(this.current_data) //item
                  )
                  .subscribe(
                    (data: any) => {},
                    (error: any) => {}
                  );
              },
              (error: any) => {}
            );
        }

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pdragonDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pdragonDocId+'-'+this.kind, //itemid
                  this.fee_royalty, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
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
          price: this.marketp2peggprice,
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2peggowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2peggDocId, //id_product
                  this.globalID, //userid
                  this.marketp2peggDocId+'-'+this.kind, //itemid
                  this.marketp2peggprice, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
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
          owner: this.marketp2pbatteryowner,
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pbatteryowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pbatteryDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pbatteryDocId+'-'+this.kind, //itemid
                  this.marketp2pbatteryprice, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
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
          owner: this.marketp2pfoodowner,
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pfoodowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pfoodOID, //id_product
                  this.globalID, //userid
                  this.marketp2pfoodOID+'-'+this.kind, //itemid
                  this.marketp2pfoodprice, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });
        this.state_buy = "3";
        this.status_1 = "1";
      }
    }
  }

  async pay_firstMarketp2pBID() {
    if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
        this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
          value : this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err) {
              this.openDialog("Transaction Error Please Try Again");
            } else {
              let lastseen = localStorage.getItem("lastseen");
              if (lastseen == "dragon") {
                // Create Transaction History
                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2pBIDdragonDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pBIDdragonDocId, //itemid
                          this.fee_display, //amount
                          transactionHash, //tx_hash
                          'bnb-to-oragon', //type
                          'fee-auction', //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });
                let type = this.marketp2pBIDdragontype;
                if(type == "Free") {
                  // console.log("Detail Free BID");
                  this.state_BID = "Free";
                  this.state_buy = 3;
                  this.stateHash = true;
                } else {
                  // console.log("Detail Step BID");
                  this.state_BID = "Step";
                  this.state_buy = 3;
                  this.stateHash = true;
                  let percentBID = (this.marketp2pBIDdragonpriceNow / 100) * 10;
                  // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
                  this.price_display_StepBID = percentBID + Number(this.marketp2pBIDdragonpriceNow);
                  // console.log(price_display);
                }
              } else if (lastseen == "egg") {
                // Create Transaction History
                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2pBIDeggDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pBIDeggDocId, //itemid
                          this.fee_display, //amount
                          transactionHash, //tx_hash
                          'bnb-to-oragon', //type
                          'fee-auction', //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });
                let type = this.marketp2pBIDeggtype;
                if(type == "Free") {
                  // console.log("Detail Free BID");
                  this.state_BID = "Free";
                  this.state_buy = 3;
                  this.stateHash = true;
                } else {
                  // console.log("Detail Step BID");
                  this.state_BID = "Step";
                  this.state_buy = 3;
                  this.stateHash = true;
                  let percentBID = (this.marketp2pBIDeggpriceNow / 100) * 10;
                  // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
                  this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
                  // console.log(price_display);
                }
              } else if (lastseen == "battery") {
                // Create Transaction History
                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2pBIDbatteryDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pBIDbatteryDocId, //itemid
                          this.fee_display, //amount
                          transactionHash, //tx_hash
                          'bnb-to-oragon', //type
                          'fee-auction', //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });
                let type = this.marketp2pBIDbatterytype;
                if(type == "Free") {
                  // console.log("Detail Free BID");
                  this.state_BID = "Free";
                  this.state_buy = 3;
                  this.stateHash = true;
                } else {
                  // console.log("Detail Step BID");
                  this.state_BID = "Step";
                  this.state_buy = 3;
                  this.stateHash = true;
                  let percentBID = (this.marketp2pBIDbatterypriceNow / 100) * 10;
                  // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
                  this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
                  // console.log(price_display);
                }
              } else if (lastseen == "food") {
                // Create Transaction History
                // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
                let type = this.marketp2pBIDfoodtype;
                if(type == "Free") {
                  // console.log("Detail Free BID");
                  this.state_BID = "Free";
                  this.state_buy = 3;
                  this.stateHash = true;
                } else {
                  // console.log("Detail Step BID");
                  this.state_BID = "Step";
                  this.state_buy = 3;
                  this.stateHash = true;
                  let percentBID = (this.marketp2pBIDfoodpriceNow / 100) * 10;
                  // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
                  this.price_display_StepBID = percentBID + Number(this.marketp2pBIDfoodpriceNow);
                  // console.log(price_display);
                }
              } 
            }
          })
      } else {
        const alert = await this.alertController.create({
          header: 'Failed!',
          message: 'BNB Balance is not Enough',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      let lastseen = localStorage.getItem("lastseen");
      if (lastseen == "dragon") {
        // Create Transaction History
        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDdragonDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDdragonDocId, //itemid
                  this.fee_display, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  'fee-auction', //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });
        let type = this.marketp2pBIDdragontype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 3;
          this.stateHash = true;
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 3;
          this.stateHash = true;
          let percentBID = (this.marketp2pBIDdragonpriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDdragonpriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "egg") {
        // Create Transaction History
        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDeggDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDeggDocId, //itemid
                  this.fee_display, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  'fee-auction', //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });
        let type = this.marketp2pBIDeggtype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 3;
          this.stateHash = true;
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 3;
          this.stateHash = true;
          let percentBID = (this.marketp2pBIDeggpriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "battery") {
        // Create Transaction History
        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDbatteryDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDbatteryDocId, //itemid
                  this.fee_display, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-oragon', //type
                  'fee-auction', //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });
        let type = this.marketp2pBIDbatterytype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 3;
          this.stateHash = true;
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 3;
          this.stateHash = true;
          let percentBID = (this.marketp2pBIDbatterypriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
          // console.log(price_display);
        }
      } else if (lastseen == "food") {
        // Create Transaction History
        // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
        let type = this.marketp2pBIDfoodtype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 3;
          this.stateHash = true;
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 3;
          this.stateHash = true;
          let percentBID = (this.marketp2pBIDfoodpriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDfoodpriceNow);
          // console.log(price_display);
        }
      } 
    }
  }

  pay_secondMarketp2pBID() {
    if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      this.web3js.eth.sendTransaction({
        from : this.wallet,
        to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
        value : this.web3js.utils.toWei(this.fee, 'ether'),
        gas : 500000,
        gasPrice : 5000000000
        }, async (err : any, transactionHash : any) => {
          if(err) {
            this.openDialog("Transaction Error Please Try Again");
          } else {
            let lastseen = localStorage.getItem("lastseen");
            if (lastseen == "dragon") {
              let type = this.marketp2pBIDdragontype;
              if(type == "Free") {
                // console.log("Detail Free BID");
                this.state_BID = "Free";
                this.state_buy = 0;
                // Create Royalty pos 1
                if (this.positionRoyalty == 1) {

                  this.senddata
                    .setdgfirstroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                    // Create Royalty pos 2
                } else if (this.positionRoyalty == 2) {
                  
                  this.senddata
                    .setdgsecondroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_2a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 3
                } else if (this.positionRoyalty == 3) {
                  
                  this.senddata
                    .setdgthirdroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_3a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_3b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 4
                } else if (this.positionRoyalty == 4) {
                  
                  this.senddata
                    .setdgfourthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 5
                } else if (this.positionRoyalty == 5) {

                  this.senddata
                    .setdgfifthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_4, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5d, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 4", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                } else if (this.positionRoyalty == 6) {
                  this.senddata
                    .setdgsixthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_4, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5d, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 4", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_5, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5e, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 5", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                }
                this.biditem();
              } else {
                // console.log("Detail Step BID");
                this.state_BID = "Step";
                this.state_buy = 0;
                let percentBID = (this.marketp2pBIDdragonpriceNow / 100) * 10;
                // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
                this.price_display_StepBID = percentBID + Number(this.marketp2pBIDdragonpriceNow);
                // Create Royalty pos 1
                if (this.positionRoyalty == 1) {

                  this.senddata
                    .setdgfirstroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                    // Create Royalty pos 2
                } else if (this.positionRoyalty == 2) {
                  
                  this.senddata
                    .setdgsecondroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_2a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 3
                } else if (this.positionRoyalty == 3) {
                  
                  this.senddata
                    .setdgthirdroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_3a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_3b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 4
                } else if (this.positionRoyalty == 4) {
                  
                  this.senddata
                    .setdgfourthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_4c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                    // Create Royalty pos 5
                } else if (this.positionRoyalty == 5) {

                  this.senddata
                    .setdgfifthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_4, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5d, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 4", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                } else if (this.positionRoyalty == 6) {
                  this.senddata
                    .setdgsixthroyaltymp(
                      this.globalID, //userid
                      this.marketp2pdragonowner, //owner
                      this.marketp2pdragonDocId //itemid
                    )
                    .subscribe(
                      (data: any) => {
                        // Create Transaction History
                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_1, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5a, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 1", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_2, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5b, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 2", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_3, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5c, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 3", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_4, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5d, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 4", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );

                        this.senddata
                          .setroyaltytrxhistory(
                            this.globalID, //userid
                            this.pos_5, //userid
                            this.marketp2pdragonDocId + "-" + this.kind, //itemid
                            this.totaroyalty_5e, //amount
                            transactionHash, //tx_hash
                            "Royalty Seller 5", //type
                            JSON.stringify(this.current_data) //item
                          )
                          .subscribe(
                            (data: any) => {},
                            (error: any) => {}
                          );
                      },
                      (error: any) => {}
                    );
                }
                this.biditem();
              }
            } else if (lastseen == "egg") {
              let type = this.marketp2pBIDeggtype;
              if(type == "Free") {
                // console.log("Detail Free BID");
                this.state_BID = "Free";
                this.state_buy = 0;
                
                this.biditem();
              } else {
                // console.log("Detail Step BID");
                this.state_BID = "Step";
                this.state_buy = 0;
                let percentBID = (this.marketp2pBIDeggpriceNow / 100) * 10;
                // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
                this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
                
                this.biditem();
              }
            } else if (lastseen == "battery") {
              let type = this.marketp2pBIDbatterytype;
              if(type == "Free") {
                // console.log("Detail Free BID");
                this.state_BID = "Free";
                this.state_buy = 0;
                
                this.biditem();
              } else {
                // console.log("Detail Step BID");
                this.state_BID = "Step";
                this.state_buy = 0;
                let percentBID = (this.marketp2pBIDbatterypriceNow / 100) * 10;
                // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
                this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
                
                this.biditem();
              }
            } else if (lastseen == "food") {
              let type = this.marketp2pBIDfoodtype;
              if(type == "Free") {
                // console.log("Detail Free BID");
                this.state_BID = "Free";
                this.state_buy = 0;
                
                this.biditem();
              } else {
                // console.log("Detail Step BID");
                this.state_BID = "Step";
                this.state_buy = 0;
                let percentBID = (this.marketp2pBIDfoodpriceNow / 100) * 10;
                // console.log(percentBID + Number(this.marketp2pBIDfoodpriceNow));
                this.price_display_StepBID = percentBID + Number(this.marketp2pBIDfoodpriceNow);
                
                this.biditem();
              }
            } 
          }
        })
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
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          // Create Royalty pos 1
          if (this.positionRoyalty == 1) {

            this.senddata
              .setdgfirstroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {},
                (error: any) => {}
              );
              // Create Royalty pos 2
          } else if (this.positionRoyalty == 2) {
            
            this.senddata
              .setdgsecondroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_2a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 3
          } else if (this.positionRoyalty == 3) {
            
            this.senddata
              .setdgthirdroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_3a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_3b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 4
          } else if (this.positionRoyalty == 4) {
            
            this.senddata
              .setdgfourthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 5
          } else if (this.positionRoyalty == 5) {

            this.senddata
              .setdgfifthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_4, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5d, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 4", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
          } else if (this.positionRoyalty == 6) {
            this.senddata
              .setdgsixthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_4, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5d, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 4", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_5, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5e, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 5", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
          }
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = (this.marketp2pBIDdragonpriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDdragonpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDdragonpriceNow);
          // Create Royalty pos 1
          if (this.positionRoyalty == 1) {

            this.senddata
              .setdgfirstroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {},
                (error: any) => {}
              );
              // Create Royalty pos 2
          } else if (this.positionRoyalty == 2) {
            
            this.senddata
              .setdgsecondroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_2a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 3
          } else if (this.positionRoyalty == 3) {
            
            this.senddata
              .setdgthirdroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_3a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_3b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 4
          } else if (this.positionRoyalty == 4) {
            
            this.senddata
              .setdgfourthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_4c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
              // Create Royalty pos 5
          } else if (this.positionRoyalty == 5) {

            this.senddata
              .setdgfifthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_4, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5d, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 4", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
          } else if (this.positionRoyalty == 6) {
            this.senddata
              .setdgsixthroyaltymp(
                this.globalID, //userid
                this.marketp2pdragonowner, //owner
                this.marketp2pdragonDocId //itemid
              )
              .subscribe(
                (data: any) => {
                  // Create Transaction History
                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_1, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5a, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 1", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_2, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5b, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 2", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_3, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5c, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 3", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_4, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5d, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 4", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );

                  this.senddata
                    .setroyaltytrxhistory(
                      this.globalID, //userid
                      this.pos_5, //userid
                      this.marketp2pdragonDocId + "-" + this.kind, //itemid
                      this.totaroyalty_5e, //amount
                      "transactionHash", //tx_hash
                      "Royalty Seller 5", //type
                      JSON.stringify(this.current_data) //item
                    )
                    .subscribe(
                      (data: any) => {},
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
          }
          this.biditem();
        }
      } else if (lastseen == "egg") {
        let type = this.marketp2pBIDeggtype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = (this.marketp2pBIDeggpriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDeggpriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDeggpriceNow);
          
          this.biditem();
        }
      } else if (lastseen == "battery") {
        let type = this.marketp2pBIDbatterytype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = (this.marketp2pBIDbatterypriceNow / 100) * 10;
          // console.log(percentBID + Number(this.marketp2pBIDbatterypriceNow));
          this.price_display_StepBID = percentBID + Number(this.marketp2pBIDbatterypriceNow);
          
          this.biditem();
        }
      } else if (lastseen == "food") {
        // Create Transaction History
        // this.senddata.settrxhistory(this.globalID,this.marketp2pfoodDocId+'-'+this.kind,'this.marketp2pfoodFee.toString()','transactionHash','bnb-to-oragon (BID)',JSON.stringify(this.current_data),this.email).subscribe((data:any) => {},(error:any) => {})
        let type = this.marketp2pBIDfoodtype;
        if(type == "Free") {
          // console.log("Detail Free BID");
          this.state_BID = "Free";
          this.state_buy = 0;
          
          this.biditem();
        } else {
          // console.log("Detail Step BID");
          this.state_BID = "Step";
          this.state_buy = 0;
          let percentBID = (this.marketp2pBIDfoodpriceNow / 100) * 10;
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

  async biditem() {
    let lastseen = localStorage.getItem("lastseen");
    if (lastseen == "dragon") {
      let type = this.marketp2pBIDdragontype;
      this.loadingtext = true;
      // console.log("loadingtext", this.loadingtext);
      if (type == "Free") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.input_price_actual)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDdragonuidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemsBIDNOWmp(
          this.marketp2pBIDdragonDocId,
          arr.toString(),
          this.input_price_actual
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDdragonDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe(async (dataBid: any) => {
                    this.dragonBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                    if(this.dragonBidHistoryWin[1].uidBid == this.globalID) {
                      this.sendNotificationtoLosesBid(this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                      this.checknotificationLosesBid(this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                    }
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.marketp2pBIDdragonDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDdragonowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {
                        this.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDdragonDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckdragonbidall = setInterval(async () => {
                          this.detailBid(this.marketp2pBIDdragonDocId);
                          this.checkdragonBIDall();
                          this.priceNowBiddragon(this.marketp2pBIDdragonDocId);

                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataBid) => {
                            this.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckdragonbidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              loading.dismiss();
            } else {
              this.detailBid(this.marketp2pBIDdragonDocId);
              this.checkdragonBIDall();
              this.priceNowBiddragon(this.marketp2pBIDdragonDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataBid) => {
                this.dragonBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } else if (type == "Step") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.price_display_StepBID)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDdragonuidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemsBIDNOWmp(
          this.marketp2pBIDdragonDocId,
          arr.toString(),
          this.price_display_StepBID
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDdragonDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe(async (dataBid: any) => {
                    this.dragonBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                    if(this.dragonBidHistoryWin[1].uidBid == this.globalID) {
                      this.sendNotificationtoLosesBid(this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                      this.checknotificationLosesBid(this.dragonBidHistoryWin[1].uidBid, this.dragonBidHistoryWin[1].idBid);
                    }
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.marketp2pBIDdragonDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDdragonowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {
                        this.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDdragonDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckdragonbidall = setInterval(async () => {
                          this.detailBid(this.marketp2pBIDdragonDocId);
                          this.checkdragonBIDall();
                          this.priceNowBiddragon(this.marketp2pBIDdragonDocId);

                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataBid) => {
                            this.dragonBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckdragonbidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              loading.dismiss();
            } else {
              this.detailBid(this.marketp2pBIDdragonDocId);
              this.checkdragonBIDall();
              this.priceNowBiddragon(this.marketp2pBIDdragonDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataBid) => {
                this.dragonBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } 
      this.state_buy = 2;
    } else if (lastseen == "egg") {
      let type = this.marketp2pBIDeggtype;
      this.loadingtext = true;
      // console.log("loadingtext", this.loadingtext);
      // console.log("type", this.marketp2pBIDeggtype);
      if (type == "Free") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.input_price_actual)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDegguidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemseggBIDNOWmp(
          this.marketp2pBIDeggDocId,
          arr.toString(),
          this.input_price_actual
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDeggDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe(async (dataBid: any) => {
                    this.eggBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                    this.sendNotificationtoLosesBid(this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                    this.checknotificationLosesBid(this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(this.marketp2pBIDeggDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 async (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDeggowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {});
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDeggDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckeggbidall = setInterval(async () => {
                          this.detailBidegg(this.marketp2pBIDeggDocId);
                          this.checkeggBIDall();
                          this.priceNowBidegg(this.marketp2pBIDeggDocId);
                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe((dataBid) => {
                            this.eggBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckeggbidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });
              loading.dismiss();
            } else {
              this.detailBidegg(this.marketp2pBIDeggDocId);
              this.checkeggBIDall();
              this.priceNowBidegg(this.marketp2pBIDeggDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe((dataBid) => {
                this.eggBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } else if (type == "Step") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.price_display_StepBID)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDegguidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemseggBIDNOWmp(
          this.marketp2pBIDeggDocId,
          arr.toString(),
          this.price_display_StepBID
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDeggDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe(async (dataBid: any) => {
                    this.eggBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                    this.sendNotificationtoLosesBid(this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                    this.checknotificationLosesBid(this.eggBidHistoryWin[1].uidBid, this.eggBidHistoryWin[1].idBid);
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(this.marketp2pBIDeggDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 async (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDeggowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {});
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDeggDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckeggbidall = setInterval(async () => {
                          this.detailBidegg(this.marketp2pBIDeggDocId);
                          this.checkeggBIDall();
                          this.priceNowBidegg(this.marketp2pBIDeggDocId);
                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe((dataBid) => {
                            this.eggBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckeggbidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });
              loading.dismiss();
            } else {
              this.detailBidegg(this.marketp2pBIDeggDocId);
              this.checkeggBIDall();
              this.priceNowBidegg(this.marketp2pBIDeggDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDeggDocId).subscribe((dataBid) => {
                this.eggBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } 
      this.state_buy = 2;
    } else if (lastseen == "battery") {
      let type = this.marketp2pBIDbatterytype;
      this.loadingtext = true;
      // console.log("loadingtext", this.loadingtext);
      if (type == "Free") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.input_price_actual)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDbatteryuidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemsbatteryBIDNOWmp(
          this.marketp2pBIDbatteryDocId,
          arr.toString(),
          this.input_price_actual
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDbatteryDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe(async (dataBid: any) => {
                    this.batteryBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                    if(this.batteryBidHistoryWin[1].uidBid == this.globalID) {
                      this.sendNotificationtoLosesBid(this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                      this.checknotificationLosesBid(this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                    }
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDbatteryowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {
                        this.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDbatteryDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckbatterybidall = setInterval(async () => {
                          this.detailBidbattery(this.marketp2pBIDbatteryDocId);
                          this.checkbatteryBIDall();
                          this.priceNowBidbattery(this.marketp2pBIDbatteryDocId);

                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataBid) => {
                            this.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckbatterybidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              loading.dismiss();
            } else {
              this.detailBidbattery(this.marketp2pBIDbatteryDocId);
              this.checkbatteryBIDall();
              this.priceNowBidbattery(this.marketp2pBIDbatteryDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataBid) => {
                this.batteryBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } else if (type == "Step") {
        const loading = await this.loadingController.create();
        await loading.present();
        let crd = JSON.stringify({
          uid: this.globalID,
          price: Number(this.price_display_StepBID)
        });
        this.current_data = JSON.parse(crd);
        // console.log(JSON.stringify(this.current_data));

        var arr = new Array(this.marketp2pBIDbatteryuidBid);
        var addArr = arr.unshift(JSON.stringify(this.current_data));

        this.senddata
        .editpricedumpitemsbatteryBIDNOWmp(
          this.marketp2pBIDdragonDocId,
          arr.toString(),
          this.price_display_StepBID
        )
        .subscribe(
          async (dataE: any) => {
            let de = JSON.parse(dataE);
            let priceNowBid = Number(de.priceNow);
            if(this.input_price_actual == priceNowBid) {
              this.senddata
              .addBidListmp(
                this.marketp2pBIDbatteryDocId,
                this.globalID,
                this.input_price_actual,
              )
              .subscribe(
                (dataE: any) => {
                  let databid = JSON.parse(dataE);
                  this.senddata.getswinhistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe(async (dataBid: any) => {
                    this.batteryBidHistoryWin = JSON.parse(dataBid);
                    // console.log("checknotificationLosesBid", this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                    if(this.batteryBidHistoryWin[1].uidBid == this.globalID) {
                      this.sendNotificationtoLosesBid(this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                      this.checknotificationLosesBid(this.batteryBidHistoryWin[1].uidBid, this.batteryBidHistoryWin[1].idBid);
                    }
                  });
                },
                (error: any) => {}
              );

              this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
              .update({
                PriceNow: Number(this.input_price_actual),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
              });

              this.state_buy = 2;

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      this.senddata.postNotificationOwnerBidmp(this.username, this.marketp2pBIDbatteryowner, this.tokenNotif.tokenPushNotification, this.globalID).subscribe((data:any) => {
                        this.loadingtext = false;
                      });
                      // console.log(this.tokenNotif.tokenPushNotification);
                      this.senddata.setNotificationBidOwnermp(this.marketp2pBIDbatteryDocId).subscribe((dataNotif) => {
                        this.notifications = JSON.parse(dataNotif);
                        // console.log("data notifications", this.notifications);
                        this.countdowncheckbatterybidall = setInterval(async () => {
                          this.detailBidbattery(this.marketp2pBIDbatteryDocId);
                          this.checkbatteryBIDall();
                          this.priceNowBidbattery(this.marketp2pBIDbatteryDocId);

                          this.senddata.getshistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataBid) => {
                            this.batteryBidHistory = JSON.parse(dataBid);
                          });
                          if(this.state_buy == 2) {
                            clearInterval(this.countdowncheckbatterybidall);
                            this.loadingtext = false;
                          }
                        }, 1000);
                      });
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              loading.dismiss();
            } else {
              this.detailBidbattery(this.marketp2pBIDbatteryDocId);
              this.checkbatteryBIDall();
              this.priceNowBidbattery(this.marketp2pBIDbatteryDocId);
              this.senddata.getshistorydgidBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataBid) => {
                this.batteryBidHistory = JSON.parse(dataBid);
              });
              const alert = await this.alertController.create({
                header: "Failed !",
                message: "Oopss, Something went wrong.",
                buttons: ["OK"],
              });
              await alert.present();
              this.loadingtext = false;
              loading.dismiss();
            }
          });
      } 
    } 
  }

  async pay_cartBID() {
    const loading = await this.loadingController.create();
    await loading.present();

    let kind = localStorage.getItem("lastseen");
    if (kind == "dragon") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") { 
        this.fs
        .collection("Players")
        .doc(this.marketp2pBIDdragonowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : this.owner_address,
          value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err) {
              this.openDialog("Transaction Error Please Try Again");
            } else {
              let kind = localStorage.getItem("kind");
              this.kind = "dragon";
              // Build Json String Egg
              let crd = JSON.stringify({
                Id: this.marketp2pBIDdragonDocId,
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
                },
                price: this.input_price_actual
              });
              this.current_data = JSON.parse(crd);
              // console.log(this.current_data);

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pBIDdragonDocId, //id_product
                        this.globalID, //userid
                        this.marketp2pBIDdragonDocId+'-'+this.kind, //itemid
                        this.input_price_actual, //amount
                        transactionHash, //tx_hash
                        'bnb-to-seller', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              // Check Cart
              await this.checkitemscreated();

              // Transaction Data Firestore
              var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.marketp2pBIDdragonDocId);
              var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId);
              try {
                this.fs.firestore.collection('Bid/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId)
                .delete()
                .then(() => {
                });
                this.fs.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId)
                  .set({
                    Id: this.marketp2pBIDdragonDocId,
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
                    },
                  })
                  .then(() => {
                    // console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                    
                  });
                // console.log("Transaction successfully committed!");
              } catch (e) {
                // console.log("Transaction failed: ", e);
              }
              this.senddata
                .selldragontoitemsmp(
                  this.globalID,
                  this.marketp2pBIDdragonDocId
                )
                .subscribe(
                  (dataE: any) => {
                    // console.log(dataE);
                    this.senddata.removedragonDocIdBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataR : any) => {
                      // console.log("Bid list has been remove !");
                    });
                  },
                  (error: any) => {}
                );
              this.senddata.setitemhistory(this.marketp2pBIDdragonDocId,this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
              this.senddata.addSellListmp(this.marketp2pBIDdragonDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {
              });
              const alert = await this.alertController.create({
                header: "Success",
                message:
                  "Transaction Successfull, We have send this transaction receipt to your email",
                buttons: ["OK"],
              });
              await alert.present();
              //if success
              this.state_buy = "3";
              this.status_2 = "1";
              this.cartBidcount = 0;
              this.checkdragonBIDall();
              setTimeout(function() {
                window.location.replace('/tabs/profile');
                loading.dismiss();
              }, 3000);
            }
          })
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        let kind = localStorage.getItem("kind");
        this.kind = "dragon";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: this.marketp2pBIDdragonDocId,
          ItemId: this.marketp2pBIDdragonID,
          price: this.input_price_actual
        });
        this.current_data = JSON.parse(crd);
        // console.log(this.current_data);

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDdragonowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDdragonDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDdragonDocId+'-'+this.kind, //itemid
                  this.input_price_actual, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.marketp2pBIDdragonDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId);
        try {
          this.fs.firestore.collection('Bid/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Dragons').doc(this.marketp2pBIDdragonDocId)
            .set({
              Id: this.marketp2pBIDdragonDocId,
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
              },
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .selldragontoitemsmp(
            this.globalID,
            this.marketp2pBIDdragonDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
              this.senddata.removedragonDocIdBIDmp(this.marketp2pBIDdragonDocId).subscribe((dataR : any) => {
                // console.log("Bid list has been remove !");
              });
            },
            (error: any) => {}
          );
        this.senddata.addSellListmp(this.marketp2pBIDdragonDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {
        });
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        //if success
        this.state_buy = "3";
        this.status_2 = "1";
        this.cartBidcount = 0;
        this.checkdragonBIDall();
        setTimeout(function() {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
      }
    } else if (kind == "egg") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2peggowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
            from : this.wallet,
            to : this.owner_address,
            value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
            gas : 500000,
            gasPrice : 5000000000
            }, async (err : any, transactionHash : any) => {
              if(err) {
                this.openDialog("Transaction Error Please Try Again");
              } else {
                let kind = localStorage.getItem("kind");
                this.kind = "egg";
                // Build Json String Egg
                let crd = JSON.stringify({
                  Id: this.marketp2pBIDeggDocId,
                  ItemId: this.marketp2pBIDeggID,
                  price: this.input_price_actual
                });
                this.current_data = JSON.parse(crd);
                // console.log(this.current_data);

                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        this.senddata.settrxhistory(
                          this.marketp2pBIDeggDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pBIDeggDocId+'-'+this.kind, //itemid
                          this.input_price_actual, //amount
                          transactionHash, //tx_hash
                          'bnb-to-seller', //type
                          JSON.stringify(this.current_data), //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {},(error:any) => {})
                      });
                     } else {
                       // console.log('No registration token available. Request permission to generate one.');
                     }
                 }).catch((err) => {
                    // console.log('An error occurred while retrieving token. ', err);
                });

                // Check Cart
                await this.checkitemscreated();

                // Transaction Data Firestore
                var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(this.marketp2pBIDeggDocId);
                var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId);
                try {
                  this.fs.firestore.collection('Bid/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId)
                  .delete()
                  .then(() => {
                  });
                  this.fs.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId)
                    .set({
                      Id: this.marketp2pBIDeggDocId,
                      ItemId: this.marketp2pBIDeggID
                    })
                    .then(() => {
                      // console.log("Document successfully Buy!");
                      // this.openDialog("Item Listed");
                    })
                    .catch((error: any) => {
                      
                    });
                  // console.log("Transaction successfully committed!");
                } catch (e) {
                  // console.log("Transaction failed: ", e);
                }
                this.senddata
                  .selleggtoitemsmp(
                    this.globalID,
                    this.marketp2pBIDeggDocId
                  )
                  .subscribe(
                    (dataE: any) => {
                      // console.log(dataE);
                      this.senddata.removeeggDocIdBIDmp(this.marketp2pBIDeggDocId).subscribe((dataR : any) => {
                        // console.log("Bid list has been remove !");
                      });
                    },
                    (error: any) => {}
                  );
                this.senddata.setitemhistory(this.marketp2pBIDeggDocId, this.globalID, transactionHash, JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
                this.senddata.addSellListmp(this.marketp2pBIDeggDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {});
                const alert = await this.alertController.create({
                  header: "Success",
                  message:
                    "Transaction Successfull, We have send this transaction receipt to your email",
                  buttons: ["OK"],
                });
                await alert.present();
                //if success
                this.state_buy = "3";
                this.status_2 = "1";
                this.cartBidcount = 0;
                this.checkeggBIDall();
                setTimeout(function() {
                  window.location.replace('/tabs/profile');
                  loading.dismiss();
                }, 3000);
              }
            }
          )
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        let kind = localStorage.getItem("kind");
        this.kind = "egg";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: this.marketp2pBIDeggDocId,
          ItemId: this.marketp2pBIDeggID,
          price: this.input_price_actual
        });
        this.current_data = JSON.parse(crd);
        // console.log(this.current_data);

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDeggowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDeggDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDeggDocId+'-'+this.kind, //itemid
                  this.input_price_actual, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(this.marketp2pBIDeggDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId);
        try {
          this.fs.firestore.collection('Bid/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Eggs').doc(this.marketp2pBIDeggDocId)
            .set({
              Id: this.marketp2pBIDeggDocId,
              ItemId: this.marketp2pBIDeggID
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .selleggtoitemsmp(
            this.globalID,
            this.marketp2pBIDeggDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
              this.senddata.removeeggDocIdBIDmp(this.marketp2pBIDeggDocId).subscribe((dataR : any) => {
                // console.log("Bid list has been remove !");
              });
            },
            (error: any) => {}
          );
        this.senddata.addSellListmp(this.marketp2pBIDeggDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {});
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        //if success
        this.state_buy = "3";
        this.status_2 = "1";
        this.cartBidcount = 0;
        this.checkeggBIDall();
        setTimeout(function() {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
      }
    } else if (kind == "battery") {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        this.fs
        .collection("Players")
        .doc(this.marketp2peggowner)
        .valueChanges()
        .subscribe((datas: any) => {
          console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData);
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress;
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)) {
          this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : this.owner_address,
          value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err) {
              this.openDialog("Transaction Error Please Try Again");
            } else {
              let kind = localStorage.getItem("kind");
              this.kind = "battery";
              // Build Json String Egg
              let crd = JSON.stringify({
                Id: this.marketp2pBIDbatteryDocId,
                ItemId: this.marketp2pBIDbatteryID,
                price: this.input_price_actual
              });
              this.current_data = JSON.parse(crd);
              // console.log(this.current_data);

              const messaging = getMessaging();
              getToken(messaging, 
               { vapidKey: environment.firebase.vapidKey}).then(
                 (tokenPushNotification) => {
                   if (tokenPushNotification) {
                    this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                      this.tokenNotif = JSON.parse(dataToken);
                      // Create Transaction History
                      this.senddata.settrxhistory(
                        this.marketp2pBIDbatteryDocId, //id_product
                        this.globalID, //userid
                        this.marketp2pBIDbatteryDocId+'-'+this.kind, //itemid
                        this.input_price_actual, //amount
                        transactionHash, //tx_hash
                        'bnb-to-seller', //type
                        JSON.stringify(this.current_data), //item
                        this.email, //email
                        this.tokenNotif.tokenPushNotification //token
                      ).subscribe((data:any) => {},(error:any) => {})
                    });
                   } else {
                     // console.log('No registration token available. Request permission to generate one.');
                   }
               }).catch((err) => {
                  // console.log('An error occurred while retrieving token. ', err);
              });

              // Check Cart
              await this.checkitemscreated();

              // Transaction Data Firestore
              var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.marketp2pBIDbatteryDocId);
              var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId);
              try {
                this.fs.firestore.collection('Bid/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
                .delete()
                .then(() => {
                });
                this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
                  .set({
                    Id: this.marketp2pBIDbatteryDocId,
                    ItemId: this.marketp2pBIDbatteryID
                  })
                  .then(() => {
                    // console.log("Document successfully Buy!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                    
                  });
                // console.log("Transaction successfully committed!");
              } catch (e) {
                // console.log("Transaction failed: ", e);
              }
              this.senddata
                .sellbatterytoitemsmp(
                  this.globalID,
                  this.marketp2pBIDbatteryDocId
                )
                .subscribe(
                  (dataE: any) => {
                    // console.log(dataE);
                    this.senddata.removebatteryDocIdBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataR : any) => {
                      // console.log("Bid list has been remove !");
                    });
                  },
                  (error: any) => {}
                );
              this.senddata.setitemhistory(this.marketp2pBIDbatteryDocId,this.globalID, transactionHash,JSON.stringify(this.current_data), '').subscribe((data:any) => {},(error:any) => {})
              this.senddata.addSellListmp(this.marketp2pBIDbatteryDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {});
              const alert = await this.alertController.create({
                header: "Success",
                message:
                  "Transaction Successfull, We have send this transaction receipt to your email",
                buttons: ["OK"],
              });
              await alert.present();
              //if success
              this.state_buy = "3";
              this.status_2 = "1";
              this.cartBidcount = 0;
              this.checkbatteryBIDall();
              setTimeout(function() {
                window.location.replace('/tabs/profile');
                loading.dismiss();
              }, 3000);
            }
          })
        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        } 
      } else {
        let kind = localStorage.getItem("kind");
        this.kind = "battery";
        // Build Json String Egg
        let crd = JSON.stringify({
          DocId: this.marketp2pBIDbatteryDocId,
          ItemId: this.marketp2pBIDbatteryID,
          price: this.input_price_actual
        });
        this.current_data = JSON.parse(crd);
        // console.log(this.current_data);

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.marketp2pBIDbatteryowner).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.marketp2pBIDbatteryDocId, //id_product
                  this.globalID, //userid
                  this.marketp2pBIDbatteryDocId+'-'+this.kind, //itemid
                  this.input_price_actual, //amount
                  'transactionHash', //tx_hash
                  'bnb-to-seller', //type
                  JSON.stringify(this.current_data), //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        // Check Cart
        await this.checkitemscreated();

        // Transaction Data Firestore
        var sfDocRef = this.fs.firestore.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.marketp2pBIDbatteryDocId);
        var sfDocRef2 = this.fs.firestore.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId);
        try {
          this.fs.firestore.collection('Bid/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
          .delete()
          .then(() => {
          });
          this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.marketp2pBIDbatteryDocId)
            .set({
              Id: this.marketp2pBIDbatteryDocId,
              ItemId: this.marketp2pBIDbatteryID
            })
            .then(() => {
              // console.log("Document successfully Buy!");
              // this.openDialog("Item Listed");
            })
            .catch((error: any) => {
              
            });
          // console.log("Transaction successfully committed!");
        } catch (e) {
          // console.log("Transaction failed: ", e);
        }
        this.senddata
          .sellbatterytoitemsmp(
            this.globalID,
            this.marketp2pBIDbatteryDocId
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
              this.senddata.removebatteryDocIdBIDmp(this.marketp2pBIDbatteryDocId).subscribe((dataR : any) => {
                // console.log("Bid list has been remove !");
              });
            },
            (error: any) => {}
          );
        // this.senddata.setitemhistory(this.marketp2pBIDbatteryID,this.globalID,'transactionHash',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
        this.senddata.addSellListmp(this.marketp2pBIDbatteryDocId, this.globalID, this.input_price_actual).subscribe((dataE: any) => {});
        const alert = await this.alertController.create({
          header: "Success",
          message:
            "Transaction Successfull, We have send this transaction receipt to your email",
          buttons: ["OK"],
        });
        await alert.present();
        //if success
        this.state_buy = "3";
        this.status_2 = "1";
        this.cartBidcount = 0;
        this.checkbatteryBIDall();
        setTimeout(function() {
          window.location.replace('/tabs/profile');
          loading.dismiss();
        }, 3000);
      }
    } else if (kind == "food") {
      
    }
    localStorage.removeItem("lastpay");
    localStorage.removeItem("lastdragon");
  }

  checkeggBIDall() {
    this.senddata.getselleggBIDmp().subscribe((dataSell: any) => {
        this.eggsBID = dataSell;
        this.marketp2peggLength = dataSell.length;
      },
      (error: any) => {}
    );
  }

  checkdragonBIDall() {
    this.senddata.getselldgBIDmp().subscribe((dataSell: any) => {
        this.dragonsBID = dataSell;
      },
      (error: any) => {}
    );
  }

  checkbatteryBIDall() {
    this.senddata.getsellbatteryBIDmp().subscribe((dataSell: any) => {
        this.batterysBID = dataSell;
      },
      (error: any) => {}
    );
  }

  async pay_cartStore(id_cart, user_uid, addressw) {
    if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
      if(+(this.oragon_balance * 1).toFixed(0) > +(this.cartPrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)) {
        let amountf = this.cartPrice * 1e9
        console.log(amountf)
        await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then(async(res:any) => {
          console.log(res);
          this.senddata.getstoredetail(this.storeID).subscribe((data:any) => {
            this.storedetail = JSON.parse(data)
            this.storeDeskripsi = this.storedetail.deskripsi

            // set transaction history
            const messaging = getMessaging();
            getToken(messaging, 
             { vapidKey: environment.firebase.vapidKey}).then(
               (tokenPushNotification) => {
                 if (tokenPushNotification) {
                  this.senddata.gettokenOwnermp(this.globalID).subscribe((dataToken:any) => {
                    this.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    this.senddata.settrxhistory(
                      this.storeID, //storeid
                      this.globalID, //userid
                      'S-BNB' + this.newTime(), //itemid
                      this.cartPriceBNB, //amount BNB
                      res.transactionHash, //tx_hash
                      'BNB', //type
                      'Package-Official-Store', //item
                      this.email, //email
                      this.tokenNotif.tokenPushNotification //token
                    ).subscribe((data:any) => {},(error:any) => {})
                  });
                 } else {
                   // console.log('No registration token available. Request permission to generate one.');
                 }
             }).catch((err) => {
                // console.log('An error occurred while retrieving token. ', err);
            });
          },(error:any) => {});
          
          // packages-official-store
            // if(this.storeID == 17) {
              // BATTERY
              // this.addJaketsMetalicana(user_uid);
            // }

          //if success
            this.state_buy = 3;
            this.status_direct_buy = 1;
            this.stateHash = true;
            this.connect = true;
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Transaction Successfull, We have send this transaction receipt to your email',
              buttons: ['OK'],
            });
            this.updatestorecart(this.cartID, this.globalID, this.wallets, res.transactionHash);
            await alert.present();
            setTimeout(async()=>{
              const loading = await this.loadingController.create();
              await loading.present();
              window.location.reload();
              loading.dismiss();
            }, 2000);
        }).catch((err:any) => {
          
        });
      } else {
        const alert = await this.alertController.create({
          header: 'Failed!',
          message: 'BNB Balance is not Enough',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      this.senddata.getstoredetail(this.storeID).subscribe((data:any) => {
        this.storedetail = JSON.parse(data)
        this.storeDeskripsi = this.storedetail.deskripsi

        // set transaction history
        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.globalID).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.storeID, //storeid
                  this.globalID, //userid
                  'S-BNB' + this.newTime(), //itemid
                  this.cartPriceBNB, //amount BNB
                  'res.transactionHash', //tx_hash
                  'BNB', //type
                  'Package-Official-Store', //item
                  this.email, //email
                  this.tokenNotif.tokenPushNotification //token
                ).subscribe((data:any) => {},(error:any) => {})
              });
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });
      },(error:any) => {});

      // packages-official-store
        // if(this.storeID == 17) {
          // BATTERY
          // this.addJaketsMetalicana(user_uid);
        // }

      //if success
        this.state_buy = 3;
        this.status_direct_buy = 1;
        this.stateHash = true;
        this.connect = true;
        const alert = await this.alertController.create({
          header: 'Success',
          message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK'],
        });
        this.updatestorecart(this.cartID, this.globalID, this.wallets, 'res.transactionHash');
        await alert.present();
        setTimeout(async()=>{
          const loading = await this.loadingController.create();
          await loading.present();
          window.location.reload();
          loading.dismiss();
        }, 2000);
    }
  }

  async pay_progressStore(event, id_orders, user_uid, product_id, addressw) {
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(event, DocId, ItemId)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.updatestoreprogress(this.ordersID, this.globalID, this.wallets, event.target.files[0]);
      // this.addJaketsMetalicana(user_uid, product_id);
      loading.dismiss();
      
      console.log(event.target.files[0]);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
    this.updateProgressCount();
  }

  async updateProgressCount() {
    console.log(this.progressCount);
    const pc = this.progressCount;
    this.progressCount = pc - 1;
    const updateProgressCount = setInterval(async () => {
      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.getstoreprogress(this.globalID).subscribe(
        (data: any) => {
          this.storeprogress = JSON.parse(data);
          for (let i in this.storeprogress) {
            // console.log(this.storeprogress[i].addressw)
            this.progressCount = this.storeprogress.length;
          }
        },
        (error: any) => {}
      );
      loading.dismiss();
      if(this.progressCount == 0) {
        this.progressCount = 0;
        this.ngOnInit();
        clearInterval(updateProgressCount);
      }
    }, 5000);
    setTimeout(async () => {
      window.location.reload();
    }, 5000);
  }

  // Market P2P
  async p2pTab(kind) {
    if (kind == "1") {
      if (this.lastseen == "dragon") {
        this.senddata.getselldgmp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragons = dataSell;
            this.marketp2pdragonLength = dataSell.length;
            loading.dismiss();
          },
          (error: any) => {}
        );
      } else if (this.lastseen == "egg") {
        this.senddata.getselleggmp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.sorteggs = dataSell;
            this.marketp2peggLength = dataSell.length;
            loading.dismiss();
          },
          (error: any) => {}
        );
      } else if (this.lastseen == "battery") {
        this.senddata.getsellbatterymp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.batteriesHigh = dataSell;
            this.marketp2pbatteryLength = dataSell.length;
            loading.dismiss();
          },
          (error: any) => {}
        );
      } else if (this.lastseen == "food") {
        this.senddata.getsellfoodmp().subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.foodsHigh = dataSell;
            this.marketp2pfoodLength = dataSell.length;
            loading.dismiss();
          },
          (error: any) => {}
        );
      }

      localStorage.setItem("tabs", "sell");
    } else if (kind == "2") {
      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.getselldgBIDmp().subscribe((dataSell: any) => {
          this.marketp2pBIDdragonLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getselleggBIDmp().subscribe((dataSell: any) => {
          this.marketp2peggBIDLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.senddata.getsellbatteryBIDmp().subscribe((dataSell: any) => {
          this.marketp2pbatteryBIDLength = dataSell.length;
        },
        (error: any) => {}
      );

      localStorage.setItem("tabs", "bid");
      loading.dismiss();
    } else if (kind == "3") {
      this.senddata.getselldgmp().subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.jakets = dataSell;
          this.marketp2pdragonLength = dataSell.length;
          loading.dismiss();
        },
        (error: any) => {}
      );
      localStorage.setItem("tabs", "fashion");
    }
  }

  getstorecart() {
    this.senddata.getstorecart(this.globalID).subscribe(
      (data: any) => {
        this.storecart = JSON.parse(data);
        for (let i in this.storecart) {
          // console.log(this.storecart[i].addressw)
          this.cartCount = this.storecart.length;
          this.cartUID = this.globalID;
          this.carts = this.storecart;
          this.cartID = this.storecart[i].id_cart;
          this.cartStatus = this.storecart[i].status
          // this.cartDeskripsi = this.storecart[i].deskripsi
          this.cartPrice = this.storecart[i].harga;
          this.cartQty = this.storecart[i].qty_cart;
          let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
          this.cartPriceBNB = cartPriceBNB.toFixed(4);
          this.cartImg = this.storecart[i].gambar;
        }
      },
      (error: any) => {}
    );
  }

  getstoreprogress() {
    this.senddata.getstoreprogress(this.globalID).subscribe(
      (data: any) => {
        this.storeprogress = JSON.parse(data);
        for (let i in this.storeprogress) {
          // console.log(this.storeprogress[i].addressw)
          this.progressCount = this.storeprogress.length;
          this.cartUID = this.globalID;
          this.carts = this.storeprogress;
          this.ordersID = this.storeprogress[i].id_orders;
          this.product_id = this.storeprogress[i].product_id
          // this.cartDeskripsi = this.storeprogress[i].deskripsi
          this.cartPrice = this.storeprogress[i].harga;
          this.cartQty = this.storeprogress[i].qty_cart;
          let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
          this.cartPriceBNB = cartPriceBNB.toFixed(4);
          this.cartImg = this.storeprogress[i].gambar;
        }
      },
      (error: any) => {}
    );
  }

  async getbidcart() {
    if(this.selectedBid == "Dragons") {
      this.senddata.getbidcartdragon(this.globalID).subscribe(async (data: any) => {
        this.bidcart = JSON.parse(data);
        if(this.bidcart[0].statusBid == 1) {
          this.bidCount = this.bidcart[0].length;
          this.bidPrice = this.bidcart[0].priceBid;
          let bidPriceUSD = this.bidcart[0].priceBid / this.current_bnb;
          this.bidPriceUSD = bidPriceUSD.toFixed(2);
          // console.log("bidPriceUSD", this.bidPriceUSD);
          // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);

          if (this.marketp2pBIDdragonBG == "exists") {
            this.senddata
              .getdgroyaltymp(this.marketp2pBIDdragonDocId)
              .subscribe((dataRoyalty) => {
                let dr = dataRoyalty;
                
                // fee p2p market dragon
                  this.marketp2pdragonFee = (12 / 100) * this.bidPrice;
                  let marketp2pdragonprice_actual = this.bidPrice - this.marketp2pdragonFee;
                  this.fee_display = this.marketp2pdragonFee;
                  this.price_display = marketp2pdragonprice_actual;
                  this.marketp2pdragonRoyalty =
                    (10 / 100) * this.bidPrice;
                  let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
                  this.priceRoyalty_display = priceRoyalty_display.toFixed(2);
                  this.fee_royalty =
                  this.fee_display + this.marketp2pdragonRoyalty;
                  this.marketp2pdragonRoyalty2 = (10 / 100) * this.marketp2pdragonRoyalty;
                  this.marketp2pdragonRoyalty3 = (10 / 100) * this.marketp2pdragonRoyalty2;
                  this.marketp2pdragonRoyalty4 = (10 / 100) * this.marketp2pdragonRoyalty3;
                  this.marketp2pdragonRoyalty5 = (10 / 100) * this.marketp2pdragonRoyalty4;
                  this.marketp2pdragonRoyalty6 = (10 / 100) * this.marketp2pdragonRoyalty5;

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
            // sengaja dikosongkan
          }
          // console.log(this.bidPrice)
        } else {
          this.stateHash = true;
          const alert = await this.alertController.create({
            header: "Attention",
            message: "Your cart is expired!",
            buttons: ["OK"],
          });
          await alert.present();
          // console.log("Your cart is expired!");
        }
      });
    } else if(this.selectedBid == "Eggs") {
      this.senddata.getbidcartegg(this.globalID).subscribe(async (data: any) => {
        this.bidcart = JSON.parse(data);
        if(this.bidcart[0].statusBid == 1) {
          this.bidCount = this.bidcart[0].length;
          this.bidPrice = this.bidcart[0].priceBid;
          let bidPriceUSD = this.bidcart[0].priceBid / this.current_bnb;
          this.bidPriceUSD = bidPriceUSD.toFixed(2);
          // console.log("bidPriceUSD", this.bidPriceUSD);
          // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);
          // console.log(this.bidPrice)
        } else {
          this.stateHash = true;
          const alert = await this.alertController.create({
            header: "Attention",
            message: "Your cart is expired!",
            buttons: ["OK"],
          });
          await alert.present();
          // console.log("Your cart is expired!");
        }
      });
    } else if(this.selectedBid == "Batteries") {
      this.senddata.getbidcartbattery(this.globalID).subscribe(async (data: any) => {
        this.bidcart = JSON.parse(data);
        if(this.bidcart[0].statusBid == 1) {
          this.bidCount = this.bidcart[0].length;
          this.bidPrice = this.bidcart[0].priceBid;
          let bidPriceUSD = this.bidcart[0].priceBid / this.current_bnb;
          this.bidPriceUSD = bidPriceUSD.toFixed(2);
          // console.log("bidPriceUSD", this.bidPriceUSD);
          // console.log("marketp2pBIDdragonDocId", this.marketp2pBIDdragonDocId);
          // console.log(this.bidPrice)
        } else {
          this.stateHash = true;
          const alert = await this.alertController.create({
            header: "Attention",
            message: "Your cart is expired!",
            buttons: ["OK"],
          });
          await alert.present();
          // console.log("Your cart is expired!");
        }
      });
    } else {
      const alert = await this.alertController.create({
        header: "Sorry !",
        message: "Oopss, Something went wrong.",
        buttons: ["OK"],
      });
      await alert.present();
    }
  }

  getcurrentoragon() {
    this.senddata.getcurrentoragon2().subscribe(
      (data: any) => {
        this.current_oragon = data.data.price;
        this.in_oragon_100c = (100 / this.current_oragon).toFixed(14);
        this.in_oragon_12c = (12 / this.current_oragon).toFixed(14);
        console.log(this.current_oragon)
      },
      (error: any) => {}
    );
  }

  clickcategory(kind) {
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
      this.fs
        .collection("testUtility")
        .valueChanges()
        .subscribe((dataBackground: any) => {
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
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatterymp().subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.batteriesHigh = dataSell;
          this.marketp2pbatteryLength = dataSell.length;
          loading.dismiss();
        },
        (error: any) => {}
      );
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.foodsHigh = dataSell;
          loading.dismiss();
        },
        (error: any) => {}
      );
    }
  }

  clickcategorybid(kind) {
    if (kind == 1) {
      this.lastseen = "dragon";
      this.sortp2pmarket = 1;
      localStorage.setItem("lastseen", "dragon");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgBIDmp().subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.dragonsBID = dataSell;
          this.marketp2pBIDdragonLength = dataSell.length;
          
          loading.dismiss();
          // console.log(this.dragonsBID)
          let marketp2pdragonDate = this.dragonsBID;
          for (let i in marketp2pdragonDate) {
            this.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
            if(this.dragonsBID[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragonsBID[i].ItemId).subscribe(
                (dataBackground: any) => {
                  this.dragonsownedbg = JSON.parse(dataBackground);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgbackground
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );
      this.countdowncheckdragonbidall = setInterval(async () => {
        this.checkdragonBIDall();
        if(this.lastseen != "dragon") {
          clearInterval(this.countdowncheckdragonbidall);
        } 
      }, 10000);
    } else if (kind == 2) {
      this.lastseen = "egg";
      this.sortp2pmarket = 4;
      localStorage.setItem("lastseen", "egg");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggBIDmp().subscribe((dataSell: any) => {
          this.eggsBID = dataSell;
          this.marketp2peggBIDLength = dataSell.length;
        },
        (error: any) => {}
      );
      this.countdowncheckeggbidall = setInterval(async () => {
        this.checkeggBIDall();
        if(this.lastseen != "egg") {
          clearInterval(this.countdowncheckeggbidall);
        }
      }, 10000);
    } else if (kind == 3) {
      this.lastseen = "battery";
      this.sortp2pmarket = 7;
      localStorage.setItem("lastseen", "battery");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatteryBIDmp().subscribe(
        (dataSell: any) => {
          this.batterysBID = dataSell;
        },
        (error: any) => {}
      );
      this.countdowncheckbatterybidall = setInterval(async () => {
        this.checkbatteryBIDall();
        if(this.lastseen != "battery") {
          clearInterval(this.countdowncheckbatterybidall);
        }
      }, 10000);
    } else if (kind == 4) {
      this.lastseen = "food";
      this.sortp2pmarket = 10;
      localStorage.setItem("lastseen", "food");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getsellfoodmp().subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.foodsHigh = dataSell;
          loading.dismiss();
        },
        (error: any) => {}
      );
    }
  }

  clickcategoryfashion(kind) {
    if (kind == 1) {
      this.lastseen = "jakets";
      this.sortfashion = 1;
      localStorage.setItem("lastseenfashion", "jakets");
      // console.log("category p2p", this.currentp2p);
      // console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          console.log(this.marketp2pdragonLength);
          for(let i in this.dragonsowned) {
            if(this.dragonsowned[i].ItemId == 'ITM13') {
              console.log("anda dapat membeli " +this.dragonsowned[i].qtyClaim+ " jaket metalicana")
              if(this.dragonsowned[i].qtyClaim > 0) {
                this.senddata.getselljaketsmp().subscribe(
                  (dataSell: any) => {
                    this.jakets = dataSell;
                    this.fashionjaketsLength = dataSell.length;
                    console.log(this.jakets)
                  },
                  (error: any) => {}
                );
              } else {
                console.log("unknown error")
              }
            } else {
              console.log("item tidak tersedia")
            }
          }
        },
        (error: any) => {}
      );
      this.senddata.getsellcommonjaketsmp().subscribe(
        (dataSell: any) => {
          this.commonjakets = dataSell;
          this.fashioncommonjaketsLength = dataSell.length;
          console.log(this.commonjakets)
        },
        (error: any) => {}
      );
    }
  }

  clicksortp2pmarket(kind) {
    // ------------------------ Sort DRAGON
    if (kind == 1) {
      this.currentp2p = 0;
      this.sortp2pmarket = 1;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 2) {
      this.currentp2p = 1;
      this.sortp2pmarket = 2;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowsellhargamp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 3) {
      this.sortp2pmarket = 3;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozsellhargamp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
      // ------------------------ Sort EGG
    } else if (kind == 4) {
      this.currentp2p = 2;
      this.sortp2pmarket = 4;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 5) {
      this.currentp2p = 2;
      this.sortp2pmarket = 5;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 6) {
      this.currentp2p = 2;
      this.sortp2pmarket = 6;
      // console.log("click category p2p", this.currentp2p);
      // console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    }
  }

  async getdgbuydetail(ItemId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let lastseen = localStorage.setItem("lastseen", "dragon");
    localStorage.setItem("lastdragon", ItemId);
    this.checkkind(ItemId);
    loading.dismiss();
    // console.log(ItemId);
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

  async geteggbuydetail(marketp2peggDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let lastseen = localStorage.setItem("lastseen", "egg");
    localStorage.setItem("lastegg", marketp2peggDocId);
    this.checkkindEgg(marketp2peggDocId);
    loading.dismiss();
    // console.log(marketp2peggDocId);
  }

  async getbatterybuydetail(marketp2pbatteryDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let lastseen = localStorage.setItem("lastseen", "battery");
    localStorage.setItem("lastbattery", marketp2pbatteryDocId);
    this.checkkindBattery(marketp2pbatteryDocId);
    loading.dismiss();
    // console.log(marketp2pbatteryDocId);
  }

  async getfoodbuydetail(iditemsFood) {
    let lastseen = localStorage.setItem("lastseen", "food");
    this.checkkindGroup(iditemsFood);
    // console.log(iditemsFood);
  }

  async getjaketsbuydetail(ItemId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let lastseen = localStorage.setItem("lastseen", "jakets");
    localStorage.setItem("lastjakets", ItemId);
    this.checkkindJakets(ItemId);
    loading.dismiss();;
  }

  async setstorecart(id_product, user_uid, addressw) {
      if(this.isLogin == '!') {
        const alert = await this.alertController.create({
          header: 'Failed !',
          message: 'Please login for add to cart',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        const loading = await this.loadingController.create();
        await loading.present();

        this.senddata.setstorecart(id_product, user_uid, addressw).subscribe((data:any) => {
          let setstorecart = data
          this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
            this.storecart = JSON.parse(data)
            for(let i in this.storecart) {
              console.log(this.storecart[i].addressw)
              if(this.storecart.length == 0) {
                this.cartCount = 0;  
                this.cartStatus = 0;
              } else {
                this.cartCount = this.storecart.length
              }
                this.cartUID = this.globalID
                this.carts = this.storecart
                this.cartID = this.storecart[i].id_cart
                this.storeID = this.storecart[i].product_id
                // this.cartStatus = this.storecart[i].nama
                this.cartDeskripsi = this.storecart[i].deskripsi
                this.cartPrice = this.storecart[i].harga
                this.cartQty = this.storecart[i].qty_cart
                let cartPriceBNB = (this.current_bnb * this.cartPrice) * this.cartQty
                this.cartPriceBNB = (cartPriceBNB).toFixed(4);
                this.cartImg = this.storecart[i].gambar
                this.cartStatus = 1;
            }
          },(error:any) => {})
        },(error:any) => {})      

        loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Items already added to your cart',
          buttons: ['OK'],
        });
        await alert.present();
        this.stateHash = true;
        this.state_buy = 2;
      }
    }

    async updatestorecart(id_cart, user_uid, addressw, transactionHash) {
      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.updatestorecartHome(id_cart, user_uid, addressw, transactionHash).subscribe((data:any) => {
        let updatestorecartHome = data
        console.log(updatestorecartHome)
      },(error:any) => {})

      loading.dismiss();
    }

    async updatestoreprogress(id_orders, user_uid, addressw, file_orders) {
      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.updatestoreprogressHome(id_orders, user_uid, addressw, file_orders).subscribe((data:any) => {
        let updatestoreprogressHome = data
        console.log(updatestoreprogressHome)
      },(error:any) => {})

      loading.dismiss();
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
            this.senddata.getselldgidmp(ItemId).subscribe(
              (dataDetail: any) => {
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
                  this.senddata
                    .getdgroyaltymp(this.marketp2pdragonDocId)
                    .subscribe((dataRoyalty) => {
                      let dr = dataRoyalty;
                      
                      // fee p2p market dragon
                        this.marketp2pdragonFee =
                          (12 / 100) * this.marketp2pdragonprice;
                        let marketp2pdragonprice_actual =
                          this.marketp2pdragonprice - this.marketp2pdragonFee;
                        this.fee_display = this.marketp2pdragonFee;
                        this.price_display = marketp2pdragonprice_actual;
                        this.marketp2pdragonRoyalty =
                          (10 / 100) * this.marketp2pdragonprice;
                        let priceRoyalty_display =
                          this.price_display - this.marketp2pdragonRoyalty;
                        this.priceRoyalty_display =
                          priceRoyalty_display.toFixed(2);
                        this.fee_royalty =
                        this.fee_display + this.marketp2pdragonRoyalty;
                        this.marketp2pdragonRoyalty2 = (10 / 100) * this.marketp2pdragonRoyalty;
                        this.marketp2pdragonRoyalty3 = (10 / 100) * this.marketp2pdragonRoyalty2;
                        this.marketp2pdragonRoyalty4 = (10 / 100) * this.marketp2pdragonRoyalty3;
                        this.marketp2pdragonRoyalty5 = (10 / 100) * this.marketp2pdragonRoyalty4;
                        this.marketp2pdragonRoyalty6 = (10 / 100) * this.marketp2pdragonRoyalty5;

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

                }

                this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe((datapos) => {
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

                this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe((datahistory) => {
                  let historyItems = JSON.parse(datahistory);
                  // console.log(historyItems);
                });
              },
              (error: any) => {}
            );
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

            this.senddata.getshistorydgidBIDmp(ItemId).subscribe((dataBid) => {
              this.dragonBidHistory = JSON.parse(dataBid);
            });

            let type = this.marketp2pBIDdragontype;
            if(type == "Free") {
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
            this.senddata.getselldgidmp(ItemId).subscribe(
              (dataDetail: any) => {
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
                let marketp2pdragonpriceUSD =
                  this.dragonDetail.price / this.current_bnb;
                this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
                this.marketp2pdragonBG = this.dragonDetail.imgbackground;
                this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
                this.marketp2pdragonfavorited = this.dragonDetail.favorited;
                // console.log(this.marketp2pdragonpriceUSD);
                if (this.marketp2pdragonBG == "exists") {
                  this.senddata
                    .getdgroyaltymp(this.marketp2pdragonDocId)
                    .subscribe((dataRoyalty) => {
                      let dr = dataRoyalty;
                      
                      // fee p2p market dragon
                        this.marketp2pdragonFee =
                          (12 / 100) * this.marketp2pdragonprice;
                        let marketp2pdragonprice_actual =
                          this.marketp2pdragonprice - this.marketp2pdragonFee;
                        this.fee_display = this.marketp2pdragonFee;
                        this.price_display = marketp2pdragonprice_actual;
                        this.marketp2pdragonRoyalty =
                          (10 / 100) * this.marketp2pdragonprice;
                        let priceRoyalty_display =
                          this.price_display - this.marketp2pdragonRoyalty;
                        this.priceRoyalty_display =
                          priceRoyalty_display.toFixed(2);
                        this.fee_royalty =
                        this.fee_display + this.marketp2pdragonRoyalty;
                        this.marketp2pdragonRoyalty2 = (10 / 100) * this.marketp2pdragonRoyalty;
                        this.marketp2pdragonRoyalty3 = (10 / 100) * this.marketp2pdragonRoyalty2;
                        this.marketp2pdragonRoyalty4 = (10 / 100) * this.marketp2pdragonRoyalty3;
                        this.marketp2pdragonRoyalty5 = (10 / 100) * this.marketp2pdragonRoyalty4;
                        this.marketp2pdragonRoyalty6 = (10 / 100) * this.marketp2pdragonRoyalty5;

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

                }

                this.senddata.getposroyaltymp(this.marketp2pdragonDocId).subscribe((datapos) => {
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

                this.senddata.getitemhistory(this.marketp2pdragonDocId).subscribe((datahistory) => {
                  let historyItems = JSON.parse(datahistory);
                  // console.log(historyItems);
                });
              },
              (error: any) => {}
            );
          }
        } 
      }
    }

    detailBid(ItemId) {
      this.senddata.getselldgidBIDmp(ItemId).subscribe(async (dataDetail: any) => {
        this.dragonDetail = JSON.parse(dataDetail);
        this.marketp2pBIDdragonDocId = this.dragonDetail[0].DocId;
        this.marketp2pBIDdragonID = this.dragonDetail[0].ItemId;
        this.marketp2pBIDdragonImg = this.dragonDetail[0].Id;
        this.marketp2pBIDdragonAttack = this.dragonDetail[0].Attack;
        this.marketp2pBIDdragonDefense = this.dragonDetail[0].Defense;
        this.marketp2pBIDdragonLevel = this.dragonDetail[0].Level;
        this.marketp2pBIDdragonHP = this.dragonDetail[0].HP;
        this.marketp2pBIDdragonMaxHP = this.dragonDetail[0].MaxHP;
        this.marketp2pBIDdragonHunger = this.dragonDetail[0].Hunger;
        this.marketp2pBIDdragonMaxHunger = this.dragonDetail[0].MaxHunger;
        this.marketp2pBIDdragonRarity = this.dragonDetail[0].Rarity;
        this.marketp2pBIDdragonExp = this.dragonDetail[0].Exp;
        this.marketp2pBIDdragonowner = this.dragonDetail[0].uid;
        this.marketp2pBIDdragonprice = this.dragonDetail[0].price;
        this.marketp2pBIDdragontype = this.dragonDetail[0].Type;
        this.marketp2pBIDdragonpriceNow = this.dragonDetail[0].PriceNow;
        this.marketp2pBIDdragontime = this.dragonDetail[0].CreatedAt;
        this.marketp2pdragonBIDfavorited = this.dragonDetail[0].favorited;
        this.marketp2pBIDdragonBG = this.dragonDetail[0].imgbackground;
        this.marketp2pBIDdragonImgBG = this.dragonDetail[0].imgBg;
        let marketp2pdragonpriceUSD = this.marketp2pBIDdragonpriceNow / this.current_bnb;
        this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);

        if (this.marketp2pBIDdragonBG == "exists") {
          this.senddata
            .getdgroyaltymp(this.marketp2pBIDdragonDocId)
            .subscribe((dataRoyalty) => {
              let dr = dataRoyalty;
              
              // fee p2p market dragon
                this.marketp2pdragonFee = (12 / 100) * this.marketp2pBIDdragonpriceNow;
                let marketp2pdragonprice_actual = this.marketp2pBIDdragonpriceNow - this.marketp2pdragonFee;
                this.fee_display = this.marketp2pdragonFee;
                this.price_display = marketp2pdragonprice_actual;
                this.marketp2pdragonRoyalty = (10 / 100) * this.marketp2pBIDdragonpriceNow;
                let priceRoyalty_display = this.price_display - this.marketp2pdragonRoyalty;
                this.priceRoyalty_display = priceRoyalty_display.toFixed(2);
                this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
                this.marketp2pdragonRoyalty2 = (10 / 100) * this.marketp2pdragonRoyalty;
                this.marketp2pdragonRoyalty3 = (10 / 100) * this.marketp2pdragonRoyalty2;
                this.marketp2pdragonRoyalty4 = (10 / 100) * this.marketp2pdragonRoyalty3;
                this.marketp2pdragonRoyalty5 = (10 / 100) * this.marketp2pdragonRoyalty4;
                this.marketp2pdragonRoyalty6 = (10 / 100) * this.marketp2pdragonRoyalty5;

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
          // 
        }

        this.senddata.getposroyaltymp(ItemId).subscribe((datapos) => {
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

        this.marketp2pdragonFee = (12 / 100) * this.marketp2pBIDdragonpriceNow;
        let marketp2pdragonprice_actual = this.marketp2pBIDdragonpriceNow - this.marketp2pdragonFee;
        this.fee_display = this.marketp2pdragonFee;
        this.price_display = marketp2pdragonprice_actual;

        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = this.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDdragontime, "LOCAL");
        this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
          this.dragonBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.dragonBidHistoryWin[0].CreatedBid, "LOCAL");
        });
        this.sesion1 = 0;
        // console.log(this.sesion1);
        this.countDownBID();
        this.countdown = setInterval(async () => {
          this.countDownBID();
          // console.log("detailBid", this.minutes, this.seconds);
          if(this.minutes == 0 && this.seconds == 0) {
            this.sesion1 = 1;
            clearInterval(this.countdown);
            if(this.sesion1 == 1) {
              // console.log(this.sesion1);
              this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                this.dragonBidHistoryWin = JSON.parse(dataBid);
                this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDdragontime", this.marketp2pBIDdragontime);
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.dragonBidHistoryWin = JSON.parse(dataBid);
              if(this.dragonBidHistoryWin.length == 0) {
                this.sendBidtoItems(ItemId);
              } else {
                // console.log("dragonBidHistoryWin", this.dragonBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.dragonBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if(this.minutescart == 0 && this.secondscart == 0) {
                    this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(async (dataBid: any) => {
                      this.dragonBidHistoryWin = JSON.parse(dataBid);
                      this.dragonBidHistoryWinuidBid = this.dragonBidHistoryWin[0].uidBid;
                      this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
                      
                      this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Batteries').doc(this.dragonBidHistoryWin[0].DocId).delete().then(() => {});
                      let crd = JSON.stringify({uid: this.globalID, price: Number(this.input_price_actual)});
                      this.current_data = JSON.parse(crd);
                      this.fs.collection('Bid/'+this.dragonBidHistoryWin[0].uidBid+'/Batteries').doc(this.dragonBidHistoryWin[0].DocId)
                      .set({
                        DocId: this.dragonBidHistoryWin[0].DocId,
                        ItemId: this.marketp2pBIDdragonID,
                        PriceNow: Number(this.marketp2pBIDdragonpriceNow),
                        BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
                      }).then(() => {}).catch((error: any) => {});

                      let now = new Date();
                      this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                      function addHours(numOfHours, date = new Date()) {
                        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                        return date;
                      }
                      const date = now;
                      let latest_date = addHours(0.1, now);
                      this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                      if(this.dragonBidHistoryWin[0].statusBid == 1) {
                        this.senddata.deletecartBidListmp(this.dragonBidHistoryWin[0].idBid, this.timeBID).subscribe((dataE: any) => {
                          this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
                        });
                        this.sesion1 = 0;
                      }
                    });
                    
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
                    setTimeout(function() {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(this.countdownCart);
                  } else {
                    this.stateExecuteBid = false;
                  }
                }, 1000);
              }
            });
          } else if(this.hours <= -1 || this.minutes <= -1 || this.seconds <= -1) {
            const alert = await this.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"],
            });
            await alert.present();
            clearInterval(this.countdown);
            this.loadingtext = true;
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.dragonBidHistoryWin = JSON.parse(dataBid);
              if(this.dragonBidHistoryWin.length == 0) {
                this.sendBidtoItems(ItemId);
              } else {
                // console.log("dragonBidHistoryWin", this.dragonBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.dragonBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                    this.dragonBidHistoryWin = JSON.parse(dataBid);
                    this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
                    this.stateExecuteBid = true;
                  });
                }, 1000);
              }
            });
          } 
        }, 1000);

      },(error: any) => {});
    }

    priceNowBiddragon(ItemId) {
      this.senddata.getselldgidBIDmp(ItemId);
    }

    checkBid(ItemId) {
      // this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {});
        let now = new Date();
        this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        // console.log(this.latest_date);

        if(this.latest_date > this.marketp2pBIDdragontime) {
          this.countdownBid = setInterval(() => {
            this.countDownBID();
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.dragonBidHistoryWin = JSON.parse(dataBid);
              this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
              this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
              this.stateExecuteBid = true;
              if(this.minutescart == 0 && this.secondscart == 0) {
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
        this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
          this.dragonBidHistoryWin = JSON.parse(dataBid);
          this.dragonBidHistoryWinuidBid = this.dragonBidHistoryWin[0].uidBid;
          this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
          // console.log(this.dragonBidHistoryWin);
        });
      }, 3000);
    }

    async countDownBID() {
      // Set the date we're counting down to
      var countDownDate = new Date(this.marketp2pBIDdragontime).getTime();

      // Update the count down every 1 second
      // var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.marketp2pdragontimeCount = 1;
      localStorage.setItem("Type", this.marketp2pBIDdragontype);
      this.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      // If the count down is over, write some text
      if (distance < 0 || this.hours < 0) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.marketp2pdragontimeCount = 0;
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
    }

    async timeCart(ItemId) {
      // console.log("2. execute timeCartSecond function");
      // const loading = await this.loadingController.create();
      // await loading.present();
      this.stateCollectionBid = 0;
      this.timeCartSecond(ItemId);
    }

    async timeCartSecond(ItemId) {
      // console.log("3. execute executeBid function");
      this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(async (dataBid: any) => {
        this.dragonBidHistoryWin = JSON.parse(dataBid);
        this.dragonBidHistoryWinuidBid = this.dragonBidHistoryWin[0].uidBid;
        this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
        this.executeBid(ItemId, this.dragonBidHistoryWin[0].idBid);
      });
    }

    sendBidtoItems(ItemId) {
      // console.log("the winner is empty");
      this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId)
      .delete()
      .then(() => {
        this.senddata
          .selldragontoitemsmp(
            this.marketp2pBIDdragonowner,
            ItemId
          )
          .subscribe((dataE: any) => {
              // console.log(dataE);
              this.fs.collection('Items/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId)
              .set({
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
                },
              })
              .then(async () => {
                const alert = await this.alertController.create({
                  header: "Warning !",
                  message: "This Auction has expired!",
                  buttons: ["OK"],
                });
                await alert.present();
                this.sesion1 = 0;
                // this.detailBid(ItemId);
                this.senddata.getselldgBIDmp().subscribe(
                  async (dataSell: any) => {
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.dragonsBID = dataSell;
                    this.marketp2pdragonLength = dataSell.length;
                    loading.dismiss();
                    // console.log(this.dragonsBID)
                    let marketp2pdragonDate = this.dragonsBID;
                    for (let i in marketp2pdragonDate) {
                      this.marketp2pdragonDate = marketp2pdragonDate[i].EditAt;
                      if(this.dragonsBID[i].imgbackground == 'exists') {
                        this.senddata.getallbackgroundsellmp(this.dragonsBID[i].ItemId).subscribe(
                          (dataBackground: any) => {
                            this.dragonsownedbg = JSON.parse(dataBackground);
                            this.marketp2pdragonBG = this.dragonsownedbg.imgbackground
                            // console.log(this.dragonsownedbg)
                          },
                          (error: any) => {}
                        );
                      }
                    }
                  },
                  (error: any) => {}
                );
              })
              .catch((error: any) => {
              });
              // this.checkkind(this.dragonBidHistoryWin[0].DocId);
            },(error: any) => {}
          );
      });
    }

    async executeBid(ItemId, idBid) {
      // validation data 
        // check status bid from highest place bid
        if(idBid == null) { //if bid list empty, document will delete on bid collection and send it back to items collection
          this.sesion1 = 0;
          // this.detailBid(ItemId);
          // console.log("the winner is empty");
          this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId)
          .delete()
          .then(() => {
            this.senddata
              .selldragontoitemsmp(
                this.marketp2pBIDdragonowner,
                ItemId
              )
              .subscribe(async (dataE: any) => {
                  // console.log(dataE);
                  this.fs.collection('Items/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(ItemId)
                  .set({
                    Id: ItemId,
                    ItemId: this.marketp2pBIDdragonID,
                    Attributes: {
                      AttackPoint: Number(this.marketp2pBIDdragonAttack),
                      DefensePoint: Number(this.marketp2pBIDdragonDefense),
                      Exp: Number(this.marketp2pBIDdragonExp),
                      HP: Number(this.marketp2pBIDdragonHP),
                      Hunger: Number(this.marketp2pdragonHunger),
                      Level: Number(this.marketp2pBIDdragonLevel),
                      MaxHP: Number(this.marketp2pdragonMaxHP),
                      MaxHunger: Number(this.marketp2pdragonMaxHunger)
                    },
                  })
                  .then(() => {
                    // console.log("Document expired!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                  });
                  // this.checkkind(this.dragonBidHistoryWin[0].DocId);
                },(error: any) => {}
              );
          });
        } else { //bid list already exists, document switch to higest bid
          if(this.stateExecuteBid == false) {
            // console.log("processing validation");
            // document has deleted from owner
            // console.log("6. delete document from owner");
            this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.dragonBidHistoryWin[0].DocId).delete().then(() => {});
            if(this.dragonBidHistoryWin[0].statusBid < 2) { //check status bid 0 or 1 from higest bid
              let crd = JSON.stringify({
                uid: this.globalID,
                price: Number(this.input_price_actual)
              });
              this.current_data = JSON.parse(crd);
              // document already switch to bid collection winner
              // console.log("7. add document to", this.dragonBidHistoryWin[0].uidBid);
              this.fs.collection('Bid/'+this.dragonBidHistoryWin[0].uidBid+'/Dragons').doc(this.dragonBidHistoryWin[0].DocId)
              .set({
                Id: ItemId,
                ItemId: this.marketp2pBIDdragonID,
                Attributes: {
                  AttackPoint: Number(this.marketp2pBIDdragonAttack),
                  DefensePoint: Number(this.marketp2pBIDdragonDefense),
                  Exp: Number(this.marketp2pBIDdragonExp),
                  HP: Number(this.marketp2pBIDdragonHP),
                  Hunger: Number(this.marketp2pdragonHunger),
                  Level: Number(this.marketp2pBIDdragonLevel),
                  MaxHP: Number(this.marketp2pdragonMaxHP),
                  MaxHunger: Number(this.marketp2pdragonMaxHunger)
                },
                PriceNow: Number(this.marketp2pBIDdragonpriceNow),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // generate time left cart
                let now = new Date();
                this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                const date = now;
                let latest_date = addHours(0.1, now);
                this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
                // post API to add bid list
                // console.log("9. posting data to API...");
                this.sessioncountdownCart = 0;
                if(this.dragonBidHistoryWin[0].notifBid == 0) {
                  this.senddata.addcartBidListmp(idBid, this.timeBID).subscribe((dataE: any) => {
                    this.sendNotificationtoWinBid(this.dragonBidHistoryWin[0].uidBid, idBid);
                    if(this.dragonBidHistoryWin[0].uidBid == this.globalID) {
                      this.cartBidcount = 1;
                      this.selectedBid = "Dragons";
                      this.state_buy = 2;
                      this.marketp2pdragonDocId = this.dragonBidHistoryWin[0].DocId;
                      // console.log(this.selectedBid);
                    }
                    let addcartBidListmp = JSON.parse(dataE);
                    // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                    this.sesion1 = 0;
                    this.sessioncountdownCart = 1;
                    this.senddata.getlastBidIdmp(addcartBidListmp.idBid, this.timeBID).subscribe((lastBid: any) => {
                      // console.log("lastBid", lastBid);
                      this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                        this.dragonBidHistoryWin = JSON.parse(dataBid);
                      });
                    });
                  });
                } else {
                  if(this.dragonBidHistoryWin[0].uidBid == this.globalID) {
                    this.cartBidcount = 1;
                    this.selectedBid = "Dragons";
                    this.state_buy = 2;
                    this.marketp2pdragonDocId = this.dragonBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                  }
                }
              }).catch((error: any) => {});
            } 
            this.countDownBID();
            this.countdown = setInterval(async () => {
              this.countDownBID();
              // console.log("executeBid", this.minutes, this.seconds);
              if(this.minutes == 0 && this.seconds == 0) {
                clearInterval(this.countdown);
              } else {
                clearInterval(this.countdown);
              }
            }, 1000);
          } else {
            this.senddata.getshistorydgidBIDmp(ItemId).subscribe((dataBid) => {
              this.dragonBidHistory = JSON.parse(dataBid);
            });
            // console.log("validation success");
          }
        }
      // end validation data
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
            this.senddata.getselleggidmp(marketp2peggDocId).subscribe(
              (dataDetail: any) => {
                this.eggDetail = JSON.parse(dataDetail);
                this.marketp2peggDocId = this.eggDetail.DocId;
                this.marketp2peggID = this.eggDetail.ItemId;
                this.marketp2peggowner = this.eggDetail.uid;
                this.marketp2peggprice = this.eggDetail.price;
                let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
                this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
                // console.log(this.marketp2peggpriceUSD);

                this.marketp2peggFee = (12 / 100) * this.marketp2peggprice;
                let marketp2peggprice_actual = this.marketp2peggprice - this.marketp2peggFee;
                this.fee_display = this.marketp2peggFee;
                this.price_display = marketp2peggprice_actual;
              },
              (error: any) => {}
            );
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

            this.senddata.getshistorydgidBIDmp(marketp2peggDocId).subscribe((dataBid) => {
              this.eggBidHistory = JSON.parse(dataBid);
            });

            let type = this.marketp2pBIDeggtype;
            if(type == "Free") {
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
            this.senddata.getselleggidmp(marketp2peggDocId).subscribe(
              (dataDetail: any) => {
                this.eggDetail = JSON.parse(dataDetail);
                this.marketp2peggDocId = this.eggDetail.DocId;
                this.marketp2peggID = this.eggDetail.ItemId;
                this.marketp2peggowner = this.eggDetail.uid;
                this.marketp2peggprice = this.eggDetail.price;
                let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
                this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
                // console.log(this.marketp2peggpriceUSD);

                this.marketp2peggFee = (12 / 100) * this.marketp2peggprice;
                let marketp2peggprice_actual = this.marketp2peggprice - this.marketp2peggFee;
                this.fee_display = this.marketp2peggFee;
                this.price_display = marketp2peggprice_actual;
              },
              (error: any) => {}
            );
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
                console.log(this.eggsBID)
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

            this.senddata.getshistorydgidBIDmp(marketp2peggDocId).subscribe((dataBid) => {
              this.eggBidHistory = JSON.parse(dataBid);
            });

            let type = this.marketp2pBIDeggtype;
            if(type == "Free") {
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
      this.senddata.getselleggidBIDmp(ItemId).subscribe(async (dataDetail: any) => {
        this.eggDetail = JSON.parse(dataDetail);
        this.marketp2pBIDeggDocId = this.eggDetail[0].DocId;
        this.marketp2pBIDeggID = this.eggDetail[0].ItemId;
        this.marketp2pBIDeggowner = this.eggDetail[0].uid;
        this.marketp2pBIDeggprice = this.eggDetail[0].price;
        this.marketp2pBIDeggtype = this.eggDetail[0].Type;
        this.marketp2pBIDeggpriceNow = this.eggDetail[0].PriceNow;
        this.marketp2pBIDeggtime = this.eggDetail[0].CreatedAt;
        let marketp2peggpriceUSD = this.marketp2pBIDeggpriceNow / this.current_bnb;
        this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);

        this.marketp2peggFee = (12 / 100) * this.marketp2pBIDeggpriceNow;
        let marketp2peggprice_actual = this.marketp2pBIDeggpriceNow - this.marketp2peggFee;
        this.fee_display = this.marketp2peggFee;
        this.price_display = marketp2peggprice_actual;

        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = this.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDeggtime, "LOCAL");
        this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
          this.eggBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.eggBidHistoryWin[0].CreatedBid, "LOCAL");
        });
        this.sesion1 = 0;
        // console.log(this.sesion1);
        this.countDownBIDEgg();
        this.countdown = setInterval(async () => {
          this.countDownBIDEgg();
          // console.log("detailBid", this.minutes, this.seconds);
          if(this.minutesEgg == 0 && this.secondsEgg == 0) {
            this.sesion1 = 1;
            clearInterval(this.countdown);
            if(this.sesion1 == 1) {
              // console.log(this.sesion1);
              this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                this.eggBidHistoryWin = JSON.parse(dataBid);
                this.executeBidEgg(ItemId, this.eggBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDeggtime", this.marketp2pBIDeggtime);
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.eggBidHistoryWin = JSON.parse(dataBid);
              if(this.eggBidHistoryWin.length == 0) {
                this.sendBidtoItemsEgg(ItemId);
              } else {
                // console.log("eggBidHistoryWin", this.eggBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.eggBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if(this.minutescart == 0 && this.secondscart == 0) {
                    this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(async (dataBid: any) => {
                      this.eggBidHistoryWin = JSON.parse(dataBid);
                      this.eggBidHistoryWinuidBid = this.eggBidHistoryWin[0].uidBid;
                      this.eggBidHistorycartwinBid = this.eggBidHistoryWin[0].cartCreatedBid;
                      
                      this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Batteries').doc(this.eggBidHistoryWin[0].DocId).delete().then(() => {});
                      let crd = JSON.stringify({uid: this.globalID, price: Number(this.input_price_actual)});
                      this.current_data = JSON.parse(crd);
                      this.fs.collection('Bid/'+this.eggBidHistoryWin[0].uidBid+'/Batteries').doc(this.eggBidHistoryWin[0].DocId)
                      .set({
                        DocId: this.eggBidHistoryWin[0].DocId,
                        ItemId: this.marketp2pBIDeggID,
                        PriceNow: Number(this.marketp2pBIDeggpriceNow),
                        BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
                      }).then(() => {}).catch((error: any) => {});

                      let now = new Date();
                      this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                      function addHours(numOfHours, date = new Date()) {
                        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                        return date;
                      }
                      const date = now;
                      let latest_date = addHours(0.1, now);
                      this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                      if(this.eggBidHistoryWin[0].statusBid == 1) {
                        this.senddata.deletecartBidListmp(this.eggBidHistoryWin[0].idBid, this.timeBID).subscribe((dataE: any) => {
                          this.executeBidEgg(ItemId, this.eggBidHistoryWin[0].idBid);
                        });
                        this.sesion1 = 0;
                      }
                    });
                    
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.executeBidEgg(ItemId, this.eggBidHistoryWin[0].idBid);
                    setTimeout(function() {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(this.countdownCart);
                  } else {
                    this.stateExecuteBid = false;
                  }
                }, 1000);
              }
            });
          } else if(this.hoursEgg <= -1 || this.minutesEgg <= -1 || this.secondsEgg <= -1) {
            const alert = await this.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"],
            });
            await alert.present();
            clearInterval(this.countdown);
            this.loadingtext = true;
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.eggBidHistoryWin = JSON.parse(dataBid);
              if(this.eggBidHistoryWin.length == 0) {
                this.sendBidtoItemsEgg(ItemId);
              } else {
                // console.log("eggBidHistoryWin", this.eggBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.eggBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                    this.eggBidHistoryWin = JSON.parse(dataBid);
                    this.executeBidEgg(ItemId, this.eggBidHistoryWin[0].idBid);
                    this.stateExecuteBid = true;
                  });
                }, 1000);
              }
            });
          } 
        }, 1000);
      },(error: any) => {});
    }

    priceNowBidegg(ItemId) {
      this.senddata.getselleggidBIDmp(ItemId);
    }

    sendBidtoItemsEgg(ItemId) {
      // console.log("the winner is empty");
      this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(ItemId)
      .delete()
      .then(() => {
        this.senddata
          .selleggtoitemsmp(
            this.marketp2pBIDeggowner,
            ItemId
          )
          .subscribe((dataE: any) => {
              // console.log(dataE);
              this.fs.collection('Items/'+ this.marketp2pBIDeggowner + '/Eggs').doc(ItemId)
              .set({
                DocId: ItemId,
                ItemId: this.marketp2pBIDeggID
              })
              .then(() => {
                this.sesion1 = 0;
                // this.detailBid(ItemId);
                this.senddata.getselleggBIDmp().subscribe(
                  async (dataSell: any) => {
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.eggsBID = dataSell;
                    this.marketp2peggLength = dataSell.length;
                    loading.dismiss();
                    // console.log(this.eggsBID)
                    let marketp2peggDate = this.eggsBID;
                  },
                  (error: any) => {}
                );
              })
              .catch((error: any) => {
              });
              // this.checkkind(this.dragonBidHistoryWin[0].DocId);
            },(error: any) => {}
          );
      });
    }

    async executeBidEgg(ItemId, idBid) {
      // validation data 
        // check status bid from highest place bid
        if(idBid == null) { //if bid list empty, document will delete on bid collection and send it back to items collection
          this.sesion1 = 0;
          // this.detailBid(ItemId);
          // console.log("the winner is empty");
          this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(ItemId)
          .delete()
          .then(() => {
            this.senddata
              .selleggtoitemsmp(
                this.marketp2pBIDeggowner,
                ItemId
              )
              .subscribe(async (dataE: any) => {
                  // console.log(dataE);
                  this.fs.collection('Items/'+ this.marketp2pBIDeggowner + '/Eggs').doc(ItemId)
                  .set({
                    Id: ItemId,
                    ItemId: this.marketp2pBIDeggID,
                  })
                  .then(() => {
                    // console.log("Document expired!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                  });
                },(error: any) => {}
              );
          });
        } else { //bid list already exists, document switch to higest bid
          if(this.stateExecuteBid == false) {
            // console.log("processing validation");
            // document has deleted from owner
            // console.log("6. delete document from owner");
            this.fs.collection('Bid/'+ this.marketp2pBIDeggowner + '/Eggs').doc(this.eggBidHistoryWin[0].DocId).delete().then(() => {});
            if(this.eggBidHistoryWin[0].statusBid < 2) { //check status bid 0 or 1 from higest bid
              let crd = JSON.stringify({
                uid: this.globalID,
                price: Number(this.input_price_actual)
              });
              this.current_data = JSON.parse(crd);
              // document already switch to bid collection winner
              // console.log("7. add document to", this.eggBidHistoryWin[0].uidBid);
              this.fs.collection('Bid/'+this.eggBidHistoryWin[0].uidBid+'/Eggs').doc(this.eggBidHistoryWin[0].DocId)
              .set({
                Id: this.eggBidHistoryWin[0].DocId,
                ItemId: this.marketp2pBIDeggID,
                PriceNow: Number(this.marketp2pBIDeggpriceNow),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // generate time left cart
                let now = new Date();
                this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                const date = now;
                let latest_date = addHours(0.1, now);
                this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
                // post API to add bid list
                // console.log("9. posting data to API...");
                this.sessioncountdownCart = 0;
                if(this.eggBidHistoryWin[0].notifBid == 0) {
                  this.senddata.addcartBidListmp(idBid, this.timeBID).subscribe((dataE: any) => {
                    this.sendNotificationtoWinBid(this.eggBidHistoryWin[0].uidBid, idBid);
                    if(this.eggBidHistoryWin[0].uidBid == this.globalID) {
                      this.cartBidcount = 1;
                      this.selectedBid = "Eggs";
                      this.state_buy = 2;
                      this.marketp2peggDocId = this.eggBidHistoryWin[0].DocId;
                      // console.log(this.selectedBid);
                      this.stateExecuteBid = true;
                    }
                    let addcartBidListmp = JSON.parse(dataE);
                    // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                    this.sesion1 = 0;
                    this.sessioncountdownCart = 1;
                    this.senddata.getlastBidIdmp(addcartBidListmp.idBid, this.timeBID).subscribe((lastBid: any) => {
                      // console.log("lastBid", lastBid);
                      this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                        this.eggBidHistoryWin = JSON.parse(dataBid);
                      });
                    });
                  });
                } else {
                  if(this.eggBidHistoryWin[0].uidBid == this.globalID) {
                    this.cartBidcount = 1;
                    this.selectedBid = "Eggs";
                    this.state_buy = 2;
                    this.marketp2peggDocId = this.eggBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                    this.stateExecuteBid = true;
                  }
                }
              }).catch((error: any) => {});
            } 
            this.countDownBID();
            this.countdown = setInterval(async () => {
              this.countDownBID();
              // console.log("executeBid", this.minutes, this.seconds);
              if(this.minutes == 0 && this.seconds == 0) {
                clearInterval(this.countdown);
              } else {
                clearInterval(this.countdown);
              }
            }, 1000);
          } else {
            this.senddata.getshistorydgidBIDmp(ItemId).subscribe((dataBid) => {
              this.eggBidHistory = JSON.parse(dataBid);
            });
            // console.log("validation success");
          }
        }
      // end validation data
    }

    async countDownBIDEgg() {
      // Set the date we're counting down to
      var countDownDate = new Date(this.marketp2pBIDeggtime).getTime();
      // Update the count down every 1 second
      // var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.marketp2peggtimeCount = 1;
      localStorage.setItem("Type", this.marketp2pBIDeggtype);
      this.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      this.hoursEgg = hours;
      this.minutesEgg = minutes;
      this.secondsEgg = seconds;
      // }, 1000);
    }

  // BATTERY
    checkkindBattery(marketp2pbatteryDocId) {
      let tabs = localStorage.getItem("tabs");
      let lastpay = localStorage.getItem("lastpay");
      let lastbattery = localStorage.getItem("lastbattery");
      if (lastpay == lastbattery) {
        if (tabs == "sell") {
          this.state_buy = 3;
          let lastseen = localStorage.getItem("lastseen");
          if (lastseen == "battery") {
            this.senddata.getsellbatteryidmp(marketp2pbatteryDocId).subscribe(
              (dataDetail: any) => {
                this.batteryDetail = JSON.parse(dataDetail);
                this.marketp2pbatteryDocId = this.batteryDetail.DocId;
                this.marketp2pbatteryID = this.batteryDetail.ItemId;
                this.marketp2pbatteryowner = this.batteryDetail.uid;
                this.marketp2pbatteryprice = this.batteryDetail.price;
                let marketp2pbatterypriceUSD = this.batteryDetail.price / this.current_bnb;
                this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
                // console.log(this.marketp2pbatterypriceUSD);
              },
              (error: any) => {}
            );
          }
        } else if (tabs == "bid") {
          let lastseen = localStorage.getItem("lastseen");
          this.loadingtext = true;
          if (lastseen == "battery") {
            this.senddata.getsellbatteryBIDmp().subscribe(
              async (dataSell: any) => {
                const loading = await this.loadingController.create();
                await loading.present();
                this.batterysBID = dataSell;
                this.marketp2pdragonLength = dataSell.length;
                loading.dismiss();
                // console.log(this.batterysBID)
                let marketp2pdragonDate = this.batterysBID;
              },
              (error: any) => {}
            );
            this.loadingtext = false;
            this.sesion1 = 0;
            this.detailBidbattery(marketp2pbatteryDocId);

            this.countDownBID();
            this.countdown = setInterval(() => {
              this.countDownBID();
              // console.log("checkkind", this.minutes, this.seconds);
            }, 1000);

            this.senddata.getshistorydgidBIDmp(marketp2pbatteryDocId).subscribe((dataBid) => {
              this.batteryBidHistory = JSON.parse(dataBid);
            });

            let type = this.marketp2pBIDbatterytype;
            if(type == "Free") {
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
            this.senddata.getsellbatteryidmp(marketp2pbatteryDocId).subscribe(
              (dataDetail: any) => {
                this.batteryDetail = JSON.parse(dataDetail);
                this.marketp2pbatteryDocId = this.batteryDetail.DocId;
                this.marketp2pbatteryID = this.batteryDetail.ItemId;
                this.marketp2pbatteryowner = this.batteryDetail.uid;
                this.marketp2pbatteryprice = this.batteryDetail.price;
                let marketp2pbatterypriceUSD = this.batteryDetail.price / this.current_bnb;
                this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
                // console.log(this.marketp2pbatterypriceUSD);
                this.marketp2pbatteryFee = (12 / 100) * this.marketp2pbatteryprice;
                let marketp2pbatteryprice_actual = this.marketp2pbatteryprice - this.marketp2pbatteryFee;
                this.fee_display = this.marketp2pbatteryFee;
                this.price_display = marketp2pbatteryprice_actual;
              },
              (error: any) => {}
            );
          }
        } else if (tabs == "bid") {
          let lastseen = localStorage.getItem("lastseen");
          this.loadingtext = true;
          if (lastseen == "battery") {
            this.senddata.getsellbatteryBIDmp().subscribe(
              async (dataSell: any) => {
                const loading = await this.loadingController.create();
                await loading.present();
                this.batterysBID = dataSell;
                this.marketp2pdragonLength = dataSell.length;
                loading.dismiss();
                // console.log(this.batterysBID)
                let marketp2pdragonDate = this.batterysBID;
              },
              (error: any) => {}
            );
            this.loadingtext = false;
            this.sesion1 = 0;
            this.detailBidbattery(marketp2pbatteryDocId);

            this.countDownBID();
            this.countdown = setInterval(() => {
              this.countDownBID();
              // console.log("checkkind", this.minutes, this.seconds);
            }, 1000);

            this.senddata.getshistorydgidBIDmp(marketp2pbatteryDocId).subscribe((dataBid) => {
              this.batteryBidHistory = JSON.parse(dataBid);
            });

            let type = this.marketp2pBIDbatterytype;
            if(type == "Free") {
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
      this.senddata.getsellbatteryidBIDmp(ItemId).subscribe(async (dataDetail: any) => {
        this.batteryDetail = JSON.parse(dataDetail);
        this.marketp2pBIDbatteryDocId = this.batteryDetail[0].DocId;
        this.marketp2pBIDbatteryID = this.batteryDetail[0].ItemId;
        this.marketp2pBIDbatteryowner = this.batteryDetail[0].uid;
        this.marketp2pBIDbatteryprice = this.batteryDetail[0].price;
        this.marketp2pBIDbatterytype = this.batteryDetail[0].Type;
        this.marketp2pBIDbatterypriceNow = this.batteryDetail[0].PriceNow;
        this.marketp2pBIDbatterytime = this.batteryDetail[0].CreatedAt;
        let marketp2pbatterypriceUSD = this.marketp2pBIDbatterypriceNow / this.current_bnb;
        this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
        // console.log(this.marketp2pBIDdragonpriceBid);

        this.marketp2pbatteryFee = (12 / 100) * this.marketp2pBIDbatterypriceNow;
        let marketp2pbatteryprice_actual = this.marketp2pBIDbatterypriceNow - this.marketp2pbatteryFee;
        this.fee_display = this.marketp2pbatteryFee;
        this.price_display = marketp2pbatteryprice_actual;

        let now = new Date();
        var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm:ss");
        var latest_dateUTC = this.datepipe.transform(nowUtc, "yyyy-MM-dd HH:mm:ss");
        // console.log("Date now", this.latest_date, "LOCAL");
        // console.log("Date now", latest_dateUTC, "UTC");
        // console.log("End of bid", this.marketp2pBIDbatterytime, "LOCAL");
        this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
          this.batteryBidHistoryWin = JSON.parse(dataBid);
          // console.log("Last update place bid", this.batteryBidHistoryWin[0].CreatedBid, "LOCAL");
        });
        this.sesion1 = 0;
        // console.log(this.sesion1);
        this.countDownBIDBattery();
        this.countdown = setInterval(async () => {
          this.countDownBIDBattery();
          // console.log("detailBid", this.minutes, this.seconds);
          if(this.minutesBattery == 0 && this.secondsBattery == 0) {
            this.sesion1 = 1;
            clearInterval(this.countdown);
            if(this.sesion1 == 1) {
              // console.log(this.sesion1);
              this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                this.batteryBidHistoryWin = JSON.parse(dataBid);
                this.executeBidBattery(ItemId, this.batteryBidHistoryWin[0].idBid);
              });
            }
            // console.log("marketp2pBIDbatterytime", this.marketp2pBIDbatterytime);
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.batteryBidHistoryWin = JSON.parse(dataBid);
              if(this.batteryBidHistoryWin.length == 0) {
                this.sendBidtoItemsBattery(ItemId);
              } else {
                // console.log("batteryBidHistoryWin", this.batteryBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.batteryBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  if(this.minutescart == 0 && this.secondscart == 0) {
                    this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(async (dataBid: any) => {
                      this.batteryBidHistoryWin = JSON.parse(dataBid);
                      this.batteryBidHistoryWinuidBid = this.batteryBidHistoryWin[0].uidBid;
                      this.batteryBidHistorycartwinBid = this.batteryBidHistoryWin[0].cartCreatedBid;
                      
                      this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.batteryBidHistoryWin[0].DocId).delete().then(() => {});
                      let crd = JSON.stringify({uid: this.globalID, price: Number(this.input_price_actual)});
                      this.current_data = JSON.parse(crd);
                      this.fs.collection('Bid/'+this.batteryBidHistoryWin[0].uidBid+'/Batteries').doc(this.batteryBidHistoryWin[0].DocId)
                      .set({
                        DocId: this.batteryBidHistoryWin[0].DocId,
                        ItemId: this.marketp2pBIDbatteryID,
                        PriceNow: Number(this.marketp2pBIDbatterypriceNow),
                        BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
                      }).then(() => {}).catch((error: any) => {});

                      let now = new Date();
                      this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                      function addHours(numOfHours, date = new Date()) {
                        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                        return date;
                      }
                      const date = now;
                      let latest_date = addHours(0.1, now);
                      this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                      if(this.batteryBidHistoryWin[0].statusBid == 1) {
                        this.senddata.deletecartBidListmp(this.batteryBidHistoryWin[0].idBid, this.timeBID).subscribe((dataE: any) => {
                          this.executeBidBattery(ItemId, this.batteryBidHistoryWin[0].idBid);
                        });
                        this.sesion1 = 0;
                      }
                    });
                    
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.executeBidBattery(ItemId, this.batteryBidHistoryWin[0].idBid);
                    setTimeout(function() {
                      window.location.replace('/tabs/p2pmarket');
                      loading.dismiss();
                    }, 2000);
                    clearInterval(this.countdownCart);
                  } else {
                    this.stateExecuteBid = false;
                  }
                }, 1000);
              }
            });
          } else if(this.hoursBattery <= -1 || this.minutesBattery <= -1 || this.secondsBattery <= -1) {
            const alert = await this.alertController.create({
              header: "Error !",
              message: "Oopss, Something went wrong.",
              buttons: ["OK"],
            });
            await alert.present();
            clearInterval(this.countdown);
            this.loadingtext = true;
            this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
              this.batteryBidHistoryWin = JSON.parse(dataBid);
              if(this.batteryBidHistoryWin.length == 0) {
                this.sendBidtoItemsBattery(ItemId);
              } else {
                // console.log("batteryBidHistoryWin", this.batteryBidHistoryWin[0].cartCreatedBid);
                this.countdownCart = setInterval(async () => {
                  this.checkcountDowncartBID(this.batteryBidHistoryWin[0].cartCreatedBid);
                  // console.log("detailBid cart", this.minutescart, this.secondscart);
                  this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                    this.batteryBidHistoryWin = JSON.parse(dataBid);
                    this.executeBidBattery(ItemId, this.batteryBidHistoryWin[0].idBid);
                    this.stateExecuteBid = true;
                  });
                }, 1000);
              }
            });
          } 
        }, 1000);
      },(error: any) => {});
    }

    priceNowBidbattery(ItemId) {
      this.senddata.getsellbatteryidBIDmp(ItemId);
    }

    sendBidtoItemsBattery(ItemId) {
      // console.log("the winner is empty");
      this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId)
      .delete()
      .then(() => {
        this.senddata
          .sellbatterytoitemsmp(
            this.marketp2pBIDbatteryowner,
            ItemId
          )
          .subscribe((dataE: any) => {
              // console.log(dataE);
              this.fs.collection('Items/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId)
              .set({
                DocId: ItemId,
                ItemId: this.marketp2pBIDbatteryID
              })
              .then(async () => {
                const alert = await this.alertController.create({
                  header: "Warning !",
                  message: "This Auction has expired!",
                  buttons: ["OK"],
                });
                await alert.present();
                this.sesion1 = 0;
                // this.detailBid(ItemId);
                this.senddata.getsellbatteryBIDmp().subscribe(
                  async (dataSell: any) => {
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.batterysBID = dataSell;
                    this.marketp2pbatteryLength = dataSell.length;
                    loading.dismiss();
                    // console.log(this.batterysBID)
                    let marketp2pbatteryDate = this.batterysBID;
                  },
                  (error: any) => {}
                );
              })
              .catch((error: any) => {
              });
              // this.checkkind(this.dragonBidHistoryWin[0].DocId);
            },(error: any) => {}
          );
      });
    }

    async executeBidBattery(ItemId, idBid) {
      // validation data 
        // check status bid from highest place bid
        if(idBid == null) { //if bid list empty, document will delete on bid collection and send it back to items collection
          this.sesion1 = 0;
          // this.detailBid(ItemId);
          // console.log("the winner is empty");
          this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId)
          .delete()
          .then(() => {
            this.senddata
              .sellbatterytoitemsmp(
                this.marketp2pBIDbatteryowner,
                ItemId
              )
              .subscribe(async (dataE: any) => {
                  // console.log(dataE);
                  this.fs.collection('Items/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(ItemId)
                  .set({
                    DocId: ItemId,
                    ItemId: this.marketp2pBIDbatteryID,
                  })
                  .then(() => {
                    // console.log("Document expired!");
                    // this.openDialog("Item Listed");
                  })
                  .catch((error: any) => {
                  });
                  // this.checkkind(this.batteryBidHistoryWin[0].DocId);
                },(error: any) => {}
              );
          });
        } else { //bid list already exists, document switch to higest bid
          if(this.stateExecuteBid == false) {
            // console.log("processing validation");
            // document has deleted from owner
            // console.log("6. delete document from owner");
            this.fs.collection('Bid/'+ this.marketp2pBIDbatteryowner + '/Batteries').doc(this.batteryBidHistoryWin[0].DocId).delete().then(() => {});
            if(this.batteryBidHistoryWin[0].statusBid < 2) { //check status bid 0 or 1 from higest bid
              let crd = JSON.stringify({
                uid: this.globalID,
                price: Number(this.input_price_actual)
              });
              this.current_data = JSON.parse(crd);
              // document already switch to bid collection winner
              // console.log("7. add document to", this.batteryBidHistoryWin[0].uidBid);
              this.fs.collection('Bid/'+this.batteryBidHistoryWin[0].uidBid+'/Batteries').doc(this.batteryBidHistoryWin[0].DocId)
              .set({
                DocId: this.batteryBidHistoryWin[0].DocId,
                ItemId: this.marketp2pBIDbatteryID,
                PriceNow: Number(this.marketp2pBIDbatterypriceNow),
                BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
              })
              .then(() => {
                // generate time left cart
                let now = new Date();
                this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
                function addHours(numOfHours, date = new Date()) {
                  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
                  return date;
                }
                const date = now;
                let latest_date = addHours(0.1, now);
                this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
                // console.log("8. Generate countdown cart, timeleft cart bid in 5 minutes", this.timeBID);
                // post API to add bid list
                // console.log("9. posting data to API...");
                this.sessioncountdownCart = 0;
                if(this.batteryBidHistoryWin[0].notifBid == 0) {
                  this.senddata.addcartBidListmp(idBid, this.timeBID).subscribe((dataE: any) => {
                    this.sendNotificationtoWinBid(this.batteryBidHistoryWin[0].uidBid, idBid);
                    if(this.batteryBidHistoryWin[0].uidBid == this.globalID) {
                      this.cartBidcount = 1;
                      this.selectedBid = "Batteries";
                      this.state_buy = 2;
                      this.marketp2pbatteryDocId = this.batteryBidHistoryWin[0].DocId;
                      // console.log(this.selectedBid);
                      this.stateExecuteBid = true;
                    }
                    let addcartBidListmp = JSON.parse(dataE);
                    // console.log("executeBid addcartBidListmp", idBid, addcartBidListmp);
                    this.sesion1 = 0;
                    this.sessioncountdownCart = 1;
                    this.senddata.getlastBidIdmp(addcartBidListmp.idBid, this.timeBID).subscribe((lastBid: any) => {
                      // console.log("lastBid", lastBid);
                      this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe((dataBid: any) => {
                        this.batteryBidHistoryWin = JSON.parse(dataBid);
                      });
                    });
                  });
                } else {
                  if(this.batteryBidHistoryWin[0].uidBid == this.globalID) {
                    this.cartBidcount = 1;
                    this.selectedBid = "Batteries";
                    this.state_buy = 2;
                    this.marketp2pbatteryDocId = this.batteryBidHistoryWin[0].DocId;
                    // console.log(this.selectedBid);
                    this.stateExecuteBid = true;
                  }
                }
              }).catch((error: any) => {});
            } 
            this.countDownBID();
            this.countdown = setInterval(async () => {
              this.countDownBID();
              // console.log("executeBid", this.minutes, this.seconds);
              if(this.minutes == 0 && this.seconds == 0) {
                clearInterval(this.countdown);
              } else {
                clearInterval(this.countdown);
              }
            }, 1000);
          } else {
            this.senddata.getshistorydgidBIDmp(ItemId).subscribe((dataBid) => {
              this.batteryBidHistory = JSON.parse(dataBid);
            });
            // console.log("validation success");
          }
        }
      // end validation data
    }

    async countDownBIDBattery() {
      // Set the date we're counting down to
      var countDownDate = new Date(this.marketp2pBIDbatterytime).getTime();

      // Update the count down every 1 second
      // var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.marketp2pbatterytimeCount = 1;
      localStorage.setItem("Type", this.marketp2pBIDbatterytype);
      this.input_price_actual = localStorage.getItem("Input");
      // console.log(this.marketp2pdragontimeCount)
      this.hoursBattery = hours;
      this.minutesBattery = minutes;
      this.secondsBattery = seconds;
      // }, 1000);
    }

  async checkcountDowncartBID(cartCreatedBid) {
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
    var hourscart = Math.floor(
      (distancecart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutescart = Math.floor((distancecart % (1000 * 60 * 60)) / (1000 * 60));
    var secondscart = Math.floor((distancecart % (1000 * 60)) / 1000);

    localStorage.setItem("Type", this.marketp2pBIDdragontype);
    this.input_price_actual = localStorage.getItem("Input");
    // console.log(this.marketp2pdragontimeCount)
    this.hourscart = hourscart;
    this.minutescart = minutescart;
    this.secondscart = secondscart;
    this.carttimeleft = 1;
    this.sesicart = 1;
    // this.state_buy = 5;
    // this.stateHash = true;
    // If the count down is over, write some text
    if (distancecart < 0) {
      this.hourscart = 0;
      this.minutescart = 0;
      this.secondscart = 0;
      this.carttimeleft = 0;
      this.sesicart = 0;
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
  }

  async countDowncartBID() {
    // Set the date we're counting down to
    var countDownDatecart = new Date(this.dragonBidHistorycartwinBid).getTime();
    // console.log(countDownDatecart);
    // Update the count down every 1 second
    // var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distancecart = countDownDatecart - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distancecart / (1000 * 60 * 60 * 24));
    var hourscart = Math.floor(
      (distancecart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutescart = Math.floor((distancecart % (1000 * 60 * 60)) / (1000 * 60));
    var secondscart = Math.floor((distancecart % (1000 * 60)) / 1000);

    localStorage.setItem("Type", this.marketp2pBIDdragontype);
    this.input_price_actual = localStorage.getItem("Input");
    // console.log(this.marketp2pdragontimeCount)
    this.hourscart = hourscart;
    this.minutescart = minutescart;
    this.secondscart = secondscart;
    this.carttimeleft = 1;
    this.sesicart = 1;
    // this.state_buy = 5;
    // this.stateHash = true;
    // If the count down is over, write some text
    if (distancecart < 0) {
      this.hourscart = 0;
      this.minutescart = 0;
      this.secondscart = 0;
      this.carttimeleft = 0;
      this.sesicart = 0;
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
  }

  sessionCart() {
    if(this.sesicart == 0) {
      this.checkkind(this.marketp2pBIDdragonDocId);
    }
  }

  async executecartBid(ItemId) {
    this.senddata.getswinhistorydgidBIDmp(ItemId).subscribe(async (dataBid: any) => {
      this.dragonBidHistoryWin = JSON.parse(dataBid);
      this.dragonBidHistoryWinuidBid = this.dragonBidHistoryWin[0].uidBid;
      this.dragonBidHistorycartwinBid = this.dragonBidHistoryWin[0].cartCreatedBid;
      
      this.fs.collection('Bid/'+ this.marketp2pBIDdragonowner + '/Dragons').doc(this.dragonBidHistoryWin[0].DocId).delete().then(() => {});
      let crd = JSON.stringify({uid: this.globalID, price: Number(this.input_price_actual)});
      this.current_data = JSON.parse(crd);
      this.fs.collection('Bid/'+this.dragonBidHistoryWin[0].uidBid+'/Dragons').doc(this.dragonBidHistoryWin[0].DocId)
      .set({
        Id: ItemId,
        ItemId: this.marketp2pBIDdragonID,
        Attributes: {
          AttackPoint: Number(this.marketp2pBIDdragonAttack),
          DefensePoint: Number(this.marketp2pBIDdragonDefense),
          Exp: Number(this.marketp2pBIDdragonExp),
          HP: Number(this.marketp2pBIDdragonHP),
          Hunger: Number(this.marketp2pdragonHunger),
          Level: Number(this.marketp2pBIDdragonLevel),
          MaxHP: Number(this.marketp2pdragonMaxHP),
          MaxHunger: Number(this.marketp2pdragonMaxHunger)
        },
        PriceNow: Number(this.marketp2pBIDdragonpriceNow),
        BidList : firebase.firestore.FieldValue.arrayUnion(this.current_data)
      }).then(() => {}).catch((error: any) => {});

      let now = new Date();
      this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        return date;
      }
      const date = now;
      let latest_date = addHours(0.1, now);
      this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
      if(this.dragonBidHistoryWin[0].statusBid == 1) {
        this.senddata.deletecartBidListmp(this.dragonBidHistoryWin[0].idBid, this.timeBID).subscribe((dataE: any) => {});
        // this.timeCart(ItemId);
        this.sesion1 = 0;
      } else {
         
      }
    },
    (error: any) => {});
  }

  checkkindGroup(iditemsFood) {
    let lastseen = localStorage.getItem("lastseen");
    this.senddata.getsellfoodidmp(iditemsFood).subscribe(
      (dataDetail: any) => {
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
      },
      (error: any) => {}
    );
  }

  checkkindJakets(iditemsJakets) {
    let lastseen = localStorage.getItem("lastseen");
    this.senddata.getselljaketsidmp(iditemsJakets).subscribe(
      (dataDetail: any) => {
        this.jaketsDetail = JSON.parse(dataDetail);
        this.marketfashionJaketsOID = this.jaketsDetail.id_product;
        this.marketfashionJaketsID = this.jaketsDetail.deskripsi;
        this.marketfashionJaketsImg = this.jaketsDetail.gambar;
        this.marketfashionJaketsprice = this.jaketsDetail.harga;
        // console.log(JSON.parse(dataDetail));
      },
      (error: any) => {}
    );
  }

  countDownSell() {
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
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
      this.senddata.getselldgmp().subscribe(
        async (dataSell: any) => {
          this.dragons = dataSell;
          this.marketp2pdragonLength = dataSell.length;
          setTimeout(function () {
            window.location.replace("/tabs/p2pmarket");
          }, 50000);
          let tabs = localStorage.getItem("tabs");
          tabs = "sell";
        },
        (error: any) => {}
      );

      this.fs.collection('Sell/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId)
      .delete()
      .then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.marketp2pdragonowner;
        // console.log("Items has been expired!");
        this.senddata
          .selldragontoitemsmp(
            this.marketp2pdragonowner,
            this.marketp2pdragonDocId
          )
          .subscribe(async (dataE: any) => {
              // console.log(dataE);
              this.fs.collection('Items/'+ this.marketp2pdragonowner + '/Dragons').doc(this.marketp2pdragonDocId)
              .set({
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
              })
              .then(() => {
                // console.log("Document successfully sold!");
                // this.openDialog("Item Listed");
              })
              .catch((error: any) => {
                
              });
              const alert = await this.alertController.create({
                header: "Attention",
                message: "Items has been expired!",
                buttons: ["OK"],
              });
              await alert.present();
              this.checkkind(this.marketp2pdragonID);
            },(error: any) => {}
          );
      });
    }
    // }, 1000);
  }

  checkitemscreated() {
    this.fs
      .collection("Items")
      .doc(this.globalID)
      .valueChanges()
      .subscribe((datas: any) => {
        console.log(datas.Count);
        if (datas == undefined) {
          this.fs
            .collection("Items")
            .doc(this.globalID)
            .set({
              LastUpdated: this.newTime(),
              Dragon: [],
              Egg: [],
              Battery: [],
              Food: [],
            });
        }
      });
  }

  setdgbuycart() {}

  async onPriceChange(input_price: number) {
    localStorage.setItem("Input", input_price.toString());
    this.state_buy = 4;
    let marketp2peggprice_actual = input_price - this.marketp2peggFee;    
    this.price_display = marketp2peggprice_actual;
    // console.log(this.price_display);
    if (input_price == this.marketp2pBIDdragonpriceNow || input_price == this.marketp2pBIDeggpriceNow) {
      const alert = await this.alertController.create({
        header: "Warning !",
        message: "Please Bid With Higher Price.",
        buttons: ["OK"],
      });
      await alert.present();
    }
  }

  addItemRoulette(uid: any, kind: string, txhash: string) {
    //this.getcountRolling();
    if (kind == "10") {
      this.fs
        .collection("Roulette")
        .doc(uid)
        .update({
          Detail: firebase.firestore.FieldValue.arrayUnion(
            JSON.stringify({
              CreatedAt: this.newTime(),
              Count: 10,
              txHash: txhash,
            })
          ),
        })
        .then(() => {
          //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
          this.fs
            .collection("Roulette")
            .doc(uid)
            .update({ Count: firebase.firestore.FieldValue.increment(10) });
          this.openDialog("Transaction Success, 10 Roulette Added");
        })
        .catch((error: any) => {
          // The document probably doesn't exist.
          this.fs
            .collection("Roulette")
            .doc(uid)
            .set({ LastUpdated: this.newTime() });
          this.fs.collection("Roulette").doc(uid).update({ Count: 10 });
          this.fs.collection("Roulette").doc(uid).update({ Used: 0 });
          this.fs
            .collection("Roulette")
            .doc(uid)
            .update({
              Detail: firebase.firestore.FieldValue.arrayUnion(
                JSON.stringify({
                  CreatedAt: this.newTime(),
                  Count: 10,
                  txHash: txhash,
                })
              ),
            });
          this.openDialog("Transaction Success, 10 Roulette Added");
        });
    } else if (kind == "1") {
      this.fs
        .collection("Roulette")
        .doc(uid)
        .update({
          Detail: firebase.firestore.FieldValue.arrayUnion(
            JSON.stringify({
              CreatedAt: this.newTime(),
              Count: 1,
              txHash: txhash,
            })
          ),
        })
        .then(() => {
          //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
          this.fs
            .collection("Roulette")
            .doc(uid)
            .update({ Count: firebase.firestore.FieldValue.increment(1) });
          this.openDialog("Transaction Success, 1 Roulette Added");
        })
        .catch((error: any) => {
          // The document probably doesn't exist.
          this.fs
            .collection("Roulette")
            .doc(uid)
            .set({ LastUpdated: this.newTime() });
          this.fs.collection("Roulette").doc(uid).update({ Count: 1 });
          this.fs.collection("Roulette").doc(uid).update({ Used: 0 });
          this.fs
            .collection("Roulette")
            .doc(uid)
            .update({
              Detail: firebase.firestore.FieldValue.arrayUnion(
                JSON.stringify({
                  CreatedAt: this.newTime(),
                  Count: 1,
                  txHash: txhash,
                })
              ),
            });
          this.openDialog("Transaction Success, 1 Roulette Added");
          // if(this.count_roulette % 5 == 0 && this.count_roulette != 0){
          //   this.fs.collection('Roulette').doc(uid).update({Count : firebase.firestore.FieldValue.increment(1)});
          // }
        });
    }
  }

  getPaymentCount() {
    this.fs
      .collection("Payment")
      .doc(this.globalID)
      .valueChanges()
      .subscribe((datas: any) => {
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
            this.fs
              .collection("Payment")
              .doc(this.globalID)
              .update({ Gacha10: 0 });
          }
          if (datas.Gacha1 < 0) {
            this.fs
              .collection("Payment")
              .doc(this.globalID)
              .update({ Gacha1: 0 });
          }
        } else {
          this.fs
            .collection("Payment")
            .doc(this.globalID)
            .set({ LastUpdated: this.newTime() });
          this.fs
            .collection("Payment")
            .doc(this.globalID)
            .update({ Gacha10: 0, Gacha1: 0 })
            .then(() => {});
        }

        //this.slot_roulette = test
        // console.log(datas);
      });
  }

  async favorite_item(DocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.senddata.favoritedmp(this.globalID, DocId).subscribe(
      async (data: any) => {
        this.senddata.getselldglimitmp().subscribe(
          (dataSell: any) => {
            this.dragons = dataSell;
          },
          (error: any) => {}
        );
        loading.dismiss();
      },
      (error: any) => {}
    );
  }

  checkselleggmp() {
    this.senddata.getselleggmp().subscribe(
      (dataSell: any) => {
        this.sorteggs = dataSell;
        this.marketp2peggLength = dataSell.length;
      },
      (error: any) => {}
    );
  }

  openDialog(msg: string) {}

  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }

  sendNotificationtoWinBid(uidWinBid, idBid) {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (tokenPushNotification) => {
         if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(uidWinBid).subscribe((dataToken:any) => {
            this.tokenNotif = JSON.parse(dataToken);
            this.senddata.postNotificationtoWinBidmp(uidWinBid, this.tokenNotif.tokenPushNotification, idBid).subscribe((data:any) => {});
            // console.log(this.tokenNotif.tokenPushNotification);
          });
         } else {
           // console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        // console.log('An error occurred while retrieving token. ', err);
    });
  }

  sendNotificationtoLoseBid(uidLoseBid, idBid) {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (tokenPushNotification) => {
         if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(uidLoseBid).subscribe((dataToken:any) => {
            this.tokenNotif = JSON.parse(dataToken);
            this.senddata.postNotificationtoLoseBidmp(uidLoseBid, this.tokenNotif.tokenPushNotification, idBid).subscribe((data:any) => {
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
     }).catch((err) => {
        // console.log('An error occurred while retrieving token. ', err);
    });
  }

  sendNotificationtoLosesBid(uidLoseBid, idBid) {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (tokenPushNotification) => {
         if (tokenPushNotification) {
          this.senddata.gettokenOwnermp(uidLoseBid).subscribe((dataToken:any) => {
            this.tokenNotif = JSON.parse(dataToken);
            // console.log("gettokenOwnermp", this.tokenNotif.tokenPushNotification);
            this.senddata.postNotificationtoLosesBidmp(uidLoseBid, this.tokenNotif.tokenPushNotification, idBid).subscribe((data:any) => {
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
     }).catch((err) => {
        // console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      // console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  inputAddress(event: any) {
    const query = event.target.value;
    localStorage.setItem("alamat", query);
  }

  inputPostalCode(event: any) {
    const query = event.target.value;
    localStorage.setItem("kode_pos", query);
  }

  searchAddress(event: any) {
    const query = event.target.value;

    this.senddata.getOngkirmp(query).subscribe((data) => {
      if (data) {
        this.searchResults = JSON.parse(data);
        const rajaongkir = this.searchResults.rajaongkir
        const results = rajaongkir.results
        const cost = results[0]
        const resultCost = cost.costs
        this.resultCost = resultCost
        console.log(this.resultCost)
        for(let i in this.resultCost) {
          const viewCost = this.resultCost[i].cost
          const actualCost = viewCost[0].value
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

  addJaketsMetalicana(globalID, product_id) {
    var DocIdJakets = this.newTime();
    var updateJakets = 1;
    const address = localStorage.getItem("alamat");
    const postal_id = localStorage.getItem("kode_pos");
    const cities = localStorage.getItem("kota");
    if(product_id == 17) {
      this.codeHoodie = "HMTL";
      this.ItemIdJaket = "ITM13";
    } else if(product_id == 18) {
      this.codeHoodie = "HMER";
      this.ItemIdJaket = "ITM1";
    } else if(product_id == 19) {
      this.codeHoodie = "HRTR";
      this.ItemIdJaket = "ITM11";
    } 
    this.senddata.getselljaketsUserownedmp(globalID).subscribe(
      (dataSell: any) => {
        this.jaketsHigh = JSON.parse(dataSell);
        const qrCodeData = {
          ItemId: this.ItemIdJaket,
          QrCodeData: {
            UID: globalID,
            Address: address+", "+postal_id,
            City: cities,
            Claimmed: false,
            CreatedAt: this.newTime(),
            Expedition: "JNE",
            Receipent: this.username
          },
          Id: this.codeHoodie + DocIdJakets,
          RFID: this.codeHoodie + DocIdJakets,
        };

        const qrCodeDataString = JSON.stringify(qrCodeData);

        QRCode.toDataURL(qrCodeDataString, (err, qrCodeUrl) => {
          if (err) {
            console.error(err);
            return;
          }

          // The `qrCodeUrl` variable now contains the data URL of the generated QR code image
          // console.log(qrCodeUrl);
          this.senddata.insertNewJaketMetalicanamp(
            globalID, 
            this.codeHoodie + DocIdJakets, 
            this.ItemIdJaket, 
            updateJakets.toString(), 
            JSON.stringify({uid:globalID}),
            qrCodeUrl,
            ).subscribe((resp:any) => {
            // console.log("updating 1 data food...", resp);
          });
          this.fs.collection('Items/'+ globalID + '/Fashions').doc(this.codeHoodie + DocIdJakets).set({
            ItemId: this.ItemIdJaket,
            QrCodeData: {
              UID: globalID,
              Address: address+", "+postal_id,
              City: cities,
              Claimmed: false,
              CreatedAt: this.newTime(),
              Expedition: "JNE",
              Receipent: this.username
            },
            QrCodeUrl: qrCodeUrl,
            Id: this.codeHoodie + DocIdJakets,
            RFID: this.codeHoodie + DocIdJakets,
          }).then(() => {});
          // console.log(this.jaketsHigh);
        });
      },
      (error: any) => {}
    );
    localStorage.removeItem("alamat");
    localStorage.removeItem("kode_pos");
    localStorage.removeItem("kota");
  }
}
