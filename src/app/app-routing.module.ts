import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';

const routes: Routes = [
    { path: '', component: StudentsListComponent },
    {path: 'students/:id', component: StudentDetailsComponent},
    {path: 'add-student', component: StudentsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
