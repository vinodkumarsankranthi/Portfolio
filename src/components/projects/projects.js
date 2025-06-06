import React from 'react'
import './projects.css';
import pro1 from '../../assects/project1.jpg';
import pro2 from '../../assects/project2.png';
import pro3 from '../../assects/project3.png';
import pro4 from '../../assects/project4.png';
import liveauction from '../../assects/liveauction.jpg';

const projects = () => {
  return (
    <section id='projects'>
     <span className='projectstitle'>Projects</span>
           <div class="projectscontainer">

            <div className="project">
              <img src={liveauction} alt="Live Cricket Auction Project" className="pro1" />
              <p className="text22">Full Stack Web Developer</p>
              <p className="text33">
                I have created a dynamic web application named <strong>Live Cricket Auction</strong>. This platform allows users to manage cricket auctions in real time.
              </p>
              <ul>
                <li>Create and manage multiple auctions with custom rules and settings.</li>
                <li>Add, edit, or delete teams and assign team budgets like in real IPL auctions.</li>
                <li>Add a player pool with player details such as role, base price, and stats.</li>
                <li>Conduct live bidding sessions where teams can bid for players in real time.</li>
                <li>Display real-time bid status and assign players to the winning teams automatically.</li>
              </ul>
            </div>

           <div class="project">
            <img src={pro1} alt='project1'className='pro1'/>
              <p className='text22'>WEB APPLICATION</p>
              <p className='text33'>Our project is a web application that predicts that a customer will buy a product that he is interested in based on his social media posts such as Twitter tweets.</p>
                <ul>
                  <li>Retrieve tweets that are related to the target product.</li>
                  <li>Choose the best model having highest performance measure.</li>
                  <li>Rank the customers according to their level/intensity of their purchase intention.</li>
                  <li>Companies and businessmen can directly target those customers which have shown high intention to buy the product.</li>
                </ul>
              </div> 

              
           <div class="project">
            <img src={pro2} alt='project2'className='pro2'/>
              <p className='text22'>ANDROID APPLICATION</p>
              <p className='text33'>Media Player is android application that can play various audio and video files.</p>
                <ul>
                  <li>Application will be written using Android SDK in Java.</li>
                  <li>The application will play audio files with format of MP3.</li>
                  <li>The application will play video files with format of 3GP, MP4.</li>
                  <li> Background playing options.</li>
                </ul>
              </div> 

              
           <div class="project">
            <img src={pro3} alt='project3'className='pro3'/>
              <p className='text22'>DATA BASE MANAGEMENT SYSTEM</p>
              <p className='text33'>The objective of “Employee Management System” is designing a scheduling system for a work centre.</p>
                <ul>
                  <li>MySQL is used as Database</li>
                  <li>HTML is used as Front end development.</li>
                  <li>Java Script is used as Scripting language.</li>
                  <li>PHP is used as Technology.</li>
                </ul>
              </div> 

              
           <div class="project">
            <img src={pro4} alt='project4'className='pro4'/>
              <p className='text22'>COMPUTER GRAPHICS</p>
              <p className='text33'>The objective of the game is to navigate through the maze and complete the game within a minute then he wins the game either he loses the game.</p>
                <ul>
                  <li>To develop a Open GL software called “PERPLEXITIY”.</li>
                  <li>To build the environment for the player to improve his quick thinking/accuracy.</li>
                  <li>To build the basic platform of problem solving for the player.</li>
                  <li>To progress the thinking ability of the player to solve the game.</li>
                </ul>
              </div> 

            </div>
      </section>
  )
}

export default projects
