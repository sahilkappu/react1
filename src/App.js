import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          tittle="React1"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container my-3">
                  <Textbox
                    showAlert={showAlert}
                    heading="Enter the text to analyze"
                    textenter="Enter the content"
                  />
                </div>
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
