import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component {
res:number=0;

onSend1(myvalue:any){
 console.log("value is myvalue =>" +myvalue)
}

onAddition(num1:any,num2:any){
let n1=+num1;
let n2=+num2;

//this.res=num1+num2;
this.res=n1+n2;
}
