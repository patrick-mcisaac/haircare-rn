import { getAppointments } from "@/data/appointments"
import { Appointment } from "@/types/AppointmentTypes"
import { TableDataType } from "@/types/TableDataTypes"
import { formatDate } from "@/utils/formatDate"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Row, Rows, Table } from "react-native-table-component"

export default function Appointments() {
	const { data: appointments, isSuccess } = useQuery({
		queryKey: ["appointments"],
		queryFn: getAppointments
	})

	const [tableData, setTableData] = useState<TableDataType[][] | null>(null)
	useEffect(() => {
		if (appointments) {
			const td = appointments.map((a: Appointment) => [
				`${a.customer?.firstName} ${a.customer?.lastName}`,
				formatDate(a.appointmentTime as string),
				"cost",
				<Pressable onPress={() => {}} style={styles.button} key={a.id}>
					<Text style={styles.header}>Edit</Text>
				</Pressable>
			])
			setTableData(td)
		}
	}, [appointments])

	return (
		<SafeAreaView className="justify-start bg-[#1e1e1e] items-center flex-1">
			<View style={styles.container}>
				<Text className="text-4xl font-bold text-[#efe] tracking-wider">
					Appointments
				</Text>
			</View>

			<View style={styles.container}>
				{tableData && (
					<Table style={styles.table}>
						<Row
							style={styles.row}
							textStyle={styles.header}
							data={["Client", "Date", "Cost", " "]}
						/>
						<Rows
							style={styles.row}
							textStyle={styles.header}
							data={tableData}
						/>
					</Table>
				)}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1 / 4,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#1e1e1e"
	},
	title: {
		fontWeight: "bold",
		fontSize: 40,
		color: "#c7c7c7ff"
	},
	table: {
		width: 350,
		borderWidth: 1
	},
	row: {
		borderWidth: 1,
		backgroundColor: "#29292e",
		flexDirection: "row",
		justifyContent: "space-between",
		height: 90,
		paddingRight: 5
	},
	header: {
		fontSize: 17,
		color: "#fff",
		textAlign: "center"
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#25253e",
		height: 40,
		width: "100%",
		borderRadius: 20
	}
})
