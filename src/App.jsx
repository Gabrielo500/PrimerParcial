import { useState } from 'react'
import Form from './Form'
import Card from './Card'


let autoId = 0

const App = () => {
  const [datos, setDatos] = useState()

function handleSubmit (datos) {
    setDatos(datos)
  }

  return (
    <div>
      <h2>Formulario</h2>
      <Form onSubmit={handleSubmit} />
      {datos && (
        <div className="submitted-data">
          <Card data={datos}/>
        </div>
      )}
      </div>
  )
}

export default App

