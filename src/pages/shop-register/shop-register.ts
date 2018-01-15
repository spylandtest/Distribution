import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, Loading, LoadingController,NavParams,IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the ShopRegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop-register',
  templateUrl: 'shop-register.html',
})
export class ShopRegisterPage {

  loading: Loading;
   createSuccess = false;
    shopregisterCredentials = {shopname: '', ownername: '', shopaddress: '', mobileno: '',pincode: '',emailid:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private auth: AuthServiceProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopRegisterPage');
  }


public shopregister() {
         this.showLoading()
    this.auth.shopregister(this.shopregisterCredentials).subscribe(res => {
       let success = res['access'];
      if (success) {
             this.createSuccess = true;
             setTimeout(() => {
             this.loading.dismiss();
          });
          this.showPopup("Success", "Successfully Registered");
      } else {
         let message = res['message'];
         if(message)
         {
            setTimeout(() => {
             this.loading.dismiss();
          });
          this.showPopup("Error",message);
         }
        else
        {
           setTimeout(() => {
             this.loading.dismiss();
          });
          this.showPopup("Error", "Problem creating account.");
        }
    }
    },
    error => {
      setTimeout(() => {
             this.loading.dismiss();
          });
      this.showPopup("Error", error);
    });
  }
    showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.navCtrl.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
}