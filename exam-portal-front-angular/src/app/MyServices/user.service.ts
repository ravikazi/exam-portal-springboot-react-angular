import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL = environment.SERVER_URL;
  constructor(
    private http:HttpClient
  ) { }
  //Add user
  public addUser(user:any)
  {
    return this.http.post(`${this.SERVER_URL}/user/`,user);
  }
}
