import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ users }) => {

  return (
    <div className="grid-container">
      <Link to="/">
        <button className="button" >Home</button>
      </Link>
      <Link to="/users">
        <button className="button" >Users ({users.length})</button>
      </Link>
      <Link to="users/create">
        <button className="button" >Add a User</button>
      </Link>
      <hr />
    </div>
  )

}



export default Nav;
