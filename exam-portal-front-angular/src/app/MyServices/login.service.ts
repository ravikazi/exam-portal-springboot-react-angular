import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER_URL = environment.SERVER_URL;
  constructor(private http:HttpClient) { }

  public loginStatusSubbject = new Subject<boolean>();
  //Generate Token
  public generateToken=(loginData:any)=>{
    return this.http.post(`${this.SERVER_URL}/generate-token`,loginData);
  }

    //Get Current logged in User
    public getCurrentLoggedInUser=()=>{
      return this.http.get(`${this.SERVER_URL}/current-user`);
    }
  //LoginUser: Set token in local storage
  public loginUser=(token)=>{
    localStorage.setItem("token",token);
    return true;
  }

  //Check user is loggedin or not
  public isLoggedIn=()=>{
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr==null || tokenStr=="")
    {
      return false;
    }else{
      return true; 
    }
  }

  //Logout: Remove token from localStorage
  public logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //Get token from localStorage
  public getToken=()=>{
    return localStorage.getItem("token");
  }

  //Set user details
  public setUser=(user:any)=>{
    localStorage.setItem("user", JSON.stringify(user));
  }

  //Get User details
  public getUser=()=>{
    let userStr = localStorage.getItem("user");
    if(userStr=="" || userStr==null || userStr==undefined)
    {
      this.logout();
      return null;
    }else{
      return JSON.parse(userStr);
    }
  }

  //Get User Role
  public getUserRole=()=>{
    let userDetail = this.getUser();
    return userDetail.authorities[0].authority;
  }
}
