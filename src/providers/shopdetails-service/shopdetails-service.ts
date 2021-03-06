import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { api } from "../../app/global";
/*
  Generated class for the ShopdetailsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopdetailsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ShopdetailsServiceProvider Provider');
  }

   public getShopdetail() {
      
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
     //   let empVendorUrl = api.empVendorUrl;
     //  let shopViewUrl = '/api/view.php';
    let shopViewUrl = api.endPoint + api.shopViewUrl;
        let headers = new Headers();
        let res = Array();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
       // let data = "employee=154";
         let data = "";
         //var data = JSON.stringify({username: credentials.email});
       //console.log(data);
        this.http.post(shopViewUrl,data,{headers: headers})
        .subscribe(data => {
        // console.log(JSON.stringify(data.json));
          let response = data.json();
       //   console.log(response);
          let access = response.success;
          // console.log(access);
           if (access==true) {
          let list = response.extras.recordslist;
           console.log(list);
          res['list'] = list;
         // let access = true;
           }
          res['access'] = access;         
          res['message'] = false;
            observer.next(res);
            observer.complete();
        }, error => {
          let access = false;
          res['access'] = access;
          res['message'] = 'Oops! we had a problem.  Please try again in a few minutes';
           observer.next(res);
            observer.complete();
           
        });

        });
    }


}



