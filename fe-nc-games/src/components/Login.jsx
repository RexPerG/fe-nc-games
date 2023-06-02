const Login = () => {
  return (
    <>
      <section className="box">
        <h2>Login</h2>
      </section>
      <form className="box">
        <div>
          <label htmlFor="">Username</label>
          <input type="text" name="username" id="" required />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" name="name" id="" required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <section className="box">
        <h2>Don't have an account yet, sign up below:</h2>
        <div>
          <button type="submit">Sign Up!</button>
        </div>
      </section>
    </>
  );
};

export default Login;