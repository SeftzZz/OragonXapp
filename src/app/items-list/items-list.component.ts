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
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  data : any
  list : any
  idx : any
  username = ""
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
  batterys : any = []
  dragons : any = []
  foods : any = []
  eggs : any = []

  role = ""
  
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

  add_egg(){
    const dialogRef3 = this.dialog.open(DialogAddComponent, {
      width: '80%',
      disableClose: true,
      data :{'kind':'egg'}
    });
    dialogRef3.afterClosed().subscribe((data : any) => {
      let confirm = dialogRef3.componentInstance.confirm
      if(confirm == "OK"){
        console.log(data.type)
        if(data.type == 'Dorch'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"b6fe471f67dbd48645fce8be45127984"}))}).then(() => {
            console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"b6fe471f67dbd48645fce8be45127984"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"b6fe471f67dbd48645fce8be45127984"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"b6fe471f67dbd48645fce8be45127984"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == 'Metalicana'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"5cb808e3b619cd094b84d689333eec5e"}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"5cb808e3b619cd094b84d689333eec5e"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"5cb808e3b619cd094b84d689333eec5e"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"5cb808e3b619cd094b84d689333eec5e"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == 'Akh'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"f525d43a147661bb4a07b2e456e0782a"}))}).then(() => {
            console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"f525d43a147661bb4a07b2e456e0782a"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"f525d43a147661bb4a07b2e456e0782a"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"f525d43a147661bb4a07b2e456e0782a"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == 'Meru'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"90eca5efac63b6c0868a4f7935c48e98"}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"90eca5efac63b6c0868a4f7935c48e98"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"90eca5efac63b6c0868a4f7935c48e98"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"90eca5efac63b6c0868a4f7935c48e98"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == 'Ritra'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"bc22d480b79197b707af7c55ac183ece"}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"bc22d480b79197b707af7c55ac183ece"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"bc22d480b79197b707af7c55ac183ece"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"bc22d480b79197b707af7c55ac183ece"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == 'Feng'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"c80ed09ef1455da1741876c7333ac106"}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"c80ed09ef1455da1741876c7333ac106"})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"c80ed09ef1455da1741876c7333ac106"}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"c80ed09ef1455da1741876c7333ac106"})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }
      }
    })
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now());
  }

  add_battery(){
    const dialogRef3 = this.dialog.open(DialogAddComponent, {
      width: '80%',
      disableClose: true,
      data :{'kind':'battery'}
    });
    dialogRef3.afterClosed().subscribe((data : any) => {
      let confirm = dialogRef3.componentInstance.confirm
      if(confirm == "OK"){
        console.log(data.type)
        if(data.type == '8HB'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"9f1463b88c48db9da6a9675e2f8ca514",Duration:8}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"9f1463b88c48db9da6a9675e2f8ca514",Duration:8})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"9f1463b88c48db9da6a9675e2f8ca514",Duration:8}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"9f1463b88c48db9da6a9675e2f8ca514",Duration:8})).subscribe((data:any) => {},(error:any) => {})
              })

          });
        }else if(data.type == '12HB'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"e1a98ab26caa46460fc758ebd03d3dc5",Duration:12}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"e1a98ab26caa46460fc758ebd03d3dc5",Duration:12})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"e1a98ab26caa46460fc758ebd03d3dc5",Duration:12}))}).then(() => {
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"e1a98ab26caa46460fc758ebd03d3dc5",Duration:12})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }else if(data.type == '24HB'){
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"4e9124f80418b98975545a67e87d29db",Duration:24}))}).then(() => {
            //console.log("Document successfully updated!");
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"4e9124f80418b98975545a67e87d29db",Duration:24})).subscribe((data:any) => {},(error:any) => {})
          })
          .catch((error:any) => {
              // The document probably doesn't exist.
              this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
              var itemid = this.newTime()+this.idx;
              this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"4e9124f80418b98975545a67e87d29db",Duration:24}))}).then(()=>{
                this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"4e9124f80418b98975545a67e87d29db",Duration:24})).subscribe((data:any) => {},(error:any) => {})
              })
          });
        }
      }
    })
  }

  add_food(){
    const dialogRef3 = this.dialog.open(DialogConfirmComponent, {
      width: '80%',
      disableClose: true,
      data :{'msg':'Are You Sure to Add Food to this Account?'}
    });
    dialogRef3.afterClosed().subscribe(() => {
      var itemid = this.newTime()+this.idx;
      this.fs.collection('Items').doc(this.idx).update({Food : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"b037f3149945dbc52384d5242e746106",HVP:24}))}).then(() => {
        //console.log("Document successfully updated!");
        this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"b037f3149945dbc52384d5242e746106",HVP:24})).subscribe((data:any) => {},(error:any) => {})
      })
      .catch((error:any) => {
          // The document probably doesn't exist.
          var itemid = this.newTime()+this.idx;
          this.fs.collection('Items').doc(this.idx).set({LastUpdated:this.newTime()})
          this.fs.collection('Items').doc(this.idx).update({Food : firebase.firestore.FieldValue.arrayUnion(JSON.stringify({ItemId:itemid,Id:"b037f3149945dbc52384d5242e746106",HVP:24}))}).then(()=>{
            this.service.setitemhistory(itemid,this.idx,'Box',JSON.stringify({ItemId:itemid,Id:"b037f3149945dbc52384d5242e746106",HVP:24})).subscribe((data:any) => {},(error:any) => {})
          })
      });
    })
  }

  openDialogConfirm(msg : string,obj : any,kind : any) {
    const dialogRef3 = this.dialog.open(DialogConfirmComponent, {
      width: '80%',
      disableClose: true,
      data :{'msg':msg}
    });
    dialogRef3.afterClosed().subscribe(() => {
      let confirm = dialogRef3.componentInstance.confirm
      if(confirm == "OK"){
        if(kind == "egg"){
          this.fs.collection('Items').doc(this.idx).update({Egg : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(obj))}).then(() => {
          });
        }else if(kind == "food"){
          this.fs.collection('Items').doc(this.idx).update({Food : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(obj))}).then(() => {
          });
        }else if(kind == "battery"){
          this.fs.collection('Items').doc(this.idx).update({Battery : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(obj))}).then(() => {
          });
        }else if(kind == "dragon"){
          this.fs.collection('Items').doc(this.idx).update({Dragon : firebase.firestore.FieldValue.arrayRemove(JSON.stringify(obj))}).then(() => {
          });
        }
        
      }
    })
  }

  deleteobj(obj : any,kind : any){
    this.openDialogConfirm("Are You Sure to Delete This Items?",obj,kind)
  }

  items_list(id : any,user: any){
    this.list = true
    console.log(id)
    this.username = user
    this.idx = id
    this.fs
      .collection('Items')
      .doc(id)
      .valueChanges().subscribe((datas : any = {}) => {
        //Battery
        //console.log(datas.Battery);
        let test
        if(datas.hasOwnProperty('Battery')){
          test = datas.Battery
        }else{
          test = undefined
        }
        this.batterys = []
        if(test != undefined){
          test.forEach((element:any) => {
            this.batterys.push(JSON.parse(element))
          });
        }
        console.log(this.batterys);
        //Dragon
        //console.log(datas.Dragon);
        let test2
        if(datas.hasOwnProperty('Dragon')){
          test2 = datas.Dragon
        }else{
          test2 = undefined
        }
        this.dragons = []
        if(test2 != undefined){
          test2.forEach((element:any) => {
            this.dragons.push(JSON.parse(element))
          });
        }
        console.log(this.dragons);
        //Food
        //console.log(datas.Food);
        let test3
        if(datas.hasOwnProperty('Food')){
          test3 = datas.Food
        }else{
          test3 = undefined
        }
        this.foods = []
        if(test3 != undefined){
          test3.forEach((element:any) => {
            this.foods.push(JSON.parse(element))
          });
        }
        console.log(this.foods);
        //Egg
        //console.log(datas.Egg);
        let test4
        if(datas.hasOwnProperty('Egg')){
          test4 = datas.Egg
        }else{
          test4 = undefined
        }
        this.eggs = []
        if(test4 != undefined){
          test4.forEach((element:any) => {
            this.eggs.push(JSON.parse(element))
          });
        }
        console.log(this.eggs);
      });
  }

  backs(){
    this.list = false
    this.eggs = []
    this.dragons = []
    this.batterys = []
    this.foods = []
    this.username = ""
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
