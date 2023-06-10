/* eslint-disable no-unreachable */
import { Box, Button, Center, FormLabel, Select, VStack } from "@chakra-ui/react";
import transformation from 'transform-coordinates'
import MyNumberInput from "../components/MyNumberInput";
import { useState } from "react";

// indexs of locaols coodinates systemes while (index + 1) equal to the zone number
const ZONE_index = ['EPSG:26191', 'EPSG:26192', 'EPSG:26194', 'EPSG:26195']
// index of the global coodinate systeme
const WGS_index = 'EPSG:4326'

export default function Coordinates() {

  let [x, setX] = useState(0)
  let [y, setY] = useState(0)
  let [zone, setZone] = useState(1)

  function goTo() {
    let transform = transformation(ZONE_index[zone], WGS_index)
    let { resultX, resultY } = transform.forward({ x: x, y: y })
    if (isNaN(resultX) || isNaN(resultY)) {
      console.log('return values are not numbers')
      return
    }
    const URL = `https://www.google.com/maps/search/${resultY},+${resultX}`
    window.open(URL, '_blank');
  }

  return (
    <Center as="main" w='100%' flex='1'>
      <VStack gap='16px'>
        <MyNumberInput label='x' value={x} onChange={(valueString) => setX(Number(valueString))}/>
        <MyNumberInput label='y' value={y} onChange={(valueString) => setY(Number(valueString))} />
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
    </Center>)
}
