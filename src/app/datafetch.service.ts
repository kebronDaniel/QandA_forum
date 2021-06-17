import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatafetchService {

  private url = "http://localhost:5000/questions";
  private oneQuestionurl = "http://localhost:5000/question/";
  private allAnswersUrl = "http://localhost:5000/answers/";
  private addQuestionsUrl = "http://localhost:5000/addQuestion/"
  private addAnswerUrl = "http://localhost:5000/addAnswer/";
  private updateAnswerUrl = "http://localhost:5000/updateAnswer/";
  private deleteAnswerUrl = "http://localhost:5000/deleteAnswer/";
  private checkUserAnswersUrl = "http://localhost:5000/checkAnswers/";
  private getMyQuestionsUrl = "http://localhost:5000/myQuestions/";

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

  getMyQuestions(u_id){
    return this.http.get(this.getMyQuestionsUrl + u_id)
      .map(response => response.json());
  }

  getAnswers(id){
    return this.http.get(this.allAnswersUrl + id)
      .map(response => response.json());
  }

  getUserAnswers(q_id, u_id){
    return this.http.get(this.allAnswersUrl + q_id + '/' + u_id)
      .map(response => response.json());
  }

  askQuestion(u_id, value){
    return this.http.post(this.addQuestionsUrl + u_id, value)
      .map(response => response.json());
  }

  addAnswer(q_id,u_id, value){
    return this.http.post(this.addAnswerUrl + q_id + '/' + u_id, value)
      .map(response => response.json());
  }

  updateAnswer(q_id,u_id, value){
    return this.http.put(this.updateAnswerUrl + q_id + '/' + u_id, value)
      .map(response => response.json());
  }


  deleteUserAnswer(q_id, u_id){
    return this.http.delete(this.deleteAnswerUrl + q_id + '/' + u_id)
      .map(response => response.json());
  }

  checkUserAnswer(q_id, u_id){
    return this.http.get(this.checkUserAnswersUrl + q_id + '/' + u_id)
      .map(response => response.json());
  }

}
