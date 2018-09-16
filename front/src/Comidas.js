import React, { Component } from 'react';
import './Card.css';


class Comida extends Component {
  constructor(props){
    super(props);
    this.state = {arreglo: []}
  }
   
  componentDidMount()
  {
    fetch("/getComidas")
    .then((response)=>{return response.json();})
    .then((json)=>this.setState({arreglo:json}));
  }

  render() {

    return this.state.arreglo.map((obje,i) =>  ( 

      <div className = "container" key = {i}><div className="itemCard card" >
<img className="card-img-top" height = "400em" src={obje.imagen} width ="100%" alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">Nombre vendedor</h5>
  <p className="card-text">{obje.nombre}</p>
</div>
<div className="card-body">
  <h5 className="card-title">Producto</h5>
  <p className="card-text">{obje.producto}</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">{obje.descripcion}</li>
  <li className="list-group-item">{obje.sitio}</li>
  <li className="list-group-item">{obje.costo}</li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">{obje.correo}</a>
</div>
</div> </div>

    ))
  }
}

export class ComidasForm extends Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
  }
   
  ingresar()
  {
    const imagen = document.getElementById('exampleInputImagen1').value;
    const nombre = document.getElementById('exampleInputNombre1').value;
    const producto = document.getElementById('exampleInputProducto1').value;
    const descripcion = document.getElementById('exampleInputDescripcion1').value;
    const sitio = document.getElementById('exampleInputSitio1').value;
    const costo = document.getElementById('exampleInputCosto1').value;
    const correo = document.getElementById('exampleInputEmail1').value;

    fetch("/postProducto?imagen="+imagen+"&nombre="+nombre+"&producto="+producto+"&descripcion="+descripcion+"&sitio="+sitio+"&costo="+costo+"&correo="+correo,{
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
      <label htmlFor="exampleInputImagen1">Imagen</label>
      <input type="text" className="form-control" id="exampleInputImagen1" placeholder="Imagen"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputNombre1">Nombre</label>
      <input type="text" className="form-control" id="exampleInputNombre1" placeholder="Nombre"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputProducto1">Producto</label>
      <input type="text" className="form-control" id="exampleInputProducto1" placeholder="Producto"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputDescripcion1">Descripcion</label>
      <input type="text" className="form-control" id="exampleInputDescripcion1" placeholder="Descripcion"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputSitio1">Sitio</label>
      <input type="text" className="form-control" id="exampleInputSitio1" placeholder="Sitio"/>
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

export default Comida;