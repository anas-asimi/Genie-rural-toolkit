import { Box, Button, Center, HStack, Heading, Image, Show, VStack } from "@chakra-ui/react";
import { Link, Link as ReactLink } from "react-router-dom";

export default function Home() {
  return (
    <Center as="main" w='100%' flex='1' p='16px' maxW='1200px'>
      <Show above="lg">
      <HStack>
          <Box flex='1' minWidth='380px'>
          <VStack alignItems='flex-start' textTransform="uppercase">
            <Heading fontSize='64px' fontFamily='Josefin Sans'>
              Lets make
            </Heading>
            <Heading fontSize='64px' fontFamily='Josefin Sans'>
              Your Life
            </Heading>
            <Heading fontSize='48px' fontFamily='Courgette' color='green.400'>
              Much Easier
            </Heading>
            <Link as={ReactLink} to="/storage">
              <Button mt='24px' size='lg' colorScheme='blue'>Get Started</Button>
            </Link>
          </VStack>
        </Box>
        <Box flex='2'>
          <Image src='./landing.jpg' alt='irrigation' objectFit='cover' />
        </Box>
      </HStack>
      </Show>
      <Show below="lg">
      <VStack my='64px'>
        <Box flex='1'>
          <VStack alignItems='flex-start' textTransform="uppercase">
            <Heading fontSize='64px' fontFamily='Josefin Sans'>
              Lets make
            </Heading>
            <Heading fontSize='64px' fontFamily='Josefin Sans'>
              Your Life
            </Heading>
            <Heading fontSize='48px' fontFamily='Courgette' color='green.400'>
              Much Easier
            </Heading>
            <Link as={ReactLink} to="/storage">
              <Button mt='24px' size='lg' colorScheme='blue'>Get Started</Button>
            </Link>
          </VStack>
        </Box>
        <Box flex='2'>
          <Image src='./landing.jpg' alt='irrigation' objectFit='cover' width='100%' maxWidth='500px'/>
        </Box>
      </VStack>
      </Show>
    </Center>
  )
}
