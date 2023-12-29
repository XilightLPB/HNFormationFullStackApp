import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { UserListComponent } from './user-list/user-list.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from './user-service.service';


@NgModule({
  declarations: [
    AppComponent,
 
    
    UserListComponent,
    UserTypeListComponent,
    UserTypeEditComponent,
    UserEditComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
  ],
  providers: [
    provideClientHydration(),
    UserServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
