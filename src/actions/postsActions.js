import { ADD_POST, REMOVE_POST, EDIT_POST, TOGGLE_POST } from '../types'

// -  POSTS ACTION CREATERS
let nextPostId = 0
export const addPost = (title, text) => ({
	type: ADD_POST,
	id: nextPostId++,
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
