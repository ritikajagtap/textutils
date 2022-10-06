import './App.css';

import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About.js'
import Alert from './components/Alert.js'
import { useState } from 'react';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether the dark mode is on or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey ';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          
          <Route exact path="/" element={<TextForm/>}>
          </Route>
        </Routes>
        {/* <About></About> */}
      </div>
      </Router>
    </>
  );
}

export default App;
