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

  makePost(data: any){
    return this.http.post('http://localhost:3000/users', data);
  }

  deletePost(id: any){
    return this.http.delete('http://localhost:3000/users'+'/'+id);
  }

  editPost(id: any, data: any){
    return this.http.put('http://localhost:3000/users'+'/'+id, data);
  }

  getOnePost(id:any){
    return this.http.get('http://localhost:3000/users'+'/'+id);
  }

}
