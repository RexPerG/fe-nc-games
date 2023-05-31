import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <section >
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
