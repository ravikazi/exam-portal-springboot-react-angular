import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/MyServices/category.service';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  quizId = 0;
  quiz;
  categories = [];
  constructor(private __rout:ActivatedRoute, private _quizService:QuizService, private __category:CategoryService, private _router:Router) { }

  ngOnInit(): void {
    this.quizId = this.__rout.snapshot.params.quizId;
    this._quizService.getQuiz(this.quizId).subscribe(
      (data:any)=>{
        this.quiz=data;
        console.log(this.quiz);
      },
      (error)=>{
        Swal.fire("Success!!", "Can't load data from server!", "error")
      }
    );
    this.__category.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire("Error!!", "Unable to load Categories from Server.","error");
      }
    );
  }

  formSubmit=()=>{
    this._quizService.updateQuiz(this.quiz).subscribe(
      (response:any)=>{
        Swal.fire("Success!!", "Updated successfully!", "success").then((e)=>{
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error)=>{
        Swal.fire("Error!!", "Can't update quiz!", "error");
      }
    );
  }

}
