import { Stack } from "expo-router"

import "../styles/global.css"

export const unstable_settings = {
	anchor: "(tabs)"
}

export default function RootLayout() {
	// const colorScheme = useColorScheme()

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}
