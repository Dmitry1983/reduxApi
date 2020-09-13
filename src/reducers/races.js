import { LOAD_DRIVERS, ADD_DRIVERS, RESET_DRIVERS } from '../types'

const initialState = {
	drivers: [],
	constructors: [],
	circuits: [],
	status: [],
}

export default function races(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case LOAD_DRIVERS:
			return state
		case ADD_DRIVERS:
			return state
		case RESET_DRIVERS:
			return state
		default:
			return state
	}
}
