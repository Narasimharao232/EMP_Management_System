import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Employee} from '../../employee';
import {EmployeeService} from '../../services/employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService, private route: ActivatedRoute,private router: Router ) { }
  employee: Employee = new Employee();
  id: any

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data => {
     this.employee=data
    }, error => console.log(error))
  }
  onSubmit(){
    this.id=this.route.snapshot.params['id'];
   this.service.updateEmployee(this.id,this.employee).subscribe()
   this.router.navigate(['employees'])
    //  data =>{
    //     console.log(data)
    //  })
   }

  }

