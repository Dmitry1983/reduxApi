import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CountScreen from '../screens/CountScreen'
import NameScreen from '../screens/NameScreen'
import PostScreen from '../screens/PostScreen'
import RaceScreen from '../screens/RaceScreen'

const Tab = createBottomTabNavigator()

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Race"
				tabBarOptions={{
					activeTintColor: '#e91e63',
					labelStyle: { fontSize: 18 },
				}}
			>
				<Tab.Screen name="Count" component={CountScreen} />
				<Tab.Screen name="Name" component={NameScreen} />
				<Tab.Screen name="Post" component={PostScreen} />
				<Tab.Screen name="Race" component={RaceScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
