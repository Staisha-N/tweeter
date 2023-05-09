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
    console.warn(data);
    this.http.post('http://localhost:3000/users', data)
    .subscribe((res: any)=>{
      console.log(this);
    });
  }
}
