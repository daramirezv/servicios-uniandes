import React, { Component } from 'react';
import './Card.css';
import {Button} from 'react-bootstrap';

class Apuntes extends Component {
  constructor(props){
    super(props);
    this.state = {arreglo: []}
  }
   
  componentDidMount()
  {
    fetch("/getApuntes")
    .then((response)=>{return response.json();})
    .then((json)=>this.setState({arreglo:json}));
  }

  render() {

    return this.state.arreglo.map((obje,i) =>  ( 

      <div className = "container" key = {i}><div className="itemCard card" >
<div className="card-body">
  <h5 className="card-title">Nombre</h5>
  <p className="card-text">{obje.nombre}</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">{obje.descripcion}</li>
  <li className="list-group-item"><a href="#" className="card-link">{obje.sitio}</a></li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">{obje.correo}</a>
</div>
</div> </div>

    ))
  }
}

export class ApuntesForm extends Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
  }
   
  ingresar(correo1)
  {
    const nombre = document.getElementById('exampleInputNombre1').value;
    const descripcion = document.getElementById('exampleInputDescripcion1').value;
    const sitio = document.getElementById('exampleInputDireccion1').value;
    const correo = document.getElementById('exampleInputEmail1').value;

    fetch("/postProducto?nombre="+nombre+"&descripcion="+descripcion+"&sitio="+sitio+"&correo="+correo,{
      method: 'POST'
    }).then(console.log("done"));
    console.log("done");
    window.location.reload();
  }

  render() {

    return (<div className = "container"><form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Correo</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputNombre1">Nombre</label>
      <input type="text" className="form-control" id="exampleInputNombre1" placeholder="Nombre"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputDireccion1">Direccion web</label>
      <input type="text" className="form-control" id="exampleInputDireccion1" placeholder="Direccion"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputDescripcion1">Descripcion</label>
      <input type="text" className="form-control" id="exampleInputDescripcion1" placeholder="Descripcion"/>
    </div>
    <button type="button" className="btn btn-primary" onClick={this.ingresar("null")}>Submit</button>
  </form></div>
    )
  }
}

export default Apuntes;