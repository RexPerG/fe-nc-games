import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <section >
        <Link to="/">
          <button className='box'>Home</button>
        </Link>
        <Link to="/categories">
          <button className='box'>Categories</button>
        </Link>
        <Link to="/login">
          <button className='box'>Login</button>
        </Link>
      </section>
    </>
  );
}

export default Navbar;
