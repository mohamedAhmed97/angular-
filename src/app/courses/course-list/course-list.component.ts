import { Component, OnInit } from '@angular/core';
import {CourseService} from 'src/app/courses/services/course.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses=[
    {
      id:1,
      title:"nodejs",
      instructor:"Mohaned",
      startDay:"2/7/2020"
    },
    {
      id:2,
      title:"php",
      instructor:"Mohanmed",
      startDay:"2/4/2020"
    },
    {
      id:3,
      title:"Python",
      instructor:"Ali ",
      startDay:"2/7/2020"
    },

  ]
  constructor(private _CourseService:CourseService) { }
  listClick(data){
    this._CourseService.changeData(data);
  }
  ngOnInit(): void {
  }

}
