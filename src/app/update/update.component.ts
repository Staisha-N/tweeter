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
  
  getCurrentMonth(): string {
    const date = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[date.getMonth()];
  }

  getCurrentDay(): string {
    const date = new Date();
    return date.getDate().toString();
  }

  getUserFormData(data: any){ 
    data.likes = 0;
    data.comments = 0;
    data.shares = 0;
    data.month = this.getCurrentMonth();
    data.day = this.getCurrentDay();

    alert(JSON.stringify(data));
    this.http.post('http://localhost:3000/users', data)
    .subscribe((res: any)=>{
      console.log(this);
    });
  }
}
