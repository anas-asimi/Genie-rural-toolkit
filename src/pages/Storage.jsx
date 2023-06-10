import { Divider, Flex, Heading, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import MyNumberInput from '../components/MyNumberInput'
import { useState } from "react";

export default function Storage() {

  let [longueur, setLongueur] = useState(24)
  let [largeur, setLargeur] = useState(24)
  let [profondeur, setProfondeur] = useState(4)
  let [talus, setTalus] = useState(1)


  return (
    <Flex
      as="main"
      w='100%'
      px='32px'
      py='64px'
      alignItems='center'
      flexDirection='column'
      gap='32px'
      flex='1'>
      <Heading>Water storage</Heading>
      <Divider />
      <Flex width='100%' gap='48px' wrap='wrap' alignItems='flex-start' justifyContent='center'>
        <SimpleGrid columns={2} gap='16px 32px' height='100%' minWidth='min(500px , 100%)' flex='1' fontSize='xl'>
          <MyNumberInput 
          label='longueur' 
          value={longueur} 
          onChange={(valueString) => setLongueur(Number(valueString))} 
          />
          <MyNumberInput 
          label='largeur' 
          value={largeur} 
          onChange={(valueString) => setLargeur(Number(valueString))} 
          />
          <MyNumberInput 
          label='profondeur' 
          value={profondeur} 
          onChange={(valueString) => setProfondeur(Number(valueString))} 
          />
          <MyNumberInput 
          label='talus' 
          value={talus} 
          onChange={(valueString) => setTalus(Number(valueString))} 
          />
        </SimpleGrid>
        <TableContainer flex='1' minWidth='min(500px , 100%)'>
          <Table variant='simple' colorScheme='gray' >
            <Thead>
              <Tr>
                <Th>Property</Th>
                <Th>Unite</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Geomembrane</Td>
                <Td>square meter (m2)</Td>
                <Td isNumeric>{parseInt(getValue('geomembrane', {longueur,largeur,profondeur,talus}))}</Td>
              </Tr>
              <Tr>
                <Td>Volume totale</Td>
                <Td>cubic meter (m3)</Td>
                <Td isNumeric>{parseInt(getValue('volume Totale', {longueur,largeur,profondeur,talus}))}</Td>
              </Tr>
              <Tr>
                <Td>Volume utile</Td>
                <Td>cubic meter (m3)</Td>
                <Td isNumeric>{parseInt(getValue('volume Utile', {longueur,largeur,profondeur,talus}))}</Td>
              </Tr>
              <Tr>
                <Td>Cloture </Td>
                <Td>metres (m)</Td>
                <Td isNumeric>{parseInt(getValue('cloture', {longueur,largeur,profondeur,talus}))}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  )
}

// technical functions

function volume_totale(longueur, largeur, profondeur, talus) {
  let S1 = longueur * largeur
  let S2 = (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus)
  let volumeTotal = (profondeur / 3) * (S1 + S2 + Math.sqrt(S1 * S2))
  return volumeTotal;
}

function volume_utile(longueur, largeur, profondeur, talus) {
  let revanche = 0.5
  let S1 = longueur * largeur
  let S2 = (longueur - 2 * revanche * talus) * (largeur - 2 * revanche * talus)
  let volumeUtile = volume_totale(longueur, largeur, profondeur, talus) - (revanche / 3) * (S1 + S2 + Math.sqrt(S1 * S2))
  return volumeUtile;
}

function surface_geomembrane(longueur, largeur, profondeur, talus) {
  let longueur_du_talus = Math.sqrt(
    profondeur * profondeur + profondeur * talus * (profondeur * talus)
  );
  let surface_ancrage = ((longueur + largeur) * 4) + 16;

  let surface_utile =
    (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus) +
    2 * ((2 * longueur - 2 * profondeur * talus) / 2) * longueur_du_talus +
    2 * ((2 * largeur - 2 * profondeur * talus) / 2) * longueur_du_talus;

  return (surface_utile + surface_ancrage) * 1.1;
}

function cloture(longueur, largeur) {
  return 2 * longueur + 2 * largeur + 8;
}

function getValue(option, parameters) {
  switch (option) {
    case 'volume Totale':
      return volume_totale(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
    case 'volume Utile':
      return volume_utile(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
    case "geomembrane":
      return surface_geomembrane(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
    case "cloture":
      return cloture(parameters.longueur, parameters.largeur)
    default:
      return 'invalid option'
  }
}