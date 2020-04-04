import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseDetails=new BehaviorSubject(null);
  constructor() { }
  //change course Details
  changeData(data){
    this.courseDetails.next(data);
  }
  //get Details of Course
  getData()
  {
    return this.courseDetails.asObservable();
  }

}
