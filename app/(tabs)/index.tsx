import React from "react"
import { StyleSheet, Text, View } from "react-native"
import "../../styles/global.css"

import { ImageBackground } from "expo-image"
export default function index() {
	return (
		<View className="flex-1">
			<ImageBackground
				className=""
				contentFit="cover"
				style={styles.background}
				imageStyle={styles.imageStyle}
				source={require("../../assets/images/frontpage.jpg")}>
				<View className="flex-1 items-center  justify-evenly">
					<View>
						<Text className="text-4xl text-center  font-bold text-[#000] tracking-wider">
							Hillary&apos;s Hair Salon
						</Text>
					</View>
					<View className="w-[75%] ">
						<Text className="text-[#000000] text-xl">
							What is Lorem Ipsum? Lorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem
							Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, when an unknown printer
							took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five
							centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and
							more recently with desktop publishing software like
							Aldus PageMaker including versions of Lorem Ipsum.
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%"
	},
	imageStyle: {
		opacity: 0.5
	}
})
