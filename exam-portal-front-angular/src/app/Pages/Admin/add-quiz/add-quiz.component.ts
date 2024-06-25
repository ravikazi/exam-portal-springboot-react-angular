import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/MyServices/category.service';
import { QuizService } from 'src/app/MyServices/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quiz={
    title:'',
    description:'',
    max_marks:'',
    number_of_questions:'',
    published:false,
    category:{
      id:''
    }
  }

  categories = [];
  constructor(private __quiz:QuizService, private __category:CategoryService) { }

  ngOnInit(): void {
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

    if(this.quiz.title.trim()=="" || this.quiz.title.trim()==null)
    {
      Swal.fire("Error!!", "title is Empty!", "error");
      return
    }

    if(this.quiz.description.trim()=="" || this.quiz.description.trim()==null)
    {
      Swal.fire("Error!!", "description is Empty!", "error");
      return
    }

    if(this.quiz.max_marks.trim()=="" || this.quiz.max_marks.trim()==null)
    {
      Swal.fire("Error!!", "max marks is Empty!", "error");
      return
    }

    if(this.quiz.number_of_questions.trim()=="" || this.quiz.number_of_questions.trim()==null)
    {
      Swal.fire("Error!!", "number of questions is Empty!", "error");
      return
    }

    // if(this.quiz.category.id.trim()=="" || this.quiz.category.id.trim()==null)
    // {
    //   Swal.fire("Error!!", "Select any Category!", "error");
    //   return
    // }

    this.__quiz.addQuiz(this.quiz).subscribe(
      (response:any)=>{
        this. quiz={
          title:'',
          description:'',
          max_marks:'',
          number_of_questions:'',
          published:false,
          category:{
            id:''
          }
        }
        Swal.fire("Success!!", "Quiz added successfully", "success");
      },
      (error)=>{
        Swal.fire("Error!!", "Quiz can't be added.", "error");
      }
    )

   }

}
