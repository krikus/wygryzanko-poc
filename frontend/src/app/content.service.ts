import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of } from "rxjs";

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const contents = {};

export interface Content {
  id?: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContents(): Observable<Content[]> {
    return of(contents).pipe(contents => _.values(contents));
  }

  async addContent(content: Content) {
    content = _.cloneDeep(content)
    content.id = guid();
    contents[content.id] = content;
    return content;
  }

  async rmContent(contentId: string) {
    delete contents[contentId];
  }
}
