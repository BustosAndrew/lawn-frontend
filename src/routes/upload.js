import {
	Box,
	Heading,
	Stack,
	Button,
	Text,
	Input,
	Image,
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { Form } from "../components/Form"
import { useState } from "react"

export const Upload = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageChange = (event) => {
		const file = event.target.files[0]

		if (file) {
			setSelectedImage(URL.createObjectURL(file))
		}
	}

	return (
		<Box m={4} maxW='4xl'>
			<Stack gap={10}>
				<Heading size='3xl'>Upload/Edit Image</Heading>
				<Box
					pos='relative'
					h={200}
					bg={"#506351"}
					rounded={10}
					shadow='lg'
					overflow='hidden'
				>
					<Input
						type='file'
						accept='image/*'
						display='none'
						id='image-input'
						onChange={handleImageChange}
					/>
					<label htmlFor='image-input'>
						<Button
							pos='absolute'
							top={0}
							left='50%'
							transform='translateX(-50%) translateY(200%)'
							zIndex={2}
							as='span'
							_hover={{ cursor: "pointer" }}
							color='black'
						>
							<EditIcon boxSize={5} />
						</Button>
					</label>
					{selectedImage && (
						<Image
							rounded={10}
							src={selectedImage}
							w='100%'
							h='100%'
							objectFit='cover'
						/>
					)}
				</Box>
				<Button
					color='white'
					w='fit-content'
					mx='auto'
					bg='#39656D'
					_hover={{ bg: "#5597a3" }}
				>
					<Text fontWeight='bold' onClick={() => setSelectedImage(null)}>
						REMOVE
					</Text>
				</Button>
				<Stack gap={5}>
					<Heading size='lg'>Lawn Details</Heading>
					<Form />
				</Stack>
			</Stack>
		</Box>
	)
}
