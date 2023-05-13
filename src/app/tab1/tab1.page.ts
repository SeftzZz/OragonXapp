import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';

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
import { AvatarService } from '../services/avatar.service';
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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  profile = null;
  ipAddress = '';

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
  balancePlayers : any

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
  current_data : any;
  owner_address : any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private avatarService: AvatarService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global : ProviderService,
    public senddata : SendData
  ) {
      this.subscription = new Subscription()
      // this.avatarService.getUserProfile().subscribe((data) => {
      //   this.profile = data;
      // });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
 
    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
 
      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();
 
      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    
    this.connect = false;
    this.setCurrentLocation();
    this.status_direct_buy = 1;
    this.senddata.getcurrentoragon2().subscribe((data:any) => {
        this.current_oragon = data.data.price
        var Web3 = require('web3');
        // Gatcha 10X
        let currTen = (100/this.current_oragon).toFixed();
        this.latesttenOragon = (Web3.utils.fromWei(currTen, 'wei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // Gatcha 1X
        let currOne = (100/this.current_oragon).toFixed();
        this.latestoneOragon = (Web3.utils.fromWei(currOne, 'wei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.latestoneOragon);
      },(error:any) => {
    })
    
    this.senddata.getcurrentbnb().subscribe((data:any) => {
        this.current_bnb = data.data.price_BNB
        // console.log(this.current_bnb)
      },(error:any) => {
    })

    this.localStorage = localStorage.getItem('ProfileData');
    this.parse_localStorage = JSON.parse(this.localStorage);
    this.wallets = this.parse_localStorage.WalletAddress;
    this.username = this.parse_localStorage.PlayerName;
    this.globalID = this.parse_localStorage.Uid;
    // console.log(this.globalID);

    this.senddata.balancePlayers(this.wallets).subscribe((dataB:any) => {
        var Web3 = require('web3');
        this.balancePlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.balancePlayers);
    },(error:any) => {});

    this.getstoredata();
    const source = interval(2000);
    this.subscription = source.subscribe(() => this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
      if(data == '') {
      } else {
        this.storecart = JSON.parse(data)
        this.cartCount = this.storecart.length
        if(data == 0) {
          this.cartNull = localStorage.setItem('cartStorage', data)
        } else {
          this.cartNull = localStorage.setItem('cartStorage', this.cartCount)
        }
      }
    }));
    this.stateHash = false;

    this.currentp2p = 0;
    if(this.currentp2p == 0) {
      this.senddata.getselldglimitmp().subscribe((dataSell:any) => {
        this.dragons = dataSell
        // console.log(this.dragons)
      },(error:any) => {})
    }

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit(): void {
    this.connect = false;
    this.setCurrentLocation();
    this.status_direct_buy = 1;
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

    this.localStorage = localStorage.getItem('ProfileData');
    this.parse_localStorage = JSON.parse(this.localStorage);
    this.wallets = this.parse_localStorage.WalletAddress;
    this.username = this.parse_localStorage.PlayerName;
    this.globalID = this.parse_localStorage.Uid;
    // console.log(this.globalID);

    this.senddata.balancePlayers(this.wallets).subscribe((dataB:any) => {
        var Web3 = require('web3');
        this.balancePlayers = (Web3.utils.fromWei(dataB.result, 'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        // console.log(this.balancePlayers);
    },(error:any) => {});

    this.getstoredata();
    const source = interval(2000);
    this.subscription = source.subscribe(() => this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
      if(data == '') {
      } else {
        this.storecart = JSON.parse(data)
        this.cartCount = this.storecart.length
        if(data == 0) {
          this.cartNull = localStorage.setItem('cartStorage', data)
        } else {
          this.cartNull = localStorage.setItem('cartStorage', this.cartCount)
        }
      }
    }));
    this.stateHash = false;

    this.currentp2p = 0;
    if(this.currentp2p == 0) {
      this.senddata.getselldglimitmp().subscribe((dataSell:any) => {
        this.dragons = dataSell
        // console.log(this.dragons)
      },(error:any) => {})
    }
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
      const loading = await this.loadingController.create();
      await loading.present();

      this.provider = await web3Modal.connect();
      this.getcurrentoragon();
      await this.getPaymentCount();
      this.web3js = new Web3(this.provider); // create web3 instance
      //console.log(this.web3js);
      this.accounts = await this.web3js.eth.getAccounts(console.log); 
      this.wallet = this.accounts[0];

      if(this.wallet == this.wallets){
        this.tokenInst = new this.web3js.eth.Contract(this.tokenABI, '0x88c676fc777c225b69869aeef5d10535de1e4f5d');
        this.balance1 = await this.tokenInst.methods.balanceOf(this.accounts[0]).call(console.log);
        this.oragon_balance_display = (this.web3js.utils.fromWei(this.balance1,'gwei')*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.oragon_balance = this.web3js.utils.fromWei(this.balance1,'gwei');
        this.in_dollar = this.oragon_balance * this.current_oragon
        this.oragon_balance2 = this.balance1;
        this.balance2 = await this.web3js.eth.getBalance(this.accounts[0]);
        this.bnb_balance = this.web3js.utils.fromWei(this.balance2,'ether');
        //console.log(this.bnb_balance);

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
        loading.dismiss();
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

    // Payment Gathca
      async pay_first() {
        if(+(this.oragon_balance * 1).toFixed(0) > +(this.price * 1).toFixed(0) && (this.bnb_balance*1) > (this.fee*1)){
          let amountf = this.price * 1e9
          //console.log(amountf)
          await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
            // console.log(res);
            this.senddata.settrxhistory(this.globalID,'Box Item',amountf.toString(),res.transactionHash,'Orgn to OragonX','Gatcha Box').subscribe((data:any) => {},(error:any) => {})
            if(this.kind == '10'){
              this.fs.collection('Payment').doc(this.globalID).update({Gacha10 : firebase.firestore.FieldValue.increment(1)});
            }else if(this.kind == '1'){
              this.fs.collection('Payment').doc(this.globalID).update({Gacha1 : firebase.firestore.FieldValue.increment(1)});
            }
            //if success
            this.state_buy = "2"
            this.status_1 = "1"
            //if success
            //return res;
          }).catch((err:any) => {
            //console.log(err);
            //return err;
          });
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();
        }else{
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'Your Orgn/BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      }

      pay_second() {
        this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
          value : this.web3js.utils.toWei(this.fee, 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err){
              this.openDialog("Transaction Error Please Try Again");
            }else{
              console.log('transactionHash');
              this.senddata.settrxhistory(this.globalID,'Box Item',this.fee.toString(),transactionHash,'BNB to OragonX','Gatcha Box').subscribe((data:any) => {},(error:any) => {})
              //let result = this.web3js.eth.getTransactionReceipt('transactionHash');
              if(this.kind == '10'){
                this.fs.collection('Payment').doc(this.globalID).update({Gacha10 : firebase.firestore.FieldValue.increment(-1)});
              }else if(this.kind == '1'){
                this.fs.collection('Payment').doc(this.globalID).update({Gacha1 : firebase.firestore.FieldValue.increment(-1)});
              }
              this.addItemRoulette(this.globalID,this.kind,'transactionHash');
              //if success
              this.state_buy = "2"
              this.status_2 = "1"
              //if success
            }
          }
        )
      }

    // Payment Store & Advertise
      async pay_directStore() {
        const loading = await this.loadingController.create();
        await loading.present();

        if(+(this.oragon_balance * 1).toFixed(0) > +(this.cartPrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)){
          let amountf = this.cartPrice * 1e9
          //console.log(amountf)
          await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
            // console.log(res);
            
            this.senddata.settrxhistory(
              this.globalID, //userid
              'S-ORGN' + this.newTime(), //itemid
              amountf.toString(), //amount
              res.transactionHash, //tx_hash
              'BNB to Seller', //type
              this.cartDeskripsi //item
            ).subscribe((data:any) => {},(error:any) => {})

            // send egg to mp
            this.senddata.dumpeggtomp().subscribe((data:any) => {
              this.uidegg = data
              for(let i in this.uidegg) {
                // cloning items
                if(this.uidegg[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidegg[i].user_uid).update({Egg: firebase.firestore.FieldValue.arrayUnion(this.uidegg[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidegg[i].itemid + " telah diterima");
                    this.senddata.editdumpeggtomp(this.uidegg[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidegg[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            // send battery to mp
            this.senddata.dumpbatterytomp().subscribe((data:any) => {
              this.uidbattery = data
              for(let i in this.uidbattery) {
                // cloning items
                if(this.uidbattery[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidbattery[i].user_uid).update({Battery: firebase.firestore.FieldValue.arrayUnion(this.uidbattery[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidbattery[i].itemid + " telah diterima");
                    this.senddata.editdumpbatterytomp(this.uidbattery[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidbattery[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            // send food to mp
            this.senddata.dumpfoodtomp().subscribe((data:any) => {
              this.uidfood = data
              for(let i in this.uidfood) {
                // cloning items
                if(this.uidfood[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidfood[i].user_uid).update({Food: firebase.firestore.FieldValue.arrayUnion(this.uidfood[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidfood[i].itemid + " telah diterima");
                    this.senddata.editdumpfoodtomp(this.uidfood[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidfood[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            //if success
            this.state_buy = "0";
            this.status_direct_buy = 1;
            this.stateHash = false;
            this.connect = false;
            //if success
            //return res;
          }).catch((err:any) => {
            //console.log(err);
            //return err;
          });
          loading.dismiss();
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
      }

      async pay_firstStore() {
        const loading = await this.loadingController.create();
        await loading.present();

        if(+(this.oragon_balance * 1).toFixed(0) > +(this.cartPrice * 1).toFixed(0) && (this.bnb_balance*1) > (this.storeFee*1)){
          let amountf = this.cartPrice * 1e9
          //console.log(amountf)
          await this.tokenInst.methods.transfer('0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894', amountf.toString()).send({from: this.wallet}).then((res:any) => {
            // console.log(res);
            
            this.senddata.settrxhistory(
              this.globalID, //userid
              'S-ORGN' + this.newTime(), //itemid
              amountf.toString(), //amount
              'res.transactionHash', //tx_hash
              'BNB to Seller', //type
              this.cartDeskripsi //item
            ).subscribe((data:any) => {},(error:any) => {})

            // send egg to mp
            this.senddata.dumpeggtomp().subscribe((data:any) => {
              this.uidegg = data
              for(let i in this.uidegg) {
                // cloning items
                if(this.uidegg[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidegg[i].user_uid).update({Egg: firebase.firestore.FieldValue.arrayUnion(this.uidegg[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidegg[i].itemid + " telah diterima");
                    this.senddata.editdumpeggtomp(this.uidegg[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidegg[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            // send battery to mp
            this.senddata.dumpbatterytomp().subscribe((data:any) => {
              this.uidbattery = data
              for(let i in this.uidbattery) {
                // cloning items
                if(this.uidbattery[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidbattery[i].user_uid).update({Battery: firebase.firestore.FieldValue.arrayUnion(this.uidbattery[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidbattery[i].itemid + " telah diterima");
                    this.senddata.editdumpbatterytomp(this.uidbattery[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidbattery[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            // send food to mp
            this.senddata.dumpfoodtomp().subscribe((data:any) => {
              this.uidfood = data
              for(let i in this.uidfood) {
                // cloning items
                if(this.uidfood[i].status_kirim == 0) {
                  this.fs.collection('Items').doc(this.uidfood[i].user_uid).update({Food: firebase.firestore.FieldValue.arrayUnion(this.uidfood[i].item), UpdateAt: this.newTime()}).then(() => {
                    console.log("item " + this.uidfood[i].itemid + " telah diterima");
                    this.senddata.editdumpfoodtomp(this.uidfood[i].itemid, '1').subscribe((data:any) => {},(error:any) => {})
                  });
                } else {
                  console.log("item " + this.uidfood[i].itemid + " telah terupdate");
                }
              }
            },(error:any) => {})

            //if success
            this.state_buy = "1"
            this.status_1 = "1"
            this.stateHash = false;
            //if success
            //return res;
          }).catch((err:any) => {
            //console.log(err);
            //return err;
          });
          let ct = localStorage.getItem('cartStorage');
          let i = 0;
          for (i; i < Number(ct); i++) {
            this.updatestorecart(this.cartID, this.globalID, this.wallet, 'res.transactionHash');
          }
          this.senddata.getstorecart(this.globalID).subscribe((data:any) => {
            this.storecart = JSON.parse(data)
            for(let i in this.storecart) {
              this.updatestorecart(this.storecart[i].id_cart, this.globalID, this.wallet, 'res.transactionHash')
            }        
          },(error:any) => {});

          loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Transaction Successfull, We have send this transaction receipt to your email',
            buttons: ['OK'],
          });
          await alert.present();
          localStorage.setItem('cartStorage', '0');
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
      }

    // Payment Market P2P
      async pay_firstMarketp2p() {
        const loading = await this.loadingController.create();
        await loading.present();

        this.fs.collection("Players").doc(this.marketp2pdragonowner).valueChanges().subscribe((datas : any) => {
          //console.log(datas.ProfileData);
          let data_user = JSON.parse(datas.ProfileData)
          // console.log(data_user.WalletAddress)
          this.owner_address = data_user.WalletAddress
          // console.log(this.owner_address)
        });

        if((this.bnb_balance*1) > (this.price*1) && (this.bnb_balance*1) > (this.marketp2pdragonFee*1)){
          this.web3js.eth.sendTransaction({
            from : this.wallet,
            to : this.owner_address,
            value : this.web3js.utils.toWei(this.price.toFixed(8).toString(), 'ether'),
            gas : 500000,
            gasPrice : 5000000000
            }, async (err : any, transactionHash : any) => {
              if(err){
                this.openDialog("Transaction Error Please Try Again");
              }else{
                let crd = JSON.stringify({
                  ObjectId:Number(this.marketp2pdragonOID),
                  ItemId:this.marketp2pdragonID,
                  Id:this.marketp2pdragonImg,
                  HP:Number(this.marketp2pdragonHP),
                  Attack:Number(this.marketp2pdragonAttack),
                  Defense:Number(this.marketp2pdragonDefense),
                  Exp:Number(this.marketp2pdragonExp),
                  Level:Number(this.marketp2pdragonLevel),
                  Rarity:this.marketp2pdragonRarity,
                  price:this.marketp2pdragonprice,
                  owner:this.marketp2pdragonowner
                });
                this.current_data = JSON.parse(crd)
                console.log(JSON.stringify(this.current_data));
                let kind = localStorage.getItem('kind');
                if(kind == 'dragon') {
                  this.kind = 'dragon';
                } else if(kind == 'egg') {
                  this.kind = 'egg';
                } else if(kind == 'battery') {
                  this.kind = 'battery';
                } else if(kind == 'food') {
                  this.kind = 'food';
                }
                this.senddata.settrxhistory(
                  this.globalID, //userid
                  this.marketp2pdragonID+'-'+this.kind, //itemid
                  this.marketp2pdragonprice, //amount
                  transactionHash, //tx_hash
                  'BNB to Seller', //type
                  JSON.stringify(this.current_data) //item
                ).subscribe((data:any) => {},(error:any) => {})
                await this.checkitemscreated();
                var sfDocRef = this.fs.firestore.collection('Sell').doc(this.globalID);
                var sfDocRef2 = this.fs.firestore.collection('Items').doc(this.globalID);
                try {
                  this.fs.firestore.runTransaction(async (transaction : any) => {
                    const sfDoc = await transaction.get(sfDocRef);
                    let kind = localStorage.getItem('kind');
                    if(kind == 'dragon') {
                      this.kind = 'dragon';
                    } else if(kind == 'egg') {
                      this.kind = 'egg';
                    } else if(kind == 'battery') {
                      this.kind = 'battery';
                    } else if(kind == 'food') {
                      this.kind = 'food';
                    }
                    if(this.kind == "food"){
                      if (sfDoc.data()["Food"].indexOf(JSON.stringify(this.current_data)) > -1) {
                        // console.log(sfDoc)
                        // console.log(sfDoc.data()["Food"])
                        // console.log(this.price.toString())
                        //DELETE
                        const datax = this.current_data;
                        await transaction.update(sfDocRef, { Food : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(datax)) });
                        //ADD
                        delete datax.price
                        delete datax.owner
                        delete datax.IsNew
                        delete datax.ObjectId
                        delete datax.AddAt
                        await transaction.update(sfDocRef2, { Food : firebase.firestore.FieldValue.arrayUnion(JSON.stringify(datax)) });
                        loading.dismiss();
                        const alert = await this.alertController.create({
                          header: 'Success',
                          message: 'Transaction Successfull, We have send this transaction receipt to your email',
                          buttons: ['OK'],
                        });
                        await alert.present();
                      }else{
                        throw "Document Food does not exist!";
                      }
                    }else if(this.kind == "egg"){
                      if (sfDoc.data()["Egg"].indexOf(JSON.stringify(this.current_data)) > -1) {
                        // console.log(sfDoc)
                        // console.log(sfDoc.data()["Egg"])
                        //DELETE
                        const datax = this.current_data;
                        await transaction.update(sfDocRef, { Egg : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(datax)) });
                        //ADD
                        delete datax.price
                        delete datax.owner
                        delete datax.IsNew
                        delete datax.ObjectId
                        delete datax.AddAt
                        await transaction.update(sfDocRef2, { Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify(datax)) });
                        loading.dismiss();
                        const alert = await this.alertController.create({
                          header: 'Success',
                          message: 'Transaction Successfull, We have send this transaction receipt to your email',
                          buttons: ['OK'],
                        });
                        await alert.present();
                      }else{
                        throw "Document Egg does not exist!";
                      }
                    }else if(this.kind == "battery"){
                      if (sfDoc.data()["Battery"].indexOf(JSON.stringify(this.current_data)) > -1) {
                        // console.log(sfDoc)
                        // console.log(sfDoc.data()["Battery"])
                        //DELETE
                        const datax = this.current_data;
                        await transaction.update(sfDocRef, { Battery : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(datax)) });
                        //ADD
                        delete datax.price
                        delete datax.owner
                        delete datax.IsNew
                        delete datax.ObjectId
                        delete datax.AddAt
                        await transaction.update(sfDocRef2, { Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify(datax)) });
                        loading.dismiss();
                        const alert = await this.alertController.create({
                          header: 'Success',
                          message: 'Transaction Successfull, We have send this transaction receipt to your email',
                          buttons: ['OK'],
                        });
                        await alert.present();
                      }else{
                        throw "Document Battery does not exist!";
                      }
                    }else if(this.kind == "dragon"){
                      if (sfDoc.data()["Dragon"].indexOf(JSON.stringify(this.current_data)) > -1) {
                        // console.log(sfDoc)
                        // console.log(sfDoc.data()["Dragon"])
                        //DELETE
                        const datax = this.current_data;
                        await transaction.update(sfDocRef, { Dragon : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(datax)) });
                        //ADD
                        this.senddata.transferDragon(this.marketp2pdragonowner,this.globalID,this.marketp2pdragonID).subscribe((data:any) => {},(error:any) => {})
                        this.senddata.editpricedumpitemsmp(this.marketp2pdragonImg, this.globalID, this.marketp2pdragonID, this.marketp2pdragonprice, this.marketp2pdragonAttack, this.marketp2pdragonDefense, this.marketp2pdragonRarity, this.marketp2pdragonLevel, this.globalID, 'Items').subscribe((dataE:any) => {},(error:any) => {})
                        delete datax.price
                        delete datax.owner
                        delete datax.IsNew
                        // delete datax.ObjectId
                        delete datax.AddAt
                        await transaction.update(sfDocRef2, { Dragon : firebase.firestore.FieldValue.arrayUnion(JSON.stringify(datax)) });
                        // console.log('Object Id Naga Player: ', this.ObjId)
                        // console.log("API Transfer Dragon", this.senddata.transferDragon(this.owner,this.globalID,this.ObjId).subscribe((data:any) => {},(error:any) => {}))
                        loading.dismiss();
                        const alert = await this.alertController.create({
                          header: 'Success',
                          message: 'Transaction Successfull, We have send this transaction receipt to your email',
                          buttons: ['OK'],
                        });
                        await alert.present();
                      }else{
                        throw "Document Dragon does not exist!";
                      }
                    }
                  });
                  console.log("Transaction successfully committed!");
                } catch (e) {
                  console.log("Transaction failed: ", e);
                }
                this.senddata.setitemhistory(this.marketp2pdragonID,this.globalID,transactionHash,JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
                //if success
                this.state_buy = "3";
                this.status_2 = "1";
                loading.dismiss();
                //if success
              }
            }
          )
        }else{
          const alert = await this.alertController.create({
            header: 'Failed!',
            message: 'BNB Balance is not Enough',
            buttons: ['OK'],
          });
          await alert.present();
        }
      }

      pay_secondMarketp2p() {
        this.web3js.eth.sendTransaction({
          from : this.wallet,
          to : '0x3f719DDCDB386eF2c4E2c5f24DB2DAe61187C894',
          value : this.web3js.utils.toWei(this.marketp2pdragonFee.toFixed(8).toString(), 'ether'),
          gas : 500000,
          gasPrice : 5000000000
          }, async (err : any, transactionHash : any) => {
            if(err){
              this.openDialog("Transaction Error Please Try Again");
            }else{
              let crd = JSON.stringify({
                ObjectId:Number(this.marketp2pdragonOID),
                ItemId:this.marketp2pdragonID,
                Id:this.marketp2pdragonImg,
                HP:Number(this.marketp2pdragonHP),
                Attack:Number(this.marketp2pdragonAttack),
                Defense:Number(this.marketp2pdragonDefense),
                Exp:Number(this.marketp2pdragonExp),
                Level:Number(this.marketp2pdragonLevel),
                Rarity:this.marketp2pdragonRarity,
                price:this.marketp2pdragonprice,
                owner:this.marketp2pdragonowner
              });
              this.current_data = JSON.parse(crd)
              console.log(JSON.stringify(this.current_data));
              let kind = localStorage.getItem('kind');
              if(kind == 'dragon') {
                this.kind = 'dragon';
              } else if(kind == 'egg') {
                this.kind = 'egg';
              } else if(kind == 'battery') {
                this.kind = 'battery';
              } else if(kind == 'food') {
                this.kind = 'food';
              }
              this.senddata.settrxhistory(this.globalID,this.marketp2pdragonID+'-'+this.kind,this.fee.toString(),transactionHash,'BNB to Oragon',JSON.stringify(this.current_data)).subscribe((data:any) => {},(error:any) => {})
              this.state_buy = "3"
              this.status_1 = "1"
              //if success
            }
          }
        )
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
    
    getPaymentCount(){
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
      let kind = localStorage.getItem('kind');
      if(kind == 'dragon') {
        this.senddata.getselldgidmp(ItemId).subscribe((dataDetail:any) => {
          this.dragonDetail = JSON.parse(dataDetail)
          this.marketp2pdragonOID = this.dragonDetail.ObjectId
          this.marketp2pdragonID = this.dragonDetail.ItemId
          this.marketp2pdragonImg = this.dragonDetail.Id
          this.marketp2pdragonAttack = this.dragonDetail.Attack
          this.marketp2pdragonDefense = this.dragonDetail.Defense
          this.marketp2pdragonLevel = this.dragonDetail.Level
          this.marketp2pdragonHP = this.dragonDetail.HP
          this.marketp2pdragonRarity = this.dragonDetail.Rarity
          this.marketp2pdragonExp = this.dragonDetail.Exp
          this.marketp2pdragonowner = this.dragonDetail.owner
          this.marketp2pdragonprice = this.dragonDetail.price
          let marketp2pdragonpriceUSD = this.dragonDetail.price / this.current_bnb
          this.marketp2pdragonpriceUSD = (marketp2pdragonpriceUSD).toFixed(2);
          console.log(this.marketp2pdragonpriceUSD);
        },(error:any) => {})
      } else {
          this.marketp2pdragonImg = 'null'
          this.marketp2pdragonprice = null
          this.marketp2pdragonpriceUSD = null
          console.log(this.marketp2pdragonpriceUSD);
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

  // Store & Advertise
    getstoredata(){
      this.senddata.getstoredata().subscribe((data:any) => {
        this.storedata = data
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
        // console.log(this.storeImg)
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
          // this.cartDeskripsi = this.storecart[i].deskripsi
          this.cartPrice = this.storecart[i].harga
          this.cartQty = this.storecart[i].qty_cart
          let cartPriceBNB = (this.current_bnb * this.cartPrice) * this.cartQty
          this.cartPriceBNB = (cartPriceBNB).toFixed(2);
          this.cartImg = this.storecart[i].gambar
        }        
      },(error:any) => {})
    }

    async setstorecart(id_product, user_uid, addressw) {
      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.setstorecart(id_product, user_uid, addressw).subscribe((data:any) => {
        let setstorecart = data
        console.log(setstorecart)
      },(error:any) => {})

      this.state_buy = "1";

      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Items already added to your cart',
        buttons: ['OK'],
      });
      await alert.present();
      this.stateHash = false;
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

  openDialog(msg : string) {
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }
}
