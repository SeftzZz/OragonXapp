import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProviderService } from '../provider.service';
import { SendData } from '../send-data';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  data : any
  list : any
  username = ""
  trx : any
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
  constructor(public senddata : SendData,private firestore: AngularFirestore,private router: Router,public global : ProviderService) {}

  ngOnInit(): void {
    this.list = false
    this.login = this.global.getStates()
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
    this.list = true
    console.log(id)
    this.username = user
    this.senddata.gettrxhistory(id).subscribe((data:any) => {
      this.trx = data
    },(error:any) => {
      
    })
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
