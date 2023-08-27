import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees:any[]=[
    {name:'Chandu',position:'Developer',address:'Hyderabad',phoneNumber:'12121212'},
    {name:'shreyas',position:'Junior Developer',address:'Sircilla',phoneNumber:'2211334455'},
    {name:'Charan',position:'Automation Tester',address:'Karimnagar',phoneNumber:'3322114422'},
    {name:'Venu',position:' Senior Developer',address:'Banglore',phoneNumber:'5544663322'},
    {name:'Bharath',position:' Developer',address:'Chennai',phoneNumber:'3322114455'},
    {name:'Thirupathi',position:'Manual Tester',address:'Waranagal',phoneNumber:'3421356421'}
  ];
  private employeeSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>(this.employees)
    getEmployees():Observable<any[]>{
      return this.employeeSubject.asObservable();
    }
  constructor() { }
}
