import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/GSG_logo.png';
import TransparentButton from '../TransparentButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="z-10 bg-gradient-to-b from-neutral-900 to-black text-white border-t border-neutral-700">
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
            Auto
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

      <div className='py-10 w-11/12 mx-auto flex items-center justify-between'>
        <p className='text-neutral-500'>
          © 2025 GSG Auto. All Rights Reserved.
        </p>
        <div className='flex gap-10 text-neutral-500'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </footer>
  );
}
