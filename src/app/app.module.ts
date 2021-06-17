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
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { DatafetchService } from './datafetch.service';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { MyQuestionDetailsComponent } from './my-question-details/my-question-details.component';




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    CreatePostComponent,
    PostDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuestionDetailsComponent,
    AddQuestionComponent,
    MyQuestionsComponent,
    MyQuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path: 'login', component : LoginComponent},
      {path : 'register', component : RegisterComponent},
      {path : 'question/:id', component : QuestionDetailsComponent},
      {path : 'addQuestion', component : AddQuestionComponent},
      {path : 'myQuestions/question/:id', component : MyQuestionDetailsComponent},
      {path : 'myQuestions', component : MyQuestionsComponent},
      // {path : 'addPost', component : CreatePostComponent},
      // {path : 'postDetails/:id', component : PostDetailsComponent},
      // {path : '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
    AuthService,
    DatafetchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
