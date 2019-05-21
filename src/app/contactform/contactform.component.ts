import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{UrlService}from '../login/service';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent  implements OnInit {
public email;
public priority='Low';
public messageregard='New Coin / Token Listing Request';
public subject;
public msg;
public firstName;
public res:any="";
model: any = {'firstName':''};
constructor(private serviceobj:UrlService){}

  onSubmit(){

console.log(this.email);
console.log(this.priority);
console.log(this.messageregard);
console.log(this.subject);
console.log(this.msg);
var stuobj:any={};

stuobj.email=this.email;
stuobj.priority=this.priority;
stuobj.messageregard=this.messageregard;
stuobj.subject=this.subject;


this.res=this.serviceobj.register("http://127.0.0.1:8081/email",stuobj);
      //Your Server Must Have to Accept User Data
      //json-server --watch --id email student.json.
      //json-server --watch --id email student.json
    this.res.subscribe(function(data:any)

    {    
      alert(data.message);
      alert(data.status);
      
      /*console.log(data);*/
      
    });



  }
ngOnInit() {

}

}
