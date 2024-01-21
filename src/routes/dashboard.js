import { Box, Stack, Heading, Flex } from "@chakra-ui/react"
import { Card } from "../components/Card"

export const Dashboard = () => {
	return (
		<Box m={4} maxW='4xl'>
			<Stack>
				<Heading size='3xl'>Your Photos</Heading>
				<Stack direction={["column", "row"]} gap={10} wrap='wrap'>
					<Card flexBasis={["100%", "calc(30.333% - 8px)"]} />
					<Card flexBasis={["100%", "calc(30.333% - 8px)"]} />
					<Card flexBasis={["100%", "calc(30.333% - 8px)"]} />
					<Card flexBasis={["100%", "calc(30.333% - 8px)"]} />
				</Stack>
			</Stack>
		</Box>
	)
}
