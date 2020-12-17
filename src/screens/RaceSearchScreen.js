import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	TextInput,
} from 'react-native'
import _ from 'lodash'
import { useSelector } from 'react-redux'

const RaceSearchScreen = () => {
	const [value, onChangeText] = useState('')
	const Drivers = useSelector((state) => state.races.drivers)

	const searchDrivers = _.filter(Drivers, function (item) {
		return (
			item.familyName.toLowerCase().startsWith(value.toLowerCase()) ||
			item.givenName.toLowerCase().startsWith(value.toLowerCase())
		)
	})
	console.log(searchDrivers)
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
		<SafeAreaView style={styles.safeView}>
			<View style={styles.view}>
				<TextInput
					style={[styles.input]}
					onChangeText={(text) => onChangeText(text)}
					value={value}
					placeholder="search race driver"
				/>
				<View style={styles.container}>
					<FlatList
						data={searchDrivers}
						//data={Drivers}
						renderItem={Item}
						keyExtractor={(key) => key.driverId.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeView: {
		flex: 1,
		backgroundColor: 'white',
	},
	view: {
		marginHorizontal: 40,
		marginTop: 20,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		fontSize: 18,
		borderColor: 'grey',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
		padding: 15,
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
		//fontFamily: 'Montserrat-Medium',
	},
	container: {
		marginTop: 10,
		height: 675,
		//backgroundColor: 'green',
	},
	item: {
		paddingLeft: 10,
		justifyContent: 'center',
		borderColor: 'grey',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
		marginVertical: 8,

		height: 80,
		//backgroundColor: '#fffef1',
	},
	title: {
		fontSize: 20,
	},
})

export default RaceSearchScreen
