import { combineReducers } from 'redux'
import counter from './counter'
import names from './names'
import posts from './posts'

export default combineReducers({
	counter,
	names,
	posts,
})
