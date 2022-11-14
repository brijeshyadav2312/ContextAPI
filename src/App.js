import React, { useState } from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from './components/Service';
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from './context';

function App() {

  const [isLight, setIsLight] = useState(true);

  const changeTheme = () => {
    setIsLight((prevState) => {
      return !prevState
    })
  }

  return (
      <ThemeContext.Provider value={{ isLight, changeTheme }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </ThemeContext.Provider> 
  );
}

export default App;