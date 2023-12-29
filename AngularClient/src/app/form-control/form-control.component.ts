import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  name = new FormControl('');
  email = new FormControl('');
  user : User;
  
  constructor (private userService: UserServiceService){
    this.user = new User();
  }

  SendAnswers() {
    let mail = '';
    let Name ='';
    if (this.email.value == null || this.name.value == null){
      
    }
    else {
      mail = this.email.value;
      Name = this.name.value;
      this.email.reset();
      this.name.reset();
    }
    
    this.user.email = mail;
    this.user.name = Name;

    this.userService.save(this.user);

  }

  
  
  
}
