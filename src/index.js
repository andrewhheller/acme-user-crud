import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

import axios from 'axios';

const root = document.getElementById('root')

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState({ users }))
  }

  addUser(user) {
    return axios.post('/api/users', user)
      .then(response => response.data)
      .then(user => this.setState({ users: [...this.state.users, user] }))
      .catch(error => console.log(error))
  }

  removeUser(id){
    axios.delete(`api/users/${id}`)
      .then(response => response.data)
      .then(() => this.setState({ users: this.state.users.filter(user => user.id !== id) }))
      .catch(error => console.log(error))
  }

  fetchUser(id) {
    return axios.get(`api/users/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  updateUser(user) {
    return axios.put(`api/users/${user.id}`, user)
      .then(response => response.data)
      .then(user => {
        const users = this.state.users.map(_user => _user.id !== user.id ? _user : user);
        this.setState({ users })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { users } = this.state;

    return (
      <Router>
        <div>
          <Nav users={users} />
          <br />
          <hr />
          <Route exact path="/" render = {({ match }) => <Home users={users} match={match}/>} />
          <Switch>
            <Route path="/users/create" render = {({ history }) => <CreateUser addUser={this.addUser} history={history}/> }/>
            <Route exact path="/users/:id" render = {({ history, match }) => <UpdateUser history={history} id={match.params.id} fetchUser={this.fetchUser} updateUser={this.updateUser} />} />
          </Switch>
          <Route path="/users" render={() => <Users users={users} removeUser={this.removeUser} />} />
         </div>
      </Router>
    )
  }



}

render(<App />, root);
