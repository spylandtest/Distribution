import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { BookviewServiceProvider } from '../../providers/bookview-service/bookview-service';
/**
 * Generated class for the BookviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookview',
  templateUrl: 'bookview.html',
})
export class BookviewPage {
book;
loading: Loading;
createSuccess = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private bookview: BookviewServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.book = navParams.get('book');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookviewPage');
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
