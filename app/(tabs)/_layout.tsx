import { Tabs } from "expo-router"
import React from "react"

import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import Entypo from "@expo/vector-icons/Entypo"

export default function TabsLayout() {
	const colorScheme = useColorScheme()
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				tabBarInactiveTintColor:
					Colors[colorScheme ?? "light"].tabIconDefault,
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
			<Tabs.Screen
				name="customers/index"
				options={{
					title: "Customers",
					tabBarIcon: ({ color }) => (
						<Entypo name="user" size={24} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name="customers/[id]"
				options={{
					href: null
				}}
			/>
		</Tabs>
	)
}
