import { Link } from 'react-router-dom';
import './Header.css';
import kombuchaLogo from '../../../images/logo.png';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { FiHome } from 'react-icons/fi';
import { LuLogIn } from 'react-icons/lu';
import { PiBeerBottleLight } from 'react-icons/pi';
import { AiOutlineUser } from'react-icons/ai';

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
            <Link className='nav-link' to="/login">ENTRAR</Link>
          </li>
          <li>
            <Link className='nav-link' to="/userprofile">PERFIL</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;