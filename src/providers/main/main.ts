import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { NavController } from 'ionic-angular';


/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider {

  getApiUrl : string = "http://localhost:3000/api/pacientes";
  data:any;

  constructor(public navCtrl: NavController, public http: HTTP) {
  }
  getData(){
    this.http.get(this.getApiUrl, {},{})
    .then(data => {
      this.data = data;
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }
}
