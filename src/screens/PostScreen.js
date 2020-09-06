import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	FlatList,
} from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addPost, removePost } from '../actions'

const PostScreen = () => {
	let Data = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const store = useStore()
	const [postTitle, setPostTitle] = useState('')
	const [postText, setPostText] = useState('')

	const handlerAddPost = useCallback(
		(title, text) => {
			dispatch(addPost(title, text))
		},
		[dispatch]
	)

	const handlerRemovePost = useCallback(
		(id) => {
			dispatch(removePost(id))
		},
		[dispatch]
	)
	const Item = ({ item }) => (
		<TouchableOpacity
			style={styles.item}
			onPress={() => {}}
			onLongPress={(id) => {
				handlerRemovePost(id)
			}}
		>
			<Text style={styles.title}>
				Titel : {item.title} {item.text}
			</Text>
		</TouchableOpacity>
	)

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
				<TouchableOpacity
					style={styles.button}
					onPress={() => handlerAddPost(postTitle, postText)}
				>
					<Text style={styles.buttonTitle}>Save Post</Text>
				</TouchableOpacity>
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
						keyExtractor={(key) => key.id.toString()}
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
	buttonTitle: {
		color: 'white',
		fontSize: 18,
	},
	item: {
		backgroundColor: '#FFE6B6',
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
