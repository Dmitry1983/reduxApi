import React from 'react'
import { StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native'

const RenderLoader = () => {
	return (
		<SafeAreaView>
			{/* <Text>Render Loader</Text> */}
			<ActivityIndicator size={'large'} color={'#000'} />
		</SafeAreaView>
	)
}

export default RenderLoader

const styles = StyleSheet.create({
	safeView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey',
	},
})
