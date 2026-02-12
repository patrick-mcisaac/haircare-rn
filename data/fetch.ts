import { fetchOptions } from "@/types/FetchTypes"

const baseUrl = process.env.EXPO_PUBLIC_API_URL
export const fetchWithResponse = (path: string, options: fetchOptions) => {
	console.log(baseUrl)
	return fetch(`${baseUrl}/${path}`, options).then(res => res.json())
}

export const fetchNoResponse = (path: string, options: fetchOptions) => {
	return fetch(`${baseUrl}/${path}`)
}
