import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class MainProvider {

  apiUrl : string = "http://localhost:3000/api/pacientes";
  data:any;

  constructor(public navCtrl: NavController, public http: Http) {
  }
  getData(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
