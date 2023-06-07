import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  updated:any[]=[];
  getupdated(userdata:any){
    this.updated.push(userdata);
  }
}
