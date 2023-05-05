import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tweeter';
  //injected HttpClient service into 
  //the app component
  
  constructor(private http: HttpClient){}
  
  posts: any [] = [];
  
  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((response: any)=>{
      this.posts = response;
    });
  }

  createPost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {})
    .subscribe((res: any)=>{
      alert(JSON.stringify(res));
    }, 
    (error)=> {
      alert(JSON.stringify(error))
    }
    );
  }
}
