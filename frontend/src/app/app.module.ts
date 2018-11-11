import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ListContentComponent } from './list-content/list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    ListContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
