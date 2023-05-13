import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides, EffectFade]);

import { SendData } from '../send-data';
// const Tx = require('ethereumjs-tx').Transaction
import { interval, Subscription } from 'rxjs';
import {Location} from '@angular/common';
import CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';

// AngularFire
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

// Services
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../provider.service';

// Web3
import Web3 from "web3";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       network: 'binance',
//       infuraId: '46a670cff8894b729ea30027244e4641',
//       rpc: {
//         56: "https://oragonbsc.io/binance/",
//       }
//     }
//   }
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.page.html',
  styleUrls: ['./advertise.page.scss'],
})
export class AdvertisePage implements OnInit {
  // Root Object
    profile = null;
    ipAddress = '';
    percentRoyalty : any;
    valueRoyalty : any;
    isLogin : any;

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
    marketp2pdragonFee : any;
    current_data : any;
    owner_address : any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global : ProviderService,
    public senddata : SendData
  ) {
      this.subscription = new Subscription()
  }
  
  async logout() {
    await this.authService.logout();
    window.location.replace('/');
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

  async ngOnInit() {
    
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

}