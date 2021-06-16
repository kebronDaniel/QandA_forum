import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt';
import { AuthService } from 'app/auth.service';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts:any[];
  user:any[];
  // Define every url route for every function, or else it creates a CORS issue. 


  constructor(private service:PostService, private authservice : AuthService) { }
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

    getToken(){
      let token = localStorage.getItem('token')
      if(!token) return null;

      let decoded = new JwtHelper().decodeToken(token)
      console.log(decoded)
      this.user = decoded.name
    }
  
}
