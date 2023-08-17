//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario



function Card(user) {
  return (
    <div className= 'Card'>
      <h3>Valores ingresados:</h3>
      <ul>

          <li className='card' key={user.id}>
            <p>Nombre: {user.data.nombre}</p>
            <p>Bebida favorita: {user.data.bebida}</p>
          </li>

      </ul>
    </div>
  );
}

export default Card;
