// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
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
          <Route path="/teams" element={<TeamPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
