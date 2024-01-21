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
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItemOption,
	MenuOptionGroup,
	Text,
	Flex,
} from "@chakra-ui/react"
import { useState, useContext } from "react"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { FirebaseContext } from "./FirebaseProvider"

export const Form = ({ file }) => {
	const [area, setArea] = useState(1)
	const [features, setFeatures] = useState([])
	const [optional, setOptional] = useState([])
	const [formError, setFormError] = useState("")
	const { myStorage } = useContext(FirebaseContext)

	const handleOptionalChange = (e) => {
		setOptional(e)
	}
	const handleAreaChange = (e) => setArea(e)
	const handleFeatureChange = (e) => setFeatures(e)

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(file)

		if (features.length === 0 || !area || !file) {
			setFormError("All fields are required.")
			return
		}

		setFormError("")
		console.log(myStorage)
		const imageRef = ref(myStorage, file.name)
		try {
			await uploadBytes(imageRef, file)
			const url = await getDownloadURL(imageRef)
			console.log(url)
		} catch (e) {
			console.log(e)
		}
	}

	const handleError = (e) => {
		e.preventDefault()
		if (!area || features.length === 0) {
			setFormError("All fields are required.")
			return
		}
	}

	return (
		<form onSubmit={handleSubmit} onInvalid={handleError}>
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
				<FormControl isInvalid={features.length === 0} isRequired>
					<FormLabel>Lawn features:</FormLabel>
					<Menu closeOnSelect={false}>
						<MenuButton
							as={Button}
							bg='none'
							_hover={{ bg: "none" }}
							_active={{ bg: "none" }}
							textAlign='left'
							p={0}
							px={4}
							borderWidth={1}
							borderColor='#181D18'
							w='full'
							fontWeight='normal'
						>
							<Flex justifyContent='space-between' alignItems='center' w='full'>
								<Text>
									{features.length > 0
										? features.join(", ")
										: "Select lawn features"}
								</Text>
								<Text fontSize={26} color='#181D18'>
									<ChevronDownIcon />
								</Text>
							</Flex>
						</MenuButton>
						<MenuList minWidth='240px' bg='#f7fbf2'>
							<MenuOptionGroup type='checkbox' onChange={handleFeatureChange}>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='email'
								>
									Email
								</MenuItemOption>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='phone'
								>
									Phone
								</MenuItemOption>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='country'
								>
									Country
								</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>
					<FormErrorMessage>Lawn features are required.</FormErrorMessage>
				</FormControl>
				<FormControl>
					<FormLabel>Optional features:</FormLabel>
					<Menu closeOnSelect={false}>
						<MenuButton
							as={Button}
							bg='none'
							_hover={{ bg: "none" }}
							_active={{ bg: "none" }}
							textAlign='left'
							p={0}
							px={4}
							borderWidth={1}
							borderColor='#181D18'
							w='full'
							fontWeight='normal'
						>
							<Flex justifyContent='space-between' alignItems='center' w='full'>
								<Text>
									{optional.length > 0
										? optional.join(", ")
										: "Select optional features"}
								</Text>
								<Text fontSize={26} color='#181D18'>
									<ChevronDownIcon />
								</Text>
							</Flex>
						</MenuButton>
						<MenuList minWidth='240px' bg='#f7fbf2'>
							<MenuOptionGroup type='checkbox' onChange={handleOptionalChange}>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='email'
								>
									Email
								</MenuItemOption>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='phone'
								>
									Phone
								</MenuItemOption>
								<MenuItemOption
									_hover={{ bg: "lightgray" }}
									bg='#f7fbf2'
									value='country'
								>
									Country
								</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>
				</FormControl>
				<Button
					type='submit'
					colorScheme='teal'
					mt={8}
					w='fit-content'
					bg='#39656D'
					_hover={{ bg: "#5597a3" }}
				>
					Submit
				</Button>
				<FormControl isInvalid={formError}>
					<Input type='hidden' />
					<FormErrorMessage justifyContent='center' textAlign='right'>
						{formError}
					</FormErrorMessage>
				</FormControl>
			</SimpleGrid>
		</form>
	)
}
