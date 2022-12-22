import React, { useState } from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true)
  
  const adjustInStock = () => {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={adjustInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={adjustInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
