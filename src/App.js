import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";


import Home from "./pages/Index";
import Products from './pages/Product/Products/index'
import NewArrivals from './pages/Product/NewArrival'
import Offers from './pages/Product/Offer'
import TopSelling from './pages/Product/TopProduct'
import HomeLayout from './pages/Product/HomeLayout'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<HomeLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/top-selling" element={<TopSelling />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;