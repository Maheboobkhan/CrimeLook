import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css"
import MainPage from './components/MainPage/MainPage';
import MagazineGallery from './components/MagazineGallery/MagazineGallery';
import AboutUs from './components/AboutUS/AboutUs';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/magazines' element={<MagazineGallery />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes></BrowserRouter>
    </div>
  )
}

export default App