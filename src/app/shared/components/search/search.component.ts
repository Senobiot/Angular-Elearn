import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput = '';
  @Input() placeholder: string = 'Text';
  @Output() searchText = new EventEmitter<string>();

  search(value: string) {
    this.searchText.emit(value);
  }

  ngOnInit(): void {
  }
}
