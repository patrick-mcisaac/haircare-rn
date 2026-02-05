import { Stack } from "expo-router"

import { QueryClientProvider } from "@/providers/QueryClientProvider"
import "../styles/global.css"

export const unstable_settings = {
	anchor: "(tabs)"
}

export default function RootLayout() {
	// const colorScheme = useColorScheme()

	return (
		<QueryClientProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</QueryClientProvider>
	)
}
