import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatafetchService } from 'app/datafetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions:any[];

  constructor(private datafetch : DatafetchService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.datafetch.getQuestions()
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
