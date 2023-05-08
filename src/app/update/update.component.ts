import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private http: HttpClient, private router: Router){}

  getUserFormData(data: any){
    let title = data.title;
    let body = data.body;
    console.warn(data);
    this.http.post('https://jsonplaceholder.typicode.com/posts', {title, body})
    .subscribe((res: any)=>{
      console.log(this);
    });
  }
}
