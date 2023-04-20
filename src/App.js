import './App.css';

import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js'
import { useState } from 'react';
import React from "react";



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
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm />
        {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm/>}/>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
