import {
	Box,
	Center,
	Collapse,
	Container,
	Flex,
	HStack,
	Heading,
	IconButton,
	Link,
	Show,
	Spacer,
	VStack,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Center w='100%' boxShadow="0px 0px 4px 0px rgba(0,0,0,0.2)">
				<Container maxWidth='6xl'>
					<Flex as="header" w="100%" py='16px' gap='16px'>
						<Link textDecorationColor='transparent !important' as={ReactLink} to="/">
							<Heading>Genie Rural Toolkit</Heading>
						</Link>
						<Spacer />

						<Show below="lg">
							<IconButton
								icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
								onClick={toggleColorMode}
							/>
							<Box onClick={onToggle}>
								{isOpen ? (
									<IconButton
										aria-label="close menu"
										border="none"
										icon={<MdOutlineClose size="40px" />}
									/>
								) : (
									<IconButton
										aria-label="open menu"
										border="none"
										icon={<MdMenu size="40px" />}
									/>
								)}
							</Box>
						</Show>
						<Show above="lg">
							<HStack as="nav" gap="24px" fontSize="xl" fontFamily='Josefin Sans' textTransform="capitalize">
								<Link w='100%' textAlign='end' as={ReactLink} to="/">
									home
								</Link>
								<Link w='100%' textAlign='end' as={ReactLink} to="/storage">
									storage
								</Link>
								<Link w='100%' textAlign='end' as={ReactLink} to="/pomps">
									pomps
								</Link>
								<Link w='100%' textAlign='end' as={ReactLink} to="/coordinates">
									coordinates
								</Link>
								<Link w='100%' textAlign='end' as={ReactLink} to="/about">
									about
								</Link>
								<IconButton
									icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
									onClick={toggleColorMode}
								/>
							</HStack>
						</Show>
					</Flex>
				</Container>
			</Center>
			<Show below="lg">
				<Collapse in={isOpen} >
					<VStack
						as="nav"
						w='100vw'
						gap="0"
						fontSize="xl"
						textTransform="capitalize"
						alignItems="flex-end"
						p='16px 32px'
					
						boxShadow="0px 0px 4px 0px rgba(0,0,0,0.2)"
						mb='4px'
						fontFamily='Josefin Sans'
					>
						<Link w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/">
							home
						</Link>
						<Link w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/storage">
							storage
						</Link>
						<Link w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/pomps">
							pomps
						</Link>
						<Link w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/coordinates">
							coordinates
						</Link>
						<Link w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/about">
							about
						</Link>
					</VStack>
				</Collapse>
			</Show>
		</>
	);
}
