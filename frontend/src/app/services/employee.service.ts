import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8080/api/v1/employees";
  getAllEmployees(): Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this.url);
  }
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>("http://localhost:8080/api/v1/employee",employee);
  }
  
  getEmployeeById(id: any) : Observable<any>{
    const ur = `${this.url}/${id}`;
      // return this.http.get<Employee>(ur);
      return this.http.get<Employee>(this.url+"/"+id);
  }

  updateEmployee(id: any, employee: Employee): Observable<any>{
    const ur = `${this.url}/${id}`;
    return this.http.put(ur,employee);
  }

  deleteEmployee(id:any):Observable<any>{
    const ur = `${this.url}/${id}`;
    return this.http.delete(ur);
  }
}
