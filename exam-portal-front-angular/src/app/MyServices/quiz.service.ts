import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  SERVER_URL =  environment.SERVER_URL
  constructor(private http:HttpClient) { }

  //Load all quizzes
  public loadQuizzes=()=>{
    return this.http.get(`${this.SERVER_URL}/quiz/`);
  }

  // Add Quizes
  public addQuiz=(quiz)=>{
    return this.http.post(`${this.SERVER_URL}/quiz/`, quiz);
  }
  //Delete Quizz
  public deleteQuiz=(quizId)=>{
    return this.http.delete(`${this.SERVER_URL}/quiz/${quizId}`);
  }

  //Get Single Quiz
  public getQuiz=(quizId)=>{
    return this.http.get(`${this.SERVER_URL}/quiz/${quizId}`);
  }

  //Update Quiz
  public updateQuiz=(quiz)=>{
    return this.http.put(`${this.SERVER_URL}/quiz/`,quiz);
  }

  //Quiz By category ID
  public quizByCategoryId=(categoryId)=>{
    return this.http.get(`${this.SERVER_URL}/quiz/category/${categoryId}`)
  }

  //Get Actve Quizzes
  public getActiveQuizzes=()=>{
    return this.http.get(`${this.SERVER_URL}/quiz/active`);
  }

  //Get Active Quizzes of Category
  public getActiveQizzesOfCategory=(categoryId)=>{
    return this.http.get(`${this.SERVER_URL}/quiz/active/${categoryId}`);
  }
}
