import { LOAD_DRIVERS, RESET_DRIVERS, ADD_DRIVERS } from '../types'
import axios from 'react-native-axios'

const apiUrl =
	'http://ergast.com/api/f1/drivers.json?callback?limit=30&offset=60'
const headerKey = []

const axiosRequst = axios.create({
	timeout: 1000,
	headers: headerKey,
})

export function loadDriversAsync() {
	return function (dispatch) {
		return axiosRequst
			.get(apiUrl)
			.then((res) => {
				dispatch(loadDrivers(res.data.MRData.DriverTable.Drivers))
			})
			.catch((error) => {
				console.log('Catch error : ' + error) // Ошибка с сервера
			})
	}
}

export const loadDrivers = (drivers) => ({
	type: LOAD_DRIVERS,
	payload: drivers,
})

export const resetDrivers = () => ({
	type: RESET_DRIVERS,
})
