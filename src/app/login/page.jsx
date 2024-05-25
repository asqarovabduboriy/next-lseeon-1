import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <h1 className="title__login">Accaunt</h1>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Password"/>
          <input type="text" placeholder="Confirm Password"/>
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default Login;
