import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Reviews from './Reviews';
import Categories from './Categories';

function Header() {
  console.log('in the Header function');
  return (
    <>
      <h2 className='box'>This is in the Header</h2>
      <Navbar />
    </>
  );
}

export default Header;
