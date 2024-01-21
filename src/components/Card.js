import {
	Card as UICard,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
} from "@chakra-ui/react"

export const Card = ({ ...rest }) => {
	return (
		<UICard {...rest}>
			<CardBody>
				<Text>View a summary of all your customers over the last month.</Text>
			</CardBody>
		</UICard>
	)
}
