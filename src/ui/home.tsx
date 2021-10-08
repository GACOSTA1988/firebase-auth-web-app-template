import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { useHistory } from "react-router"

const HomePage: React.FC<IPage> = (props) => {
  const history = useHistory()
  console.log("history:", history)

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])
  return <p>HOME PAGE</p>
}

export default HomePage
