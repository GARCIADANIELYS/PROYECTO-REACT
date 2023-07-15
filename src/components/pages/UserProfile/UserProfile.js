// import NotFound from '../../NotFound';
import './UserProfile.css';

const UserProfile = ({user}) => {

  return (
    <div>
        <h2>DATOS DE USUARIO</h2>
        <h3>Nombre: {user.name}</h3>
        <h3>Nombre: {user.lastname}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Cargo: {user.role}</h3>
    </div>
  )

/*   if(!user) {
    return (
      <NotFound />
    )
  }else{
    return (
      <div>
          <h2>DATOS DE USUARIO</h2>
          <h3>Nombre: {user.name}</h3>
          <h3>Nombre: {user.lastname}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Cargo: {user.role}</h3>
      </div>
    )
  } */
}
export default UserProfile;