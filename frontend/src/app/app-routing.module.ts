import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {MainComponent} from './components/main/main.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {UpdateEmployeeComponent} from './components/update-employee/update-employee.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"employees",component:EmployeeListComponent},
  {path:"home",component:MainComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"update/:id",component:UpdateEmployeeComponent},
  {path:"**", component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
