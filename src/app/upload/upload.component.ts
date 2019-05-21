import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
imgname:string;
igsrc:string;

  constructor() { }
  onsubmit(){
  	alert("kk")
  	alert(this.imgname)
  	alert(this.imgname)
  }

  public onFileSelect(event:any):void{
    console.log("hi sreekanth")
  	console.log(event)

  	var file=event.target.files[0];
  	if(file){
  		console.log(file)
  		var fileRead=new FileReader();
      fileRead.onloadstart=(e)=>{
        console.log("Loading File")
      }
      fileRead.onload=(e)=>{}
      fileRead.onloadend=(e)=>{
        this.igsrc=fileRead.result.toString();
        this.imgname=file.name;
        console.log(this.igsrc)
        console.log("=========")
        console.log(this.imgname)
        console.log("******")
      }

      fileRead.readAsDataURL(file)

  	}

  }

  ngOnInit() {
  }

}
