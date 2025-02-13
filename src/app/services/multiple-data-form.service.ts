import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class MultipleDataFormService {

  constructor(private http: HttpClient) {}

  getAllEmployee(){
    return this.http.get(`${Constant.API_URL}${Constant.EMPLOYEE_API_METHOD.GET_ALL_EMPLOYEE}`)
  }

  getEmployee(id:number){
    return this.http.get(`${Constant.API_URL}${Constant.EMPLOYEE_API_METHOD.GET_EMPLOYEE}${id}`)
  }

  saveEmployee(employeeObj:any){
    return this.http.post(`${Constant.API_URL}${Constant.EMPLOYEE_API_METHOD.CREATE_EMPLOYEE}`, employeeObj)
  }

  onDelete(id:number){
    debugger
    return this.http.get(`${Constant.API_URL}${Constant.EMPLOYEE_API_METHOD.DELETE_EMPLOYEE}${id}`)
  }

  updateEmployee(employeeObj:any){
    debugger
    return this.http.post(`${Constant.API_URL}${Constant.EMPLOYEE_API_METHOD.UPDATE_EMPLOYEE}`, employeeObj)
  }
}

