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
    constructor(props,context){
        super(props,context);
        this.state = {estado:"tutor", carga:<Tutor/>, show:false};
        this.toggleEstadoTutor = this.toggleEstadoTutor.bind(this);
        this.toggleEstadoApuntes = this.toggleEstadoApuntes.bind(this);
        this.toggleEstadoComida = this.toggleEstadoComida.bind(this);
        this.toggleEstadoEventos = this.toggleEstadoEventos.bind(this);
        this.toggleEstadoFormularios = this.toggleEstadoFormularios.bind(this);
        this.toggleEstadoGeneral = this.toggleEstadoGeneral.bind(this);
        this.toggleEstadoProductos = this.toggleEstadoProductos.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
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

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

    <div>{this.state.carga}</div>





</div>)
    }
  }

export default App;