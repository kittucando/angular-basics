import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './class-level-provider1.component.html',
  styleUrls: ['./class-level-provider1.component.css']
})
export class ClassLevelProvider1Component  implements OnInit, OnDestroy {


  constructor() { }

  ngOnInit() {
    // This code will be executed when the component is initialized
    console.log('Component initialized');
  }

  ngOnDestroy() {
    // This code will be executed when the component is about to be destroyed
    console.log('Component destroyed');
  }

}
