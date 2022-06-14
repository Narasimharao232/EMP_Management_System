import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addDetailsUsingForm : FormGroup | any
  constructor(private employeeService: EmployeeService, private router: Router) { }

  // employee: Employee = new Employee();

  ngOnInit(): void {
    this.addDetailsUsingForm = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email])
      })
  }
  
  onSubmit(){
    //  console.log(this.addDetailsUsingForm.value)
  this.employeeService.addEmployee(this.addDetailsUsingForm.value).subscribe( error => console.log(error))
  
  this.router.navigate(['employees'])
  
  }

}
