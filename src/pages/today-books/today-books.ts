import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, Loading, LoadingController,NavParams,IonicPage } from 'ionic-angular';
import { CatalogServiceProvider } from '../../providers/catalog-service/catalog-service';

import { AddtodaybooksProvider } from '../../providers/addtodaybooks/addtodaybooks';


/**
 * Generated class for the TodayBooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-today-books',
  templateUrl: 'today-books.html',
})
export class TodayBooksPage {

  loading: Loading;
   createSuccess = false;
    todaybookCredentials = {bookId: '',quantity: ''};
    cataloglist= [];
    authorList= [];
    shopsList= [];
    bookList= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private addbook: AddtodaybooksProvider,private catalog:CatalogServiceProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayBooksPage');
    this.getCatalogDetail();
  }

  public getCatalogDetail() {
    this.showLoading()
this.catalog.getCatalogDetail().subscribe(res => {
 let success = res['access'];
if (success) {
       this.cataloglist = res['catalogList'];
         this.authorList = this.cataloglist['authorList'];
          this.shopsList = this.cataloglist['shopsList'];
          this.bookList = this.cataloglist['bookList'];
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


public todaybooks() {
  this.showLoading()
this.addbook.todaybooks(this.todaybookCredentials).subscribe(res => {
let success = res['access'];
if (success) {
    console.log(this.cataloglist);
     setTimeout(() => {
      this.loading.dismiss();
  });
this.showPopup("Success", "Successfully Added");
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
   this.showPopup("Error", "Problem in adding details.");
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
