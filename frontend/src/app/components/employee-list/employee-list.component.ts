import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import {EmployeeService} from '../../services/employee.service';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(){
    this.empService.getAllEmployees().subscribe(data =>{
      this.employees=data;
      // console.log(data)
    })
  }
  navigate(id1:any)
  {
    this.router.navigate(['update',id1])
  }
  deleteEmp(id: any)
  {
    this.empService.deleteEmployee(id).subscribe( data =>{
      this.getEmployeeList()
    }
      
    );
    
  }

}
