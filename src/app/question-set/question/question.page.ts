import { Component, OnInit } from '@angular/core';

import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gradeQuestion(question: Question, userChoice: string){
    if(question.choices[0].value == userChoice)
      return true;
    else
      return false;
  }
}
