import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import {MainProvider} from '../../providers/main/main'

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  providers: [
    MainProvider
  ]
})
export class MainPageModule {}
