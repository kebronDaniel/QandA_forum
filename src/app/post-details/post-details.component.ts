import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  FirstPost:any[];
  singlePost:any[];
  
  constructor(private service: PostService, private route:ActivatedRoute, private router : Router) { }

  ngOnInit(){
    let id  = +this.route.snapshot.paramMap.get('id');
    this.service.getOnePost(id)
      .subscribe(
        onePost => {
        this.FirstPost = onePost
      }, error => {
        alert('Un expected Error Occured');
        console.log(error); 
      }
      );
  }

  updatePostForm = new FormGroup({
    'title': new FormControl(' ',[Validators.required, Validators.maxLength(20)]),
    'content': new FormControl(' ', Validators.required)
  });

  get title(){
    return this.updatePostForm.get('title');
  }
  get content(){
    return this.updatePostForm.get('content');
  }

  updatePost(){
    let id  = +this.route.snapshot.paramMap.get('id');
    let value = this.updatePostForm.value;
    console.log(value);
    this.service.updatePost(id, value)
      .subscribe(
        updatedPost => {
        this.singlePost = updatedPost
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
  }


  // Handle the response if it does

  deleteOnePost(){
    let id  = +this.route.snapshot.paramMap.get('id');
    this.service.deletePost(id)
      .subscribe(
        response => {
        this.FirstPost = response.json()
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
      this.router.navigate(['']);
  }


}
