import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const ApiScreen = () => {
	return (
		<SafeAreaView style={styles.view}>
			<Text>apiScreen</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default ApiScreen
