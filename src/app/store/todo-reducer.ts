// counter.ts
import { Action } from '@ngrx/store';

let defaultTask = [
	getTask('Task 1'),
	getTask('Task 2'),
	getTask('Task 3'),
];

function getTask(taskInput : string) {
	return {
		label : taskInput,
		isComplete : false
	}
}

export function todoReducer (state = defaultTask , action : Action)  {
	switch (action.type) {
		case 'TODO_TASK_DELETED':
			let items =  [].concat(state);
			items.splice(action.payload,1);
			return items;
		case 'TODO_TASK_COMPLETED':
			let taskToComplete = state[action.payload];
			taskToComplete.isComplete = !taskToComplete.isComplete;
			return Object.assign(state, taskToComplete);	
		case 'TODO_TASK_ADDED':
			let label = action.payload;
			let task = {
							label : label,
							isComplete : false
						}
			// Array.concat return a new array.
			return state.concat(task);
		default:
			return state;
	}
}