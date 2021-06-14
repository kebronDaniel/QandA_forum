import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private url = "http://localhost:5000/posts";
  private getOnepostUrl = "http://localhost:5000/posts/";
  private postUrl = "http://localhost:5000/posts/addNew";
  private updatePostUrl = "http://localhost:5000/posts/update/";
  private deletePostUrl = "http://localhost:5000/posts/delete/";

  constructor(private http:Http) { }

  getPosts(){
    return this.http.get(this.url)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  addPost(value){
    return this.http.post(this.postUrl,value)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  getOnePost(id){
    return this.http.get(this.getOnepostUrl + id)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  updatePost(id, value){
    return this.http.put(this.updatePostUrl + id ,value)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  deletePost(id){
    return this.http.delete(this.deletePostUrl + id);
  }

}
