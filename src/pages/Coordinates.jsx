/* eslint-disable no-unreachable */
import { Box, Button, Divider, Flex, FormLabel, Heading, Select, VStack } from "@chakra-ui/react";
import transformer from '../utils/transformer.js'
import MyNumberInput from "../components/MyNumberInput";
import { useState } from "react";


export default function Coordinates() {

  let [xValue, setX] = useState(0)
  let [yValue, setY] = useState(0)
  let [zone, setZone] = useState(1)

  function goTo() {
    let transformFunction = transformer[zone - 1].transform
    let { x, y } = transformFunction.forward({ x: xValue, y: yValue })
    if (isNaN(x) || isNaN(y)) {
      console.log('return values are not numbers')
      return
    }
    const URL = `https://www.google.com/maps/search/${y},+${x}`
    window.open(URL, '_blank');
  }

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
      <Heading>Coordinates converter</Heading>
      <Divider />
      <VStack gap='16px' minWidth='min(400px , 100%)'>
        <MyNumberInput width='100%' label='x' value={xValue} onChange={(valueString) => setX(Number(valueString))} />
        <MyNumberInput width='100%' label='y' value={yValue} onChange={(valueString) => setY(Number(valueString))} />
        <Box width='100%'>
          <FormLabel htmlFor='zone' textTransform='capitalize' pb='1'>zone :</FormLabel>
          <Select id="zone" placeholder='Select option' value={zone} onChange={(ele) => setZone(ele.target.selectedIndex)}>
            <option value="1">Lambert Zone I</option>
            <option value="2">Lambert Zone II</option>
            <option value="3">Lambert Zone III</option>
            <option value="4">Lambert Zone IV</option>
          </Select>
        </Box>
        <Button size='lg' width='100%' mt='16px' colorScheme="blue" onClick={goTo}>Go To</Button>
      </VStack>
    </Flex>
  )
}
