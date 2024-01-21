import {
	Box,
	Heading,
	Stack,
	Button,
	Text,
	Image,
	HStack,
} from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { FirebaseContext } from "../components/FirebaseProvider"
import { getDownloadURL, ref } from "firebase/storage"

export const Results = () => {
	const [loadingText, setLoadingText] = useState("Loading")
	const [downloadURL, setDownloadURL] = useState("")
	const { myStorage } = useContext(FirebaseContext)
	const { name } = useParams()

	function calculateWaterBillSavings(yardArea) {
		const waterUsagePerSqFtPerYear = 0.623 // Gallons of water per square foot per year for lawn irrigation
		const waterCostPerGallon = 0.002 // Average cost per gallon of water (this can vary based on your location)

		// Calculate annual water usage for lawn irrigation
		const annualWaterUsage = yardArea * waterUsagePerSqFtPerYear

		// Calculate annual cost of water for lawn irrigation
		const annualWaterCost = annualWaterUsage * waterCostPerGallon

		return annualWaterCost
	}

	function calculateTurfCost(yardArea) {
		const avgTurfCostPerSqFt = 1.82
		const avgGravelCostPerSqFt = 0.21
		const taxRate = 0.07
		const shapeFactor = 1.15 // 15% additional area

		// Calculate the total area including shape factor
		const totalArea = yardArea * shapeFactor

		// Calculate the cost of turf and gravel
		const turfCost = totalArea * avgTurfCostPerSqFt
		const gravelCost = totalArea * avgGravelCostPerSqFt

		// Calculate the tax for turf
		const tax = turfCost * taxRate

		// Calculate total cost
		const totalCost = turfCost + tax + gravelCost

		return totalCost
	}

	function calculateBreakEvenYears(initialCost, annualSavings) {
		return initialCost / annualSavings
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setLoadingText((prevText) => {
				if (prevText === "Loading...") {
					return "Loading"
				} else {
					return prevText + "."
				}
			})
		}, 500)

		const loader = async (myStorage, name) => {
			const url = await getDownloadURL(
				ref(myStorage, `updated/${name}` + "updated")
			)
			setDownloadURL(url)
		}
		loader(myStorage, name)

		// Clean up the interval when the component is unmounted
		return () => clearInterval(intervalId)
	}, [name, myStorage])
	return (
		<Box m={4} maxW='4xl'>
			<Stack gap={6}>
				<Heading size='3xl'>Results</Heading>
				<Image
					src={downloadURL}
					rounded={10}
					w='100%'
					objectFit='cover'
					shadow='lg'
				/>
				<Heading size='lg'>Details</Heading>
				<Text fontWeight='bold'>Your water bill savings is $20 per year.</Text>
				<Text fontWeight='bold'>
					{"Your turf cost is $" + calculateTurfCost(1).toFixed(2) + "."}
				</Text>
				<Text fontWeight='bold'>You will break even in 10 years.</Text>
				{/* <Heading size='lg'>Local Landscapings Guidelines</Heading>
				<Text fontWeight='bold'>{loadingText}</Text> */}
				<HStack gap={2} mx='auto'>
					<Link to='/' style={{ textDecoration: "none" }}>
						<Button
							color='white'
							w='fit-content'
							bg='#39656D'
							_hover={{ bg: "#5597a3" }}
						>
							<Text fontWeight='bold'>FINISH</Text>
						</Button>
					</Link>
				</HStack>
			</Stack>
		</Box>
	)
}
