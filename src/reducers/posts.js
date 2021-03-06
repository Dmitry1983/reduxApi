import { ADD_POST, EDIT_POST, REMOVE_POST, TOGGLE_POST } from '../types'

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
			return state.map((post) =>
				post.id === action.id ? { ...post, completed: !post.completed } : post
			)
		case REMOVE_POST:
			return state.filter((post) => post.id !== action.id)
		case TOGGLE_POST:
			return state.map((post) =>
				post.id === action.id ? { ...post, completed: !post.completed } : post
			)
		default:
			return state
	}
}
