import './Basket.css';
import image from '../../../images/mix.jpeg';

const Basket = () => {
  return (
    <div>
      <h1 className='basket-title'>¡SÚMALE A TU CESTA!</h1>
      <div className='kombu-image'>
        <img src={image} alt="background" />
        <img src={image} alt="background" />
      </div>

    </div>
  )
}

export default Basket;