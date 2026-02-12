import { CustomerType } from "@/types/CustomerType"
import { useRouter } from "expo-router"
import React from "react"
import { Pressable, Text, View } from "react-native"

type CardProps = {
	person: CustomerType
}

export default function Card({ person }: CardProps) {
	const router = useRouter()

	return (
		<Pressable
			onPress={() =>
				router.push({
					pathname: `/customers/[id]`,
					params: { id: person.id }
				})
			}>
			<View className="p-10 bg-primary self-center mt-10 rounded-lg gap-[2rem] w-[75%] border-gray-900 shadow-sm border">
				<Text className="text-2xl text-secondary text-center">
					{person.firstName} {person.lastName}
				</Text>
				<View className="flex-row flex-wrap gap-2 justify-around">
					<Text className="text-secondary">{person.email}</Text>
					<Text className="text-secondary">{person.phoneNumber}</Text>
				</View>
			</View>
		</Pressable>
	)
}
