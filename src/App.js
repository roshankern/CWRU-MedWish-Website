// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js"; // Import the Footer component
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
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
