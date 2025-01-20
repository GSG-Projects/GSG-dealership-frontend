import React from 'react';
import './Header.css';
import logo from '../../assets/img/GSG_logo.png';
import Link from './components/Link';
import { NavLink } from 'react-router-dom';

const LINKS = [ 
  { title: 'Marchi', path: '/marchi' },
  { title: 'Automobili', path: '/automobili' },
  { title: 'Contatti', path: '/contatti' },
];

function Header() {
  return (
    <header className="bg-black">
      <div className='flex justify-between items-center py-5 w-8/12 m-auto'>
        <nav className='w-1/3'>
          <ul className='text-white/60 flex gap-10'>
            {
              LINKS.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
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
          <button className=' text-white px-4 py-1 rounded'>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
