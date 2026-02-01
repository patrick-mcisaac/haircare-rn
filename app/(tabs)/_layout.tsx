import { Tabs } from "expo-router"
import React from "react"

import Entypo from "@expo/vector-icons/Entypo"

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#fff",
				tabBarInactiveTintColor: "#777",
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#1e1e1e",
					borderTopWidth: 0
				}
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name="appointments"
				options={{
					title: "Appointments",
					tabBarIcon: ({ color }) => (
						<Entypo name="calendar" size={24} color={color} />
					)
				}}
			/>
		</Tabs>
	)
}
