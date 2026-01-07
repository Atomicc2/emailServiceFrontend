import { useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import './App.css'
import PrimaryInput from './components/input/primaryInput'

function App() {
  const [email, setEmail] = useState("")

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box w="320px">
        <PrimaryInput 
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Digite Seu Email"
        />
      </Box>
    </Flex>
  )
}

export default App
