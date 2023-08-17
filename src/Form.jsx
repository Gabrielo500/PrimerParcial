import { useState } from "react";


const Form = (props) => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('')
  const [bebida, setBebida] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 3) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else if (bebida.length < 6) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else {
      props.onSubmit({ nombre, bebida })
      setNombre('')
      setBebida('')
      setMensajeError('')
    }
  }
          return (
            <div>
              <h1>Elige tu Bebida Favorita</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Nombre:
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Bebida favorita:
                  <input
                    type='text'
                    value={bebida}
                    onChange={(event) => setBebida(event.target.value)}
                  />
                </label>
                <br />
                <button type='submit'>Submit</button>
              </form>
              {mensajeError && <p>{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;