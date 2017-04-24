import { Component } from '@angular/core';
import { TodoService } from './services/todo.service'

@Component({
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'TODO List';
  btnNameVariable = 'Test Button 3';

  constructor(private todoService : TodoService) {
  }

  addTask(taskInput : string) {
    this.todoService.addTask(taskInput);

    // this.tasks.push(
    //   {
    //     label : taskInput,
    //     isComplete : false
    //   });   
    // taskInput = '';
  }

  // completeTask(index : number) {
  //   console.log("Completing task " , this.tasks[index]);
  //   let taskToComplete : any = this.tasks[index];
  //   taskToComplete.isComplete = !taskToComplete.isComplete;
  // }

  // deleteTask(index : number) {
  //   console.log(index);
  //   this.tasks.splice(index,1);
  // }
}
