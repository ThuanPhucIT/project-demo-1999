import React from 'react'
import { Link } from 'react-scroll';
import {GiMoon} from 'react-icons/gi';
import logoTeam from  '../../assets/logoTeam.png';
import {useState} from "react";

const Nav = () => {
  
  return (
    <div className={darkMode ? "dark" : ""}>
       <div className='flex justify-between items-center dark:bg-black'>
        <div className='flex items-center'>
          <div><img className='w-16 h-16  mr-2 border-2 border-black' src={logoTeam} alt="" /></div>
          <span className='text-2xl font-zen'>9TH-CODERS</span>
        </div>
        <ul className='flex content-center items-center justify-between'>
          <li className="mx-7 "><Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">TRANG CHỦ</Link></li>
          <li className="mx-7 "><Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">GIỚI THIỆU</Link></li>
          <li className="mx-7 "><Link to="progress" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">QUÁ TRÌNH</Link></li>
          <li className="mx-7 "><Link to="scrum" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">SCRUM</Link></li>
          <li className="mx-7 "><Link to="project" spy={true} smooth={true} offset={50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">PROJECT</Link></li>
          <button  onClick={() => setDarkMode(!darkMode)} className='text-4xl'><GiMoon/></button>
        </ul> 
       </div>
    </div>
  )}

export default Nav