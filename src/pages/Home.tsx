import {useState} from 'react'
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

  return (
    <IonPage>

      <IonContent className="ion-padding fondo-home">

        <h1 className="titulo-home">
          Hola, {usuario}!  
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

            <IonCard>
            <IonCardHeader>
          <IonCardTitle>Mis Tareas Guillermo</IonCardTitle>
            </IonCardHeader>
          <IonCardContent>
            {tareas.length === 0 && (
              <p>No tienes tareas aún</p>
            )}
            {tareas.map(tarea =>(
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
              </IonPage>
              )
              }
              

          

export default Home