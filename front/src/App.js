import React, { Component } from 'react';
import './index.css';
import Apuntes from './Apuntes';
import Comida from './Comidas';
import Eventos from './Eventos';
import Formularios from './Formularios';
import General from './General';
import Productos from './Productos';
import Tutor from './Tutores';
import Login from './Login';
import {ApuntesForm} from './Apuntes';
import {ComidasForm} from './Comidas';
import {EventosForm} from './Eventos';
import {FormulariosForm} from './Formularios';
import {GeneralForm} from './General';
import {ProductosForm} from './Productos';
import {TutoresForm} from './Tutores';
import {Button} from 'react-bootstrap';

class App extends Component {
    constructor(props,context){
        super(props,context);
        this.state = { carga:<Login/>};
        this.toggleEstadoTutor = this.toggleEstadoTutor.bind(this);
        this.toggleEstadoApuntes = this.toggleEstadoApuntes.bind(this);
        this.toggleEstadoComida = this.toggleEstadoComida.bind(this);
        this.toggleEstadoEventos = this.toggleEstadoEventos.bind(this);
        this.toggleEstadoFormularios = this.toggleEstadoFormularios.bind(this);
        this.toggleEstadoGeneral = this.toggleEstadoGeneral.bind(this);
        this.toggleEstadoProductos = this.toggleEstadoProductos.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
  
    handleShow() {
      if(!this.state.showForm)
      this.setState({ showForm: true })
      else
      this.setState({ showForm: false })
    }
    toggleEstadoTutor(){
        this.setState({estado: "Tutor", carga:<Tutor/>, form: <TutoresForm/>, showForm:false})
    }
    toggleEstadoApuntes(){
        this.setState({estado: "Apuntes", carga:<Apuntes/>, form: <ApuntesForm/>, showForm:false})
    }
    toggleEstadoComida(){
        this.setState({estado: "Comida", carga:<Comida/>, form: <ComidasForm/>, showForm:false})
    }
    toggleEstadoEventos(){
        this.setState({estado: "Eventos", carga:<Eventos/>, form: <EventosForm/>, showForm:false})
    }
    toggleEstadoFormularios(){
        this.setState({estado: "Formularios", carga:<Formularios/>, form: <FormulariosForm/>, showForm:false})
    }
    toggleEstadoGeneral(){
        this.setState({estado: "General", carga:<General/>, form: <GeneralForm/>, showForm:false})
    }
    toggleEstadoProductos(){
        this.setState({estado: "Productos", carga:<Productos/>, form: <ProductosForm/>, showForm:false})
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
          <Button type="button" bsStyle="primary" className="btn btn-primary" className="xd" onClick ={this.handleShow}>Post</Button>
          <button type="button" className="btn btn-primary">Log in</button>
          <button type="button" className="btn btn-primary" >Registro</button>
      </div>
    </nav>
    <div id = "documento">
      <div className = "container">
          <h1 id = "tituloPagina">{this.state.estado}</h1>
          <hr/>
      </div>
    </div>
    
    
    { this.state.showForm ? this.state.form : null }
    
    <div>{this.state.carga}</div>

</div>)
    }
  }

export default App;