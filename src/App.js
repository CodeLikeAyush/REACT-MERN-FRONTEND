import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Register'
import Singin from './Singin'
import Navbar from './Navbar'
import Profile from './Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/register" element={<Contact />} />
        <Route exact path="/signin" element={<Singin />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>

  )
}

export default App


