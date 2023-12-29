import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit{
    Name= new FormControl('');
    email= new FormControl('');
 

  user : User;

  constructor (private userService: UserServiceService){
    this.user = new User();
  }

  ngOnInit(): void {
    console.log("starting things");
  }

  DoSubmit(){
    console.log("submitting...");
    let name = this.Name.value;
    let mail = this.email.value;
    let message = "Data is:" + name + " " + mail;
    this.userService.save(this.user).subscribe();
    console.log("Submitted");
    console.log(message)
    this.Name= new FormControl('');
    this.email= new FormControl('');
  }



    
 
}
