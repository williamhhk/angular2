import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'


@Injectable()
export class TodoService {

  tasks : Array <Object> = [];
  taskEmitter : BehaviorSubject <Array<Object>>= new BehaviorSubject([]);

  constructor() { 
    this.addTask('task 1');
    this.addTask('task 2');
    this.addTask('task 3');
    this.taskEmitter.next(this.tasks);
  }

  getTasks() {
//    Dont do this...Do not do this , sloppy design.
//    return this.tasks;
//    Do not give the internal state to people.
//    Copy your own internal variable.
//    return this.tasks;
// Why we return taskEmitter instaed of emit an event.
// Emit event at the function.
    return this.taskEmitter;
  }

  getTasksObservable() {
    return this.taskEmitter;
  }

  addTask(taskInput : string) {
    this.tasks.push(
      {
        label : taskInput,
        isComplete : false
      });   
    this.taskEmitter.next(this.tasks);
  }  

  completeTask(index : number) {
    let taskToComplete : any = this.tasks[index];
    taskToComplete.isComplete = !taskToComplete.isComplete;
    this.taskEmitter.next(this.tasks);
  }

  deleteTask(index : number) {
    this.tasks.splice(index,1);
    this.taskEmitter.next(this.tasks);
  }

}
