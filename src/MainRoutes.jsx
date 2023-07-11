import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";

export const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
  );
};
