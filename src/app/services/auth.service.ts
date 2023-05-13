import { Inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, LoadingController } from '@ionic/angular';

// AngularFire
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut
} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Services
import { ProviderService } from '../provider.service';
import { SendData } from '../send-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // login
  data_user : any;
  respAPI : any;
  email : string = "";
  emailreset : string = "";

  // register
  username : string = "";
  wallet_address : string = "";
  password : string = "";
  password2 : string = "";
  uid : any;
  acceptTerms : any;
  marked : any;

  constructor(
    private auth: Auth,
    private fs: AngularFirestore,
    private router: Router,
    public data : SendData,
    public global : ProviderService,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) {}
  
  async register({ email, username, wallet_address, password }) {
    var agree : string = String(this.acceptTerms)
    this.data.registermp(username, email, wallet_address, password, agree).subscribe(async (data:any) => {
      this.respAPI = data
      let messageError = 1
      let messageErrorEmail = 1

      if(this.respAPI == messageError || this.respAPI == messageErrorEmail) {
        this.showAlert('Wallet / Email Already Exists!', 'Please try again!');
      } else {
        this.showAlert('Register Success, Check your email address for activation!', 'Complete');
        this.router.navigate(['/tabs/login']);
      }
      
    },(error:any) => {})
  }
 
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.fs.collection("Players").doc(user.user.uid).valueChanges().subscribe((datas : any) => {
        //console.log(datas.ProfileData);
        this.data_user = JSON.parse(datas.ProfileData)
        this.global.setWALLET_ADDRESS(this.data_user.WalletAddress)
        this.global.setUSERNAME(this.data_user.PlayerName)
        this.global.setEMAIL(this.data_user.Email)

        localStorage.setItem('ProfileData', JSON.stringify({
          Uid:user.user.uid,
          Email:this.data_user.Email,
          WalletAddress:this.data_user.WalletAddress,
          PlayerName:this.data_user.PlayerName,
          Point:datas.Point
        }));

        this.global.setStates("1");
        // call api auto insert if user not exists
        this.data.usersmp(this.email).subscribe((data:any) => {
          this.respAPI = data
          if(this.respAPI || this.data_user.Email) {
            this.data.registermp(this.data_user.PlayerName,this.data_user.Email,this.data_user.WalletAddress,'false','false').subscribe((data:any) => {},(error:any) => {})
          }
        },(error:any) => {});
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  async resetpassword({ emailreset }) {
    try {
      const user = await sendPasswordResetEmail(this.auth, emailreset).then(() => {
        this.showAlert('Success', 'Link reset password has sent to your email');
      }).catch((error:any) => {
         this.showAlert('Failed!', 'Email Not Found');
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  async confirmPasswordReset({ oob_code, password }) {
    if((this.measureStrength(password)) < 30){
      //console.log("Please use Uppercase letter, Number, Symbol and Undercase letter Combination");
      this.showAlert("Failed !", "Please use Password with Uppercase, Number, Symbol and Undercase Combination");
      return false;
    }else{
      try {
        const user = await confirmPasswordReset(this.auth, oob_code, password).then(() => {
          this.showAlert('Success !', 'Your password has been changed.');
        }).catch((error:any) => {
          this.showAlert('Failed !', 'Reset password link has expired.');
        });
        return user;
      } catch (e) {
        return null;
      }
    }
  }
 
  logout() {
    localStorage.clear();
    return signOut(this.auth);
  }

  measureStrength(pass: string) {  
    let score = 0;  
    // award every unique letter until 5 repetitions  
    // let letters = {};  
    // for (let i = 0; i< pass.length; i++) {  
    //   letters[pass[i]] = (letters[pass[i]] || 0) + 1;  
    //   score += 5.0 / letters[pass[i]];  
    // }  
    // bonus points for mixing it up  
    let variations : Record<string, any> = {};
    variations = {  
    digits: /\d/.test(pass),  
    lower: /[a-z]/.test(pass),  
    upper: /[A-Z]/.test(pass),  
    nonWords: /\W/.test(pass),  
    };  

    let variationCount = 0;  
    for (let check in variations) {  
    variationCount += (variations[check]) ? 1 : 0;  
    }  
    score += (variationCount - 1) * 10;  
    //console.log(score);
    return Math.trunc(score);  
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
