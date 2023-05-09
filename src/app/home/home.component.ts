import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'tweeter';
  //injected HttpClient service into 
  //the app component

  posts: any [] = [];
  
  constructor(private userData: UsersDataService, private router: Router){
    
  }

  showPosts(){
    this.userData.loadPosts().subscribe((response: any)=>{
      this.posts = response;
    });
  }
  
  

  createPost(){
    this.router.navigate(['update']);
    // this.http.post('https://jsonplaceholder.typicode.com/posts', {})
    // .subscribe((res: any)=>{
    //   alert(JSON.stringify(res));
    // }, 
    // (error)=> {
    //   alert(JSON.stringify(error))
    // }
    // );
  }
}

