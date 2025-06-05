import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assects/logo.png';
import contactimg from '../../assects/contactimg.png'
import { Link } from 'react-scroll';
import menu from '../../assects/mobmenu.png';


const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false);
  return (
   <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>

    <div className='desktopmenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuelistitem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuelistitem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuelistitem'>Skills</Link>
        <Link activeClass='active' to='experiance' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuelistitem'>Experiance</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuelistitem'>Projects</Link>
    </div>

    <button className='desktopmenubtn' onClick={()=> {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
        <img src= {contactimg} alt=''className='desktopmenuimg'/></button>

<img src={menu} alt='menu' className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
<div className='navmenu' style={{display: showMenu? 'flex':'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Skills</Link>
    <Link activeClass='active' to='experiance' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Experiance</Link>
    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>projects</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>contact</Link>
</div>
   </nav>
  )
}

export default Navbar