import Navbar from './NavBar';

function Header() {
  return (
    <>
      <img
        className="header"
        src="https://boardgamereview.co.uk/wp-content/uploads/2020/01/BoardGameReviewNOBG.png"
        alt="Logo"
        style={{ marginTop: '0px', width: '200px', height: '200px' }}
      />
      <Navbar />
    </>
  );
}

export default Header;
