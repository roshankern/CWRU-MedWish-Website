// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import CustomAppBar from "./components/CustomAppBar/CustomAppBar.js";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./pages/HomePage/HomePage.js";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.js";
import EventsPage from "./pages/EventsPage/EventsPage.js";
import TeamsPage from "./pages/TeamPage/TeamPage.js";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/cwru-medwish-website" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamsPage />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

