import React, { useState } from 'react';
import './Products.css'
import Button from '../../core/Button/Button';
import eco from '../../../images/logoeco.png';
import { BiCartAdd } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Products = ({ characters, addToList }) => {

  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleClick = (ev) => {
    ev.preventDefault();
    addToList(ev.target.id);
    setClickedButtonId(ev.target.id)
  }

  return (
    <ul className='products'>
      {characters.map((char) => {
        return (
          <li className='product-li' key={char.id}>
          <Link to={`/detail/${char.id}`}>
          <img className='product-image' src={char.image} alt={char.name} />
          </Link>
            <Link className='product-link' to={`/detail/${char.id}`}>
              <h4 className='product-name'>{char.name}</h4>
            </Link>
            <p className='product-description'>*{char.description}.</p>
            <img className='product-eco-logo' src={eco} alt={char.name} />
            <h4 className='product-price'>{char.price} €</h4>
            <Button
            color={clickedButtonId === char.id ? 'clicked-button' : 'green'}
            icon={<BiCartAdd />} 
            text="añadir al carrito" 
            id={char.id} 
            onClick={handleClick} />
          </li>
        )
      })}
      </ul>
  )
}

export default Products;