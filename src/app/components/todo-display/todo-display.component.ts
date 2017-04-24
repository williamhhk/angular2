import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'acme-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})

export class TodoDisplayComponent implements OnInit {

   tasksToDisplay : Array<Object> ;
  // @Output() taskCompleted = new EventEmitter();
  // @Output() taskDeleted = new EventEmitter();

  constructor(private todoService : TodoService) {
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
    this.tasksToDisplay = this.todoService.getTasks();

  }


  completeTask(index) {
    this.todoService.completeTask(index);
    // this.taskCompleted.emit(index);
    this.tasksToDisplay = this.todoService.getTasks();
  }

  deleteTask(index) {
    // this.taskDeleted.emit(index);
    this.todoService.deleteTask(index);
    this.tasksToDisplay = this.todoService.getTasks();    
  }

  getCompleteButtonText(task) {
    if(task.isComplete)
    {
      return 'Redo';
    }
    return 'Complete';
  }
}
