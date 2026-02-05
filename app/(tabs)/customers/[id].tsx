import { getCustomerById } from "@/data/customers"
import { useQuery } from "@tanstack/react-query"
import { useLocalSearchParams } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Details() {
	const { id } = useLocalSearchParams()
	const { data: customer, isSuccess } = useQuery({
		queryKey: ["customer", id],
		queryFn: () => {
			return getCustomerById(id as string)
		},
		enabled: !!id
	})

	return (
		isSuccess && (
			<View style={styles.container}>
				<Text style={styles.text}>
					{customer.firstName} {customer.lastName}
				</Text>
				<View>
					<Text style={styles.text}>Appointments</Text>
				</View>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1e1e1e",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		color: "#fff"
	}
})
