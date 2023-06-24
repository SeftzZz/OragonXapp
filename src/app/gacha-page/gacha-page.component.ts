import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProviderService } from '../provider.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import {MatDialog} from '@angular/material/dialog';
import firebase from 'firebase/compat/app';
import { SendData } from '../send-data';

@Component({
  selector: 'app-gacha-page',
  templateUrl: './gacha-page.component.html',
  styleUrls: ['./gacha-page.component.css']
})
export class GachaPageComponent implements OnInit {
  data : any
  list : any
  username = ""
  trx : any
  idx : any
  role = ""

  count_gacha = 0
  used_gacha = 0
  //PAGINATION

  // tableData will contains the document items get from collection
  tableData: any[] = [];

  // save first document in snapshot of items received
  firstInResponse: any = [];

  // save last document in snapshot of items received
  lastInResponse: any = [];

  // keep the array of first document of previous pages
  prev_strt_at: any = [];

  // maintain the count of clicks on Next Prev button
  pagination_clicked_count = 0;

  // two buttons will be needed by which next data or prev data will be loaded
  // disable next and prev buttons
  disable_next: boolean = false;
  disable_prev: boolean = true;

  //END PAGINATION
  players: any = []
  login : string = ''
  items: any;
  constructor(public service : SendData,public dialog: MatDialog,private fs: AngularFirestore,private firestore: AngularFirestore,private router: Router,public global : ProviderService) {}

  ngOnInit(): void {
    this.list = false
    this.login = this.global.getStates()
    this.role = this.global.getRole()
    if(this.login == '1'){
      this.loadItems()
      // this.items = this.firestore.collection('Players').valueChanges({ idField: 'id' });
      // this.items.subscribe((data : any) => {
      //   data.forEach((value:any) => {
      //     value.ProfileData = JSON.parse(value.ProfileData)
      //     this.players.push(value)
      //   }); 
      // });
    }else{
      this.router.navigate(['']);
    }
  }

  gacha(){
    this.router.navigate(['/gacha']);
  }

  loadItems() {
    this.firestore.collection('Players', ref => ref
      .orderBy('CreatedAt', 'asc')
    ).snapshotChanges()
      .subscribe(response => {
        this.players = response.map(e => {
          this.data = e.payload.doc.data()
          //console.log(this.data.ProfileData)
          return { id: e.payload.doc.id,CreatedAt:this.data.CreatedAt ,ProfileData: JSON.parse(this.data.ProfileData)}
        })
      }, error => {
      });
  }

  trx_list(id : any,user: any){
    this.count_gacha = 0
    this.used_gacha = 0
    this.list = true
    console.log(id)
    this.username = user
    this.idx = id
    this.fs
      .collection('Roulette')
      .doc(id)
      .valueChanges().subscribe((datas : any = {}) => {
        //Battery
        //console.log(datas.Battery);
        this.count_gacha = datas.Count
        this.used_gacha = datas.Used
        console.log(datas)
      });
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }

  minus(){
    if(this.count_gacha != undefined){
      --this.count_gacha
      if(this.count_gacha < 0){
        this.count_gacha = 0
      }else{
        this.fs.collection('Roulette').doc(this.idx).update({Count : firebase.firestore.FieldValue.increment(-1)});
      }
    }else{
      this.count_gacha = 0
      this.fs.collection('Roulette').doc(this.idx).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:0,txHash:'GENERATED FROM CMS'}))}).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection('Roulette').doc(this.idx).update({Count : firebase.firestore.FieldValue.increment(0)});
        
      })
      .catch((error:any) => {
          // The document probably doesn't exist.
          this.fs.collection('Roulette').doc(this.idx).set({LastUpdated:this.newTime()})
          this.fs.collection('Roulette').doc(this.idx).update({Count : 0});
          this.fs.collection('Roulette').doc(this.idx).update({Used : 0});
          this.fs.collection('Roulette').doc(this.idx).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:0,txHash:'GENERATED FROM CMS'}))})
          
      });
    }
  }

  plus(){
    if(this.count_gacha != undefined){
      ++this.count_gacha
      this.fs.collection('Roulette').doc(this.idx).update({Count : firebase.firestore.FieldValue.increment(1)});
    }else{
      ++this.count_gacha
      this.fs.collection('Roulette').doc(this.idx).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:1,txHash:'GENERATED FROM CMS'}))}).then(() => {
        //this.fs.collection('Roulette').doc(uid).set({LastUpdated:this.newTime()})
        this.fs.collection('Roulette').doc(this.idx).update({Count : firebase.firestore.FieldValue.increment(1)});
        
      })
      .catch((error:any) => {
          // The document probably doesn't exist.
          this.fs.collection('Roulette').doc(this.idx).set({LastUpdated:this.newTime()})
          this.fs.collection('Roulette').doc(this.idx).update({Count : 1});
          this.fs.collection('Roulette').doc(this.idx).update({Used : 0});
          this.fs.collection('Roulette').doc(this.idx).update({Detail : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({CreatedAt: this.newTime(),Count:1,txHash:'GENERATED FROM CMS'}))})
          
      });
    }
  }

  backs(){
    this.list = false
    this.trx = []
    this.username = ""
  }

  //Date formate
  readableDate(time : any) {
    var d = new Date(time * 1000);
    return d.getDate().toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2') + " / " + (d.getMonth()+1).toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2') + " / " + d.getFullYear();
  }

  home(){
    this.router.navigate(['/home']);
  }

  user(){
    this.router.navigate(['/user']);
  }

  transaction(){
    this.router.navigate(['/transaction']);
  }

  item(){
    this.router.navigate(['/items']);
  }


}
