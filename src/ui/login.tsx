import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { Button } from "@mui/material"
import { useHistory } from "react-router"
import styled from "styled-components"
import TextField from "@mui/material/TextField"

const LoginPage: React.FC<IPage> = (props) => {
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const history = useHistory()

  const handleOnClick = () => {
    alert(`You email and password is - ${email} ${password}`)
    history.push("/home")
  }

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPassword(event.target.value)
  }

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setEmail(event.target.value)
  }
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  return (
    <PageContainer>
      <p>LOGIN PAGE</p>
      <FormContainer>
        <TextField
          onChange={handlePasswordChange}
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={handleEmailChange}
          label="Password"
          variant="outlined"
        />
      </FormContainer>
      <Button onClick={handleOnClick}>GO TO HOME</Button>
    </PageContainer>
  )
}

export default LoginPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 150px;
  justify-content: space-between;
`
