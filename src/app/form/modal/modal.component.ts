import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() data:any;
  // data:any;
  // constructor(private userdata:UserserviceService){
  //   this.data=this.userdata.data;
  // }
  constructor( public activeModal: NgbActiveModal,public userserve: UserserviceService, public route : Router ){
    
  }
  submit(){
    this.userserve.getupdated(this.data)
    this.route.navigate(["/user/header"])
    this.activeModal.dismiss('Cross click');
  }

}

