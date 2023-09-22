import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ClassLevelProvider1Component } from '../class-level-provider1/class-level-provider1.component';

@Component({
  selector: 'app-lifecycle-example',
  templateUrl: './lifecycle-example-component.component.html',
  styleUrls: ['./lifecycle-example-component.component.css']
})
export class LifecycleExampleComponentComponent implements  OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() inputValue: string | undefined ;

  constructor() {
    console.log('1. Child - Constructor Called');
  }

  ngOnChanges() {
    console.log('2.  Child - OnChanges Called');
  }

  ngOnInit() {
    console.log('3.  Child - OnInit Called');
  }

  ngAfterContentInit() {
    console.log('4.  Child - AfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('5. Child -  AfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('6.  Child - AfterViewInit Called');
  }

  ngAfterViewChecked() {
    console.log('7.  Child - AfterViewChecked Called');
  }

  ngDoCheck() {
    console.log('8. Child - DoCheck Called');
  }

  ngOnDestroy() {
    console.log('9. Child - OnDestroy Called');
  }
}
