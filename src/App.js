import React from 'react';
import Login from './components/Auth/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;