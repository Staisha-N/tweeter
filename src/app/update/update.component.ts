import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService){}
  
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

    if (!data){
      return;
      
    } else if(!data.firstName){
      return;
    } else if(!data.lastName){
      return;
    } else if(!data.message){
      return;
    }

    data.likes = 0;
    data.comments = 0;
    data.shares = 0;
    data.month = this.getCurrentMonth();
    data.day = this.getCurrentDay();

    this.http.post('http://localhost:3000/users', data)
    .subscribe((res: any)=>{
      this.toastr.success('Hello world!', 'Toastr fun!');
    });

  }

  goback(){
    this.router.navigate(['home']);
  }
}
