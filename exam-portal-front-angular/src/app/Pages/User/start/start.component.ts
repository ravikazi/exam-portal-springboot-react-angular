import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { QuestionsService } from 'src/app/MyServices/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  quizId;
  questions;

  marksGot = 0;
  correctAnswers = 0;
  attepted = 0;
  isSubmit = false;
  timer:any;

  constructor(private locationSt:LocationStrategy, private _rout:ActivatedRoute, private _question:QuestionsService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizId = this._rout.snapshot.params.quizId;
    this._question.getQuizQuestions(this.quizId).subscribe(
      (data:any)=>{
        this.questions = data;
        this.timer = this.questions.length*2*60;
        this.questions.forEach((q)=>{
          q['givenAnswer']='';
        });
        this.startTimer();
      },
      (error)=>{
        Swal.fire("Error!!", "Something went wrong..we could not load the quiz.", "error"); 
      }
    );
    console.log(this.quizId);
  }

  preventBackButton=()=>{
    history.pushState(null, null, location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, null, location.href);
    });
  }
  submitQuiz=()=>{
    Swal.fire({
      title: "Do you want to submit the quiz?",
      showCancelButton:true,
      confirmButtonText:'Submit',
      icon: "info"
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.evalQuiz();
      }
    }); 
  }

  startTimer=()=>{
    let t:any = window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    }, 1000);
  }

  getFormatedTimer=()=>{
    let mm  = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} Minutes : ${ss} Second`;

  }

  evalQuiz=()=>{
    //Evaluate in serverside
    this._question.evalQuiz(this.questions).subscribe(
      (data:any)=>{
        this.marksGot = data.marksGot;
        this.correctAnswers=data.correctAnswers;
        this.attepted=data.attempted;
      },
      (error)=>{
        console.log(error);
      }
    );
     this.isSubmit = true;
    // this.questions.forEach((q)=>{
    //   if(q.givenAnswer==q.answer){
    //     this.correctAnswers++;
    //     let markSingle =  this.questions[0].quiz.max_marks / this.questions.length;
    //     this.marksGot += markSingle;
    //   }
      
      
    //   if(q.givenAnswer.trim()!=""){
    //     this.attepted++;
    //   }
    // });
  }

}
