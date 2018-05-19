import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user:any;
data: data[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast:ToastController, public db:DatabaseProvider) {
    this.getData()
    this.user = this.navParams.get('key');
    this.toast.create({ message: 'Seja Bem Vindo'+this.user, duration: 3000, position: 'botton' }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getData(){
    this.db.getAll()
    .then(data => {
      this.data.push(data)
      console.log(this.data);
  });
}
}
