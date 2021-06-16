import { Component, OnInit } from '@angular/core';
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

  constructor(private datafetch : DatafetchService, 
      private router : Router, 
      private route : ActivatedRoute,
      private authservice : AuthService
    ) { }

  ngOnInit() {
    let q_id  = +this.route.snapshot.paramMap.get('id');
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

    // This is to get the answers by the user that logged in
    
    this.datafetch.getAnswers(q_id,)
      .subscribe(
        answers => {
          this.answers = answers
        },
        error => { 
          alert('Un expected Error Occured');
          console.log(error); 
        }
      );

    // this is to get the username
    let user = this.authservice.getCurrentUser.name.toString;

  } 

}
