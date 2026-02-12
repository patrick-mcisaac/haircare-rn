import { CustomerType } from "./CustomerType"

export interface Appointment {
	id: number
	stylistId: number
	customerId: number
	appointmentTime: Date | string
	customer?: CustomerType
}
