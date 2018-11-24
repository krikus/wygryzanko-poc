import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ListContentComponent } from './list-content/list-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';

const socketIoConfig: SocketIoConfig = { url: 'http://localhost:4201', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    ListContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    SocketIoModule.forRoot(socketIoConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
