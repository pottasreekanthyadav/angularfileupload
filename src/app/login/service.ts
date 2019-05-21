import{Injectable} from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';




@Injectable()
export class UrlService{
	  
		

	constructor(private http:HttpClient){}



/*ip address*/

	
	 
/*end ip*/


	public register(url,stuobj){
		
		return  this.http.post(url,stuobj);

	}

	public read(url,stuob){
		return this.http.post(url,stuob);
	}

	public readdget(url){
		return this.http.get(url);
	}

	public remov(url){
		return this.http.delete(url);
	}


	
}