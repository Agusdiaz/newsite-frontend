import { NavBarType } from "../utils/interfaces/NavBarTypes";
import About from "../views/About/About";
import Home from "../views/Home/Home";
import News from "../views/News/News";

export const navBarRoutes: Array<NavBarType> = [
  {
    name: "Home",
    path: "/home",
    component: <Home />,
    icon: null,
  },
  {
    name: "News",
    path: "/news",
    component: <News />,
    icon: null,
  },
  {
    name: "About me",
    path: "/about",
    component: <About />,
    icon: null,
  },
];
