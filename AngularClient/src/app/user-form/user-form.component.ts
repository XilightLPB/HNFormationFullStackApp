import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent{
  FirstName = new FormControl('');
  LastName = new FormControl('');
  email = new FormControl('');
  user : User;
  constructor (private userService: UserServiceService){
    this.user = new User();
  }

  onSubmit(){

    this.userService.save(this.user).subscribe();
  }
}
