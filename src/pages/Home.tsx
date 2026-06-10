import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
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

import './Home.css'

interface Props {
  usuario: string
  onLogout: () => void
}

function Home({ usuario, onLogout }: Props) {

  return (

    <IonPage>

      <IonContent className="ion-padding fondo-home">

        <h1 className="titulo-home">
          CLEANTASK
        </h1>

        <IonCard className="card-home">

          <IonCardHeader>

            <IonCardTitle>
              Bienvenido: {usuario}
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            <p className="texto-home">

            </p>

            <ul className="lista-home">

            </ul>

            <IonButton
              color="danger"
              className="boton-logout"
              onClick={onLogout}
            >
              Cerrar sesión
            </IonButton>

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

export default Home