import { Injectable, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of, pipe, BehaviorSubject} from "rxjs";
import * as io from 'socket.io-client'

const wsUrl = "http://localhost:4201/"


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
  title?: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contents: BehaviorSubject<Content[]> = new BehaviorSubject<Content[]>([]);
  contentsStorage: Content[] = [];
  socket: SocketIOClient.Socket

  constructor() {
    this.socket = io(wsUrl)
    this.socket.on('contents', (data) => {
      console.log("recieved contents: ", data)
      this.contentsStorage = data
      this.pushNewContent();
    })
   }

  getContents(): Observable<Content[]> {
    return this.contents;
  }

  async addContent(content: Content) {
    content = _.cloneDeep(content)
    this.socket.emit('content', content)
  }

  private pushNewContent() {
    this.contents.next(this.contentsStorage);
  }

  async rmContent(contentId: string) {
    delete this.contentsStorage[contentId];
    this.pushNewContent();
  }
}
