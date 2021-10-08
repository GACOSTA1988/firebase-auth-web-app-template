import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { Button } from "@mui/material"
import { useHistory } from "react-router"
import styled from "styled-components"

const LoginPage: React.FC<IPage> = (props) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push("/home")
  }

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  return (
    <PageContainer>
      <p>LOGIN PAGE</p>
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
`
