import React from 'react'
import "./Album.css"
import Forja from "../../media/FORJA.svg"
import Miguel from "../../media/MIGUEL.svg"
import Red from "../../media/red.svg"
import Anima from "../../media/ANIMA.svg"
import Love from "../../media/LOVE.svg"
import Proc from "../../media/proc.svg"
import Wayo from "../../media/wayofilter.svg"
import Truz from "../../media/truzfilter.svg"
import Line from "../../media/linefilter.svg"


function Album() {
  return (
    <div>
        <div className='tittle-pj'>
            WEB PROJECTS
        </div>
        <section className='images-album'>
        <div className='works-images'>
            <a href='https://ricoththth.github.io/Forja-Empresas/' target="_blank" rel="noreferrer" ><img className='item-album' src={Forja}/></a>
            <a href='https://ricoththth.github.io/Miguel-The-Cat/' target="_blank" rel="noreferrer" ><img className='item-album' src={Miguel}/></a>
            <a href='https://ricoththth.github.io/redvindicadas/' target="_blank" rel="noreferrer" ><img className='item-album' src={Red}/></a>
            <a href='https://github.com/ricoththth/animalandia-bootstrap' target="_blank" rel="noreferrer" ><img className='item-album' src={Anima}/></a>
            <img className='item-album' src={Love}/>
            <img className='item-album' src={Proc}/>
        </div>
        </section>
        <div className='tittle-pj'>
            AR PROJECTS
        </div>
        <div className='subtittle-pj'>
            Instagram filters
        </div>
        <section className='images-album'>
        <div className='works-images'>
            <img className='item-ar' src={Wayo}/>
            <img className='item-ar' src={Line}/>
            <img className='item-ar' src={Truz}/>
        </div>
        </section>
    </div>
  )
}

export default Album