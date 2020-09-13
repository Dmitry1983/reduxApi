import { CHANGE_FIRST_NAME, CHANGE_SECONDE_NAME } from '../types'

// -  NAMES ACTION CREATERS
export const changeFirstName = (i) => ({
	type: CHANGE_FIRST_NAME,
	payload: i,
})

export const changeSecondeName = (i) => ({
	type: CHANGE_SECONDE_NAME,
	payload: i,
})
