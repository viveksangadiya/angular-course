import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  

  courseData: string = "this is child data";

  @Output()
  childStringData: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.course = {
      id: 1,
      name: "",
      author: "",
      title: "",
      level: "",
      purchase: "hello",
    }
  }
  ngOnInit(): void {

  }

  SendData() {
    this.childStringData.emit(this.courseData);
  }

  cardClasses() {
    return {
      'beginner': this.course.level == 'beginner',
      'advance': this.course.level == 'advance',
      'intermideate': this.course.level == 'intermideate'
    }
  }
}