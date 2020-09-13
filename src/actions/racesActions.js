import { LOAD_DRIVERS, RESET_DRIVERS, ADD_DRIVERS } from '../types'
import axios from 'react-native-axios'

const apiUrl =
	'http://ergast.com/api/f1/drivers.json?callback?limit=30&offset=0'
const headerKey = {}

const axiosRequst = axios.create({
	timeout: 2000,
	headers: headerKey,
})

let drivers = []

const getAxiosRequst = () => {
	axiosRequst
		.get(apiUrl)
		.then((res) => {
			console.log(res) // Результат ответа от сервера
			// setResult(res)
			// setData(res.data.MRData.DriverTable.Drivers)
			drivers = res.data.MRData.DriverTable.Drivers
		})
		.catch((error) => {
			console.log('Catch error : ' + error) // Ошибка с сервера
		})
}
export function loadDriversAsync() {
	return (dispatch) => {
		dispatch(getAxiosRequst())
		dispatch(loadDrivers())
	}
}

export const loadDrivers = () => ({
	type: LOAD_DRIVERS,
	payload: drivers,
})

// export function incrementAsync(i) {
// 	return (dispatch) => {
// 		dispatch(increment(i))
// 		setTimeout(() => {
// 			// You can invoke sync or async actions with `dispatch`
// 			dispatch(increment(i))
// 		}, 3000)
// 	}
// }

// export const increment = (i) => ({
// 	type: INCREMENT,
// 	payload: i,
// })
