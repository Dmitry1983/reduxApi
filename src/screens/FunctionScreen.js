import React, { useCallback, useEffect, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'

const FunctionScreen = () => {
	const randomNamberState = (num) => Math.round(num * Math.random())
	const [number, setNumber] = useState(randomNamberState(1000))
	const handleClick = () => setNumber(randomNamberState(10000))

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<TextInput
					placeholder="123"
					style={{
						borderWidth: 1,
						padding: 10,
						borderRadius: 10,
						fontSize: 16,
						width: '100%',
					}}
					value={number.toString()}
				/>

				<TouchableOpacity
					onPress={handleClick}
					style={{
						marginTop: 20,
						width: 200,
						height: 50,
						backgroundColor: 'grey',
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text>Rundom number</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 40,
		marginTop: 40,
		alignItems: 'center',
	},
})

export default FunctionScreen
