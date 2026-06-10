import {useState} from 'react'
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

interface Tarea {
  id: number
  texto: string
  completada: boolean
}

interface Props {
  usuario: string
  onLogout: () => void
}
function Home({ usuario, onLogout }: Props) {
  const [tareas, setTareas] = useState<Tarea[]>([
{id:1, texto: 'Tarea 1', completada: false}
  ])
  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [filtro, setFiltro] = useState<string>('todas')

  function agregarTarea() {
    if (nuevaTarea === '') return
    const tarea: Tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada:false
    }
    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }
function eliminarTarea(id: number) {
  setTareas(tareas.filter(t=>t.id !== id))
}
function completarTarea(id: number) {
  setTareas(tareas.map(t=>t.id === id ? {...t, completada: !t.completada} : t))
}
function limpiarHechas() {
  setTareas(tareas.filter(t => !t.completada))
}

  // Tareas filtradas según el botón seleccionado
  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'hechas') return t.completada
    return true
  })

  return (
    <IonPage>

      <IonContent className="ion-padding fondo-home">

        <h1 className="titulo-home">
          CLEANTASK, {usuario}!  
        </h1>
        <p>estas son tus tareas</p>
        <IonCard>
          <IonCardContent>
            <input
            className="mi-input"
            placeholder="Escribe una tarea..."
            value={nuevaTarea}
            onChange={e => setNuevaTarea(e.target.value)}
            />
            <IonButton onClick={agregarTarea}>Agregar tarea
            </IonButton>
            </IonCardContent>
            </IonCard>

            {/* Botones de filtro */}
            <div className="filtros">
              <IonButton size="small" fill={filtro === 'todas' ? 'solid' : 'outline'} onClick={() => setFiltro('todas')}>
                Todas
              </IonButton>
              <IonButton size="small" fill={filtro === 'pendientes' ? 'solid' : 'outline'} onClick={() => setFiltro('pendientes')}>
                Pendientes
              </IonButton>
              <IonButton size="small" fill={filtro === 'hechas' ? 'solid' : 'outline'} onClick={() => setFiltro('hechas')}>
                Hechas
              </IonButton>
              <IonButton size="small" color="medium" onClick={limpiarHechas}>
                Limpiar hechas
              </IonButton>
            </div>

            <IonCard>
            <IonCardHeader>
          <IonCardTitle>Mis Tareas Guillermo</IonCardTitle>
            </IonCardHeader>
          <IonCardContent>
            {tareasFiltradas.length === 0 && (
              <p>No hay tareas aquí</p>
            )}
            {tareasFiltradas.map(tarea =>(
              <div key={tarea.id} className="tarea-fila">
                <span className={tarea.completada ? 'tarea-completada' : ''}>
                  {tarea.texto}
                  </span>
                <IonButton size ="small" 
                color="success"
                onClick={() => completarTarea(tarea.id)}>
                  v
                  </IonButton>
                  
                  <IonButton size="small"
                  color="danger"
                  onClick={() => eliminarTarea(tarea.id)}>
                    x
                  </IonButton>
                    
                  </div>
            ))}

          </IonCardContent>


          <IonCard>
          <IonButton expand="block" color="danger" onClick={onLogout}>
            cerrar sesion </IonButton>
              </IonCard>
              </IonCard>
              </IonContent>

      {/* ===== FOOTER ===== */}
      <IonFooter>
        <IonToolbar className="footer-toolbar">
          <div className="footer-container">
            <div className="footer-seccion">
              <h3 className="footer-titulo">CLEANTASK</h3>
              <p className="footer-descripcion">
                Aplicación de gestión de tareas diseñada para
                ayudarte a organizar tu día a día de forma
                simple y eficiente.
              </p>
            </div>
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
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Enlaces</h4>
              <p className="footer-enlace">Acerca de nosotros</p>
              <p className="footer-enlace">Política de privacidad</p>
              <p className="footer-enlace">Términos y condiciones</p>
              <p className="footer-enlace">Soporte</p>
            </div>
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Síguenos</h4>
              <div className="footer-redes">
                <IonIcon icon={logoInstagram} className="footer-red" />
                <IonIcon icon={logoFacebook} className="footer-red" />
                <IonIcon icon={logoTwitter} className="footer-red" />
              </div>
            </div>
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