import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";


import Home from "./pages/Index";
// import Menu from "./pages/Menu";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App;