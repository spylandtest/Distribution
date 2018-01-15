import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { BookviewServiceProvider } from '../../providers/bookview-service/bookview-service';
import { BookviewPage } from '../../pages/bookview/bookview';
import { CatalogServiceProvider } from '../../providers/catalog-service/catalog-service';
/**
 * Generated class for the BookDetailsViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book-details-view',
  templateUrl: 'book-details-view.html',
})
export class BookDetailsViewPage {

  loading: Loading;
  bookList=[];

   constructor(public navCtrl: NavController, public navParams: NavParams,private bookview: BookviewServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailsViewPage');
    this.getBooks();
  }

   public getBooks() {
    this.showLoading()
    this.bookview.getBookdetail().subscribe(res => {
      let allowed = res['access'];
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.bookList = res['listbook'];
         console.log(this.bookList);
        });
      } else {
      
      let message = res['message'];
      if(message)
          this.showPopup("Error", message);
      else
        this.showPopup("Error", "Access Denied");
      }
    },
    error => {
       this.showPopup("Error", error);
    });
  }

 
  public bookView(book) {
      //console.log(recorddetail);
  //   let id = recorddetail['id'];
      this.navCtrl.push(BookviewPage,{book});
   }

   showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
 

  showPopup(title, text) {
     setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK'
       }
     ]
    });
    alert.present();
  }


}
