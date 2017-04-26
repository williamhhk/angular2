import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Store , Action } from  '@ngrx/store';
// payload has a question ?, optional

@Component({
  selector: 'acme-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})

export class TodoDisplayComponent implements OnInit {

   tasksToDisplay : Observable<Array<Object>>;
   //  Can use Observable (base class)
  // @Output() taskCompleted = new EventEmitter();
  // @Output() taskDeleted = new EventEmitter();

 // DI store in here.
  constructor(private todoService : TodoService,
             private store : Store<any>) {
    // This will be capture by the tools.
   }

  ngOnInit() {

    //  This get a reference to the array. Template binding.
    //  The service has a variable member of a list of tasks
    //  Alias for the list of task.

    //  The list is modify in place.
    //  
    //  Now this.taskToDisplay is this.todoSerive.tasks
    //  This is where Redux is use to manage the state.  Immutable state.
    //  Move away from managing stage directly.
    //  Redux on state management.
    //  Advisable to wrap up something you dont write as a service.
    //  Not to depend on thing directly that i dont write.
    //  Treat everything external as exactly as it is.
    //  Angular is an rendering engine.
    //  React does the same thing.
    //  Angular feel heavier, rendering, DI.
    //  Rendering portion is similar.
    //  Observable only in Angular, React can use promises.
    //  
    //  Think of the store as something generic.
    //  Complete Application State
    //  Delete from application state
    //  karma , debug unit test in the browser as they are running.
    //  debugger;


    // this.tasksToDisplay = this.todoService.getTasksObservable();
    // Using Redux store.
    this.tasksToDisplay = this.store.select('todoList');
  }

  completeTask(index) {
    //  Fire off an action
    //  Everyone subscribe to this will get this event.
    this.store.dispatch( {
      type : 'TODO_TASK_COMPLETED',
      payload : index
    })
    this.todoService.completeTask(index);

  }

  deleteTask(index) {
    // this.taskDeleted.emit(index);
    this.store.dispatch( {
      type : 'TODO_TASK_DELETED',
      payload : index
    })    
    this.todoService.deleteTask(index);
  }

  getCompleteButtonText(task) {
    if(task.isComplete)
    {
      return 'Redo';
    }
    return 'Complete';
  }
}
