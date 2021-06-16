import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts:any[];

  // Define every url route for every function, or else it creates a CORS issue. 


  constructor(private service:PostService) { }
    ngOnInit(){
      this.service.getPosts()
        .subscribe(
          allPosts => {
          this.posts = allPosts; // here the allPosts is the mapped object in the service
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
    }
  
}
