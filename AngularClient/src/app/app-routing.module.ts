import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

import { UserEditComponent } from './user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { FormControlComponent } from './form-control/form-control.component';
import { UserTypeFormControlComponent } from './user-type-form-control/user-type-form-control.component';

const routes: Routes = [
  {path:'addUser', component:UserFormComponent},
  {path:'UserEdit/#id', component:UserEditComponent},
  {path:'Users', component:UserListComponent},
  {path:'TypeEdit', component:UserTypeEditComponent},
  {path:'TypeForm', component:UserTypeFormControlComponent},
  {path:'TypeList', component:UserTypeListComponent},
  



  {path:'home', component:FormControlComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
