import { Box, Stack, Heading } from "@chakra-ui/react"
import { Card } from "../components/Card"

export const Dashboard = () => {
	return (
		<Box m={4} maxW='4xl'>
			<Stack>
				<Heading size='3xl'>Your Photos</Heading>
				<Box className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 flex flex-col m-auto md:m-0'>
					<Card />
				</Box>
			</Stack>
		</Box>
	)
}
