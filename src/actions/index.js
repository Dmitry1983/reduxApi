import {
	INCREMENT,
	DECREMENT,
	RESET,
	CHANGE_FIRST_NAME,
	CHANGE_SECONDE_NAME,
	ADD_POST,
	REMOVE_POST,
	EDIT_POST,
	TOGGLE_POST,
} from '../types'

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

// -  NAMES ACTION CREATERS
export const changeFirstName = (i) => ({
	type: CHANGE_FIRST_NAME,
	payload: i,
})

export const changeSecondeName = (i) => ({
	type: CHANGE_SECONDE_NAME,
	payload: i,
})

// -  POSTS ACTION CREATERS
let nextTodoId = 0
export const addPost = (title, text) => ({
	type: ADD_POST,
	id: nextTodoId++,
	title,
	text,
})

export const removePost = (id) => ({
	type: REMOVE_POST,
	id,
})

export const togglePost = (id) => ({
	type: TOGGLE_POST,
	id,
})
export const editPost = (id, title, text) => ({
	type: EDIT_POST,
	id,
	title,
	text,
})

// export const setVisibilityFilter = filter => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
