import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { SendData } from '../send-data';
import { ProviderService } from '../provider.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cms-landing',
  templateUrl: './cms-landing.component.html',
  styleUrls: ['./cms-landing.component.css']
})
export class CmsLandingComponent implements OnInit {
  title = 'oragon-adm';
  bnb_count : any
  orgn_count : any
  login : string = ''
  //items: Observable<any[]>;
  constructor(public senddata : SendData,private firestore: AngularFirestore,private router: Router,public global : ProviderService) {
    // this.items = firestore.collection('Players').valueChanges({ idField: 'id' });
    // this.items.subscribe((data : any) => {
    //   console.log(data)
    // });
  }

  gacha(){
    this.router.navigate(['/gacha']);
  }

  ngOnInit(){
    this.login = this.global.getStates()
    if(this.login == '1'){
      this.dashboard_section(365,'d')
    }else{
      this.router.navigate(['']);
    }
    
  }

  dashboard_section(count : number,kind : string){
    // this.current_dashboard = count
    this.bnb_count = "....."
    this.orgn_count = "....."
    this.senddata.getbnbcount(count.toString(),kind).subscribe((data:any) => {
      if(data[0].amount != null){
        this.bnb_count = data[0].amount.toFixed(2).toLocaleString()
      }else{
        this.bnb_count = 0
      }
    },(error:any) => {})
    this.senddata.getorgncount(count.toString(),kind).subscribe((data:any) => {
      if(data[0].amount != null){
        this.orgn_count = data[0].amount.toLocaleString() 
      }else{
        this.orgn_count = 0
      }
    },(error:any) => {})
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