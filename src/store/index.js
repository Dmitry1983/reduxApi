import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
// import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/index'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	//whitelist: ['counter', 'names', 'posts'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }

// export default () => {
// 	let store = createStore(persistedReducer)
// 	let persistor = persistStore(store)
// 	return { store, persistor }
// }

// export default createStore(rootReducer)

// configureStore.js

// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
