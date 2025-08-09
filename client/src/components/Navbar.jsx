import React, { useState } from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all duration-300 ${location.pathname === '/' ? 'bg-light' : 'bg-white'}`}>
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>

      {/* Hamburger icon (only on small screens)
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <img src={assets.menu_icon} alt="menu" className="h-6 w-6" />
      </button> */}

      {/* Menu Links */}
        <div className={`
        sm:flex items-center gap-8
        max-sm:fixed max-sm:top-16 max-sm:right-0 max-sm:w-full max-sm:h-screen max-sm:flex max-sm:flex-col max-sm:items-start max-sm:p-4 max-sm:z-50 max-sm:border-t border-borderColor transition-all duration-300
        ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}
        ${location.pathname === '/' ? 'bg-light' : 'bg-white'}
      `}>
        {menuLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            onClick={() => setOpen(false)} // close menu on mobile click
            className="text-base hover:text-black"
          >
            {link.name}
          </Link>
            ))}

            <div className='hidden lg:flex item-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'><input type='text' className='py-1.5 w-ffull br-transparent outline-none placeholder-grey-500' placeholder='Search products'/>
                <img src={assets.search_icon} alt="search" />
            </div>

            <div className='flex max-sm:flex-col items-start sm:items-center  gap-6'>
                <button onClick={()=> navigate('/owner')} className='cursor-pointer'>Dashboard</button>
                <button onClick={()=> setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
            </div>
        </div>
        <div className='sm:hidden cursor-pointer' area-label='menu' onClick={() => setOpen(!open)}>
            <img src={open?assets.close_icon:assets.menu_icon} alt="menu" />
        </div>
    </div>
  );
};

export default Navbar;
