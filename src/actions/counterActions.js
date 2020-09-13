import { INCREMENT, DECREMENT, RESET } from '../types'

export function incrementAsync(i) {
	return (dispatch) => {
		dispatch(increment(i))
		setTimeout(() => {
			// You can invoke sync or async actions with `dispatch`
			dispatch(increment(i))
		}, 3000)
	}
}

export const increment = (i) => ({
	type: INCREMENT,
	payload: i,
})

export const decrement = (i) => ({
	type: DECREMENT,
	payload: i,
})

export const reset = () => ({
	type: RESET,
})
