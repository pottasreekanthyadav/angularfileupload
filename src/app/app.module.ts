import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{UrlService} from './login/service';
import { ContactformComponent } from './contactform/contactform.component'
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms'
import { Md5 } from 'ts-md5/dist/md5';
import { FileSelectDirective } from 'ng2-file-upload';

import {AppConstants} from './constants/appconstant';
import { UploadComponent } from './upload/upload.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactformComponent,
    UploadComponent,
    UploadfileComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [UrlService,Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
