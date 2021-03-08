import React, { useState, useCallback } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { loadDriversAsync, loadDrivers, resetDrivers } from '../actions'
import axios from 'react-native-axios'
// to master branch

const apiUrl =
	'http://ergast.com/api/f1/drivers.json?callback?limit=30&offset=0'
//'https://api.weather.yandex.ru/v2/informers?lat=55.75396&lon=37.620393&lang=ru_RU'
const headerKey = {} // { 'X-Yandex-API-Key': 'bc8c9f81-23e4-46e9-95af-1d77ccc59410' }

const xmltoJS = (xml) => {
	let parseString = require('react-native-xml2js').parseString
	let outJSON = ''
	parseString(xml, function (err, result) {
		if (err) {
			// console.log(err.stack)
			outJSON = err.stack
		}
		/// console.log(result)
		outJSON = result
	})
	return outJSON
}

const RaceScreen = () => {
	const Drivers = useSelector((state) => state.races.drivers)
	const dispatch = useDispatch()
	const store = useStore()

	const handlerLoadDriversAsync = useCallback(() => {
		dispatch(loadDriversAsync())
	}, [dispatch])
	const handlerResetDrivers = useCallback(() => {
		dispatch(resetDrivers())
	}, [dispatch])
	// const [result, setResult] = useState(undefined)
	// const [data, setData] = useState([])
	// const axiosRequst = axios.create({
	// 	timeout: 1000,
	// 	headers: headerKey,
	// })

	// const getAxiosRequst = () => {
	// 	axiosRequst
	// 		.get(apiUrl)
	// 		.then((res) => {
	// 			// console.log(res) // Результат ответа от сервера
	// 			setResult(res)
	// 			setData(res.data.MRData.DriverTable.Drivers)
	// 		})
	// 		.catch((error) => {
	// 			console.log('Catch error : ' + error) // Ошибка с сервера
	// 		})
	// }

	const Item = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item} activeOpacity={0.7}>
				<Text style={styles.title}>
					{/* Item: {'\n'} */}
					Name : {item.familyName} {item.givenName} {'\n'}
					Date of birth: {item.dateOfBirth} {'\n'}
					Nationality: {item.nationality} {'\n'}
					{/* URL: {item.url} */}
				</Text>
			</TouchableOpacity>
		)
	}

	return (
		<SafeAreaView style={styles.view}>
			<TouchableOpacity
				style={styles.button}
				// onPress={() => getAxiosRequst()}
				onPress={() => {
					handlerLoadDriversAsync()
				}}
			>
				<Text style={styles.buttonTitle}>axios get</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				//onPress={() => console.log(result.data.MRData.DriverTable.Drivers)}

				onPress={() => {
					handlerResetDrivers()
				}}
			>
				<Text style={styles.buttonTitle}>reset</Text>
			</TouchableOpacity>
			{/* <Text>{result === '' ? result.data.MRData.total : null}</Text> */}
			<View style={styles.container}>
				<FlatList
					data={Drivers}
					renderItem={Item}
					keyExtractor={(key) => key.driverId.toString()} // .toString()
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 40,
		marginTop: 40,
	},
	button: {
		marginTop: 10,
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 8,
		borderColor: 'black',
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonWidth: {
		width: 140,
	},
	rowButton: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18,
	},
	container: {
		marginTop: 10,
		height: 635,
		//backgroundColor: 'green',
	},
	item: {
		paddingLeft: 10,
		justifyContent: 'center',
		borderRadius: 8,
		marginVertical: 8,
		height: 80,
		backgroundColor: '#D0D0D0',
	},
	title: {
		fontSize: 20,
	},
})

export default RaceScreen
