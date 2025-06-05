import React from 'react'
import './intro.css';
import bg from '../../assects/image.png';
import btnimg from '../../assects/hireme.png';
import { Link } from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
          <span className='hello'>Hello</span>
          <span className='introtext'>I'm <span className='introname'>Vinodkumar</span> <br/> Software Developer</span>
          <p className='intropara'>Computer science Engineering graduated from VTU <br/>having good coding skills on the Software Developer</p>
          <Link><button className='btn'><img src={btnimg} alt='Hire' className='btnimg'/></button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default intro
