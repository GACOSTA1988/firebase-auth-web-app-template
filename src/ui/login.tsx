import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"

const LoginPage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])
  return <p>LOGIN PAGE</p>
}

export default LoginPage
