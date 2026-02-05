import { fetchWithResponse } from "./fetch"
import { getOptions } from "./fetchOptions"

export const getStylists = () => {
	return fetchWithResponse("api/stylists", getOptions)
}
