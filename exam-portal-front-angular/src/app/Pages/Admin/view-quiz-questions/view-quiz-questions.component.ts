import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/MyServices/questions.service';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  quizId;
  quizTitle;
  questions;
  constructor(
    private __quiz:QuizService, 
    private __route:ActivatedRoute, 
    private __ques:QuestionsService
  ) { }

  ngOnInit(): void {
    this.quizId = this.__route.snapshot.params.id;
    this.quizTitle = this.__route.snapshot.params.title;
  
    this.__ques.getQuizQuestionsAdmin(this.quizId).subscribe(
      (data:any)=>{
        this.questions = data;
        console.log(this.questions);
      },
      (error)=>{
        Swal.fire("Error!!", "Can't load Question from server!", "error");
      }
    )
  }
  deleteQuestion=(quesId)=>{
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure, you want to delete this question?'
    }).then(
      (result)=>{
        if(result.isConfirmed)
        {
          this.__ques.deleteQuestion(quesId).subscribe(
            (response)=>{
              Swal.fire("Success!!", "Deleted Successfully!", "success");
              this.questions = this.questions.filter((q)=>q.id!=quesId);
            },
            (error)=>{
              Swal.fire("Error!!", "Can't delete question", "error");
            }
          );
        }
      }
    );
  }
}
