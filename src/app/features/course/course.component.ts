import { Component, OnInit, Input } from '@angular/core';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() editable = true;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() creationDate: Date = new Date();
  @Input() duration: number = 0;
  @Input() authors: string[] = [];

  primaryIcon = faTrashCan;
  secondaryIcon = faPencil;

  constructor() {
  }

  ngOnInit(): void {
  }

}
