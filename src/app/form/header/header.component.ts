import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
view:any;
display=false;
constructor(private userdata:UserserviceService){
  if(this.userdata.updated!==undefined){
    this.display=true;
    this.view=this.userdata.updated;
    console.log(this.view)
  }
 
}
}
