import React from 'react'
import {Routes, Route} from 'react-router-dom';
import "./App.css"
import MainPage from './components/MainPage/MainPage';
import MagazineGallery from './components/MagazineGallery/MagazineGallery';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/magazines' element={<MagazineGallery />} />
      </Routes>
    </div>
  )
}

export default App