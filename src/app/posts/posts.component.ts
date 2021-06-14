import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:any[];
  singlePost:any[];
  FirstPost:any[];

  // Define every url route for every function, or else it creates a CORS issue. 


  constructor(private service:PostService) {
    service.getPosts()
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
    this.service.addPost(value)
      .subscribe(response => {
        this.singlePost = response.json()
      });
    return value;
    // To do: being able to redirect to the home page.
  }



  getSinglePost(){
    this.service.getOnePost()
      .subscribe(response => {
        this.FirstPost = response.json()
      });
  }

  // This only updates the post that you have supplied right next to the put methods url
  
  updatePostForm = new FormGroup({
    'title': new FormControl(' ',[Validators.required, Validators.maxLength(20)]),
    'content': new FormControl(' ', Validators.required)
  });

  updatePost(){
    let value = this.updatePostForm.value;
    console.log(value);
    this.service.updatePost(value)
      .subscribe(response => {
        this.singlePost = response.json()
      });
    return value;
    // To do: being able to redirect to the home page.
  }


  // This only deletes the item next to the delete items url.
  deleteOnePost(){
    this.service.deletePost()
      .subscribe(response => {
        this.FirstPost = response.json()
      });
      // this.testTitle = this.FirstPost['title'];
      // this.testComponent = this.FirstPost['content'];
  }

}
