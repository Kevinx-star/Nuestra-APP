import { useState } from 'react'

import { IonApp } from '@ionic/react'

import '@ionic/react/css/core.css'

import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  const [usuario, setUsuario] = useState('')

  return (

    <IonApp>

      {
        usuario === ''
          ? (
            <Login onLogin={setUsuario} />
          )
          : (
            <Home
              usuario={usuario}
              onLogout={() => setUsuario('')}
            />
          )
      }

    </IonApp>

  )
}

export default App