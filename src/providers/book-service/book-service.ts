import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { api } from "../../app/global";

/*
  Generated class for the BookServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BookServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BookServiceProvider Provider');
  }

public bookdetails(bookdetails) {
    {
      return Observable.create(observer => {
      // At this point store the credentials to your backend!
    //  let signUpUrl = api.signUpUrl;
    //  let signUpUrl = api.endPoint+api.signUpUrl;

    let bookDetailUrl = api.endPoint+api.bookDetailUrl;
        let headers = new Headers();
        let res = Array();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
         let data = "bookname="+bookdetails.bookname+"&contributorId="+bookdetails.contributorId+"&price="+bookdetails.price+"&totalquantity="+bookdetails.totalquantity+"&companyName="+bookdetails.companyName+"&description="+bookdetails.description+"&publicationyear="+bookdetails.publicationyear+"&booktype="+bookdetails.booktype;
         //var data = JSON.stringify({username: credentials.email});
         console.log(bookDetailUrl);
        this.http.post(bookDetailUrl,data,{headers: headers})
        .subscribe(data => {
        
          let response = data.json();
          let access = response.success;
       //    console.log(JSON.stringify(access.json()));
       console.log(JSON.stringify(access));
          res['access'] = access;
          res['message'] = false;
      //     observer.next(res);
     //      observer.complete();
     if (access==false)
            res['message'] =  response.message;
            observer.next(res);
            observer.complete();
        
        }, error => {
         let access = false;
          res['access'] = access;
          res['message'] = 'Oops! we had a problem.  Please try again in a few minutes';
           observer.next(res);
            observer.complete();
           
           // console.log(JSON.stringify(error.json()));
        });
    });
    }
  }


}
