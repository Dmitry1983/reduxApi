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
			return [...state, state.filter((p) => p.id !== action.payload)]
		default:
			return state
	}
}

// case REMOVE_POST:
//       return {
//         ...state,
//         allPosts: state.allPosts.filter(p => p.id !== action.payload),
//         bookedPosts: state.bookedPosts.filter(p => p.id !== action.payload)
//       }
