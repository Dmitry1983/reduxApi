import { combineReducers } from 'redux'
import counter from './counter'
import names from './names'
import posts from './posts'
import races from './races'

export default combineReducers({
	counter,
	names,
	posts,
	races,
})
