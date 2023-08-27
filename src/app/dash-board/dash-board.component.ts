import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
employees:any[]=[];
constructor(private employeeService:EmployeeService){}
ngOnInit(){
  this.employeeService.getEmployees().subscribe((data)=>{
    this.employees=data;
  });
}
}
