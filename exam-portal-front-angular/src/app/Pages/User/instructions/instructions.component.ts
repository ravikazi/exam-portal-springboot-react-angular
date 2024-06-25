import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  quizId;
  quiz;
  constructor(private _rout:ActivatedRoute, private _quiz:QuizService, private _router:Router) { }

  ngOnInit(): void {
    this.quizId  = this._rout.snapshot.params.quizId;
    this._quiz.getQuiz(this.quizId).subscribe(
      (data:any)=>{
        this.quiz = data;
      },
      (error)=>{
        Swal.fire("Error!!", "Quiz could not be loaded!", "error");
      }
    );

  }

  startQuiz=(quizId)=>{
    Swal.fire({
      title: "Do you want to start the quiz?",
      showCancelButton:true,
      confirmButtonText:'Start',
      icon: "info"
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._router.navigate(['/start/'+quizId])
      }
    });
  }

}
