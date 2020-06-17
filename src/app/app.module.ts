import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddComponent } from './components/student/add/add.component';
import { DetailsComponent } from './components/student/details/details.component';
import { ListComponent } from './components/student/list/list.component';
import { HighlightStudentDirective } from './derectives/highlight-student.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StudentService } from './services/student.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    DetailsComponent,
    ListComponent,
    HighlightStudentDirective,
    FilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService,UserService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
