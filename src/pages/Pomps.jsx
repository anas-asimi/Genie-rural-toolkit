import {
	Divider,
	Flex,
	Heading,
	SimpleGrid,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import MyNumberInput from "../components/MyNumberInput";
import { useState } from "react";

export default function Pomps() {
	let [debit, setDebit] = useState(14);
	let [hmt, setHmt] = useState(80);
	let [rendementPompe, setRendementPompe] = useState(65);
	let [rendementMotor, setRendementMotor] = useState(90);

	const Kw_to_Hp = 1.36;

	function getPuissance() {
		if (debit && hmt && rendementPompe && rendementMotor) {
			// m/s
			let acceliration = 9.81;
			// Kg/m3
			let eau_density = 1000;
			// puissance en Kw
			let puissance =
				(acceliration * eau_density * hmt * debit) /
				(3600 * 1000) /
				(((rendementPompe / 100) * rendementMotor) / 100);
			return puissance;
		}
		return 0;
	}

	return (
		<Flex
			as="main"
			w="100%"
			maxWidth="6xl"
			px="32px"
			py="64px"
			alignItems="center"
			flexDirection="column"
			gap="32px"
			flex="1"
		>
			<Heading>Pomp power</Heading>
			<Divider />
			<Flex
				width="100%"
				gap="48px"
				wrap="wrap"
				alignItems="flex-start"
				justifyContent="center"
			>
				<SimpleGrid
					columns={2}
					gap="16px 32px"
					height="100%"
					minWidth="min(500px , 100%)"
					flex="1"
					fontSize="xl"
				>
					<MyNumberInput
						label="débit"
						value={debit}
						precision={2}
						step={0.1}
						onChange={(valueString) =>
							setDebit(Number(valueString))
						}
					/>
					<MyNumberInput
						label="hmt"
						value={hmt}
						precision={2}
						step={0.1}
						onChange={(valueString) => setHmt(Number(valueString))}
					/>
					<MyNumberInput
						label="rendement de pompe"
						value={rendementPompe}
						onChange={(valueString) =>
							setRendementPompe(Number(valueString))
						}
						max={100}
					/>
					<MyNumberInput
						label="rendement de motor"
						value={rendementMotor}
						onChange={(valueString) =>
							setRendementMotor(Number(valueString))
						}
						max={100}
					/>
				</SimpleGrid>
				<TableContainer flex="1" minWidth="min(500px , 100%)">
					<Table variant="simple" colorScheme="gray">
						<Thead>
							<Tr>
								<Th>Property</Th>
								<Th>Unite</Th>
								<Th isNumeric>Value</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Puissance</Td>
								<Td>kilowatts (Kw)</Td>
								<Td isNumeric>{getPuissance().toFixed(2)}</Td>
							</Tr>
							<Tr>
								<Td>Puissance</Td>
								<Td>cheval (cv)</Td>
								<Td isNumeric>
									{(getPuissance() * Kw_to_Hp).toFixed(2)}
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</Flex>
		</Flex>
	);
}
