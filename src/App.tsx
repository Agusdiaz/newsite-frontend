import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

/// IMPORT LAYOUT

/// IMPORT VIEWS
import Login from "./views/Login/Login";

/// IMPORT Context providers
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
      {isAuthenticated ? (
        <div>Main</div>
      ) : (
        <Login imagePath={selectedImage.path} imageAlt={selectedImage.alt} setAuthenticated={setIsAuthenticated} />
      )}
    </ScreenProvider>
  );
};

export default App;
