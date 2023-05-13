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
      infuraId: '46a670cff8894b729ea30027244e4641',
      rpc: {
        56: "https://oragonbsc.io/binance/",
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
  selector: 'app-partners',
  templateUrl: 'partners.page.html',
  styleUrls: ['partners.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PartnersPage implements OnInit {
  private slides: any;

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

  // AGM
    latitude!: number;
    longitude!: number;
    zoom!: number;  

  // WEB3
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

  //WALLET PARAM
    private web3js: any;
    private accounts: any;
    address_to : any
    amount_to : any
    provider : any
    balance1 : any
    balance2 : any
    web3Modal : any
    tokenInst : any
    web3provider : any
    check : any
    datas_oragon : any
    current_oragon : any
    current_bnb : any
    payment_count = 0
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
            type: "address"
          },
          {
            name: "_value",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [
          {
            name: "",
            type: "bool"
          }
        ],
        type: "function"
      }
    ];

  subscription: Subscription

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
      storePriceBNB : any;
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

  // P2P Market
      dragons : any;
      hargaLowest : any;
      atoz : any;
      hargaEgg : any;
      eggLowest : any;
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
      marketp2pdragonRarity : any;
      marketp2pdragonExp : any;
      marketp2pdragonprice : any;
      marketp2pdragonpriceUSD : any;
      marketp2pdragonowner : any;
      marketp2pdragonBG : any;
      marketp2pdragonDocId : any;
      marketp2pdragonImgBG : any;
      marketp2pdragonfavorited : any;

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
      console.log(sub)
    });
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
  }

  async logout() {
    await this.authService.logout();
    window.location.replace('/tabs/home');
  }

  async login() {
    // await this.authService.logout();
    this.router.navigateByUrl('/tabs/login', { replaceUrl: true });
  }

  doRefresh(event) {
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
          this.dragons = dataSell;
          // this.marketp2pdragonLength = dataSell.length;
          for(let i in this.dragons) {
            if(this.dragons[i].imgbackground == 'exists') {
              this.senddata.getallbackgroundsellmp(this.dragons[i].ItemId).subscribe(
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

      this.connect = false;
      this.stateHash = true;
      this.state_buy = 2;
      this.status_direct_buy = 2;

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
      
      this.senddata.getcurrentbnb().subscribe((data:any) => {
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
        this.senddata.balancePlayers(this.wallets).subscribe((dataB:any) => {
            var Web3 = require('web3');
            this.balanceORGNPlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            // console.log(this.balanceORGNPlayers);
        },(error:any) => {});

        this.senddata.balanceBNBPlayers(this.wallets).subscribe((dataB:any) => {
            var Web3 = require('web3');
            this.balanceBNBPlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            // console.log(this.balanceBNBPlayers);
            
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
            this.balanceBUSDPlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            // console.log(this.balanceBUSDPlayers);
        },(error:any) => {});

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.postNotificationBidmp(this.globalID, tokenPushNotification).subscribe((data:any) => {
                localStorage.setItem("token", tokenPushNotification);
                console.log("save token", tokenPushNotification);
              })
               console.log("Hurraaa!!! we got the token.....");
               console.log(tokenPushNotification);
             } else {
               console.log('No registration token available. Request permission to generate one.');
             }
         }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });

        this.notificationBid = setInterval(async () => {
          this.checknotificationBid();
          this.getstorecart();
        }, 3000);
      }
      // console.log(this.globalID);

      this.senddata.gettrxhistoryall().subscribe(
        (dataSell: any) => {
          let trxhistoryall = dataSell;
          this.trxhistoryall = trxhistoryall;
          this.sessionTrxHistory = 0;
          for(let i in this.trxhistoryall) {
            this.itemtrx = JSON.parse(this.trxhistoryall[i].item)
            console.log("itemtrx: ", this.itemtrx)
          }
        },
        (error: any) => {}
      );

      this.getEggCount();
    // await loading.dismiss();
  }
  
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  checknotificationBid() {
    this.senddata.getNotificationBidmp(this.globalID).subscribe(async (dataNotif: any) => {
      this.dataNotif = JSON.parse(dataNotif);
      for(let i in this.dataNotif) {
        console.log("dataNotif", this.dataNotif[i].idBid);
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
                  console.log(dataRead, 'notifications readed');
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

  getEggCount(){
    this.fs.collection("Roulette").doc("Oragon").valueChanges().subscribe((datas : any) => {
      //console.log(datas.Count);
      this.ritra = datas.Ritra
      this.feng = datas.Feng
      this.meru = datas.Meru
      this.metalicana = datas.Metalicana
      this.akh = datas.Akh
      this.dorch = datas.Dorch
      //this.slot_roulette = test
      //console.log(this.slot_roulette);
    });
  }

  async trxhistoryid(id) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.senddata.gettrxhistoryid(id).subscribe(
      (dataSell: any) => {
        this.trxhistorybyid = dataSell;
        this.sessionTrxHistory = 1;
        for(let i in this.trxhistorybyid) {
          this.idtrxhistory = JSON.parse(this.trxhistorybyid[i].id)
          this.itemid = JSON.parse(this.trxhistorybyid[i].item)
          this.itemid2 = this.itemid.ItemId
          console.log("itemid2", this.itemid2);
        }
      },
      (error: any) => {}
    );
    loading.dismiss();
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
          var js = JSON.stringify({Latitude:this.latitude, Longtitude:this.longitude})
          localStorage.setItem('geoLocation', js)
          this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
            this.ipAddress = res.ip;
            this.senddata.setkycuser(this.globalID, this.ipAddress, js).subscribe((data:any) => {},(error:any) => {})
          });
        });
      }
    }

  // Market P2P
    addItemRoulette(uid:any,kind:string,txhash :string) {
      //this.getcountRolling();
      if(kind == '10'){
        this.fs.collection('Roulette').doc(uid).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:10,txHash:txhash}))}).then(() => {
          //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
          this.fs.collection('Roulette').doc(uid).update({Count : firebase.firestore.FieldValue.increment(10)});
          this.openDialog("Transaction Success, 10 Roulette Added");
        })
        .catch((error:any) => {
            // The document probably doesn't exist.
            this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
            this.fs.collection('Roulette').doc(uid).update({Count : 10});
            this.fs.collection('Roulette').doc(uid).update({Used : 0});
            this.fs.collection('Roulette').doc(uid).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:10,txHash:txhash}))})
            this.openDialog("Transaction Success, 10 Roulette Added");
        });
      }else if(kind == '1'){
        this.fs.collection('Roulette').doc(uid).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:1,txHash:txhash}))}).then(() => {
          //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
          this.fs.collection('Roulette').doc(uid).update({Count : firebase.firestore.FieldValue.increment(1)});
          this.openDialog("Transaction Success, 1 Roulette Added");
        })
        .catch((error:any) => {
            // The document probably doesn't exist.
            this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
            this.fs.collection('Roulette').doc(uid).update({Count : 1});
            this.fs.collection('Roulette').doc(uid).update({Used : 0});
            this.fs.collection('Roulette').doc(uid).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:1,txHash:txhash}))})
            this.openDialog("Transaction Success, 1 Roulette Added");
            // if(this.count_roulette % 5 == 0 && this.count_roulette != 0){
            //   this.fs.collection('Roulette').doc(uid).update({Count : firebase.firestore.FieldValue.increment(1)});
            // }
        });
      }
    }
    
    getPaymentCount() {
      this.fs.collection('Payment').doc(this.globalID).valueChanges().subscribe((datas : any) => {
        // console.log(datas.Gacha1);
        if(datas != undefined){
          if(this.kind == '10'){
            if(datas.Gacha10 > 0){
              this.payment_count = datas.Gacha10
              this.state_buy == "2"
            }
          }else if(this.kind == '1'){
            if(datas.Gacha1 > 0){
              this.payment_count = datas.Gacha1
              this.state_buy == "2"
            }
          }
          if(datas.Gacha10 < 0){
            this.fs.collection('Payment').doc(this.globalID).update({Gacha10 : 0});
          }
          if(datas.Gacha1 < 0){
            this.fs.collection('Payment').doc(this.globalID).update({Gacha1 : 0});
          }
        }else{
          this.fs.collection('Payment').doc(this.globalID).set({LastUpdated:this.newTime()})
          this.fs.collection('Payment').doc(this.globalID).update({Gacha10 : 0, Gacha1 : 0}).then(() => {})
        }
        
        //this.slot_roulette = test
        // console.log(datas);
      });
    }

    getcurrentoragon() {
      this.senddata.getcurrentoragon2().subscribe((data:any) => {
          this.current_oragon = data.data.price
          this.in_oragon_100c = (100/this.current_oragon).toFixed(14);
          this.in_oragon_12c = (12/this.current_oragon).toFixed(14);
          //console.log(this.current_oragon)
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
                this.marketp2pdragonRarity = this.dragonDetail.Rarity;
                this.marketp2pdragonExp = this.dragonDetail.Exp;
                this.marketp2pdragonowner = this.dragonDetail.uid;
                this.marketp2pdragonprice = this.dragonDetail.price;
                let marketp2pdragonpriceUSD =
                  this.dragonDetail.price / this.current_bnb;
                this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
                this.marketp2pdragonBG = this.dragonDetail.imgbackground;
                this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
                this.marketp2pdragonfavorited = this.dragonDetail.favorited;
                console.log(this.marketp2pdragonpriceUSD);
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
                          console.log("first position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
                        } else if (dr == 2) {
                          this.positionRoyalty = 2;
                          console.log("second position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
                        } else if (dr == 3) {
                          this.positionRoyalty = 3;
                          console.log("third position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
                        } else if (dr == 4) {
                          this.positionRoyalty = 4;
                          console.log("fourth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
                        } else if (dr == 5) {
                          this.positionRoyalty = 5;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
                        } else if (dr == 6) {
                          this.positionRoyalty = 6;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
                        } else {
                          console.log("unknown position");
                        }

                        console.log("royalti pos 1", this.marketp2pdragonRoyalty)
                        console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
                        console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
                        console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
                        console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
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
                          console.log("first position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
                        } else if (dr == 2) {
                          this.positionRoyalty = 2;
                          console.log("second position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
                        } else if (dr == 3) {
                          this.positionRoyalty = 3;
                          console.log("third position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
                        } else if (dr == 4) {
                          this.positionRoyalty = 4;
                          console.log("fourth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
                        } else if (dr == 5) {
                          this.positionRoyalty = 5;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
                        } else if (dr == 6) {
                          this.positionRoyalty = 6;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
                        } else {
                          console.log("unknown position");
                        }

                        console.log("royalti pos 1", this.marketp2pdragonRoyalty)
                        console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
                        console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
                        console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
                        console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
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
        } else if (tabs == "bid") {
          let lastseen = localStorage.getItem("lastseen");
          if (lastseen == "dragon") {
            this.senddata.getselldgidBIDmp(ItemId).subscribe(
              (dataDetail: any) => {
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
                let marketp2pdragonpriceUSD =
                  this.marketp2pBIDdragonpriceNow / this.current_bnb;
                this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
                console.log(this.dragonDetail);
              },
              (error: any) => {}
            );
          }
          console.log(tabs);
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
                this.marketp2pdragonRarity = this.dragonDetail.Rarity;
                this.marketp2pdragonExp = this.dragonDetail.Exp;
                this.marketp2pdragonowner = this.dragonDetail.uid;
                this.marketp2pdragonprice = this.dragonDetail.price;
                let marketp2pdragonpriceUSD =
                  this.dragonDetail.price / this.current_bnb;
                this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
                this.marketp2pdragonBG = this.dragonDetail.imgbackground;
                this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
                this.marketp2pdragonfavorited = this.dragonDetail.favorited;
                console.log(this.marketp2pdragonpriceUSD);
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
                          console.log("first position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
                        } else if (dr == 2) {
                          this.positionRoyalty = 2;
                          console.log("second position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
                        } else if (dr == 3) {
                          this.positionRoyalty = 3;
                          console.log("third position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
                        } else if (dr == 4) {
                          this.positionRoyalty = 4;
                          console.log("fourth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
                        } else if (dr == 5) {
                          this.positionRoyalty = 5;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
                        } else if (dr == 6) {
                          this.positionRoyalty = 6;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
                        } else {
                          console.log("unknown position");
                        }

                        console.log("royalti pos 1", this.marketp2pdragonRoyalty)
                        console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
                        console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
                        console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
                        console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
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
                          console.log("first position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty)
                        } else if (dr == 2) {
                          this.positionRoyalty = 2;
                          console.log("second position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2)
                        } else if (dr == 3) {
                          this.positionRoyalty = 3;
                          console.log("third position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3)
                        } else if (dr == 4) {
                          this.positionRoyalty = 4;
                          console.log("fourth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4)
                        } else if (dr == 5) {
                          this.positionRoyalty = 5;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5)
                        } else if (dr == 6) {
                          this.positionRoyalty = 6;
                          console.log("fifth position");
                          console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5)
                          console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty6)
                        } else {
                          console.log("unknown position");
                        }

                        console.log("royalti pos 1", this.marketp2pdragonRoyalty)
                        console.log("royalti pos 2", this.marketp2pdragonRoyalty2)
                        console.log("royalti pos 3", this.marketp2pdragonRoyalty3)
                        console.log("royalti pos 4", this.marketp2pdragonRoyalty4)
                        console.log("royalti pos 5", this.marketp2pdragonRoyalty5)
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
        } else if (tabs == "bid") {
          let lastseen = localStorage.getItem("lastseen");
          if (lastseen == "dragon") {
            this.senddata.getselldgidBIDmp(ItemId).subscribe(
              (dataDetail: any) => {
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
                let marketp2pdragonpriceUSD =
                  this.marketp2pBIDdragonpriceNow / this.current_bnb;
                this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
                console.log(this.dragonDetail);
              },
              (error: any) => {}
            );
          }
          console.log(tabs);
        }
      }
    }

    checkitemscreated(){
      this.fs.collection('Items').doc(this.globalID).valueChanges().subscribe((datas : any) => {
        //console.log(datas.Count);
        if(datas == undefined){
          this.fs.collection('Items').doc(this.globalID).set({LastUpdated:this.newTime(),Dragon : [], Egg : [], Battery : [], Food : []})
        }
      });
    }

    setdgbuycart() {

    }

    async favorite_item(DocId) {
      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.favoritedmp(this.globalID, DocId).subscribe(async (data:any) => {
        this.senddata.getselldglimitmp().subscribe(
          (dataSell: any) => {
            this.dragons = dataSell;
            // this.marketp2pdragonLength = dataSell.length;
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
        let storePriceBNB = this.current_bnb * this.storePrice
        this.storePriceBNB = (storePriceBNB).toFixed(2);
        this.storeImg = this.storedetail.gambar
        console.log(this.storeID)
      },(error:any) => {})
    }

    getstorecart() {
      this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
        this.storecart = JSON.parse(data)
        for(let i in this.storecart) {
          // console.log(this.storecart[i].addressw)
          this.cartCount = this.storecart.length
          this.cartUID = this.globalID
          this.carts = this.storecart
          this.cartID = this.storecart[i].id_cart
          // this.cartName = this.storecart[i].nama
          this.cartDeskripsi = this.storecart[i].deskripsi
          this.cartPrice = this.storecart[i].harga
          this.cartQty = this.storecart[i].qty_cart
          let cartPriceBNB = (this.current_bnb * this.cartPrice) * this.cartQty
          this.cartPriceBNB = (cartPriceBNB).toFixed(2);
          this.cartImg = this.storecart[i].gambar
        }        
      },(error:any) => {})
    }

    async setstorecart(id_product, user_uid, addressw) {
      if(this.isLogin == '!') {
        const alert = await this.alertController.create({
          header: 'Caution',
          message: 'Please login for add to cart',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        const loading = await this.loadingController.create();
        await loading.present();

        this.senddata.setstorecart(id_product, user_uid, addressw).subscribe((data:any) => {
          let setstorecart = data
          console.log(setstorecart)
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

      this.senddata.updatestorecart(id_cart, user_uid, addressw, transactionHash).subscribe((data:any) => {
        let updatestorecart = data
        console.log(updatestorecart)
      },(error:any) => {})

      loading.dismiss();
    }

    addAkh() {
      var DocIdAkh = this.newTime() + 1;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdAkh, 'ITM4', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Akh", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdAkh).set({
        ItemId: "ITM4",
        DocId: 'EGG' + DocIdAkh
      }).then(() => {});
      
    }

    addMeru() {
      var DocIdMeru = this.newTime() + 2;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdMeru, 'ITM2', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Meru", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdMeru).set({
        ItemId: "ITM2",
        DocId: 'EGG' + DocIdMeru
      }).then(() => {});
      
    }

    addRitra() {
      var DocIdRitra = this.newTime() + 3;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdRitra, 'ITM6', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Ritra", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdRitra).set({
        ItemId: "ITM6",
        DocId: 'EGG' + DocIdRitra
      }).then(() => {});
      
    }

    addFeng() {
      var DocIdFeng = this.newTime() + 4;
      this.senddata.editdumpitemseggmp(this.globalID, 'EGG' + DocIdFeng, 'ITM5', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Feng", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Eggs').doc('EGG' + DocIdFeng).set({
        ItemId: "ITM5",
        DocId: 'EGG' + DocIdFeng
      }).then(() => {});
      
    }

    addBattery8() {
      var DocIdBattery8 = this.newTime() + 4;
      this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery8, 'ITM3', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Green Battery", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery8).set({
        ItemId: "ITM3",
        DocId: 'BTR' + DocIdBattery8
      }).then(() => {});
    }

    addBattery12() {
      var DocIdBattery12 = this.newTime() + 5;
      this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery12, 'ITM3', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Blue Battery", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery12).set({
        ItemId: "ITM3",
        DocId: 'BTR' + DocIdBattery12
      }).then(() => {});
    }

    addBattery24() {
      var DocIdBattery24 = this.newTime() + 6;
      this.senddata.editdumpitemsbatterymp(this.globalID, 'BTR' + DocIdBattery24, 'ITM3', 'Items', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add Red Battery", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Batteries').doc('BTR' + DocIdBattery24).set({
        ItemId: "ITM3",
        DocId: 'BTR' + DocIdBattery24
      }).then(() => {});
    }

    addFood() {
      var DocIdFoods30 = this.newTime() + 1;
      this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods30, 'ITM14', 'Items', '30', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add 30 Food", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods30).set({
        ItemId: "ITM14",
        Count: 30,
        Used: 0,
        DocId: 'FOOD' + DocIdFoods30
      }).then(() => {});
    }

    addFood20() {
      var DocIdFoods20 = this.newTime() + 1;
      this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods20, 'ITM14', 'Items', '20', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add 20 Food", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods20).set({
        ItemId: "ITM14",
        Count: 20,
        Used: 0,
        DocId: 'FOOD' + DocIdFoods20
      }).then(() => {});
    }

    addFood10() {
      var DocIdFoods10 = this.newTime() + 1;
      this.senddata.editdumpitemsfoodmp(this.globalID, 'FOOD' + DocIdFoods10, 'ITM14', 'Items', '10', JSON.stringify({uid:this.globalID})).subscribe((dataDump:any) => {
        console.log("add 10 Food", dataDump);
      });
      this.fs.collection('Items/'+ this.globalID + '/Foods').doc('FOOD' + DocIdFoods10).set({
        ItemId: "ITM14",
        Count: 10,
        Used: 0,
        DocId: 'FOOD' + DocIdFoods10
      }).then(() => {});
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

  newTime() {
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }
}
