import { Component, OnInit } from '@angular/core';
import {CourseService} from 'src/app/courses/services/course.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private _CourseService:CourseService) { }
  courseDeatails
  ngOnInit(): void {
    this._CourseService.courseDetails.subscribe((data)=>{
      this.courseDeatails=data;
    })
  }

}
