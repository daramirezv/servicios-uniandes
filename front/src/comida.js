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

export default Comida;