import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() editable = true;
  @Output() courseAction =  new EventEmitter<string>();
  courseList: any[] = [];
  searchResults: object[] | undefined;

  edit(id: string) {
      this.router.navigate(['courses/edit/:id']);
  }

  show(id: string) {
    this.router.navigate(['courses/:id']);
}

  searchItem(newItem: string) {
    this.searchResults = this.dataService.searchCourse(newItem);
  }

  constructor( private dataService: CoursesStoreService, private userService: UserStoreService, public router: Router ) { }

  ngOnInit(): void {
    this.courseList = this.dataService.getAll() || [];
    this.editable =  this.userService.isAdmin$;
  }

  primary = faPencil;
  secondary = faTrashCan;
}
