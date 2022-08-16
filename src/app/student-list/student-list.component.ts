import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html', 
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {
  studentDataSource:any = [];
  studentDisplayColumns:string[] = [
    'Student ID', 'Full Name', 'Class', 'Roll No', 'Math', 'English', 'Hindi', 'Science', 'Drawing','Total Marks'
  ]

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this.studentDataSource = this._studentService.getStudentList()
  }

}
