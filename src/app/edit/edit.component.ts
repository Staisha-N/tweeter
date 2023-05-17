import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { userPost } from '../models/userPost';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  submitted = false;

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

  getUserFormData(data: any){

  }

  goback(){
    this.router.navigate(['home']);
  }
}
