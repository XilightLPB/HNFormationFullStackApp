import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-type-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-type-form-control.component.html',
  styleUrl: './user-type-form-control.component.scss'
})
export class UserTypeFormControlComponent {
  Typename = new FormControl('');

  SendAnswer(){
    
  }

}
