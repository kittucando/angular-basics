import { Component,Injectable,inject } from '@angular/core';
import { CheckHowthingsworkService } from './check-howthingswork.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angula-provider-test';
  constructor(private ch: CheckHowthingsworkService){
  
  }
    checkLoggedIn =this.ch.loggedInStatus();
  
}
