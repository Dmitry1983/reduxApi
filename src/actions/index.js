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

export const increment = (i) => {
	return {
		type: INCREMENT,
		payload: i,
	}
}

export const decrement = (i) => {
	return {
		type: DECREMENT,
		payload: i,
	}
}

export const reset = () => {
	return {
		type: RESET,
	}
}

// -  NAMES ACTION CREATERS
export const changeFirstName = (i) => {
	return {
		type: CHANGE_FIRST_NAME,
		payload: i,
	}
}

export const changeSecondeName = (i) => {
	return {
		type: CHANGE_SECONDE_NAME,
		payload: i,
	}
}

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
	id: id,
})

export const togglePost = (id) => ({
	type: TOGGLE_POST,
	id,
})

// let nextTodoId = 0
// export const addTodo = text => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }

// export const setVisibilityFilter = filter => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleTodo = id => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }

// export const deleteTodo = id => {
//   return {
//     type: 'DELETE_TODO',
//     id: id
//   }
// }
