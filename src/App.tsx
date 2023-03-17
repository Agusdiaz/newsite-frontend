import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalLayout from "./views/Layout/GlobalLayout";
import ViewLayout from "./views/Layout/ViewLayout";

import Login from "./views/Login/Login";
import NavBarWeb from "./views/NavBar/NavBarWeb";
import Home from "./views/Home/Home";
import News from "./views/News/News";
import NotFound from "./views/NotFound/NotFound";
import OutsideNotifications from "./views/OutsideNotification/OutsideNotification";

import ScreenProvider from "./context/screenContext";
import { UserContext } from "./context/userContext";
import NavBarMobile from "./views/NavBar/NavBarMobile";
import Profile from "./views/Profile/Profile";

import isMobileDevice from "./utils/isMobileDevice";

const randomImages = [
  { path: "mountains.jpg", alt: "Mountains pic" },
  { path: "clouds.jpg", alt: "Clouds pic" },
  { path: "flowers.jpg", alt: "Flowers pic" },
  { path: "sea.jpg", alt: "Sea pic" },
  { path: "ice.jpg", alt: "Ice pic" },
  { path: "rain.jpg", alt: "Rain pic" },
];
const selectedImage = randomImages[Math.floor(Math.random() * 6)];

const App = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <ScreenProvider>
      <GlobalLayout>
        {isAuthenticated ? (
          <>
            {!isMobileDevice() && <NavBarWeb />}
            <ViewLayout>
              <Routes>
                <Route index element={<Home />} key={0} />
                <Route path="/home" element={<Home />} key={1} />
                <Route path="/news" element={<News />} key={2} />
                <Route path="/profile" element={<Profile />} key={3} />
                <Route path="*" element={<NotFound />} key={4} />
              </Routes>
            </ViewLayout>
            {isMobileDevice() && <NavBarMobile />}
          </>
        ) : (
          <Routes>
            <Route
              index
              element={
                <Login
                  imagePath={selectedImage.path}
                  imageAlt={selectedImage.alt}
                />
              }
              key={0}
            />
            <Route
              path="/login"
              element={
                <Login
                  imagePath={selectedImage.path}
                  imageAlt={selectedImage.alt}
                />
              }
              key={1}
            />
            <Route path="*" element={<NotFound />} key={2} />
          </Routes>
        )}
      </GlobalLayout>
      <OutsideNotifications />
    </ScreenProvider>
  );
};

export default App;
