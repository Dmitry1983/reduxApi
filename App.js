import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Application from './src/components/Application'
import AppNavigation from './src/components/AppNavigation'

const App = () => {
	return (
		<Provider store={store}>
			{/* <Application /> */}
			<AppNavigation />
		</Provider>
	)
}

export default App
