import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import {
	increment,
	decrement,
	reset,
	changeFirstName,
	changeSecondeName,
	addPost,
} from '../actions'

const Application = () => {
	const count = useSelector((state) => state.counter.summ)
	const { firstName, secondeName } = useSelector((state) => state.names)
	const dispatch = useDispatch()
	const store = useStore()
	const [postTitle, setPostTitle] = useState('')
	const [postText, setPostText] = useState('')

	const handlerIncrement = useCallback(() => {
		dispatch(increment(1))
	}, [dispatch])
	const handlerDecrement = useCallback(() => {
		dispatch(decrement(1))
	}, [dispatch])

	const handlerReset = useCallback(() => {
		dispatch(reset())
	}, [dispatch])

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

	const handlerAddPost = useCallback(
		(title, text) => {
			dispatch(addPost(title, text))
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
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 40,
					}}
				>
					<Text>
						Full Name : {firstName} {secondeName}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log(store.getState())}
				>
					<Text style={styles.buttonTitle}>Console.log Redux State</Text>
				</TouchableOpacity>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 40,
					}}
				>
					<Text> Count : </Text>
					<Text>{count}</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<TouchableOpacity
						style={styles.buttonAdd}
						// onPress={() => dispatch(increment(1))}
						onPress={handlerIncrement}
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
				<View style={{ marginTop: 30 }}>
					<TextInput
						style={styles.input}
						value={postTitle}
						onChangeText={(title) => setPostTitle(title)}
						placeholder="Post title"
					/>
					<TextInput
						style={styles.input}
						value={postText}
						onChangeText={(text) => setPostText(text)}
						// multiline
						// numberOfLines={4}
						placeholder="Post text"
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handlerAddPost(postTitle, postText)}
					>
						<Text style={styles.buttonTitle}>Save Post Title</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 40,
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

export default Application
