import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  questions = history.state.data.question


  constructor() { }

  ngOnInit() {
    console.log(this.questions)
    console.log(this.questions[0].choices[0].value)
  }

  submit() {

  }
}
