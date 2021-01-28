import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL : string ="http://localhost:8080/api/v1/students";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  addStudent(data) : Observable<any>{
    return this.httpClient.post(BASE_URL, data);
  }

  getStudents() : Observable<any>{
    return this.httpClient.get(BASE_URL);
  }

  getOneStudent(id) : Observable<any>{
    return this.httpClient.get(`${BASE_URL}/id/${id}`);
  }

  deleteStudent(id) : Observable<any>{
    return this.httpClient.delete(`${BASE_URL}/${id}`);
  }

  updateStudent(id, data) : Observable<any>{
    return this.httpClient.put(`${BASE_URL}/${id}`, data);
  }

}
