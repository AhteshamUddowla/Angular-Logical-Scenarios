import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {

  @Input() isAlertVisible:boolean = false
  @Input() message:string = ""
  showAlert:boolean = false

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isAlertVisible){
      this.showAlert = true
    }
    setTimeout(()=>{
      this.showAlert = false
    },2000)
  }

}
