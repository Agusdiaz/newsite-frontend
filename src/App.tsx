import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import GeneralLayout from "./views/Layout/GeneralLayout";

import Login from "./views/Login/Login";
import NavBar from "./views/NavBar/NavBar";
import Home from "./views/Home/Home";
import News from "./views/News/News";
import About from "./views/About/About";
import NotFound from "./views/NotFound/NotFound";
import OutsideNotifications from "./views/OutsideNotification/OutsideNotification";

import ScreenProvider from "./context/screenContext";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <ScreenProvider>
      <GeneralLayout>
        {!isAuthenticated ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/home" element={<Home />} key={1} />
              <Route path="/news" element={<News />} key={2} />
              <Route path="/about" element={<About />} key={3} />
              <Route path="*" element={<NotFound />} key={4} />
            </Routes>
          </>
        ) : (
          <Login
            imagePath={selectedImage.path}
            imageAlt={selectedImage.alt}
            setAuthenticated={setIsAuthenticated}
          />
        )}
      </GeneralLayout>
      <OutsideNotifications />
    </ScreenProvider>
  );
};

export default App;
