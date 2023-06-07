import { Component,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { ModalComponent } from '../modal/modal.component';
import{ FormControl,FormGroup,FormControlName,Validators} from '@angular/forms'
import { Route, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
loginForm= new FormGroup({
  name: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Za-z].*[A-Za-z])[A-Za-z ]{2,30}$') ]),
  gender : new FormControl('',Validators.required),
  phone : new FormControl('',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]),
  email : new FormControl('',[Validators.required,Validators.email]),
  category : new FormControl('',Validators.required),
  java : new FormControl(""),
  css : new FormControl(""),
  python : new FormControl(""),
  html : new FormControl(""),
  js : new FormControl("")
})
get name(){
  return this.loginForm.get("name")
}
get gender(){
  return this.loginForm.get("gender")
}
get phone(){
  return this.loginForm.get("phone")
}
get email(){
  return this.loginForm.get("email")
}
get category(){
  return this.loginForm.get("category")
}
// get java(){
//   return this.loginForm.get("java")
// }
// get css(){
//   return this.loginForm.get("css")
// }
// get python(){
//   return this.loginForm.get("python")
// }
// get html(){
//   return this.loginForm.get("html")
// }
// get js(){
//   return this.loginForm.get("js")
// }

// handleCheck(){
//   console.log(this.java.value);
// }



url: any;
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}
login:any;
call(){
  this.loginForm.value.java
  this.loginForm.value.css
  this.loginForm.value.python
  this.loginForm.value.html
  this.loginForm.value.js
  this.login=this.loginForm.value
  this.login.url=this.url
  const modelRef = this.ngbmodal.open(ModalComponent)
  // this.loginForm.url=this.url
  modelRef.componentInstance.data=this.login
  }
constructor(private userdata:UserserviceService,private route : Router,private ngbmodal: NgbModal){
}
}
