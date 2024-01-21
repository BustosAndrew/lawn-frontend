import {
	Card as UICard,
	CardBody,
	CardFooter,
	Text,
	Button,
	Image,
} from "@chakra-ui/react"
import { getDownloadURL, ref } from "firebase/storage"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { FirebaseContext } from "./FirebaseProvider"

export const Card = ({ ...rest }) => {
	const data = rest.data
	const { name } = data || ""
	const [downloadURL, setDownloadURL] = useState("")
	const { myStorage } = useContext(FirebaseContext)

	useEffect(() => {
		const loader = async (myStorage, name) => {
			const url = await getDownloadURL(ref(myStorage, `/images/${name}`))
			setDownloadURL(url)
		}
		if (data) loader(myStorage, name)
	}, [data, name, myStorage])

	return (
		<UICard {...rest} bg='#B6F1BB' maxW={220} minW={220} minH={200}>
			<CardBody p={data ? 0 : 16}>
				{data ? <Image src={downloadURL} roundedTop={6} /> : null}
				<Link to={!data ? "upload" : "results/" + downloadURL}>
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
					<Link to={"upload/" + downloadURL}>
						<Button bg='#00210A' color='white' _hover={{ bg: "#005218" }}>
							<Text fontWeight='bold'>EDIT RESULTS</Text>
						</Button>
					</Link>
				</CardFooter>
			) : null}
		</UICard>
	)
}
