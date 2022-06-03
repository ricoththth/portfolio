import React from 'react'
import "./Banner.css"
import bannerimage from "../../media/banner-home.svg"

function Banner() {
  return (
    <div className='banner'>
        <img className='image-banner' src={bannerimage}/>
    </div>
  )
}

export default Banner