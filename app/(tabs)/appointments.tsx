import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function appointments() {
	return (
		<SafeAreaView className="justify-center bg-[#1e1e1e] items-center flex-1">
			<View>
				<Text className="text-4xl font-bold text-[#efe] tracking-wider">
					Appointments
				</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#1e1e1e"
	},
	title: {
		fontWeight: "bold",
		fontSize: 40,
		color: "#c7c7c7ff"
	}
})
