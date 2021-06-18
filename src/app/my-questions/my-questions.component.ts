import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { DatafetchService } from 'app/datafetch.service';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {

  questions:any[];
  user_id:number;

  constructor(private datafetch : DatafetchService, 
    private route : ActivatedRoute, 
    private router : Router,
    private authservice: AuthService
    ) { }

  ngOnInit() {
    this.user_id = this.authservice.getCurrentUser().user_id;
    this.datafetch.getMyQuestions(this.user_id)
        .subscribe(
          allQuestions => {
          this.questions = allQuestions; // here the allPosts is the mapped object in the service
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
  }

} 
