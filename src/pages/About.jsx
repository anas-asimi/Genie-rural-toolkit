import { Box, Center, HStack, Heading, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebookF, FaGithubAlt, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { BiWorld } from "react-icons/bi";


export default function About() {
  return (
    <Center as="main" flex='1' maxWidth='600px' px='32px' py='64px'>
      <VStack alignItems='flex-start'>
        <Heading fontSize='5xl' fontFamily='Caveat' color='green.400'>
          bonjour tout le monde
        </Heading>
        <Heading fontSize='6xl' fontWeight='normal' fontFamily='Josefin Sans'>
          I&apos;m Anas Asimi
        </Heading>
        <Heading fontSize='2xl' fontWeight='normal'>
          Front-end developer with lot of ideas and passion.
        </Heading>
        <Box my='4' fontSize='xl'>
          <Text>Interested in working together?</Text>
          <Text>We should queue up a time to chat</Text>
          <Text>I will buy the coffee.</Text>
        </Box>
        <HStack spacing="4" w='100%'>
          <Link href="https://facebook.com/AnasAssimi10/">
            <IconButton
              variant='solid'
              icon={<FaFacebookF />}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/anas-asimi/">
            <IconButton
              variant='solid'
              icon={<FaLinkedinIn />}
            />
          </Link>
          <Link href="https://github.com/anas-asimi">
            <IconButton
              variant='solid'
              icon={<FaGithubAlt />}
            />
          </Link>
          <Link href="mailto:anas2020cr7@gmail.com">
            <IconButton
              variant='solid'
              icon={<MdSms />}
            />
          </Link>
          <Link href="tel:+212697748319">
            <IconButton
              variant='solid'
              icon={<FaPhoneAlt />}
            />
          </Link>
          <Link href="https://asimianas.netlify.app/">
            <IconButton
              variant='solid'
              icon={<BiWorld />}
            />
          </Link>
        </HStack>
      </VStack>
    </Center>)
}
