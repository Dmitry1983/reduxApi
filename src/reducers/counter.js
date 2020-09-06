import { INCREMENT, DECREMENT, RESET } from '../types'

const initialState = {
	summ: 0,
}

export default function counter(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				summ: state.summ + action.payload,
			}
		case DECREMENT:
			return {
				...state,
				summ: state.summ - action.payload,
			}
		case RESET:
			return {
				...state,
				summ: initialState.summ,
			}
		default:
			return state
	}
}
