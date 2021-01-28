import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    StudentsAddComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
