import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <section >
        <Link to="/login">
          <button className='box'>Login</button>
        </Link>
        <Link to="/">
          <button className='box'>Reviews</button>
        </Link>
        <Link to="/categories">
          <button className='box'>Categories</button>
        </Link>
      </section>
    </>
  );
}

export default Navbar;
