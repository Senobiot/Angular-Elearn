import { Component } from '@angular/core';

declare const mockedCourseList: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';

  editable = true;
  courseList = mockedCourseList;

  state = {
    isLogined: true,
    userName: 'Aliaksandr Kulik',
    addedCourses: 0,
  }

  loginState = this.state.isLogined ? 'logout' : 'login';
  userName = this.state.isLogined ? this.state.userName : '';
  infoTitle = this.state.addedCourses ? '' : 'Your List is Empty';
  infoText = this.state.addedCourses ? '' : 'Please use "Add new Course Button" to add your first course';
  infoButtonText = 'Add New Course';
}
