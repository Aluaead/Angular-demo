import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*标记头部active样式 */
  flag:Number = 0;
  constructor(public navCtrl: NavController) {

  }

  change(i){
    this.flag = i;
  }

}
