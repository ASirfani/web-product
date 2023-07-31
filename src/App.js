import React from "react";
import './App.css'
import TopMenu from "./pages/TopMenu";
import SearchMenu from "./pages/SearchMenu";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <>
      <TopMenu/>
      <SearchMenu/>
      <Menu/>
      <Footer/>
    </>
  )

}

export default App;