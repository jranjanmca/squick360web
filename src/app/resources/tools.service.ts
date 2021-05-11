import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ToolsService {
private configProp: any;
serviceContext:string;
urlContext:string;
frmUrlContext:string;

constructor(private fb: FormBuilder, private http: HttpClient) { 
this.serviceContext = window.location.host;
if(this.serviceContext.includes('4200')){
this.serviceContext = this.serviceContext.replace('4200','9360');
}
this.urlContext = window.location.protocol+"//"+this.serviceContext+"/";
this.serviceContext =  window.location.protocol+"//"+this.serviceContext+"/web/";
}

loadAppConfig(){
console.log("Inside App Config..");  
/*return this.http.get('/assets/config.json').subscribe(configProp =>  {
this.configProp = configProp;
},
error => {
alert("loadAppConfig error:"+error.error.message);
}
); */
}

getProp(keyPath: string){
return this.configProp[keyPath];
}

getServiceCtx(){        
return this.serviceContext;
}

getUrlCtx(){ 
return this.urlContext;
}

getFrmUrlCtx(){ 
//this.serviceContext = this.serviceContext.replace('9999','4200');       
this.frmUrlContext = this.serviceContext.replace('9360','4200');
this.frmUrlContext = this.frmUrlContext.replace('web/',''); 
return this.frmUrlContext;
}



}
