import React, { Component } from 'react';
import './Card.css';

const carddd = (<div className = "container"><div className="itemCard card" >
<div className="card-body">
  <h5 className="card-title">Nombre vendedor</h5>
  <p className="card-text">David Ramirez</p>
</div>

<ul className="list-group list-group-flush">
  <li className="list-group-item">Notas arquitectura empresarial</li>
  <li className="list-group-item"><a href="#" className="card-link">www.pagina.com</a></li>
</ul>
<div className="card-body">
  <a href="#" className="card-link">Enviar correo</a>
</div>
</div> </div>);

const arreglo = [carddd, carddd,carddd,carddd,carddd];
const listar = arreglo.map((objeto,i) =>(<div key={"objeto"+i}>{objeto}</div>));

class Apuntes extends Component {
  render() {
    return (<div>{listar}</div>);
  }
}

export default Apuntes;