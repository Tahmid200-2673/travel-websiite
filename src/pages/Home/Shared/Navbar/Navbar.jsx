import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-end">
      <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
    </div>
  );
};

export default Navbar;
