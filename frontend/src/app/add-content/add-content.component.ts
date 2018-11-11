import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  newContent: string;

  constructor() { }

  ngOnInit() {
  }
  save() {
    alert(this.newContent);
    this.newContent = '';
  }

}
