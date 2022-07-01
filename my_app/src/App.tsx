import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './components/Albums';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import UserTable from './components/UserTable';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomePage />}/>
          <Route path="/users" element={<UserTable />}/>
          <Route path="/albums" element={<Albums />}/>
        </Routes>
      </Router>    
    </>
  )
}

export default React.memo(App);
