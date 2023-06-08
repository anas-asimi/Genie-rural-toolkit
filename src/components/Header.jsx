import {
	Box,
	Collapse,
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
			<Flex as="header" w="100%" p='16px' boxShadow="0px 0px 8px 0px rgba(0,0,0,0.1)">
				<Heading>Genie Rural Toolkit</Heading>
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
					<HStack as="nav" gap="24px" fontSize="lg" textTransform="capitalize">
						<Link color="black" as={ReactLink} to="/">
							home
						</Link>
						<Link color="black" as={ReactLink} to="/storage">
							storage
						</Link>
						<Link color="black" as={ReactLink} to="/pomps">
							pomps
						</Link>
						<Link color="black" as={ReactLink} to="/coordinates">
							coordinates
						</Link>
						<Link color="black" as={ReactLink} to="/about">
							about
						</Link>
					</HStack>
				</Show>

			</Flex>
			<Collapse in={isOpen}>
				<VStack
					as="nav"
					w='100vw'
					gap="8px"
					fontSize="lg"
					textTransform="capitalize"
					alignItems="flex-end"
					p='16px 32px'
					boxShadow="0px 0px 8px 0px rgba(0,0,0,0.1)"
					mb='4px'
				>
					<Link color="black" onClick={onToggle} as={ReactLink} to="/">
						home
					</Link>
					<Link color="black" onClick={onToggle} as={ReactLink} to="/storage">
						storage
					</Link>
					<Link color="black" onClick={onToggle} as={ReactLink} to="/pomps">
						pomps
					</Link>
					<Link color="black" onClick={onToggle} as={ReactLink} to="/coordinates">
						coordinates
					</Link>
					<Link color="black" onClick={onToggle} as={ReactLink} to="/about">
						about
					</Link>
				</VStack>
			</Collapse>
		</>
	);
}
