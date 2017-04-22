import { Component } from '@angular/core';

@Component({
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'TODO List';
  tasks : Array<string>=[];
  btnNameVariable = 'Test Button 3';

  addTask(taskInput : string) {
    console.log(taskInput);
    this.tasks.push(taskInput);   
    taskInput = '';
  }

  completeTask(index : number) {
    console.log(this.tasks[index].toString());
    
  }

  deleteTask(index : number) {
    console.log(index);
    this.tasks.splice(index,1);
  }
}
