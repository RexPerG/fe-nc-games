import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
