import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent implements OnInit {
  categoryId;
  quizzes;
  constructor(private _rout:ActivatedRoute, private _quiz:QuizService) { }

  ngOnInit(): void {
    
    this._rout.params.subscribe(
      (params)=>{
        console.log(params);
        this.categoryId = params.categoryId;
        if(this.categoryId==0)
        {
          this._quiz.getActiveQuizzes().subscribe(
            (data:any)=>{
                this.quizzes = data;
            },
            (error)=>{
              Swal.fire("Error!!", "Could not load data from server", "error")
            }
          );
        }else{
          console.log("Load Specific Quiz");
          this._quiz.getActiveQizzesOfCategory(this.categoryId).subscribe(
            (data:any)=>{
              this.quizzes = data;
            },
            (error)=>{
              Swal.fire("Error!!", "Could not load quizzes", "error");
            }
          );
        }
      }
    )
    
    
  }

}
