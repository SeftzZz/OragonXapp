import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import { Router } from "@angular/router";
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email : string = ""
  password : string = ""
  data_user : any


  constructor(public dialog: MatDialog,private router: Router,public global : ProviderService) { }

  ngOnInit(): void {
    
  }

  login(){
    //console.log("LOGIIN");
    if(this.email == "" || this.password == ""){
      this.openDialog("Please fill all data")
    }else if(this.email.length < 10 || this.password.length < 10){
      this.openDialog("Email and password can't be under 10 character");
    }else{
      if(this.password == "3ae669ded84fd24a#119722@@" && this.email == "ADM-ORGN-CMS"){
        console.log('Login')
        this.global.setStates("1")
        this.global.setRole("1")
        this.router.navigate(['/home']);
      }else if(this.password == "Kasaxzq1231#12@@" && this.email == "VIEWER-ORGN-CMS" ){
        console.log('Login')
        this.global.setStates("1")
        this.global.setRole("2")
        this.router.navigate(['/home']);
      }else{
        this.openDialog("Adm ID and password not Correct");
      }
      // this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      // .then((value:any) => {
      //   // this.openDialog('Welcome To OragonX!');
      //   //console.log(value.user.uid)
      //   this.global.setID(value.user.uid)
      //   this.fs.collection("Players").doc(value.user.uid).valueChanges().subscribe((datas : any) => {
      //     //console.log(datas.ProfileData);
      //     this.data_user = JSON.parse(datas.ProfileData)
      //     this.global.setWALLET_ADDRESS(this.data_user.WalletAddress)
      //     this.global.setUSERNAME(this.data_user.PlayerName)
      //     this.global.setEMAIL(this.data_user.Email)
      //     this.global.setStates("1")

      //     //console.log(this.global.getWALLET_ADDRESS())
      //     //console.log(this.global.getID())
      //     //console.log(this.global.getUSERNAME())
      //     //console.log(this.global.getEMAIL())
      //     //this.openDialog("Welcome to OragonX!");
      //     this.router.navigate(['/profile']);
      //   });
      // })
      // .catch((err:any) => {
      //   this.openDialog('Something went wrong: '+ err.message);
      // });
      // this.data.login(this.email, this.password)
      //   .subscribe(data => {
      //     console.log(data);
      //     if(data == null){
      //       this.openDialog("User Not Found / Password Incorrect")  
      //     }else{
      //       this.global.setWALLET_ADDRESS(data[0].wallet_address)
      //       this.global.setID(data[0].id)
      //       this.global.setUSERNAME(data[0].username)
      //       this.global.setEMAIL(data[0].email)
      //       this.global.setStates("1")

      //       console.log(this.global.getWALLET_ADDRESS())
      //       console.log(this.global.getID())
      //       console.log(this.global.getUSERNAME())
      //       console.log(this.global.getEMAIL())

      //       this.openDialog("Welcome! " + this.global.getUSERNAME())
      //       this.router.navigate(['/landing']);  
      //     }
      //   },
      //   error => {
      //     this.openDialog("An Error Occured")  
      //   })  
    }
  }

  openDialog(msg : string) {
    this.dialog.open(DialogComponent, {
      width: '50%',
      disableClose: true,
      data :{'msg':msg}
    });
  }

}
