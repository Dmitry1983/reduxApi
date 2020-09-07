import React from 'react'
import { Provider } from 'react-redux'
// import store from './src/store'
import { store, persistor } from './src/store'
import AppNavigation from './src/components/AppNavigation'
import { PersistGate } from 'redux-persist/integration/react'
import RenderLoader from './src/components/RenderLoader'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<RenderLoader />} persistor={persistor}>
				<AppNavigation />
			</PersistGate>
		</Provider>
	)
}

export default App
