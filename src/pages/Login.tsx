import { useState } from 'react'

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react'

import './Login.css'

interface Props {
  onLogin: (usuario: string) => void
}

function Login({ onLogin }: Props) {

  const usuarios = [
    {
      usuario: 'admin',
      clave: '123'
    },
    {
      usuario: 'john',
      clave: '456'
    }
  ]

  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [mensaje, setMensaje] = useState('')

  const iniciarSesion = () => {

    const encontrado = usuarios.find(
      u =>
        u.usuario === usuario &&
        u.clave === clave
    )

    if (encontrado) {
      onLogin(usuario)
    } else {
      setMensaje('Usuario o contraseña incorrectos')
    }
  }

  return (

    <IonPage>

      <IonContent className="ion-padding fondo-login">

        <h1 className="titulo-login">
          Sistema de Acceso
        </h1>

        <IonCard className="card-login">

          <IonCardHeader>

            <IonCardTitle className="subtitulo-login">
              Inicio de Sesión
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            <IonItem className="campo-login">

              <IonLabel position="stacked">
                Usuario
              </IonLabel>

              <IonInput
                value={usuario}
                onIonChange={(e) =>
                  setUsuario(e.detail.value!)
                }
              />

            </IonItem>

            <IonItem className="campo-login">

              <IonLabel position="stacked">
                Contraseña
              </IonLabel>

              <IonInput
                type="password"
                value={clave}
                onIonChange={(e) =>
                  setClave(e.detail.value!)
                }
              />

            </IonItem>

            <IonButton
              expand="block"
              className="boton-login"
              onClick={iniciarSesion}
            >
              Ingresar
            </IonButton>

            <IonText color="danger">
              <p className="mensaje-error">
                {mensaje}
              </p>
            </IonText>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  )
}

export default Login