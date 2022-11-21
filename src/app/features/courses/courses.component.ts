import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() editable = true;
  @Input() courseList: any[] = [];
  @Output() courseAction =  new EventEmitter<string>();

  searchItem(newItem: string) {
    
  }

  constructor(
     private acctivateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acctivateRoute.paramMap.subscribe(
      paramMap => {
        let medium = paramMap.get('medium');
        if (medium?.toLowerCase() === 'all') {
          medium = '';
        }
       // this.getCourses(medium)
      }
    );
  }

  primary = faPencil;
  secondary = faTrashCan;
}
