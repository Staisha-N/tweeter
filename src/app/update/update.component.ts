import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private userData: UsersDataService, private http: HttpClient, private router: Router, private toastr: ToastrService){}
  
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
      this.toastr.error('Please fill out required fields.', 'Error');
      return;

    } else if(!data.firstName){
      this.toastr.error('Please fill out first name.', 'Error');
      return;

    } else if(!data.lastName){
      this.toastr.error('Please fill out last name', 'Error');
      return;

    } else if(!data.message){
      this.toastr.error('Please fill out a message.', 'Error');
      return;
      
    }

    data.likes = 0;
    data.comments = 0;
    data.shares = 0;
    data.month = this.getCurrentMonth();
    data.day = this.getCurrentDay();

    this.userData.makePost(data)
    .subscribe((res: any)=>{
      this.toastr.success('Post created successfully.', 'Success!');
    });
  }

  goback(){
    this.router.navigate(['home']);
  }
}
