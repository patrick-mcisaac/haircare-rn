export type fetchOptions = {
	method: string
	headers?: {
		"Content-Type"?: string
		Authorization?: string
	}
	body?: string
}
