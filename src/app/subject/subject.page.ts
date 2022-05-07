import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setSubject(subject) {
    console.log(subject)
    //need to pass subject to the question page so that question page can load correct data
  }

}
