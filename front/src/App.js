import React, { Component } from 'react';
import './index.css';
import Apuntes from './Apuntes';
import Comida from './comida';
import Eventos from './Eventos';
import Formularios from './Formularios';
import General from './General';
import Productos from './Productos';
import Tutor from './Tutor';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {estado:"tutor", carga:<Tutor/>}
        this.toggleEstadoTutor = this.toggleEstadoTutor.bind(this);
        this.toggleEstadoApuntes = this.toggleEstadoApuntes.bind(this);
        this.toggleEstadoComida = this.toggleEstadoComida.bind(this);
        this.toggleEstadoEventos = this.toggleEstadoEventos.bind(this);
        this.toggleEstadoFormularios = this.toggleEstadoFormularios.bind(this);
        this.toggleEstadoGeneral = this.toggleEstadoGeneral.bind(this);
        this.toggleEstadoProductos = this.toggleEstadoProductos.bind(this);
    }
    toggleEstadoTutor(){
        this.setState({estado: "tutor", carga:<Tutor/>})
    }
    toggleEstadoApuntes(){
        this.setState({estado: "apuntes", carga:<Apuntes/>})
    }
    toggleEstadoComida(){
        this.setState({estado: "comida", carga:<Comida/>})
    }
    toggleEstadoEventos(){
        this.setState({estado: "eventos", carga:<Eventos/>})
    }
    toggleEstadoFormularios(){
        this.setState({estado: "formularios", carga:<Formularios/>})
    }
    toggleEstadoGeneral(){
        this.setState({estado: "general", carga:<General/>})
    }
    toggleEstadoProductos(){
        this.setState({estado: "productos", carga:<Productos/>})
    }

    render() {
      return (<div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" id = "tituloTutor" href="#" onClick = {this.toggleEstadoTutor}>Tutor <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloComida" href="#" onClick = {this.toggleEstadoComida}>Comida</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloformularios" href="#" onClick = {this.toggleEstadoFormularios}>formularios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloEventos" href="#" onClick = {this.toggleEstadoEventos}>Eventos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloProductos" href="#" onClick = {this.toggleEstadoProductos}>Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloApuntes" href="#" onClick = {this.toggleEstadoApuntes}>Apuntes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id = "tituloGeneral" href="#" onClick = {this.toggleEstadoGeneral}>General</a>
          </li>
        </ul>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModalLabel">Log in</button>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registroModalLabel">Registro</button>
      </div>
    </nav>
    
    <div id = "documento">
      <div className = "container">
          <h1 id = "tituloPagina">{this.state.estado}</h1>
      </div>
    </div>

    <div>{this.state.carga}</div>

{/*<div className="modal fade" id="loginModalLabel" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">Log in</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Cuenta:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label htmlFor="contra-text" className="col-form-label">Contraseña:</label>
            <input type="text" className="form-control" id="contra-text"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-primary">Log in</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="registroModalLabel" tabIndex="-1" role="dialog" aria-labelledby="registroModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="registroModalLabel">Registro</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Cuenta:</label>
              <input type="text" className="form-control" id="recipient-name"/>
            </div>
            <div className="form-group">
              <label htmlFor="contra-text" className="col-form-label">Contraseña:</label>
              <input type="text" className="form-control" id="contra-text"/>
            </div>
            <div className="form-group">
                <label htmlFor="correo-text" className="col-form-label">Correo:</label>
                <input type="text" className="form-control" id="correo-text"/>
              </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-primary">Registro</button>
        </div>
      </div>
    </div>
    </div>*/}</div>)
    }
  }

export default App;