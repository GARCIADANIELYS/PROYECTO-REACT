import { Link } from 'react-router-dom';
import './Header.css';
import kombuchaLogo from '../../../images/logo.png';

const Header = () => {
  return (
    <header>
      <nav className='nav-items'>
        <img src={kombuchaLogo} alt='kombucha page' />
        <ul className='navigation-list'>
          <li>
            <Link className='nav-link' to="/">HOME</Link>
          </li>
          <li>
            <Link className='nav-link' to="/products">PRODUCTOS</Link>
          </li>
          <li>
            <Link className='nav-link' to="/basket">CESTA</Link>
          </li>
          <li>
            <Link className='nav-link' to="/userprofile">PERFIL</Link>
          </li>
          <li>
            <Link className='nav-link' to="/login">ENTRAR</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;