import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './index.css'
import './App.css';

import { About, Home } from './pages';

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}