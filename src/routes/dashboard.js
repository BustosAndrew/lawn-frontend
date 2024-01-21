import { Box, Stack, Heading } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { listAll, ref } from "firebase/storage"
import { FirebaseContext } from "../components/FirebaseProvider"
import { useContext, useEffect, useState } from "react"

export const Dashboard = () => {
	const { myStorage } = useContext(FirebaseContext)
	const [pics, setPics] = useState([])

	const loader = async (myStorage) => {
		const pics = await listAll(ref(myStorage, "/images"))
		console.log(pics)
		setPics(pics.items)
	}

	useEffect(() => {
		loader(myStorage)
	}, [myStorage])

	return (
		<Box m={4} maxW='4xl'>
			<Stack gap={10}>
				<Heading size='3xl'>Your Photos</Heading>
				<Box className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 flex flex-col m-auto md:m-0'>
					{pics.map((pic) => (
						<Card key={pic.name} data={pic} />
					))}
					<Card />
				</Box>
			</Stack>
		</Box>
	)
}
