import { LOAD_DRIVERS, RESET_DRIVERS, LOAD_DRIVERS_SETTINGS } from '../types'

const initialState = {
	drivers: [],
	driversSettings: { limit: 0, offset: 0, total: 0 },
	constructors: [],
	circuits: [],
	status: [],
}

export default function races(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case LOAD_DRIVERS:
			return { ...state, drivers: [...state.drivers, ...action.payload] }
		case RESET_DRIVERS:
			return (state = initialState)
		case LOAD_DRIVERS_SETTINGS:
			return {
				...state,
				driversSettings: {
					limit: action.limit,
					offset: action.offset,
					total: action.total,
				},
			}
		default:
			return state
	}
}

// [
// 	...state,
// 	{
// 		id: action.id,
// 		text: action.text,
// 		title: action.title,
// 		completed: false,
// 	},
// ]
