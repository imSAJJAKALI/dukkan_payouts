import { Box, Flex, HStack, Image, Img, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const logo="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1704067200&Signature=H~uS3DJWoUk3Mt34HePdNdEHwWddO~To5UR50YtDRYkyeIGjQkRZcoUOTftRD5yQRfYJ2r-wPlD7ZUCnU4zvLPPZJ-GoURTTXlCSvi2KUOZMF0S5pTbk~3Ce6tIvt-2wtx1ZHVbNIIuIsPHa0YxO1x7N4MVtoS9Z7-CpCYHxKWzrmT6Cyc7uk9-mKH~YA9qBqXGr1WEGQMog4s7LFR4qs9EK6wTTAKvtd7o4C0bV2o2jhqNWUEISPvCWueE7vQzrjtIOuA1jRWZsvC6GV0y4bbVV4Rv8X-9700pRa9qNmWOXPq8HQvVczcbI3UlRKC6bg9SVdPdQSYZpsxMl7NAYIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
import chervonDown from "../assets/ChevronDown.png"
import home from "../assets/home.png"
import wallet from "../assets/wallet.png"
import order from "../assets/order.png"
import products from "../assets/products.png"
import delivery from "../assets/delivery.png"
import marketing from "../assets/marketting.png"
import analytics from "../assets/analytics.png"
import payouts from "../assets/payouts.png"
import discount from "../assets/discount.png"
import audience from "../assets/audience.png"
import appearance from "../assets/appearance.png"
import plugins from "../assets/plugins.png"

const Sidebar = () => {
  return (
    <Box p={"10px"} w={"224px"} h={"100vh"} border={"2px"} bgColor={"black"}>
     
      <HStack
      w="192px"
      h="42px"
      alignItems="center"
      borderRadius="md"
      p="2"
    >
      <Image src={logo} h="29px" w="29px" borderRadius="md" />

      <VStack spacing="1" align="left" ml={"10px"}>
        <Text fontSize="md" color={"white"} fontWeight="bold">
          Nishant
        </Text>
        <Link fontSize="sm" color="white" textDecoration={"underline"}>
          Visit Store
        </Link>
      </VStack>

      <Box ml="auto">
        <Image src={chervonDown} boxSize="20px" />
      </Box>
    </HStack>
    <VStack ml={"20px"} mt={"30px"} spacing="2" align="left">
      <Flex align="center">
        <Image src={home} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Home
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={order} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Orders
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={products} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Products
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={delivery} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Delivery
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={marketing} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Marketing
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={analytics} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Analytics
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={payouts} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Payouts
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={discount} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Discounts
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={audience} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Audience
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={appearance} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Appearance
        </Text>
      </Flex>
      <Flex align="center">
        <Image src={plugins} boxSize="18px" alt="Home" />
        <Text ml="2" color={"white"} fontWeight="semibold">
          Plugins
        </Text>
      </Flex>
    </VStack>
    <Box
      
      p="1"
      mb="0px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      position="absolute"
      bottom="0"
      
    >
      <HStack spacing="6" align="center">
        <Image src={wallet} boxSize="28px" alt="Wallet" />

        <VStack align="start">
          <Text fontWeight="sm" color={"white"} fontSize="md">
            Available Credits
          </Text>
          <Text fontSize="sm" color="teal.500">
            2030.10
          </Text>
        </VStack>
      </HStack>
    </Box>
    </Box>
  )
}

export default Sidebar