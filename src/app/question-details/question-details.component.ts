import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { DatafetchService } from 'app/datafetch.service';



@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question:string = "";
  answers:any[];
  userAnswer:string = "";
  user = "";
  user_id:number;
  question_id : number;
  serverResponce:string = " ";

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

    // This is to get all the answers of that question
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

    // this is to get the username and id
    this.user = this.authservice.getCurrentUser().name;
    this.user_id = this.authservice.getCurrentUser().user_id;
  

    // This is to get the answers by the user that logged in
    
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

  updateForm = new FormGroup({
    'ucontent': new FormControl('', Validators.required),
  })

  get ucontent(){
    return this.updateForm.get('ucontent');
  }

  updateAnswer(){
    let value = this.updateForm.value;
    console.log(value);

    this.datafetch.updateAnswer(this.question_id,this.user_id, value)
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
  
  checkAnswer(){
    console.log(this.userAnswer)
    if (this.userAnswer === " "){
      return false
    }
    return true
  }
  canDelete(){
    if(this.userAnswer == undefined){
      return false
    }
    return true
  }

}
