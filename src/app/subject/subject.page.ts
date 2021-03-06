import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setSubject(subject) {
    this.router.navigate(['/question-set'], { state: { data: { subject } } })
  }

}
