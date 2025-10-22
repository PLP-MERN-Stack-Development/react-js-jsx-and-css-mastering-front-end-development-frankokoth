import React from "react";  
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ApiDataPage from "./pages/ApiDataPage";
import TaskPage from "./pages/TaskPage";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/TaskPage" element={<TaskPage />} />
        <Route path="/ApiDataPage" element={<ApiDataPage />} />
    </Routes>
  );
}