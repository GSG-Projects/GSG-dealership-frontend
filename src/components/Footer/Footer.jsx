import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/GSG_logo.png';
import TransparentButton from '../TransparentButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white border-t border-neutral-700">
      <div className="grid grid-cols-3 w-full py-8">
        <img
          src={logo}
          alt="GSG Logo"
          className='mx-auto scale-75'
        />
        <div className='flex gap-16 items-center justify-center'>
          <NavLink>
            Marchi
          </NavLink>
          <NavLink>
            Automobili
          </NavLink>
          <NavLink>
            Contatti
          </NavLink>
        </div>
        <div className='flex items-center justify-center'>
          <TransparentButton>
            Registrati
          </TransparentButton>
        </div>
      </div>

      <hr className='w-11/12 mx-auto border-neutral-700 my-22'/>

      <div className='py-10 w-11/12 mx-auto'>
        <p className='text-neutral-500'>
          © 2025 GSG Automobili. All Rights Reserved.
        </p>
        <div className='flex gap-10 text-neutral-500 bg-white'>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}
