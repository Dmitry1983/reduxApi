import { LOAD_DRIVERS, RESET_DRIVERS, LOAD_DRIVERS_SETTINGS } from '../types'
import axios from 'react-native-axios'
import { applyMiddleware } from 'redux'

// const apiUrl = 'http://ergast.com/api/f1/drivers.json?callback?limit=30&offset='
const apiUrl = 'http://ergast.com/api/f1/drivers?limit='
const headerKey = []

const axiosRequst = axios.create({
	timeout: 3000,
	// headers: headerKey,
})
let arrDrivers = []
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

function axiosLoadDrivers(dispatch, limit) {
	return axiosRequst
		.get(apiUrl + limit)
		.then((res) => {
			//console.log(xmltoJS(res))
			// console.log(res)
			let resJSON = xmltoJS(res)
			let drivers = resJSON.MRData.DriverTable[0]
			for (let i = 0; i < limit; i++) {
				// выведет 0, затем 1, затем 2
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

			console.log(arrDrivers)
			// console.log(resJSON.MRData.$.total)
			// console.log(resJSON.MRData.DriverTable[0].Driver[9].$.driverId)
			// console.log(resJSON.MRData.DriverTable[0].Driver[9].FamilyName[0])
			// console.log(resJSON.MRData.DriverTable[0].Driver[9].GivenName[0])
			// console.log(resJSON.MRData.DriverTable[0].Driver[9].DateOfBirth[0])
			// console.log(resJSON.MRData.DriverTable[0].Driver[9].Nationality[0])

			// dispatch(loadDrivers(res.data.MRData.DriverTable.Drivers))
			dispatch(loadDrivers(arrDrivers))
			// dispatch(
			// 	loadDriversSettings(
			// 		res.data.MRData.limit,
			// 		res.data.MRData.offset,
			// 		res.data.MRData.total
			// 	)
			// )
			// setTimeout(() => {}, 2000)
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

// export function loadDriversAsync() {
// 	return function (dispatch) {
// 		return axiosRequst
// 			.get(apiUrl + '30')
// 			.then((res) => {
// 				dispatch(loadDrivers(res.data.MRData.DriverTable.Drivers))
// 				dispatch(
// 					loadDriversSettings(
// 						res.data.MRData.limit,
// 						res.data.MRData.offset,
// 						res.data.MRData.total
// 					)
// 				)
// 			})
// 			.catch((error) => {
// 				console.log('Catch error : ' + error) // Ошибка с сервера
// 			})
// 	}
// }

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
