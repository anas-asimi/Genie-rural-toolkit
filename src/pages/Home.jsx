import { Box, Button, Center, Container, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { Link, Link as ReactLink } from "react-router-dom";

export default function Home() {
  return (
    <Center as="main" w='100%' flex='1' p='16px'>
      <Container maxWidth='6xl'>
        <Flex width='100%' wrap='wrap' justifyContent='center' columnGap='78px' alignItems='center'>
          <Box minWidth='370px'>
            <VStack alignItems='flex-start' textTransform="uppercase">
              <Heading fontSize='64px' fontFamily='Josefin Sans'>
                Lets make
              </Heading>
              <Heading fontSize='64px' fontFamily='Josefin Sans'>
                Your Life
              </Heading>
              <Heading fontSize='48px' fontFamily='Caveat' color='green.400'>
                Much Easier
              </Heading>
              <Link as={ReactLink} to="/storage">
                <Button mt='24px' size='lg' colorScheme='blue'>Get Started</Button>
              </Link>
            </VStack>
          </Box>
          <Box minW='480px' width='50%' >
            <Image src='./landing.png' alt='irrigation' objectFit='cover'/>
          </Box>
        </Flex>
        {/* <Show below="lg">
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
      </Show> */}
      </Container>
    </Center>
  )
}
