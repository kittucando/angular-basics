import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface JSP{
  userId:string;
  id:string;
  title:string;
  completed:boolean
}
@Component({
  selector: 'app-provider',
  templateUrl: './class-level-provider1.component.html',
  styleUrls: ['./class-level-provider1.component.css']
})


export class ClassLevelProvider1Component  implements  OnChanges,OnInit,OnDestroy
 {
  todos: JSP[] = [];
  exampleValue = 'Hello, World!';


  constructor(private http: HttpClient) {
    
    console.log('1. Provider -  Constructor Called');
  }

  ngOnChanges() {
    console.log('2. Provider -  OnChanges Called');
  }

  ngOnInit() {
    this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos").subscribe(data=>{
      this.todos=data;
      console.log(data);
    });
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
