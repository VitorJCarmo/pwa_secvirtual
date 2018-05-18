import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  data:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public main: MainProvider 
    ) {
  this.getData();
  console.log(this.data);
  }

  getData(){
    this.main.getData()
    .then(data => {
      this.data = data;
    });
}
}