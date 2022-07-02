import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPage } from './components/completed/completed.page';
import { NotfoundPage } from './components/notfound/notfound.page';
import { TodoPage } from './components/todo/todo.page';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoPage
  },
  {
    path: 'completed',
    component: CompletedPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
  {
    path: '**',
    component: NotfoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
