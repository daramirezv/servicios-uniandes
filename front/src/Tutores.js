import React, { Component } from 'react';
import './Card.css';

class Tutor extends Component {
  constructor(props){
    super(props);
    this.state = {arreglo: []}
  }
   
  componentDidMount()
  {
    fetch("/getTutores")
    .then((response)=>{return response.json();})
    .then((json)=>this.setState({arreglo:json}));
  }
  render() {

  return this.state.arreglo.map((obje,i) => 
  (

  <div className = "container" key={i}>
    <div className="itemCard card" >
<div className="card-body">
  <h5 className="card-title">Nombre</h5>
  <p className="card-text">{obje.nombre}</p>
</div>
<div className="card-body">
  <h5 className="card-title">Materia</h5>
  <p className="card-text">{obje.materia}</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">{obje.descripcion}</li>
  <li className="list-group-item">{obje.costo}</li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">{obje.correo}</a>
</div></div></div>

  ))
}}

export class TutoresForm extends Component {
  constructor(props){
  super(props);
  this.render = this.render.bind(this);
 
  
  }
   
  ingresar()
  {
    const nombre = document.getElementById('exampleInputNombre1').value;
    const materia = document.getElementById('exampleInputMateria1').value;
    const descripcion = document.getElementById('exampleInputDescripcion1').value;
    const costo = document.getElementById('exampleInputCosto1').value;
    const correo = document.getElementById('exampleInputEmail1').value;

    fetch("/postTutor?nombre="+nombre+"&materia="+materia+"&descripcion="+descripcion+"&costo="+costo+"&correo="+correo,{
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
      <label htmlFor="exampleInputMateria1">Materia</label>
      <input type="text" className="form-control" id="exampleInputMateria1" placeholder="Materia"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputNombre1">Nombre</label>
      <input type="text" className="form-control" id="exampleInputNombre1" placeholder="Nombre"/>
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputDescripcion1">Descripcion</label>
      <input type="text" className="form-control" id="exampleInputDescripcion1" placeholder="Descripcion"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputCosto1">Costo</label>
      <input type="text" className="form-control" id="exampleInputCosto1" placeholder="Costo"/>
    </div>
    <button type="button" className="btn btn-primary" onClick={this.ingresar}>Submit</button>
  </form></div>
    )
  }
}

export default Tutor;