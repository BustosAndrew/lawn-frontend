import { Button, Stack, useDisclosure, Link, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

export default function App() {
	const { getButtonProps, getDisclosureProps, isOpen, onToggle } =
		useDisclosure({ defaultIsOpen: true })
	const [hidden, setHidden] = useState(!isOpen)

	return (
		<div className='md:flex md:items-start flex-col md:flex-row'>
			<div
				{...getDisclosureProps()}
				className='md:hidden fixed top-2 left-2 z-10 bg-[#f7fbf2] p-0 py-6 pr-12 shadow-xl rounded-lg'
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
			</div>
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
					zIndex: 2,
				}}
				className='hidden md:block bg-[#f7fbf2] shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] shadow-[#f7fbf2]] sm:fixed sm:top-0 sm:left-0 sm:h-screen'
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
				className='absolute top-0 left-4 mt-4 z-0 w-10'
				{...getButtonProps()}
			>
				<HamburgerIcon />
			</Button>
			<div
				className={
					isOpen
						? "w-full md:ml-44 ml-0 md:transition-all md:duration-500 duration-0 md:ease-in-out"
						: "w-full md:ml-10 ml-0 md:transition-all md:duration-500 duration-0 md:ease-in-out"
				}
			>
				<Outlet />
			</div>
		</div>
	)
}
