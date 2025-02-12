import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultipleDataFormService } from '../../services/multiple-data-form.service';
import { Constant } from '../../constant/constant';

@Component({
  selector: 'app-multiple-data-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './multiple-data-form.component.html',
  styleUrl: './multiple-data-form.component.css'
})
export class MultipleDataFormComponent {
  isNewDiv:boolean = false
  employeeObj:any = {
    "empId": 0,
    "name": "",
    "contactNo": "",
    "email": "",
    "city": "",
    "state": "",
    "pinCode": "",
    "designation": "",
    "mockEmpRelatives": [ ]
  }

  employeeList:any[] = []
  relativeList:any[] = []

  empRelativeObj:any = {
    "relativeId": 0,
    "name": "",
    "relation": "",
    "age": 0,
    "empId": 0
  }

  constructor(private muldataformSer: MultipleDataFormService) {
    this.getAllEmployee()
  }

  addRelative(){
    const strobj = JSON.stringify(this.empRelativeObj)
    const obj = JSON.parse(strobj)
    this.relativeList.unshift(obj)
    this.empRelativeObj = {
      "relativeId": 0,
      "name": "",
      "relation": "",
      "age": 0,
      "empId": 0
    }
  }

  getAllEmployee(){
    debugger
    this.muldataformSer.getAllEmployee().subscribe((res:any)=>{
        this.employeeList = res.data
    })
  }

  getEmployee(id:number){
    this.muldataformSer.getEmployee(id).subscribe((res:any)=>{
        this.employeeObj = res.data
        this.relativeList = this.employeeObj.mockEmpRelatives
        this.isNewDiv = true
    })
  }

  saveEmployee(){
    debugger
    this.employeeObj.mockEmpRelatives = this.relativeList
    this.muldataformSer.saveEmployee(this.employeeObj).subscribe((res:any) => {
      if(res.result==true){
        alert(res.message)
        this.isNewDiv = false
        this.getAllEmployee()
      }
    })
  }

  updateEmployee(){
    this.employeeObj.mockEmpRelatives = this.relativeList
    this.muldataformSer.updateEmployee(this.employeeObj).subscribe((res:any) => {
      if(res.result==true){
        alert(res.message)
        this.isNewDiv = false
        this.getAllEmployee()
      }
    })
  }

  onClose(){
    this.isNewDiv= !this.isNewDiv
    this.employeeObj = {
      "empId": 0,
      "name": "",
      "contactNo": "",
      "email": "",
      "city": "",
      "state": "",
      "pinCode": "",
      "designation": "",
      "mockEmpRelatives": [ ]
    }
    this.employeeObj.mockEmpRelatives = {
      "relativeId": 0,
      "name": "",
      "relation": "",
      "age": 0,
      "empId": 0
    }
    this.relativeList = []
  }
}
