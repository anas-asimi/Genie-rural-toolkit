import { Box, Center, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import MyNumberInput from '../components/MyNumberInput'
import { useState } from "react";

export default function Storage() {

  const [parameters, setParameters] = useState({
    longueur: 20,
    largeur: 20,
    profondeur: 4,
    talus: 1,
  });
  
  function handleChange(name,value) {
    setParameters({
      ...parameters,
      [name]: Number(value)
    })
  }


  return (
    <Center as="main" w='100%' flex='1'>
      <Container maxWidth='6xl'>
        <Flex gap='48px' wrap='wrap' alignItems='center' justifyContent='center'>
          <SimpleGrid columns={2} gap='16px 32px' height='100%' minWidth='500px' flex='1' fontSize='xl'>
            <MyNumberInput label='longueur' value={parameters.longueur} handler={handleChange} />
            <MyNumberInput label='largeur' value={parameters.largeur} handler={handleChange} />
            <MyNumberInput label='profondeur' value={parameters.profondeur} handler={handleChange} />
            <MyNumberInput label='talus' value={parameters.talus} handler={handleChange} />
          </SimpleGrid>
          <SimpleGrid columns={2} gap='16px 32px' height='100%' minWidth='500px' flex='1'>
            <Box bg='tomato' height='80px' width='100%'></Box>
            <Box bg='tomato' height='80px' width='100%'></Box>
            <Box bg='tomato' height='80px' width='100%'></Box>
            <Box bg='tomato' height='80px' width='100%'></Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Center>
  )
}
