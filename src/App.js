import './App.css';
import './index.css';

import AsideNavbar from './components/home/asideNavbar';
import Banner from './components/home/banner';
import Cards from './components/about/cards';
import Projects from './components/projects/projects';
import Progress from './components/progress/progress';
import Footer from './components/footer/footer';
import Scrum from './components/scrum/scrum';
import { Link } from 'react-scroll';
import {GiMoon} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import {useState} from "react";
import logoTeam from './logoTeamNav.png';


function App() {
  const [darkMode, setDarkMode] = useState(false);


  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
  <div className={darkMode ? "dark" : ""}>
    <div className='w-1/12 hidden justify-around dark:text-white md:flex'>
        <AsideNavbar/>
    </div>
    <div className='flex justify-around bg-clip-padding text-black bg-gray-500 dark:bg-gradient-to-r from-gray-500 to-gray-800 dark:text-white '>
      <div className='bg-white p-4 w-screen dark:bg-black md:w-10/12 md:px-28'>

        
       <div id='home' className="hidden pt-10 dark:bg-black md:h-screen md:block">
         <div className='flex justify-between items-center dark:bg-black'>
          <div className='flex items-center'>
          <div><img className='w-16 h-16  mr-2 border-2 border-black' src={logoTeam} alt="" /></div>
          <span className='text-2xl font-zen'>9TH-CODERS</span>
         </div>
         <ul className='flex content-center items-center justify-between '>
          <li className="mx-7 "><Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">TRANG CHỦ</Link></li>
          <li className="mx-7 "><Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">GIỚI THIỆU</Link></li>
          <li className="mx-7 "><Link to="progress" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">QUÁ TRÌNH</Link></li>
          <li className="mx-7 "><Link to="scrum" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">SCRUM</Link></li>
          <li className="mx-7 "><Link to="project" spy={true} smooth={true} offset={50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">PROJECT</Link></li>
          <button  onClick={() => setDarkMode(!darkMode)} className='text-4xl'><GiMoon/></button>
         </ul>
        </div>
        <Banner/>
       </div>

       
       <div id='home' className="  w-full  pt-10 dark:bg-black md:h-screen md:hidden">
        <div className='flex justify-between'>
         <div className='flex flex-col justify-between items-center dark:bg-black'>
          <div className='flex items-center'>
          <div><img className='w-16 h-16  mr-2 border-2 border-black' src={logoTeam} alt="" /></div>
          <span className='text-2xl font-zen'>9TH-CODERS</span>
         </div>
         </div> 
         <div className='flex'>
          <button  onClick={() => setDarkMode(!darkMode)} className='text-4xl mr-3'><GiMoon/></button>
          <button  onClick={handleNav} className='text-4xl'>{!nav ?<FiMenu/>:<AiOutlineClose/>}</button>
         </div>
        </div>
        <ul className={nav ? "flex flex-col w-2/3 " : "hidden"}>
          <li className= "block border-b-2 w-full mb-4 mt-10 p-2 hover:bg-blue-400 "><Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">TRANG CHỦ</Link></li>
          <li className="block border-b-2 w-full  my-4 p-2 hover:bg-blue-400"><Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">GIỚI THIỆU</Link></li>
          <li className="block border-b-2 w-full  my-4 p-2 hover:bg-blue-400"><Link to="progress" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">QUÁ TRÌNH</Link></li>
          <li className="block border-b-2 w-full  my-4 p-2 hover:bg-blue-400"><Link to="scrum" spy={true} smooth={true} offset={-50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">SCRUM</Link></li>
          <li className="block border-b-2 w-full  my-4 p-2 hover:bg-blue-400"><Link to="project" spy={true} smooth={true} offset={50} duration={500} className="block pb-1 border-b-2 cursor-pointer border-transparent hover:border-b-blue-400 ">PROJECT</Link></li>
         </ul>
       </div>
       <div className='md:hidden'><Banner/></div>
      <div id='about' className=' mb-16 '>
        <Cards/>
      </div>
      <div id='progress' className='mt-40 mb-20 '>
        <Progress/>
      </div>
      <div id='scrum' className='mt-20'>
        <Scrum/>
      </div>
      <div id='project' className='mt-10 '>
        <Projects/>
      </div>
      <div className='hidden md:block'>
        <Footer/>
      </div>
      
     </div>
    </div>
  </div>  
  )
}

export default App;
