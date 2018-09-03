import React, { Component } from 'react';

class UpdateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUser(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.id !== this.props.id) {
      this.fetchUser(this.props.id);
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    const { updateUser } = this.props;

    event.preventDefault();
    updateUser({ id: this.props.id, name: this.state.name })
      .then(() => this.props.history.push('/users'))
      .catch(error => console.log(error))
  }

  fetchUser(id) {
    this.props.fetchUser(id)
      .then(user => this.setState({ name: user.name }))
      .catch(error => console.log(error))
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h2 className="sub-title sub-title-modify">Update User</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input className="input-box" type="text" name="name" value={name} onChange={this.handleChange}/>
          <button className="addEdit-user" type="submit">Update</button>
        </form>
        <hr />
      </div>
    )
  }



}


export default UpdateUser;
