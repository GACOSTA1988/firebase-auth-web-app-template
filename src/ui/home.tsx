import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { useHistory } from "react-router"
import Button from "@mui/material/Button"
import styled from "styled-components"

const HomePage: React.FC<IPage> = (props) => {
  const history = useHistory()

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  const handleOnClick = () => {
    history.push("/")
  }

  return (
    <PageContainer>
      <p>HOME PAGE</p>
      <Button onClick={handleOnClick}>GO TO LOGIN</Button>
    </PageContainer>
  )
}

export default HomePage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: red;
`
