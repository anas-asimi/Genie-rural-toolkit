import { Center, Container, Flex, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import MyNumberInput from '../components/MyNumberInput'
import { useState } from "react";

export default function Pomps() {

  const [parameters, setParameters] = useState({
    debit: 14,
    hmt: 80,
    rendementPompe: 65,
    rendementMotor: 90,
  });

  function handleChange(name, value) {
    if (name == 'débit') {
      name = 'debit'
    }
    if (name == 'rendement de pompe') {
      name = 'rendementPompe'
    }
    if (name == 'rendement de motor') {
      name = 'rendementMotor'
    }
    setParameters({
      ...parameters,
      [name]: Number(value)
    })
  }

  function getPuissance() {
    if (parameters.debit && parameters.hmt && parameters.rendementPompe && parameters.rendementMotor) {

      let acceliration = 9.81 // m/s
      let eau_density = 1000 // Kg/m3
      let debit = parameters.debit / 3600 // m3/s
      let hmt = parameters.hmt // m
      let rendementPompe = parameters.rendementPompe / 100 // %
      let rendementMotor = parameters.rendementMotor / 100 // %
      let puissance = (acceliration * eau_density * hmt * debit) / (1000 * rendementPompe * rendementMotor) // puissance en Hp
      return puissance
    }
    else return 'error'
  }

  let Kw_to_Hp = 1.36

  return (
    <Center as="main" w='100%' flex='1'>
      <Container maxWidth='6xl'>
        <Flex gap='48px' wrap='wrap' alignItems='center' justifyContent='center'>
          <SimpleGrid columns={2} gap='16px 32px' height='100%' minWidth='min(500px , 100%)' flex='1' fontSize='xl'>
            <MyNumberInput label='débit' value={parameters.debit} handler={handleChange} />
            <MyNumberInput label='hmt' value={parameters.hmt} handler={handleChange} />
            <MyNumberInput label='rendement de pompe' value={parameters.rendementPompe} handler={handleChange} precision={0} />
            <MyNumberInput label='rendement de motor' value={parameters.rendementMotor} handler={handleChange} precision={0} />
          </SimpleGrid>
          <TableContainer flex='1' minWidth='min(500px , 100%)'>
            <Table variant='simple' colorScheme='teal' >
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
                  <Td isNumeric>{getPuissance() == 'error' ? 0 : getPuissance().toFixed(2)}</Td>
                </Tr>
                <Tr>
                  <Td>Puissance</Td>
                  <Td>cheval (cv)</Td>
                  <Td isNumeric>{getPuissance() == 'error' ? 0 : (getPuissance() * Kw_to_Hp).toFixed(2)}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Container>
    </Center>
  )
}