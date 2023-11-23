import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const {user, logOut} =useContext(AuthContext)

const handleLogOuT = () => {
logOut()
.then(() => { })
.catch(error =>{
  console.error(error.message)
})
}



 
  return (
    <div>
      <div className="navbar bg-teal-600 text-primary-content w-full">
        <button className="btn btn-ghost text-xl font-bold text-slate-100">Auth-Content</button>
        <Link className="btn btn-ghost text-xl font-semibold"  to='/'>Home</Link>
       {user && <Link className="btn btn-ghost text-xl font-semibold"  to='/orders'>Orders</Link>}
      <Link className="btn btn-ghost text-xl font-semibold"  to='/login'>Login</Link>
      <Link className="btn btn-ghost text-xl font-semibold"  to='/register'>Register</Link>
      {
        user ? <div className='mx-auto'><span>{user.email} </span> 
        <button onClick={handleLogOuT} className="btn btn-xs mx-2 font-semibold">Sign out</button>
        </div>
        :
        <Link className="mx-auto btn btn-ghost text-xl font-semibold" to='/login'>Login</Link>
        
      }
      </div>
      
    </div>
  );
};

export default Header;
