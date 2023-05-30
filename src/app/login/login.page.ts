import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

// Services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials : FormGroup;
  credentialsregist : FormGroup;
  credentialsreset : FormGroup;
  localStorage : any;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get emailreset() {
    return this.credentials.get('emailreset');
  }

  get password() {
    return this.credentials.get('password');
  }

  get username() {
    return this.credentialsregist.get('username');
  }

  get wallet_address() {
    return this.credentialsregist.get('wallet_address');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.credentialsregist = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      wallet_address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.credentialsreset = this.fb.group({
      emailreset: ['', [Validators.required, Validators.email]]
    });
  }

  async register() {

    const user = await this.authService.register(this.credentialsregist.value);
    this.showAlert('Register Success, Check your email address for activation!', 'Complete');
    setTimeout(function() {
      window.location.replace('/tabs/profile');
    }, 5000);
  }
 
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.login(this.credentials.value);

    if (user) {
      console.log(user.user.uid);
      setTimeout(function() {
       window.location.replace('/tabs/home');
      }, 5000);
      // this.router.navigateByUrl('/tabs/home/', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
      loading.dismiss();
    }
  }

  async resetpassword() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.resetpassword(this.credentialsreset.value);
    setTimeout(function() {
     window.location.replace('/tabs/login');
    }, 2000);
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
