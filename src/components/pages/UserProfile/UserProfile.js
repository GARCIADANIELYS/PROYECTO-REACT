import './UserProfile.css';
import { useUserContext } from '../../context/UserContext';
import userGif from '../../../images/gif.gif';

const UserProfile = () => {

  const user = useUserContext();

  return (
    <div className='user-profile'>
      <h2 className='profile-title'>DATOS DE USUARIO</h2>

      <div className='user-card'>
      <p className='role'><strong>{user.role}</strong></p>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Apellido:</strong> {user.lastname}</p>
      <p><strong>Email:</strong></p>
      <p>{user.email}</p>
      </div>
      <img src={userGif} alt="gif" />
      <h2 className='profile-title'>¡IMPORTANTE!</h2>
      <h3 className='profile-title'>¡¡Recuerda no compartir tus datos de acceso!!</h3>
    </div>
  )
}
export default UserProfile;