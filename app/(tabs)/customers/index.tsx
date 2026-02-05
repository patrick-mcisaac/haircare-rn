import Card from "@/components/Card"
import { getCustomers } from "@/data/customers"
import { useColorScheme } from "@/hooks/use-color-scheme.web"
import { useQuery } from "@tanstack/react-query"
import { ImageBackground } from "expo-image"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

export default function Customers() {
	const colorScheme = useColorScheme()
	const {
		data: customers,
		isLoading,
		isSuccess
	} = useQuery({
		queryKey: ["customers"],
		queryFn: getCustomers
	})
	return (
		isSuccess && (
			<View className={`flex-1 `}>
				<ImageBackground
					contentFit="cover"
					style={{ height: "100%" }}
					source={require("../../../assets/images/background.jpg")}>
					<View className="m-[7rem_0_2rem_0]">
						<Text className="text-6xl font-bold self-center">
							Customers
						</Text>
					</View>
					<FlatList
						data={customers}
						renderItem={({ item }) => <Card person={item} />}
						keyExtractor={item => item.id}
						className=""
						contentContainerStyle={styles.scrollable}
					/>
				</ImageBackground>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	scrollable: {
		justifyContent: "flex-start",
		minHeight: "100%"
	}
})
