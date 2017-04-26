// counter.ts
import { Action } from '@ngrx/store';

export function todoReducer(state = [] , action : Action) {
	switch (action.type) {
		case 'TODO_TASK_COMPLETED':
			// let taskToComplete = state[action.payload];
			// taskToComplete.isComplete = !taskToComplete.isComplete;
			// return state;	
			return 3;
		default:
			return state;
	}
}