import { Component, OnInit } from '@angular/core';
import { CheckHowthingsworkService } from '../check-howthingswork.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ch: CheckHowthingsworkService){
  
  }
    checkLoggedIn =this.ch.loggedInStatus();
  

  ngOnInit(): void {
  }

}
