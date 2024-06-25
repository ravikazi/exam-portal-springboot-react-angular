import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/MyServices/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-u-sidebar',
  templateUrl: './u-sidebar.component.html',
  styleUrls: ['./u-sidebar.component.css']
})
export class USidebarComponent implements OnInit {
  categories = [];
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.getCategories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        Swal.fire("Error!!", "Unable to load Category", "error")
      }
      );
  }
}
