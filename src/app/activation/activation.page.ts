import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { environment } from "../../environments/environment";

import { SendData } from '../send-data';
import { HttpClient } from '@angular/common/http';

// AngularFire
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
// AngularFire
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from '@angular/fire/auth';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

// Services
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
})
export class ActivationPage implements OnInit {

  email : string = "";
  password : string = "";
  result : any = {};
  username : string = "";
  wallet_address : string = "";
  uid : any;
  id : any;
  sub : any;
  activation : any;

  constructor(
    private authService: AuthService,
    private routes : ActivatedRoute,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private fs: AngularFirestore,
    private http: HttpClient,
    public global : ProviderService,
    public senddata : SendData,
    private auth: Auth
  ) { }

  async ngOnInit() {
    let kodeaktifasi = this.routes.snapshot.paramMap.get('kodeaktifasi');
    if(kodeaktifasi) {
      const loading = await this.loadingController.create();
      await loading.present();
      this.senddata.activationmp(kodeaktifasi).subscribe(async(data:any) => {
        this.result = JSON.parse(data)
        console.log(this.result[0])
        if(!this.result[0].email) {
          console.log('Email tidak tersedia atau Sudah Teraktifasi');
        } else {
          try {
            const user = await createUserWithEmailAndPassword(this.auth, this.result[0].email, this.result.pwdecode)
            this.senddata.insertNoUidmp(user.user.uid, this.result[0].email).subscribe((data:any) => {
              console.log("uid", data);
            });
            this.fs.collection('Players').doc(user.user.uid).set({CreatedAt: this.newTime(),ProfileData:JSON.stringify({CreatedAt: this.newTime(),Email: this.result[0].email, WalletAddress: this.result[0].wallet_address, PlayerName: this.result[0].username})});
            this.fs.collection('Items').doc(user.user.uid).set({CreatedAt: this.newTime()});
            var DocIdEggs = this.newTime() - 100;
            var DocIdBatteries24 = this.newTime() - 100;
            var DocIdBatteries12 = this.newTime() - 100;
            var DocIdBatteries8 = this.newTime() - 100;
            var DocIdFoods = this.newTime() - 100;
            this.activation = true;
            console.log(user.user.uid);
            loading.dismiss();
            return user;
          } catch (e) {
            this.activation = 'exists';
            console.log(e);
            loading.dismiss();
          }
        }
      },(error:any) => {})
    } else {
      console.log('kodeaktifasi parameter Not Found');
    }
  }

  newTime(){
    //const current = new Date();
    return Math.floor(Date.now()/1000);
  }

}
