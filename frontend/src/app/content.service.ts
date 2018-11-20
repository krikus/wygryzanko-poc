import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of, pipe, BehaviorSubject} from "rxjs";

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


export interface Content {
  id?: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contents: BehaviorSubject<Content[]> = new BehaviorSubject<Content[]>([]);
  contentsStorage: Content[] = [];

  constructor() { }

  getContents(): Observable<Content[]> {
    return this.contents;
  }

  async addContent(content: Content) {
    content = _.cloneDeep(content)
    content.id = guid();
    this.contentsStorage.push(content);
    this.pushNewContent();
    return content;
  }

  private pushNewContent() {
    this.contents.next(this.contentsStorage);
  }

  async rmContent(contentId: string) {
    delete this.contentsStorage[contentId];
    this.pushNewContent();
  }
}
