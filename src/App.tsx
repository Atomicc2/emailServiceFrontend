import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/input/primaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const { mutate } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            label="Primeiro Nome"
            placeholder="Anderson"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={(e) => setSecondName(e.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Santos"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Digite seu e-mail"
          placeholder="test@exemplo.com"
        />
        <Spacer height="4" />
        <Button colorScheme='green' width="100%" onClick={submit}>enviar</Button>
      </form>
      <Spacer width="6" maxWidth="6"/>
      <div className="product-details">
        <h2>Assinatura Mensal</h2>
        <Spacer height="4" />
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="4" />
        <p>Regras: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  )
}

export default App