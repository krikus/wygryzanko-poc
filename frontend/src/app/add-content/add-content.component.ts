import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  newContent: string;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  keydown(event) {
    if (event.key === "Enter" && event.ctrlKey) {
      this.save()
    }
  }

  save() {
    if (this.newContent && this.newContent.length > 0) {
      this.contentService.addContent({ body: this.newContent });
    }
    this.newContent = '';
  }

}
