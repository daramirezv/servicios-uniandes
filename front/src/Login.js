import React, { Component } from 'react';
import './Card.css';
import {Button} from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleChange(event) {
      this.setState({username: event.target.value});
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

   handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + ' with this password: ' + this.state.password);
    event.preventDefault();
    fetch('/postUsuario?usuario='+ this.state.username + "&password=" + this.state.password, {
    method: 'POST'
  }).then(console.log("done"));
    console.log("done");
    window.location.reload();
  }
   
  render() {
    return (
      <div class="container">
        <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
        <form class="form-signin" onSubmit={this.handleSubmit}>
          <label for="inputEmail" class="sr-only">Username</label>
          <input type="text" username={this.state.username} onChange={this.handleChange} id = "inputEmail"
            className="form-control"
            placeholder="Username" />
          <br/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            value={this.state.passsword}
            onChange={this.handlePasswordInput}
            id = "inputPassword"
            className="form-control"
            placeholder="Password" />
          <br/>
          <br/>
          <br/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
        </div>
    );
  }
};

export default Login;