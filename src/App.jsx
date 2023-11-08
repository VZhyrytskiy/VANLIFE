import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './index.css'
import './App.css';

import { About, Home } from './pages';

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <header>
                    <Link className="site-logo" to="/">#VANLIFE</Link>
                    <nav>
                        <Link to="/about">About</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}