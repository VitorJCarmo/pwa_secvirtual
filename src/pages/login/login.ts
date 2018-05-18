import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast:ToastController) {
    this.user = this.navParams.get('key');
    this.toast.create({ message: 'Seja Bem Vindo'+this.user, duration: 3000, position: 'botton' }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
