import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ShopRegisterPage } from '../pages/shop-register/shop-register';
import { BookDetailsPage } from '../pages/book-details/book-details';
import { ShopDetailsViewPage } from '../pages/shop-details-view/shop-details-view';
import { ShopviewPage } from '../pages/shopview/shopview';
import { BookDetailsViewPage } from '../pages/book-details-view/book-details-view';
import { BookviewPage } from '../pages/bookview/bookview';
import { TodayBooksPage } from '../pages/today-books/today-books';
import { ListTodayBooksPage } from '../pages/list-today-books/list-today-books';
import { AddPaymentPage } from '../pages/add-payment/add-payment';
import { ListBookDistributionPage } from '../pages/list-book-distribution/list-book-distribution';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = ShopDetailsViewPage;
  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, public menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
    this.pages = [
      { title: 'Add Shop ', component: ShopRegisterPage },
      { title: 'Add Books ', component: BookDetailsPage },
      { title: 'Shop List', component: ShopDetailsViewPage },
      { title: 'Books List', component: BookDetailsViewPage },
      { title: 'Add Today Books', component: TodayBooksPage },
      { title: 'Today Book List', component: ListBookDistributionPage }
     
      
      
    ];
  } 
   
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

