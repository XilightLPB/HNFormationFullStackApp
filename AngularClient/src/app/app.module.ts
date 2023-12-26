import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTypeFormComponent,
    UserFormComponent,
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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
