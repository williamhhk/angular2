// counter.ts
import { Action } from '@ngrx/store';

export function userReducer (state = { hello : 'John'} , action : Action)  {
	switch (action.type) {
		default:
			return state;
	}
}