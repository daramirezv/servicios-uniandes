import React, { Component } from 'react';
import './Card.css';

const carddd = (<div className = "container"><div className="itemCard card" >
<img className="card-img-top" height = "400em" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Hamburguesa_%28Plato_combinado%29.jpg" width ="100%" alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">Nombre vendedor</h5>
  <p className="card-text">David Ramirez</p>
</div>
<div className="card-body">
  <h5 className="card-title">Producto</h5>
  <p className="card-text">Hamburguesa</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">Hamburgesa con papas y gaseosa grande</li>
  <li className="list-group-item">Ml515</li>
  <li className="list-group-item">$12000</li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">Enviar correo</a>
</div>
</div> </div>);

const arreglo = [carddd, carddd,carddd,carddd,carddd];
const listar = arreglo.map((objeto,i) =>(<div key={"objeto"+i}>{objeto}</div>));

class Comida extends Component {
  render() {
    return (<div>{listar}</div>);
  }
}

export default Comida;