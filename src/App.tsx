import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalLayout from "./views/Layout/GlobalLayout";
import ViewLayout from "./views/Layout/ViewLayout";

import Login from "./views/Login/Login";
import NavBar from "./views/NavBar/NavBar";
import Home from "./views/Home/Home";
import News from "./views/News/News";
import About from "./views/About/About";
import NotFound from "./views/NotFound/NotFound";
import OutsideNotifications from "./views/OutsideNotification/OutsideNotification";

import ScreenProvider from "./context/screenContext";
import { UserContext } from "./context/userContext";

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
            <NavBar />
            <ViewLayout>
              <Routes>
                <Route index element={<Home />} key={0} />
                <Route path="/home" element={<Home />} key={1} />
                <Route path="/news" element={<News />} key={2} />
                <Route path="/about" element={<About />} key={3} />
                <Route path="*" element={<NotFound />} key={4} />
              </Routes>
            </ViewLayout>
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
