import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
// import {DialogComponent} from '../dialog/dialog.component';
// import {DialogFormComponent} from '../dialog-form/dialog-form.component';
import { SendData } from '../send-data';
import { ProviderService } from '../provider.service';
// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Location} from '@angular/common';
// import {DialogBuyComponent} from '../dialog-buy/dialog-buy.component';
import { CountdownConfig } from 'ngx-countdown';

// import { createChart } from 'lightweight-charts';

// const chart = createChart(document.body, { width: 400, height: 300 });
// const lineSeries = chart.addLineSeries();

// lineSeries.setData([
//     { time: '2019-04-11', value: 80.01 },
//     { time: '2019-04-12', value: 20.01 },
//     { time: '2019-04-12', value: 30.01 },
// ]);
 
const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];

@Component({
  selector: 'app-cartsview',
  templateUrl: './cartsview.component.html',
  styleUrls: ['./cartsview.component.css']
})
export class CartsviewComponent implements OnInit {
  config: CountdownConfig = {
    // leftTime: 600,
    leftTime: 60,
    formatDate: ({ date, formatStr }) => {
      let duration = Number(date || 0);

      return CountdownTimeUnits.reduce((current, [name, unit]) => {
        if (current.indexOf(name) !== -1) {
          const v = Math.floor(duration / unit);
          duration -= v * unit;
          return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
            return v.toString().padStart(match.length, '0');
          });
        }
        return current;
      }, formatStr);
    },
  };
  // config: CountdownConfig = { leftTime: DEFAULT, notify: 0 };

  uids: any
  datas : any
  data_detail : any
  current_data : any
  id : any
  itemid : any
  price: any
  duration: any
  owner_detail: any
  AddAt: any
  kind : any
  obj : any
  d: any
  dsp: any
  dst: any
  final_time : any
  current_time : any
  hours : any
  owner: any
  getID: any = ""
  data_user : any
  
  // sell
  sell : any
  datasell : any
  numbers : any
  items : any
  dragons : any
  jdg : any
  jdgs : any
  constructor(private location : Location,
    private routes : ActivatedRoute,
    public fs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    public dialog: MatDialog,
    public data : SendData,
    public global : ProviderService) 
  { 
  }

  ngOnInit(): void {    
    this.fs.collection('Sell').valueChanges().subscribe(res => {
      this.fs.collection('Sell').snapshotChanges().subscribe(response => {
        this.uids = response.map(e => {
          this.datas = e.payload.doc.data()
          if(this.datas.Dragon != undefined) {
            if(this.datas.Dragon.length != 0) {
              // let p = JSON.parse(this.datas.Dragon);
              // console.log(e.payload.doc.id, p.WalletAddress)
              // console.log(e.payload.doc.id, this.datas.Dragon.length);
              for(let i in this.datas.Dragon) {
                this.jdg = JSON.parse(this.datas.Dragon[i]);
                // this.jdgs = this.jdg
                // if(this.jdg.Id == "9f1463b88c48db9da6a9675e2f8ca514") {
                //   console.log(e.payload.doc.id, "HIJAU");
                // } else if(this.jdg.Id == "e1a98ab26caa46460fc758ebd03d3dc5") {
                //   console.log(e.payload.doc.id, "BIRU");
                // } else if(this.jdg.Id == "4e9124f80418b98975545a67e87d29db") {
                //   console.log(e.payload.doc.id, "MERAH");
                // } 

                if(this.jdg.Id == "bc22d480b79197b707af7c55ac183ece") {
                  console.log(e.payload.doc.id, "RITRA");
                } else if(this.jdg.Id == "5cb808e3b619cd094b84d689333eec5e") {
                  console.log(e.payload.doc.id, "METALICANA");
                } else if(this.jdg.Id == "90eca5efac63b6c0868a4f7935c48e98") {
                  console.log(e.payload.doc.id, "MERU");
                } else if(this.jdg.Id == "c80ed09ef1455da1741876c7333ac106") {
                  console.log(e.payload.doc.id, "FENG");
                } else if(this.jdg.Id == "b6fe471f67dbd48645fce8be45127984") {
                  console.log(e.payload.doc.id, "DORCH");
                } else if(this.jdg.Id == "f525d43a147661bb4a07b2e456e0782a") {
                  console.log(e.payload.doc.id, "AKH");
                } 
              }
            }
          }
          return { 
            id: e.payload.doc.id,
            Dragon: this.datas.Dragon
          }
        })
      }, error => {
        console.log(error)
      });
    });
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now());
  }

  back(){
    this.location.back()
  }

}