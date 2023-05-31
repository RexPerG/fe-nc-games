import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Reviews from './Reviews';
import Categories from './Categories';

function Header() {
  console.log('in the Header function');
  return (
    <>
      <img className='header' src="https://boardgamereview.co.uk/wp-content/uploads/2020/01/BoardGameReviewNOBG.png" alt="Logo"/>
      <Navbar />
    </>
  );
}

export default Header;
