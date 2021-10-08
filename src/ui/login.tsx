import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { Button } from "@mui/material"

const LoginPage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])
  return (
    <div>
      <p>LOGIN PAGE</p>
      <Button>GO TO HOME</Button>
    </div>
  )
}

export default LoginPage
