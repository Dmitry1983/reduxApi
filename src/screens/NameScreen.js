import React, { useCallback } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { changeFirstName, changeSecondeName } from '../actions'

const NameScreen = () => {
	const count = useSelector((state) => state.counter.summ)
	const { firstName, secondeName } = useSelector((state) => state.names)
	const dispatch = useDispatch()
	const store = useStore()

	const handlerFirstName = useCallback(
		(text) => {
			dispatch(changeFirstName(text))
		},
		[dispatch]
	)

	const handlerSecondeName = useCallback(
		(text) => {
			dispatch(changeSecondeName(text))
		},
		[dispatch]
	)

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<TextInput
					style={styles.input}
					value={firstName}
					//onChangeText={(text) => dispatch(changeFirstName(text))}
					onChangeText={(text) => handlerFirstName(text)}
					placeholder="First Name"
				/>
				<TextInput
					style={styles.input}
					value={secondeName}
					// onChangeText={(text) => dispatch(changeSecondeName(text))}
					onChangeText={(text) => handlerSecondeName(text)}
					placeholder="Seconde Name"
				/>
				<View style={styles.viewCount}>
					<Text>
						Full Name : {firstName} {secondeName}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log(store.getState())}
				>
					<Text style={styles.buttonTitle}>Console store.getState()</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 40,
		marginTop: 40,
	},
	viewCount: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 40,
	},
	input: {
		marginTop: 10,
		height: 50,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: 'grey',
		fontSize: 18,
	},
	button: {
		marginTop: 40,
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 8,
		borderColor: 'black',
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonAdd: {
		width: 100,
		marginTop: 40,
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 8,
		borderColor: 'black',
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18,
	},
})

export default NameScreen
