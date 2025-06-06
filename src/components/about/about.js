import React from 'react'
import './about.css';
import softdev from '../../assects/softdevimg.jpg';
import webdev from '../../assects/webdevimg.png';
import embdev from '../../assects/embdevimg.png';
import liveauction from '../../assects/liveauction.jpg';

const about = () => {
  return (
  <section id='about'>
     <span className='abouttitle'>About</span>
     <span className='aboutdisc'>Computer science Engineering graduated from VTU having good coding skills. Currently seeking for the job based on the Software Developer role.</span>
     <div className='aboutbars'>

         <div className='aboutbar'>
           <img src={softdev} alt='Software developer'className='aboutbarimg'/>
           <div className='aboutbartext'>
            <h2>Software developer</h2>
            <p>Passionate Software Engineer with 1 years of experience in developing web applications and backend systems.</p>
           </div>
         </div> 

         <div className='aboutbar'>
           <img src={liveauction} alt='Fullstack developer'className='aboutbarimg'/>
           <div className='aboutbartext'>
            <h2>Full Stack Web Developer</h2>
            <p>As a Fullstack Developer I have Created a Website which is "Live Cricket Auction" where we can add the Auctions,palyers and teams for the auction.</p>
           </div>
         </div> 

         <div className='aboutbar'>
           <img src={webdev} alt='Web development'className='aboutbarimg'/>
           <div className='aboutbartext'>
            <h2>Web developement</h2>
            <p>As a Web Developer I have worked on college projects in my graduation stage and many projects for the company.</p>
           </div>
         </div> 

         <div className='aboutbar'>
           <img src={embdev} alt='Embedded developer'className='aboutbarimg'/>
           <div className='aboutbartext'>
            <h2>Embedded developer</h2>
            <p>Embedded systems developer I know the languages like C ,C++,Embedded C concepts very well and i worked for a minor project in the company.</p>
           </div>
         </div> 
         
     </div> 
  </section>
  )
}

export default about
