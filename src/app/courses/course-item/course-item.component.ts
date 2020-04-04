import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() Data;
  @Output() coursredetail=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickItem()
  {
    this.coursredetail.emit();
  }

}
