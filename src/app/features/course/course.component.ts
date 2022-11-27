import { Component, OnInit, Input } from '@angular/core';


interface Course {
  editable?: boolean;
  title?: string;
  description?: string;
  creationDate?: Date;
  duration?: number;
  authors?: string;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course = {};
  @Input() editable = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
