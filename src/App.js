import { Button, Stack, useDisclosure, Link, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

export default function App() {
	const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
		useDisclosure({ defaultIsOpen: true })
	const [hidden, setHidden] = useState(!isOpen)

	const clicker = () => {}

	const handleToggle = () => {
		clicker() // Execute the clicker function
		onToggle() // Toggle the disclosure state
	}

	return (
		<div className='flex items-start'>
			<motion.div
				{...getDisclosureProps()}
				hidden={hidden}
				initial={{ width: isOpen ? 200 : 0 }}
				onAnimationStart={() => setHidden(false)}
				onAnimationComplete={() => setHidden(!isOpen)}
				animate={{ width: isOpen ? 200 : 0 }}
				style={{
					overflow: "hidden",
					whiteSpace: "nowrap",
					height: "100vh",
					zIndex: 2,
				}}
				className='bg-[#f7fbf2] shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] shadow-[#f7fbf2]]'
			>
				<Stack mt={3} gap={5}>
					<Button
						bg='#34693F'
						color='white'
						ml={2}
						w={10}
						_hover={{ bg: "#6fab7b" }}
						{...getButtonProps()}
					>
						<CloseIcon />
					</Button>
					<Link
						href='/'
						bg='#34693F'
						color='white'
						borderRightRadius={20}
						py={1}
						px={5}
						w={36}
						textAlign='right'
					>
						<Text fontWeight='bold' fontSize={20}>
							Dashboard
						</Text>
					</Link>
					<Link
						href='/upload'
						bg='#34693F'
						color='white'
						borderRightRadius={20}
						py={1}
						px={5}
						w={36}
						textAlign='right'
					>
						<Text fontWeight='bold' fontSize={20}>
							Upload
						</Text>
					</Link>
				</Stack>
			</motion.div>
			<Button
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 0,
				}}
				{...getButtonProps()}
				onClick={handleToggle}
			>
				<HamburgerIcon />
			</Button>
			<div
				style={{
					marginLeft: `${!isOpen ? "3.5rem" : "1rem"}`,
					transition: "margin-left 0.1s ease",
				}}
			>
				<Outlet />
			</div>
		</div>
	)
}
