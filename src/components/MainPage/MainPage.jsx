import React from 'react'
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel/Carousel'
import Footer from './Footer/Footer'
import Banner from './Banner/Banner'
import Headline from './Headline/Headline'
import NewsVideo from './News/NewsVideo'
import Magzine from './Magazine/Magzine'

const MainPage = () => {
    return (
        <div>
          <Navbar />
          <Banner />
          <Carousel />
          <Headline />
          <NewsVideo />
          <Magzine />
          <Footer />
        </div>
      )
}

export default MainPage