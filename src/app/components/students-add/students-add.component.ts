import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

    constructor(private studentService : StudentService) { }

    student : any = {
        nom : '',
        prenom : '',
        email : '',
    }

    message : string;
    submitted : boolean = false;

    ngOnInit() {
        this.submitted = false;
    }

    saveStudent() : void {
        const data = {
            nom : this.student.nom,
            prenom : this.student.prenom,
            email : this.student.email
        }

        this.studentService.addStudent(data).subscribe(
            response =>{
                this.message = response
                this.submitted = true
            },
            error =>{
                console.log(error)
            }
        )
    }

}
