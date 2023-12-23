import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, VStack } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'

function App() {
  

  return (
    <>
    <Box display={"flex"}>
    <Sidebar/>
    <VStack>
    <Navbar/>
    <Dashboard/>
    </VStack>
      
    </Box>
      
    </>
  )
}

export default App
