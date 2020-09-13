import { LOAD_DRIVERS, RESET_DRIVERS } from '../types'

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
			// return { ...state, drivers: action.payload }
			return { ...state, drivers: [...action.payload] }

		// case 'LOAD_DRIVERS':
		// 	return {...state.drivers[
		// 		...state, {action.payload}
		// 	]}
		case RESET_DRIVERS:
			// return {
			// 	...state,
			// 	drivers: [],
			// 	// constructors: [],
			// }
			return (state = initialState)
		default:
			return state
	}
}
