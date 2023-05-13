import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { AlertController, LoadingController } from '@ionic/angular';

// Services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  credentialsresetPassword : FormGroup;
  localStorage : any;
  oob_code : any;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private routes : ActivatedRoute,
  ) {}  

  get password() {
    return this.credentialsresetPassword.get('password');
  }

  ngOnInit() {
    this.oob_code = this.routes.snapshot.queryParamMap.get('oobCode')
    console.log(this.oob_code)

    this.credentialsresetPassword = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      oob_code: [this.oob_code]
    });
  }

  async confirmPassowrd() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.confirmPasswordReset(this.credentialsresetPassword.value);
    // setTimeout(function() {
    //  window.location.replace('/tabs/login');
    // }, 2000);
    loading.dismiss();
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
