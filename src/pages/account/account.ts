import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  openregister(){
    //this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(RegistrationPage);
  }

}
