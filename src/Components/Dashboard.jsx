import { Box, Button, Flex, Heading, Image, Input, Link, Select,Table,TableContainer,Tbody,Td,Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import search from '../assets/search.png'
import sort from '../assets/sort.png'
import downlode from '../assets/download.png'

const Dashboard = () => {
  return (
    <Box w={"1120px"} mt={"10px"} h={"566px"}  m={"10px"} > 
      <Flex justifyContent={"space-between"}>
        <Text>Overview</Text>
        <Select w="137px" h="36px" >
          <option value="">This Month</option>
        </Select>
      </Flex>
      <Flex justify={"space-between"} mt={"19px"} >
      <Box h="154px" border="1px" w="355px" p={4} rounded="md" boxShadow="md">
      <Text fontWeight="bold" mb={4}>
        Next Payout
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize="xl">2312.23</Heading>
        <Link color="teal.500">23 Orders</Link>
      </Flex>
      <Flex justifyContent="space-between" mt={2}>
        <Text>Next Payout date:</Text>
        <Text>Today, 04:00 PM</Text>
      </Flex>
    </Box>
    <Box h="118px" border="1px" w="355px" p={4} rounded="md" boxShadow="md">
      <Text fontWeight="bold" mb={2}>
        Amount Pending
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize="xl">92,312.20</Heading>
        <Link color="teal.500">13 Orders</Link>
      </Flex>
    </Box>
    <Box h="118px" border="1px" w="355px" p={4} rounded="md" boxShadow="md">
      <Text fontWeight="bold" mb={2}>
        Amount Processed
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize="xl">23,92,312.19</Heading>
       
      </Flex>
    </Box>
        
      </Flex>
      <Box>
        <VStack h="80px" w="252px">
          <Text>Transaction | This Month</Text>
          <Flex>
          <Button borderRadius={"40px"} h="26px" mr={"10px"} >Payout (22)</Button>
          <Button borderRadius={"40px"} h="26px">Refund (2)</Button>
          </Flex>
          
        </VStack>
        <Box >
        <Flex justifyContent="space-between" p={1}  rounded="md">
      <Box display="flex" alignItems="center" border={"1px"} >
        <Image src={search} mr={2} />
        <Input placeholder="Search" border={'none'}  h={"30px"} />
      </Box>
      <Flex>
        <Box display="flex" alignItems="center" mr={3}>
          Sort <Image src={sort} ml={1} />
        </Box>
        <Box>
          <Image src={downlode} mt={2} />
        </Box>
      </Flex>
    </Flex>
        </Box>

        <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Status</Th>
        <Th >Transaction ID</Th>
        <Th >Order amount</Th>
        <Th >Transaction fees</Th>
        <Th >Total</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Processing</Td>
        <Td >131634495747</Td>
        <Td >10,125.10</Td>
        <Td >1125.00</Td>
        <Td >9312</Td>
      </Tr>
      
    </Tbody>
   
  </Table>
</TableContainer>
      </Box>

    </Box>
  )
}

export default Dashboard