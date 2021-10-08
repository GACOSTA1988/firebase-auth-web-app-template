import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { Button } from "@mui/material"
import { useHistory } from "react-router"

const LoginPage: React.FC<IPage> = (props) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push("/home")
  }

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  return (
    <div>
      <p>LOGIN PAGE</p>
      <Button onClick={handleOnClick}>GO TO HOME</Button>
    </div>
  )
}

export default LoginPage
