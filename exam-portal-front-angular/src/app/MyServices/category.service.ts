import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  SERVER_URL = environment.SERVER_URL;
  constructor(private http:HttpClient) { }

  //Load all categorries
  public getCategories=()=>{
    return this.http.get(this.SERVER_URL+'/category/');
  }

  //Add new category
  public addCategory=(category)=>{
    return this.http.post(this.SERVER_URL+'/category/', category);
  }

  //Delete Category
  public deleteCategory=(categoryId)=>{
    return this.http.delete(`${this.SERVER_URL}/category/${categoryId}`);
  }
  
}
