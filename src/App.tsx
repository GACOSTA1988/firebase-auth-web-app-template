import React, { useEffect } from "react"
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom"
import logging from "./config/logger"
import routes from "./config/routes"

const App: React.FC<{}> = (props) => {
  useEffect(() => {
    logging.info("Loading app.")
  }, [])

  return (
    <div>
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
    </div>
  )
}

export default App
