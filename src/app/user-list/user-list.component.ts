import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data : any
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
  constructor(private firestore: AngularFirestore,private router: Router,public global : ProviderService) {}

  ngOnInit(): void {
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

  gacha(){
    this.router.navigate(['/gacha']);
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
