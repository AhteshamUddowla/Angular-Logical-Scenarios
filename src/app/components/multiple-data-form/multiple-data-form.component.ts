import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultipleDataFormService } from '../../services/multiple-data-form.service';
import { AlertComponent } from '../../reuseable/alert/alert.component';
import { Employee, EmpRelative } from '../../models/class/employee';
import { EmployeeList } from '../../models/interface/employee-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multiple-data-form',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './multiple-data-form.component.html',
  styleUrl: './multiple-data-form.component.css'
})
export class MultipleDataFormComponent implements OnInit, OnDestroy {
  isNewDiv:boolean = false
  isTableLoader:boolean = true
  isApiCallInProgress:boolean = false

  alertMessage:string = ""
  showAlert:boolean = false

  employeeObj:Employee = new Employee()
  empRelativeObj:EmpRelative = new EmpRelative()

  employeeList:EmployeeList[] = []
  relativeList:EmpRelative[] = []

  mySubscription: Subscription [] = []

  constructor(private muldataformSer: MultipleDataFormService) {  }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  addRelative(){
    const strobj = JSON.stringify(this.empRelativeObj)
    const obj = JSON.parse(strobj)
    this.relativeList.unshift(obj)
    this.empRelativeObj = new EmpRelative()
  }

  getAllEmployee(){
    this.isTableLoader = true
    const allEmpSub = this.muldataformSer.getAllEmployee().subscribe((res:any)=>{
        this.employeeList = res.data
        this.isTableLoader = false
    })
    this.mySubscription.push(allEmpSub)
    debugger
  }

  getEmployee(id:number){
    const singleEmpSub = this.muldataformSer.getEmployee(id).subscribe((res:any)=>{
        this.employeeObj = res.data
        this.relativeList = this.employeeObj.mockEmpRelatives
        this.isNewDiv = true
    })
    this.mySubscription.push(singleEmpSub)
  }

  onDelete(id:number){
    debugger
    const isConfirm = confirm("Are you sure you want to delete?")
    if(isConfirm){
      const deleteSub = this.muldataformSer.onDelete(id).subscribe((res:any)=>{
        console.log(res)
        alert(res.message)
        this.getAllEmployee()
      })
      this.mySubscription.push(deleteSub)
    }
  }

  saveEmployee(){
    if(!this.isApiCallInProgress){
      debugger
      this.isApiCallInProgress = true
      this.employeeObj.mockEmpRelatives = this.relativeList
      const saveSub = this.muldataformSer.saveEmployee(this.employeeObj).subscribe((res:any) => {
        this.isApiCallInProgress = false
        if(res.result==true){
          this.alertMessage = "Employee Created Successfully"
          this.showAlert = true
          this.isNewDiv = false
          this.getAllEmployee()
        }
        else{
          this.alertMessage = res.message
          this.showAlert = true
        }
        setTimeout(()=>{
          this.showAlert = false
        },2000)
      })
      this.mySubscription.push(saveSub)
    }
  }

  updateEmployee(){
    if(!this.isApiCallInProgress){
      this.isApiCallInProgress = true
      this.employeeObj.mockEmpRelatives = this.relativeList
      debugger
      const updateSub = this.muldataformSer.updateEmployee(this.employeeObj).subscribe((res:any) => {
        debugger
        this.isApiCallInProgress = false
        if(res.result==true){
          alert(res.message)
          this.isNewDiv = false
          this.getAllEmployee()
        }
      })
      this.mySubscription.push(updateSub)
    }
  }

  onClose(){
    this.isNewDiv= !this.isNewDiv
    this.employeeObj = new Employee()
    this.employeeObj.mockEmpRelatives = []
    this.relativeList = []
  }

  ngOnDestroy(): void {
    debugger
    console.log("OnDestroy", this.mySubscription.length)
    this.mySubscription.forEach(element => {
      element.unsubscribe()
    })
  }
}
