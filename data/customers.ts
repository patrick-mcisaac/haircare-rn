import { fetchWithResponse } from "./fetch"
import { getOptions } from "./fetchOptions"

export const getCustomers = () => {
	return fetchWithResponse("api/customers", getOptions)
}

export const getCustomerById = (id: string) => {
	return fetchWithResponse(`api/customers/${id}`, getOptions)
}
