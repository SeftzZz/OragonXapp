import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { environment } from "../../environments/environment";
import { SwPush } from '@angular/service-worker';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides, EffectFade]);

import { SendData } from '../send-data';
const Tx = require('ethereumjs-tx').Transaction
import { interval, Subscription } from 'rxjs';
import {Location} from '@angular/common';
import CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import * as QRCode from 'qrcode';
import axios from 'axios';

// AngularFire
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Auth } from '@angular/fire/auth';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

// Services
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../provider.service';

// Web3
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      network: 'binance',
      infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',
      rpc: {
        56: "https://bsc-dataseed4.ninicoin.io",
      }
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePage implements OnInit {
  private slides: any;
  subscription: Subscription;

  // Root Object
    profile = null;
    ipAddress = '';
    percentRoyalty : any;
    valueRoyalty : any;
    isLogin : any;
    ritra : any;
    akh : any;
    meru : any;
    feng : any;
    metalicana : any;
    dorch : any;
    historyUID : any;
    historyItemId : any;
    historyItem : any;
    historyAmount : any;
    historyAmountUSD : any;
    historyHash : any;
    historyType : any;
    historyDate : any;
    marketp2pfoodLength : any;
    sortbatteriesowned : any;

  // AGM
    latitude!: number;
    longitude!: number;
    zoom!: number;  

  // WEB3
    walletconnect : any
    parsewalletconnect : any
    states : string = ""
    wallet : string = ""
    wallets : string = ""
    username : string = ""
    email : string = ""
    price : any = ""
    fee : any = ""
    item_name : any = ""
    state_buy : any = ""
    connect : any
    kind : any = ""
    bnb_balance : any = "..."
    oragon_balance_display : any = "..."
    oragon_balance : any = ""
    oragon_balance2 : any = ""
    in_dollar : any = "..."
    price_display : any = ""
    fee_display : any = ""
    status_1 : any = "0"
    status_2 : any = "0"
    count_roulette : any
    used : any
    in_oragon_100c : any
    in_oragon_12c : any
    in_oragon10 : any
    in_oragon1 : any
    in_oragon102 : any
    in_oragon12 : any
    in_oragon12c : any
    in_oragon102c : any
    latesttenOragon : any
    latestoneOragon : any
    balanceORGNPlayers : any
    balanceBNBPlayers : any
    balanceBUSDPlayers : any

  // WALLET PARAM
    private web3js: any;
    private accounts: any;
    address_to : any
    amount_to : any
    provider : any
    balance1 : any
    balance2 : any
    web3Modal : any
    tokenInst : any
    tokenInst2 : any
    web3provider : any
    check : any
    datas_oragon : any
    current_oragon : any
    current_bnb : any
    current_busd : any
    payment_count = 0
    tokenABI = [{constant: true,inputs: [{ name: "_owner", type: "address" }],name: "balanceOf",outputs: [{ name: "balance", type: "uint256" }],type: "function"},{constant: false,inputs: [{name: "_to",type: "address"},{name: "_value",type: "uint256"}],name: "transfer",outputs: [{name: "",type: "bool"}],type: "function"}];

  // Store 
    status_direct_buy : any = "1"
    stateHash : any;
    localStorage : any;
    parse_localStorage : any;
    globalID : any;
    storedata : any;
    storedetail : any;
    storeID : any;
    storeUID : any;
    storeName : any;
    storeDeskripsi : any;
    storePrice : any;
    storeImg : any;
    storePriceORGN : any;
    storePriceORGN2 : any;
    storePriceBNB : any;
    storePriceBUSD : any;
    selectedCrypto : any;
    storecart : any;
    storeFee : any;

    carts : any;
    cartID : any;
    cartUID : any;
    cartCount : any;
    cartNull : any;
    cartNotNull : any;
    cartName : any;
    cartDeskripsi : any;
    cartQty : any;
    cartPrice : any;
    cartImg : any;
    cartPriceBNB : any;
    uidegg : any;
    uidbattery : any;
    uidfood : any;

    messagePleaseWait : any;
    cartPriceTemp : any;

  // P2P Market
    dragons : any;
    hargaLowest : any;
    atoz : any;
    hargaEgg : any;
    eggLowest : any;
    sorteggs : any;
    atozEgg : any;
    currentp2p : any;
    dragonDetail : any;
    marketp2pdragonOID : any;
    marketp2pdragonID : any;
    marketp2pdragonImg : any;
    marketp2pdragonAttack : any;
    marketp2pdragonDefense : any;
    marketp2pdragonLevel : any;
    marketp2pdragonHP : any;
    marketp2pdragonHunger : any;
    marketp2pdragonMaxHP : any;
    marketp2pdragonMaxHunger : any;
    marketp2pdragonRarity : any;
    marketp2pdragonExp : any;
    marketp2pdragonprice : any;
    marketp2pdragonpriceUSD : any;
    marketp2pdragonowner : any;
    marketp2pdragonBG : any;
    marketp2pdragonDocId : any;
    marketp2pdragonImgBG : any;
    marketp2pdragonfavorited : any;
    marketp2pdragonLength : any;
    marketp2pdragonDate : any;

    marketp2peggDocId : any;
    marketp2peggID : any;
    marketp2peggowner : any;
    marketp2peggLength : any;
    marketp2peggImg : any;
    marketp2peggprice : any;
    eggsBID : any;

    marketp2pbatteryDocId : any;
    marketp2pbatteryowner : any;
    marketp2pbatteryLength : any;
    marketp2pbatteryImg : any;
    marketp2pbatteryprice : any;
    marketp2pbatteryID : any;

    marketp2pfoodowner : any;
    marketp2pfoodID : any;
    marketp2pfoodImg : any;
    marketp2pfoodHVP : any;
    marketp2pfoodQty : any;
    marketp2pfoodprice : any;
    marketp2pfoodOID : any;

    input_price: any;
    marketp2pBIDdragonOID: any;
    marketp2pBIDdragonID: any;
    marketp2pBIDdragonImg: any;
    marketp2pBIDdragonAttack: any;
    marketp2pBIDdragonDefense: any;
    marketp2pBIDdragonLevel: any;
    marketp2pBIDdragonHP: any;
    marketp2pBIDdragonRarity: any;
    marketp2pBIDdragonExp: any;
    marketp2pBIDdragonowner: any;
    marketp2pBIDdragonprice: any;
    marketp2pBIDdragontype: any;
    marketp2pBIDdragonbidder: any;
    marketp2pBIDdragontime: any;
    marketp2pdragontimeCount: any;
    marketp2pBIDdragonpriceNow: any;
    marketp2pdragonBIDfavorited : any;
    marketp2pBIDdragonBG : any;
    marketp2pBIDdragonImgBG : any;
    hours: any;
    minutes: any;
    seconds: any;
    dragonsowned: any;
    input_price_actual: any;
    bid_now = false;
    bidlist: any;
    countdown: any;
    cartBidcount : any;

    fee_royalty : any;
    priceRoyalty_display : any;
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
    dragonsownedbg : any;
    marketp2pdragonFee : any;
    current_data : any;
    owner_address : any;

    title = 'af-notification';
    message : any = null;
    readonly VAPID_PUBLIC_KEY = "BH6Pwg4y3wc38Ia1gQnr3mnhAU_StteRTEEIUAFoK14Ux_ci9ALK6RX76kSAUxQzC4FUJ0f6b9Ts-96xpK_I2NE";
    trxhistoryall : any;
    dataNotif : any;
    notificationBid : any;
    itemtrx : any;
    idtrxhistory : any;
    trxhistorybyid : any;
    sessionTrxHistory : any;
    itemid : any;
    itemid2 : any;

    foodsHigh : any;
    batteriesHigh : any;

    tokenNotif : any;

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
    actualcartPrice : any;
    cartStatus : any;
    getaddress : any;
    postal_id : any;
    cities : any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global : ProviderService,
    public senddata : SendData,
    private auth: Auth,
    private swPush: SwPush,
  ) {
      this.subscription = new Subscription()
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then((sub) => {
      // console.log(sub)
    });
  }

  async logout() {
    await this.authService.logout();
    window.location.replace('/tabs/home');
  }

  async login() {
    // await this.authService.logout();
    this.router.navigateByUrl('/tabs/login', { replaceUrl: true });
  }

  async ngOnInit() {
    // const loading = await this.loadingController.create();
    // await loading.present();
      this.listen();
      this.setCurrentLocation();
      this.getstoredata();
      this.currentp2p = 0;

      this.senddata.getselldglimitmp().subscribe(
        (dataSell: any) => {
          this.dragons = JSON.parse(dataSell);
          // console.log(this.dragons);
          for(let i in this.dragons) {
            if(this.dragons[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragons[i].DocId).subscribe(
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

      this.senddata.getcurrentoragon2().subscribe((data:any) => {
          this.current_oragon = data.data.price
          var Web3 = require('web3');
          // Gatcha 10X
          let currTen = (100/this.current_oragon).toFixed();
          this.latesttenOragon = (Web3.utils.fromWei(currTen, 'wei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // Gatcha 1X
          let currOne = (12/this.current_oragon).toFixed();
          this.latestoneOragon = (Web3.utils.fromWei(currOne, 'wei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          // console.log(this.latestoneOragon);
        },(error:any) => {
      })

      this.senddata.getcurrentbusd().subscribe((data:any) => {
          this.current_busd = data.data.price
          this.current_bnb = data.data.price_BNB
          // console.log("current_busd", this.current_busd);
        },(error:any) => {
      })

      this.isLogin = localStorage.getItem('isLogin');
      this.localStorage = localStorage.getItem('ProfileData');
      this.parse_localStorage = JSON.parse(this.localStorage);
      if(this.localStorage == undefined) {
        this.isLogin = '!';
      } else {
        this.walletconnect = localStorage.getItem('walletconnect');
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
        this.senddata.getaddressmp(this.globalID).subscribe(
          async(getaddress)=>{
            var viewaddress = JSON.parse(getaddress);
            this.getaddress = viewaddress.nmAddress;
            const alert = await this.alertController.create({
              header : 'Address',
              message : this.getaddress,
              buttons : ['Ok']
            });
            await alert.present();
          });
        this.postal_id = localStorage.getItem("kode_pos");
        this.cities = localStorage.getItem("kota");

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

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.postNotificationBidmp(this.globalID, tokenPushNotification).subscribe((data:any) => {
                localStorage.setItem("token", tokenPushNotification);
                // console.log("save token", tokenPushNotification);
              })
               // console.log("Hurraaa!!! we got the token.....");
               // console.log(tokenPushNotification);
             } else {
               // console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
        });

        this.getstorecart();
        this.getstoreprogress();
        this.getcountRolling();
        this.checknewfood();
        this.checknewbattery();
        this.messagePleaseWait = "false";
      }
      // console.log(this.globalID);

      this.senddata.gettrxhistoryall().subscribe(
        (dataSell: any) => {
          let trxhistoryall = dataSell;
          this.trxhistoryall = trxhistoryall
          this.sessionTrxHistory = 0;
        },
        (error: any) => {}
      );

      this.getEggCount();
    // await loading.dismiss();
  }

  checknewfood() {
    this.fs.collection("Items/" + this.globalID + "/Foods").valueChanges().subscribe(async (datanewFood:any) => {
      // console.log("datanewFood", datanewFood);
      for(let i in datanewFood) {
        // console.log("datanewFood", datanewFood[i].Id, datanewFood[i].Attributes.AttackPoint);
        this.senddata.getsellfoodUsermp(this.globalID).subscribe(
          (dataSell: any) => {
            this.foodsHigh = JSON.parse(dataSell);
            this.marketp2pfoodLength = this.foodsHigh.lengthFood;
            if(this.foodsHigh.lengthFood != datanewFood[i].Amount) {
              // console.log("data s not match from f");
              this.senddata.insertNewFoodmp(
                this.globalID, 
                datanewFood[i].Id, 
                datanewFood[i].ItemId, 
                datanewFood[i].Amount,
                '', 
                'checked',  
                ).subscribe((resp:any) => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          },
          (error: any) => {}
        );
      }
    });
  }

  checknewbattery() {
    this.fs.collection("Items/" + this.globalID + "/Batteries").valueChanges().subscribe(async (datanewBattery:any) => {
      // console.log("datanewBattery", datanewBattery);
      for(let i in datanewBattery) {
        // console.log("datanewBattery", datanewBattery[i].Id, datanewBattery[i].Attributes.AttackPoint);
        this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
          (dataSell: any) => {
            this.sortbatteriesowned = JSON.parse(dataSell);
            if(this.sortbatteriesowned[0].lengthBattery != datanewBattery[i].Amount) {
              // console.log("data s not match from f");
              this.senddata.insertNewBatterymp(
                this.globalID, 
                datanewBattery[i].Id, 
                datanewBattery[i].ItemId, 
                datanewBattery[i].Amount,
                '', 
                'checked',  
                ).subscribe((resp:any) => {
                // console.log("inserting data...", resp);
              });
            } else {
              // console.log("data s match from f");
            }
          },
          (error: any) => {}
        );
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
  
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      // console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  getEggCount() {
    this.fs.collection("Roulette").doc("Oragon").valueChanges().subscribe((datas : any) => {
      // console.log(datas.Count);
      this.ritra = datas.Ritra
      this.feng = datas.Feng
      this.meru = datas.Meru
      this.metalicana = datas.Metalicana
      this.akh = datas.Akh
      this.dorch = datas.Dorch
      //this.slot_roulette = test
      // console.log(this.slot_roulette);
    });
  }

  getcountRolling() {
    this.fs.collection("Roulette").doc(this.globalID).valueChanges().subscribe((datas : any) => {
      if(datas == undefined) {
        this.fs.collection('Roulette').doc(this.globalID).set({Count: 0, Used: 0}).then(() => {});
      } else {
        let test = datas.Count;
        this.count_roulette = datas.Count;
        this.used = datas.Used;
        // console.log("this.count_roulette", this.count_roulette);
      }
    })
  }

  probability() {
    let prob = Math.random();
    if(this.used % 20 == 0 && this.used > 0 && this.used % 90 !== 0){
      //EXCEPT METALICANA
      if(prob <= 90/100 && this.ritra > 0){
        //NAGA 1 RITRA
        var DocIdRitra = this.newTime() + 1;
        this.addRitra();
        this.senddata.setitemhistory('EGG' + DocIdRitra, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdRitra, ItemId:"ITM6"}), 'ITM6').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF RITRA");
        this.fs.collection('Roulette').doc('Oragon').update({Ritra : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 90/100 && prob <= 100/100 && this.meru > 0) {
        //NAGA 2 MERU
        var DocIdMeru = this.newTime() + 1;
        this.addMeru();
        this.senddata.setitemhistory('EGG' + DocIdMeru, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMeru, ItemId:"ITM2"}), 'ITM2').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF MERU");
        this.fs.collection('Roulette').doc('Oragon').update({Meru : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 90/100 && prob <= 100/100 && this.feng > 0) {
        //NAGA 3 FENG
        var DocIdFeng = this.newTime() + 1;
        this.addFeng();
        this.senddata.setitemhistory('EGG' + DocIdFeng, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdFeng, ItemId:"ITM5"}), 'ITM5').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF FENG");
        this.fs.collection('Roulette').doc('Oragon').update({Feng : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 90/100 && prob <= 100/100 && this.akh > 0) {
        //NAGA 5 AKH
        var DocIdAkh = this.newTime() + 1;
        this.addAkh();
        this.senddata.setitemhistory('EGG' + DocIdAkh, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdAkh, ItemId:"ITM4"}), 'ITM4').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF AKH");
        this.fs.collection('Roulette').doc('Oragon').update({Akh : firebase.firestore.FieldValue.increment(-1)});
      }
    // }else if(this.used % 100 == 0 && this.used > 0 && this.metalicana > 0) {
    //   //METALICANA
    //   //NAGA 6 METALICANA
    //   var DocIdMetalicana = this.newTime() + 1;
    //   this.addMetalicana();
    //   this.senddata.setitemhistory('EGG' + DocIdMetalicana, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMetalicana, ItemId:"ITM8"}), 'ITM8').subscribe((data:any) => {},(error:any) => {})
    //   this.showAlert("success", "GOT 1 EGG OF METALICANA");
    //   this.fs.collection('Roulette').doc('Oragon').update({Metalicana : firebase.firestore.FieldValue.increment(-1)});
    // }else if(this.used % 100 == 0 && this.used > 0 && this.dorch > 0) {
    //   //NAGA 4 DORCH
    //   var DocIdDorch = this.newTime() + 1;
    //   this.addDorch();
    //   this.senddata.setitemhistory('EGG' + DocIdDorch, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdDorch, ItemId:"ITM7"}), 'ITM7').subscribe((data:any) => {},(error:any) => {})
    //   this.showAlert("success", "GOT 1 EGG OF DORCH");
    //   this.fs.collection('Roulette').doc('Oragon').update({Dorch : firebase.firestore.FieldValue.increment(-1)});
    }else{
      if( prob <= 30/96.2) {
        var DocIdFoods10 = this.newTime() + 1;
        this.addFood10();
        this.senddata.setitemhistory('FOOD' + DocIdFoods10, this.globalID, 'Box', JSON.stringify({Id:'FOOD' + DocIdFoods10, ItemId:"ITM14", HVP:24}), 'ITM14').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 10X FOOD");
      }else if(prob > 30/96.2 && prob <= 60/96.2) {
        //8H Battery
        var DocIdBattery8 = this.newTime() + 1;
        this.addBattery8();
        this.senddata.setitemhistory('BTR' + DocIdBattery8, this.globalID, 'Box', JSON.stringify({Id:'BTR' + DocIdBattery8, ItemId:"ITM15", Duration:8}), 'ITM15').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 8 HOURS BATTERY");
      }else if(prob > 60/96.2 && prob <= 80/96.2) {
        //12H Battery
        var DocIdBattery12 = this.newTime() + 1;
        this.addBattery12();
        this.senddata.setitemhistory('BTR' + DocIdBattery12, this.globalID, 'Box', JSON.stringify({Id:'BTR' + DocIdBattery12, ItemId:"ITM32", Duration:12}), 'ITM32').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 12 HOURS BATTERY");
      }else if(prob > 80/96.2 && prob <= 90/96.2) {
        //24H Battery
        var DocIdBattery24 = this.newTime() + 1;
        this.addBattery24();
        this.senddata.setitemhistory('BTR' + DocIdBattery24, this.globalID, 'Box', JSON.stringify({Id:'BTR' + DocIdBattery24, ItemId:"ITM3", Duration:24}), 'ITM3').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 24 HOURS BATTERY");
      }else if(prob > 90/96.2 && prob <= 91.2/96.2 && this.ritra > 0) {
        //NAGA 1 RITRA
        var DocIdRitra = this.newTime() + 1;
        this.addRitra();
        this.senddata.setitemhistory('EGG' + DocIdRitra, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdRitra, ItemId:"ITM6"}), 'ITM6').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF RITRA");
        this.fs.collection('Roulette').doc('Oragon').update({Ritra : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 91.2/96.2 && prob <= 92.4/96.2 && this.meru > 0) {
        //NAGA 2 MERU
        var DocIdMeru = this.newTime() + 1;
        this.addMeru();
        this.senddata.setitemhistory('EGG' + DocIdMeru, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMeru, ItemId:"ITM2"}), 'ITM2').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF MERU");
        this.fs.collection('Roulette').doc('Oragon').update({Meru : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 92.4/96.2 && prob <= 93.6/96.2 && this.feng > 0) {
        //NAGA 3 FENG
        var DocIdFeng = this.newTime() + 1;
        this.addFeng();
        this.senddata.setitemhistory('EGG' + DocIdFeng, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdFeng, ItemId:"ITM5"}), 'ITM5').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF FENG");
        this.fs.collection('Roulette').doc('Oragon').update({Feng : firebase.firestore.FieldValue.increment(-1)});
      }else if(prob > 94.8/96.2 && prob <= 96.1/96.2 && this.akh !=0) {
        //NAGA 5 AKH
        var DocIdAkh = this.newTime() + 1;
        this.addAkh();
        this.senddata.setitemhistory('EGG' + DocIdAkh, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdAkh, ItemId:"ITM4"}), 'ITM4').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 1 EGG OF AKH");
        this.fs.collection('Roulette').doc('Oragon').update({Akh : firebase.firestore.FieldValue.increment(-1)});
      // }else if(prob > 96.1/96.2 && prob <= 96.2/96.2 && this.metalicana > 0) {
      //   //METALICANA
      //   //NAGA 6 METALICANA
      //   var DocIdMetalicana = this.newTime() + 1;
      //   this.addMetalicana();
      //   this.senddata.setitemhistory('EGG' + DocIdMetalicana, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdMetalicana, ItemId:"ITM8"}), 'ITM8').subscribe((data:any) => {},(error:any) => {})
      //   this.showAlert("success", "GOT 1 EGG OF METALICANA");
      //   this.fs.collection('Roulette').doc('Oragon').update({Metalicana : firebase.firestore.FieldValue.increment(-1)});
      // }else if(prob > 96.1/96.2 && prob <= 96.2/96.2 && this.dorch > 0) {
      //   //NAGA 4 DORCH
      //   var DocIdDorch = this.newTime() + 1;
      //   this.addDorch();
      //   this.senddata.setitemhistory('EGG' + DocIdDorch, this.globalID, 'Box', JSON.stringify({Id:'EGG' + DocIdDorch, ItemId:"ITM7"}), 'ITM7').subscribe((data:any) => {},(error:any) => {})
      //   this.showAlert("success", "GOT 1 EGG OF DORCH");
      //   this.fs.collection('Roulette').doc('Oragon').update({Dorch : firebase.firestore.FieldValue.increment(-1)});
      }else{
        //10x Food
        this.addFood10();
        this.senddata.setitemhistory('FOOD' + DocIdFoods10, this.globalID, 'Box', JSON.stringify({Id:'FOOD' + DocIdFoods10, ItemId:"ITM14", HVP:24}), 'ITM14').subscribe((data:any) => {},(error:any) => {})
        this.showAlert("success", "GOT 10X FOOD");
      }
    }
  }

  rolling() {
    if(this.count_roulette > 0 && this.count_roulette > 0){
      this.fs.collection('Roulette').doc(this.globalID).update({Count : firebase.firestore.FieldValue.increment(-1)});
      this.probability()
      this.fs.collection('Roulette').doc(this.globalID).update({Used : firebase.firestore.FieldValue.increment(+1)});
    } else {
      this.fs.collection('Roulette').doc(this.globalID).update({Count : 0});
      this.showAlert("Sorry", "Run Out of Roulette Slot Please Buy Slot at Marketplace");
    }
  }

  pay_first() {
    // 
  }

  pay_second(kind) {
    if(kind == '10'){
      this.fs.collection('Roulette').doc(this.globalID).update({LastUpdated:this.newTime()})
      this.fs.collection('Roulette').doc(this.globalID).update({Count : firebase.firestore.FieldValue.increment(10)});
      this.showAlert("success", "10 Gatcha Added");
    }else if(kind == '1'){
      this.fs.collection('Roulette').doc(this.globalID).update({LastUpdated:this.newTime()})
      this.fs.collection('Roulette').doc(this.globalID).update({Count : firebase.firestore.FieldValue.increment(1)});
      this.showAlert("success", "1 Gatcha Added");
    }
  }

  async trxhistoryid(id) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.senddata.gettrxhistoryid(id).subscribe((dataSell: any) => {
      this.trxhistorybyid = dataSell;
      this.historyUID = this.trxhistorybyid[0].uid;
      this.historyItemId = this.trxhistorybyid[0].itemid;
      this.historyItem = this.trxhistorybyid[0].item;
      this.historyAmount = this.trxhistorybyid[0].amount;
      this.historyHash = this.trxhistorybyid[0].tx_hash;
      this.historyType = this.trxhistorybyid[0].type;
      this.historyDate = this.trxhistorybyid[0].date;
      let historyAmountUSD = this.historyAmount / this.current_bnb;
      this.historyAmountUSD = historyAmountUSD.toFixed(2);
      console.log(this.trxhistorybyid);
      loading.dismiss();
    });
  }

  // AGM Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 19;
          var Latitude = 'Latitude';
          var Longtitude = 'Longitude';
          var js = JSON.stringify({Latitude:this.latitude, Longtitude:this.longitude});
          localStorage.setItem('Latitude', this.latitude.toString());
          localStorage.setItem('Longtitude', this.longitude.toString());
          // console.log('https://www.google.co.id/maps/@'+this.latitude+','+this.longitude+','+this.zoom+'z?hl=en&authuser=0');
          this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
            this.ipAddress = res.ip;
            this.senddata.setkycuser(this.globalID, this.ipAddress, js).subscribe((data:any) => {});
          });
          if(this.latitude == this.latitude && this.longitude == this.longitude) {
            this.notificationBid = setInterval(async () => {
              // console.log('koordinat tetap');
            }, 5000);
          } else {
            // console.log('menyimpan koordinat baru');
            this.setCurrentLocation();
          }
        });
      }
    }

  // WEB3
    async connectAccount() {
      if(this.isLogin == '!') {
        const alert = await this.alertController.create({
          header: 'Caution',
          message: 'Please login to buy packages or items',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        this.provider = await web3Modal.connect();
        this.getcurrentoragon();
        this.web3js = new Web3(this.provider); // create web3 instance
        // console.log(this.web3js);
        this.accounts = await this.web3js.eth.getAccounts(); 
        // console.log("accounts", this.accounts);
        this.wallet = this.accounts[0];

        if(this.wallet == this.wallets){
          this.tokenInst = new this.web3js.eth.Contract(this.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
          this.tokenInst2 = new this.web3js.eth.Contract(this.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
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
          this.state_buy = 1;
          this.status_direct_buy = 1;
          console.log("walletconnect", this.connect);
          console.log("stateHash", this.stateHash);
          console.log("state_buy", this.state_buy);
          console.log("status_direct_buy", this.status_direct_buy);
          this.fee = (((11/ 100) * 100) * 0.0027).toString();
          this.marketp2pdragonFee = ((11/ 100) * this.marketp2pdragonprice);
          let marketp2pdragonprice_actual = this.marketp2pdragonprice - this.marketp2pdragonFee;
          this.fee_display = this.marketp2pdragonFee;
          this.price_display = marketp2pdragonprice_actual;
          this.storeFee = ((11/ 100) * this.cartPrice);
          
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Connected to Registered Wallet',
            buttons: ['OK'],
          });
          await alert.present();
          //if connect
        }else{
          await this.provider.close();
          this.provider = null;
          this.connect = false;
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'Please Use Registered Wallet',
            buttons: ['OK'],
          });
          await alert.present();
        }
      }
    }

    // Payment Store & Advertise
      async pay_directStoreORGN() {
        if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          // REAL VERSION
          if(+(this.oragon_balance * 1).toFixed(0) > +(this.storePrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)) {
            let amountf = this.storePriceORGN2
            console.log(amountf);
            await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({
              from: this.wallet,
              gas : 250000,
              gasPrice : 5000000000
            }).then(async(res:any) => {
              console.log("respons1", res)
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
                        'S-ORGN' + this.newTime(), //itemid
                        this.storePriceORGN, //amount ORGN
                        res.transactionHash, //tx_hash
                        'ORGN', //type
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

              // packages-official-store
                if(this.storeID == 16) {
                  // BATTERY
                  this.addDorch();
                } else if(this.storeID == 15) {
                  // BATTERY
                  this.addMetalicana();
                } else if(this.storeID == 14) {
                  // BATTERY
                  this.addFood1();
                } else if(this.storeID == 13) {
                  // BATTERY
                  this.addBattery8();
                } else if(this.storeID == 12) {
                  // BATTERY
                  this.addBattery12();
                } else if(this.storeID == 11) {
                  // BATTERY
                  this.addBattery24();
                } else if(this.storeID == 10) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1),
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 9) {
                  // EGGS
                  this.addAkh();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 8) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 7) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 6) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 5) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 4) {
                  // EGGS
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 3) {
                  // EGGS
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 2) {
                  // EGGS
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 1) {
                  // EGGS
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } 

              //if success
              this.state_buy = 3;
              this.status_direct_buy = 1;
              this.stateHash = true;
              this.connect = true;
            }).catch((err:any) => {
              console.log(err)
            });
            
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Transaction Successfull, We have send this transaction receipt to your email',
              buttons: ['OK'],
            });
            await alert.present();
            setTimeout(()=>{
              window.location.reload();
            }, 1000);
            this.senddata.gettrxhistoryall().subscribe(
              (dataSell: any) => {
                let trxhistoryall = dataSell;
                this.trxhistoryall = trxhistoryall
                this.sessionTrxHistory = 0;
              },
              (error: any) => {}
            );
          }else{
            const alert = await this.alertController.create({
              header: 'Failed!',
              message: 'ORGN Balance is not Enough',
              buttons: ['OK'],
            });
            await alert.present();
          }
        } else {
          // DEMO VERSION
          const loading = await this.loadingController.create();
          await loading.present();

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
                    'S-ORGN' + this.newTime(), //itemid
                    this.storePriceORGN, //amount ORGN
                    'res.transactionHash', //tx_hash
                    'ORGN', //type
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

          // packages-official-store
            if(this.storeID == 16) {
              // BATTERY
              this.addDorch();
              loading.dismiss();
            } else if(this.storeID == 15) {
              // BATTERY
              this.addMetalicana();
              loading.dismiss();
            } else if(this.storeID == 14) {
              // BATTERY
              this.addFood1();
              loading.dismiss();
            } else if(this.storeID == 13) {
              // BATTERY
              this.addBattery8();
              loading.dismiss();
            } else if(this.storeID == 12) {
              // BATTERY
              this.addBattery12();
              loading.dismiss();
            } else if(this.storeID == 11) {
              // BATTERY
              this.addBattery24();
              loading.dismiss();
            } else if(this.storeID == 10) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1),
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 9) {
              // EGGS
              this.addAkh();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 8) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 7) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 6) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 5) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 4) {
              // EGGS
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 3) {
              // EGGS
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 2) {
              // EGGS
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 1) {
              // EGGS
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } 

          //if success
          this.state_buy = 2;
          this.status_direct_buy = 2;
          this.stateHash = true;
          this.isLogin = '';
          
          const alert = await this.alertController.create({
            header: 'Success',
            message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();

          this.senddata.gettrxhistoryall().subscribe(
            (dataSell: any) => {
              let trxhistoryall = dataSell;
              this.trxhistoryall = trxhistoryall
              this.sessionTrxHistory = 0;
            },
            (error: any) => {}
          );
        }
      }

      async pay_directStoreBNB() {
        if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          // REAL VERSION
          if(+(this.oragon_balance * 1).toFixed(0) > +(this.storePrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)) {
            let amountf = this.storePrice * 1e9
            // console.log(amountf)
            await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
              // console.log(res);
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
                        this.storePriceBNB, //amount BNB
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

              // packages-official-store
                if(this.storeID == 16) {
                  // BATTERY
                  this.addDorch();
                } else if(this.storeID == 15) {
                  // BATTERY
                  this.addMetalicana();
                } else if(this.storeID == 14) {
                  // BATTERY
                  this.addFood1();
                } else if(this.storeID == 13) {
                  // BATTERY
                  this.addBattery8();
                } else if(this.storeID == 12) {
                  // BATTERY
                  this.addBattery12();
                } else if(this.storeID == 11) {
                  // BATTERY
                  this.addBattery24();
                } else if(this.storeID == 10) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1),
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 9) {
                  // EGGS
                  this.addAkh();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 8) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 7) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 6) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 5) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 4) {
                  // EGGS
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 3) {
                  // EGGS
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 2) {
                  // EGGS
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 1) {
                  // EGGS
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } 

              //if success
              this.state_buy = 3;
              this.status_direct_buy = 1;
              this.stateHash = true;
              this.connect = true;
              
            }).catch((err:any) => {
              
            });
            
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Transaction Successfull, We have send this transaction receipt to your email',
              buttons: ['OK'],
            });
            await alert.present();
            setTimeout(()=>{
              window.location.reload();
            }, 1000);
            this.senddata.gettrxhistoryall().subscribe(
              (dataSell: any) => {
                let trxhistoryall = dataSell;
                this.trxhistoryall = trxhistoryall
                this.sessionTrxHistory = 0;
              },
              (error: any) => {}
            );
          }else{
            const alert = await this.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK'],
            });
            await alert.present();
          }
        } else {
          // DEMO VERSION
          const loading = await this.loadingController.create();
          await loading.present();

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
                    this.storePriceBNB, //amount BNB
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

          // packages-official-store
            if(this.storeID == 16) {
              // BATTERY
              this.addDorch();
              loading.dismiss();
            } else if(this.storeID == 15) {
              // BATTERY
              this.addMetalicana();
              loading.dismiss();
            } else if(this.storeID == 14) {
              // BATTERY
              this.addFood1();
              loading.dismiss();
            } else if(this.storeID == 13) {
              // BATTERY
              this.addBattery8();
              loading.dismiss();
            } else if(this.storeID == 12) {
              // BATTERY
              this.addBattery12();
              loading.dismiss();
            } else if(this.storeID == 11) {
              // BATTERY
              this.addBattery24();
              loading.dismiss();
            } else if(this.storeID == 10) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1),
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 9) {
              // EGGS
              this.addAkh();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 8) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 7) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 6) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 5) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 4) {
              // EGGS
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 3) {
              // EGGS
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 2) {
              // EGGS
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 1) {
              // EGGS
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } 

          //if success
          this.state_buy = 2;
          this.status_direct_buy = 2;
          this.stateHash = true;
          this.isLogin = '';
          
          const alert = await this.alertController.create({
            header: 'Success',
            message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();

          this.senddata.gettrxhistoryall().subscribe(
            (dataSell: any) => {
              let trxhistoryall = dataSell;
              this.trxhistoryall = trxhistoryall
              this.sessionTrxHistory = 0;
            },
            (error: any) => {}
          );
        }
      }

      async pay_directStoreBUSD() {
        if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          // REAL VERSION
          if(+(this.oragon_balance * 1).toFixed(0) > +(this.storePrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)) {
            let amountf = this.storePrice * 1e9
            // console.log(amountf)
            await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
              // console.log(res);
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
                        'S-BUSD' + this.newTime(), //itemid
                        this.storePriceBUSD, //amount BNB
                        res.transactionHash, //tx_hash
                        'BUSD', //type
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

              // packages-official-store
                if(this.storeID == 16) {
                  // BATTERY
                  this.addDorch();
                } else if(this.storeID == 15) {
                  // BATTERY
                  this.addMetalicana();
                } else if(this.storeID == 14) {
                  // BATTERY
                  this.addFood1();
                } else if(this.storeID == 13) {
                  // BATTERY
                  this.addBattery8();
                } else if(this.storeID == 12) {
                  // BATTERY
                  this.addBattery12();
                } else if(this.storeID == 11) {
                  // BATTERY
                  this.addBattery24();
                } else if(this.storeID == 10) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1),
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 9) {
                  // EGGS
                  this.addAkh();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 8) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 7) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 6) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 5) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 4) {
                  // EGGS
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 3) {
                  // EGGS
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 2) {
                  // EGGS
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 1) {
                  // EGGS
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } 

              //if success
              this.state_buy = 3;
              this.status_direct_buy = 1;
              this.stateHash = true;
              this.connect = true;
              
            }).catch((err:any) => {
              
            });
            
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Transaction Successfull, We have send this transaction receipt to your email',
              buttons: ['OK'],
            });
            await alert.present();
            setTimeout(()=>{
              window.location.reload();
            }, 1000);
            this.senddata.gettrxhistoryall().subscribe(
              (dataSell: any) => {
                let trxhistoryall = dataSell;
                this.trxhistoryall = trxhistoryall
                this.sessionTrxHistory = 0;
              },
              (error: any) => {}
            );
          }else{
            const alert = await this.alertController.create({
              header: 'Failed!',
              message: 'BUSD Balance is not Enough',
              buttons: ['OK'],
            });
            await alert.present();
          }
        } else {
          // DEMO VERSION
          const loading = await this.loadingController.create();
          await loading.present();

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
                    'S-BUSD' + this.newTime(), //itemid
                    this.storePriceBUSD, //amount BNB
                    'res.transactionHash', //tx_hash
                    'BUSD', //type
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

          // packages-official-store
            if(this.storeID == 16) {
              // BATTERY
              this.addDorch();
              loading.dismiss();
            } else if(this.storeID == 15) {
              // BATTERY
              this.addMetalicana();
              loading.dismiss();
            } else if(this.storeID == 14) {
              // BATTERY
              this.addFood1();
              loading.dismiss();
            } else if(this.storeID == 13) {
              // BATTERY
              this.addBattery8();
              loading.dismiss();
            } else if(this.storeID == 12) {
              // BATTERY
              this.addBattery12();
              loading.dismiss();
            } else if(this.storeID == 11) {
              // BATTERY
              this.addBattery24();
              loading.dismiss();
            } else if(this.storeID == 10) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1),
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 9) {
              // EGGS
              this.addAkh();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 8) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 7) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
              loading.dismiss();
            } else if(this.storeID == 6) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 5) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
              loading.dismiss();
            } else if(this.storeID == 4) {
              // EGGS
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 3) {
              // EGGS
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 2) {
              // EGGS
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } else if(this.storeID == 1) {
              // EGGS
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
              loading.dismiss();
            } 

          //if success
          this.state_buy = 2;
          this.status_direct_buy = 2;
          this.stateHash = true;
          this.isLogin = '';
          
          const alert = await this.alertController.create({
            header: 'Success',
            message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();
          this.senddata.gettrxhistoryall().subscribe(
            (dataSell: any) => {
              let trxhistoryall = dataSell;
              this.trxhistoryall = trxhistoryall
              this.sessionTrxHistory = 0;
            },
            (error: any) => {}
          );
        }
      }

      async pay_firstStore() {
        if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          // REAL VERSION
          if(+(this.oragon_balance * 1).toFixed(0) > +(this.cartPrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)) {
            let amountf = this.cartPrice * 1e9
            console.log(amountf)
            await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
              // console.log(res);
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
                        this.storePriceBNB, //amount BNB
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

              // packages-official-store
                if(this.storeID == 16) {
                  // BATTERY
                  this.addDorch();
                } else if(this.storeID == 15) {
                  // BATTERY
                  this.addMetalicana();
                } else if(this.storeID == 14) {
                  // BATTERY
                  this.addFood1();
                } else if(this.storeID == 13) {
                  // BATTERY
                  this.addBattery8();
                } else if(this.storeID == 12) {
                  // BATTERY
                  this.addBattery12();
                } else if(this.storeID == 11) {
                  // BATTERY
                  this.addBattery24();
                } else if(this.storeID == 10) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1),
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 9) {
                  // EGGS
                  this.addAkh();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 8) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 7) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 6) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 5) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 4) {
                  // EGGS
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 3) {
                  // EGGS
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 2) {
                  // EGGS
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 1) {
                  // EGGS
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } 

              //if success
              this.state_buy = 2;
              this.status_direct_buy = 2;
              this.stateHash = true;
              this.isLogin = '';
              
            }).catch((err:any) => {
              
            });
            
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Transaction Successfull, We have send this transaction receipt to your email',
              buttons: ['OK'],
            });
            await alert.present();
            setTimeout(()=>{
              window.location.reload();
            }, 1000);
          }else{
            const alert = await this.alertController.create({
              header: 'Failed!',
              message: 'BNB Balance is not Enough',
              buttons: ['OK'],
            });
            await alert.present();
          }
        } else {
          // DEMO VERSION
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
                    'S-ORGN' + this.newTime(), //itemid
                    this.storePriceBNB, //amount BNB
                    'res.transactionHash', //tx_hash
                    'bnb-to-oragon', //type
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

          // packages-official-store
            if(this.storeID == 16) {
              // BATTERY
              this.addDorch();
            } else if(this.storeID == 15) {
              // BATTERY
              this.addMetalicana();
            } else if(this.storeID == 14) {
              // BATTERY
              this.addFood1();
            } else if(this.storeID == 13) {
              // BATTERY
              this.addBattery8();
            } else if(this.storeID == 12) {
              // BATTERY
              this.addBattery12();
            } else if(this.storeID == 11) {
              // BATTERY
              this.addBattery24();
            } else if(this.storeID == 10) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1),
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 9) {
              // EGGS
              this.addAkh();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 8) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 7) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 6) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
            } else if(this.storeID == 5) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
            } else if(this.storeID == 4) {
              // EGGS
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 3) {
              // EGGS
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 2) {
              // EGGS
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 1) {
              // EGGS
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } 

          //if success
          this.state_buy = 2;
          this.status_direct_buy = 2;
          this.stateHash = true;
          this.isLogin = '';
          
          const alert = await this.alertController.create({
            header: 'Success',
            message: '(DEMO) Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();
        }
      }

      async pay_cartStore(id_cart, user_uid, addressw, getaddress) {
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
                if(this.storeID == 16) {
                  // BATTERY
                  this.addDorch();
                } else if(this.storeID == 15) {
                  // BATTERY
                  this.addMetalicana();
                } else if(this.storeID == 14) {
                  // BATTERY
                  this.addFood1();
                } else if(this.storeID == 13) {
                  // BATTERY
                  this.addBattery8();
                } else if(this.storeID == 12) {
                  // BATTERY
                  this.addBattery12();
                } else if(this.storeID == 11) {
                  // BATTERY
                  this.addBattery24();
                } else if(this.storeID == 10) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1),
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 9) {
                  // EGGS
                  this.addAkh();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 8) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 7) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1),
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();
                  this.addBattery24();

                  // FOODS
                  this.addFood();
                } else if(this.storeID == 6) {
                  // EGGS
                  this.addAkh();
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1),
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 5) {
                  // EGGS
                  this.addRitra();
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1),
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();
                  this.addBattery12();

                  // FOODS
                  this.addFood20();
                } else if(this.storeID == 4) {
                  // EGGS
                  this.addFeng();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Feng: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 3) {
                  // EGGS
                  this.addRitra();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Ritra: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 2) {
                  // EGGS
                  this.addMeru();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Meru: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } else if(this.storeID == 1) {
                  // EGGS
                  this.addAkh();
                  this.fs.collection("Roulette").doc("Oragon").update({ 
                    Akh: firebase.firestore.FieldValue.increment(-1)
                  });

                  // BATTERY
                  this.addBattery8();

                  // FOODS
                  this.addFood10();
                } 

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
                const loading = await this.loadingController.create();
                await loading.present();
                this.updatestorecart(this.cartID, this.globalID, this.wallets, 'res.transactionHash');
                this.senddata.setaddressmp(this.globalID, this.getaddress);
                await alert.present();
                setTimeout(()=>{
                  window.location.reload();
                }, 5000);
                loading.dismiss();
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
            if(this.storeID == 16) {
              // BATTERY
              this.addDorch();
            } else if(this.storeID == 15) {
              // BATTERY
              this.addMetalicana();
            } else if(this.storeID == 14) {
              // BATTERY
              this.addFood1();
            } else if(this.storeID == 13) {
              // BATTERY
              this.addBattery8();
            } else if(this.storeID == 12) {
              // BATTERY
              this.addBattery12();
            } else if(this.storeID == 11) {
              // BATTERY
              this.addBattery24();
            } else if(this.storeID == 10) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1),
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 9) {
              // EGGS
              this.addAkh();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 8) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 7) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1),
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();
              this.addBattery24();

              // FOODS
              this.addFood();
            } else if(this.storeID == 6) {
              // EGGS
              this.addAkh();
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1),
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
            } else if(this.storeID == 5) {
              // EGGS
              this.addRitra();
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1),
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();
              this.addBattery12();

              // FOODS
              this.addFood20();
            } else if(this.storeID == 4) {
              // EGGS
              this.addFeng();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Feng: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 3) {
              // EGGS
              this.addRitra();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Ritra: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 2) {
              // EGGS
              this.addMeru();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Meru: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } else if(this.storeID == 1) {
              // EGGS
              this.addAkh();
              this.fs.collection("Roulette").doc("Oragon").update({ 
                Akh: firebase.firestore.FieldValue.increment(-1)
              });

              // BATTERY
              this.addBattery8();

              // FOODS
              this.addFood10();
            } 

          //if success
            this.state_buy = 3;
            this.status_direct_buy = 1;
            this.stateHash = true;
            this.connect = true;
            
            const loading = await this.loadingController.create();
            await loading.present();
            this.updatestorecart(this.cartID, this.globalID, this.wallets, 'res.transactionHash');
            this.senddata.setaddressmp(this.globalID, this.getaddress).subscribe(
              async(viewdata:any)=>{
                const alert = await this.alertController.create({
                  header: 'Saved!',
                  message: viewdata,
                  buttons: ['OK'],
                });
                await alert.present();
            });
            setTimeout(()=>{
              window.location.reload();
            }, 5000);
            loading.dismiss();
        }
      }

    // Payment Market P2P
      async pay_firstMarketp2p() {
        const loading = await this.loadingController.create();
        await loading.present();

        let kind = localStorage.getItem("lastseen");
        if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
          this.fs
            .collection("Players")
            .doc(this.marketp2pdragonowner)
            .valueChanges()
            .subscribe((datas: any) => {
              console.log(datas.ProfileData);
              let data_user = JSON.parse(datas.ProfileData);
              console.log(data_user.WalletAddress)
              this.owner_address = data_user.WalletAddress;
              console.log(this.owner_address)
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
                        this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe(async(dataToken:any) => {
                          this.tokenNotif = JSON.parse(dataToken);
                          // Create Transaction History
                          const loading = await this.loadingController.create();
                          await loading.present();
                          this.senddata.settrxhistory(
                            this.marketp2pdragonDocId, //id_product
                            this.globalID, //userid
                            this.marketp2pdragonDocId+'-'+this.kind, //itemid
                            this.marketp2pdragonprice, //amount
                            transactionHash, //tx_hash
                            'bnb-to-seller', //type
                            this.marketp2pdragonDocId+'-'+this.kind, //item
                            this.email, //email
                            this.tokenNotif.tokenPushNotification //token
                          ).subscribe((data:any) => {
                            loading.dismiss();
                          })
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
                  this.state_buy = 3;
                  }})
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
              console.log(data_user.WalletAddress)
              this.owner_address = data_user.WalletAddress;
              console.log(this.owner_address)
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
                this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe(async(dataToken:any) => {
                  this.tokenNotif = JSON.parse(dataToken);
                  // Create Transaction History
                  const loading = await this.loadingController.create();
                  await loading.present();
                  this.senddata.settrxhistory(
                    this.marketp2pdragonDocId, //id_product
                    this.globalID, //userid
                    this.marketp2pdragonDocId+'-'+this.kind, //itemid
                    this.marketp2pdragonprice, //amount
                    'transactionHash', //tx_hash
                    'bnb-to-seller', //type
                    this.marketp2pdragonDocId+'-'+this.kind, //item
                    this.email, //email
                    this.tokenNotif.tokenPushNotification //token
                  ).subscribe((data:any) => {
                    loading.dismiss();
                  })
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
          this.state_buy = 3;
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
              if(err){
                this.openDialog("Transaction Error Please Try Again");
               } else {
                let kind = localStorage.getItem("lastseen");
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
                  price: this.marketp2pdragonprice,
                  owner: this.marketp2pdragonowner,
                });
                this.current_data = JSON.parse(crd);
                // console.log(JSON.stringify(this.current_data));

                // Create Royalty pos 1
                if (this.marketp2pdragonBG == "exists") {
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
                }

                const messaging = getMessaging();
                getToken(messaging, 
                 { vapidKey: environment.firebase.vapidKey}).then(
                   (tokenPushNotification) => {
                     if (tokenPushNotification) {
                      this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe(async(dataToken:any) => {
                        this.tokenNotif = JSON.parse(dataToken);
                        // Create Transaction History
                        const loading = await this.loadingController.create();
                        await loading.present();
                        this.senddata.settrxhistory(
                          this.marketp2pdragonDocId, //id_product
                          this.globalID, //userid
                          this.marketp2pdragonDocId+'-'+this.kind, //itemid
                          this.fee_royalty, //amount
                          transactionHash, //tx_hash
                          'bnb-to-oragon', //type
                          this.marketp2pdragonDocId+'-'+this.kind, //item
                          this.email, //email
                          this.tokenNotif.tokenPushNotification //token
                        ).subscribe((data:any) => {
                          loading.dismiss();
                        })
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
              }
            });
        } else {
          let kind = localStorage.getItem("lastseen");
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
              price: this.marketp2pdragonprice,
              owner: this.marketp2pdragonowner,
            });
            this.current_data = JSON.parse(crd);
            // console.log(JSON.stringify(this.current_data));

            // Create Royalty pos 1
            if (this.marketp2pdragonBG == "exists") {
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
            }

            const messaging = getMessaging();
            getToken(messaging, 
             { vapidKey: environment.firebase.vapidKey}).then(
               (tokenPushNotification) => {
                 if (tokenPushNotification) {
                  this.senddata.gettokenOwnermp(this.marketp2pdragonowner).subscribe(async(dataToken:any) => {
                    this.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    const loading = await this.loadingController.create();
                    await loading.present();
                    this.senddata.settrxhistory(
                      this.marketp2pdragonDocId, //id_product
                      this.globalID, //userid
                      this.marketp2pdragonDocId+'-'+this.kind, //itemid
                      this.fee_royalty, //amount
                      'transactionHash', //tx_hash
                      'bnb-to-oragon', //type
                      this.marketp2pdragonDocId+'-'+this.kind, //item
                      this.email, //email
                      this.tokenNotif.tokenPushNotification //token
                    ).subscribe((data:any) => {
                      loading.dismiss();
                    })
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
        }
      }

  // Market P2P
    getcurrentoragon() {
      this.senddata.getcurrentoragon2().subscribe((data:any) => {
          this.current_oragon = data.data.price
          this.in_oragon_100c = (100/this.current_oragon).toFixed(14);
          this.in_oragon_12c = (12/this.current_oragon).toFixed(14);
          // console.log(this.current_oragon)
        },(error:any) => {

      })
    }

    click_dragon() {
      this.currentp2p = 1;
    }

    getdgbuydetail(ItemId) {
      let kind = localStorage.setItem('kind', 'dragon');
      this.checkkind(ItemId);
    }

    checkkind(ItemId) {
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
          }

          this.senddata.getposroyaltymp(this.marketp2pdragonID).subscribe((datapos) => {
            let position = JSON.parse(datapos);
            this.pos_1 = position.pos_1;
            this.pos_2 = position.pos_2;
            this.pos_3 = position.pos_3;
            this.pos_4 = position.pos_4;
            this.pos_5 = position.pos_5;
          });
        },
        (error: any) => {}
      );
    }

    checkitemscreated(){
      this.fs.collection('Items').doc(this.globalID).valueChanges().subscribe((datas : any) => {
        console.log(datas.Count);
        if(datas == undefined){
          this.fs.collection('Items').doc(this.globalID).set({LastUpdated:this.newTime(),Dragon : [], Egg : [], Battery : [], Food : []})
        }
      });
    }

    async favorite_item(DocId) {
      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.favoritedmp(this.globalID, DocId).subscribe(async (data:any) => {
        this.senddata.getselldglimitmp().subscribe(
          (dataSell: any) => {
            this.dragons = JSON.parse(dataSell);
            // this.marketp2pdragonLength = dataSell.length;
            for(let i in this.dragons) {
              if(this.dragons[i].imgbackground == 'exists') {
                this.senddata.getallbackgroundsellmp(this.dragons[i].DocId).subscribe(
                  (dataBackground: any) => {
                    this.dragonsownedbg = JSON.parse(dataBackground);
                    this.marketp2pdragonBG = this.dragonsownedbg.imgbackground
                    console.log(this.dragonsownedbg)
                  },
                  (error: any) => {}
                );
              }
            }
          },
          (error: any) => {}
        );
        loading.dismiss();
      },(error:any) => {});
    }

  // Store & Advertise
    getstoredata() {
      this.senddata.getstoredata().subscribe((data:any) => {
        this.storedata = JSON.parse(data);
      },(error:any) => {})
    }

    getstoredetail(id_product) {
      this.senddata.getstoredetail(id_product).subscribe((data:any) => {
        this.storedetail = JSON.parse(data)
        this.storeID = this.storedetail.id_product
        this.storeUID = this.globalID
        this.storeName = this.storedetail.nama
        this.storeDeskripsi = this.storedetail.deskripsi
        this.storePrice = this.storedetail.harga
        let storePriceORGN = this.storePrice / this.current_oragon
        this.storePriceORGN = (storePriceORGN).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.storePriceORGN2 = (storePriceORGN).toFixed(0);
        let storePriceBNB = this.current_bnb * this.storePrice
        this.storePriceBNB = (storePriceBNB).toFixed(4);
        let storePriceBUSD = this.current_busd * this.storePrice
        this.storePriceBUSD = (storePriceBUSD).toFixed(4);
        this.storeImg = this.storedetail.gambar
      },(error:any) => {});
      this.stateHash = true;
    }

    selectedCurrency(id_product, currency) {
      if(currency == 1) {
        this.selectedCrypto = "ORGN";
      } else if(currency == 2) {
        this.selectedCrypto = "BNB";
      } else if(currency == 3) {
        this.selectedCrypto = "BUSD";
      } 
    }

    getstorecart() {
      this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
        this.storecart = JSON.parse(data)
        for(let i in this.storecart) {
          if(this.storecart.length == 0) {
            this.cartCount = 0;  
          } else {
            this.cartCount = this.storecart.length
          }
          this.cartUID = this.globalID
          this.carts = this.storecart
          this.cartID = this.storecart[i].id_cart
          this.storeID = this.storecart[i].product_id
          this.cartName = this.storecart[i].nama
          this.cartDeskripsi = this.storecart[i].deskripsi
          this.cartPrice = this.storecart[i].harga
          this.cartQty = this.storecart[i].qty_cart
          let cartPriceBNB = this.current_bnb * this.cartPrice
          this.cartPriceBNB = (cartPriceBNB).toFixed(4);
          this.cartImg = this.storecart[i].gambar
          // console.log(this.cartPriceBNB)
        }        
      },(error:any) => {})
    }

    getstoremulticart() {
      let harga = 0;
      this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
        this.storecart = JSON.parse(data);
        this.cartCount = this.storecart.length;
        this.cartPrice = this.storecart.reduce((sum, product) => sum + Number(product.harga), 0);
        this.cartPriceTemp = this.cartPrice;
      },(error:any) => {})
    }

    async setActive(id_cart) {
      const loading = await this.loadingController.create();
      await loading.present();
        this.senddata.setActiveCart(id_cart).subscribe((data:any) => {
          let harga = 0;
          this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
            this.storecart = JSON.parse(data);
            if(this.storecart.active == 1) {
              this.senddata.setactiveidcart(id_cart).subscribe((cartactive:any) => {
                const cartPrice = this.storecart.reduce((difference, product) => difference - Number(product.harga), 0);
                console.log("cart aktif", JSON.parse(cartactive));
                this.cartPriceTemp = cartPrice;
              });
            } else {
              this.senddata.setnoactiveidcart(id_cart).subscribe((cartnoactive:any) => {
                const cartPrice = this.storecart.reduce((sum, product) => sum + Number(product.harga), 0);
                console.log("cart tidak aktif", JSON.parse(cartnoactive));
                this.cartPriceTemp = cartPrice;
              });
            }
          },(error:any) => {});
        });
      loading.dismiss();
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
              } else {
                this.cartCount = this.storecart.length
              }
              this.cartUID = this.globalID
              this.carts = this.storecart
              this.cartID = this.storecart[i].id_cart
              this.storeID = this.storecart[i].product_id
              // this.cartName = this.storecart[i].nama
              this.cartDeskripsi = this.storecart[i].deskripsi
              this.cartPrice = this.storecart[i].harga
              this.cartQty = this.storecart[i].qty_cart
              let cartPriceBNB = (this.current_bnb * this.cartPrice) * this.cartQty
              this.cartPriceBNB = (cartPriceBNB).toFixed(4);
              this.cartImg = this.storecart[i].gambar
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

    async pay_progressStore(event, id_orders, user_uid, product_id, addressw) {
      const loading = await this.loadingController.create();
      await loading.present();
      // console.log(event, DocId, ItemId)
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        this.updatestoreprogress(this.ordersID, this.globalID, this.wallets, event.target.files[0]);
        this.addJaketsMetalicana(this.ordersID, user_uid, product_id);
        loading.dismiss();
        
        console.log(event.target.files[0]);
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      }
      this.alertWaiting();
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
      }, 5000);
      setTimeout(async () => {
        window.location.reload();
      }, 5000);
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

    addMetalicana() {
      var DocIdMetalicana = this.newTime() + 1;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMetalicana, 'ITM8', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Metalicana", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdMetalicana).set({
        ItemId: "ITM8",
        Id: 'EGG' + DocIdMetalicana
      }).then(() => {});
    }

    addDorch() {
      var DocIdDorch = this.newTime() + 1;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdDorch, 'ITM7', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Dorch", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdDorch).set({
        ItemId: "ITM7",
        Id: 'EGG' + DocIdDorch
      }).then(() => {});
    }

    addAkh() {
      var DocIdAkh = this.newTime() + 1;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdAkh, 'ITM4', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Akh", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdAkh).set({
        ItemId: "ITM4",
        Id: 'EGG' + DocIdAkh
      }).then(() => {});
    }

    addMeru() {
      var DocIdMeru = this.newTime() + 2;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMeru, 'ITM2', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Meru", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdMeru).set({
        ItemId: "ITM2",
        Id: 'EGG' + DocIdMeru
      }).then(() => {});
    }

    addRitra() {
      var DocIdRitra = this.newTime() + 3;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdRitra, 'ITM6', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Ritra", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdRitra).set({
        ItemId: "ITM6",
        Id: 'EGG' + DocIdRitra
      }).then(() => {});
    }

    addFeng() {
      var DocIdFeng = this.newTime() + 4;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdFeng, 'ITM5', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        // console.log("add Feng", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdFeng).set({
        ItemId: "ITM5",
        Id: 'EGG' + DocIdFeng
      }).then(() => {});
    }

    addBattery8() {
      var DocIdBattery8 = this.newTime() + 4;
      var update1Battery = 1;
      this.senddata.getsellbattery8Usermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          if(this.batteriesHigh.length > 0) {
            // for(let i in this.batteriesHigh) {
              this.senddata.insertNewBattery8mp(
                this.globalID, 
                this.batteriesHigh[0].DocId, 
                'ITM15', 
                update1Battery.toString(), 
                JSON.stringify({uid:this.globalID}), 
                ).subscribe((resp:any) => {
                // console.log("updating 1 data green battery...", resp);
              });
              this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
                Amount: firebase.firestore.FieldValue.increment(+1)
              }).then(() => {});
            // }
          } else {
            this.senddata.insertNewBattery8mp(
              this.globalID, 
              'BTR' + DocIdBattery8, 
              'ITM15', 
              '1', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 1 data green battery...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery8).set({
              ItemId: "ITM15",
              Amount: 1,
              Id: 'BTR' + DocIdBattery8
            }).then(() => {});
          }
        },
        (error: any) => {}
      );
    }

    addBattery12() {
      var DocIdBattery12 = this.newTime() + 5;
      var update1Battery = 1;
      this.senddata.getsellbattery12Usermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          if(this.batteriesHigh.length > 0) {
            // for(let i in this.batteriesHigh) {
              this.senddata.insertNewBattery12mp(
                this.globalID, 
                this.batteriesHigh[0].DocId, 
                'ITM32', 
                update1Battery.toString(), 
                JSON.stringify({uid:this.globalID}), 
                ).subscribe((resp:any) => {
                // console.log("updating 1 data blue battery...", resp);
              });
              this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
                Amount: firebase.firestore.FieldValue.increment(+1)
              }).then(() => {});
            // }
          } else {
            this.senddata.insertNewBattery12mp(
              this.globalID, 
              'BTR' + DocIdBattery12, 
              'ITM32', 
              '1', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 1 data blue battery...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery12).set({
              ItemId: "ITM32",
              Amount: 1,
              Id: 'BTR' + DocIdBattery12
            }).then(() => {});
          }
        },
        (error: any) => {}
      );
    }

    addBattery24() {
      var DocIdBattery24 = this.newTime() + 6;
      var update1Battery = 1;
      this.senddata.getsellbattery24Usermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          if(this.batteriesHigh.length > 0) {
            // for(let i in this.batteriesHigh) {
              this.senddata.insertNewBatterymp(
                this.globalID, 
                this.batteriesHigh[0].DocId, 
                'ITM3', 
                update1Battery.toString(), 
                JSON.stringify({uid:this.globalID}), 
                ).subscribe((resp:any) => {
                // console.log("updating 1 data red battery...", resp);
              });
              this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.batteriesHigh[0].DocId).update({
                Amount: firebase.firestore.FieldValue.increment(+1)
              }).then(() => {});
            // }
          } else {
            this.senddata.insertNewBatterymp(
              this.globalID, 
              'BTR' + DocIdBattery24, 
              'ITM3', 
              '1', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 1 data red battery...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery24).set({
              ItemId: "ITM3",
              Amount: 1,
              Id: 'BTR' + DocIdBattery24
            }).then(() => {});
          }
        },
        (error: any) => {}
      );
    }

    addFood() {
      var DocIdFoods30 = this.newTime() + 1;
      var update30Food = 30;
      this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          if(this.foodsHigh.length > 0) {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              this.foodsHigh[0].DocId, 
              'ITM14', 
              update30Food.toString(), 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("updating 30 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
              Amount: firebase.firestore.FieldValue.increment(+30)
            }).then(() => {});
          } else {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              'FOOD' + DocIdFoods30, 
              'ITM14', 
              '30', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 30 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods30).set({
              ItemId: "ITM14",
              Amount: 30,
              Used: 0,
              Id: 'FOOD' + DocIdFoods30
            }).then(() => {});
          }
          // console.log(this.foodsHigh);
        },
        (error: any) => {}
      );
    }

    addFood20() {
      var DocIdFoods20 = this.newTime() + 1;
      var update20Food = 20;
      this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          if(this.foodsHigh.length > 0) {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              this.foodsHigh[0].DocId, 
              'ITM14', 
              update20Food.toString(), 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("updating 20 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
              Amount: firebase.firestore.FieldValue.increment(+20)
            }).then(() => {});
          } else {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              'FOOD' + DocIdFoods20, 
              'ITM14', 
              '20', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 20 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods20).set({
              ItemId: "ITM14",
              Amount: 20,
              Used: 0,
              Id: 'FOOD' + DocIdFoods20
            }).then(() => {});
          }
          // console.log(this.foodsHigh);
        },
        (error: any) => {}
      );
    }

    addFood10() {
      var DocIdFoods10 = this.newTime() + 1;
      var update10Food = 10;
      this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          if(this.foodsHigh.length > 0) {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              this.foodsHigh[0].DocId, 
              'ITM14', 
              update10Food.toString(), 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("updating 10 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
              Amount: firebase.firestore.FieldValue.increment(+10)
            }).then(() => {});
          } else {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              'FOOD' + DocIdFoods10, 
              'ITM14', 
              '10', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 10 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods10).set({
              ItemId: "ITM14",
              Amount: 10,
              Used: 0,
              Id: 'FOOD' + DocIdFoods10
            }).then(() => {});
          }
          // console.log(this.foodsHigh);
        },
        (error: any) => {}
      );
    }

    addFood1() {
      var DocIdFoods1 = this.newTime() + 1;
      var update1Food = 1;
      this.senddata.getsellfoodUserstoremp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          if(this.foodsHigh.length > 0) {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              this.foodsHigh[0].DocId, 
              'ITM14', 
              update1Food.toString(), 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("updating 1 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.foodsHigh[0].DocId).update({
              Amount: firebase.firestore.FieldValue.increment(+1)
            }).then(() => {});
          } else {
            this.senddata.insertNewFoodmp(
              this.globalID, 
              'FOOD' + DocIdFoods1, 
              'ITM14', 
              '1', 
              JSON.stringify({uid:this.globalID}), 
              ).subscribe((resp:any) => {
              // console.log("inserting 1 data food...", resp);
            });
            this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods1).set({
              ItemId: "ITM14",
              Amount: 1,
              Used: 0,
              Id: 'FOOD' + DocIdFoods1
            }).then(() => {});
          }
          // console.log(this.foodsHigh);
        },
        (error: any) => {}
      );
    }

  openDialog(msg : string) {
  }

  async alertWithdraw() {
    const alert = await this.alertController.create({
      header: 'Congratulation !',
      message: 'Now you can Withdraw, check your profile.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertWaiting() {
    const alert = await this.alertController.create({
      header: 'File has uploaded !',
      message: 'Thank you.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  newTime() {
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }

  inputAddress(event: any) {
    const query = event.target.value;
    localStorage.setItem("alamat", query);
    const setaddress = localStorage.getItem("alamat");
    this.getaddress = setaddress;
  }

  inputPostalCode(event: any) {
    const query = event.target.value;
    this.postal_id = localStorage.setItem("kode_pos", query);
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
          this.cities = localStorage.setItem("kota", query);
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
    this.getaddress = localStorage.getItem("alamat");
    this.postal_id = localStorage.getItem("kode_pos");
    this.cities = localStorage.getItem("kota");
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
            Claimmed: false,
            CreatedAt: this.newTime()
          },
          Id: this.codeHoodie + DocIdJakets,
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
            ordersID,
            globalID, 
            this.codeHoodie + DocIdJakets, 
            this.ItemIdJaket, 
            updateJakets.toString(), 
            JSON.stringify({uid:globalID}),
            qrCodeUrl.toString(),
            ).subscribe((resp:any) => {
            // console.log("updating 1 data food...", resp);
          });
          this.fs.collection('Items/'+ globalID + '/Fashions').doc(this.codeHoodie + DocIdJakets).set({
            ItemId: this.ItemIdJaket,
            QrCodeData: {
              UID: globalID,
              Claimmed: false,
              CreatedAt: this.newTime()
            },
            QrCodeUrl: qrCodeUrl,
            Address: this.getaddress,
            PostalID: this.postal_id,
            City: this.cities,
            Id: this.codeHoodie + DocIdJakets,
          }).then(() => {});
          // console.log(this.jaketsHigh);
        });
      },
      (error: any) => {}
    );
  }
}
