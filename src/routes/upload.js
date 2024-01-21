import { Box, Heading, Stack, Center, Button, Text } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { Form } from "../components/Form"

export const Upload = () => {
	return (
		<Box m={4} maxW='4xl'>
			<Stack gap={10}>
				<Heading size='3xl'>Upload/Edit Image</Heading>
				<Center h={200} bg={"#506351"} rounded={10} shadow='lg'>
					<Button h={16}>
						<EditIcon boxSize='2rem' color='#0E1F11' fontWeight='bold' />
					</Button>
				</Center>
				<Button
					color='white'
					w='fit-content'
					mx='auto'
					bg='#39656D'
					_hover={{ bg: "#5597a3" }}
				>
					<Text fontWeight='bold'>REMOVE</Text>
				</Button>
				<Stack gap={5}>
					<Heading size='lg'>Lawn Details</Heading>
					<Form />
				</Stack>
			</Stack>
		</Box>
	)
}
