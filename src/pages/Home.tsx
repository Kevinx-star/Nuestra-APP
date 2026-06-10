import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react'

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
          Página Principal
        </h1>

        <IonCard className="card-home">

          <IonCardHeader>

            <IonCardTitle>
              Bienvenido: {usuario}
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            <p className="texto-home">
              Esta es una aplicación de ejemplo creada con Ionic React.
            </p>

            <ul className="lista-home">
              <li>Noticias</li>
              <li>Usuarios</li>
              <li>Productos</li>
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

    </IonPage>
  )
}

export default Home