import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	FlatList,
	Alert,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addPost, removePost, togglePost } from '../actions'

const PostScreen = () => {
	const Data = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const store = useStore()
	const [postTitle, setPostTitle] = useState('')
	const [postText, setPostText] = useState('')

	const handlerAddPost = useCallback(
		(title, text) => {
			dispatch(addPost(title, text))
			setPostText('')
			setPostTitle('')
		},
		[dispatch]
	)

	const handlerRemovePost = useCallback(
		(id) => {
			dispatch(removePost(id))
		},
		[dispatch]
	)

	const handlerTogglePost = useCallback(
		(id) => {
			dispatch(togglePost(id))
		},
		[dispatch]
	)
	const Item = ({ item }) => {
		const backgroundColor = (completed) => (completed ? '#88FF4E' : '#FFE6B6')
		return (
			<TouchableOpacity
				style={[
					styles.item,
					{ backgroundColor: backgroundColor(item.completed) },
				]}
				onPress={() => {
					handlerTogglePost(item.id)
				}}
				// onLongPress={() => {
				// 	handlerRemovePost(item.id)
				// }}
				onLongPress={() => {
					removeHandler(item.id)
				}}
			>
				<Text style={styles.title}>
					Titel : {item.title} {item.text}
				</Text>
			</TouchableOpacity>
		)
	}
	const removeHandler = (id) => {
		Alert.alert(
			'Post correction? ',
			'What do you want to do with the post?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Edit',
					style: 'default',
					onPress: () => console.log('Edit Pressed'),
				},
				{
					text: 'Remove',
					style: 'destructive',
					onPress: () => {
						handlerRemovePost(id)
					},
				},
			],
			{ cancelable: false }
		)
	}

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<TextInput
					style={styles.input}
					value={postTitle}
					onChangeText={(title) => setPostTitle(title)}
					placeholder="Title"
				/>
				<TextInput
					style={[styles.input, styles.inputMultiline]}
					value={postText}
					onChangeText={(text) => setPostText(text)}
					multiline
					numberOfLines={4}
					placeholder="Post"
				/>
				<View style={styles.rowButton}>
					<TouchableOpacity
						style={[styles.button, styles.buttonWidth]}
						onPress={() => handlerAddPost(postTitle, postText)}
					>
						<Text style={styles.buttonTitle}>Save Post</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log(store.getState())}
				>
					<Text style={styles.buttonTitle}>Console store.getState()</Text>
				</TouchableOpacity>
				<View style={styles.container}>
					<FlatList
						data={Data}
						renderItem={Item}
						keyExtractor={(key) => key.id.toString()} // .toString()
					/>
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
		height: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'grey',
		fontSize: 18,
		paddingLeft: 10,
		borderRadius: 8,
	},
	inputMultiline: {
		height: 150,
		marginTop: 10,
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
	item: {
		paddingLeft: 10,
		justifyContent: 'center',
		borderRadius: 8,
		marginVertical: 8,
		height: 50,
	},
	title: {
		fontSize: 20,
	},
	container: {
		marginTop: 10,
		height: 400,
	},
})

export default PostScreen
