import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { DatafetchService } from 'app/datafetch.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {

  question:any[];
  user = "";
  user_id:number;

  constructor(private router: Router, 
      private authservice : AuthService, 
      private datafetch : DatafetchService
    ) { }

  ngOnInit() {
  }

  form = new FormGroup({
    'about': new FormControl('', Validators.required),
    'content': new FormControl('', Validators.required),
  })

  get content(){
    return this.form.get('content');
  }
  get about(){
    return this.form.get('about');
  }


  ask(){
    let value = this.form.value;
    console.log(value);

    this.user = this.authservice.getCurrentUser().name;
    this.user_id = this.authservice.getCurrentUser().user_id;

    this.datafetch.askQuestion(this.user_id, value)
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

}
