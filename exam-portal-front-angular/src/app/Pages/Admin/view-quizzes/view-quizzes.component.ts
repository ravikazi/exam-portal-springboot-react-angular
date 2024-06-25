import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes=[];
  constructor(private __quiz:QuizService) { }

  ngOnInit(): void {
    this.__quiz.loadQuizzes().subscribe(
      (data:any)=>{
        this.quizzes = data;
      },
      (error)=>{
        Swal.fire("Error!!", "Can't load Quizzes", "error")
      }
    );
  }

  deleteQuiz=(quizId)=>{
    Swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.__quiz.deleteQuiz(quizId).subscribe(
          (response:any)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.id!=quizId)
            Swal.fire("Success!!", "Quiz deleted successfully!", "success");
          },
          (error)=>{
            Swal.fire("Error!!","Something went wrong, can't deleted.","error");
          }
        );
      }
    });
  }
}
