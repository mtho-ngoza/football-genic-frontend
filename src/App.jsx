import React from 'react'
import './App.css'
import Products from './components/products/Products.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import NavBar from "./components/shared/NavBar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {Toaster} from "react-hot-toast";
import Cart from "./components/cart/Cart.jsx";

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </Router>
            <Toaster position={'top-right'}/>
        </React.Fragment>
    )
}

export default App
