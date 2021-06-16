import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    CreatePostComponent,
    PostDetailsComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : '', component : PostsComponent},
      {path: 'login', component : LoginComponent},
      // {path : 'addPost', component : CreatePostComponent},
      // {path : 'postDetails/:id', component : PostDetailsComponent},
      // {path : '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
