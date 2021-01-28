import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

    students : any;

    constructor(private studentService : StudentService) { }

    ngOnInit() {
        this.studentsList();
    }

    studentsList() : void{
        this.studentService.getStudents().subscribe(
        data =>{
            this.students = data;
        },
        error =>{
            console.log(error);
        }
        )
    }

}
