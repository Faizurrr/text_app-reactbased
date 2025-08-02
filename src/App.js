import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  const [mode, setMode] = useState('light');
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#021022';
      document.body.style.color = 'white';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

  return (
    <>
      <Navbar title="Text_app" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Write your text Here" />
      </div>
    </>
  );
}

export default App;
