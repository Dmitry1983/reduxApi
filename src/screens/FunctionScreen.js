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
	// random number ---------------------------------------------------------
	const randomNamberState = (num) => Math.round(num * Math.random())
	const [number, setNumber] = useState(randomNamberState(1000))
	const handleClick = () => setNumber(randomNamberState(10000))
	// random number ---------------------------------------------------------
	// замыкание ---------------------------------------------------------
	const [bindMy, setBindMy] = useState('')

	const myBindFunction = (context, fn) => {
		return (...args) => {
			fn.apply(context, args)
		}
	}
	function logPerson() {
		const text = `Person: ${this.name} ,age: ${this.age} ,job: ${this.job}`
		setBindMy(text)
		console.log(text)
	}

	const person1 = { name: 'Michael', age: 22, job: 'student' }

	const handleClick2 = myBindFunction(person1, logPerson)

	// замыкание ---------------------------------------------------------
	// замыкание 2 ---------------------------------------------------------
	const [urlDomain, setUrlDomain] = useState('')
	const urlGenerator = (domain) => {
		return (url) => {
			return `https://${url}.${domain}`
		}
	}
	const comUrl = urlGenerator('com')

	const handleClick3 = () => {
		setUrlDomain(comUrl('google'))
		console.log(comUrl('google'))
	}

	// замыкание 2 ---------------------------------------------------------
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
						width: '50%',
						height: 50,
					}}
					value={number.toString()}
				/>

				<TouchableOpacity
					onPress={handleClick}
					style={{
						marginLeft: 20,
						width: 150,
						height: 50,
						backgroundColor: 'grey',
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: 'white' }}>Rundom number</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.view}>
				<TextInput
					placeholder="123"
					style={{
						borderWidth: 1,
						padding: 10,
						borderRadius: 10,
						fontSize: 16,
						width: '70%',
						height: 50,
					}}
					value={bindMy}
					onKeyPress={() => setBindMy('')}
				/>

				<TouchableOpacity
					onPress={handleClick2}
					style={{
						marginLeft: 20,
						width: 85,
						height: 50,
						backgroundColor: 'grey',
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: 'white' }}>Замыкание</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.view}>
				<TextInput
					placeholder="123"
					style={{
						borderWidth: 1,
						padding: 10,
						borderRadius: 10,
						fontSize: 16,
						width: '70%',
						height: 50,
					}}
					value={urlDomain}
					onKeyPress={() => setUrlDomain('')}
				/>

				<TouchableOpacity
					onPress={handleClick3}
					style={{
						marginLeft: 20,
						width: 85,
						height: 50,
						backgroundColor: 'grey',
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: 'white',
						}}
					>
						Замыкание2
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		marginHorizontal: 40,
		marginTop: 20,
		alignItems: 'center',
		flexDirection: 'row',
	},
})

export default FunctionScreen
