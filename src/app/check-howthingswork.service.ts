import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckHowthingsworkService {
  private insLoggedin: boolean = false;

  constructor() { }

  public loggedInStatus(){
   
    this.insLoggedin=true;
    console.log();('loggedInStatus method called');
    return this.insLoggedin;
  }
}
