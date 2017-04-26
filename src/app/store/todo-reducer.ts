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

export const todoReducer = (state = defaultTask , action : Action) => {
	switch (action.type) {
		case 'TODO_TASK_COMPLETED':
			// let taskToComplete = state[action.payload];
			// taskToComplete.isComplete = !taskToComplete.isComplete;
			// return state;	
			return 3;
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