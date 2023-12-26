import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
[x: string]: any;
  UsersList: User[] =[];

  constructor(private userService: UserServiceService){}

  ngOnInit(){
    this.userService.getAll().subscribe(data => {this.UsersList = data;});

    
  }
}
