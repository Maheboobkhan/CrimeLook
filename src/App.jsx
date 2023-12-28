import React from 'react'
import {Routes, Route} from 'react-router-dom';
import "./App.css"
import MainPage from './components/MainPage/MainPage';
import MagazineGallery from './components/MagazineGallery/MagazineGallery';
import AboutUs from './components/AboutUS/AboutUs';
import Gallery from './components/Gallery/Gallery';
import ContactUS from './components/ContactUS/ContactUs';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/magazines' element={<MagazineGallery />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Contact' element={<ContactUS />} />
      </Routes>
    </div>
  )
}

export default App