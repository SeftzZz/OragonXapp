import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import {
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { IonInfiniteScroll } from "@ionic/angular";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  EffectFade,
} from "swiper";
import { IonicSlides } from "@ionic/angular";
SwiperCore.use([
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  IonicSlides,
  EffectFade,
]);

import { SendData } from "../send-data";
const Tx = require("ethereumjs-tx").Transaction;
import { interval, Subscription } from "rxjs";
import { Location } from "@angular/common";
import CryptoJS from "crypto-js";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";

// AngularFire
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

// Services
import { AuthService } from "../services/auth.service";
import { ProviderService } from "../provider.service";

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
        56: "https://oragonbsc.io/weboragonbsc/kelolaisi/api",
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
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  private slides: any;
  // object
  profile = null;
  ipAddress = "";
  isLogin: any;
  percentRoyalty: any;
  valueRoyalty: any;
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
  points : any;
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

  subscription: Subscription;

  status_direct_buy: any = "1";
  stateHash: any;
  localStorage: any;
  parse_localStorage: any;
  globalID: any;
  current_bnb_wei: any;

  carts: any;
  cartID: any;
  cartUID: any;
  cartCount: any;
  cartNull: any;
  cartNotNull: any;
  cartName: any;
  cartDeskripsi: any;
  cartQty: any;
  cartPrice: any;
  cartImg: any;
  cartPriceBNB: any;
  uidegg: any;
  uidbattery: any;
  uidfood: any;
  storecart: any;

  dragons: any;
  dragonsdate: any;
  dragonsowned: any;
  dragonsownedbg: any;
  hargaEgg: any;
  eggLowest: any;
  atozEgg: any;
  currentp2p: any;
  currentp2powned: any;
  dragonDetail: any;
  marketp2pdragonDocId: any;
  marketp2pdragonID: any;
  marketp2pdragonImg: any;
  marketp2pdragonAttack: any;
  marketp2pdragonDefense: any;
  marketp2pdragonLevel: any;
  marketp2pdragonHP: any;
  marketp2pdragonHunger : any;
  marketp2pdragonMaxHP : any;
  marketp2pdragonMaxHunger : any;
  marketp2pdragonRarity: any;
  marketp2pdragonExp: any;
  marketp2pdragonprice: any;
  marketp2pdragonpriceUSD: any;
  marketp2pdragonpriceBNB: any;
  marketp2pdragonowner: any;
  marketp2pdragonFee: any;
  marketp2pdragonDate: any;
  marketp2pdragonBG: any;
  marketp2pdragonIdBG: any;
  marketp2pdragonImgBG: any;
  marketp2pdragonfavorited: any;
  marketp2pdragonRoyalty: any;
  priceRoyalty_display: any;
  fee_royalty: any;
  current_data: any;
  owner_address: any;
  sortdragons: any;
  sortdragonsowned: any;
  timeSell: any;

  sortp2pmarket: any;
  dragonsHigh: any;
  dragonsLow: any;
  dragonsAtoZ: any;
  marketp2pdragonLength: any;

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
  sorteggsowned: any;

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
  sortbatteriesowned: any;

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
  marketp2pfoodFee: any;
  marketp2pfoodDate: any;
  btnclickcategory: any;
  sortfoodsowned: any;
  public current_qty: any;
  input_stock: any;
  getSellfood: any;
  iditemssellFood: any;

  input_price: any;
  rangeValue: any;
  selectedBid: any;
  latest_date: any;
  timeBID: any;
  royalties: any;
  positionRoyalty: any;
  marketp2pdragonRoyalty2: any;
  marketp2pdragonRoyalty3: any;
  marketp2pdragonRoyalty4: any;
  marketp2pdragonRoyalty5: any;

  trxhistory: any;
  pointhistory : any;
  pointhistoryall : any;
  pointhistorybyid : any;
  sessionPointHistory : any;
  dataNotif: any;
  notificationBid: any;
  statusCheckNew : any;
  sortbatteriesownedLength : any;
  usedBattery : any;
  usedEgg : any;
  timeIncubator : any;
  hatching : any;
  countdown : any;
  days : any;
  hours : any;
  minutes : any;
  seconds : any;
  hatchingDataEgg : any;
  hatchingDataBattery : any;

  hoursServer = 0;
  minutesServer = 0;
  secondsServer = 0;
  isRunning = false;
  timerId = 0;
  sortbatteriesownedIncubator : any;

  jaketsHigh : any;
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
    public datepipe: DatePipe
  ) {
    this.subscription = new Subscription();
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
  }

  async logout() {
    await this.authService.logout();
    window.location.replace("/tabs/home");
  }

  async login() {
    // await this.authService.logout();
    this.router.navigateByUrl("/login", { replaceUrl: true });
  }

  async p2pmarket() {
    // await this.authService.logout();
    this.router.navigateByUrl("/tabs/p2pmarket", { replaceUrl: true });
  }

  async doInfinite(infiniteScroll) {
    // console.log("Begin async operation");
    const loading = await this.loadingController.create();
    await loading.present();

    setTimeout(() => {
      for (let i = 0; i < 12; i++) {
        this.dragons.push(this.dragons[i]);
      }
      loading.dismiss();
      // console.log("Async operation has ended");
      infiniteScroll.target.complete();
    }, 6);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  // FCT-Refresh
  async doRefresh(event) {}

  // FCT-Root
  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

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

      this.checknotificationBid();
      // this.notificationBid = setInterval(async () => {
        // this.checknotificationBid();
      // }, 3000);
      this.checknewdragon();
      this.checknewfood();
      this.checknewbattery();
      this.checknewpoint();
      this.getcountRolling();
    }

    this.stateHash = false;

    this.currentp2p = 0;
    this.currentp2powned = 10;
    this.sortp2pmarket = 1;
    // console.log("category p2p", this.currentp2p);
    // console.log("sort p2p", this.sortp2pmarket);

    // const source = interval(2000);
    // this.subscription = source.subscribe(() => this.checkonsale());

    this.senddata.getselldgUserownedmp(this.globalID).subscribe(
      async (dataSell: any) => {
        const loading = await this.loadingController.create();
        await loading.present();
        let dragonsowned = JSON.parse(dataSell);
        this.dragonsowned = dragonsowned;
        this.marketp2pdragonLength = this.dragonsowned.length;
        // console.log(this.dragonsowned)
        for (let i in this.dragonsowned) {
          if (
            this.dragonsowned[i].imgbackground == "exists" &&
            this.dragonsowned[i].statusbayarbackground == "paid"
          ) {
            this.senddata.getallbackgroundmp(this.globalID).subscribe(
              (dataSell: any) => {
                this.dragonsownedbg = JSON.parse(dataSell);
                this.marketp2pdragonBG = this.dragonsownedbg.imgBg;
                this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                // console.log(this.dragonsownedbg);
              },
              (error: any) => {}
            );
          }
          if(this.dragonsowned[i].ItemId == 'ITM13') {
            console.log("anda dapat membeli jaket metalicana")
            this.senddata.updateNewDataClaimmp(
              this.globalID, 
              "ITM13",
              this.marketp2pdragonLength
              ).subscribe((respUpdate:any) => {
              // console.log("respUpdate", respUpdate);
            });
          } else {
            console.log("item tidak tersedia")
          }
        }
        loading.dismiss();
      },
      (error: any) => {}
    );

    this.senddata.getselleggUsermp(this.globalID).subscribe(
      (dataSell: any) => {
        this.eggsHigh = JSON.parse(dataSell);
        // this.marketp2peggLength = this.eggsHigh.length;
        // console.log(this.eggsHigh)
      },
      (error: any) => {}
    );

    this.senddata.getselleggUserownedmp(this.globalID).subscribe(
      (dataSell: any) => {
        this.eggsHigh = JSON.parse(dataSell);
        this.marketp2peggLength = this.eggsHigh.length;
      },
      (error: any) => {}
    );

    this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
      (dataSell: any) => {
        this.batteriesHigh = JSON.parse(dataSell);
        this.marketp2pbatteryLength = this.batteriesHigh.length;
        if(this.marketp2pbatteryLength == 0) {
          this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(this.batteriesHigh.DocId).set({
            Amount: 0,
            Id: this.batteriesHigh.DocId,
            ItemId: this.batteriesHigh.ItemId,
          }).then(() => {});
        }
        // console.log(this.batteriesHigh)
      },
      (error: any) => {}
    );

    this.senddata.getsellfoodUsermp(this.globalID).subscribe(
      (dataSell: any) => {
        this.foodsHigh = JSON.parse(dataSell);
        this.marketp2pfoodLength = this.foodsHigh.lengthFood;
        if(this.marketp2pfoodLength == 0) {
          this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.foodsHigh.DocId).set({
            Amount: 0,
            Id: this.foodsHigh.DocId,
            ItemId: this.foodsHigh.ItemId,
            Used: 0
          }).then(() => {});
        }
        // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
      },
      (error: any) => {}
    );

    this.senddata.getroyaltiesUsermp(this.globalID).subscribe(
      (dataSell: any) => {
        let royalties = JSON.parse(dataSell);
        this.royalties = royalties;
        if (this.royalties.length == 0) {
          this.percentRoyalty = 0;
          this.valueRoyalty = 0;
        } else {
          // console.log("royaties data: ", this.royalties);
          for (let i in this.royalties) {
            this.valueRoyalty = (this.royalties[i].amount / 100) * 100;
            this.percentRoyalty = this.valueRoyalty * 100;
            if (this.valueRoyalty == 1) {
              localStorage.setItem("wd", "1");
              let wd = localStorage.getItem("wd");
              if (wd == "1") {
                // this.alertWithdraw();
                return wd;
              }
              return this.valueRoyalty;
            }
          }
        }
      },
      (error: any) => {}
    );

    this.selectedBid = "Select type BID";
    this.rangeValue = 1;
    loading.dismiss();
  }

  checknotificationBid() {
    this.senddata
      .getNotificationBidmp(this.globalID)
      .subscribe(async (dataNotif: any) => {
        this.dataNotif = JSON.parse(dataNotif);
        for (let i in this.dataNotif) {
          // console.log("dataNotif", this.dataNotif[i].idBid);
          const toast2 = await this.toastCtrl.create({
            header: "You have notifications",
            message:
              this.dataNotif[i].username +
              " has place bid in " +
              this.dataNotif[i].priceBid +
              " BNB",
            icon: "information-circle",
            position: "top",
            color: "success",
            buttons: [
              {
                text: "Close",
                role: "cancel",
                handler: () => {
                  this.senddata
                    .readNotificationBidmp(this.dataNotif[i].idBid)
                    .subscribe(async (dataRead: any) => {
                      // console.log(dataRead, "notifications readed");
                    });
                },
              },
            ],
          });
          await toast2.present();
          this.senddata.getNotificationBidmp(this.globalID);
          const { role } = await toast2.onDidDismiss();
        }
      });
  }

  getcountRolling(){
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

  // FCT-AGM Get Current Location Coordinates
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

  // FCT-WEB3
  async connectAccount() {
    this.provider = await web3Modal.connect();
    this.getcurrentoragon();
    await this.getPaymentCount();
    this.web3js = new Web3(this.provider); // create web3 instance
    // console.log(this.web3js);
    this.accounts = await this.web3js.eth.getAccounts(console.log);
    this.wallet = this.accounts[0];

    if (this.wallet == this.wallets) {
      this.tokenInst = new this.web3js.eth.Contract(
        this.tokenABI,
        "0x88c676fc777c225b69869aeef5d10535de1e4f5d"
      );
      this.balance1 = await this.tokenInst.methods
        .balanceOf(this.accounts[0])
        .call(console.log);
      this.oragon_balance_display = (
        this.web3js.utils.fromWei(this.balance1, "gwei") * 1
      )
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
      this.oragon_balance = this.web3js.utils.fromWei(this.balance1, "gwei");
      this.in_dollar = this.oragon_balance * this.current_oragon;
      this.oragon_balance2 = this.balance1;
      this.balance2 = await this.web3js.eth.getBalance(this.accounts[0]);
      this.bnb_balance = this.web3js.utils.fromWei(this.balance2, "ether");
      console.log(this.bnb_balance);

      //if connect
      this.connect = true;
      if (this.payment_count <= 0) {
        this.state_buy = "2";
      } else if (this.payment_count > 0) {
        this.state_buy = "2";
      }
      this.stateHash = true;

      // fee gatcha
      this.fee = ((11 / 100) * 100 * 0.0027).toString(); //10X
      let kind = localStorage.getItem("kind");
      if (kind == "dragon") {
        // fee p2p market dragon
        this.marketp2pdragonFee = (11 / 100) * this.marketp2pdragonprice;
        let marketp2pdragonprice_actual =
          this.marketp2pdragonprice - this.marketp2pdragonFee;
        this.fee_display = this.marketp2pdragonFee;
        this.price_display = marketp2pdragonprice_actual;
      } else if (kind == "egg") {
        // fee p2p market egg
        this.marketp2peggFee = (11 / 100) * this.marketp2peggprice;
        let marketp2peggprice_actual =
          this.marketp2peggprice - this.marketp2peggFee;
        this.fee_display = this.marketp2peggFee;
        this.price_display = marketp2peggprice_actual;
      } else if (kind == "battery") {
        // fee p2p market battery
        this.marketp2pbatteryFee = (11 / 100) * this.marketp2pbatteryprice;
        let marketp2pbatteryprice_actual =
          this.marketp2pbatteryprice - this.marketp2pbatteryFee;
        this.fee_display = this.marketp2pbatteryFee;
        this.price_display = marketp2pbatteryprice_actual;
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

  // FCT-Market P2P
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
        console.log(datas.Gacha1);
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
        console.log(datas);
      });
    localStorage.removeItem("walletconnect");
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
      this.currentp2p = 1;
      this.sortp2pmarket = 1;
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 2) {
      this.currentp2p = 2;
      this.sortp2pmarket = 4;
      console.log("category p2p", this.currentp2p);
      console.log("sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 3) {
      this.currentp2p = 3;
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.batteriesHigh = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 4) {
      this.currentp2p = 4;
      this.senddata.getsellfoodmp().subscribe(
        (dataSell: any) => {
          this.foodsHigh = dataSell;
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
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselldgmp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 2) {
      this.currentp2p = 1;
      this.sortp2pmarket = 2;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowsellhargamp().subscribe(
        (dataSell: any) => {
          this.sortdragons = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 3) {
      this.sortp2pmarket = 3;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
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
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 5) {
      this.currentp2p = 2;
      this.sortp2pmarket = 5;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getlowselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    } else if (kind == 6) {
      this.currentp2p = 2;
      this.sortp2pmarket = 6;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getatozselleggmp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
      // ------------------------ Sort BATERRY
    } else if (kind == 7) {
      this.currentp2p = 3;
      this.sortp2pmarket = 7;
      console.log("click category p2p", this.currentp2p);
      console.log("click sort p2p", this.sortp2pmarket);
      this.senddata.getsellbatterymp().subscribe(
        (dataSell: any) => {
          this.sorteggs = dataSell;
        },
        (error: any) => {}
      );
    }
  }

  getdgbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(DocId);
  }

  geteggbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(DocId);
  }

  getbatterybuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }

  checkkind(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "dragon") {
      this.senddata.getselldgidmp(DocId).subscribe(
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
          this.marketp2pdragonowner = this.dragonDetail.owner;
          this.marketp2pdragonprice = this.dragonDetail.price;
          let marketp2pdragonpriceUSD =
            this.dragonDetail.price / this.current_bnb;
          this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
          this.marketp2pdragonBG = this.dragonDetail.imgbackground;
          this.marketp2pdragonImgBG = this.dragonDetail.imgBg;
          this.marketp2pdragonfavorited = this.dragonDetail.favorited;
          console.log(this.marketp2pdragonpriceUSD);
          let input_price = localStorage.getItem("input_price");
          if (this.marketp2pdragonBG == "exists") {
            this.senddata.getdgroyaltymp(DocId).subscribe((dataRoyalty) => {
              let dr = dataRoyalty;
              // fee p2p market dragon
              this.marketp2pdragonFee = (12 / 100) * Number(input_price);
              let marketp2pdragonprice_actual =
                Number(input_price) - this.marketp2pdragonFee;
              this.fee_display = this.marketp2pdragonFee;
              this.price_display = marketp2pdragonprice_actual;
              this.marketp2pdragonRoyalty = (10 / 100) * Number(input_price);
              let priceRoyalty_display =
                this.price_display - this.marketp2pdragonRoyalty;
              this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
              this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
              this.marketp2pdragonRoyalty2 =
                (10 / 100) * this.marketp2pdragonRoyalty;
              this.marketp2pdragonRoyalty3 =
                (10 / 100) * this.marketp2pdragonRoyalty2;
              this.marketp2pdragonRoyalty4 =
                (10 / 100) * this.marketp2pdragonRoyalty3;
              this.marketp2pdragonRoyalty5 =
                (10 / 100) * this.marketp2pdragonRoyalty4;

              if (dr == 1) {
                this.positionRoyalty = 1;
                // console.log("first position");
                // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
              } else if (dr == 2) {
                this.positionRoyalty = 2;
                // console.log("second position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2
                // );
              } else if (dr == 3) {
                this.positionRoyalty = 3;
                // console.log("third position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3
                // );
              } else if (dr == 4) {
                this.positionRoyalty = 4;
                // console.log("fourth position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 4",
                //   this.marketp2pdragonRoyalty4
                // );
              } else if (dr == 5) {
                this.positionRoyalty = 5;
                // console.log("fifth position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 4",
                //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 5",
                //   this.marketp2pdragonRoyalty5
                // );
              } else {
                // console.log("unknown position");
              }

              // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
              // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
              // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
              // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
              // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
            });
          } else {
            this.senddata.getdgroyaltymp(DocId).subscribe((dataRoyalty) => {
              let dr = dataRoyalty;
              // fee p2p market dragon
              this.marketp2pdragonFee = (12 / 100) * Number(input_price);
              let marketp2pdragonprice_actual =
                Number(input_price) - this.marketp2pdragonFee;
              this.fee_display = this.marketp2pdragonFee;
              this.price_display = marketp2pdragonprice_actual;
              this.marketp2pdragonRoyalty = (10 / 100) * Number(input_price);
              let priceRoyalty_display =
                this.price_display - this.marketp2pdragonRoyalty;
              this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
              this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
              this.marketp2pdragonRoyalty2 =
                (10 / 100) * this.marketp2pdragonRoyalty;
              this.marketp2pdragonRoyalty3 =
                (10 / 100) * this.marketp2pdragonRoyalty2;
              this.marketp2pdragonRoyalty4 =
                (10 / 100) * this.marketp2pdragonRoyalty3;
              this.marketp2pdragonRoyalty5 =
                (10 / 100) * this.marketp2pdragonRoyalty4;

              if (dr == 1) {
                this.positionRoyalty = 1;
                // console.log("first position");
                // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
              } else if (dr == 2) {
                this.positionRoyalty = 2;
                // console.log("second position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2
                // );
              } else if (dr == 3) {
                this.positionRoyalty = 3;
                // console.log("third position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3
                // );
              } else if (dr == 4) {
                this.positionRoyalty = 4;
                // console.log("fourth position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
                // );
                // console.log(
                //   "royalti untuk pos 4",
                //   this.marketp2pdragonRoyalty4
                // );
              } else if (dr == 5) {
                this.positionRoyalty = 5;
                // console.log("fifth position");
                // console.log(
                //   "royalti untuk pos 1",
                //   this.marketp2pdragonRoyalty -
                //     this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 2",
                //   this.marketp2pdragonRoyalty2 -
                //     this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 3",
                //   this.marketp2pdragonRoyalty3 -
                //     this.marketp2pdragonRoyalty4 -
                //     this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 4",
                //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
                // );
                // console.log(
                //   "royalti untuk pos 5",
                //   this.marketp2pdragonRoyalty5
                // );
              } else {
                // console.log("unknown position");
              }

              // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
              // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
              // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
              // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
              // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
            });
          }

          this.senddata.getposroyaltymp(DocId).subscribe((datapos) => {
            // console.log(JSON.parse(datapos))
          });
        },
        (error: any) => {}
      );
    } else if (kind == "food") {
      this.senddata.getsellfoodUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortfoodsowned = JSON.parse(dataSell);
          this.marketp2pfoodOID = this.sortfoodsowned.DocId;
          this.marketp2pfoodLength = this.sortfoodsowned.lengthFood;
          this.marketp2pfoodDate = this.sortfoodsowned.EditAt;
          this.marketp2pfoodowner = this.sortfoodsowned.owner;
          this.marketp2pfoodpriceBNB = 1;
          let marketp2pfoodpriceBNB =
            this.current_bnb * this.marketp2pfoodpriceBNB;
          this.marketp2pfoodpriceBNB = marketp2pfoodpriceBNB.toFixed(2);
          // console.log(this.marketp2pfoodpriceBNB)
        },
        (error: any) => {}
      );
    }
  }

  checkkindEgg(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "egg") {
      this.senddata.getselleggidmp(DocId).subscribe(
        (dataDetail: any) => {
          this.eggDetail = JSON.parse(dataDetail);
          this.marketp2peggDocId = this.eggDetail.DocId;
          this.marketp2peggID = this.eggDetail.ItemId;
          this.marketp2peggImg = this.eggDetail.Id;
          this.marketp2peggowner = this.eggDetail.owner;
          this.marketp2peggprice = this.eggDetail.price;
          let marketp2peggpriceUSD = this.eggDetail.price / this.current_bnb;
          this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
          // console.log(this.marketp2peggpriceUSD);
        },
        (error: any) => {}
      );
    }
  }

  checkkindBattery(DocId) {
    let kind = localStorage.getItem("kind");
    if (kind == "battery") {
      this.senddata.getsellbatteryidmp(DocId).subscribe(
        (dataDetail: any) => {
          this.batteryDetail = JSON.parse(dataDetail);
          this.marketp2pbatteryDocId = this.batteryDetail.DocId;
          this.marketp2pbatteryID = this.batteryDetail.ItemId;
          this.marketp2pbatteryImg = this.batteryDetail.Id;
          this.marketp2pbatteryowner = this.batteryDetail.owner;
          this.marketp2pbatteryprice = this.batteryDetail.price;
          let marketp2pbatterypriceUSD =
            this.batteryDetail.price / this.current_bnb;
          this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
          // console.log(this.marketp2pbatterypriceUSD);
        },
        (error: any) => {}
      );
    }
  }

  checkitemscreated() {
    this.fs
      .collection("Items")
      .doc(this.globalID)
      .valueChanges()
      .subscribe((datas: any) => {
        // console.log(datas.Count);
        if (datas == undefined) {
          this.fs.collection("Items").doc(this.globalID).set({
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

  // FCT-Profile
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
          // this.cartName = this.storecart[i].nama
          // this.cartDeskripsi = this.storecart[i].deskripsi
          this.cartPrice = this.storecart[i].harga;
          this.cartQty = this.storecart[i].qty_cart;
          let cartPriceBNB = this.current_bnb * this.cartPrice * this.cartQty;
          this.cartPriceBNB = cartPriceBNB.toFixed(2);
          this.cartImg = this.storecart[i].gambar;
        }
      },
      (error: any) => {}
    );
  }

  checknewdragon() {
    this.fs.collection("Items/" + this.globalID + "/Dragons").valueChanges().subscribe(async (datanewDragon:any) => {
      // console.log("datanewDragon", datanewDragon);
      for(let i in datanewDragon) {
        // console.log("datanewDragon", datanewDragon[i].Id, datanewDragon[i].Attributes.AttackPoint);
        if(datanewDragon[i].Attributes != undefined) {
          this.senddata.insertNewDragonmp(
            this.globalID, 
            datanewDragon[i].Id, 
            datanewDragon[i].ItemId, 
            datanewDragon[i].Attributes.AttackPoint,
            datanewDragon[i].Attributes.DefensePoint,
            datanewDragon[i].Attributes.Exp,
            datanewDragon[i].Attributes.HP,
            datanewDragon[i].Attributes.Hunger,
            datanewDragon[i].Attributes.Level,
            datanewDragon[i].Attributes.MaxHP,
            datanewDragon[i].Attributes.MaxHunger,
            ).subscribe((resp:any) => {
            // console.log(JSON.parse(resp));
            let check = JSON.parse(resp);
            if(check.newest == true) {
              this.senddata.updateNewDataDragonmp(
                this.globalID, 
                datanewDragon[i].Id, 
                datanewDragon[i].ItemId, 
                datanewDragon[i].Attributes.AttackPoint,
                datanewDragon[i].Attributes.DefensePoint,
                datanewDragon[i].Attributes.Exp,
                datanewDragon[i].Attributes.HP,
                datanewDragon[i].Attributes.Hunger,
                datanewDragon[i].Attributes.Level,
                datanewDragon[i].Attributes.MaxHP,
                datanewDragon[i].Attributes.MaxHunger,
                ).subscribe((respUpdate:any) => {
                // console.log("respUpdate", respUpdate);
              });
            }
            this.senddata.getselldgUserownedmp(this.globalID).subscribe(
              (dataSell: any) => {
                this.dragonsowned = JSON.parse(dataSell);
                this.marketp2pdragonID = this.dragonsowned.ItemId;
                this.marketp2pdragonLength = this.dragonsowned.length;
                // console.log(this.dragonsowned);
                for (let i in this.dragonsowned) {
                  if (
                    this.dragonsowned[i].imgbackground == "exists" &&
                    this.dragonsowned[i].statusbayarbackground == "paid"
                  ) {
                    this.senddata.getallbackgroundmp(this.globalID).subscribe(
                      (dataSell: any) => {
                        this.dragonsownedbg = JSON.parse(dataSell);
                        this.marketp2pdragonBG = this.dragonsownedbg.imgBg;
                        this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                        // console.log(this.dragonsownedbg)
                      },
                      (error: any) => {}
                    );
                  }
                }
              },
              (error: any) => {}
            );
          });
        } else {

        }
      }
    });
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

  checknewpoint() {
    this.fs.collection("Players").doc(this.globalID).valueChanges().subscribe(async (datanewPoint:any) => {
      // console.log("datanewPoint", datanewPoint.Point);
      this.points = datanewPoint.Point;
      this.senddata.getpointhistory(this.globalID).subscribe(
        (dataSell: any) => {
          this.pointhistory = JSON.parse(dataSell);
          // console.log("qtyPoint", this.pointhistory.qtyPoint);
          if(this.pointhistory.qtyPoint != this.points) {
            // console.log("data point s not match from point f");
            this.senddata.insertNewPointmp(
              this.globalID, 
              datanewPoint.Point,              
              'checked', 
              ).subscribe((resp:any) => {
              // console.log("inserting data...", resp);
            });
          } else {
            // console.log("data point s match from point f");
          }
        },
        (error: any) => {}
      );
    });
  }

  tab(kind) {
    // tab-owned
    if (kind == 10) {
      this.currentp2powned = 10;
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        async (dataSell: any) => {
          const loading = await this.loadingController.create();
          await loading.present();
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonLength = this.dragonsowned.length;
          // console.log(this.dragonsowned)
          for (let i in this.dragonsowned) {
            if (
              this.dragonsowned[i].imgbackground == "exists" &&
              this.dragonsowned[i].statusbayarbackground == "paid"
            ) {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg;
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                  // console.log(this.dragonsownedbg);
                },
                (error: any) => {}
              );
            }
          }
          loading.dismiss();
        },
        (error: any) => {}
      );

      this.senddata.getselleggUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          this.marketp2peggLength = this.eggsHigh.length;
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          this.marketp2pbatteryLength = this.batteriesHigh.length;
          // console.log(this.batteriesHigh)
        },
        (error: any) => {}
      );

      this.senddata.getsellfoodUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          this.marketp2pfoodLength = this.foodsHigh.lengthFood;
          // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
        },
        (error: any) => {}
      );
    } else if (kind == 20) {
      this.currentp2powned = 20;
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselldgUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsHigh = JSON.parse(dataSell);
          // console.log(this.dragons)
        },
        (error: any) => {}
      );

      this.senddata.getselleggUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.senddata.getsellbatterysellUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.senddata.getsellfoodUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          this.marketp2pfoodLength = this.foodsHigh.lengthFood;
          // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
        },
        (error: any) => {}
      );
    } else if (kind == 30) {
      this.currentp2powned = 30;
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselldgUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsHigh = JSON.parse(dataSell);
          // console.log(this.dragons)
        },
        (error: any) => {}
      );

      this.senddata.getselleggUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.senddata.getsellfoodUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.foodsHigh = JSON.parse(dataSell);
          this.marketp2pfoodLength = this.foodsHigh.lengthFood;
          // console.log("marketp2pfoodLength", this.marketp2pfoodLength);
        },
        (error: any) => {}
      );
    } else if (kind == 50) {
      this.currentp2powned = 50;
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getroyaltiesUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          let royalties = JSON.parse(dataSell);
          this.royalties = royalties;
          // console.log("royaties data: ", this.royalties);
          for (let i in this.royalties) {
            this.valueRoyalty = (this.royalties[i].amount / 100) * 100;
            this.percentRoyalty = this.valueRoyalty * 100;
            if (this.valueRoyalty == 1) {
              localStorage.setItem("wd", "1");
              let wd = localStorage.getItem("wd");
              if (wd == "1") {
                // this.alertWithdraw();
                return wd;
              }
              return this.valueRoyalty;
            }
          }
        },
        (error: any) => {}
      );
    } else if (kind == 60) {
      this.currentp2powned = 60;
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.gettrxhistory(this.globalID).subscribe(
        (dataSell: any) => {
          let trxhistory = JSON.parse(dataSell);
          this.trxhistory = trxhistory;
          // console.log("trxhistory data: ", this.trxhistory);
        },
        (error: any) => {}
      );
    } else if (kind == 70) {
      this.currentp2powned = 70;
      // console.log("category p2p owned", this.currentp2powned);
      this.sessionPointHistory = 0;
      this.senddata.getpointhistoryall(this.globalID).subscribe(
        (dataSell: any) => {
          let pointhistoryall = JSON.parse(dataSell);
          this.pointhistoryall = pointhistoryall;
          // console.log("pointhistoryall data: ", this.pointhistoryall);

          // this.senddata.getpointhistorybyid(this.pointhistoryall.idPoint).subscribe(
          //   (dataSell: any) => {
          //     let pointhistorybyid = JSON.parse(dataSell);
          //     this.pointhistorybyid = pointhistorybyid;
              // console.log("pointhistorybyid data: ", this.pointhistorybyid);
          //   },
          //   (error: any) => {}
          // );
        },
        (error: any) => {}
      );
    } else if (kind == 80) {
      this.currentp2powned = 80;
      // console.log("category p2p owned", this.currentp2powned);
    } else if (kind == 'jakets') {
      this.senddata.getselljaketsUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.jaketsHigh = JSON.parse(dataSell);
          // console.log(this.dragons)
        },
        (error: any) => {}
      );
    }
  }

  async clickcategoryowned(kind) {
    if (kind == 11) {
      this.currentp2powned = 11;
      // console.log("click category p2p owned", this.currentp2powned);

      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortdragonsowned = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      loading.dismiss();
    } else if (kind == 20) {
      this.currentp2powned = 20;
      // console.log("click category p2p owned", this.currentp2powned);

      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sorteggsowned = JSON.parse(dataSell);
          this.fs.collection("Players/" + this.globalID + "/Incubator").valueChanges().subscribe(async (dataIncubator:any) => {
            // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
            this.usedEgg = dataIncubator[0].EggItemId;
            this.usedBattery = dataIncubator[0].BatteryItemId;

            // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
            // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
            if(dataIncubator[0].IncubatorState == "Started") {
              let unix_timestamp = dataIncubator[0].StartedAt.seconds;
              let now = new Date(unix_timestamp * 1000);
              this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              // console.log("date now", this.latest_date);

              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

                return date;
              }

              // 👇️ Add 2 hours to another date
              const date = now;

              // 👇️ Mon Mar 14 2022 11:25:30
              let latest_date = addHours(dataIncubator[0].HatchTime, now);
              this.timeIncubator = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("date end incubator", this.timeIncubator);
              this.senddata.itemseggtoincubatormp(this.usedEgg, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataEgg = JSON.parse(dataE);
                this.senddata.getselleggUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sorteggsowned = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.senddata.itemsbatterytoincubatormp(this.usedBattery, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataBattery = JSON.parse(dataE);
                this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.hatching = true;
            }
          });
        },
        (error: any) => {}
      );

      loading.dismiss();
    } else if (kind == 30) {
      this.currentp2powned = 30;
      // console.log("click category p2p owned", this.currentp2powned);

      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortbatteriesowned = JSON.parse(dataSell);
          this.sortbatteriesownedLength = this.sortbatteriesowned.lengthBattery;
          this.fs.collection("Players/" + this.globalID + "/Incubator").valueChanges().subscribe(async (dataIncubator:any) => {
            // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
            this.usedEgg = dataIncubator[0].EggItemId;
            this.usedBattery = dataIncubator[0].BatteryItemId;

            // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
            // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
            if(dataIncubator[0].IncubatorState == "Started") {
              let unix_timestamp = dataIncubator[0].StartedAt.seconds;
              let now = new Date(unix_timestamp * 1000);
              this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              // console.log("date now", this.latest_date);

              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

                return date;
              }

              // 👇️ Add 2 hours to another date
              const date = now;

              // 👇️ Mon Mar 14 2022 11:25:30
              let latest_date = addHours(dataIncubator[0].HatchTime, now);
              this.timeIncubator = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("date end incubator", this.timeIncubator);
              this.senddata.itemseggtoincubatormp(this.usedEgg, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataEgg = JSON.parse(dataE);
                this.senddata.getselleggUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sorteggsowned = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.senddata.itemsbatterytoincubatormp(this.usedBattery, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataBattery = JSON.parse(dataE);
                this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.hatching = true;
            }
          });
        },
        (error: any) => {}
      );

      loading.dismiss();
    } else if (kind == 40) {
      this.currentp2powned = 40;
      // console.log("click category p2p owned", this.currentp2powned);

      const loading = await this.loadingController.create();
      await loading.present();

      this.senddata.getsellfoodUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortfoodsowned = JSON.parse(dataSell);
          this.marketp2pfoodLength = this.sortfoodsowned.lengthFood;
          this.marketp2pfoodDate = this.sortfoodsowned.EditAt;
          this.marketp2pfoodowner = this.sortfoodsowned.uid;
          this.marketp2pfoodpriceUSD = 1;
          // console.log(this.marketp2pfoodpriceUSD)
        },
        (error: any) => {}
      );

      loading.dismiss();
    }

    this.countDownHatching();
    this.countdown = setInterval(async () => {
      this.countDownHatching();
    }, 1000);
  }

  async countDownHatching() {
    // Set the date we're counting down to
    var countDownDate = new Date(this.timeIncubator).getTime();

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

    // console.log(this.marketp2pdragontimeCount)
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    // If the count down is over, write some text
    if (distance < 0 || this.hours < 0) {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
    // }, 1000);
  }

  setdgbuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(ItemId);
  }

  setdgbiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "dragon");
    this.checkkind(ItemId);
  }

  seteggbuydetail(DocId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(DocId);
  }

  seteggbiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "egg");
    this.checkkindEgg(ItemId);
  }

  setbatterybuydetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }

  setbatterybiddetail(ItemId) {
    let kind = localStorage.setItem("kind", "battery");
    this.checkkindBattery(ItemId);
  }

  setfoodbuydetail() {
    let kind = localStorage.setItem("kind", "food");
    this.checkkind(kind);
  }

  setfoodbiddetail() {
    let kind = localStorage.setItem("kind", "food");
    this.checkkind(kind);
  }

  async onPriceChange(input_price: number) {
    let kind = localStorage.getItem("kind");
    if (kind == "food") {
      this.input_price = input_price;
      let marketp2pfoodpriceBNB = this.current_bnb * this.input_price;
      // this.marketp2pfoodpriceBNB = (marketp2pfoodpriceBNB).toFixed(2);
      let marketp2pfoodpriceUSD = this.input_price * this.input_stock;
      this.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
    } else if (kind == "dragon") {
      this.input_price = input_price;
      let marketp2pdragonpriceUSD = this.input_price;
      this.marketp2pdragonpriceUSD = marketp2pdragonpriceUSD.toFixed(2);
      localStorage.setItem("input_price", input_price.toFixed());

      this.senddata
        .getdgroyaltymp(this.marketp2pdragonID)
        .subscribe((dataRoyalty) => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          this.marketp2pdragonFee = (12 / 100) * Number(input_price);
          let marketp2pdragonprice_actual =
            Number(input_price) - this.marketp2pdragonFee;
          this.fee_display = this.marketp2pdragonFee;
          this.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display =
            this.price_display - this.marketp2pdragonRoyalty;
          this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty = (10 / 100) * Number(input_price);
          this.marketp2pdragonRoyalty2 =
            (10 / 100) * this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty3 =
            (10 / 100) * this.marketp2pdragonRoyalty2;
          this.marketp2pdragonRoyalty4 =
            (10 / 100) * this.marketp2pdragonRoyalty3;
          this.marketp2pdragonRoyalty5 =
            (10 / 100) * this.marketp2pdragonRoyalty4;

          if (dr == 1) {
            this.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            this.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            this.positionRoyalty = 3;
            // console.log("third position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
            // );
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
          } else if (dr == 4) {
            this.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
            // );
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
          } else if (dr == 5) {
            this.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 4",
            //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
            // );
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
          } else {
            // console.log("unknown position");
          }

          // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
        });
    } else if (kind == "egg") {
      this.input_price = input_price;
      let marketp2peggpriceUSD = this.input_price / this.current_bnb;
      this.marketp2peggpriceUSD = marketp2peggpriceUSD.toFixed(2);
      localStorage.setItem("input_price", input_price.toFixed());

      this.senddata
        .getdgroyaltymp(this.marketp2pdragonID)
        .subscribe((dataRoyalty) => {
          let dr = dataRoyalty;
          // fee p2p market dragon
          this.marketp2pdragonFee = (12 / 100) * Number(input_price);
          let marketp2pdragonprice_actual =
            Number(input_price) - this.marketp2pdragonFee;
          this.fee_display = this.marketp2pdragonFee;
          this.price_display = marketp2pdragonprice_actual;
          let priceRoyalty_display =
            this.price_display - this.marketp2pdragonRoyalty;
          this.priceRoyalty_display = priceRoyalty_display.toFixed(1);
          this.fee_royalty = this.fee_display + this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty = (10 / 100) * Number(input_price);
          this.marketp2pdragonRoyalty2 =
            (10 / 100) * this.marketp2pdragonRoyalty;
          this.marketp2pdragonRoyalty3 =
            (10 / 100) * this.marketp2pdragonRoyalty2;
          this.marketp2pdragonRoyalty4 =
            (10 / 100) * this.marketp2pdragonRoyalty3;
          this.marketp2pdragonRoyalty5 =
            (10 / 100) * this.marketp2pdragonRoyalty4;

          if (dr == 1) {
            this.positionRoyalty = 1;
            // console.log("first position");
            // console.log("royalti untuk pos 1", this.marketp2pdragonRoyalty);
          } else if (dr == 2) {
            this.positionRoyalty = 2;
            // console.log("second position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty - this.marketp2pdragonRoyalty2
            // );
            // console.log("royalti untuk pos 2", this.marketp2pdragonRoyalty2);
          } else if (dr == 3) {
            this.positionRoyalty = 3;
            // console.log("third position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 - this.marketp2pdragonRoyalty3
            // );
            // console.log("royalti untuk pos 3", this.marketp2pdragonRoyalty3);
          } else if (dr == 4) {
            this.positionRoyalty = 4;
            // console.log("fourth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 - this.marketp2pdragonRoyalty4
            // );
            // console.log("royalti untuk pos 4", this.marketp2pdragonRoyalty4);
          } else if (dr == 5) {
            this.positionRoyalty = 5;
            // console.log("fifth position");
            // console.log(
            //   "royalti untuk pos 1",
            //   this.marketp2pdragonRoyalty -
            //     this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 2",
            //   this.marketp2pdragonRoyalty2 -
            //     this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 3",
            //   this.marketp2pdragonRoyalty3 -
            //     this.marketp2pdragonRoyalty4 -
            //     this.marketp2pdragonRoyalty5
            // );
            // console.log(
            //   "royalti untuk pos 4",
            //   this.marketp2pdragonRoyalty4 - this.marketp2pdragonRoyalty5
            // );
            // console.log("royalti untuk pos 5", this.marketp2pdragonRoyalty5);
          } else {
            // console.log("unknown position");
          }

          // console.log("royalti pos 1", this.marketp2pdragonRoyalty);
          // console.log("royalti pos 2", this.marketp2pdragonRoyalty2);
          // console.log("royalti pos 3", this.marketp2pdragonRoyalty3);
          // console.log("royalti pos 4", this.marketp2pdragonRoyalty4);
          // console.log("royalti pos 5", this.marketp2pdragonRoyalty5);
        });
    } else if (kind == "battery") {
      this.input_price = input_price;
      let marketp2pbatterypriceUSD = this.input_price / this.current_bnb;
      this.marketp2pbatterypriceUSD = marketp2pbatterypriceUSD.toFixed(2);
      localStorage.setItem("input_price", input_price.toFixed());
    }
  }

  async onStockChange(input_stock: number) {
    this.input_stock = input_stock;
    let marketp2pfoodpriceBNB =
      this.current_bnb * this.input_price * this.input_stock;
    this.marketp2pfoodpriceBNB = marketp2pfoodpriceBNB.toFixed(2);

    let marketp2pfoodpriceUSD = this.input_price * this.input_stock;
    this.marketp2pfoodpriceUSD = marketp2pfoodpriceUSD.toFixed(2);
  }

  myRange(demo: number) {
    this.rangeValue = demo;
    // console.log(demo);
  }

  typeBid(kind) {
    let selectedBid = kind;
    if (selectedBid == "1") {
      this.selectedBid = "Free";
      // console.log(this.selectedBid)
    } else if (selectedBid == "2") {
      this.selectedBid = "Step";
      // console.log(this.selectedBid)
    }
  }

  // DRAGON
  async sellNowDragon(marketp2pdragonDocId) {
    // Build Json String Dragon
    let crd = JSON.stringify({
      ObjectId: Number(this.marketp2pdragonDocId),
      ItemId: this.marketp2pdragonID,
      HP: Number(this.marketp2pdragonHP),
      Attack: Number(this.marketp2pdragonAttack),
      Defense: Number(this.marketp2pdragonDefense),
      Exp: Number(this.marketp2pdragonExp),
      Level: Number(this.marketp2pdragonLevel),
      Rarity: this.marketp2pdragonRarity,
    });
    this.current_data = JSON.parse(crd);
    // console.log(JSON.stringify(this.current_data));

    let now = new Date();
    this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
    // console.log("date now", this.latest_date);

    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

      return date;
    }

    // 👇️ Add 2 hours to another date
    const date = now;

    // 👇️ Mon Mar 14 2022 11:25:30
    let latest_date = addHours(168, now);
    this.timeSell = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
    // console.log("date end items on sell", this.timeSell);

    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      const loading = await this.loadingController.create();
      await loading.present();
      this.fs
        .collection("Items/" + this.globalID + "/Dragons")
        .doc(marketp2pdragonDocId)
        .delete()
        .then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          this.move_to_sell_test(marketp2pdragonDocId);
          this.senddata
            .itemsdragontosellmp(
              marketp2pdragonDocId,
              this.input_price,
              this.timeSell
            )
            .subscribe(
              (dataE: any) => {
                // console.log(dataE);
                loading.dismiss();
              },
              (error: any) => {}
            );
        });
    }
  }

  async bidNowDragon(marketp2pdragonDocId) {
    // console.log(this.input_price);
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
    });
    this.current_data = JSON.parse(crd);
    // console.log(JSON.stringify(this.current_data));

    let now = new Date();
    this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
    // console.log("date now", this.latest_date);

    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

      return date;
    }

    // 👇️ Add 2 hours to another date
    const date = now;

    // 👇️ Mon Mar 14 2022 11:25:30
    let latest_date = addHours(this.rangeValue, now);
    this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
    // console.log("date end bid", this.timeBID);

    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      const loading = await this.loadingController.create();
      await loading.present();
      this.fs
        .collection("Items/" + this.globalID + "/Dragons")
        .doc(marketp2pdragonDocId)
        .delete()
        .then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          this.move_to_auction_test(marketp2pdragonDocId);
          this.senddata
            .itemsdragontobidmp(
              marketp2pdragonDocId,
              this.input_price,
              this.selectedBid,
              this.timeBID
            )
            .subscribe(
              (dataE: any) => {
                // console.log(dataE);
                loading.dismiss();
              },
              (error: any) => {}
            );
        });
    }
  }

  async move_to_sell_test(marketp2pdragonDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "dragon") {
      this.fs
        .collection("Sell/" + this.globalID + "/Dragons")
        .doc(marketp2pdragonDocId)
        .set({
          Id: marketp2pdragonDocId,
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
          price: this.input_price,
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      this.currentp2p = 0;
      this.currentp2powned = 10;
      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in this.dragonsowned) {
            if (
              this.dragonsowned[i].imgbackground == "exists" &&
              this.dragonsowned[i].statusbayarbackground == "paid"
            ) {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg;
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );

      this.senddata.getselldgUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        },
        (error: any) => {}
      );

      loading.dismiss();
    }
  }

  async move_to_auction_test(marketp2pdragonDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "dragon") {
      this.fs
        .collection("Bid/" + this.globalID + "/Dragons")
        .doc(marketp2pdragonDocId)
        .set({
          Id: marketp2pdragonDocId,
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
          PriceNow: Number(this.input_price),
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      this.currentp2p = 0;
      this.currentp2powned = 10;
      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselldgUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragonsowned = JSON.parse(dataSell);
          this.marketp2pdragonID = this.dragonsowned.ItemId;
          this.marketp2pdragonLength = this.dragonsowned.length;
          // console.log(this.dragonsowned);
          for (let i in this.dragonsowned) {
            if (
              this.dragonsowned[i].imgbackground == "exists" &&
              this.dragonsowned[i].statusbayarbackground == "paid"
            ) {
              this.senddata.getallbackgroundmp(this.globalID).subscribe(
                (dataSell: any) => {
                  this.dragonsownedbg = JSON.parse(dataSell);
                  this.marketp2pdragonBG = this.dragonsownedbg.imgBg;
                  this.marketp2pdragonIdBG = this.dragonsownedbg.ItemId;
                  // console.log(this.dragonsownedbg)
                },
                (error: any) => {}
              );
            }
          }
        },
        (error: any) => {}
      );

      this.senddata.getselldgUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.dragons = JSON.parse(dataSell);
          // console.log(this.dragons)
        },
        (error: any) => {}
      );

      this.selectedBid = "-";
      loading.dismiss();
    }
  }

  // EGG
  async sellNowEgg(marketp2peggDocId) {
    // Build Json String Egg
    let crd = JSON.stringify({
      DocId: marketp2peggDocId,
      ItemId: this.marketp2peggID,
      price: this.input_price,
    });
    this.current_data = JSON.parse(crd);
    // console.log(this.current_data);
    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      this.fs
      .collection("Items/" + this.globalID + "/Eggs")
      .doc(marketp2peggDocId)
      .delete()
      .then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.globalID;
        this.move_to_sell_test_egg(marketp2peggDocId);
        this.senddata
          .itemseggtosellmp(marketp2peggDocId, this.input_price)
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
            },
            (error: any) => {}
          );
      });
    }
  }

  async bidNowEgg(marketp2peggDocId) {
    // console.log(this.input_price);

    let now = new Date();
    this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
    // console.log("date now", this.latest_date);

    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

      return date;
    }

    // 👇️ Add 2 hours to another date
    const date = now;

    // 👇️ Mon Mar 14 2022 11:25:30
    let latest_date = addHours(this.rangeValue, now);
    this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
    // console.log("date end bid", this.timeBID);

    // Create difference time of bid
    const diffInMs = Date.parse(this.timeBID) - Date.parse(this.latest_date);
    const diffInHours = Math.ceil(diffInMs / 1000 / 60 / 60);
    // console.log("diffInHours", diffInHours);

    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      const loading = await this.loadingController.create();
      await loading.present();
      this.fs
      .collection("Items/" + this.globalID + "/Eggs")
      .doc(marketp2peggDocId)
      .delete()
      .then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.globalID;
        this.move_to_auction_test_egg(marketp2peggDocId);
        this.senddata
          .itemseggtobidmp(
            marketp2peggDocId,
            this.input_price,
            this.selectedBid,
            this.timeBID,
            diffInHours.toString()
          )
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
              loading.dismiss();
            },
            (error: any) => {}
          );
      });

      this.createStopWatch(marketp2peggDocId);
    }
  }

  createStopWatch(marketp2peggDocId) {
    setInterval(async () => {
      this.secondsServer++;
      if (this.secondsServer >= 60) {
        this.minutesServer++;
        this.secondsServer = 0;
      }
      if (this.minutesServer >= 60) {
        this.hoursServer++;
        this.minutesServer = 0;
      }
      this.senddata.hmsBIDmp(marketp2peggDocId, this.hoursServer.toString(), this.minutesServer.toString(), this.secondsServer.toString()).subscribe((res:any) => {});
    }, 1000);
  }

  async move_to_sell_test_egg(marketp2peggDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "egg") {
      this.fs
        .collection("Sell/" + this.globalID + "/Eggs")
        .doc(marketp2peggDocId)
        .set({
          Id: marketp2peggDocId,
          ItemId: this.marketp2peggID,
          PriceNow: Number(this.input_price),
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      this.currentp2p = 0;
      this.currentp2powned = 20;
      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          this.marketp2peggLength = this.eggsHigh.length;
        },
        (error: any) => {}
      );

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sorteggsowned = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      this.senddata.getselleggUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      loading.dismiss();
    }
  }

  async move_to_auction_test_egg(marketp2peggDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "egg") {
      this.fs
        .collection("Bid/" + this.globalID + "/Eggs")
        .doc(marketp2peggDocId)
        .set({
          Id: marketp2peggDocId,
          ItemId: this.marketp2peggID,
          price: this.input_price,
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      this.currentp2p = 0;
      this.currentp2powned = 20;
      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          this.marketp2peggLength = this.eggsHigh.length;
        },
        (error: any) => {}
      );

      this.senddata.getselleggUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sorteggsowned = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      this.senddata.getselleggUsermp(this.globalID).subscribe(
        (dataSell: any) => {
          this.eggsHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.selectedBid = "-";
      loading.dismiss();
    }
  }

  // BATTERY
  async sellNowBattery(marketp2pbatteryDocId) {
    // Build Json String Egg
    let crd = JSON.stringify({
      DocId: marketp2pbatteryDocId,
      ItemId: this.marketp2pbatteryID,
      price: this.input_price,
    });
    this.current_data = JSON.parse(crd);
    console.log(this.input_price);
    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      this.fs.collection('Items/'+ this.globalID + '/Batteries').doc(marketp2pbatteryDocId).update({
        Amount: firebase.firestore.FieldValue.increment(-1)
      }).then(() => {
        // this.current_data.price = this.input_price;
        // this.current_data.owner = this.globalID;
        this.move_to_sell_test_battery(marketp2pbatteryDocId);
        this.senddata
          .itemsbatterytosellmp(marketp2pbatteryDocId, this.input_price)
          .subscribe(
            (dataE: any) => {
              // console.log(dataE);
            },
            (error: any) => {}
          );
      });
    }
  }

  async bidNowBattery(marketp2pbatteryDocId) {
    // console.log(this.input_price);

    let now = new Date();
    this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
    // console.log("date now", this.latest_date);

    function addHours(numOfHours, date = new Date()) {
      date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

      return date;
    }

    // 👇️ Add 2 hours to another date
    const date = now;

    // 👇️ Mon Mar 14 2022 11:25:30
    let latest_date = addHours(this.rangeValue, now);
    this.timeBID = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
    // console.log("date end bid", this.timeBID);
    if(this.input_price == undefined) {
      const alert = await this.alertController.create({
        header: "Failed !",
        message: "Price must over than floorprice",
        buttons: ["OK"],
      });
      await alert.present();
    } else {
      const loading = await this.loadingController.create();
      await loading.present();
      this.fs
        .collection("Items/" + this.globalID + "/Batteries")
        .doc(marketp2pbatteryDocId)
        .delete()
        .then(() => {
          // this.current_data.price = this.input_price;
          // this.current_data.owner = this.globalID;
          this.move_to_auction_test_battery(marketp2pbatteryDocId);
          this.senddata
            .itemsbatterytobidmp(
              marketp2pbatteryDocId,
              this.input_price,
              this.selectedBid,
              this.timeBID
            )
            .subscribe(
              (dataE: any) => {
                // console.log(dataE);
                loading.dismiss();
              },
              (error: any) => {}
            );
        });
    }
  }

  async move_to_sell_test_battery(marketp2pbatteryDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "battery") {
      this.fs
        .collection("Sell/" + this.globalID + "/Batteries")
        .doc(marketp2pbatteryDocId)
        .set({
          Id: marketp2pbatteryDocId,
          ItemId: this.marketp2pbatteryID,
          price: Number(this.input_price),
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortbatteriesowned = JSON.parse(dataSell);
          this.sortbatteriesownedLength = this.sortbatteriesowned.lengthBattery;
          this.fs.collection("Players/" + this.globalID + "/Incubator").valueChanges().subscribe(async (dataIncubator:any) => {
            // console.log("data Egg Incubator", dataIncubator[0].EggItemId);
            this.usedEgg = dataIncubator[0].EggItemId;
            this.usedBattery = dataIncubator[0].BatteryItemId;

            // console.log("this item is being used on the incubator", this.usedEgg, this.usedBattery);
            // console.log("incubator started at", dataIncubator[0].StartedAt.seconds);
            if(dataIncubator[0].IncubatorState == "Started") {
              let unix_timestamp = dataIncubator[0].StartedAt.seconds;
              let now = new Date(unix_timestamp * 1000);
              this.latest_date = this.datepipe.transform(now, "yyyy-MM-dd HH:mm");
              // console.log("date now", this.latest_date);

              function addHours(numOfHours, date = new Date()) {
                date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

                return date;
              }

              // 👇️ Add 2 hours to another date
              const date = now;

              // 👇️ Mon Mar 14 2022 11:25:30
              let latest_date = addHours(dataIncubator[0].HatchTime, now);
              this.timeIncubator = this.datepipe.transform(latest_date, "yyyy-MM-dd HH:mm");
              // console.log("date end incubator", this.timeIncubator);
              this.senddata.itemseggtoincubatormp(this.usedEgg, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Egg successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataEgg = JSON.parse(dataE);
                this.senddata.getselleggUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sorteggsowned = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.senddata.itemsbatterytoincubatormp(this.usedBattery, this.timeIncubator).subscribe((dataE: any) => {
                // console.log("Battery successfully move to incubator status !", JSON.parse(dataE));
                this.hatchingDataBattery = JSON.parse(dataE);
                this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
                  (dataSell: any) => {
                    this.sortbatteriesownedIncubator = JSON.parse(dataSell);
                  },
                  (error: any) => {}
                );
              });
              this.hatching = true;
            }
          });
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      loading.dismiss();
    }
  }

  async move_to_auction_test_battery(marketp2pbatteryDocId) {
    const loading = await this.loadingController.create();
    await loading.present();
    let kind = localStorage.getItem("kind");

    if (kind == "battery") {
      this.fs
        .collection("Bid/" + this.globalID + "/Batteries")
        .doc(marketp2pbatteryDocId)
        .set({
          Id: marketp2pbatteryDocId,
          ItemId: this.marketp2pbatteryID,
          price: this.input_price,
        })
        .then(() => {
          // console.log("Document successfully sold!");
          // this.openDialog("Item Listed");
        })
        .catch((error: any) => {});
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your item now in P2P Market",
        buttons: ["OK"],
      });
      await alert.present();

      this.currentp2p = 0;
      this.currentp2powned = 20;
      // console.log("category p2p", this.currentp2p);
      // console.log("category p2p owned", this.currentp2powned);

      this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserownedmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.sortbatteriesowned = JSON.parse(dataSell);
        },
        (error: any) => {}
      );

      this.senddata.getsellbatteryUserallmp(this.globalID).subscribe(
        (dataSell: any) => {
          this.batteriesHigh = JSON.parse(dataSell);
          // this.marketp2peggLength = this.eggsHigh.length;
          // console.log(this.eggsHigh)
        },
        (error: any) => {}
      );

      this.selectedBid = "-";
      loading.dismiss();
    }
  }

  // FOOD
  async sellNowFood(qty, marketp2pfoodpriceBNB) {
    let kind = localStorage.getItem("kind");

    let Id = "b037f3149945dbc52384d5242e746106";
    let HVP = 24;
    let food = qty;
    let i = 0;
    // for (i; i < food; i++) {
    var itemid1 = this.newTime() + this.globalID;
    this.fs
      .collection("Sell")
      .doc(this.globalID)
      .update({
        FoodGroup: firebase.firestore.FieldValue.arrayUnion(
          JSON.stringify({
            ItemId: this.marketp2pfoodOID,
            HVP: 24,
            Qty: food,
            price: marketp2pfoodpriceBNB,
            owner: this.globalID,
          })
        ),
      })
      .then(() => {});
    // console.log(this.marketp2pfoodOID);

    // update stok food
    this.senddata
      .getsellfoodUserqtymp(this.globalID, qty)
      .subscribe((data: any) => {
        let getSell = JSON.parse(data);
        // insert ke tabel sell
        this.senddata
          .setsellfoodUsermp(
            this.globalID,
            getSell.iditemsFood,
            qty,
            marketp2pfoodpriceBNB,
            HVP.toString(),
            this.marketp2pfoodOID,
            this.globalID
          )
          .subscribe((dataSellFood: any) => {
            this.iditemssellFood = dataSellFood;
          });
      });

    this.fs.collection('Items/'+ this.globalID + '/Foods').doc(this.marketp2pfoodOID)
      .update({
        Amount: firebase.firestore.FieldValue.increment(-qty),
        Id: this.marketp2pfoodOID,
        ItemId: 'ITM14'
      })
      .then(() => {
        console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      })
      .catch((error: any) => {
        
      });
    // }
    const alert = await this.alertController.create({
      header: "Success",
      message: "Your item now in P2P Market",
      buttons: ["OK"],
    });
    await alert.present();

    this.selectedBid = "-";
  }

  async favorite_item(ItemId) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.senddata.favoritedmp(this.globalID, ItemId).subscribe(
      async (data: any) => {
        this.senddata.getselldgUserownedmp(this.globalID).subscribe(
          (dataSell: any) => {
            this.dragonsowned = JSON.parse(dataSell);
            this.marketp2pdragonLength = this.dragonsowned.length;
            // console.log(this.dragonsowned);
          },
          (error: any) => {}
        );
        loading.dismiss();
      },
      (error: any) => {}
    );

    // console.log(ItemId);
  }

  checkonsale() {
    this.senddata.getselldgUsermp(this.globalID).subscribe(
      (dataSell: any) => {
        this.dragons = JSON.parse(dataSell);
        // console.log(this.dragons)
      },
      (error: any) => {}
    );

    this.senddata.getselldgUsermp(this.globalID).subscribe(
      (dataSell: any) => {
        this.eggsHigh = JSON.parse(dataSell);
        // console.log(this.eggsHigh)
      },
      (error: any) => {}
    );
  }

  openDialog(msg: string) {}

  async alertWithdraw() {
    const alert = await this.alertController.create({
      header: "Congratulation !",
      message: "Now you can Withdraw.",
      buttons: ["OK"],
    });
    await alert.present();
  }

  async withdraw() {
    const alert = await this.alertController.create({
      header: "Success !",
      message: "Thanks for withdraw.",
      buttons: ["OK"],
    });
    await alert.present();
    this.percentRoyalty = 0;
    this.valueRoyalty = 0;
  }

  delistDragon(marketp2pdragonDocId, marketp2pdragonID) {
    this.fs
    .collection("Sell/" + this.globalID + "/Dragons")
    .doc(marketp2pdragonDocId)
    .delete()
    .then(() => {
      // this.current_data.price = this.input_price;
      // this.current_data.owner = this.globalID;
      this.move_to_item_test_dragon(marketp2pdragonDocId, marketp2pdragonID);
      this.senddata
        .selldragontoitemsmp(this.globalID, marketp2pdragonDocId)
        .subscribe(
          (dataE: any) => {
            // console.log(dataE);
          },
          (error: any) => {}
        );
    });
  }

  delistEgg(marketp2peggDocId) {
    this.fs
    .collection("Sell/" + this.globalID + "/Eggs")
    .doc(marketp2peggDocId)
    .delete()
    .then(() => {
      // this.current_data.price = this.input_price;
      // this.current_data.owner = this.globalID;
      this.move_to_item_test_egg(marketp2peggDocId);
      this.senddata
        .selleggtoitemsmp(this.globalID, marketp2peggDocId)
        .subscribe(
          (dataE: any) => {
            // console.log(dataE);
          },
          (error: any) => {}
        );
    });
  }

  async move_to_item_test_dragon(marketp2pdragonDocId, marketp2pdragonID) {
    this.fs
      .collection("Items/" + this.globalID + "/Dragons")
      .doc(marketp2pdragonDocId)
      .set({
        Id: marketp2pdragonDocId,
        ItemId: marketp2pdragonID,
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
      .catch((error: any) => {});
      const alert = await this.alertController.create({
      header: "Success",
      message: "Your item delisted from market",
      buttons: ["OK"],
    });
    await alert.present();
  }

  async move_to_item_test_egg(marketp2peggDocId) {
    this.fs
      .collection("Items/" + this.globalID + "/Eggs")
      .doc(marketp2peggDocId)
      .set({
        Id: marketp2peggDocId,
        ItemId: this.marketp2peggID,
      })
      .then(() => {
        // console.log("Document successfully sold!");
        // this.openDialog("Item Listed");
      })
      .catch((error: any) => {});
      const alert = await this.alertController.create({
      header: "Success",
      message: "Your item delisted from market",
      buttons: ["OK"],
    });
    await alert.present();
  }

  delistBattery(marketp2pbatteryDocId) {

  }

  newTime() {
    //const current = new Date();
    return Math.floor(Date.now() / 1000);
  }

  async airdropTokens(tokenContractAddress: string, airdropAmount: number, addresses: string[], web3: Web3) {
    this.provider = await web3Modal.connect();
    this.getcurrentoragon();
    await this.getPaymentCount();
    this.web3js = new Web3(this.provider); // create web3 instance
    // console.log(this.web3js);
    this.accounts = await this.web3js.eth.getAccounts(console.log);
    const tokenContract = new this.web3js.eth.Contract(this.tokenABI, tokenContractAddress);
    const gasPrice = await this.web3js.eth.getGasPrice();
    const gasEstimate = await tokenContract.methods.airdropTokens(addresses, airdropAmount).estimateGas();
    const tx = await tokenContract.methods.airdropTokens(addresses, airdropAmount).send({
      from: "0xa89Ae470d898E6B3ad31D44757A7947Da9D9A4Cd",
      gas: gasEstimate,
      gasPrice
    });
    console.log('Transaction hash:', tx.transactionHash);
  }
}
