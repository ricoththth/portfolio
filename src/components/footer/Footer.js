import React from 'react'
import "./Footer.css"
import Git from "../../media/github.svg"
import Ig from "../../media/insta.svg"
import In from "../../media/linked.svg"
import { Redirect } from "react-router-dom"

function Footer() {
  return (
    <div className='footer-img'>
        <a href='https://github.com/ricoththth' target="_blank" rel="noreferrer" ><img className='image-footer' src={Git}/></a>
        <a href='https://www.instagram.com/ricoththth/' target="_blank" rel="noreferrer"><img className='image-footer' src={Ig}/></a>
        <a href='https://www.linkedin.com/in/lizeth-rico/' target="_blank" rel="noreferrer"><img className='image-footer' src={In}/></a>
    </div>
  )
}

export default Footer