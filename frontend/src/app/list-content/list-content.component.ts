import { Component, OnInit } from '@angular/core';
import { ContentService, Content } from '../content.service';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {
  contents: Content[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getContents();
  }

  getContents() {
    this.contentService.getContents().subscribe(contents => {
      console.log('subscribe got called!', contents);
      this.contents = contents;
    });
  }

}
