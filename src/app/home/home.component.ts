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
  hidePosts: boolean = true;
  //injected HttpClient service into 
  //the app component

  posts: any [] = [];
  
  constructor(private userData: UsersDataService, private router: Router){}

  showPosts(){
    if (this.hidePosts) {
      this.userData.loadPosts().subscribe((response: any)=>{
        this.posts = response;
      });
      this.hidePosts = !this.hidePosts;
    } else {
      this.posts = [];
      this.hidePosts = !this.hidePosts;
    }
  }
  
  createPost(){
    this.router.navigate(['update']);
  }
}

