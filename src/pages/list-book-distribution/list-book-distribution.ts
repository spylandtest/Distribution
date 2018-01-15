import { Component } from '@angular/core';
import { NavController, AlertController, Loading, LoadingController,NavParams,IonicPage } from 'ionic-angular';
import { ListBookDistributionServiceProvider } from '../../providers/list-book-distribution-service/list-book-distribution-service';


/**
 * Generated class for the ListBookDistributionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-book-distribution',
  templateUrl: 'list-book-distribution.html',
})
export class ListBookDistributionPage {

  loading: Loading;
  createSuccess = false;
  cataloglist= [];
  todaybookdistributedlist=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private distributedcatalog:ListBookDistributionServiceProvider, private loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookDistributionPage');
    this.getCatalogDetail();
  }

  public getCatalogDetail() {
    this.showLoading()
this.distributedcatalog.getCatalogDetail().subscribe(res => {
 let success = res['access'];
if (success) {
       this.cataloglist = res['catalogList'];
         this.todaybookdistributedlist = this.cataloglist['todaybookdistributedlist'];
          
   console.log(this.cataloglist);
       setTimeout(() => {
        this.loading.dismiss();
    });
  //this.showPopup("Success", "Successfully Added");
} else {
  
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
