import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionSetPage } from './question-set.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionSetPage
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionSetPageRoutingModule {}
