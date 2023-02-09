import { Component, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db';
import { HttpClient } from "@angular/common/http";
import { Product, Result } from './model/product';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class AppComponent  {
  data={
    name:"Angular course"
  };
  title = 'angular-course';
  date=new Date();
  
  courses=COURSES;
  products: Product[] = [];
  result: Observable<Result>|undefined;

  constructor(private coursesService:CoursesService ){
    
  }

  ngOnInit(){
    this.result=this.coursesService.loadCourses();
  }
  
  // coreCourse=COURSES[0];n
  // secondCourse=COURSES[1];
  // thirdCourse=COURSES[2];

  ReceiveData(event : string){
    console.log(event);
  }
}
