import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { RegisterComponent } from '../../components/register/register';
import { DatabaseProvider, UsuarioList } from '../../providers/database/database';
import { IonicPage,NavParams, ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

list :any = [
  {
    key:'',
    nome:'',
  }
]
logar:any
logmail :any;
logpass :any; 

  constructor(public navCtrl: NavController,private dbProvider:DatabaseProvider, private toast:ToastController) {
this.getAll()
  }

  goRegister() {
    this.navCtrl.push(RegisterComponent);
  }

  getAll() {
    this.dbProvider.getAll()
      .then((result) => {
        this.list = result;
      });
  }

  logIn() {
      for (let entry of this.list) {
        if(entry.key === this.logmail && entry.nome.password === this.logpass){
          this.navCtrl.push(ListPage);
          }
          else{
              this.toast.create({ message: 'Dados Invalidos.', duration: 3000, position: 'botton' }).present();
          }
        }
    }
}
