import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from "../../environments/environment";

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
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Services
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../provider.service';
import { Photo } from '@capacitor/camera';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';

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
  selector: 'app-background',
  templateUrl: './background.page.html',
  styleUrls: ['./background.page.scss'],
})
export class BackgroundPage implements OnInit {
  private slides: any;

  // object
    profile = null;
    ipAddress = '';
    isLogin : any;
    percentRoyalty : any;
    valueRoyalty : any;
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
    latestfiftheenOragon : any
    balanceORGNPlayers : any
    balanceBNBPlayers : any
    balanceBUSDPlayers : any
    priceBackground : any

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
    current_busd : any
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

    dragons : any;
    hargaLowest : any;
    atoz : any;
    hargaEgg : any;
    eggLowest : any;
    atozEgg : any;
    currentp2p : any;
    dragonDetail : any;
    marketp2pdragonDocId : any;
    marketp2pdragonID : any;
    marketp2pdragonImg : any;
    marketp2pdragonAttack : any;
    marketp2pdragonDefense : any;
    marketp2pdragonLevel : any;
    marketp2pdragonHP : any;
    marketp2pdragonRarity : any;
    marketp2pdragonExp : any;
    marketp2pdragonBG : any;
    marketp2pdragonIdBG : any;
    marketp2pdragonprice : any;
    marketp2pdragonpriceUSD : any;
    marketp2pdragonowner : any;
    marketp2pdragonFee : any;
    marketp2pdragonLength : any;
    current_data : any;
    owner_address : any;

    choosed : any;
    dragonsowned : any;
    dragonsownedbg : any;
    bgdefault : any;
    selected : any;
    historyremark : any;
    url : any;
    dragonsAllowned : any;
    imgBgUploaded : any;
    dragonsownedDocId : any;
    dragonsownedID : any;
    dragonsownedImg : any;
    dragonsownedAttack : any;
    dragonsownedDefense : any;
    dragonsownedLevel : any;
    dragonsownedHP : any;
    dragonsownedRarity : any;
    dragonsownedExp : any;
    dragonsownedBG : any;

    tokenNotif : any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private firestore: Firestore,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global : ProviderService,
    public senddata : SendData
  ) {
      this.subscription = new Subscription()
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/mpdev/', { replaceUrl: true });
  }

  async login() {
    // await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  async alertWithdraw() {
    const alert = await this.alertController.create({
      header: 'Congratulation !',
      message: 'Now you can Withdraw, check your profile.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async onSelectFile(event, DocId, ItemId) {
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(event, DocId, ItemId)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.senddata.uploadBackgroundmp(event.target.files[0], DocId).subscribe(async (data:any) => {
        let imgBgUploaded = JSON.parse(data);
        this.imgBgUploaded = imgBgUploaded.imgBg;
        this.marketp2pdragonID = imgBgUploaded.ItemId;
        this.marketp2pdragonAttack = imgBgUploaded.Attack;
        this.marketp2pdragonDefense = imgBgUploaded.Defense;
        this.marketp2pdragonLevel = imgBgUploaded.Level;
        this.marketp2pdragonRarity = imgBgUploaded.Rarity;
        this.marketp2pdragonBG = imgBgUploaded.imgBg;
        // console.log(ItemId);
        if(ItemId == 'ITM1') {
          let kind = 1;
          this.chooseDragon(kind, DocId, ItemId);
        } else if(ItemId == 'ITM11') {
          let kind = 2;
          this.chooseDragon(kind, DocId, ItemId);
        } else if(ItemId == 'ITM9') {
          let kind = 3;
          this.chooseDragon(kind, DocId, ItemId);
        } else if(ItemId == 'ITM10') {
          let kind = 4;
          this.chooseDragon(kind, DocId, ItemId);
        } else if(ItemId == 'ITM13') {
          let kind = 5;
          this.chooseDragon(kind, DocId, ItemId);
        } else if(ItemId == 'ITM12') {
          let kind = 6;
          this.chooseDragon(kind, DocId, ItemId);
        } 
        this.bgdefault = 0;
        loading.dismiss();
      });
      
      // console.log(event.target.files[0]);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }   
  }

  doRefresh(event) {
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.setCurrentLocation();
    this.status_direct_buy = 1;
    this.senddata.getcurrentoragon2().subscribe((data:any) => {
        this.current_oragon = data.data.price
        var Web3 = require('web3');
        let currOne = (15/this.current_oragon).toFixed();
        this.latestfiftheenOragon = (Web3.utils.fromWei(currOne, 'wei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.latestfiftheenOragon);
      },(error:any) => {
    })
    
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
      } else {
        this.connect = true;
        this.stateHash = true;
        this.state_buy = 2;
        this.status_direct_buy = 2;
      }

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
    }

    this.fs.collection('Utility').doc(this.globalID).valueChanges().subscribe((datas : any) => {
      // console.log(datas.Count);
      if(datas == undefined){
        this.fs.collection('Utility').doc(this.globalID).set({Dragon : []})
      }
    });

    this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
      this.dragonsAllowned = JSON.parse(dataSell)
      this.marketp2pdragonLength = this.dragonsAllowned.length
      // console.log("this.dragonsAllowned", this.dragonsAllowned);
    },(error:any) => {})

    await loading.dismiss();
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

  // WEB3
    async connectAccount() {
      this.provider = await web3Modal.connect();
      this.getcurrentoragon();
      this.web3js = new Web3(this.provider); // create web3 instance
      console.log(this.web3js);

      // this.accounts = await this.web3js.eth.getAccounts(console.log); 
      this.wallet = this.accounts[0];

      if(this.wallet == this.wallets){
        this.tokenInst = new this.web3js.eth.Contract(this.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
        // this.balance1 = await this.tokenInst.methods.balanceOf(this.accounts[0]).call(console.log);
        this.oragon_balance_display = (this.web3js.utils.fromWei(this.balance1,'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.oragon_balance = this.web3js.utils.fromWei(this.balance1,'gwei');
        this.in_dollar = this.oragon_balance * this.current_oragon;
        this.oragon_balance2 = this.balance1;
        this.balance2 = await this.web3js.eth.getBalance(this.accounts[0]);
        this.bnb_balance = this.web3js.utils.fromWei(this.balance1,'ether');
        // console.log(this.bnb_balance);

        //if connect
        this.connect = true;
        if(this.payment_count <= 0){
          this.state_buy = "2"
        }else if(this.payment_count > 0){
          this.state_buy = "2"
        }
        this.stateHash = true;
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

    getcurrentoragon() {
      this.senddata.getcurrentoragon2().subscribe((data:any) => {
          this.current_oragon = data.data.price
          this.in_oragon_100c = (100/this.current_oragon).toFixed(14);
          this.in_oragon_12c = (12/this.current_oragon).toFixed(14);
          console.log(this.current_oragon)
        },(error:any) => {

      })
    }

    async payBackground() {
      if(this.globalID == "WB7qCPQR9BYEDT1BW6nQjLjKqBw1") {
        if(+(this.balanceBUSDPlayers * 1).toFixed(0) > +(this.priceBackground * 1).toFixed(0)){
          let amountf = this.priceBackground
          // console.log(amountf)
          await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
            // console.log(res);
            let crd = JSON.stringify({
              ItemId:this.marketp2pdragonID,
              Id:this.marketp2pdragonImg
            });
            this.current_data = JSON.parse(crd)
            // console.log(JSON.stringify(this.current_data));

            const messaging = getMessaging();
            getToken(messaging, 
             { vapidKey: environment.firebase.vapidKey}).then(
               (tokenPushNotification) => {
                 if (tokenPushNotification) {
                  this.senddata.gettokenOwnermp(this.globalID).subscribe((dataToken:any) => {
                    this.tokenNotif = JSON.parse(dataToken);
                    // Create Transaction History
                    this.senddata.settrxhistory(
                      this.globalID, //userid
                      this.marketp2pdragonDocId, //itemid
                      this.priceBackground, //amount
                      res.transactionHash, //tx_hash
                      'busd-to-oragon', //type
                      'Payout-Background', //item
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

            this.senddata.paybackgroundmp(
              this.globalID, 
              this.marketp2pdragonDocId, 
              this.marketp2pdragonImg,
              'paid', 
              'res.transactionHash'
            ).subscribe((data:any) => {
              // console.log(data)
            });

            this.senddata.addbackgroundmp(
              this.globalID, 
              this.marketp2pdragonDocId,
              'exists',
            ).subscribe((data:any) => {
              // console.log(data)
            });

          }).catch((err:any) => {
            
          });

          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();

          this.connect = true;
          this.choosed = 0;
          
          this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
            this.dragonsowned = JSON.parse(dataSell)
            this.marketp2pdragonLength = this.dragonsowned.length
            // console.log(this.dragonsowned)
          },(error:any) => {});

          localStorage.removeItem('walletconnect');

        } else {
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'Your BUSD Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      } else {
        let crd = JSON.stringify({
          ItemId:this.marketp2pdragonID,
          Id:this.marketp2pdragonImg
        });
        this.current_data = JSON.parse(crd)
        // console.log(JSON.stringify(this.current_data));

        const messaging = getMessaging();
        getToken(messaging, 
         { vapidKey: environment.firebase.vapidKey}).then(
           (tokenPushNotification) => {
             if (tokenPushNotification) {
              this.senddata.gettokenOwnermp(this.globalID).subscribe((dataToken:any) => {
                this.tokenNotif = JSON.parse(dataToken);
                // Create Transaction History
                this.senddata.settrxhistory(
                  this.globalID, //userid
                  this.marketp2pdragonDocId, //itemid
                  this.priceBackground, //amount
                  'res.transactionHash', //tx_hash
                  'busd-to-oragon', //type
                  'Payout-Background', //item
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

        this.senddata.paybackgroundmp(
          this.globalID, 
          this.marketp2pdragonDocId, 
          this.marketp2pdragonImg,
          'paid', 
          'res.transactionHash'
        ).subscribe((data:any) => {
          // console.log(data)
        });

        this.senddata.addbackgroundmp(
          this.globalID, 
          this.marketp2pdragonDocId,
          'exists',
        ).subscribe((data:any) => {
          // console.log(data)
        });

        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Transaction Successfull, We have send this transaction receipt to your email',
          buttons: ['OK'],
        });
        await alert.present();

        this.connect = true;
        this.choosed = 0;
        
        this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
          this.dragonsowned = JSON.parse(dataSell)
          this.marketp2pdragonLength = this.dragonsowned.length
          // console.log(this.dragonsowned)
        },(error:any) => {});
      }
    }

  async chooseDragon(kind, DocId, ItemId) {
    
    if(kind == 1) {
      // MERU
      this.choosed = 1;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})

    } else if(kind == 2) {
      // RITRA
      this.choosed = 2;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})
      
    } else if(kind == 3) {
      // AKH
      this.choosed = 3;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})
      
    } else if(kind == 4) {
      // FENG
      this.choosed = 4;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})

    } else if(kind == 5) {
      // METALICANA
      this.choosed = 5;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})
      
    } else if(kind == 6) {
      // DORCH
      this.choosed = 6;
      localStorage.setItem('chooseddg', DocId);
      this.senddata.checkbackgroundmp('', DocId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonDocId = this.selected.DocId
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
        this.marketp2pdragonBG = this.selected.imgBg;

        this.senddata.getbgdgUserownedmp(this.globalID, DocId).subscribe(
          async (dataSell: any) => {
            const loading = await this.loadingController.create();
            await loading.present();
            this.dragonsowned = JSON.parse(dataSell);
            this.dragonsownedDocId = this.dragonsowned.DocumentId;
            this.dragonsownedID = ItemId;
            this.dragonsownedAttack = this.dragonsowned.Attack;
            this.dragonsownedDefense = this.dragonsowned.Defense;
            this.dragonsownedLevel = this.dragonsowned.Level;
            this.dragonsownedRarity = this.dragonsowned.Rarity;
            this.dragonsownedBG = this.dragonsowned.imgBg;
            let priceBackground = this.current_bnb * 2;
            this.priceBackground = (priceBackground).toFixed(2);
            // console.log(this.dragonsowned)
            if(this.dragonsowned[0].imgbackground == 'exists') {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                },
                (error: any) => {}
              );
            }
            loading.dismiss();
          },
          (error: any) => {}
        );
      });

      this.senddata.getitemhistory(DocId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });

      this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
        this.dragonsAllowned = JSON.parse(dataSell)
      },(error:any) => {})
      
    } else {
      this.choosed = 0;
    }
    
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
        // this.cartDeskripsi = this.storecart[i].deskripsi
        this.cartPrice = this.storecart[i].harga
        this.cartQty = this.storecart[i].qty_cart
        let cartPriceBNB = (this.current_bnb * this.cartPrice) * this.cartQty
        this.cartPriceBNB = (cartPriceBNB).toFixed(2);
        this.cartImg = this.storecart[i].gambar
      }        
    },(error:any) => {})
  }

  openDialog(msg : string) {
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }
}
