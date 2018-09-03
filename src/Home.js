import React from 'react';

const Home = ({ users }) => {

  return (
    <div>
      <h2 className="sub-title">Home</h2>
      <p>Welcome to Acme Users!  We have {users.length} users</p>
    </div>
  )


}

export default Home;
