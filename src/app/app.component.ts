import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-todolist';
  childValue: string=''

  isChildOpen=false
  constructor(){
  console.log("constructor loaded in the compoentns");

    }



    onValueChanged(value: any) {
      this.childValue = value;
      this.isChildOpen=value
    }

    // @HostListener('click',['$event'])
    // show(){
    //   alert("hiiiiiiii guyzzz");
    // }

    childBoxOpen(){
this.isChildOpen=true
    }
  }


