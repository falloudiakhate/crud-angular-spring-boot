import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

    student : any;

    constructor(private httpClient : HttpClient, private route : ActivatedRoute,private studentService : StudentService) { }

    ngOnInit() {
        this.getStudent(this.route.snapshot.paramMap.get('id'))
    }

    getStudent(id) : void{
        this.studentService.getOneStudent(id).subscribe(
            data =>{
                this.student = data
            },
            error =>{
                console.log(error)
            }
        )
    }

}
