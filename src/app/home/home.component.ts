import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { ToastrService } from 'ngx-toastr';

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
  
  constructor(private userData: UsersDataService, private router: Router, private toastr: ToastrService){}

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

  deleteItem(post: any){
    this.userData.deletePost(post.id)
        .subscribe(response => {
          this.posts = this.posts.filter(item => item.id !== post.id);
        });
  }
  
  createPost(){
    this.router.navigate(['update']);
  }
}

