import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#212529";
    }
    showAlert(
      !darkMode ? "Dark Mode has been enabled" : "Dark Mode has been disabled",
      !darkMode ? "success" : "warning"
    );
  };
  return (
    <>
      <Router>
        <Navbar
          title="SpyderLabs"
          about="About SpyderLabs"
          mode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert={alert}></Alert>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                textAreaLabel="Enter your text"
                placeholder="A big brown fox jumped over the lazy dog"
                mode={darkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About aboutText="About SpyderLabs" mode={darkMode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
