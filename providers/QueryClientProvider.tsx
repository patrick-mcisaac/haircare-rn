import {
	QueryClient,
	QueryClientProvider as TanStackQueryClientProvider
} from "@tanstack/react-query"
import React from "react"

// Create a client outside the component to avoid recreating it on every render
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			staleTime: 1000 * 60 * 5, // 5 minutes
			gcTime: 1000 * 60 * 10 // 10 minutes (formerly cacheTime)
		}
	}
})

export function QueryClientProvider({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<TanStackQueryClientProvider client={queryClient}>
			{children}
		</TanStackQueryClientProvider>
	)
}
