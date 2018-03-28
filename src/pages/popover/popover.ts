import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: ':page-popover',
  template:
  `<ion-list color="dark"  class="popover" >      
      <button ion-item (click)="showbookmark()"> <ion-icon name="bookmark"></ion-icon>  Bookmarks</button>
      <button ion-item (click)="showaccount()"> <ion-icon name="person"></ion-icon>  Account</button>
      <button ion-item (click)="showsetting()"> <ion-icon name="settings"></ion-icon>  Settings</button>
    </ion-list>`

})
export class PopoverPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  showbookmark() {
    this.viewCtrl.dismiss();
  }

  showaccount() {
    //this.viewCtrl.dismiss();
   //this.navCtrl.push(AccountPage, { id: "123", name: "Carl"   });
   this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(AccountPage);
  }

  showsetting() {
    this.viewCtrl.dismiss();
  }

}
