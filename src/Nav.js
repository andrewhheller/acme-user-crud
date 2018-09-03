import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = ({ users }) => {
  const path = window.location.hash;

  return (
    <div className="grid-container">
      <Link to="/">
        {
          path === "#/" ? <button className="button selected">Home</button> :
          <button className="button">Home</button>
        }
      </Link>
      <Link to="/users">
        {
          path === "#/users" ? <button className="button selected">Users {users.length}</button> :
          <button className="button">Users {users.length}</button>
        }
      </Link>
      <Link to="/users/create">
        {
          path === "#/users/create" ? <button className="button selected">Add a User</button> :
          <button className="button">Add a User</button>
        }
      </Link>
      {/* <NavLink to="/" activeClassName="selected">
        <button className="button">Home</button>
      </NavLink> */}
    </div>
  )

}



export default Nav;
