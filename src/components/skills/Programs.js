import React from 'react'
import "./Programs.css"
import Figma from "../../media/image 25.svg"
import Premiere from "../../media/image 26.svg"
import Photoshop from "../../media/image 27.svg"
import Illustrator from "../../media/image 28.svg"
import Html from "../../media/html.png"
import Css from "../../media/image 29.png"
import Riat from "../../media/image 32.svg"
import Boot from "../../media/image 33.svg"
import Javs from "../../media/Ellipse 989.svg"
import Spark from "../../media/spark.png"

function Programs() {
  return (
      <div className='skills'>
          <div className='tittle'>
            SKILLS
        </div>
            <div className='sub-tittle'>DESIGN SKILLS</div>
        <section className='designer'>
            <div className='images'>
                <img className='figma' src={Figma}/>
                <img className='item-skills' src={Premiere}/>
                <img className='item-skills' src={Photoshop}/>
                <img className='item-skills' src={Illustrator}/>
                <img className='spark' src={Spark}/>
            </div>
        </section>
        <div className='sub-tittle'>PROGRAMMING SKILLS</div>
        <section className='designer'>
        <div className='images'>
                <img className='html-skills' src={Html}/>
                <img className='item-skills' src={Css}/>
                <img className='item-skills' src={Javs}/>
                <img className='item-skills' src={Riat}/>
                <img className='item-skills' src={Boot}/>
            </div>
        </section>
        <div className='tittle-two'>LANGUAGES</div>
        <section className='langua'>
            <h2 className='text-leng'>English</h2>
            <h2 className='text-leng'>Spanish</h2>
        </section>
        
      </div>
  )
}

export default Programs