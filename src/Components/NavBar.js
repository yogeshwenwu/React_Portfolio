import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

function NavBar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(<header className='flex  w-full justify-between px-10 py-4 fixed  z-20 bg-primary'>
    <a className='font-bold text-yellow-400' href='#' >Yogesh</a>
    <nav className='hidden md:block'>
      <ul className='flex text-yellow-400'>
        <li><a href='/'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Project'>Projects</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
    </nav>
    {toggleMenu && <nav className='block md:hidden z-20'>
      <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-yellow-400 mobile-nav'>
        <li><a href='/'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Project'>Projects</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-yellow-400 h-5'/></button>
    </header>
  )
}
export default NavBar;