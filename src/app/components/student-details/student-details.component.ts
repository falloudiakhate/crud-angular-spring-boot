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

    constructor(private httpClient : HttpClient, private route : ActivatedRoute,private studentService : StudentService, private router : Router) { }

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

    deleteStudent() : void{
        this.studentService.deleteStudent(this.student.id).subscribe(
            data =>{
                console.log(data)
                this.router.navigate(["/"])
            },
            error =>{
                console.log(error)
            }
        )
    }

}
