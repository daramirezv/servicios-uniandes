import React, { Component } from 'react';
import './Card.css';

const carddd = (<div className = "container"><div className="itemCard card" >
<div className="card-body">
  <h5 className="card-title">Nombre vendedor</h5>
  <p className="card-text">David Ramirez</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">Encuesta sobre cigarrillo</li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">Enviar correo</a>
</div>
</div> </div>);

const arreglo = [carddd, carddd,carddd,carddd,carddd];
const listar = arreglo.map((objeto,i) =>(<div key={"objeto"+i}>{objeto}</div>));

class General extends Component {
  render() {
    return (<div>{listar}</div>);
  }
}

export default General;