import React, { Component } from 'react';

class CreateUser extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    const { addUser } = this.props;

    event.preventDefault();
    addUser(this.state)
      .then(() => this.props.history.push('/users'))
      .catch(error => console.log(error));
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h2 className="sub-title sub-title-modify" >Create User</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input className="input-box" type="text" name="name" onChange={this.handleChange}/>
          <button className="addEdit-user" disabled={!name} type="submit">Add</button>
        </form>
        <hr />
      </div>
    )
  }


}

export default CreateUser;
