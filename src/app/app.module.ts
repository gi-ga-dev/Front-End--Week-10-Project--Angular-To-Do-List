import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPage } from './components/todo/todo.page';
import { CompletedPage } from './components/completed/completed.page';
import { NotfoundPage } from './components/notfound/notfound.page';
import { AddComponent } from './components/todo/add/add.component';
import { ListComponent } from './components/todo/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletedPage,
    NotfoundPage,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
