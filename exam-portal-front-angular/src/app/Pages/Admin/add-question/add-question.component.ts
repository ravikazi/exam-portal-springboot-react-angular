import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/MyServices/questions.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  quizId;
  quizTitle;
  question={
    quiz:{
      id:''
    },
    content:'',
    img:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }

  constructor(private _rout:ActivatedRoute, private quesServce:QuestionsService) { }

  ngOnInit(): void {
    this.quizId = this._rout.snapshot.params.quizId;
    this.question.quiz.id = this.quizId;
    this.quizTitle =  this._rout.snapshot.params.quizTitle;
  }

  formSubmit=()=>{
    this.quesServce.addQuestion(this.question).subscribe(
      (response:any)=>{
        Swal.fire("Success!!", "Question Added successfully","success");
        this.question.content = '',
        this.question.option1 = '',
        this.question.option2 = '',
        this.question.option3 = '',
        this.question.option4 = '',
        this.question.answer = ''
      },
      (error)=>{
        Swal.fire("Error!!", "Can't add question to Quiz! Try Again..","error")
      }
    )
  }
}
