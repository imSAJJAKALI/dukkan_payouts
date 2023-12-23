import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import help from '../assets/help.png'
import search from '../assets/search.png'
import group from '../assets/group.png'
import menu from '../assets/menu.png'

const Navbar = () => {
  return (
    <Box
      w="100%"
      bg="gray"
      py={2}
      px={{ base: 4, md: 8 }}
      boxShadow="md"
      rounded="md"
    >
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        maxW="1140px"
        mx="auto"
      >
        <Flex align="center">
          <Image src={help} h={"24px"} mr={2} />
          <Text fontWeight="bold" color="white">
            How it works
          </Text>
        </Flex>
        <Flex align="center" flex="1" mx={4}>
          <Image src={search} h={"24px"} mr={2} />
          <Input
            h="30px"
            w="100%"
            maxW="400px"
            placeholder="Search features, tutorials, etc."
            bg="white"
            border="none"
            borderRadius="md"
            _focus={{
              border: "2px solid teal.500",
            }}
          />
        </Flex>
        <Flex align="center">
          <Image src={group} h={"24px"} mr={4} />
          <Image src={menu} h={"24px"} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
