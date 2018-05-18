import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DatabaseProvider, Usuario } from '../../providers/database/database';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  model: Usuario;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dbProvider: DatabaseProvider, private toast: ToastController) {

  if (this.navParams.data.contact && this.navParams.data.key) {
    this.model = this.navParams.data.contact;
    this.key =  this.navParams.data.key;
  } else {
    this.model = new Usuario();
  }  
}

save() {
  this.saveUsuario()
    .then(() => {
      this.toast.create({ message: 'Usuario cadastrado.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
    });
}

private saveUsuario() {
  if (this.key) {
    return this.dbProvider.update(this.key, this.model);
  } else {
    return this.dbProvider.insert(this.model);
  }
}

}

