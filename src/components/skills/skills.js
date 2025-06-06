import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillstitle'>Skills</span>

      <div className='skillscontainer'>

        <div className='skillsleft'>
          <h3>Technical Skills</h3>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>C language</p>
              <p>95%</p>
            </div>
            <div className='bar1'>
              <span className='first1'></span>
            </div>
          </div>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>C++ language</p>
              <p>80%</p>
            </div>
            <div className='bar1'>
              <span className='second1'></span>
            </div>
          </div>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>Fullstack Development (React Js and Laravel)</p>
              <p>92%</p>
            </div>
            <div className='bar1'>
              <span className='fourth1'></span>
            </div>
          </div>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>Core Java</p>
              <p>80%</p>
            </div>
            <div className='bar1'>
              <span className='third1'></span>
            </div>
          </div>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>HTML, CSS and JavaScript</p>
              <p>92%</p>
            </div>
            <div className='bar1'>
              <span className='fourth1'></span>
            </div>
          </div>

          <div className='skillsbar1'>
            <div className='info1'>
              <p>Python</p>
              <p>80%</p>
            </div>
            <div className='bar1'>
              <span className='fifth1'></span>
            </div>
          </div>
        </div>

        <div className='skillsright'>
          <h3>Professional Skills</h3>

          <div className='skillsbar2'>
            <div className='info2'>
              <p>Creativity</p>
              <p>91%</p>
            </div>
            <div className='bar2'>
              <span className='first2'></span>
            </div>
          </div>

          <div className='skillsbar2'>
            <div className='info2'>
              <p>Communication</p>
              <p>85%</p>
            </div>
            <div className='bar2'>
              <span className='second2'></span>
            </div>
          </div>

          <div className='skillsbar2'>
            <div className='info2'>
              <p>Problem Solving</p>
              <p>89%</p>
            </div>
            <div className='bar2'>
              <span className='third2'></span>
            </div>
          </div>

          <div className='skillsbar2'>
            <div className='info2'>
              <p>Team Work</p>
              <p>93%</p>
            </div>
            <div className='bar2'>
              <span className='fourth2'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
