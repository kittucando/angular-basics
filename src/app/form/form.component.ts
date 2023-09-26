import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay,tap} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customerName:string= 'axle';
  email:string ='';
  password:string ='';
  data$:Observable<any> =new Observable<any>();  

  constructor(private http:HttpClient) { 
    this.data$ = http.get("http://localhost:3000/Customers").pipe(
      tap(console.log),shareReplay()
      );   
  }

  ngOnInit(): void {
    this.data$.subscribe();
    this.data$.subscribe(); // will not be called once shareReplay is used
    this.data$.subscribe(); // will not be called once shareReplay is used
  }

  onSubmit(form:NgForm){
   // console.log(form.value);
    this.http.post("http://localhost:3000/Customers",form.value).subscribe();
  
  }

  deleteCustomer(){
    this.http.delete("http://localhost:3000/Customers/1").subscribe();
  }
}
