import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MainComponent } from './components/main/main.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MainComponent,
    AddEmployeeComponent,
    PageNotFoundComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
