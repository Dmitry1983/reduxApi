import { CHANGE_FIRST_NAME, CHANGE_SECONDE_NAME } from '../types'

const initialState = {
	firstName: '',
	secondeName: '',
}

export default function names(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case CHANGE_FIRST_NAME:
			return {
				...state,
				firstName: action.payload,
			}
		case CHANGE_SECONDE_NAME:
			return {
				...state,
				secondeName: action.payload,
			}
		default:
			return state
	}
}
