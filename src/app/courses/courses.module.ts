import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseItemComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports:[CoursesComponent]
})
export class CoursesModule { }
