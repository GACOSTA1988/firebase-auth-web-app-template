import React, { useEffect } from "react"
import IPage from "../interfaces/page"
import logging from "../config/logger"
import { useHistory } from "react-router"
import Button from "@mui/material/Button"

const HomePage: React.FC<IPage> = (props) => {
  const history = useHistory()

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [])

  const handleOnClick = () => {
    history.push("/")
  }

  return (
    <div>
      <p>HOME PAGE</p>
      <Button onClick={handleOnClick}>GO TO LOGIN</Button>
    </div>
  )
}

export default HomePage
