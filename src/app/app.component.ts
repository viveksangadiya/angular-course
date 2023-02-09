import { Component, Output } from '@angular/core';
import { COURSES } from 'src/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data={
    name:"Angular course"
  };
  title = 'angular-course';

  
  courses=COURSES;
  // coreCourse=COURSES[0];
  // secondCourse=COURSES[1];
  // thirdCourse=COURSES[2];

  ReceiveData(event : string){
    console.log(event);
  }
}
