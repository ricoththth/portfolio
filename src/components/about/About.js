import React from 'react'
import "./About.css"
import mephoto from "../../media/mephoto.svg"



function About() {
  return (
      <div>
        <div>
            <h3>ABOUT ME</h3>
            <p>Hey! My name is Lizeth Rico, since I was little I was fascinated by the creation, arts, crafts; I was fascinated to materialize all the ideas in my head, then I discovered the world of fashion my mom gave me a monster high notebook where I could create their clothes, at that moment I fell in love with fashion, then I would discover that I love the world of design and also what is behind it also i'm ENFP.</p>
        </div>
        <div className='extras'>
              <img className='image-me' src={mephoto}/>
        </div>
        <div className='spiderman-quote'>
        That person who helps others simply because it should or must be done, and because it is the right thing to do, is indeed, without a doubt, a real superhero 
        </div>
      </div>
  )
}

export default About