import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:any[];
  singlePost:any[];
  FirstPost:any[];
  testTitle = "";
  testComponent = "";

  // Define every url route for every function, or else it creates a CORS issue. 
  private url = "http://localhost:5000/posts";
  private getOnepostUrl = "http://localhost:5000/posts/"
  private postUrl = "http://localhost:5000/posts/addNew"
  private updatePostUrl = "http://localhost:5000/posts/update/"

  constructor(private http:Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
    });
  }

  postForm = new FormGroup({
    'title': new FormControl(' ',[Validators.required, Validators.maxLength(20)]),
    'content': new FormControl(' ', Validators.required)
  });

  get title(){
    return this.postForm.get('title');
  }
  get content(){
    return this.postForm.get('content');
  }

  post(){
    let value = this.postForm.value;
    console.log(value);
    this.http.post(this.postUrl,value)
      .subscribe(response => {
        this.singlePost = response.json()
      });
    return value;
    // To do: being able to redirect to the home page.
  }


  getOnePost(){
    this.http.get(this.getOnepostUrl + 2)
      .subscribe(response => {
        this.FirstPost = response.json()
      });
      // this.testTitle = this.FirstPost['title'];
      // this.testComponent = this.FirstPost['content'];
  }

  updatePostForm = new FormGroup({
    'title': new FormControl(' ',[Validators.required, Validators.maxLength(20)]),
    'content': new FormControl(' ', Validators.required)
  });

  updatePost(){
    let value = this.updatePostForm.value;
    console.log(value);
    this.http.put(this.updatePostUrl + 2 ,value)
      .subscribe(response => {
        this.singlePost = response.json()
      });
    return value;
    // To do: being able to redirect to the home page.
  }

}
