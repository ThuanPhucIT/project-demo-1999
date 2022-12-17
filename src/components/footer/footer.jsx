import React from 'react'
import { Link } from 'react-scroll';
import logoTeam from  '../../assets/logoTeam.png';
const Footer = () => {
  return (
      <div id='footer' className="mt-28 pb-20 ">
       <div className='flex flex-col items-center justify-aroundx'>
        <div className='flex flex-col items-center'>
            <div className='flex mb-4 items-center '>
              <img className='w-16 h-16  mr-2 border-2 border-black' src={logoTeam} alt="" />
              <p className='text-2xl font-zen'>9TH-CODERS</p>
            </div>
            <a href='home' className=' rounded-3xl block border-2 border-blue-400 py-2 px-10 hover:border-black hover:bg-blue-400 hover:rounded-3xl hover:shadow-2xl hover:shadow-shadow-gray-600'>HOME</a>
        </div>
        <div className='flex items-center '>
            <a className="m-6 pb-1 border-b-2 border-b-black font-extrabold text-xl">PAGE</a>
            <Link to="home" spy={true} smooth={true} offset={-10} duration={500} className="m-6 cursor-pointer block pb-1 border-b-2 border-transparent hover:border-b-blue-400">TRANG CHỦ</Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="m-6 cursor-pointer block pb-1 border-b-2 border-transparent hover:border-b-blue-400">GIỚI THIỆU</Link>
            <Link to="progress" spy={true} smooth={true} offset={-50} duration={500} className="m-6 cursor-pointer block pb-1 border-b-2 border-transparent hover:border-b-blue-400">QUÁ TRÌNH</Link>
            <Link to="scrum" spy={true} smooth={true} offset={-50} duration={500} className="m-6 cursor-pointer block pb-1 border-b-2 border-transparent hover:border-b-blue-400">SCRUM</Link>
            <Link to="project" spy={true} smooth={true} offset={-50} duration={500} className="m-6 cursor-pointer block pb-1 border-b-2 border-transparent hover:border-b-blue-400">PROJECT</Link>
        </div>
       </div>
      </div>
  )
}

export default Footer