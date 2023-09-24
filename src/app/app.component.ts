import { Component,Injectable,inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) {
    const state = this.router.routerState;
    console.log(this.router);
    console.log(state.snapshot.url); // Access current URL
  }
  title = 'angula-provider-test';
  
  
}
