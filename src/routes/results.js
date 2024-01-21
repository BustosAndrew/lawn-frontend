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
				<Text fontWeight='bold'>{loadingText}</Text>
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
