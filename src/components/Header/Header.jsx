import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/GSG_logo.png';
import { NavLink } from 'react-router-dom';

const LINKS = [ 
  { title: 'Home', path: '/' },
  { title: 'Marchi', path: '/marchi' },
  { title: 'Auto', path: '/auto' },
  { title: 'Contatti', path: '/contatti' },
];

function Header() {
  const [barState, setBarState] = useState({});

  function handleBarIn(index) {
    setBarState((prev) => ({ ...prev, [index]: 'in' }));
  }

  function handleBarOut(index) {
    setBarState((prev) => ({ ...prev, [index]: 'out' }));
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
                    onMouseLeave={() => handleBarOut(index)}
                    to={item.path} 
                    className={({ isActive }) => 
                      `transition-all ease-in-out duration-300 z-10 ${isActive ? "font-bold text-white" : "text-white/60 hover:text-white"}`
                    }
                  >
                    {item.title}
                  </NavLink>
                  <div 
                    className={`h-1 absolute bottom-0 left-0 w-0 border-b border-white transition-all duration-300 pointer-events-none overflo
                      ${barState[index] === 'in' ? 'expand-bar-in' : barState[index] === 'out' ? 'expand-bar-out' : ''}`}
                  ></div>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className='w-20'>
        <NavLink to='/' className='w-1/3'>
          <img 
            className=''
            src={logo} 
            alt="GSG Logo" 
          />
        </NavLink>
        </div>

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
