import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users, removeUser }) => {

  return (
    <div>
      <h2 className="sub-title">Users</h2>
      <ul className="grid-container-users">
        {
          users.map(user => {
            return (
              <li className="user" key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                <button className="grid-item remove-user" onClick={() => removeUser(user.id)}>x</button>
                <br />
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}

export default Users;
