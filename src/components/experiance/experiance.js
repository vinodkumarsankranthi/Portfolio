import React from 'react'
import './experiance.css';
import py from '../../assects/python.png';
import c from '../../assects/c.jpeg';
import cext from '../../assects/c++.png';
import java from '../../assects/java.png';
import js from '../../assects/js.png';
import htmlcss from '../../assects/html.jpg';
import backimg2 from '../../assects/background2.jpg';
import complogo from '../../assects/companylogo.png';
import reactjs from '../../assects/reactjs.png';
import laravel from '../../assects/laravel.png';

const experiance = () => {
  return (
<section id='experiance'>
   <span className='experiancetitle'>Experiance</span>
     <div className='experiancecontainer'>

     <div className='experianceleft'>
      <div className='images'>
       <div className='img1'>
         <img src={py} alt='python'className='expleftimg'/>
         <div className='text'>
           <h3>Python</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={c} alt='C Language'className='expleftimg'/>
         <div className='text'>
           <h3>C Language</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={cext} alt='C++'className='expleftimg'/>
         <div className='text'>
           <h3>C++ Language</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={reactjs} alt='react js'className='expleftimg'/>
         <div className='text'>
           <h3>React Js (Frontend)</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={laravel} alt='laravel'className='expleftimg'/>
         <div className='text'>
           <h3>Laravel (Backend)</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={java} alt='Java'className='expleftimg'/>
         <div className='text'>
           <h3>Java</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={js} alt='Java script'className='expleftimg'/>
         <div className='text'>
           <h3>Javascript</h3>
         </div>
       </div>

       <div className='img1'>
         <img src={htmlcss} alt='Html and Css'className='expleftimg'/>
         <div className='text'>
           <h3>Html and Css</h3>
         </div>
       </div>

       </div>
     </div>

     <div className='experianceright'>
     <img src={backimg2} alt='background1'className='backimg2'/>
        <div class="internship">
        <img src={complogo} alt='companylogo'className='complogo'/>
         <p className='text1'>Software Intern</p>
         <p className='text2'>ThunderSoft India Pvt Ltd (August 2023 - April 2024, Hyderabad, India)</p>
         <p className='text3'>Achievements:</p>
         <br></br>
           <ul>
            <li>Completed a software internship focused on C, C++, Python, and Core Java.</li>
            <li>Collaborated on various projects within a team environment, enhancing both technical and teamwork skills.</li>
            <li>Gained practical experience in software development processes and methodologies.</li>
           </ul> 
        </div>
      </div>
     </div>
</section>
  )
}

export default experiance
