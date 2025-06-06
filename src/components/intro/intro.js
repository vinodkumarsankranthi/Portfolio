import React from 'react'
import './intro.css';
import bg from '../../assects/image.png';
import btnimg from '../../assects/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introtext">
          I'm <span className="introname">Vinodkumar</span><br />Full Stack Web Developer
        </span>
        <p className="intropara">
          Computer Science Engineering graduate from VTU <br />
          with strong skills in software development and coding.
        </p>
        
        {/* ✅ Link to contact section */}
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
          <button className="btn">
            <img src={btnimg} alt="Hire" className="btnimg" />
          </button>
        </Link>
      </div>

      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro;
