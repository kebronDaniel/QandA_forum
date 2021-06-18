import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
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
import { AuthGuardService } from './auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuestionDetailsComponent,
    AddQuestionComponent,
    MyQuestionsComponent,
    MyQuestionDetailsComponent,
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
      {path : 'question/:id', component : QuestionDetailsComponent,canActivate: [AuthGuardService]},
      {path : 'addQuestion', component : AddQuestionComponent,canActivate: [AuthGuardService]},
      {path : 'myQuestions/question/:id', component : MyQuestionDetailsComponent,canActivate: [AuthGuardService]},
      {path : 'myQuestions', component : MyQuestionsComponent, canActivate: [AuthGuardService]},
    ])
  ],
  providers: [
    AuthService,
    DatafetchService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
