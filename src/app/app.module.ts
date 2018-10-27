import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { DoublePipe } from './pipes/double.pipe';
import { PowPipe } from './pipes/pow.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DirectiveFormComponent } from './directive-form/directive-form.component';
import { MyHide } from './directive/myhide.directive';
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TestPipeComponent,
    DoublePipe,
    PowPipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    UsersComponent,
    DirectiveFormComponent,
    MyHide
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path : 'about', component : AboutComponent},
      {path : 'contact', component : ContactComponent},
      {path : 'login', component : LoginComponent},
      {path : 'users/:id1/:id2/:id3', component : UsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
