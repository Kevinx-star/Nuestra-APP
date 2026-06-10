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
  IonText,
  IonFooter,
  IonToolbar,
  IonIcon
} from '@ionic/react'

import {
  locationOutline,
  callOutline,
  mailOutline,
  logoInstagram,
  logoTwitter,
  logoFacebook
} from 'ionicons/icons'

import './Login.css'

interface Props {
  onLogin: (usuario: string) => void
}

function Login({ onLogin }: Props) {

  const usuarios = [
    { usuario: 'admin',   clave: '123'  },
    { usuario: 'Kevin',   clave: '2008' },
    { usuario: 'Sergio',  clave: '2007' },
    { usuario: 'Daniela', clave: '1995' }
  ]

  const [usuario,  setUsuario]  = useState('')
  const [email,    setEmail]    = useState('')
  const [clave,    setClave]    = useState('')
  const [mensaje,  setMensaje]  = useState('')

  const iniciarSesion = () => {

    if (email.trim() === '') {
      setMensaje('El correo electrónico es obligatorio')
      return
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailValido) {
      setMensaje('Ingresa un correo electrónico válido')
      return
    }

    const encontrado = usuarios.find(
      u => u.usuario === usuario && u.clave === clave
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

        <h1 className="titulo-login">BIENVENIDO A CLEANTASK</h1>

        <IonCard className="card-login">
          <IonCardHeader>
            <IonCardTitle className="subtitulo-login">
              Inicio de Sesión
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <IonItem className="campo-login">
              <IonLabel position="stacked">Usuario</IonLabel>
              <IonInput
                value={usuario}
                onIonChange={(e) => setUsuario(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="campo-login">
              <IonLabel position="stacked">Correo electrónico</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="campo-login">
              <IonLabel position="stacked">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={clave}
                onIonChange={(e) => setClave(e.detail.value!)}
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
              <p className="mensaje-error">{mensaje}</p>
            </IonText>

          </IonCardContent>
        </IonCard>

      </IonContent>

      {/* ===== FOOTER ===== */}
      <IonFooter>
        <IonToolbar className="footer-toolbar">

          <div className="footer-container">

            {/* Información de la empresa */}
            <div className="footer-seccion">
              <h3 className="footer-titulo">CLEANTASK</h3>
              <p className="footer-descripcion">
                Aplicación de gestión de tareas diseñada para
                ayudarte a organizar tu día a día de forma
                simple y eficiente.
              </p>
            </div>

            {/* Contacto */}
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Contacto</h4>

              <p className="footer-item">
                <IonIcon icon={locationOutline} className="footer-icono" />
                Calle 123 #45-67, Bogotá, Colombia
              </p>

              <p className="footer-item">
                <IonIcon icon={callOutline} className="footer-icono" />
                +57 300 123 4567
              </p>

              <p className="footer-item">
                <IonIcon icon={mailOutline} className="footer-icono" />
                contacto@cleantask.com
              </p>

            </div>

            {/* Enlaces */}
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Enlaces</h4>

              <p className="footer-enlace">Acerca de nosotros</p>
              <p className="footer-enlace">Política de privacidad</p>
              <p className="footer-enlace">Términos y condiciones</p>
              <p className="footer-enlace">Soporte</p>
            </div>

            {/* Redes sociales */}
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Síguenos</h4>

              <div className="footer-redes">
                <IonIcon icon={logoInstagram} className="footer-red" />
                <IonIcon icon={logoFacebook} className="footer-red" />
                <IonIcon icon={logoTwitter} className="footer-red" />
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <p>© 2025 CLEANTASK — Todos los derechos reservados</p>
              <p>Desarrollado como proyecto universitario</p>
            </div>

          </div>

        </IonToolbar>
      </IonFooter>

    </IonPage>
  )
}

export default Login