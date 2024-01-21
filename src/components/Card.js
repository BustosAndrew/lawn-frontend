import {
	Card as UICard,
	CardBody,
	CardFooter,
	Text,
	Button,
	Image,
	Link,
} from "@chakra-ui/react"

export const Card = ({ ...rest }) => {
	const data = 0

	return (
		<UICard {...rest} bg='#B6F1BB' maxW={220} minW={220} minH={200}>
			<CardBody p={data ? 0 : 16}>
				{data ? (
					<Image src='https://bit.ly/dan-abramov' roundedTop={6} />
				) : null}
				<Link href={!data ? "/upload" : "/"}>
					<Button
						pos='absolute'
						left={data ? 10 : 8}
						top={data ? "30%" : "37%"}
						mx={0}
						bg='#00210A'
						color='white'
						_hover={{ bg: "#005218" }}
					>
						<Text fontWeight='bold'>
							{data ? "SEE RESULTS" : "UPLOAD IMAGE"}
						</Text>
					</Button>
				</Link>
			</CardBody>
			{data ? (
				<CardFooter display='flex' justify='center'>
					<Link href=''>
						<Button bg='#00210A' color='white' _hover={{ bg: "#005218" }}>
							<Text fontWeight='bold'>EDIT RESULTS</Text>
						</Button>
					</Link>
				</CardFooter>
			) : null}
		</UICard>
	)
}
