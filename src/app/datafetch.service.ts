import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatafetchService {

  private url = "http://localhost:5000/questions";
  private oneQuestionurl = "http://localhost:5000/question/";
  private allAnswers = "http://localhost:5000/answers/";

  constructor(private http : Http) { }


  getQuestions(){
    return this.http.get(this.url)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  getOneQuestion(id){
    return this.http.get(this.oneQuestionurl + id)
      .map(response => response.json());
  }

  getAnswers(id){
    return this.http.get(this.allAnswers + id)
      .map(response => response.json());
  }

  

}
