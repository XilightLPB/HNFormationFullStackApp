import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit{

  formGroup: FormGroup = new FormGroup({
    Name: new FormControl('Erwan'),
    email: new FormControl('emaignemontamat@hn-services.fr'),
  });
 

  user : User;

  constructor (private userService: UserServiceService){
    this.user = new User();
  }

  ngOnInit(): void {
    console.log("starting things");
  }

   DoSubmit() {
    console.log('submitting...');
    let values = this.formGroup.value;
    let message = 'Data is:' + values.Name + ' ' + values.email;
    alert(message);
    this.userService.save(values).subscribe();
    console.log('Submitted');
    console.log(message);
    this.formGroup.patchValue({
      Name: '',
      email: '',
    });
  }

  DoTest(){
    console.log("I did get trigger")
  }
}
