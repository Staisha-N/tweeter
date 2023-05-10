import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  
  
  loadPosts(){
    return this.http.get('http://localhost:3000/users');
  }

  

}
