import { ADD_POST, EDIT_POST, REMOVE_POST } from '../types'

const initialState = []

export default function counter(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case ADD_POST:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					title: action.title,
					completed: false,
				},
			]
		case EDIT_POST:
			return [...state]
		case REMOVE_POST:
			return state.filter((p) => p.id !== action.id)
		default:
			return state
	}
}

// const todos = (state = [], action) => {
// 	switch (action.type) {
// 	  case 'ADD_TODO':
// 		return [
// 		  ...state,
// 		  {
// 			id: action.id,
// 			text: action.text,
// 			completed: false
// 		  }
// 		];
// 	  case 'TOGGLE_TODO':
// 		return state.map(todo =>
// 			(todo.id === action.id)
// 				? {...todo, completed: !todo.completed}
// 				: todo
// 		);
// 	  case 'DELETE_TODO':
// 		return state.filter(todo => todo.id !== action.id);
// 	  default:
// 		return state
// 	}
//   }

//   export default todos
