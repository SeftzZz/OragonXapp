import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  connect : any;
  
  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    ) {}

  ngOnInit() {
    this.connect = false;
  }

  async maintenance() {
    const alert = await this.alertController.create({
      header: 'Maintenance',
      message: 'The page is coming soon !',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
