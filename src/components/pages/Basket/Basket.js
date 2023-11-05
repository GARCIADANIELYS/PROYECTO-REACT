import './Basket.css';
import image from '../../../images/mix.jpeg';
import eco from '../../../images/logoeco.png';
import Button from '../../core/Button/Button';

const Basket = ({ productList, deleteFromList }) => {

  const handleDelete = (id) => {
    const updatedProductList = productList.filter(product => product.id !== id);
    deleteFromList(updatedProductList);
  }

  return (
    <div>
      <h1 className='basket-title'>¡SÚMALE A TU CESTA!</h1>
      <div className='kombu-image'>
        <img src={image} alt="background" />
        <img src={image} alt="background" />
      </div>

      {productList.length === 0 ? (
        <h2 className='empty-basket-title'>¡TU CESTA ESTÁ VACÍA!</h2>
      ) : (
        <ul className='basket-products'>
          {productList.map((product) => {
            return (
              <li key={product.id} className='basket-product-li'>
                <img className='basket-product-image' src={product.image} alt={product.name} />
                <h4 className='basket-product-name'>{product.name}</h4>
                <img className='basket-product-eco-logo' src={eco} alt={product.name} />
                <h4 className='product-price'>{product.price} €</h4>
                <Button color="red" text="eliminar" onClick={() => handleDelete(product.id)} />
              </li>
            )
          })}
        </ul>
      )}

    </div>
  )
}

export default Basket;