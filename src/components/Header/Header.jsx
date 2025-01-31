import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/GSG_logo.png';
import { NavLink } from 'react-router-dom';

const LINKS = [ 
  { title: 'Marchi', path: '/marchi' },
  { title: 'Automobili', path: '/automobili' },
  { title: 'Contatti', path: '/contatti' },
];

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleBarIn(index) {
    setActiveIndex(index);
  }

  function handleBarOut() {
    setActiveIndex(null);
  }

  return (
    <header className="bg-black">
      <div className='flex justify-between items-center py-5 w-8/12 m-auto'>
        <nav className='w-1/3'>
          <ul className='flex gap-10'>
            {
              LINKS.map((item, index) => (
                <li key={index} className="relative">
                  <NavLink 
                    onMouseEnter={() => handleBarIn(index)}
                    onMouseLeave={handleBarOut}
                    to={item.path} 
                    className={({ isActive }) => 
                      `transition-all ease-in-out duration-300 ${isActive ? "font-bold text-white" : "text-white/60 hover:text-white"}`
                    }
                  >
                    {item.title}
                  </NavLink>

                  <div 
                    className={`border-b border-white absolute bottom-0 left-0 transition-all duration-500 ${activeIndex === index ? 'expand-bar-in' : 'expand-bar-out'}`}
                  ></div>
                </li>
              ))
            }
          </ul>
        </nav>

        <NavLink to='/' className='w-1/3'>
          <img 
            className='w-20 m-auto'
            src={logo} 
            alt="GSG Logo" 
          />
        </NavLink>

        <div className='w-1/3 justify-end flex'>
          <button className='text-white px-4 py-1 rounded'>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
