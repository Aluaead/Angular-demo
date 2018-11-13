import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  flag:Number = 0;
  constructor(public navCtrl: NavController) {

  }
  change(i){
    this.flag = i;
  }
}
