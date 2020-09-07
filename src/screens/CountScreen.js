import React, { useCallback } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { increment, decrement, reset, incrementAsync } from '../actions'

const CountScreen = () => {
	const count = useSelector((state) => state.counter.summ)
	const dispatch = useDispatch()
	const store = useStore()

	const handlerIncrement = useCallback(() => {
		dispatch(increment(1))
	}, [dispatch])
	const handlerIncrementAsync = useCallback(() => {
		dispatch(incrementAsync(1))
	}, [dispatch])
	const handlerDecrement = useCallback(() => {
		dispatch(decrement(1))
	}, [dispatch])

	const handlerReset = useCallback(() => {
		dispatch(reset())
	}, [dispatch])

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<View style={styles.viewCount}>
					<Text> Count : </Text>
					<Text>{count}</Text>
				</View>
				<View style={styles.rowButton}>
					<TouchableOpacity
						style={styles.buttonAdd}
						// onPress={() => dispatch(increment(1))}
						//onPress={handlerIncrement}
						onPress={handlerIncrementAsync}
					>
						<Text style={styles.buttonTitle}>Add</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.buttonAdd}
						// onPress={() => dispatch(decrement(1))}
						onPress={handlerDecrement}
					>
						<Text style={styles.buttonTitle}>Sub</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.buttonAdd}
						//onPress={() => dispatch(reset())}
						onPress={handlerReset}
					>
						<Text style={styles.buttonTitle}>Reset</Text>
					</TouchableOpacity>
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
	rowButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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

export default CountScreen
