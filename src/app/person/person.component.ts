import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  firstName:string='';
  middleName:string='';
  lastName:string='';
  department:string='';
  gender='';
  DOB:any;
  addr1:string = '';
  pincode:number= 0;
 
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
    alert("Your details inserted Successfully")
  }

}
