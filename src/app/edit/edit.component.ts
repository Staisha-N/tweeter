import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { userPost } from '../models/userPost';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private userData: UsersDataService, private router: Router, 
    private toastr: ToastrService, private route: ActivatedRoute){

  }

  id: any;
  post = new userPost();

  ngOnInit(): void {
    //getting id from URL
    this.route.paramMap.subscribe(
      params => this.id = params.get('id')
    );
    
    //using service:
    this.loadData();
  }

  loadData(){
    this.userData.getOnePost(this.id).subscribe(
      data => this.post = data as userPost
    )
  }

  saveChanges(f:NgForm){
    if (!f.value){
      this.toastr.error('Please fill out required fields.', 'Error');
      return;

    } else if(!f.value.firstName){
      this.toastr.error('Please fill out first name.', 'Error');
      return;

    } else if(!f.value.lastName){
      this.toastr.error('Please fill out last name', 'Error');
      return;

    } else if(!f.value.message){
      this.toastr.error('Please fill out a message.', 'Error');
      return;
      
    } 

    this.userData.editPost(this.id, f.value).subscribe(
      data => {
        this.toastr.success('Post updated successfully.', 'Success!');
      }
    )
  }

  goback(){
    this.router.navigate(['home']);
  }
}
