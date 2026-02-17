import { getServices } from "@/data/services"
import { Service } from "@/types/ServiceTypes"
import DateTimePicker, {
	DateTimePickerEvent
} from "@react-native-community/datetimepicker"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"

export default function AddAppointment() {
	const [modalVisible, setModalVisible] = useState(false)
	const [selectedService, setSelectedService] = useState<Service | null>(null)

	const [date, setDate] = useState<Date>(new Date())
	const [time, setTime] = useState<number>(0)

	const { data: services, isSuccess } = useQuery({
		queryKey: ["services"],
		queryFn: getServices
	})

	const handleSelect = (service: Service) => {
		setSelectedService(service)
		setModalVisible(false)
	}

	const onChange = (e: DateTimePickerEvent, selectedDate?: Date) => {
		if (selectedDate) {
			setDate(selectedDate)
		}
	}

	const timeData = [8, 9, 10, 11, 12, 13, 14, 15, 16]

	const onSubmit = () => {}

	return (
		isSuccess && (
			<View style={styles.container}>
				<View>
					<View>
						<Text style={styles.labelText}>Select a service</Text>
					</View>
					{/* Selector Button */}
					<TouchableOpacity
						style={styles.selector}
						onPress={() => setModalVisible(true)}>
						<Text style={styles.selectorText}>
							{selectedService?.name || "Select a service"}
						</Text>
						<Text style={styles.arrow}>▼</Text>
					</TouchableOpacity>

					{/* Modal Picker */}
					<Modal
						visible={modalVisible}
						transparent
						animationType="fade"
						onRequestClose={() => setModalVisible(false)}>
						<TouchableOpacity
							style={styles.modalOverlay}
							activeOpacity={1}
							onPress={() => setModalVisible(false)}>
							<View style={styles.modalContent}>
								<Text style={styles.modalTitle}>
									Select Service
								</Text>

								<FlatList
									data={services}
									keyExtractor={item => item.id.toString()}
									renderItem={({ item }) => (
										<TouchableOpacity
											style={[
												styles.option,
												selectedService?.id ===
													item.id &&
													styles.optionSelected
											]}
											onPress={() => handleSelect(item)}>
											<Text style={styles.optionText}>
												{item.name}
											</Text>
											{selectedService?.id ===
												item.id && (
												<Text style={styles.checkmark}>
													✓
												</Text>
											)}
										</TouchableOpacity>
									)}
								/>
							</View>
						</TouchableOpacity>
					</Modal>
				</View>

				<View>
					<Text style={styles.labelText}>Pick a date</Text>

					<DateTimePicker
						value={date}
						mode="date"
						onChange={onChange}
						minimumDate={new Date()}
					/>
				</View>
				<View>
					<Text style={styles.labelText}>Pick a time</Text>
					<FlatList
						contentContainerStyle={[
							{ flex: 1 / 4, padding: 0, gap: 2 }
						]}
						data={timeData}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={[
									// styles.selector,
									item === time ? styles.optionSelected : ""
								]}
								onPress={() => setTime(item)}>
								<Text
									style={[
										time === item ?
											styles.selectorText
										:	{ color: "white" }
									]}>
									{`${item} : 00`}
								</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
				<View>
					<Button onPress={onSubmit} title="Book"></Button>
				</View>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 50,
		backgroundColor: "#1e1e1e",
		gap: 75
	},
	selector: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		backgroundColor: "white"
	},
	selectorTime: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		backgroundColor: "white",
		gap: 20
	},
	selectorText: {
		fontSize: 16,
		color: "#333"
	},
	arrow: {
		fontSize: 12,
		color: "#666"
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center"
	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 12,
		width: "80%",
		maxHeight: "60%",
		padding: 20
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 16,
		textAlign: "center"
	},
	option: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#eee"
	},
	optionSelected: {
		backgroundColor: "#f0f0f0"
	},
	optionText: {
		fontSize: 16
	},
	checkmark: {
		fontSize: 18,
		color: "#007AFF",
		fontWeight: "bold"
	},
	labelText: {
		color: "#f0f0f0",
		fontWeight: "bold"
	}
})
