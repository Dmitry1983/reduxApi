import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	CountScreen,
	NameScreen,
	PostScreen,
	RaceScreen,
	RaceSearchScreen,
	FunctionScreen,
} from '../screens'

const Tab = createBottomTabNavigator()

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Search"
				tabBarOptions={{
					activeTintColor: '#e91e63',
					labelStyle: { fontSize: 16 },
				}}
			>
				<Tab.Screen name="Count" component={CountScreen} />
				<Tab.Screen name="Name" component={NameScreen} />
				<Tab.Screen name="Post" component={PostScreen} />
				<Tab.Screen name="Race" component={RaceScreen} />
				<Tab.Screen name="Search" component={RaceSearchScreen} />
				<Tab.Screen name="Func" component={FunctionScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
