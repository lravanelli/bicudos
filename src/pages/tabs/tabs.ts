import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1rootPage } from '../tab1root/tab1root';
import { Tab2rootPage } from '../tab2root/tab2root';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public iduser: number;
  tabroot1 = Tab1rootPage;
  tabroot2 = Tab2rootPage;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iduser = navParams.get('iduser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    console.log(this.iduser);
  }

}
