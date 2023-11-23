import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const {user, createUser} =useContext(AuthContext)
  console.log(user)
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const email =form.email.value
    const password =form.password.value
    const name =form.name.value
    console.log(name,email,password)
    createUser(email,password)
    .then(result =>{
      const loggedUser =result.user
      console.log(loggedUser)
      form.reset()
    })
    .catch(error =>{
      console.log(error.message)
    })
  
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now.</h1>
          <p className="py-6 font-semibold">
            Welcome to auth content.for more info visit our official site.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p><small>Already have an account? <Link to='/login' className='text-blue-700 underline font-semibold'>Login now</Link></small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
