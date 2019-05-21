import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import{UrlService}from './login/service';
import {AppConstants} from './constants/appconstant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';
  public date;
  public test=AppConstants;

  	constructor(private _md5: Md5,private serviceobj:UrlService){


  				
  		console.log(this.test.TEST_CONSTANT);
  		this.date = new Date();
  		var a=this.getMillies();
  	
  		let hash = Md5.hashStr(a+"");
  		console.log(" Hash Code Is =====")
  		console.log(hash);
  		console.log(" End of Hash Code ++++++")
  		//getMilliseconds()
  	}


  public getMillies():number

{
	

/*	console.log("hi");
	 console.log ( new Date());

    console.log ( new Date().getTime());*/

    return new Date().getTime()
}

}
