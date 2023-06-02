import { Link } from 'react-router-dom';

const ErrorUserNotFound = () => {
  return (
    <>
      <section className="errorMessage">
        <h2>Oops, looks like you haven't logged in yet!</h2>
        <h2>If you want to leave a comment you need to login.</h2>
        <h2>Click below to login or sign up</h2>
        <Link className="Link" to={`/login`}>
          <button className="box">Login or Signup</button>
        </Link>
      </section>
    </>
  );
};

export default ErrorUserNotFound;
