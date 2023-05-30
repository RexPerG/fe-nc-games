import { Link } from 'react-router-dom';

function Navbar() {
  console.log('in the Navbar function');
  return (
    <>
      <h3 className='box'>This is in the Navbar</h3>
      <section className='box'>
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
