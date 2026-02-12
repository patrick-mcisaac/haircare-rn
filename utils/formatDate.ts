export const formatDate = (date: string): string => {
	const newDate = new Date(date).toLocaleDateString("en-us", {
		month: "short",
		day: "numeric",
		hour: "numeric"
	})

	return newDate
}
