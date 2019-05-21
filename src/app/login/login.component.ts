import { Component} from '@angular/core';
import{UrlService}from './service';
import {AppConstants} from '../constants/appconstant'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 
		
	public s1:string;
	public s2:string;
	public email:string;
	public password:string;
	public sname:string;
	public fname:string;
	public gender:string;
	public class:string;
	public phonenumber:string;
	public city:string;
	public res:any="";
	


	public  register(){
		console.log(this.email)
		console.log(this.password)
		console.log(this.sname)
		console.log(this.fname)
		console.log(this.gender)
		console.log(this.class)
		console.log(this.phonenumber)
		console.log(this.city)
		var stuobj:any={};
			stuobj.sname=this.sname;
			stuobj.fname=this.fname;
			stuobj.email=this.email;
			stuobj.password=this.password;
			
			stuobj.gender=this.gender;
			stuobj.class=this.class;
			stuobj.phonenumber=this.phonenumber;
			stuobj.city=this.city;
		this.res=this.serviceobj.register("http://127.0.0.1:8081/addUser1",stuobj);
			//Your Server Must Have to Accept User Data
			//json-server --watch --id email student.json.
			//json-server --watch --id email student.json
		this.res.subscribe(function(data:any)

		{		
			alert(data.message);
			alert(data.status);
			
			/*console.log(data);*/
			
		});
		this.email="";
		this.fname="";
		this.sname="";
		this.password="";
		this.gender="";
		this.class="";
		this.city="";
		this.phonenumber="";
	}


	public login(){
	
		if(this.s1==undefined && this.s2==undefined){
			alert ("Please Enter Email and Password");
		}
		else{
			var stuobj:any={};
			stuobj.email=this.s1;
			stuobj.password=this.s2;
			

		var email=this.s1;
		var a2=this;
		/*var url:string="http://localhost:3000/student/"+email;*/
		var url:string="http://127.0.0.1:8081/logIn";
		this.res=this.serviceobj.read(url,stuobj);

		this.res.subscribe(function(data){
				console.log("kjhjk");
				console.log(data);
					alert(data.message);


					/*	if(a2.s1==data.email && a2.s2==data.password){
				alert("Valid User");
			}
			else{
				alert("Invalid User");
			}*/


		});


		
		}
		

	}

	public ar:any[]=[];
	public studentdetails(){
		var a2=this;
		var url:string="http://localhost:3000/student/";
		this.res=this.serviceobj.readdget(url);
		this.res.subscribe(function(data:any){
					a2.ar=data;


			
		});
		

	}

	public delete(email){
		var emaid=email;
		var a2=this;
		var url:string="http://localhost:3000/student/"+emaid;
		alert(url);
		this.res=this.serviceobj.remov(url);
		this.res.subscribe(function(data:any){
			a2.studentdetails();		
			
		});
	}

  constructor(private serviceobj:UrlService,private cons:AppConstants) {
  		//Test
  		console.log("This is test File");
  		console.log(this.cons);

   }

  

}
