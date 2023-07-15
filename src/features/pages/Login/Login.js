import { useState } from 'react';
import Button from '../../core/Button/Button';
import './Login.css';

const initial_state = {
  email: '',
  password: ''
};

const Login = ({loginUser}) => {

  const [formData, setFormData] = useState(initial_state);

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormData({...formData, [name]: value });
  }

  const handleClick = () => {
    loginUser(formData);
    console.log("¡El botón funciona!");
  }  

  return (
    <div className='main-login-div'>
      <h1 className='login-title'>¡REGÍSTRATE Y FORMA PARTE DEL MUNDO KOMBUCHA!</h1>
      <form className='form-div' onSubmit={(ev) => ev.preventDefault()}>
        <label className='email-label' htmlFor="email">Email:</label>
        <input 
        className='input-field' 
        type="text" 
        id='email' 
        name='email' 
        onInput={handleInput}
        value={formData.email}
        placeholder='email@ejemplo.com'/>

        <label className='password-label' htmlFor="password">Contraseña:</label>
        <input className='input-field' 
        type="password" 
        id='password' 
        name='password' 
        onInput={handleInput}
        value={formData.password}
        placeholder='74b8gEn65' />

        <Button color="pink" text="iniciar sesión" onClick={handleClick} />

      </form>
    </div>
  )
}

export default Login;