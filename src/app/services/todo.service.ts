import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  tasks : Array <Object> = [];

  constructor() { 
    // this.addTask('task 1');
    // this.addTask('task 2');
    // this.addTask('task 3');
  }

  getTasks() {
//    Dont do this...Do not do this , sloppy design.
//    return this.tasks;
//    Do not give the internal state to people.
//    Copy your own internal variable.
    return this.tasks;
  }

  addTask(taskInput : string) {
    console.log(taskInput);
    this.tasks.push(
      {
        label : taskInput,
        isComplete : false
      });   
    taskInput = '';
  }  

  completeTask(index : number) {
    console.log("Completing task " , this.tasks[index]);
    let taskToComplete : any = this.tasks[index];
    taskToComplete.isComplete = !taskToComplete.isComplete;
  }

  deleteTask(index : number) {
    console.log(index);
    this.tasks.splice(index,1);
  }

}
