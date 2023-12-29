import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserType } from '../user-type';
import { UserTypeServiceService } from '../user-type-service.service';

@Component({
  selector: 'app-user-type-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-type-form-control.component.html',
  styleUrl: './user-type-form-control.component.scss'
})
export class UserTypeFormControlComponent{
  Typename = new FormControl('');
  userType : UserType;

  constructor(private userTypeService : UserTypeServiceService){
    this.userType = new UserType();
  }
  
  SendAnswer(){
    if (this.Typename.value == null){
      this.userType.type = "";
    }
    else {
      this.userType.type = this.Typename.value;
    }

    this.userTypeService.createTypeUser(this.userType);
  }

}
