import { fetchWithResponse } from "./fetch"
import { getOptions } from "./fetchOptions"

export const getAppointments = () => {
	return fetchWithResponse("api/appointments", getOptions)
}
