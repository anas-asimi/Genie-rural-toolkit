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
	useDisclosure,
} from "@chakra-ui/react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Center w='100%' bg='white' boxShadow="0px 0px 4px 0px rgba(0,0,0,0.2)">
				<Container maxWidth='6xl'>
					<Flex as="header" w="100%" p='16px'>
						<Link textDecorationColor='transparent !important' as={ReactLink} to="/">
							<Heading>Genie Rural Toolkit</Heading>
						</Link>
						<Spacer />
						<Show below="lg">
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
								<Link color="black" w='100%' textAlign='end' as={ReactLink} to="/">
									home
								</Link>
								<Link color="black" w='100%' textAlign='end' as={ReactLink} to="/storage">
									storage
								</Link>
								<Link color="black" w='100%' textAlign='end' as={ReactLink} to="/pomps">
									pomps
								</Link>
								<Link color="black" w='100%' textAlign='end' as={ReactLink} to="/coordinates">
									coordinates
								</Link>
								<Link color="black" w='100%' textAlign='end' as={ReactLink} to="/about">
									about
								</Link>
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
						bg='white'
						boxShadow="0px 0px 4px 0px rgba(0,0,0,0.2)"
						mb='4px'
						fontFamily='Josefin Sans'
					>
						<Link color="black" w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/">
							home
						</Link>
						<Link color="black" w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/storage">
							storage
						</Link>
						<Link color="black" w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/pomps">
							pomps
						</Link>
						<Link color="black" w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/coordinates">
							coordinates
						</Link>
						<Link color="black" w='100%' textAlign='end' py='4px' onClick={onToggle} as={ReactLink} to="/about">
							about
						</Link>
					</VStack>
				</Collapse>
			</Show>
		</>
	);
}
