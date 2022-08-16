import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentList:any = [
    {StudentId:1,FirstName:"saggy",MiddleName:"",LastName:"maggy",Class:"X",RollNo:23,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:2,FirstName:"Nick",MiddleName:"",LastName:"lodian",Class:"X",RollNo:30,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:3,FirstName:"kitretsu",MiddleName:"",LastName:"Mark",Class:"X",RollNo:33,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:4,FirstName:"Nobita",MiddleName:"",LastName:"Mark",Class:"X",RollNo:25,Math:33,English:50,Hindi:0,Science:40,Drawing:70 },
    {StudentId:5,FirstName:"Sizuka",MiddleName:"",LastName:"Mark",Class:"X",RollNo:26,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:6,FirstName:"Jian",MiddleName:"",LastName:"Mark",Class:"X",RollNo:27,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:7,FirstName:"Sunio",MiddleName:"",LastName:"Mark",Class:"X",RollNo:28,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:8,FirstName:"Doremon",MiddleName:"",LastName:"Mark",Class:"X",RollNo:29,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:9,FirstName:"Sinchan",MiddleName:"",LastName:"Nohara",Class:"X",RollNo:40,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:10,FirstName:"Bheem",MiddleName:"Chota",LastName:"Bheem",Class:"X",RollNo:31,Math:100,English:100,Hindi:100,Science:90,Drawing:90 },
  ]
  constructor() { }

  getStudentList(){
    return this.studentList
  }
}
