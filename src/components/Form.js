import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	SimpleGrid,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Input,
	Select,
	Button,
} from "@chakra-ui/react"
import { useState } from "react"

export const Form = () => {
	const [input, setInput] = useState("")
	const [area, setArea] = useState(1)
	const [country, setCountry] = useState("")
	const [formError, setFormError] = useState("")

	const handleInputChange = (e) => setInput(e.target.value)
	const handleAreaChange = (e) => setArea(e)
	const handleCountryChange = (e) => setCountry(e.target.value)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!input || !area || !country) {
			setFormError("All fields are required.")
			return
		}

		setFormError("")

		// Handle form submission logic here
		console.log("Form submitted successfully")
	}

	return (
		<form onSubmit={handleSubmit}>
			<SimpleGrid
				borderWidth={1}
				borderColor='#181D18'
				borderRadius={10}
				p={8}
				columns={[1, 2]}
				spacing={5}
				columnGap={10}
			>
				<FormControl isInvalid={area === 0 || !area} isRequired>
					<FormLabel>Lawn Area (ft2):</FormLabel>
					<NumberInput
						min={1}
						value={area}
						onChange={handleAreaChange}
						borderColor='#181D18'
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					{(!area || area === 0) && (
						<FormErrorMessage>Lawn Area is required.</FormErrorMessage>
					)}
				</FormControl>
				<FormControl isInvalid={!input} isRequired>
					<FormLabel>Lawn features:</FormLabel>
					<Select
						placeholder='Select country'
						onChange={handleCountryChange}
						borderColor='#181D18'
					>
						<option>United Arab Emirates</option>
						<option>Nigeria</option>
					</Select>
					{!input && (
						<FormErrorMessage>Lawn features is required.</FormErrorMessage>
					)}
				</FormControl>
				<FormControl>
					<FormLabel>Optional features:</FormLabel>
					<Select
						placeholder='Select country'
						onChange={handleCountryChange}
						borderColor='#181D18'
					>
						<option>United Arab Emirates</option>
						<option>Nigeria</option>
					</Select>
				</FormControl>
				<Button type='submit' colorScheme='teal' mt={8} w='fit-content'>
					Submit
				</Button>
				<FormControl isInvalid={formError}>
					<Input type='hidden' onChange={handleInputChange} />
					<FormErrorMessage textAlign='center' mt={4}>
						{formError}
					</FormErrorMessage>
				</FormControl>
			</SimpleGrid>
		</form>
	)
}
