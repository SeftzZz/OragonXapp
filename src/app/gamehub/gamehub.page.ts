import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';

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
  selector: 'app-gamehub',
  templateUrl: './gamehub.page.html',
  styleUrls: ['./gamehub.page.scss'],
})
export class GamehubPage implements OnInit {
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
    marketp2pdragonLength : any;
    current_data : any;
    owner_address : any;

    choosed : any;
    dragonsowned : any;
    selected : any;
    historyremark : any;
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

  doRefresh(event) {
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.connect = false;
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

      if(this.globalID == "iXo9SC6D93OS8FXNnWeWEDjVXvc2") {
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

    this.stateHash = false;

    this.senddata.getdgbackgroundmp(this.globalID).subscribe((dataSell:any) => {
      this.dragonsowned = JSON.parse(dataSell)
      this.marketp2pdragonLength = this.dragonsowned.length
      // console.log(this.dragonsowned)
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
      // console.log(this.web3js);

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

  chooseDragon(kind, ItemId) {
    if(kind == 1) {
      this.choosed = 1;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
    } else if(kind == 2) {
      this.choosed = 2;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
    } else if(kind == 3) {
      this.choosed = 3;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
    } else if(kind == 4) {
      this.choosed = 4;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
    } else if(kind == 5) {
      this.choosed = 5;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
    } else if(kind == 6) {
      this.choosed = 6;
      this.senddata.checkbackgroundmp(this.globalID, ItemId, 'unpaid').subscribe((data:any) => {
        this.selected = JSON.parse(data);
        this.marketp2pdragonID = this.selected.ItemId;
        this.marketp2pdragonImg = this.selected.Id;
        this.marketp2pdragonAttack = this.selected.Attack;
        this.marketp2pdragonDefense = this.selected.Defense;
        this.marketp2pdragonLevel = this.selected.Level;
        this.marketp2pdragonRarity = this.selected.Rarity;
      });
      this.senddata.getitemhistory(ItemId).subscribe((datahistory:any) => {
        this.historyremark = datahistory;
      });
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
