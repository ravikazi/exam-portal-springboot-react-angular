import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  SERVER_URL = environment.SERVER_URL;
  constructor(private _http:HttpClient) { }

  public getQuizQuestionsAdmin=(quizId)=>{
    return this._http.get(`${this.SERVER_URL}/question/quiz/all/${quizId}`);
  }

  public getQuizQuestions=(quizId)=>{
    return this._http.get(`${this.SERVER_URL}/question/quiz/${quizId}`);
  }

  public addQuestion=(question)=>{
    return this._http.post(`${this.SERVER_URL}/question/`, question);
  }

  public deleteQuestion=(quesId)=>{
    return this._http.delete(`${this.SERVER_URL}/question/${quesId}`);
  }

  public updateQuestion=(question)=>{
    return this._http.put(`${this.SERVER_URL}`, question);
  }

  //Evaluate Quiz
  public evalQuiz=(questions)=>{
    return this._http.post(`${this.SERVER_URL}/question/eval-quiz`,questions)
  }
}
