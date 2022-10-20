
import React from 'react'
import "./style.css"
import { Route, Routes } from 'react-router-dom'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import Main from './pages/Main'
import Nav from './components/Nav'


function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/currencies" element={<Currencies />} />
                <Route path="/price/:symbol" element={<Price />} />
            </Routes>
        </div>
    )
}

export default App