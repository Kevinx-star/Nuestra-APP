import { useState } from 'react'
import { IonPage, IonContent, IonFooter, IonToolbar, IonIcon } from '@ionic/react'
import { locationOutline, callOutline, mailOutline, logoInstagram, logoTwitter, logoFacebook } from 'ionicons/icons'
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
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [filtro, setFiltro] = useState('todas')

  function agregarTarea() {
    if (nuevaTarea.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }])
    setNuevaTarea('')
  }

  function completarTarea(id: number) {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  function eliminarTarea(id: number) {
    setTareas(tareas.filter(t => t.id !== id))
  }

  function limpiarHechas() {
    setTareas(tareas.filter(t => !t.completada))
  }

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'hechas') return t.completada
    return true
  })

  return (
    <IonPage>
      <IonContent className="fondo-home ion-padding">

        <div className="card">

          {/* HEADER */}
          <div className="card-header">
            <h2>Mis Tareas</h2>
            <p>{tareas.filter(t => !t.completada).length} pendientes</p>
          </div>

          {/* BODY */}
          <div className="card-body">

            {/* INPUT */}
            <div className="input-row">
              <input
                className="mi-input"
                placeholder="Nueva tarea..."
                value={nuevaTarea}
                onChange={e => setNuevaTarea(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && agregarTarea()}
              />
              <button className="btn-add" onClick={agregarTarea}>+</button>
            </div>

            {/* FILTROS */}
            <div className="filtros">
              <button className={filtro === 'todas' ? 'activo' : ''} onClick={() => setFiltro('todas')}>Todas</button>
              <button className={filtro === 'pendientes' ? 'activo' : ''} onClick={() => setFiltro('pendientes')}>Pendientes</button>
              <button className={filtro === 'hechas' ? 'activo' : ''} onClick={() => setFiltro('hechas')}>Hechas</button>
            </div>

            {/* LISTA */}
            {tareasFiltradas.length === 0 && <p className="vacia">No hay tareas aquí 🎉</p>}
            {tareasFiltradas.map(tarea => (
              <div key={tarea.id} className="tarea-fila">
                <span className={tarea.completada ? 'tarea-completada' : ''}>{tarea.texto}</span>
                <button onClick={() => completarTarea(tarea.id)}>✅</button>
                <button onClick={() => eliminarTarea(tarea.id)}>🗑️</button>
              </div>
            ))}

          </div>

          {/* FOOTER CARD */}
          <div className="card-footer">
            <span>{tareas.filter(t => t.completada).length} de {tareas.length} completadas</span>
            <button className="btn-limpiar" onClick={limpiarHechas}>Limpiar hechas</button>
          </div>

          {/* CERRAR SESIÓN */}
          <div className="card-logout">
            <button className="btn-logout" onClick={onLogout}>Cerrar sesión</button>
          </div>

        </div>

      </IonContent>

      <IonFooter>
        <IonToolbar className="footer-toolbar">
          <div className="footer-container">
            <div className="footer-seccion">
              <h3 className="footer-titulo">CLEANTASK</h3>
              <p className="footer-descripcion">Aplicación de gestión de tareas para organizar tu día a día.</p>
            </div>
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Contacto</h4>
              <p className="footer-item"><IonIcon icon={locationOutline} /> Calle 123 #45-67, Bogotá</p>
              <p className="footer-item"><IonIcon icon={callOutline} /> +57 300 123 4567</p>
              <p className="footer-item"><IonIcon icon={mailOutline} /> contacto@cleantask.com</p>
            </div>
            <div className="footer-seccion">
              <h4 className="footer-subtitulo">Enlaces</h4>
              <p className="footer-enlace">Acerca de nosotros</p>
              <p className="footer-enlace">Política de privacidad</p>
              <p className="footer-enlace">Términos y condiciones</p>
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
              <p>© 2026 CLEANTASK — Todos los derechos reservados</p>
              <p>Desarrollado como proyecto universitario</p>
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
}

export default Home