import {
	Box,
	Heading,
	Stack,
	Button,
	Text,
	Image,
	HStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const Results = () => {
	const [loadingText, setLoadingText] = useState("Loading")

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

		// Clean up the interval when the component is unmounted
		return () => clearInterval(intervalId)
	}, [])
	return (
		<Box m={4} maxW='4xl'>
			<Stack gap={6}>
				<Heading size='3xl'>Results</Heading>
				<Image
					src='https://bit.ly/dan-abramov'
					rounded={10}
					w='100%'
					objectFit='cover'
					shadow='lg'
				/>
				<Heading size='lg'>Details</Heading>
				<Text fontWeight='bold'>{loadingText}</Text>
				<Heading size='lg'>Local Landscapings Guidelines</Heading>
				<Text fontWeight='bold'>{loadingText}</Text>
				<HStack gap={2} mx='auto'>
					<Button
						color='white'
						w='fit-content'
						bg='#39656D'
						_hover={{ bg: "#5597a3" }}
					>
						<Text fontWeight='bold'>EDIT IMAGE</Text>
					</Button>
					<Button
						color='white'
						w='fit-content'
						bg='#39656D'
						_hover={{ bg: "#5597a3" }}
					>
						<Text fontWeight='bold'>FINISH</Text>
					</Button>
				</HStack>
			</Stack>
		</Box>
	)
}
