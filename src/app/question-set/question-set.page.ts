import { Component, OnInit } from '@angular/core';
import { QuestionSet } from './question-set.model';
import { QuestionSetService } from './question-set.service';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.page.html',
  styleUrls: ['./question-set.page.scss'],
})
export class QuestionSetPage implements OnInit {
  questionSet: QuestionSet;
  constructor( private questionSetService:QuestionSetService ) { 
    this.questionSet = questionSetService.getQuestions('english')
    //this.questionSet = questionSetService.getQuestions('math')
    console.log(this.questionSet)
  }

  ngOnInit() {
    
  }

}
