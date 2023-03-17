import { NavBarType } from "../utils/interfaces/NavBarTypes";
import Home from "../views/Home/Home";
import News from "../views/News/News";
import Profile from "../views/Profile/Profile";
import { HomeSVG, NewsSVG, ProfileSVG } from "./iconsSVG";

export const navBarRoutes = (iconSize?): Array<NavBarType> => {
  return [
    {
      name: "Home",
      path: "/home",
      component: <Home />,
      icon: <HomeSVG width={iconSize} height={iconSize} />,
    },
    {
      name: "News",
      path: "/news",
      component: <News />,
      icon: <NewsSVG width={iconSize} height={iconSize} />,
    },
    {
      name: "Profile",
      path: "/profile",
      component: <Profile />,
      icon: <ProfileSVG width={iconSize} height={iconSize} />,
    },
  ];
};
