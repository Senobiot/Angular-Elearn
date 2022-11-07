import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() editable = true;
  @Input() courseList: any[] = [];
  @Output() courseAction =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  primary = faPencil;
  secondary = faTrashCan;
}
