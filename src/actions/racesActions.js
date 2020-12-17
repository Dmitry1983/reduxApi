import { LOAD_DRIVERS, RESET_DRIVERS, LOAD_DRIVERS_SETTINGS } from '../types'
import axios from 'react-native-axios'
import { applyMiddleware } from 'redux'

const apiUrl = 'http://ergast.com/api/f1/drivers?limit='
const headerKey = []

const axiosRequst = axios.create({
	timeout: 3000,
	// headers: headerKey,
})
// let arrDrivers = []

const xmltoJS = (xml) => {
	let parseString = require('react-native-xml2js').parseString
	let outJSON = ''
	parseString(xml.data, function (err, result) {
		if (err) {
			outJSON = err.stack
		}
		outJSON = result
	})
	return outJSON
}
const driversToArray = (drivers, limit) => {
	let arrDrivers = []
	for (let i = 0; i < limit; i++) {
		arrDrivers = [
			...arrDrivers,
			{
				driverId: drivers.Driver[i].$.driverId,
				familyName: drivers.Driver[i].FamilyName[0],
				givenName: drivers.Driver[i].GivenName[0],
				dateOfBirth: drivers.Driver[i].DateOfBirth[0],
				nationality: drivers.Driver[i].Nationality[0],
			},
		]
	}
	return arrDrivers
}

function axiosLoadDrivers(dispatch, limit) {
	return axiosRequst
		.get(apiUrl + limit)
		.then((res) => {
			dispatch(
				loadDrivers(driversToArray(xmltoJS(res).MRData.DriverTable[0], limit))
			)
		})
		.catch((error) => {
			console.log('Catch error : ' + error) // Ошибка с сервера
		})
}

export function loadDriversAsync() {
	return function (dispatch) {
		return axiosLoadDrivers(dispatch, 848)
	}
}

export const loadDrivers = (drivers) => ({
	type: LOAD_DRIVERS,
	payload: drivers,
})

export const resetDrivers = () => ({
	type: RESET_DRIVERS,
})

export const loadDriversSettings = (limit, offset, total) => ({
	type: LOAD_DRIVERS_SETTINGS,
	limit,
	offset,
	total,
})
