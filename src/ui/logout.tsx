import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { Button } from "@mui/material"
import { useHistory } from "react-router"
import styled from "styled-components"
import { auth } from "../config/firebase"

const LogoutPage: React.FC<IPage> = (props) => {
  const history = useHistory()

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  const logout = () => {
    auth
      .signOut()
      .then(() => history.push("/login"))
      .catch((error: any) => logging.error(error))
  }
  return (
    <PageContainer>
      <p>LOGOUT</p>
      <Button onClick={logout}>GO TO LOGIN</Button>
    </PageContainer>
  )
}

export default LogoutPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: green;
`
