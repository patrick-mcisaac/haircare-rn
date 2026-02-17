import { fetchWithResponse } from "./fetch"
import { getOptions } from "./fetchOptions"
const baseURL = "api/services"
export const getServices = () => {
	return fetchWithResponse(baseURL, getOptions)
}
