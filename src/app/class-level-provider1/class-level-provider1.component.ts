import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LifecycleExampleComponentComponent } from '../lifecycle-example-component/lifecycle-example-component.component';
@Component({
  selector: 'app-provider',
  templateUrl: './class-level-provider1.component.html',
  styleUrls: ['./class-level-provider1.component.css']
})
export class ClassLevelProvider1Component  
 {
 
  exampleValue = 'Hello, World!';


  constructor() {
    console.log('1. Provider -  Constructor Called');
  }

  ngOnChanges() {
    console.log('2. Provider -  OnChanges Called');
  }

  ngOnInit() {
    console.log('3. Provider -  OnInit Called');
  }

  ngAfterContentInit() {
    console.log('4. Provider -  AfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('5. Provider -  AfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('6. Provider -  AfterViewInit Called');
  }

  ngAfterViewChecked() {
    console.log('7. Provider -  AfterViewChecked Called');
  }

  ngDoCheck() {
    console.log('8. Provider -  DoCheck Called');
  }

  ngOnDestroy() {
    console.log('9. Provider -  OnDestroy Called');
  }
}
