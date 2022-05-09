import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  //subject: Subject;
  constructor() { }

  public getProducts(subjectMatter : string) { 
    fetch(`./assets/${subjectMatter}.json`).then(res => res.json())
    .then(json => {
     // this.data = json;
    });
  }
}
}
