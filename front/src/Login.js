import React, { Component } from 'react';
import './Card.css';
import {Button} from 'react-bootstrap';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
     this.entralogin = this.entralogin .bind(this);
    this.salelogin = this.salelogin.bind(this);
    this.manejoLogin = this.manejoLogin.bind(this);
  }

  handleChange(event) {
      this.setState({username: event.target.value});
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

   entralogin () {
    this.setState({ registro: true });
  }

  salelogin () {
    this.setState({ registro: false });
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

  manejoLogin () {
    fetch("/getUsuario?usuario=" + this.state.username + "&password=" + this.state.password)
      .then((res) => {
        return res.json();
      })
      .then((usuario) => {
        if (usuario.usuario === undefined) {
          
          let err = { mensaje: usuario.error, tipo: "danger" };
          this.props.error(err);
        } else {
          window.location.reload();
          //callback al padre para que sepa el usuariologeado
          this.props.logear(usuario);

        }
      })
      .catch((err) => console.log(err));
  }
   
  render() {
    return (
      <div class="container">
        <h1 class="h3 mb-3 font-weight-normal">Por favor regístrate:</h1>
        <form class="form-signin" onSubmit={this.handleSubmit}>
          <label for="inputEmail" class="sr-only">Username</label>
          <input type="text" username={this.state.username} onChange={this.handleChange} id = "inputEmail"
            className="form-control"
            placeholder="Username" />
          <br/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" value={this.state.passsword} onChange={this.handlePasswordInput} id = "inputPassword" className="form-control" placeholder="Password" />
          <br/>
          <br/>
          <br/>
          <button class="btn btn-lg btn-primary btn-block" type="submit" onClick ={this.handleSubmit}>Regístrase</button>
        </form>
         <hr/> 
          <h1 class="h3 mb-3 font-weight-normal">¿ya tienes una cuenta? inicia sesión:</h1>
          <form class="form-signin" onSubmit={this.manejoLogin}>
          <label for="inputEmail2" class="sr-only">Username</label>
          <input type="text" username={this.state.username} onChange={this.handleChange} id = "inputEmail2"
            className="form-control"
            placeholder="Username" />
          <br/>
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="password" value={this.state.passsword} onChange={this.handlePasswordInput} id = "inputPassword2" className="form-control" placeholder="Password" />
          <br/>
          <br/>
          <br/>
          <button class="btn btn-lg btn-primary btn-block" type="submit" onClick ={this.manejoLogin}>Iniciar sesión</button>
        </form>
          <br/>
          <br/>
          <br/>
        </div>

    );
  }
};

export default Login;