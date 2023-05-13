import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';

// Services
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

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
  selector: 'app-gatcha-pay',
  templateUrl: './gatcha-pay.page.html',
  styleUrls: ['./gatcha-pay.page.scss'],
})
export class GatchaPayPage implements OnInit {

  // WEB3
  w = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/...apikey 1…'));
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private avatarService: AvatarService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit(): void {
    this.connect = false;
    console.log(this.w);
  }

  // WEB3
    async connectAccount() {
      this.provider = await web3Modal.connect();
      this.getcurrentoragon();
      // await this.getPaymentCount();
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
          this.state_buy = "1"
        }else if(this.payment_count > 0){
          this.state_buy = "2"
        }
        //if connect
      }else{
        await this.provider.close();
        this.provider = null;
        this.connect = false;
        this.openDialog("Please Use Registered Wallet!")
      }
    }

    // getPaymentCount(){
    //   this.fs.collection('Payment').doc(this.global.getID()).valueChanges().subscribe((datas : any) => {
    //     //console.log(datas.Count);
    //     if(datas != undefined){
    //       if(this.kind == '10'){
    //         if(datas.Gacha10 > 0){
    //           this.payment_count = datas.Gacha10
    //           this.state_buy == "2"
    //         }
    //       }else if(this.kind == '1'){
    //         if(datas.Gacha1 > 0){
    //           this.payment_count = datas.Gacha1
    //           this.state_buy == "2"
    //         }
    //       }
    //       if(datas.Gacha10 < 0){
    //         this.fs.collection('Payment').doc(this.global.getID()).update({Gacha10 : 0});
    //       }
    //       if(datas.Gacha1 < 0){
    //         this.fs.collection('Payment').doc(this.global.getID()).update({Gacha1 : 0});
    //       }
    //     }else{
    //       this.fs.collection('Payment').doc(this.global.getID()).set({LastUpdated:this.newTime()})
    //       this.fs.collection('Payment').doc(this.global.getID()).update({Gacha10 : 0, Gacha1 : 0}).then(() => {})
    //     }
        
    //     //this.slot_roulette = test
    //     //console.log(this.slot_roulette);
    //   });
    // }

    getcurrentoragon(){
    //   this.senddata.getcurrentoragon().subscribe((data:any) => {
    //       this.current_oragon = data.data.price
    //       this.in_oragon_100c = (100/this.current_oragon).toFixed(14);
    //       this.in_oragon_12c = (12/this.current_oragon).toFixed(14);
    //       //console.log(this.current_oragon)
    //     },(error:any) => {

    //   })
    }

  openDialog(msg : string) {
    // this.dialog.open(DialogComponent, {
    //   width: '50%',
    //   disableClose: true,
    //   data :{'msg':msg}
    // });
  }
}
