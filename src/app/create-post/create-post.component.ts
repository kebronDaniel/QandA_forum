import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  singlePost:any[];

  constructor(private service : PostService, private router : Router) { }

  ngOnInit() {
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
    this.service.addPost(value)
      .subscribe(
        newPost => {
        this.singlePost = newPost
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
      this.router.navigate(['']);
    // To do: being able to redirect to the home page.
  }

}
