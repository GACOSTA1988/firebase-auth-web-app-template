import React, { useEffect } from "react"
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom"
import styled from "styled-components"
import logging from "./config/logger"
import routes from "./config/routes"
import firebase from "firebase/app"
import "firebase/auth"

const App: React.FC<{}> = (props) => {
  useEffect(() => {
    logging.info("Loading app.")
  }, [])

  return (
    <PageContainer>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </PageContainer>
  )
}

export default App

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
