import IRoute from "../interfaces/route"
import HomePage from "../ui/home"
import LoginPage from "../ui/login"
import LogoutPage from "../ui/logout"
import RegisterPage from "../ui/register"

const routes: IRoute[] = [
  {
    path: "/Login",
    name: "Login Page",
    component: LoginPage,
    exact: true,
    protected: false,
  },
  {
    path: "/Register",
    name: "Register Page",
    component: RegisterPage,
    exact: true,
    protected: false,
  },
  {
    path: "/home",
    name: "Home Page",
    component: HomePage,
    exact: true,
    protected: true,
  },
  {
    path: "/logout",
    name: "Logout Page",
    component: LogoutPage,
    exact: true,
    protected: true,
  },
]

export default routes
