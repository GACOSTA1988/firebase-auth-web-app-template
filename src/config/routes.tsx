import IRoute from "../interfaces/route"
import HomePage from "../ui/home"
import LoginPage from "../ui/login"

const routes: IRoute[] = [
  {
    path: "/",
    name: "Login Page",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/home",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
]

export default routes
