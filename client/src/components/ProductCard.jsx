import React from 'react';

export default function ProductCard({product = {}}) {
  return (
    <div className="card" style={{width: "18rem", height: "36rem"}}>
      <img src={product.image} className="card-img-top" alt={product.title} style={{height: "20rem"}} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Precio: {product.money} {product.price}</p>
        <p className="card-text">Disponible: {product.stock}</p>
        <a href={product.link} target="_blank" className="btn btn-primary" rel="noreferrer">Ver más</a>
        <p className="card-text mt-3">{product.condition === "new" ? "(Nuevo)" : "(Usado)"}</p>
      </div>
    </div>
  );
}