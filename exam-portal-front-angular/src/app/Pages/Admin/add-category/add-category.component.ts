import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/MyServices/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:''
  }
  constructor(private __category:CategoryService) { }

  ngOnInit(): void {
  }

  formSubmit=()=>{

    if(this.category.title.trim()=="" || this.category.title.trim()==null)
    {
      Swal.fire("Error!!", "Title is Empty!", "error");
      return
    }

    if(this.category.description.trim()=="" || this.category.description.trim()==null)
    {
      Swal.fire("Error!!", "Description is Empty!", "error");
      return
    }

    this.__category.addCategory(this.category).subscribe(
      (response:any)=>{
        this.category.title = '';
        this.category.description = '';
        Swal.fire("Success!!", "Category added successfully", "success");
      },
      (error)=>{
        Swal.fire("Error!!", "Category can't be added.", "error");
      }
    )

  }

}
