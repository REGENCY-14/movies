/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import RegistrationPage1 from "./pages/RegistrationPage1";
import RegistrationPage2 from "./pages/RegistrationPage2";
import RegistrationPage3 from "./pages/RegistrationPage3";
import AddNewCard from "./pages/AddNewCard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route element={<RegistrationPage1 />} path="registration" />
        <Route element={<RegistrationPage2 />} path="registration2" />
        <Route element={<RegistrationPage3 />} path="registration3" />
        <Route element={<AddNewCard/>} path="addCard"/>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}
