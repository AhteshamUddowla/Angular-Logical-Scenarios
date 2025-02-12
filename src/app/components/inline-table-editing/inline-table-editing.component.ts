import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-table-editing',
  imports: [CommonModule, FormsModule],
  templateUrl: './inline-table-editing.component.html',
  styleUrl: './inline-table-editing.component.css'
})
export class InlineTableEditingComponent implements OnInit {

  userArray:any[] = []
  oldUserObj:any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.loadAllUsers()
  }

  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.userArray = res
    })
  }

  onEdit(userObj:any){
    this.oldUserObj = JSON.stringify(userObj)
    this.userArray.forEach(element => {
      element.isEdit = false
    })
    userObj.isEdit = true
  }

  onAdd(){
    const obj = {
      "id": 1,
      "name": "",
      "username": "",
      "email": "",
      "phone": "",
      "website": "",
      "isEdit": true
    }
    this.userArray.unshift(obj)
  }

  onUpdate(userObj:any){
    debugger;
    // write api call and send obj
    userObj.isEdit = false
  }

  onCancel(obj:any){
    const oldObj = JSON.parse(this.oldUserObj)
    obj.name = oldObj.name
    obj.username = oldObj.username
    obj.email = oldObj.email
    obj.phone = oldObj.phone
    obj.isEdit = false
  }

  onDelete(obj:any){
    
  }
}
