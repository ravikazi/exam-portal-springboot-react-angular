import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/MyServices/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [ ];
  constructor(private __category:CategoryService) { }

  ngOnInit(): void {
    this.__category.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire("Error!!", "Error in loading data from sever.","error");
      }
    )
  }


  deleteCategory=(categoryId)=>{
    this.__category.deleteCategory(categoryId).subscribe(
      (response:any)=>{
        //Remove Category from list
        
        Swal.fire("Success!!", "Category Deleted", "success");
      },
      (error)=>{
        Swal.fire("Error!!", "Can't Delete Category", "error");
      }
    );
    
  }

}
