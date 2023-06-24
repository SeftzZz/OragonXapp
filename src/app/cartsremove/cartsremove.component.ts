import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
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

@Component({
  selector: 'app-cartsremove',
  templateUrl: './cartsremove.component.html',
  styleUrls: ['./cartsremove.component.css']
})
export class CartsremoveComponent implements OnInit {

  item_egg : any
  getID : any = []
  userid = '2NRdb2L2AGOJEWMNBcDGmypmyoD2'

  carts: any
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
  data_user : any
  item_name : any

  constructor(private location : Location,
    private routes : ActivatedRoute,
    public fs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    public dialog: MatDialog,
    public data : SendData,
    public global : ProviderService) { }

  ngOnInit(): void {
    
    // this.fs.collection("Items").doc(this.userid).valueChanges().subscribe((datas : any) => {
    //   //console.log(datas.Dragon);
    //   let test = datas.Food
    //   this.data_detail = []
    //   this.current_data = {}
      
    //   test.forEach((element:any) => {
    //     this.data_detail.push(JSON.parse(element))
    //   });
    //   // if(this.data_detail.length == 0){
        
    //   // }else{
    //     this.data_detail.some((v:any,index:any) => {
    //       if(v.ItemId == this.obj){
    //         this.current_data = v
    //         this.item_name = 'Food'
    //         //this.count_roulette = this.current_roulette.Count
    //         //console.log(index)
    //         // this.id = v.Id
    //         // this.itemid = v.ItemId
    //         // this.price = v.price
    //         // this.dgObj = v.ObjectId
    //         // this.owner_detail = v.owner
    //         // this.exp = v.Exp._value
    //         // this.attack = v.AttackPoint
    //         // this.defense = v.DefensePoint
    //         // this.rarity = v.Rarity

    //         //console.log(this.current_data)
    //       }
    //     })
    //   //}
    //   //console.log(this.data_detail);
      
    // });

    // var db = firebase.firestore();
    // var batch = db.batch()

    // save(docs: any[]) {
    //   docs.forEach((doc) => {
    //     var docRef = db.collection("Items").doc(this.userid); //automatically generate unique id
    //     batch.set(docRef, {  });
    //   });
    //   return batch.commit();
    // }

    
  }

  checkitemscreated(){
    this.fs.collection('Items').doc(this.userid).valueChanges().subscribe((datas : any) => {
      //console.log(datas.Count);
      if(datas == undefined){
        this.fs.collection('Items').doc(this.userid).set({LastUpdated:this.newTime(),Dragon : [], Egg : [], Battery : [], Food : []})
      }
    });
  }

  async sendbackBattery() {
    for (let i = 0; i < 705; i++) {
      this.fs.collection('Items').doc('a8XPvmGGmCNTgb8UNbKdpbNqz9i2').update({LastUpdated:this.newTime(),Dragon : [], Egg : [], Battery : [], Food : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({"ItemId":"1645155465223a8XPvmGGmCNTgb8UNbKdpbNqz9i2"+i,"Id":"b037f3149945dbc52384d5242e746106","HVP":24})) })
    }
    // // Get a new write batch
    // const batch = this.fs.firestore.batch();

    // // Set the value of 'NYC'
    // const nycRef = this.fs.collection('Items').doc(this.userid).set({LastUpdated:this.newTime(),Dragon : [], Egg : [], Battery : [], Food : []});
    // batch.update(nycRef, { Food : {"ItemId":"1643555386301heZHxUim0FMrHvMAw3BqDp5CH1w210","Id":"b037f3149945dbc52384d5242e746106","HVP":24} });

    // // // Update the population of 'SF'
    // // const sfRef = db.collection('cities').doc('SF');
    // // batch.update(sfRef, {population: 1000000});

    // // // Delete the city 'LA'
    // // const laRef = db.collection('cities').doc('LA');
    // // batch.delete(laRef);

    // // Commit the batch
    // await batch.commit(i);

    // for (let i = 0; i < 5; i++) {
    //   this.fs.collection('Items').doc(this.userid).update({Food : i})
    // }
    
    // await this.checkitemscreated()
    // var sfDocRef = this.fs.firestore.collection('Cart').doc(this.userid);
    // var sfDocRef2 = this.fs.firestore.collection('Items').doc(this.userid);
    // try {
    //   this.fs.firestore.runTransaction(async (transaction : any) => {
    //     const sfDoc = await transaction.get(sfDocRef);
    //     if (sfDoc.data()["Food"].indexOf(JSON.stringify(this.current_data)) > -1) {
    //       // console.log(sfDoc)
    //       // console.log(sfDoc.data()["Food"])
    //       // console.log(this.price.toString())
    //       //DELETE
    //       const datax = this.current_data;
    //       await transaction.update(sfDocRef, { Food : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(datax)) });
    //       await transaction.update(sfDocRef2, { Food : firebase.firestore.FieldValue.arrayUnion(JSON.stringify(datax)) });
    //       this.openDialog("Transaction Success")
    //     }else{
    //       throw "Document does not exist!";
    //     }
    //   });
    //   console.log("Transaction successfully committed!");
    // } catch (e) {
    //   console.log("Transaction failed: ", e);
    // }

    // var batch = this.fs.firestore.batch()

    // save(docs: any[]) {
    //   docs.forEach((doc) => {
    //     var docRef = this.fs.firestore.collection("Items").doc(this.userid); //automatically generate unique id
    //     batch.set(docRef, doc);
    //   });
    //   return batch.commit();
    // }


  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }

  openDialog(msg : string) {
    this.dialog.open(DialogComponent, {
      width: '50%',
      disableClose: true,
      data :{'msg':msg}
    });
  }

}
