import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { useHistory } from "react-router"
import Button from "@mui/material/Button"

const HomePage: React.FC<IPage> = (props) => {
  const history = useHistory()
  console.log("history:", history)

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])
  return (
    <div>
      <p>HOME PAGE</p>
      <Button>GO TO LOGIN</Button>
    </div>
  )
}

export default HomePage
