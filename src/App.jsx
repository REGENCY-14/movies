/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/Layout/MainLayout";
import { Routes,Route } from "react-router-dom";
import RegistrationPage1 from "./pages/RegistrationPage1";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route element={<HomePage/>} index/>
        <Route element={<RegistrationPage1/>} path="registration"/>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}
