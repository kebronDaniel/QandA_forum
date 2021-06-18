import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { DatafetchService } from 'app/datafetch.service';

@Component({
  selector: 'app-my-question-details',
  templateUrl: './my-question-details.component.html',
  styleUrls: ['./my-question-details.component.css']
})
export class MyQuestionDetailsComponent implements OnInit {

  question:string = "";
  answers:any[];
  question_id : number;
  user_id:number;
  serverResponce:string = " ";
  userAnswer:string = "";

  constructor(private datafetch : DatafetchService, 
    private router : Router, 
    private route : ActivatedRoute,
    private authservice : AuthService
  ) { } 

  ngOnInit() {
    let q_id  = +this.route.snapshot.paramMap.get('id');
    this.question_id = q_id;
    this.datafetch.getOneQuestion(q_id)
    .subscribe(
      oneQuestion => {
      this.question = oneQuestion.content
    }, error => { 
      alert('Un expected Error Occured');
      console.log(error); 
    }
    );

    this.datafetch.getAnswers(q_id)
      .subscribe(
        answers => {
          this.answers = answers
        },
        error => { 
          alert('Un expected Error Occured');
          console.log(error); 
        }
      );
      
      this.user_id = this.authservice.getCurrentUser().user_id;

      this.datafetch.getUserAnswer(q_id,this.user_id)
      .subscribe(
        answer => {
          this.userAnswer = answer.content
          console.log(this.userAnswer)
        },
        error => { 
          alert('Un expected Error Occured');
          console.log(error); 
        }
      );
  }

  form = new FormGroup({
    'content': new FormControl('', Validators.required),
  })

  get content(){
    return this.form.get('content');
  }

  giveAnswer(){
    this.user_id = this.authservice.getCurrentUser().user_id;
    let value = this.form.value;
    console.log(value);

    this.datafetch.addAnswer(this.question_id,this.user_id, value)
      .subscribe(
        result => {
        this.question = result
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
      this.router.navigate(['/']);
    // To do: being able to redirect to the home page.
  }

  deleteAnswer(){
    let user_id = this.authservice.getCurrentUser().user_id;
    this.datafetch.deleteUserAnswer(this.question_id,user_id)
    .subscribe(
      result => {
        this.serverResponce = result
    }, error => {
      alert('Un expected Error Occured');
      console.log(error);
    }
    );
    this.router.navigate(['/']);
  }

  canDelete(){
    if(this.userAnswer == undefined){
      return false
    }
    return true
  }
 
}
